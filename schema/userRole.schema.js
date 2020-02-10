'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = Schema({
  userId: {
    type: String, index: true
  },
  role: Number
});