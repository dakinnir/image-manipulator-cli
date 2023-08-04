import yargs from "yargs";
import { hideBin } from 'yargs/helpers'
import chalk from "chalk";

/**
 * Edit image passed in command line arguments
 * @param
 * @returns {void}
 */

function editImage() {
    const argv = yargs(hideBin(process.argv)).argv
    const args = argv._;
    if (args.length < 1) {
        console.log(chalk.red("Please provide an image path"))
        return;
    }
    console.log(args)
    console.log(chalk.green("Image path was successfully edited"))
}

editImage();