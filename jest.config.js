const testPathIgnorePatterns = [
  "/node_modules/",
  "/gatsby-node.js",
  "/gatsby-node.js.map",
  "/gatsby-node.d.ts",
  "/gatsby-node.d.ts.map",
  "/gatsby-ssr.js",
  "/gatsby-ssr.js.map",
  "/gatsby-ssr.d.ts",
  "/gatsby-ssr.d.ts.map",
  "/coverage/"
];

module.exports = {
  collectCoverage: true,
  projects: [
    {
      displayName: "test",
      preset: "ts-jest",
      snapshotSerializers: ["jest-serializer-xml"],
      collectCoverage: true
    },
    {
      displayName: "lint:prettier",
      preset: "jest-runner-prettier",
      testPathIgnorePatterns
    },
    {
      runner: "eslint",
      displayName: "lint:eslint",
      testPathIgnorePatterns,
      testMatch: [
        "<rootDir>/**/*.ts",
        "<rootDir>/**/*.tsx",
        "<rootDir>/**/*.js"
      ]
    }
  ]
};
