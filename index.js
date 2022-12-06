var path = require("path");
var fs = require("fs");
var os = require("os");
var execSync = require("child_process").execSync;
var chalk = require("chalk");
var commandExists = require("command-exists").sync;
var main = function () {
    if (!commandExists("youtube-dl")) {
        // install youtube-dl
        console.log("youtube-dl doesnt exist. exiting for now");
    }
};
main();
