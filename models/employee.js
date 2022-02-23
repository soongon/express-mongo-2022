const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  team: String,
  salary: Number
});

module.exports = mongoose.model('employees', EmployeeSchema);