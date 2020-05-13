module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    'allowImportExportEverywhere': true // ignore eslint error: 'import' and 'export' may only appear at the top level
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: 'eslint:recommended',
  // required to lint *.vue files
  plugins: [
    'html',
    'vue',
    'jsx'
  ],
  // add your custom rules here
  'rules': {
    
  }
}
