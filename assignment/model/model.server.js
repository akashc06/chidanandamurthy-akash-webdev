module.exports = function () {

var mongoose = require("mongoose");

var connectionString = 'mongodb://127.0.0.1:27017/test';
 var connectionString = 'mongodb://127.0.0.1:27017/assignment';
 if(process.env.MLAB_USERNAME) {
     connectionString = process.env.MLAB_USERNAME + ":" +
         process.env.MLAB_PASSWORD + "@" +
         process.env.MLAB_HOST + ':' +
         process.env.MLAB_PORT + '/' +
         process.env.MLAB_APP_NAME;
 }
 mongoose.connect(connectionString);
};
