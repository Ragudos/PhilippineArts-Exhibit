var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// empty-module:./_components/video.client
var require_video = __commonJS({
  "empty-module:./_components/video.client"(exports, module2) {
    module2.exports = {};
  }
});

// empty-module:./_components/section-of-artworks.client
var require_section_of_artworks = __commonJS({
  "empty-module:./_components/section-of-artworks.client"(exports, module2) {
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          abortDelay: ABORT_DELAY,
          context: remixContext,
          url: request.url
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 29,
          columnNumber: 13
        },
        this
      ),
      {
        [callbackName]() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response((0, import_node.createReadableStreamFromReadable)(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_react12 = require("@remix-run/react");

// app/styles/globals.css
var globals_default = "/build/_assets/globals-SMOKPJZM.css";

// app/error.tsx
var import_react3 = require("@remix-run/react");

// app/hooks/useNonce.tsx
var import_react2 = __toESM(require("react")), NonceCtx = import_react2.default.createContext("");
function useNonce() {
  return import_react2.default.useContext(NonceCtx);
}

// app/error.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function ErrorBoundary() {
  let error = (0, import_react3.useRouteError)(), nonce = useNonce();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Oops!" }, void 0, !1, {
        fileName: "app/error.tsx",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "robots", content: "nofollow noindex" }, void 0, !1, {
        fileName: "app/error.tsx",
        lineNumber: 18,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/error.tsx",
        lineNumber: 19,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/error.tsx",
        lineNumber: 20,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/error.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: (0, import_react3.isRouteErrorResponse)(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : "Unknown Error" }, void 0, !1, {
        fileName: "app/error.tsx",
        lineNumber: 23,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Scripts, { nonce }, void 0, !1, {
        fileName: "app/error.tsx",
        lineNumber: 30,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/error.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/error.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

// app/loader.ts
var import_node3 = require("@remix-run/node");

// app/cookies.server.ts
var import_node2 = require("@remix-run/node"), themePrefs = (0, import_node2.createCookie)("themes", {
  secure: !0,
  sameSite: "strict",
  path: "/",
  maxAge: 60
}), userSettings = (0, import_node2.createCookie)("user-settings", {
  secure: !0,
  sameSite: "strict",
  path: "/",
  maxAge: 60
});

// app/loader.ts
var loader = async ({ request, params }) => {
  let env = "development", cookies = request.headers.get("Cookie"), cookie = {
    themes: await themePrefs.parse(cookies) || "system"
  }, userSettinsCookie = await userSettings.parse(cookies) || {};
  return (0, import_node3.json)({
    ENV: {
      NODE_ENV: env
    },
    themes: cookie?.themes ?? "system",
    userSettings: userSettinsCookie
  });
};

// app/config/site.ts
var siteConfig = {
  title: "Museo",
  description: "Ang tahanan ng sining ng mga manlilikhang Pilipino."
};

// app/lib/utils.ts
var import_tailwind_merge = require("tailwind-merge"), import_clsx = require("clsx");
function cn(...classes) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(...classes));
}
var htmlEntityMap = {
  "<": "&lt;",
  ">": "&gt;",
  "(": "&#40;",
  ")": "&#41;",
  '"': "&quot;",
  "'": "&apos;",
  "/": "&#47",
  "\\": "&#92;"
};
function escapeHTML(str) {
  return str.replace(/[&><"'\/\\]/g, (s) => `${htmlEntityMap[s]}`);
}
function mergeRefs(...refs) {
  return (node) => {
    for (let ref of refs)
      ref && (typeof ref == "function" ? ref(node) : ref.current = node);
  };
}

// app/components/header.tsx
var import_react9 = require("@remix-run/react");

// app/components/ui/button.tsx
var import_class_variance_authority = require("class-variance-authority"), import_react4 = __toESM(require("react")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), buttonVariants = (0, import_class_variance_authority.cva)(
  "transition-colors duration-200 inline-flex justify-center font-medium items-center focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-background focus-visible:ring-offset-2 outline-transparent disabled:opacity-50",
  {
    variants: {
      size: {
        default: "text-sm h-9 px-4 py-2",
        sm: "text-xs h-8 px-2 py-1",
        md: "text-sm h-8 px-3 py-2",
        icon: "w-8 h-8"
      },
      rounded: {
        default: "rounded-md",
        sm: "rounded-sm",
        lg: "rounded-lg"
      },
      colors: {
        default: "bg-transparent text-foreground",
        primary: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        accent: "bg-accent text-accent-foreground hover:bg-accent/80",
        ghost: "bg-transparent text-foreground hover:bg-accent/20",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80"
      }
    },
    defaultVariants: {
      size: "default",
      rounded: "default",
      colors: "default"
    }
  }
), Button = import_react4.default.forwardRef(
  ({ className, type, size, rounded, colors, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "button",
    {
      type: type || "button",
      className: cn(
        buttonVariants({
          size,
          rounded,
          colors,
          className
        })
      ),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/button.tsx",
      lineNumber: 47,
      columnNumber: 13
    },
    this
  )
);

// app/components/theme-dropdown.tsx
var import_react7 = __toESM(require("react"));

// app/components/ui/dropdown.tsx
var import_react5 = __toESM(require("react")), import_prop_types = __toESM(require("prop-types")), import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), summaryVariants = (0, import_class_variance_authority2.cva)(
  "cursor-pointer transition-colors duration-200 inline-flex justify-center items-center focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-transparent disabled:opacity-50 p-2",
  {
    variants: {
      rounded: {
        default: "rounded-full",
        sm: "rounded-sm",
        lg: "rounded-lg"
      },
      colors: {
        default: "bg-muted text-muted-foreground hover:bg-muted/90",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90",
        ghost: "bg-transparent text-foreground hover:bg-accent/20"
      },
      size: {
        default: "h-9 w-max",
        icon: "w-8 h-8"
      }
    },
    defaultVariants: {
      rounded: "default",
      colors: "default",
      size: "default"
    }
  }
), contentVariants = (0, import_class_variance_authority2.cva)(
  "min-w-[5rem] absolute bg-inherit p-2 border w-max",
  {
    variants: {
      rounded: {
        md: "rounded-md",
        sm: "rounded-sm",
        none: "rounded-none",
        lg: "rounded-lg"
      },
      offset: {
        default: "top-[100%]",
        5: "top-[105%]",
        10: "top-[110%]",
        "-5": "bottom-[105%]",
        "-10": "bottom-[110%]"
      },
      position: {
        left: "left-0",
        right: "right-0",
        center: "mx-auto left-0 right-0"
      }
    },
    defaultVariants: {
      rounded: "md",
      offset: "default",
      position: "left"
    }
  }
), Dropdown = import_react5.default.forwardRef(
  ({ className, children, ...props }, ref) => {
    let detailsRef = import_react5.default.useRef(null), handleClose = import_react5.default.useCallback((e) => {
      if (!detailsRef.current)
        return;
      let target = e.target;
      for (let child of detailsRef.current.children) {
        if (target == child)
          return;
        for (let children2 of child.querySelectorAll("*"))
          if (target == children2)
            return;
      }
      detailsRef.current.removeAttribute("open");
    }, []);
    return import_react5.default.useEffect(() => {
      if (detailsRef.current)
        return document.addEventListener("click", handleClose), () => {
          document.removeEventListener("click", handleClose);
        };
    }, [handleClose]), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "details",
      {
        className: cn(
          "marker:hidden disabled:opacity-50 disabled:cursor-default",
          className,
          "relative"
        ),
        ref: mergeRefs(ref, detailsRef),
        ...props,
        children
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/dropdown.tsx",
        lineNumber: 116,
        columnNumber: 13
      },
      this
    );
  }
), DropdownLabel = import_react5.default.forwardRef(
  ({ className, children, rounded, colors, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "summary",
    {
      className: cn(
        summaryVariants({
          rounded,
          colors,
          className
        })
      ),
      ref,
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/dropdown.tsx",
      lineNumber: 134,
      columnNumber: 13
    },
    this
  )
), DropdownContent = import_react5.default.forwardRef(
  ({ className, children, position, rounded, offset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "div",
    {
      className: cn(
        contentVariants({
          position,
          offset,
          rounded,
          className
        })
      ),
      ref,
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/dropdown.tsx",
      lineNumber: 154,
      columnNumber: 13
    },
    this
  )
);
Dropdown.propTypes = {
  children: import_prop_types.default.arrayOf((propValue, key, componentName) => propValue[key].type != DropdownLabel && propValue[key].type != DropdownContent ? new Error(
    `${componentName} only accepts children of types: [${DropdownLabel.name}, ${DropdownContent.name}]`
  ) : null)
};
Dropdown.displayName = "Dropdown";
DropdownLabel.displayName = "DropdownLabel";
DropdownContent.displayName = "DropdownContent";

// app/hooks/useThemes.tsx
var import_react6 = __toESM(require("react")), ThemeCtx = import_react6.default.createContext(null);
function useThemes() {
  return import_react6.default.useContext(ThemeCtx);
}

// app/assets/theme-icons.svg
var theme_icons_default = "/build/_assets/theme-icons-WC4TXDMN.svg";

// app/components/theme-dropdown.tsx
var import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), ThemeDropdown = import_react7.default.memo(() => {
  let themes = useThemes(), fetcher = (0, import_react8.useFetcher)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown, { id: "theme-dropdown", className: "flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownLabel, { colors: "ghost", size: "icon", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "sr-only", children: "Click to expand and choose a theme to set on the browser. The options are light, dark, and system settings." }, void 0, !1, {
        fileName: "app/components/theme-dropdown.tsx",
        lineNumber: 16,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "svg",
        {
          className: cn("w-6 h-6 inline", {
            "hidden dark:inline": themes != "dark"
          }),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("use", { href: theme_icons_default + "#moon-solid" }, void 0, !1, {
            fileName: "app/components/theme-dropdown.tsx",
            lineNumber: 25,
            columnNumber: 21
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/theme-dropdown.tsx",
          lineNumber: 20,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "svg",
        {
          className: cn("w-6 h-6 inline", {
            "hidden dark:hidden": themes != "light"
          }),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("use", { href: theme_icons_default + "#sun-solid" }, void 0, !1, {
            fileName: "app/components/theme-dropdown.tsx",
            lineNumber: 32,
            columnNumber: 21
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/theme-dropdown.tsx",
          lineNumber: 27,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/theme-dropdown.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      DropdownContent,
      {
        offset: 5,
        position: "right",
        className: "w-40 z-20 md:left-0 bg-muted text-muted-foreground px-0 shadow-lg shadow-black/20",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(fetcher.Form, { method: "post", action: "/color-scheme", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            Button,
            {
              type: "submit",
              value: "light",
              name: "colorScheme",
              className: cn(
                "gap-4 w-full h-auto justify-start py-1 px-3",
                {
                  "bg-secondary hover:bg-secondary/90 font-bold scale-95": themes == "light"
                }
              ),
              colors: "ghost",
              disabled: themes == "light",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  "svg",
                  {
                    className: cn("w-6 h-6", {
                      "stroke-2": themes == "light"
                    }),
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("use", { href: theme_icons_default + "#sun-solid" }, void 0, !1, {
                      fileName: "app/components/theme-dropdown.tsx",
                      lineNumber: 62,
                      columnNumber: 33
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/theme-dropdown.tsx",
                    lineNumber: 57,
                    columnNumber: 29
                  },
                  this
                ),
                "Light"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/theme-dropdown.tsx",
              lineNumber: 43,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            Button,
            {
              type: "submit",
              value: "dark",
              name: "colorScheme",
              className: cn(
                "gap-4 w-full h-auto justify-start py-1 px-3",
                {
                  "bg-secondary hover:bg-secondary/90 font-bold scale-95": themes == "dark"
                }
              ),
              colors: "ghost",
              disabled: themes == "dark",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  "svg",
                  {
                    className: cn("w-6 h-6", {
                      "stroke-2": themes == "dark"
                    }),
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("use", { href: theme_icons_default + "#moon-solid" }, void 0, !1, {
                      fileName: "app/components/theme-dropdown.tsx",
                      lineNumber: 86,
                      columnNumber: 33
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/theme-dropdown.tsx",
                    lineNumber: 81,
                    columnNumber: 29
                  },
                  this
                ),
                "Dark"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/theme-dropdown.tsx",
              lineNumber: 67,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            Button,
            {
              type: "submit",
              value: "system",
              name: "colorScheme",
              className: cn(
                "gap-4 w-full h-auto justify-start py-1 px-3",
                {
                  "bg-secondary hover:bg-secondary/90 font-bold scale-95": themes == "system"
                }
              ),
              colors: "ghost",
              disabled: themes == "system",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  "svg",
                  {
                    className: cn("w-6 h-6 stroke-background", {
                      "stroke-2": themes == "system"
                    }),
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      "use",
                      {
                        href: theme_icons_default + "#settings-solid"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/theme-dropdown.tsx",
                        lineNumber: 110,
                        columnNumber: 33
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/theme-dropdown.tsx",
                    lineNumber: 105,
                    columnNumber: 29
                  },
                  this
                ),
                "System"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/theme-dropdown.tsx",
              lineNumber: 91,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/theme-dropdown.tsx",
          lineNumber: 42,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/theme-dropdown.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/theme-dropdown.tsx",
        lineNumber: 36,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/theme-dropdown.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
});

// app/components/header.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Header = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("header", { className: "sticky px-4 top-0 z-40 border-b-[1px] border-transparent border-b-border bg-background", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container p-4 flex justify-between gap-4 items-end", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_react9.Link,
    {
      to: "/",
      "aria-label": `${siteConfig.title} | Home`,
      title: `${siteConfig.title} | Home`,
      className: cn(
        buttonVariants(),
        "leading-none hyphens-none h-auto bg-transparent hover:bg-transparent font-cursive h2 p-0"
      ),
      children: "museo"
    },
    void 0,
    !1,
    {
      fileName: "app/components/header.tsx",
      lineNumber: 12,
      columnNumber: 17
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("nav", { className: "flex items-center gap-2 w-full justify-end md:justify-between h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ThemeDropdown, {}, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 25,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_react9.Link,
      {
        to: "/trailer",
        className: cn(
          buttonVariants({ colors: "primary" }),
          "tracking-wider uppercase font-semibold"
        ),
        children: "TRAILER"
      },
      void 0,
      !1,
      {
        fileName: "app/components/header.tsx",
        lineNumber: 28,
        columnNumber: 25
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 27,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.tsx",
    lineNumber: 24,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/header.tsx",
  lineNumber: 11,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/header.tsx",
  lineNumber: 10,
  columnNumber: 9
}, this);

// app/context-provider.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), ContextProvider = ({ children, themes }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ThemeCtx.Provider, { value: themes, children }, void 0, !1, {
  fileName: "app/context-provider.tsx",
  lineNumber: 11,
  columnNumber: 12
}, this);

// app/scripts/settings.tsx
var import_react10 = __toESM(require("react")), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function SettingsScript({
  nonce,
  userSettings: userSettings2,
  ...props
}) {
  return import_react10.default.useEffect(() => {
    document && (document.documentElement.classList.remove("outline", "solid"), userSettings2?.iconType == "solid" || userSettings2?.iconType == "outline" ? document.documentElement.classList.add(
      userSettings2?.iconType || "solid"
    ) : document.documentElement.classList.add("solid"));
  }, [userSettings2?.iconType]), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "script",
    {
      dangerouslySetInnerHTML: {
        __html: `
            let preferredIcon = "${userSettings2?.iconType}";

            document.documentElement.classList.remove("outline", "solid");

            if (preferredIcon == "solid" || preferredIcon == "outline") {
                document.documentElement.classList.add("${userSettings2?.iconType}");
            } else {
                document.documentElement.classList.add("solid");
            }
        `
      },
      nonce,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/scripts/settings.tsx",
      lineNumber: 29,
      columnNumber: 9
    },
    this
  );
}

// app/scripts/theme.tsx
var import_react11 = __toESM(require("react")), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ThemeScript({
  nonce,
  themes,
  ...props
}) {
  return import_react11.default.useEffect(() => {
    if (document) {
      let colorScheme = themes;
      if (colorScheme == "system" || !colorScheme) {
        let mediaQuery = window.matchMedia(
          "(prefers-color-scheme: dark)"
        );
        document.documentElement.classList.remove("dark", "light"), mediaQuery.matches ? document.documentElement.classList.add("dark") : document.documentElement.classList.add("light");
      } else
        (colorScheme == "dark" || colorScheme == "light") && (document.documentElement.classList.remove("dark", "light"), document.documentElement.classList.add(themes));
    }
  }, [themes]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "script",
    {
      dangerouslySetInnerHTML: {
        __html: `
            let colorScheme = "${themes ? escapeHTML(themes) : "system"}";

            document.documentElement.classList.remove("dark", "light");

            if (colorScheme == "system" || !colorScheme) {
                let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
                
                if (mediaQuery.matches) {
                    document.documentElement.classList.add("dark");
                }
            } else {
                document.documentElement.classList.add(colorScheme);
            }
        `
      },
      nonce,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/scripts/theme.tsx",
      lineNumber: 34,
      columnNumber: 9
    },
    this
  );
}

// app/root.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : [],
  { rel: "stylesheet", href: globals_default }
];
function App() {
  let { ENV, themes, userSettings: userSettings2 } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "html",
    {
      suppressHydrationWarning: !0,
      lang: "en",
      className: cn(
        themes == "dark" || themes == "light" ? themes : void 0,
        userSettings2?.iconType ?? "solid"
      ),
      "data-theme": themes ?? "system",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("head", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 45,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "meta",
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1"
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 46,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { name: "theme-color", content: "hsl(20, 22%, 57%)" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "link",
            {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "/metadata/apple-touch-icon.png"
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 51,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "link",
            {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "/metadata/favicon-32x32.png"
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 56,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "link",
            {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "/metadata/favicon-16x16.png"
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 62,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("link", { rel: "manifest", href: "/metadata/site.webmanifest" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react12.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react12.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 70,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ThemeScript, { themes }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 71,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(SettingsScript, { userSettings: userSettings2 }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 72,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "script",
            {
              dangerouslySetInnerHTML: {
                __html: `
                        window.ENV = ${JSON.stringify(ENV)};
                        window.themes = "${themes ? escapeHTML(themes) : "system"}"
                        window.settings = ${JSON.stringify(userSettings2)}
                        `
              },
              defer: !0
            },
            void 0,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 73,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ContextProvider, { themes, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Header, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 88,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 90,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 89,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react12.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 92,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react12.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 93,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react12.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 94,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 5
    },
    this
  );
}

// app/routes/color-scheme/route.ts
var route_exports = {};
__export(route_exports, {
  action: () => action
});

// app/routes/_actions/color-scheme.ts
async function action({ request }) {
  let formData = await request.formData(), colorScheme = String(formData.get("colorScheme")), cookies = request.headers.get("Cookie"), cookie = await themePrefs.parse(cookies);
  return new Response("OK", {
    headers: {
      "Set-Cookie": await themePrefs.serialize(colorScheme, {
        expires: new Date(Date.now() + 6e4)
      })
    }
  });
}

// app/routes/slideshow/route.tsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => Slideshow,
  loader: () => loader2,
  meta: () => meta
});
var import_react14 = __toESM(require("react"));

// app/lib/metadata.ts
function generateMetadata({ title, description }) {
  let siteTitle;
  return typeof title == "string" ? siteTitle = title : siteTitle = title.isAbsolute ? title.text : `${siteConfig.title} ${title.text}`, [{ title: siteTitle }, { description }];
}

// app/routes/slideshow/route.tsx
var import_react15 = require("@remix-run/react");

// app/routes/_loaders/root.ts
async function loader2({ request }) {
  return (await fetch(
    new URL(request.url).origin + "/assets/art.json",
    {
      method: "GET",
      mode: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
    }
  )).json();
}

// app/routes/slideshow/_components/artwork-details.tsx
var import_react13 = __toESM(require("react"));
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), ArtworkDetails = ({
  artwork: { title, category, description, artist, techniques, materials },
  setIsPaused
}) => {
  let [didAvifFail, setDidAvifFail] = import_react13.default.useState(!1), [didWebpFail, setDidWebpFail] = import_react13.default.useState(!1), srcSets = import_react13.default.useMemo(() => didAvifFail ? didWebpFail ? `/assets/${category}/250/${title.toLowerCase()}.jpg 250w,
                            /assets/${category}/500/${title.toLowerCase()}.jpg 500w,
                            /assets/${category}/1000/${title.toLowerCase()}.jpg 1000w,
                            /assets/${category}/1500/${title.toLowerCase()}.jpg 1500w,
                            /assets/${category}/2000/${title.toLowerCase()}.jpg 2000w` : ` /assets/${category}/250/${title.toLowerCase()}.webp 250w,
                            /assets/${category}/500/${title.toLowerCase()}.webp 500w,
                            /assets/${category}/1000/${title.toLowerCase()}.webp 1000w,
                            /assets/${category}/1500/${title.toLowerCase()}.webp 1500w,
                            /assets/${category}/2000/${title.toLowerCase()}.webp 2000w` : `/assets/${category}/250/${title.toLowerCase()}.avif 250w,
                        /assets/${category}/500/${title.toLowerCase()}.avif 500w,
                        /assets/${category}/1000/${title.toLowerCase()}.avif 1000w,
                        /assets/${category}/1500/${title.toLowerCase()}.avif 1500w,
                        /assets/${category}/2000/${title.toLowerCase()}.avif 2000w`, [didAvifFail, didWebpFail, title, category]), dialogRef = import_react13.default.useRef(null), handleClose = import_react13.default.useCallback(
    (e) => {
      e.target == dialogRef.current && (dialogRef.current.close(), setIsPaused(!1));
    },
    [setIsPaused]
  );
  import_react13.default.useEffect(() => {
    if (dialogRef.current)
      return dialogRef.current.addEventListener("click", handleClose), () => {
        dialogRef.current?.removeEventListener("click", handleClose);
      };
  }, [handleClose]);
  let splitDesc = description.split(".");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react13.default.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("dialog", { className: "bg-transparent", ref: dialogRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col gap-2 bg-transparent", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex justify-end px-1 pt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        Button,
        {
          colors: "ghost",
          size: "sm",
          className: "font-semibold gap-2",
          onClick: () => {
            setIsPaused(!1), dialogRef.current.close();
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { className: "own-width w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("use", { href: theme_icons_default + "#x-icon-small" }, void 0, !1, {
              fileName: "app/routes/slideshow/_components/artwork-details.tsx",
              lineNumber: 80,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/slideshow/_components/artwork-details.tsx",
              lineNumber: 79,
              columnNumber: 29
            }, this),
            "CLOSE"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/slideshow/_components/artwork-details.tsx",
          lineNumber: 69,
          columnNumber: 25
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/slideshow/_components/artwork-details.tsx",
        lineNumber: 68,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "img",
        {
          srcSet: srcSets,
          onError: () => {
            didAvifFail || setDidAvifFail(!0), didAvifFail && !didWebpFail && setDidWebpFail(!0);
          },
          alt: description,
          className: "w-full max-w-full h-fit max-h-[42.5rem]",
          src: `/assets/${category}/10/${title.toLowerCase()}.jpg`,
          sizes: "(min-width: 520px) 500px, (min-width: 768px) 1000px, (min-width: 1280px) 1500px, (min-width: 2000px) 2000px, 250px"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/slideshow/_components/artwork-details.tsx",
          lineNumber: 86,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/slideshow/_components/artwork-details.tsx",
      lineNumber: 67,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/slideshow/_components/artwork-details.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("article", { className: "justify-center container flex-1 flex flex-col gap-12 xl:gap-24 md:flex-row pb-24 animate-fade duration-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "w-fit h-fit flex items-start relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "img",
          {
            srcSet: srcSets,
            onError: () => {
              didAvifFail || setDidAvifFail(!0), didAvifFail && !didWebpFail && setDidWebpFail(!0);
            },
            alt: description,
            className: "w-full max-w-full h-fit max-h-[42.5rem]",
            sizes: "(min-width: 520px) 500px, (min-width: 768px) 1000px, (min-width: 1280px) 1500px, (min-width: 2000px) 2000px, 250px",
            loading: "eager"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/slideshow/_components/artwork-details.tsx",
            lineNumber: 107,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          Button,
          {
            colors: "secondary",
            size: "sm",
            className: "absolute bottom-1 left-1 font-semibold gap-2",
            onClick: () => {
              setIsPaused(!0), dialogRef.current.showModal();
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { className: "own-width w-4 h-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("use", { href: theme_icons_default + "#expand-small" }, void 0, !1, {
                fileName: "app/routes/slideshow/_components/artwork-details.tsx",
                lineNumber: 135,
                columnNumber: 29
              }, this) }, void 0, !1, {
                fileName: "app/routes/slideshow/_components/artwork-details.tsx",
                lineNumber: 134,
                columnNumber: 25
              }, this),
              "Expand image"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/slideshow/_components/artwork-details.tsx",
            lineNumber: 124,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/slideshow/_components/artwork-details.tsx",
        lineNumber: 106,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col gap-4 xl:gap-8 items-center md:w-[45%] xl:w-[35%]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("strong", { className: "font-semibold", children: title }, void 0, !1, {
            fileName: "app/routes/slideshow/_components/artwork-details.tsx",
            lineNumber: 143,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/slideshow/_components/artwork-details.tsx",
            lineNumber: 142,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: artist }, void 0, !1, {
            fileName: "app/routes/slideshow/_components/artwork-details.tsx",
            lineNumber: 145,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/slideshow/_components/artwork-details.tsx",
          lineNumber: 141,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "text-justify", children: splitDesc.map((text, idx) => {
          if (idx != splitDesc.length - 1)
            return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react13.default.Fragment, { children: [
              text,
              ".",
              idx > 0 && idx % 3 == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react13.default.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
                  fileName: "app/routes/slideshow/_components/artwork-details.tsx",
                  lineNumber: 156,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("br", {}, void 0, !1, {
                  fileName: "app/routes/slideshow/_components/artwork-details.tsx",
                  lineNumber: 157,
                  columnNumber: 49
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/slideshow/_components/artwork-details.tsx",
                lineNumber: 155,
                columnNumber: 45
              }, this) : void 0
            ] }, idx, !0, {
              fileName: "app/routes/slideshow/_components/artwork-details.tsx",
              lineNumber: 152,
              columnNumber: 37
            }, this);
        }) }, void 0, !1, {
          fileName: "app/routes/slideshow/_components/artwork-details.tsx",
          lineNumber: 148,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("hr", { className: "bg-foreground w-full" }, void 0, !1, {
          fileName: "app/routes/slideshow/_components/artwork-details.tsx",
          lineNumber: 166,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "flex flex-col gap-2 xl:gap-4 w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "sr-only", children: "Metadata about the artwork" }, void 0, !1, {
            fileName: "app/routes/slideshow/_components/artwork-details.tsx",
            lineNumber: 169,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col gap-2 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "h5", children: "Category" }, void 0, !1, {
              fileName: "app/routes/slideshow/_components/artwork-details.tsx",
              lineNumber: 171,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("small", { children: category[0].toUpperCase() + category.slice(1) }, void 0, !1, {
              fileName: "app/routes/slideshow/_components/artwork-details.tsx",
              lineNumber: 172,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/slideshow/_components/artwork-details.tsx",
            lineNumber: 170,
            columnNumber: 25
          }, this),
          techniques && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "w-full flex gap-2 flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "h6 font-medium", children: "Techinques used" }, void 0, !1, {
              fileName: "app/routes/slideshow/_components/artwork-details.tsx",
              lineNumber: 177,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { className: "flex items-center flex-wrap gap-4", children: techniques.map((technique) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("small", { children: technique }, void 0, !1, {
              fileName: "app/routes/slideshow/_components/artwork-details.tsx",
              lineNumber: 183,
              columnNumber: 45
            }, this) }, technique + title, !1, {
              fileName: "app/routes/slideshow/_components/artwork-details.tsx",
              lineNumber: 182,
              columnNumber: 41
            }, this)) }, void 0, !1, {
              fileName: "app/routes/slideshow/_components/artwork-details.tsx",
              lineNumber: 180,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/slideshow/_components/artwork-details.tsx",
            lineNumber: 176,
            columnNumber: 29
          }, this),
          materials && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "w-full flex gap-2 flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "h6 font-medium", children: "Materials used" }, void 0, !1, {
              fileName: "app/routes/slideshow/_components/artwork-details.tsx",
              lineNumber: 192,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { className: "flex items-center flex-wrap gap-4", children: materials.map((material) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("small", { children: material }, void 0, !1, {
              fileName: "app/routes/slideshow/_components/artwork-details.tsx",
              lineNumber: 198,
              columnNumber: 45
            }, this) }, material + title, !1, {
              fileName: "app/routes/slideshow/_components/artwork-details.tsx",
              lineNumber: 197,
              columnNumber: 41
            }, this)) }, void 0, !1, {
              fileName: "app/routes/slideshow/_components/artwork-details.tsx",
              lineNumber: 195,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/slideshow/_components/artwork-details.tsx",
            lineNumber: 191,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/slideshow/_components/artwork-details.tsx",
          lineNumber: 168,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/slideshow/_components/artwork-details.tsx",
        lineNumber: 140,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/slideshow/_components/artwork-details.tsx",
      lineNumber: 105,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/slideshow/_components/artwork-details.tsx",
    lineNumber: 65,
    columnNumber: 9
  }, this);
};

// app/routes/slideshow/route.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), meta = () => generateMetadata({
  title: {
    isAbsolute: !1,
    text: "| Slideshow"
  },
  description: siteConfig.description
}), DEFAULT_TIME = 1e4;
function Slideshow() {
  let artworks = (0, import_react15.useLoaderData)(), [searchParams, setSearchParams] = (0, import_react15.useSearchParams)(), [timeLeftBeforeNextSlide, setTimeLeftBeforeNextSlide] = import_react14.default.useState(DEFAULT_TIME), [isPaused, setIsPaused] = import_react14.default.useState(!1), idxOfArtworkToBeShown = import_react14.default.useMemo(() => artworks.findIndex((artwork) => artwork.title.toLowerCase().trim() == searchParams.get("artwork")?.toLowerCase().trim()), [artworks, searchParams.get("artwork")]), artworkToBeShown = artworks[idxOfArtworkToBeShown], detailsRef = import_react14.default.useRef(null), handleNextArtwork = import_react14.default.useCallback(() => {
    setSearchParams((curr) => {
      let newIdx = (idxOfArtworkToBeShown + 1) % artworks.length;
      return curr.set("artwork", artworks[newIdx].title), curr;
    });
  }, [artworks, idxOfArtworkToBeShown]);
  return import_react14.default.useEffect(() => {
    if (idxOfArtworkToBeShown == -1)
      return;
    let timer;
    return timer = setTimeout(() => {
      isPaused || setTimeLeftBeforeNextSlide((curr) => {
        let diff = curr - 1e3;
        return diff <= 0 ? DEFAULT_TIME : diff;
      });
    }, 1e3), () => {
      clearTimeout(timer);
    };
  }, [artworks, idxOfArtworkToBeShown, isPaused, timeLeftBeforeNextSlide]), import_react14.default.useEffect(() => {
    timeLeftBeforeNextSlide <= 1e3 && handleNextArtwork();
  }, [timeLeftBeforeNextSlide]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react14.default.Fragment, { children: [
    artworkToBeShown && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { id: "slideshow", className: "flex flex-col min-h-[80dvh]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        ArtworkDetails,
        {
          artwork: artworkToBeShown,
          setIsPaused
        },
        void 0,
        !1,
        {
          fileName: "app/routes/slideshow/route.tsx",
          lineNumber: 94,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "z-50 fixed bottom-0 left-0 w-full bg-background", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "div",
          {
            className: "w-full h-[0.175rem] relative bg-accent/20",
            "aria-label": "Slideshow Progress",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "span",
              {
                className: "left-0 top-0 absolute h-full bg-accent transition-[width] will-change-[width] duration-500",
                style: {
                  width: `${(idxOfArtworkToBeShown + 1) / artworks.length * 100}%`
                }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/slideshow/route.tsx",
                lineNumber: 104,
                columnNumber: 29
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/slideshow/route.tsx",
            lineNumber: 100,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex justify-between items-center gap-4 flex-wrap px-4 py-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            Dropdown,
            {
              ref: detailsRef,
              className: "flex items-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                  DropdownLabel,
                  {
                    className: "h-auto flex-col px-4 py-2 items-start",
                    rounded: "sm",
                    colors: "ghost",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { className: "h5 font-semibold", children: artworkToBeShown.title }, void 0, !1, {
                        fileName: "app/routes/slideshow/route.tsx",
                        lineNumber: 126,
                        columnNumber: 37
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("small", { children: artworkToBeShown.artist }, void 0, !1, {
                        fileName: "app/routes/slideshow/route.tsx",
                        lineNumber: 129,
                        columnNumber: 37
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/slideshow/route.tsx",
                    lineNumber: 121,
                    columnNumber: 33
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                  DropdownContent,
                  {
                    position: "center",
                    offset: "-10",
                    className: "flex-col bg-muted text-muted-foreground flex gap-2 max-h-[20rem] overflow-y-auto",
                    children: artworks.map((artwork) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                      Button,
                      {
                        onClick: () => {
                          setSearchParams((curr) => (curr.set(
                            "artwork",
                            artwork.title
                          ), curr)), detailsRef.current?.removeAttribute(
                            "open"
                          );
                        },
                        title: `View ${artwork.title}`,
                        "aria-label": `View ${artwork.title}`,
                        colors: "ghost",
                        className: cn(
                          "flex-col py-2 px-4 h-auto",
                          {
                            "bg-accent/20 scale-95": artwork.title == artworkToBeShown.title
                          }
                        ),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { className: "h5 semibold", children: artwork.title }, void 0, !1, {
                            fileName: "app/routes/slideshow/route.tsx",
                            lineNumber: 166,
                            columnNumber: 45
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("small", { children: artwork.artist }, void 0, !1, {
                            fileName: "app/routes/slideshow/route.tsx",
                            lineNumber: 169,
                            columnNumber: 45
                          }, this)
                        ]
                      },
                      artwork.title,
                      !0,
                      {
                        fileName: "app/routes/slideshow/route.tsx",
                        lineNumber: 138,
                        columnNumber: 41
                      },
                      this
                    ))
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/slideshow/route.tsx",
                    lineNumber: 132,
                    columnNumber: 33
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/slideshow/route.tsx",
              lineNumber: 117,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              Button,
              {
                "aria-label": "Go to previous artwork",
                size: "icon",
                colors: "ghost",
                className: "p-0",
                onClick: () => {
                  setSearchParams((curr) => {
                    let newIdx = idxOfArtworkToBeShown == 0 ? artworks.length - 1 : idxOfArtworkToBeShown - 1;
                    return curr.set(
                      "artwork",
                      artworks[newIdx].title
                    ), curr;
                  }), setTimeLeftBeforeNextSlide(
                    DEFAULT_TIME
                  );
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("svg", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                  "use",
                  {
                    href: theme_icons_default + "#chevron-left"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/slideshow/route.tsx",
                    lineNumber: 201,
                    columnNumber: 41
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/slideshow/route.tsx",
                  lineNumber: 200,
                  columnNumber: 37
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/slideshow/route.tsx",
                lineNumber: 176,
                columnNumber: 33
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              Button,
              {
                "aria-label": "Pause/Play slideshow",
                size: "icon",
                colors: "ghost",
                className: "p-0",
                onClick: () => {
                  setIsPaused((p) => !p);
                },
                children: [
                  !isPaused && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("svg", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                    "use",
                    {
                      href: theme_icons_default + "#pause-solid"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/slideshow/route.tsx",
                      lineNumber: 220,
                      columnNumber: 45
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/routes/slideshow/route.tsx",
                    lineNumber: 219,
                    columnNumber: 41
                  }, this),
                  isPaused && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("svg", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                    "use",
                    {
                      href: theme_icons_default + "#play-solid"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/slideshow/route.tsx",
                      lineNumber: 230,
                      columnNumber: 45
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/routes/slideshow/route.tsx",
                    lineNumber: 229,
                    columnNumber: 41
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/slideshow/route.tsx",
                lineNumber: 207,
                columnNumber: 33
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              Button,
              {
                "aria-label": "Go to next artwork",
                size: "icon",
                colors: "ghost",
                className: "p-0",
                onClick: () => {
                  handleNextArtwork(), setTimeLeftBeforeNextSlide(
                    DEFAULT_TIME
                  );
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("svg", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                  "use",
                  {
                    href: theme_icons_default + "#chevron-right"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/slideshow/route.tsx",
                    lineNumber: 252,
                    columnNumber: 41
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/slideshow/route.tsx",
                  lineNumber: 251,
                  columnNumber: 37
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/slideshow/route.tsx",
                lineNumber: 239,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/slideshow/route.tsx",
            lineNumber: 175,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/slideshow/route.tsx",
          lineNumber: 116,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/slideshow/route.tsx",
        lineNumber: 99,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/slideshow/route.tsx",
      lineNumber: 93,
      columnNumber: 17
    }, this),
    !artworkToBeShown && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "min-h-[50dvh] grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "There is no artwork with that title." }, void 0, !1, {
        fileName: "app/routes/slideshow/route.tsx",
        lineNumber: 266,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        Button,
        {
          colors: "secondary",
          onClick: () => {
            setSearchParams((curr) => (curr.set("artwork", artworks[0].title), curr));
          },
          children: "Start at the beginning?"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/slideshow/route.tsx",
          lineNumber: 268,
          columnNumber: 25
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/slideshow/route.tsx",
      lineNumber: 265,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/slideshow/route.tsx",
      lineNumber: 264,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/slideshow/route.tsx",
    lineNumber: 91,
    columnNumber: 9
  }, this);
}

// app/routes/trailer/route.tsx
var route_exports3 = {};
__export(route_exports3, {
  default: () => Trailer,
  meta: () => meta2
});
var import_react16 = __toESM(require("react")), import_video = __toESM(require_video());
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), meta2 = () => generateMetadata({
  title: {
    isAbsolute: !1,
    text: "| Trailer"
  },
  description: "A trailer for the art exhibit."
}), isHydrating = !0;
function Trailer() {
  let [isHydrated, setIsHydrated] = import_react16.default.useState(!isHydrating);
  return import_react16.default.useEffect(() => {
    isHydrating = !1, setIsHydrated(!0);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react16.default.Fragment, { children: isHydrated && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_video.Video, {}, void 0, !1, {
    fileName: "app/routes/trailer/route.tsx",
    lineNumber: 26,
    columnNumber: 43
  }, this) }, void 0, !1, {
    fileName: "app/routes/trailer/route.tsx",
    lineNumber: 26,
    columnNumber: 12
  }, this);
}

// app/routes/_index/route.tsx
var route_exports4 = {};
__export(route_exports4, {
  default: () => Index,
  loader: () => loader2,
  meta: () => meta3
});
var import_react17 = __toESM(require("react"));
var import_react18 = require("@remix-run/react"), import_section_of_artworks = __toESM(require_section_of_artworks()), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), meta3 = () => generateMetadata({
  title: siteConfig.title,
  description: "A slideshow of all the artworks."
}), isHydrating2 = !0;
function Index() {
  let artworks = (0, import_react18.useLoaderData)(), [isHydrated, setIsHydrated] = import_react17.default.useState(!isHydrating2);
  return import_react17.default.useEffect(() => {
    isHydrating2 = !1, setIsHydrated(!0);
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react17.default.Fragment, { children: isHydrated && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_section_of_artworks.default, { artworks }, void 0, !1, {
    fileName: "app/routes/_index/route.tsx",
    lineNumber: 32,
    columnNumber: 28
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index/route.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-5CA2H5JY.js", imports: ["/build/_shared/chunk-BA6NHEY4.js", "/build/_shared/chunk-H5ZE7JVG.js", "/build/_shared/chunk-5473JFYK.js", "/build/_shared/chunk-KYUQ2GT7.js", "/build/_shared/chunk-NRH5LTJ7.js", "/build/_shared/chunk-O4OKU2LD.js", "/build/_shared/chunk-K6PKGSTD.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NLTMKGWO.js", imports: ["/build/_shared/chunk-4VSDZB3N.js", "/build/_shared/chunk-ERJPABV2.js", "/build/_shared/chunk-XVQ66UTV.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-3VBU26RP.js", imports: ["/build/_shared/chunk-CGFMPS4Z.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/color-scheme": { id: "routes/color-scheme", parentId: "root", path: "color-scheme", index: void 0, caseSensitive: void 0, module: "/build/routes/color-scheme-75KTWUBL.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/slideshow": { id: "routes/slideshow", parentId: "root", path: "slideshow", index: void 0, caseSensitive: void 0, module: "/build/routes/slideshow-43HWDM5X.js", imports: ["/build/_shared/chunk-CGFMPS4Z.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/trailer": { id: "routes/trailer", parentId: "root", path: "trailer", index: void 0, caseSensitive: void 0, module: "/build/routes/trailer-BZDU6HCX.js", imports: ["/build/_shared/chunk-CGFMPS4Z.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "60b71628", hmr: { runtime: "/build/_shared\\chunk-KYUQ2GT7.js", timestamp: 1712944505709 }, url: "/build/manifest-60B71628.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/color-scheme": {
    id: "routes/color-scheme",
    parentId: "root",
    path: "color-scheme",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/slideshow": {
    id: "routes/slideshow",
    parentId: "root",
    path: "slideshow",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/trailer": {
    id: "routes/trailer",
    parentId: "root",
    path: "trailer",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports3
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports4
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
