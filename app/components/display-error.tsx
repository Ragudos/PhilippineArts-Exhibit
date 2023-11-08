import { isRouteErrorResponse } from "@remix-run/react";
import React from "react";

export function DisplayError({ error }: { error: unknown }) {
    if (isRouteErrorResponse(error)) {
        return (
            <React.Fragment>
                Something went wrong: {error.status}&nbsp;
                <small className="font-normal">{error.statusText}</small>
            </React.Fragment>
        );
    } else if (error instanceof Error) {
        return (
            <React.Fragment>
                Something went wrong: &nbsp;
                <small className="font-normal">
                    {error.message || "Unknown error"}
                </small>
                {process.env.NODE_ENV == "production" && (
                    <p>Stack trace: {error.stack}</p>
                )}
            </React.Fragment>
        );
    } else if (typeof error == "string") {
        return (
            <React.Fragment>
                Something went wrong: &nbsp;
                <small className="font-normal">{error}</small>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                Something went wrong: &nbsp;
                <small className="font-normal">Unknown error</small>
            </React.Fragment>
        );
    }
}
