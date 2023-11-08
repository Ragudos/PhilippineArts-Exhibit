import path from "node:path";

export function getServer() {
    const build_dir = path.join(process.cwd(), "build");

    for (const key in require.cache) {
        if (key.startsWith(build_dir)) {
            delete require.cache[key];
        }
    }

    return require(build_dir);
}
