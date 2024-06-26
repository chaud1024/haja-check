module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      { runtime: "automatic", importSource: "@emotion/react" },
    ],
    ["@emotion/babel-preset-css-prop"],
  ],
  plugins: ["@emotion/babel-plugin"],
};
