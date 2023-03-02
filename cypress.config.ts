import { defineConfig } from "cypress";
import { downloadFile } from 'cypress-downloadfile/lib/addPlugin'
import createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { rmdir, readdirSync } from "fs";

export default defineConfig({
    watchForFileChanges: false,
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    video: false,
    screenshotsFolder: "docs/cypress-html/assets",
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/results/json",
            "overwrite": false,
            "html": false,
            "json": true,
            "quiet": true
        }
    },
    e2e: {
        async setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
            // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
            await addCucumberPreprocessorPlugin(on, config);


            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                }),
            );

            on('task', {downloadFile})

            on('task', {
                downloads:  (downloadPath) => {
                    return readdirSync(downloadPath)
                }
            })

            on('task', {
                deleteFolder(folderName) {
                    console.log('deleting folder %s', folderName)

                    return new Promise((resolve, reject) => {
                        rmdir(folderName, { maxRetries: 10, recursive: true }, (err) => {
                            if (err) {
                                console.error(err)
                                return reject(err)
                            }
                            resolve(null)
                        })
                    })
                },
            })

            // Make sure to return the config object as it might have been modified by the plugin.
            return config;
        },
        specPattern: "src/testsUi/**/features/*.feature",
        experimentalRunAllSpecs: true
    },
});
