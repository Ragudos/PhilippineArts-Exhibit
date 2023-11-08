import type { ActionFunctionArgs } from "@remix-run/node";
import { themePrefs } from "@/cookies.server";

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const colorScheme = String(formData.get("colorScheme"));
    const cookies = request.headers.get("Cookie");
    const cookie = await themePrefs.parse(cookies);

    return new Response("OK", {
        headers: {
            "Set-Cookie": await themePrefs.serialize(colorScheme, {
                expires: new Date(Date.now() + 60_000),
            }),
        },
    });
}
