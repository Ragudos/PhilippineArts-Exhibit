import type { NextFunction, Request, Response } from "express";
import chokidar from "chokidar";
import path from "node:path";
import { createRequestHandler } from "@remix-run/express";
import { getServer } from "./get-server";
import { getLoadContext } from "./load-context";
import { type ServerBuild, broadcastDevReady } from "@remix-run/node";

const isInProduction = process.env.NODE_ENV == "production";

function createDevRequestHandler(initialBuild: ServerBuild) {
    let build = initialBuild;

    const build_dir = path.join(process.cwd(), "..", "..", "build");
    const build_version_dir = path.join(build_dir, "version.txt");

    function handleServerUpdate() {
        build = getServer();
        broadcastDevReady(build);
    }

    chokidar
        .watch(build_version_dir, {
            ignoreInitial: true,
        })
        .on("add", handleServerUpdate)
        .on("change", handleServerUpdate);

    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            return createRequestHandler({
                build,
                getLoadContext,
                mode: "development",
            })(req, res, next);
        } catch (err) {
            next(err);
        }
    };
}

export const loadAssets = isInProduction
    ? createRequestHandler({
          build: getServer(),
          getLoadContext,
      })
    : createDevRequestHandler(getServer());
