const log = {
    info: (info) => {
        console.log(`Info : ${info}`);
    },
    warning: (warning) => {
        console.log(`warning : ${warning}`);
    },
    error: (error) => {
        console.log(`error : ${error}`);
    }
};

module.exports = log