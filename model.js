const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let user_average = new Schema(
  {
    user: {
      type: String
    },
    average: {
      type: Number
    },
    date: {
      type: Date
    }
  }
);

module.exports = mongoose.model("user_average_database", user_average);