const express = require('express')

const router = express.Router();

const Task = require('../model/tasks');

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        console.log(tasks);
        return res.send( tasks );
    } catch(err) {
        return res.status(400).send({ error: 'Error listing Tasks' });
    }
});

router.get('/:tasksId', async (req, res) => {
    try {
        const tasks = await Task.findById(req.params.tasksId);

        return res.send( tasks );
    } catch(err) {
        return res.status(400).send({ error: 'Error listing Task' });
    }
});

router.post('/', async (req, res) => {
    try{
        const { name, employees, department, dueDate } = req.body;

        const task = await Task.create({ name, employees, department, dueDate });

        await task.save();

        return res.send({ task })
    }catch (err) {
        return res.status(400).send({ error: 'Error creating new Task' });
    }
});

router.put('/:tasksId', async (req, res) => {
    try{
        const { name, employees, department, dueDate } = req.body;

        const task = await Task.findByIdAndUpdate(req.params.tasksId,
            { name, employees, department, dueDate }, { new: true });

        await task.save();

        return res.send({ task })
    }catch (err) {
        return res.status(400).send({ error: 'Error creating new Task' });
    }
});

router.delete('/:tasksId', async (req, res) => {
    try {
        await Task.findByIdAndRemove(req.params.tasksId);

        return res.send();
    } catch(err) {
        return res.status(400).send({ error: 'Error deleting Task' });
    }
});

module.exports = app => app.use('/tasks', router);