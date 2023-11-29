const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

let assetPrefix = ''
let basePath = '/'
const isGithubActions = process.env.GITHUB_ACTIONS || false
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}
console.log({ assetPrefix, basePath })

module.exports = withNextra({
  images: {
    domains: ["github.com"],
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true ,
  assetPrefix,
  basePath,
});
