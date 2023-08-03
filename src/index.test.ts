import { combineIntoConfiguration } from "../node_modules/@badeball/cypress-cucumber-preprocessor/dist/preprocessor-configuration";
import { TestingType } from "@badeball/cypress-configuration/dist/cypress-configuration/cypress-post10-configuration";

const explicitConfiguration = {
    e2e: {
        stepDefinitions: [
            "cypress/e2e/[filepath].js",
            "someFolder/cypress/support/step_definitions/*.js"
        ]
    }
};
const environmentOverrides = {};
const cypressConfig = {
    specPattern: "cypress/e2e/**/*.feature",
    excludeSpecPattern: "*.hot-update.js",
    testingType: "e2e" as TestingType,
    projectRoot: "",
    reporter: "spec",
    env: {
        __cypress_cucumber_preprocessor_dont_use_this_suite: {
            isEventHandlersAttached: true
        }
    }
};
const implicitIntegrationFolder = "/";

test("expect explicitConfiguration to override defaults", () => {
    const result = combineIntoConfiguration(
        explicitConfiguration,
        environmentOverrides,
        cypressConfig,
        implicitIntegrationFolder
    );

    expect(result.stepDefinitions).toEqual([
        "cypress/e2e/[filepath].js",
        "someFolder/cypress/support/step_definitions/*.js"
    ]);
});
