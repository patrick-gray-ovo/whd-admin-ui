import { Given, When, Then } from "@cucumber/cucumber";

Given("I do something", async () => {
    return "I've done something"
});

When("I do something else", async () => {
    return "I've done something else"
});

Then("something should happen", async () => {
    return "something happened"
});