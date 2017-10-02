# Node Amazing Boilerplate

> An amazing, simple and powerful Node boilerplate

This project is built with **[Backpack](https://github.com/jaredpalmer/backpack)** and configured to use:

- **[Express](https://expressjs.com/)**
- **[ESLint](https://eslint.org)**
- **[Jest](https://facebook.github.io/jest/)**
- **[Flow](https://flow.org/)**
- **[Husky](https://github.com/typicode/husky)**

## How to use

- Clone this **repo** and enter it

- If you don't have **[Yarn](https://yarnpkg.com)** installed yet, install it

```
npm i -g yarn
```

- Install the **dependencies**

```
yarn
```

## Commands available

- To start the application in development mode use

```
yarn dev
```

- To run **Flow** use

```
yarn flow
```

- To run **ESLint** use

```
yarn lint
```

- To run the tests use

```
yarn test
```

- To run the tests in watch mode use

```
yarn test:watch
```

- To build the application for production use

```
yarn build
```

- To start the application in production mode use

```
yarn start
```

## Git Hooks

This project uses **Husky** to create and manage Git hooks, it already comes with two hooks configured:

- Before you commit and before you push your changes it will run: **ESLint**, **Flow** and **Jest** tests

- If you want to, you can configure other hooks, edit or even delete the existing ones.
