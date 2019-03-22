const mongoose = require('../database');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    position: {
        type: String,
        require: true,
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Departments',
    },
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;