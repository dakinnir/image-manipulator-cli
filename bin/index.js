#! /usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";

/**
 * Edit image passed in command line arguments
 * @param
 * @returns {void}
 */

const options = yargs(hideBin(process.argv))
.usage("Usage: $0 [options]")
.option("m", {alias:"url", describe: "The path url to the image", type: "string", demandOption: true })
.option("f", {alias:"flip", describe: "Flip the image", type: "boolean", demandOption: true })
.help(true)
.argv;



function editImage() {
  const argv = yargs(hideBin(process.argv)).argv;
  console.log(argv);
  const args = argv._;
  if (args.length < 1) {
    console.log(chalk.red("Please provide an image path"));
    return;
  }
  console.log(args);
  console.log(chalk.green("Image path was successfully edited"));
}

editImage();
