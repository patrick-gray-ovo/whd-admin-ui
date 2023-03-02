// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('switchToIframe', iframe => {
//     return cy
//         .get(iframe)
//         .its(`0.contentDocument.body`)
//         .should(`be.visible`)
//         .then(cy.wrap)
// })
require('cypress-downloadfile/lib/downloadFileCommand')
// @ts-ignore

//Useful command for confirming an iframe has loaded
Cypress.Commands.add("iframeLoaded", { prevSubject: "element" }, ($iframe) => {
    const contentWindow = $iframe.prop("contentWindow");

    return new Promise((resolve) => {
        if (contentWindow && contentWindow.document.readyState === "complete") {
            resolve(contentWindow);
        } else {
            $iframe.on("load", () => {
                resolve(contentWindow);
            });
        }
    });
});

// @ts-ignore

//more useful iframe functions
Cypress.Commands.add("getInDocument", { prevSubject: "document" }, async (document, selector) => Cypress.$(selector, document));

Cypress.Commands.add("getWithinIframe", (targetElement) => cy.get("iframe", {timeout: 20000}).iframeLoaded().its("document").getInDocument(targetElement));
