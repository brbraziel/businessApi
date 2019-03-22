const express = require('express')

const router = express.Router();

const Employee = require('../model/employee');

router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        console.log(employees);
        return res.send( employees );
    } catch(err) {
        return res.status(400).send({ error: 'Error listing Employees' });
    }
});

router.get('/:employeeId', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.employeeId);

        return res.send( employee );
    } catch(err) {
        return res.status(400).send({ error: 'Error listing Employee' });
    }
});

router.post('/', async (req, res) => {
    try{
        const { name, position, department } = req.body;

        const employee = await Employee.create({ name, position, department });

        await employee.save();

        return res.send({ employee })
    }catch (err) {
        return res.status(400).send({ error: 'Error creating new Employee' });
    }
});

router.put('/:employeeId', async (req, res) => {
    try{
        const { name, position, department } = req.body;

        const employee = await Employee.findByIdAndUpdate(req.params.employeeId,
            { name, position, department }, { new: true });

        await employee.save();

        return res.send({ employee })
    }catch (err) {
        return res.status(400).send({ error: 'Error creating new Employee' });
    }
});

router.delete('/:employeeId', async (req, res) => {
    try {
        await Employee.findByIdAndRemove(req.params.employeeId);

        return res.send();
    } catch(err) {
        return res.status(400).send({ error: 'Error deleting Employee' });
    }
});

module.exports = app => app.use('/employees', router);