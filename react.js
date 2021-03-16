const typescript = require("./typescript");

module.exports = {
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks", "import"],
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    "import/order": typescript.rules["import/order"],
    "react/display-name": "warn",
    // // Checks rules of Hooks
    // "react-hooks/rules-of-hooks": "warn",
    // // Checks effect dependencies
    // "react-hooks/exhaustive-deps": "warn",
  },
};
