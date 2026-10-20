# Create React App with TypeScript

The source and tests use TypeScript with strict type checking. Run `npm run typecheck` to check types without building. Edit `src/App.tsx` to update the app.

This directory is a brief example of a [Create React App](https://github.com/facebook/create-react-app) site that can be deployed to Vercel with zero configuration.

## Deploy Your Own

Deploy your own Create React App project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/framework-boilerplates/create-react-app&template=create-react-app)

_Live Example: https://create-react-template.vercel.app/_

## Available Scripts

### Styling

Tailwind CSS 3 is configured for the Create React App build. Use utility classes in JSX, for example `className="text-3xl font-bold"`. Customize the theme in `tailwind.config.js`; global styles and Tailwind directives live in `src/index.css`. Run `npm run dev` for development or `npm run build` for production.

### Formatting

Prettier enforces 4-space indentation. Run `npm run format` to format all supported project files, or `npm run format:check` to check formatting without changing files. Generated build output, dependencies, and the npm lockfile are excluded.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
