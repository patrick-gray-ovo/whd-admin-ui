import { Given} from "@badeball/cypress-cucumber-preprocessor";
import { classNameForFunctions } from "../util/utils-1";
import { classNameForPageObjects } from "../util/utils-1";

Given("I visit google", () => {
    classNameForFunctions.visitGoogle()
})

Given("I click accept cookies", () => {
     classNameForPageObjects.getAcceptCookies().click()
})