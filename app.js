// Require Dependencies
var express           = require('express'),
    mongoose          = require('mongoose'),
    config            = require('./config'),
    app               = express()

// Setup port
var port = '3000'

// Start the Server
app.listen(port)
console.log('TwitterArticle loading on: http://localhost:' + port)