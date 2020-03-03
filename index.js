const { type } = require("./lib");
var shell = require("shelljs")
const readline = require('readline');
const isRoot = require('is-root');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

if (!isRoot()){
    type.errorMessage("Sorry, but you're not in sudo mode. Please try again in sudo mode.")
    shell.exit(1)
}
if(!shell.which("fallocate")) {
    type.errorMessage("Sorry, but this script requires fallocate")
    shell.exit(1)
} else {
    type.infoMessage("You have the proper tools to run this...")
    main()
}

function main() {
    type.taskMessage("Creating intial drive file...")
    if (shell.exec('fallocate -l 1000M MyDrive.img').code !== 0) {
        type.errorMessage("Inital drive file failed...");
        shell.exit(1);
      } else {
          type.checkMessage("Initial drive file created...")
          type.taskMessage("Adding space to drive file...")
          if(shell.exec("dd if=/dev/zero of=MyDrive.img bs=1M count=1000").code !==0) {
              type.errorMessage("Adding space to drive file failed...")
              shell.exit(1)
          } else {
              type.checkMessage("Adding space to drive file completed...")
          }
      }
}