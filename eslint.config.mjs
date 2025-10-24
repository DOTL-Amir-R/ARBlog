/* eslint-disable import/no-anonymous-default-export */
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});
export default [
	...compat.extends(
  "next/core-web-vitals",
  "plugin:react/jsx-runtime",
  "eslint:recommended",
  "plugin:@typescript-eslint/recommended",
  "prettier"
),
 {
  plugins: {
    "@typescript-eslint": typescriptEslint,
    "prettier": prettierPlugin,
  },
  languageOptions: {
    parser: tsParser,
  },
  rules: {
    "max-len": [ "error",
       { "code": 80,
        "tabWidth": 2,
        "ignoreComments": false,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
       }],
    "semi": ["error", "always"],
    // "react/jsx-indent": [<enabled>, 'tab'|<number>, {checkAttributes: <boolean>, indentLogicalExpressions: <boolean>}]
    "quotes": ["error", "double"],
     // Enforces a maximum of 80 characters per line
    "react/jsx-indent": ["error", 2], // Enforces 2 spaces for JSX indentation
    "react/jsx-indent-props": ["error", 2],
     // Enforces 2 spaces for JSX props indentation
    "no-multiple-empty-lines": ["error", { "max": 0 }]
  },
}];