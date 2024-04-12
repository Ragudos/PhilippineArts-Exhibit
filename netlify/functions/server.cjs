"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// server.ts
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(server_exports);

// server/init.ts
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));

// server/redirect.ts
var handleRedirects = (req, res, next) => {
  const isUrlUnclean = req.path.endsWith("/") && req.path.length > 1;
  if (isUrlUnclean) {
    const query = req.url.slice(req.path.length);
    const safePath = req.path.slice(0, -1).replace(/\/+/g, "/");
    res.redirect(301, safePath + query);
    return;
  }
  next();
};

// server/generate-nonce.ts
var import_node_crypto = __toESM(require("node:crypto"));
function generateNonce(_req, response, next) {
  const nonce = import_node_crypto.default.randomBytes(16).toString("hex");
  response.locals["cspNonce"] = nonce;
  next();
}

// server/security.ts
var import_helmet = __toESM(require("helmet"));
var connectSrc = process.env.NODE_ENV == "development" ? "ws:" : null;
var security = (0, import_helmet.default)({
  contentSecurityPolicy: {
    directives: {
      "connect-src": [connectSrc, "'self'"].filter(Boolean),
      "script-src": [
        "'self'",
        "'strict-dynamic'",
        (_, res) => {
          return `'nonce-${res.locals.cspNonce}'`;
        }
      ],
      "font-src": ["'self'", "https://fonts.gstatic.com"],
      "media-src": [
        "'self'",
        "data:",
        "blob:",
        "https://openaccess-api.clevelandart.org",
        "https://openaccess-cdn.clevelandart.org"
      ],
      "img-src": [
        "'self'",
        "data:",
        "blob:",
        "https://openaccess-cdn.clevelandart.org"
      ]
    }
  }
});

// server/logger.ts
var import_morgan = __toESM(require("morgan"));
var loggerMode = process.env.NODE_ENV == "development" ? "dev" : "tiny";
var logger = (0, import_morgan.default)(loggerMode);

// server/init.ts
var app = (0, import_express.default)();
app.disable("x-powered-by");
app.use(
  "/build",
  import_express.default.static("public/build", {
    immutable: true,
    maxAge: "1y"
  })
);
app.use(
  import_express.default.static("public", {
    // 30 minutes
    maxAge: 1e3 * 60 * 30
  })
);
app.use(handleRedirects);
app.use(generateNonce);
app.use(security);
app.use(logger);
app.use((0, import_compression.default)());

// server/load-assets.ts
var import_chokidar = __toESM(require("chokidar"));
var import_node_path2 = __toESM(require("node:path"));
var import_express2 = require("@remix-run/express");

// server/get-server.ts
var import_node_path = __toESM(require("node:path"));
function getServer() {
  const build_dir = import_node_path.default.join(process.cwd(), "build");
  for (const key in require.cache) {
    if (key.startsWith(build_dir)) {
      delete require.cache[key];
    }
  }
  return require(build_dir);
}

// server/load-context.ts
var getLoadContext = (_req, res) => {
  return {
    cspNonce: res.locals.cspNonce
  };
};

// server/load-assets.ts
var import_node = require("@remix-run/node");
var isInProduction = process.env.NODE_ENV == "production";
function createDevRequestHandler(initialBuild) {
  let build = initialBuild;
  const build_dir = import_node_path2.default.join(process.cwd(), "build");
  const build_version_dir = import_node_path2.default.join(build_dir, "version.txt");
  function handleServerUpdate() {
    build = getServer();
    (0, import_node.broadcastDevReady)(build);
  }
  import_chokidar.default.watch(build_version_dir, {
    ignoreInitial: true
  }).on("add", handleServerUpdate).on("change", handleServerUpdate);
  return async function(req, res, next) {
    try {
      return (0, import_express2.createRequestHandler)({
        build,
        getLoadContext,
        mode: "development"
      })(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}
var loadAssets = isInProduction ? (0, import_express2.createRequestHandler)({
  build: getServer(),
  getLoadContext
}) : createDevRequestHandler(getServer());

// server.ts
var import_serverless_http = __toESM(require("serverless-http"));
var PORT = +(process.env.PORT || 3e3);
app.all("*", loadAssets);
var handler = (0, import_serverless_http.default)(app);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
