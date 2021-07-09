# @flyyer/eslint-config

Please use this configuration to maintain a common and homogeneous code base.

## Install

Install this package as any other package with:

```sh
yarn add --dev @flyyer/eslint-config eslint prettier
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

### Configure for Javascript

Create a `.eslintrc.js` file in the root of your project and add the following:

```js
// .eslintrc.js
module.exports = {
  extends: [
    "@flyyer/eslint-config",
    "@flyyer/eslint-config/jest",
    "@flyyer/eslint-config/prettier",
  ],
};
```

### Configure for Typescript

Create a `.eslintrc.js` file in the root of your project and add the following:

```js
// .eslintrc.js
module.exports = {
  extends: [
    "@flyyer/eslint-config",
    "@flyyer/eslint-config/typescript",
    "@flyyer/eslint-config/jest",
    "@flyyer/eslint-config/prettier",
  ],
};
```

### Configure for React + Typescript

Create a `.eslintrc.js` file in the root of your project and add the following:

```js
// .eslintrc.js
module.exports = {
  extends: [
    "@flyyer/eslint-config",
    "@flyyer/eslint-config/typescript",
    "@flyyer/eslint-config/react",
    "@flyyer/eslint-config/jest",
    "@flyyer/eslint-config/prettier",
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

To make changes to this package run:

```sh
yarn link
yarn link '@flyyer/eslint-config'
```

To publish and update of this package run:

```sh
# git add ...
# git commit ...

git push --follow-tags
yarn publish --access=public
```

Unlink this package:

```sh
yarn unlink '@flyyer/eslint-config'
yarn unlink
```
