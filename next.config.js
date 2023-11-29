const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

const config = {
  images: {
    domains: ["github.com"],
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true ,
};

const isGithubActions = process.env.GITHUB_ACTIONS || false;
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  config.assetPrefix = `/${repo}/`
  config.basePath = `/${repo}`
}

module.exports = withNextra(config);
