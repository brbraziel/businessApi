const mongoose = require('../database');

const DepartmentsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    building: {
        type: String,
        require: true,
    },
});

const Departments = mongoose.model('Departments', DepartmentsSchema);

module.exports = Departments;