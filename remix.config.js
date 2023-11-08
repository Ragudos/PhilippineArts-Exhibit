/** @type {import('@remix-run/dev').AppConfig} */

module.exports = {
    ignoredRouteFiles: ["**/.*"],
    postcss: true,
    serverModuleFormat: "cjs",
    serverMinify: true,
    serverPlatform: "node",

    // appDirectory: "app",
    // assetsBuildDirectory: "public/build",
    // publicPath: "/build/",
    // serverBuildPath: "build/index.js"
};
