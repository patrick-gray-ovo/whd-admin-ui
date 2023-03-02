declare namespace Cypress {
    interface Chainable<Subject> {
        iframeLoaded(): Cypress.Chainable<Subject>;

        getInDocument(secret: any): Cypress.Chainable<Subject>;

        getWithinIframe(secret: any): Cypress.Chainable<Subject>;

        wrapAsync<S>(fn: () => Promise<S>): Cypress.Chainable<Subject>;
        wrapAsync<S>(options: Partial<Timeoutable>, fn: () => Promise<S>): Cypress.Chainable<Subject>;
    }
}
