import esbuild from "esbuild";
import fs from "node:fs";

try {
    const ctx = await esbuild.build({
        bundle: true,
        metafile: true,
        format: "cjs",
        platform: "node",
        entryPoints: ["server.ts"],
        outdir: "./netlify/functions",
        outExtension: {
            ".js": ".cjs"
        }
    });

    fs.writeFileSync("./build/meta.server-entry.json", JSON.stringify(ctx.metafile));
} catch (err) {
    console.error(err);
    process.exit(1);
}
