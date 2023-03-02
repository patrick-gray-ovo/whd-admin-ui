import { env } from "./env";

const DEBUG = env("DEBUG");

const logFn = (level: "debug" | "info" | "warn" | "error") => (message: string, props?: Record<string, any>) => {
    if (DEBUG) {
        if (typeof Cypress === "undefined") {
            console[level](message, JSON.stringify(props, null, 2));
        } else {
            Cypress.log({
                name: "log",
                message,
                consoleProps: () => ({
                    message,
                    level,
                    ...props,
                }),
            });
        }
    }
};

export const logger = {
    debug: logFn("debug"),
    error: logFn("error"),
    info: logFn("info"),
    warn: logFn("warn"),
};
