# superfans-sharebox

Another showcase for Typescript and React.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tools & Libraries

- Create React App: boilerplate of choice with React support bundling, code checks and moreover;
- Craco: overwrite Create react App settings without ejecting the CRA;
- Typescript: subset JavaScript language implementing type checking;
- CSS Modules: Approach designed to fix the problem of the global scope in CSS. Added by Create React App;
- Tailwindcss: styling framework of choice;
- Prettier: awesome tool multi-platform for an unified way of writing clean code across the developer team;
- lint-staged: adding extra task on git pre-commit for linting the code;
- gh-pages: for deploying to GitHub Pages;
- react-hot-loader: Tweak React components in real time ⚛️⚡️;

## Considerations

### State management

For such small web application I didn't want add complexity with a state manager like Redux. (But honestly was also to save some time :money_mouth_face: )

Instead, for this app example, I approached a simple state offline ready and made thanks to the help of `use-global-hook` npm library and browser LocalStorage support.

### Syncs across browser tabs

No syncing between browser tabs implemented because it's only for demo purpouse. In a real scenario with backend data support, our frontend web application shouldn't need it at all. But an idea could be using [BroadcastChannel](https://github.com/pubkey/broadcast-channel)

### Internationalization i18n

No internationalization implemented.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn deploy`

Launches the test automatic build and then deploy the app to GitHub Pages hosting platform. Package.json contain the proper "homepage" setting as only required parameter.
