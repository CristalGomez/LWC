// Dependencies
var path = require("path");
var express = require("express")
// var db = require("../models");

module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/email", function (req, res){
      res.render("email")
  })
};