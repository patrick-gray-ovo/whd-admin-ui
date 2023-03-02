module.exports = {
    nonGlobalStepDefinitions: true,
    stepDefinitions: [
        // Steps and hooks SharedUtils by all workstreams
        "src/testsUi/shared/steps/*.ts",
        "src/testsUi/**/steps/*.ts",
    ],
    cucumberJson: {
        generate: true,
        outputFolder: "src/testsUi/utils/reports",
        filePrefix: "",
        fileSuffix: ".cucumber",
    },
};
