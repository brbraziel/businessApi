const mongoose = require('../database');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    employees: [],
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Departments',
    },
    dueDate: {
        type: String,
        require: true,
    }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;