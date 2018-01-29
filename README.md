# async-main

[![NPM](https://nodei.co/npm/async-main.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/async-main/)

[![Build Status](https://travis-ci.org/sehrope/node-async-main.svg?branch=master)](https://travis-ci.org/sehrope/node-async-main)

# Overview
Simple wrapper for async main functions.

Combined with async/await, this makes it very easy to write simple async node scripts.

* [Install](#install)
* [Usage](#usage)
* [Features](#features)
* [Building and Testing](#building-and-testing)
* [License](#license)

# Install

    $ npm install async-main --save

# Usage
With JavaScript:
```js
const main = require('async-main').default;
main(async () => {
    // Do stuff
})
```

With Typescript:
```typescript
import main from 'async-main';
main(async () => {
    // Do stuff
})
```

# Dependencies

None!

# Features
* Wraps a promisifed main function and executes it.
* ... if the promise resolves then the program exits with a success exit code (0).
* ... if the promise rejects then it prints the stack trace of the Error and exits with a non-success exit code (1).

# Building and Testing
To build the module run:

    $ make

Then, to run the tests run:

    $ make test

# License
ISC. See the file [LICENSE](LICENSE).
