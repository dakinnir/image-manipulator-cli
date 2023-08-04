#! /usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";
import sharp from "sharp";

// yargs options
const options = yargs(hideBin(process.argv))
.usage("Usage: $0 [options]")
.option("s", {alias:"size", describe: "Size to give image", type: "number", demandOption: true })
.option("r", {alias:"rotate", describe: "Rotate the image", type: "boolean", demandOption: true })
.help(true)
.argv;


/**
 * Edit image passed in command line arguments
 * @param
 * @returns {void}
 */
function editImage() {
  const argv = yargs(hideBin(process.argv)).argv;

  const file = argv._[0];
  const path = file.split(".")[0].split("/");
  const filename = path[path.length - 1];
console.log(argv)
  console.log(`${chalk.yellow(`\nEditting`)} - ${process.cwd()}/${file}`)
  if (!argv.r || !argv.s) {
    console.log(chalk.red("Please provide size and flip options"));
    return
  }
  try {
      sharp(`${process.cwd()}/${file}`)
      .resize(argv.s, argv.s)
      .rotate(argv.f? 180 : 0)
      .toFile(`${process.cwd()}/test/new-${filename}-${Math.round(Math.random() * 1000)}.jpg`, (err) => {  
        if (err) throw err;
        process.exit(0);
      })
      console.log(
        chalk.green(
          `Image resized to ${argv.s}x${argv.s}`
        )
      )
  }
  catch (error) {
    console.log(chalk.red("Image path was not found"));
  }
  
}

editImage();
