const { returns } = require("chai-spies");

function receivesAFunction(cb) {
    cb()
}

receivesAFunction(() => console.log("Yo!!"))

function returnsANamedFunction() {
    return returnsAnAnonymousFunction;
}

function returnsAnAnonymousFunction() {
    return () => console.log("What's up");
}