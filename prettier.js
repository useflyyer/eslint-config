module.exports = {
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        tabWidth: 2,
        printWidth: 120,
        singleQuote: false,
        semi: true,
      },
      { usePrettierrc: true },
    ],
  },
};
