'use strict'


var path = require('path');


var appRouter = function (app) {

  // Default API

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '', '/src/view/index.html'));
  });
 
  // app.get("/controller.js", function (req, res) {
  //   res.sendFile(path.join(__dirname, '', '/controller/controller.js'));
  // });

}
module.exports = appRouter;