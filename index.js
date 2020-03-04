const { type } = require("./lib");
var shell = require("shelljs")
const readline = require('readline');
const isRoot = require('is-root');

const createDrive = function (filename, size, error){
    if (shell.exec(`fallocate -l ${size} ${filename}`).code !== 0) {
        error="Error: creating drive file"
      } else {
          if(shell.exec(`dd if=/dev/zero of=${filename} bs=1M count=${size}`).code !==0) {
            error="Error: adding space to drive file"
          } else {
              if(shell.exec(`mkfs -t ext3 ${filename}`).code !==0){
                error="Error: formating and mounting drive file"
              }
            return true
          }
      }
}

const openDrive = function (filename, location, error){
    if(shell.exec(`sudo mkdir ${location}`).code !==0) {
        error="Error: making drive direction"
    } else {
        if(shell.exec(`sudo mount -t auto -o loop ${filename} ${location}`) !==0) {
            error="Error: mounting drive"
        }
    }
}

const unmountDrive = function (location, error) {
    if(shell.exec(`sudo umount ${location}`).code !==0) {
        error="Error: unmounting drive"
    }
}

const createopenDrive = function (filename, location, size, error) {
    createDrive(filename,size,error)
    openDrive(filename,location,error)

}
exports.createDrive = createDrive
exports.openDrive = openDrive
exports.openDrive = mountDrive
exports.unmountDrive = unmountDrive
exports.createopenDrive = createopenDrive