import morgan from "morgan";

const loggerMode = process.env.NODE_ENV == "development" ? "dev" : "tiny";

export const logger = morgan(loggerMode);
