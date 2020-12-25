# @flayyer/eslint-config

Please use this configuration to maintain a common and homogeneous code base.

## Install

Install this package as any other package with:

```sh
yarn add --dev @flayyer/eslint-config eslint prettier
```

Create a `.eslintignore` and add any files that are bundled, builded and/or _transpiled_:

```txt
!.eslintrc.js

.vscode
.next
dist
public
node_modules
```

In the `package.json` file add the following in the `"scripts"` section:

```js
 {
   // ...
   "scripts": {
     // ...
     "lint": "eslint '*/**/*.{js,ts,tsx}'",
   },
 }
```

### Configure for Typescript

Create a `.eslintrc.js` file in the root of your project and add the following:

```js
// .eslintrc.js
module.exports = {
  extends: [
    "@flayyer/eslint-config",
    "@flayyer/eslint-config/typescript",
    "@flayyer/eslint-config/jest",
    "@flayyer/eslint-config/prettier",
  ],
};
```

### Configure for React + Typescript

Create a `.eslintrc.js` file in the root of your project and add the following:

```js
// .eslintrc.js
module.exports = {
  extends: [
    "@flayyer/eslint-config",
    "@flayyer/eslint-config/typescript",
    "@flayyer/eslint-config/react",
    "@flayyer/eslint-config/jest",
    "@flayyer/eslint-config/prettier",
  ],
};
```

## Usage

To lint the files run:

```sh
yarn lint
```

To lint the files and **auto-format** run:

```sh
yarn lint --fix
```

## Setup Visual Studio Code

Create file `.vscode/settings.json`

```sh
mkdir -p .vscode
touch .vscode/settings.json
```

Add the following:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```

## Publishing

To publish and update of this package run:

```sh
# git add ...
# git commit ...

git push --follow-tags
yarn publish --access=public
```
