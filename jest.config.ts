import { pathsToModuleNameMapper, JestConfigWithTsJest } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  roots: ["<rootDir>"],
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleDirectories: ["node_modules", "<rootDir>"],
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths), // Uncomment if the package uses path aliases
  setupFiles: ["./jest.setup.ts"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  testEnvironment: "node",
  coveragePathIgnorePatterns: ["/node_modules/"],
  // testResultsProcessor: "jest-sonar-reporter", TODO: Configure Sonarqube
};

export default jestConfig;
