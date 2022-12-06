
import path from "node:path";
import fs from "node:fs";
import os from "node:os";
import child from "node:child_process";
import chalk from "chalk";
import { sync as commandExists } from "command-exists";
import __dirname from "./dir";

const OS = os.platform();
const isWindows = OS === "win32";
const isMacos = OS === "darwin";
const isLinux = !isWindows && !isMacos;

const main = () => {
  if(!commandExists("youtube-dl")) {
    // install youtube-dl
    console.log("youtube-dl doesnt exist. exiting for now");
  }
};

main();
