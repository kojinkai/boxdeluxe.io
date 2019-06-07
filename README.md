[nvm]: https://github.com/nvm-sh/nvm
[contentful]: https://app.contentful.com/
[storybook]: https://storybook.js.org
[react]: https://reactjs.org/
[jest-cli]: https://jestjs.io/docs/en/cli
[react-testing-library]: https://github.com/testing-library/react-testing-library
[jest-puppeteer]: https://github.com/smooth-code/jest-puppeteer/

# Boxdeluxe 2019

This repository contains the Static Site code for rendering CMS data held in your [Contentful][contentful] account.

## Table of contents

- [Boxdeluxe.io](#espi-ui-kit)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Project Folder Structure](#project-folder-structure)
  - [Available Tasks](#available-tasks)
  - [Environment Variables](#environment-variables)
  - [Development](#development)
    - [Watching for Changes](#watching-for-changes)
    - [Git Hooks](#git-hooks)
  - [Deployment](#deployment)
  - [Learn Gatsby](#learn-gatsby)
  


## Installation

If not already set up, install [node version manager][nvm] to manage your node version.

Then run the following commands from your terminal application

```shell
# use the correct node version
nvm use
```

```shell
# install yarn globally against this node version
npm i -g yarn
```

```shell
# install the dependencies
yarn install
```

```shell
# start the gatyby server on port 8000
yarn run dev
```

## Project Folder Structure

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── .vscode
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .nvmrc
    ├── .stylelintrc.js
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    └── README.md
    └── yarn.lock


1.  **`.vscode`**: Debugger Presets for vscode. They will appear as options in the debug dropdown in vscode.

2.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

3.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.


4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`.nvmrc`**: Runtime configuration for [NVM][nvm]. NVM is used to manage and switch between node js versions used on each project.

6.  **`.stylelintrc.js`**: Contains linting rules for the SCSS code. This helps keep the SCSS files consistently formatted Automatatically. 

7.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

8.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

9.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

10.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

11.  **`LICENSE`**: Gatsby is licensed under the MIT license.

12. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

13. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

14. **`README.md`**: A text file containing useful reference information about your project.

15. **`yarn.lock`**: A lockfile for capturing the exact dependency versions in order to reproduce the build conditions across environments.

## Available Tasks

To start the Gatsby live reload server and listen for changes simply run

```shell
yarn develop
```

To build the app for production

```shell
yarn build
```

To serve the app in production more

```shell
yarn serve
```

To run the tests

```shell
yarn test
```

## Environment Variables

in order to return data from contentful we need to supply a `spaceId`and an `accessToken`. These values are available from your [Contentful Dashboard][contentful].

These keys and their values can be added to a `contentful.json` file. They can also be exported to your shell environment which will overwrite the values stored in the `contentful.json`

The options are

```shell
# Exporting these values to your shell environment will overwrite those in contenful.json
CONTENTFUL_SPACE_ID
CONTENTFUL_DELIVERY_TOKEN
```

see `gatsby-config.js` for details.

## Development

### Watching for Changes

To run Gatsby and reload when the source files are changes you can run the following from the root directory

```shell
yarn develop
```

### Git Hooks

When attempting to commit files in this repository, some tasks will automatically run to ensure a consistently high level of code quality:

- **JavaScript files (.js):**

  - runs `eslint` and automatically fixes auto-fixable issues ([see related JS guidelines here](https://github.com/airbnb/javascript))

If any of the tasks fail (which means your code cannot be automatically fixed by the linting tools or the test suite is failing), your commit will be aborted.

## Deployment

hosted on netlify

## Learn Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

