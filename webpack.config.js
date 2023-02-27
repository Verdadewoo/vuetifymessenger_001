const path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/vuetifymessenger_001/" : "/",
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
};
