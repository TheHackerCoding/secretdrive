var type = {
    taskMessage: function (message) {
        console.log('\x1b[32m[TASK] \x1b[0m' + message);
    },
    errorMessage: function (message) {
        console.log('\x1b[31m[✘] \x1b[0m' + message);
    },
    infoMessage: function (message) {
        console.log('\x1b[36m[INFO] \x1b[0m', message);
    },
    importantMessage: function (message) {
        console.log('\x1b[33m[IMPORTANT] \x1b[0m', message);
    },
    checkMessage: function (message) {
        console.log('\x1b[32m[✔] \x1b[0m', message);
    }
};
exports.type = type;
