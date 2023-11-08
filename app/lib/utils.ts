import { twMerge } from "tailwind-merge";
import type { Params } from "@remix-run/react";
import { clsx, type ClassValue } from "clsx";
import React from "react";

export function cn(...classes: ClassValue[]) {
    return twMerge(clsx(...classes));
}

export function appendSearchParamsToString(
    url: string | URL,
    params: Params<string>,
) {
    const newURL = new URL(url);

    for (const [key, value] of Object.entries(params)) {
        if (value) {
            newURL.searchParams.append(key, value);
        }
    }

    return newURL;
}

export function splitDataBy<T>(data: T[], splitBy: number) {
    const newArr: Array<T[]> = [];

    for (let idx = 0; idx < splitBy; ++idx) {
        const filteredArr = data.filter((_item, itemIdx) => {
            return itemIdx % splitBy == idx;
        });

        newArr.push(filteredArr);
    }

    return newArr;
}

const htmlEntityMap = {
    "<": "&lt;",
    ">": "&gt;",
    "(": "&#40;",
    ")": "&#41;",
    '"': "&quot;",
    "'": "&apos;",
    "/": "&#47",
    "\\": "&#92;",
};

export function escapeHTML(str: string) {
    return str.replace(/[&><"'\/\\]/g, (s) => {
        return `${htmlEntityMap[s as keyof typeof htmlEntityMap]}`;
    });
}

export function mergeRefs<T>(
    ...refs: (
        | React.MutableRefObject<T>
        | React.RefCallback<T>
        | React.ForwardedRef<T>
    )[]
) {
    return (node: T) => {
        for (const ref of refs) {
            if (ref) {
                if (typeof ref == "function") {
                    ref(node);
                } else {
                    ref.current = node;
                }
            }
        }
    };
}
