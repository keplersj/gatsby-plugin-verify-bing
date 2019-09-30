module.exports = {
  projects: [
    {
      displayName: "lint:prettier",
      preset: "jest-runner-prettier",
      testPathIgnorePatterns: [
        "/node_modules/",
        "/gatsby-node.js",
        "/gatsby-node.js.map",
        "/gatsby-node.d.ts",
        "/gatsby-node.d.ts.map",
        "/gatsby-ssr.js",
        "/gatsby-ssr.js.map",
        "/gatsby-ssr.d.ts",
        "/gatsby-ssr.d.ts.map"
      ]
    }
  ]
};
