// module.exports = {
//   env: {
//     node: true
//   },
//   extends: [
//     'molindo/typescript',
//     'molindo/react',
//     'molindo/tailwind',
//     'plugin:@next/next/recommended'
//   ],
//   rules: {
//     "no-console": "off"
//   }
// };
{
  "plugins": ["import"],
  "rules": {
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "never"
      }
    ]
  }
}