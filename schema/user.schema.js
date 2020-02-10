'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = Schema({
  name: String,
  adddres: String,
  email: String
});