'use strict';

require("@babel/register")({
    extensions: ['.js', '.jsx', '.ts', '.tsx']
});

const server = require('./src/server');
