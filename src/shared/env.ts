/**
 * A function for getting an env value that works in both Cypress and Cucumber tests
 */
export const env = (param: string): string => {
    const value = typeof Cypress === "undefined" ? process.env[param] : Cypress.env(param);

    if (!value) {
        throw new Error(`Missing env var "${param}"`);
    }

    return value;
};
