# Intro to Node.js and NPM

### Lecture Questions:

0. What did we learn in the past month (before Spring Break)?
1. How do we run JavaScript in the browser? What about running multiple JavaScript files?
2. How can we run JavaScript outside the browser? Why might engineers want to program in JavaScript on a server rather than in the browser?
3. What is [Node.js](https://nodejs.dev/) and why does it exist?
4. How can we run multiple JavaScript files using node? How does the require method work?
5. What is `module.exports`?
6. What's the difference between a [node module and package](https://docs.npmjs.com/about-packages-and-modules)?







## Interactive Activity (Code-Along)

### 1. Create a new Node Project
* Use `npm init` to start a new node project
* View the `package.json` file, this is meta data for your project

### 2. Create an `npm start` script
* Add the key-value pair `"start": "node index.js"` to the script object.
* Now, running `npm start` from the command line is equivalent to running `node index.js`
* You can add as many scripts as you want, but `npm start` in the most common!

### 3. Download NPM Modules from the npm registry!
* https://www.npmjs.com/ is where you can find open-source NPM packages
* Let's find an npm package that will generate superhero names for us!
* `npm install <package-name>`
* Check your `package.json` file, this is where your dependencies live!
* In your code, `require('package-name')` and save the return value as a variable
* Start using the node package!


## Extention Activity
* Research a package called `supervillains`. How can you incorpate that in your app to log a string of `Ironman fights Loki!`?
* https://www.npmjs.com/package/supervillains


## Super Extention Activity
1. https://www.npmjs.com/package/owofy
2. https://www.npmjs.com/package/yes-no-words 
3. https://www.npmjs.com/package/colors



### Key Terms:
- Node.js
- runtime environment
- module.exports
- require
- npm (node package manager)
- `node_modules` folder

### Next Steps
- Canvas, go through the Learning Assignments for the first few lessons
- Your first assignment will be published tomorrow morning and due Firday morning. 