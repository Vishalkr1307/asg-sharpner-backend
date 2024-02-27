

##How does the internet work in your own words?

The internet is a global network of interconnected computers that communicate with each other using a standardized set of rules called protocols. When you access a website or send an email, your device sends data packets across various networks through routers and switches until they reach their destination. These packets contain information such as the sender's and receiver's addresses and the actual data being transmitted. At its core, the internet relies on protocols like TCP/IP, HTTP, and DNS to ensure reliable communication and data transfer.

What are the core modules of Node.js?

Node.js has a rich ecosystem of core modules that provide essential functionality for building web applications, servers, and more. Some of the core modules include:

http: Provides functionality to create HTTP servers and clients.
fs: Offers file system operations, such as reading and writing files.
path: Helps with path-related operations, such as resolving and joining paths.
events: Allows developers to create and handle custom events.
util: Provides utility functions useful for debugging and working with objects.
Explain the use of each one of them in detail.

http: This module allows you to create HTTP servers and clients. With the http.createServer() method, you can create an HTTP server to handle incoming requests and send responses. The http.request() method allows you to make HTTP requests to other servers.

fs: The fs module provides file system operations like reading, writing, and manipulating files. You can use methods like fs.readFile() to read a file asynchronously, fs.writeFileSync() to write a file synchronously, and fs.readdirSync() to read the contents of a directory synchronously.

path: The path module provides utilities for working with file and directory paths. It helps in resolving and normalizing paths across different operating systems. You can use methods like path.join() to concatenate paths and path.resolve() to resolve an absolute path.

events: This module provides an event emitter pattern, allowing you to create and handle custom events in your applications. You can use the events.EventEmitter class to define custom event emitters and listeners using methods like on(), emit(), and once().

util: The util module provides various utility functions useful for debugging and working with objects. It includes functions like util.promisify() to convert callback-based functions into promise-based functions, util.format() for string formatting, and util.inspect() for inspecting objects.

What are relative path and absolute path? How to define them?

Relative path: A relative path is a path that is relative to the current working directory or another specified directory. It specifies the location of a file or directory relative to the location of the current script or the directory from which the script is being executed. Relative paths can be defined by specifying the path to the file or directory relative to the current location using directories like ./ (current directory) and ../ (parent directory).

Absolute path: An absolute path is a complete path that specifies the exact location of a file or directory from the root of the file system. It starts from the root directory and includes all directories leading to the file or directory. Absolute paths are not dependent on the current working directory and always point to the same location regardless of where the script is executed.

What does createServer do?

The createServer function is a method provided by the http module in Node.js. It is used to create an HTTP server that listens for incoming HTTP requests. When a client makes a request to the server, the server's callback function, commonly referred to as a request handler, is called with details about the request (such as the URL, headers, etc.) and a response object that allows you to send back a response to the client.

What are anonymous functions?

An anonymous function is a function that is defined without a name. Instead of being assigned to a variable or named explicitly, anonymous functions are usually defined inline as function expressions. They are commonly used as callback functions or for one-time use where a named function isn't necessary. For example:

javascript
Copy code
setTimeout(function() {
    console.log("This is an anonymous function");
}, 1000);
What do you think server.listen exactly do? Why do we need it?

The server.listen() method starts the HTTP server listening for incoming connections on a specified port and optional hostname. When you call server.listen(port), it tells the server to start listening on the specified port for incoming HTTP requests. If you provide a hostname as well, it will only accept connections targeted at that hostname. We need it to make our HTTP server active and ready to accept incoming requests from clients. Without calling server.listen(), the server will not be able to receive any requests.



