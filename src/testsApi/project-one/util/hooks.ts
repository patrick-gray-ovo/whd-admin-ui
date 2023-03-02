import { AfterAll, Before } from "@cucumber/cucumber";

//This function will run before every scenario with the tags
Before({ tags: "@tag-name or @second-tag-name" }, async function () {
    return "do something"
});

//This function will run after all the scenarios have completed
AfterAll(async function () {
    return "do something"
});
