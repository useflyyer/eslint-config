module.exports = {
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        tabWidth: 2,
        printWidth: 120,
        singleQuote: false,
        semi: true,
        endOfLine: "auto", // Windows error
      },
      { usePrettierrc: true },
    ],
  },
};
