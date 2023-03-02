module.exports = {
    default: "--publish-quiet",
    "project-one": [
        "--require-module ts-node/register",
        "--require src/testsApi/**/steps/**/*.ts",
        "--require src/testsApi/sharedSteps.ts",
        "--require src/testsApi/sharedUtils.ts",
        "--require src/testsApi/**/util/*.ts",
        "--format @cucumber/pretty-formatter",
        "--publish-quiet",
        "--exit",
        "src/testsApi/**/features/**/*.feature",
    ].join(" "),
};
