import path from "node:path";

import { app } from "./init";
import { getServer } from "./get-server";
import { broadcastDevReady } from "@remix-run/node";
import os, { NetworkInterfaceBase } from "node:os";

function getIpAddress() {
    if (process.env.HOST) {
        return process.env.HOST;
    }

    const network = os.networkInterfaces();
    const allIps = Object.values(network).flat();

    const ip = allIps.find((curr) => {
        let stringified: string | undefined;
        let internal: NetworkInterfaceBase["internal"] | undefined;

        if (curr != null && curr != undefined) {
            stringified = String(curr.family);
        }

        if (
            stringified?.includes("4") &&
            curr != null &&
            curr != undefined &&
            curr.internal
        ) {
            internal = curr.internal;
        }

        return stringified && internal;
    });

    return String(ip?.address);
}

export function startServer(port: number) {
    function onListen() {
        const build = getServer();
        const address = getIpAddress();

        if (!address) {
            console.log(`[server] http://localhost:${port}`);
        } else if (typeof address != "string") {
            console.log(
                `[server] http://localhost:${port} (http://${address}:${port})`,
            );
        } else {
            console.log(`[server] Production server began on ${address}`);
        }

        if (process.env.NODE_ENV == "development") {
            void broadcastDevReady(build);
        }

        console.log(`App is running on *:${port}`);
    }

    const server = process.env.HOST
        ? app.listen(port, process.env.HOST, onListen)
        : app.listen(port, onListen);

    process.on("SIGINT", () => {
        server.close();
    });
    process.on("SIGQUIT", () => {
        server.close();
    });
    process.on("SIGTERM", () => {
        server.close();
    });
}
