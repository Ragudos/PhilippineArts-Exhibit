import { app } from "server/init";
import { loadAssets } from "server/load-assets";
import serverless from "serverless-http";

const PORT = +(process.env.PORT || 3000);

app.all("*", loadAssets);

export const handler = serverless(app);
