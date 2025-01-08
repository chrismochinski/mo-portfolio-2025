module.exports = {
  parser: "typescript",
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  overrides: [
    {
      files: "*.yml",
      options: { parser: "yaml" },
    },
    {
      files: "*.yaml",
      options: { parser: "yaml" },
    },
    {
      files: "*.md",
      options: { parser: "markdown" },
    },
    {
      files: "*.mdx",
      options: { parser: "mdx" },
    },
    {
      files: "*.json",
      options: { parser: "json" },
    },
    {
      files: "*.html",
      options: { parser: "html" },
    },
    {
      files: "*.css",
      options: { parser: "css" },
    },
    {
      files: "*.js",
      options: { parser: "babel" },
    },
  ],
};
