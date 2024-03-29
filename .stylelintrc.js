module.exports = {
  extends: "stylelint-config-sass-guidelines",
  ignoreFiles: [
    "./node_modules/**/*",
    "./src/components/layout/**"
  ],
  rules: {
    // we don't enforce css properties to be sorted alphabetically
    "order/properties-alphabetical-order": null,
    // stylelint-config-sass-guidelines requires 
    // you to omit the '.scss' ending in @import statements.
    // However, since we are using webpack to build the css,
    // and there are also non-scss files (like .js) in folders like /components,
    // webpack would try to import them into the scss and produce an error.
    // Hence, we need to be able to specify the file ending to actually
    // only import the .scss files.
    "scss/at-import-partial-extension-blacklist": null
  }
};