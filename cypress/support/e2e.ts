// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import "cypress-plugin-api";
import "./commands";
import "cypress-xpath";
import "cypress-real-events/support";
// @ts-ignore
import chaiColors from "chai-colors";
// @ts-ignore
import chaiSorted from "chai-sorted";
import addContext from "mochawesome/addContext";


chai.use(chaiColors);
chai.use(chaiSorted);

beforeEach(() => {
    cy.log('I can be run before each test across all projects')
});

//This function can be used to add screenshots to mochaewesome reports
Cypress.on("test:after:run", (test, runnable) => {
    if (test.state === "failed") {
        // @ts-ignore
        const screenshot = `assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title.replace('#', '%23')} (failed).png`;

        // @ts-ignore
        addContext({ test }, screenshot);
    }
});
