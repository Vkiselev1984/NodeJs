# Introduction to NPM

NPM (Node Package Manager) is a package manager for Node.js. However, NPM is not limited to Node.js - you can use NPM to manage packages for any JavaScript project, such as a frontend.

If you have already installed Node.js, it means that NPM is also installed on your computer , since NPM is an integral part of Node.js. Therefore, in order to make sure that npm is installed, just enter the following command in the terminal npm -v. This command allows you to find out the installed version of npm. If you see the version, then everything is fine and you have NPM!

NPM consists of two main components: NPM registry and NPM CLI.

**NPM registry**

You can search, browse, and download packages from the npm registry using the command line or a browser. You can also publish your own packages to the npm registry and share them with other developers.

You can always visit the official NPM website https://www.npmjs.com/ and search for the necessary packages for your project using the search bar.

**NPM CLI** is a command line interface for working with NPM. Using NPM CLI, you can perform various operations with packages, such as installing, removing, updating, viewing information, etc.

## How to initialize npm project?

Before we start working with npm, we need to get acquainted with such a concept as an npm project.

An npm project is any directory on your computer that contains a file package.json. The package.json file is a special file in JSON format that contains metadata about your project, such as the name, version, description, author, license, etc. The package.json file also specifies the dependencies
of your project, that is, the packages that are needed for your code to work.

In order to initialize an NPM project, you need to create a package.json file. This file can be created manually, but there is an easier way, you can run the npm init command in any directory on your computer that you want to make an npm project. You will be asked a few questions about
your project, such as the name, version, description, author, etc.

You can answer them or skip by pressing Enter. By default, the values from the global npm settings will be used. Once you answer all the questions or skip them, you will be shown the contents of the package.json file that will be created in your directory.

Let initialize an npm project in the current directory, you can run the following command:

```bash
npm init
```

The package.json file will be created in the current directory:

```Json
{
  "name": "test",
  "version": "1.0.0",
  "description": "Node.js is a platform that allows developers to write server-side programs in JavaScript. Node.js is not a programming language or a framework.",
  "main": "index.js",
  "scripts": {
    "test": "node ./index.js"
  },
  "author": "Kiselev",
  "license": "ISC"
}
```

## Example of package installation

Let's take the uuid package as an example of installation.

The uuid package allows you to generate unique identifiers. UUIDs are 36-character strings that consist of numbers and letters and have a specific format.

UUIDs can be useful for a variety of purposes, such as creating unique file names, database keys, authentication tokens, etc.

To install the uuid package into your project, you need to run the npm install uuid command. This command will download the uuid package from the npm registry and add it to your project. This command will also update the package.json file and add the uuid package as a key in the dependencies section, and also write the current version of the package as a value. This means that the uuid package is a dependency of your project - that is, your code cannot work without it.

Here is an example of what the package.json file looks like after installing the uuid package:

```Json
{
  "name": "test",
  "version": "1.0.0",
  "description": "Node.js is a platform that allows developers to write server-side programs in JavaScript. Node.js is not a programming language or a framework.",
  "main": "index.js",
  "scripts": {
    "test": "node ./index.js"
  },
  "author": "Kiselev",
  "license": "ISC",
  "dependencies": {
    "uuid": "^11.1.0"
  }
}
```

Please note that the uuid package version has a special ^ character at the beginning of the line. This character means that the package version needs to be updated. We will talk about installing and updating dependencies in the chapter Installing Project Dependencies.

In order to use the uuid package in your code, you need to create a new file next to package.json and the .js extension.

For example, index.js as specified on the fifth line in the package.json file.

After that, you need to open the file in the code editor and paste the following code there:

```js
const { v4: uuidv4 } = require("uuid"); // Import the v4 function from the uuid library
const id = uuidv4(); // Generate a unique identifier
console.log(id); // Print it to the console
```

Result:

```bash
93799aa4-bd60-4a13-86d0-d643973e2363
```

## What is node_modules and how does it work?

node_modules is a directory in your npm project that stores all installed packages and their dependencies. When you install a package using NPM, it is downloaded from the npm registry and placed in the node_modules directory. Also in the node_modules directory are all the packages that the installed package depends on.

For example, if you install the express package, the node_modules directory will also contain the body-parser, cookie-parser, debug, etc. packages that express needs to work.

The structure of the node_modules folder depends on which version of NPM is used to install packages.

The node_modules directory can be very large and contain many packages and files, so it is not recommended to add it to a version control system such as Git. Instead, you can add a .gitignore file to your project and specify that the node_modules directory should be ignored. If another developer downloads your project from Git, they can always install all dependencies using the npm install command, which will give them a node_modules directory with all dependencies. This way, you will save space and time when working with your project.

Example of .gitignore file:

```bash
# Node.js dependencies
node_modules/

# Logs
logs
*.log
npm-debug.log*

# Environment variables
.env

# OS-specific files
.DS_Store
Thumbs.db

# Build output
dist/
build/

# IDE-specific files
.idea/
.vscode/
*.sublime-project
*.sublime-workspace

# Coverage directory used by tools like istanbul
coverage/

# Temporary files
tmp/
temp/
```

1. node_modules/:

This directory contains all of your project's dependencies installed with npm. It can be regenerated with npm install, so there is no need to include it in the repository.

2. Logs:

Log files such as npm-debug.log may be created if there are errors during the build or run process. They should also not be added to the repository.

3. Environment Files:

.env files often contain sensitive data such as API keys and database settings. They should be excluded from the repository.

4. OS-Specific Files:

Files such as .DS_Store (created by macOS) and Thumbs.db (created by Windows) do not need to be in the repository.

5. Build Output:

The dist/ and build/ directories can be used to store built files. They should also not be stored in the repository.

6. IDE files:

If you are using an IDE such as JetBrains or Visual Studio Code, their configuration files can be excluded.

7. Coverage directory:

If you are using testing tools such as Istanbul that create a coverage/ directory, this should also be excluded.

8. Temporary files:

The tmp/ and temp/ directories can be used for temporary files and should also be excluded.

## Installing project dependencies

Once the project is initialized and published in the version control system, it can be downloaded by any developer on the development team to work with the code. As you remember, node_modules should not be added to the version control system, so
the developer needs to install all dependencies to run the project.

To do this, he can run two commands: npm install or npm ci

### The difference between npm install and npm ci

- **npm install** (without specifying a specific package) creates a node_modules directory and downloads all dependencies specified in package.json there, and also creates a package-lock.json file. If node_modules and package-lock.json already exist, npm install will check if all packages in package.json are in node_modules and install the missing packages. It is also important to understand that npm install will update packages that have a special ^ character in the version to more current ones and update version information in package-lock.json. If the special character ^ is not specified in the package version, the package will not be updated.

- **npm ci** (clean install), like npm install, will create the node_modules directory if it does not exist, but it will check the package versions against the package-lock.json file, and npm ci does not update the package versions. If the node_modules directory already exists, npm ci will delete it and create it, re-downloading all the necessary dependencies there. This is a safer way to install dependencies, since sometimes automatic package updates using npm install can break your code if the package developers made a mistake in the new version of the package, although this happens extremely rarely.

### What is package-lock.json?

package-lock.json is a special file that is created and updated automatically when you install or update npm packages. This file contains precise information about all installed packages in your project and their dependencies, including version numbers, hashes, and file paths.

package-lock.json is needed to ensure that you and other developers working on your project are using the same versions of packages and dependencies. This helps to avoid incompatibility issues or
errors when running or deploying your project.

package-lock.json ensures that if another developer downloads your project from Git and installs dependencies using the npm ci command, all package versions will be the same as yours.

You should not edit the package-lock.json file manually or remove it from your project. You should add it to version control to preserve its history and keep it in sync with other developers.

### What are dependencies and devDependencies and what is the difference between them?

dependencies are dependencies that are required for your code to run in production - that is, when you run or deploy your project to a real server or client. For example, if you are building a web application using
React, then React is a dependency.

devDependencies are dependencies that are only required for developing your code - that is, when you are writing, testing, or debugging your code on your local machine. For example, if you are using Jest to test your code, then Jest is a devDependencies.

Separating dependencies into two types helps optimize the size and speed of your project in production, since you do not need to install and download unnecessary packages that are not used in the production environment.

To install a package as a dependency, you must use the npm install <package-name> command without any additional flags. To install a package as a devDependencies dependency, you can use the command npm install <package-name> --save-dev or npm install <package-name> -D.

## What are NPM scripts?

Now let's look at another npm feature. You may notice that there is a scripts field in package.json. Here you can put various scripts that will help you in development.

NPM scripts are a way to automate various tasks related to your project. You can run npm scripts with the npm run <script-name> command on the command line, where <script-name> is the name of your script. The name of the script is the field itself in the scripts object.

Npm scripts can perform various actions, such as compiling, formatting, checking, testing, building, or publishing your code.

For example, you can create a script to run your code that generates a unique ID and prints it to the console.

To do this, you need to add a new start field to the scripts object with the value node index.js:

```json
{
  "name": "test",
  "version": "1.0.0",
  "description": "Node.js is a platform that allows developers to write server-side programs in JavaScript. Node.js is not a programming language or a framework.",
  "main": "index.js",
  "scripts": {
    "test": "node ./index.js",
    "start": "node index.js"
  },
  "author": "Kiselev",
  "license": "ISC",
  "dependencies": {
    "uuid": "^11.1.0"
  }
}
```

To use our new script, you need to write the following command in the console: npm run start and press Enter. The console will contain approximately the following text:

```bash
> test@1.0.0 start
> node index.js

8d06ed92-4975-4929-b400-b4a7c84ce997
```

## How to create your own package?

### Exporting from modules

Exporting functions and variables in node.js allows you to use them in other files or modules, allowing you to reuse code and making it easier to debug and maintain your application.

To export functions and variables in node.js, you need to use the module.exports object, which is a property of the global module object. This object contains everything that will be available for import in other files or
modules.

Let's create a file in our project and call it math.js
Open the file and add two functions there: add() - a function for adding numbers and subtract() - a function for subtracting numbers:

```javascript
// math.js
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};
```

To import functions and variables in node.js, you need to use the familiar require() function. It takes the path to the file or module from which you want to import. This function returns an object with the imported data, which can be stored in a variable and used to call functions or access variables.

For example, if we want to import the add and subtract functions from the math.js file into the index.js file, we can do the following:

```javascript
// index.js
const { v4: uuidv4 } = require("uuid");
const id = uuidv4();

const math = require("./math.js");

console.log(math.add(1, 2));
console.log(math.subtract(1, 2));
console.log(id);
```

> 💡 Note the two calls to the require() function.
> In the first case, require('uuid') there is no need to specify the relative path, i.e. add ./ or ../ , since this is an installed npm package.
> In the second case, you can also omit the relative path ./ if the file is in the same directory where we import the module, but remember that if the file is in another directory, for example, libs , then we will need to call require like this: require(’./libs/math.js’).
> In order not to confuse local files with installed packages, it is recommended to always specify the relative path, as in the example with the code: require(’./math’);
> It is also worth noting that we did not specify the math file extension. This is acceptable in node.js. Node.js allows you to specify files with or without an extension.

Now you understand that the code in the project can be written in different files and imported using require() anywhere.

In general, if you look at the source code of any npm package, you can see that npm packages are structured exactly the same as our own math.js module.

For example, the v4 function of the uuid package is a function that is exported by the main module of the package.
