// eslint.config.mjs
import antfu from "@antfu/eslint-config";
import vuejsAccessibility from "eslint-plugin-vuejs-accessibility";

export default antfu({
  vuejsAccessibility,
  stylistic: {
    semi: true,
    quotes: "double",
  },
  rules: {
    "ts/consistent-type-definitions": "off",
    "style/quote-props": "off",
  },
  ignores: ["**/*.md"],
});
