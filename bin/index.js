#! /usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";
import boxen from 'boxen';
import sharp from "sharp";

// yargs options
const options = yargs(hideBin(process.argv))
.usage("Usage: $0 [options]")
.option("s", {alias:"size", describe: "Image size", type: "number", demandOption: true })
.option("r", {alias:"rotate", describe: "Rotate the image - pass value", type: "number", demandOption: true })
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
  // get filename from argument & remove extension
  const path = file.split(".")[0].split("/");
  const filename = path[path.length - 1];

  console.log(`${chalk.yellow(`\nEditting`)} - ${process.cwd()}/${file}`)
  if (!argv.r || !argv.s) {
    console.log(chalk.red("Please provide size and flip options"));
    return
  }
  console.log(file)
  try {
      sharp(`${process.cwd()}/${file}`)
      .resize(argv.s, argv.s)
      .rotate(argv.r)
      .toFile(`${process.cwd()}/new-${filename}-${Math.round(Math.random() * 1000)}.jpg`)
      console.log(
        boxen(chalk.green(
          `Image resized to ${argv.s}x${argv.s} &\n Rotated by ${argv.r} degrees`
        ), {padding: 1, borderColor: "green", borderStyle: "round"})
      )
  }
  catch (error) {
    console.log(chalk.red("Image path was not found"));
  }
  
}

editImage();
