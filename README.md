# Cucumber/Typescript Framework

A template framework containing templates and ideas that encompass the following:

- BDD scenarios  
- Front end testing using Cypress (with reporting)
- API tests using Axios
- Feature File Linting
- GitHub Actions

Please get in touch if you see any issues or feel free to raise a PR/issue

## Setup

-   Install node 16+
-   Will need the following .env files:
    -   src/testsApi/.env for api tests
    -   cypress.env.json for UI Tests

Then run..

```  
npm install  
```  

## API Tests

### Cucumber Profiles
See `./cucumber.js` for profiles, it starts with one profile for project one but you can add more to allow 
of tests per project

### Folder Structure

Example feature files and steps live in `Cucumber-Framework/src/testsApi/project-one`

`Feature Files`: BDD Scenarios

`Steps`: Connecting Steps to Scenarios, call on functions written at util level

`Util`: Home for abstracted/reusable functions

### How to run tests:
Run specific tests by tagging with `@test` and run..

```  
npm run project-one-test
```
Run the same test parallelized with 5 threads..
```  
npm run project-one-test-parallel
```
Run all the tests in project one
```  
npm run project-one-all
```

## UI/Front End Tests

UI tests are set up using Cypress, this is all pretty straight forward

`npx cypress open`: open tests in UI mode

`npx cypress run`: open tests in headless mode and this will run all of them

`Features`: BDD Scenarios

`Steps`: Connecting scenarios to code

`Util`: Abstracted/reusable functions in one class, page object model in a seperate class. One
Util file per page you're testing

## Reports

In order to generate HTML reports for Cypress runs, you need to do the following:

`npx cypress run`

`npm run ui-merge-report`

`npm run ui-generate-html`

or....

`npm run cypress-test-and-report`

and that will run all of them in the correct order







