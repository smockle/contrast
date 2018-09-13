module.exports = {
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testRegex: ".*\\.spec\\.ts$",
  moduleFileExtensions: ["ts", "js", "mjs", "json", "node"],
  collectCoverage: true,
  reporters: ["default", ["jest-junit", { output: "./artifacts/junit.xml" }]]
};
