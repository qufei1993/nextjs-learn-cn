const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
  images: {
    domains: ["github.com"],
  },
  output: "export",
  images: {
    unoptimized: true,
  },
});
