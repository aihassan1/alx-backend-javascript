Node.js Basics - 0x05
This repository contains the code for the Node.js Basics - 0x05 project.

Project Description
This project will introduce you to the fundamentals of Node.js development. You will learn how to:

Run JavaScript using Node.js
Use Node.js modules
Use specific Node.js modules to read files
Access command line arguments and the environment using process
Create small HTTP servers using Node.js and Express.js
Use ES6 with Node.js with Babel-node
Use Nodemon to develop faster
The project consists of eight tasks, each building on the previous one.

Learning Objectives
By the end of this project, i was able to:

Explain, without the help of Google, how to:
Run JavaScript using Node.js
Use Node.js modules
Use specific Node.js modules to read files
Access command line arguments and the environment using process
Create small HTTP servers using Node.js and Express.js
Use ES6 with Node.js with Babel-node
Use Nodemon to develop faster
Requirements
Editors: vi, vim, emacs, Visual Studio Code
Operating System: Ubuntu 18.04 LTS
Node.js version: 12.x.x
JavaScript Extension: .js
Testing: Jest and the command npm run test
Linting: ESLint. Your code needs to pass all tests and lint checks. You can verify the entire project by running npm run full-test
Function/Class Export: All of your functions/classes must be exported using this format: module.exports = myFunction;
Provided Files
database.csv: A CSV file containing student data.
package.json: The project's package.json file.
Babel configuration (babel.config.js) (if applicable)
ESLint configuration (eslintrc.js) (if applicable)
Important: Run $ npm install after cloning the repository to install required dependencies.

Tasks

1. Executing basic javascript with Node JS (0-console.js)

Learned: How to run JavaScript code using Node.js by requiring a module and calling its exported function. 2. Using Process stdin (1-stdin.js)

Learned: How to use the process module to interact with standard input (stdin) and standard output (stdout). This involves prompting the user for input and displaying messages. 3. Reading a file synchronously with Node JS (2-read_file.js)

Learned: How to use Node.js to synchronously read a file's content. This task covers handling potential errors (like the file not existing) and parsing the data (CSV file in this case). 4. Reading a file asynchronously with Node JS (3-read_file_async.js)

Learned: How to use Node.js to asynchronously read a file's content using Promises. This is a preferred approach for avoiding blocking the main thread. The task also covers handling errors and parsing data. 5. Create a small HTTP server using Node's HTTP module (4-http.js)

Learned: How to create a basic HTTP server using Node.js's built-in http module. This involves listening on a port and responding to requests with plain text content. 6. Create a more complex HTTP server using Node's HTTP module (5-http.js)

Learned: How to build upon the basic HTTP server by handling different URL paths and responding with dynamic content based on the path (e.g., displaying student information from a file). 7. Create a small HTTP server using Express (6-http_express.js)

Learned: How to use Express.js, a popular web framework for Node.js, to create a simple HTTP server. This introduces concepts like routing and middleware. 8. Create a more complex HTTP server using Express (full_server directory)

Learned: How to organize a complex HTTP server application using Express.js. This involves creating separate files for controllers, routes, and utilities. You'll also learn how to use ES6 features (like import/export) with Babel and handle errors appropriately.
