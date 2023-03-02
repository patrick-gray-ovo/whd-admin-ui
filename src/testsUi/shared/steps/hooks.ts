/**
 * This hook function runs before steps in all projects. If you need to add something that is only relevant to one project, use the hooks file the project's own step directory, eg uiTests/project-1/steps/hooks.ts
 */
beforeEach(() => {
    cy.log("hello");
});
