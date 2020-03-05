# Secret Drive [![Build Status](https://travis-ci.com/TheHackerCoding/secretdrive.svg?branch=master)](https://travis-ci.com/TheHackerCoding/secretdrive) [![CircleCI](https://circleci.com/gh/TheHackerCoding/secretdrive/tree/circleci-project-setup.svg?style=svg)](https://circleci.com/gh/TheHackerCoding/secretdrive/tree/circleci-project-setup)
A Linux script made in Node.js to make and mount virtual drives from files

### Requirements
All you need is the latest Linux version of a Linux with fallocate and dd or else you'll get a error
### How to install (for manual use)
```sh
## Doesn't matter if you use yarn or npm
## With npm
 git clone https://github.com/theoundation/secretdrive.git
 cd secretdrive
 npm install 
 sudo node formanual.js

## With yarn 
 git clone https://github.com/theoundation/secretdrive.git
 cd secretdrive
 yarn install 
 sudo node formanual.js

## Make sure you use sudo or else you'll get a error
```

### How to install (for Node.js apps)
```sh
npm install @thehackercoding/secretdrive 
```
For a guide to install this package from GitHub Packages, [click here](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#installing-a-package "Guide for installing GitHub Packages")


### Examples
```javascript
const sc = require("secretdrive")

/*To make a .img file with 1GB of space*/
sc.createDrive("drive.img", 1000, error)

/*To open/mount a .img file with a custom directory*/
sc.openDrive("drive.img","/media/randomthing", error)

/*or*/
sc.mountDrive("drive.img","/media/randomthing", error)

/*To unmount*/
sc.unmountDrive("/media/randomthing", error)

/*To create & mount a .img file with 1GB of space*/
sc.createopenDrive("drive.img","/media/randomthing", 1000, error)
```
#### Tips
‧ You don't have to use .img files; you can whatever type file you want

‧ For the size, it's in MB (megabytes) so 10 will by 10MB you'll be setting for the file

‧ Everything in  the functions are required