import { app } from "server/init";
import { loadAssets } from "server/load-assets";
import { startServer } from "server/start-server";

const PORT = +(process.env.PORT || 3000);

app.all("*", loadAssets);

startServer(PORT);
