const express = require('express')

const router = express.Router();

const Department = require('../model/departments');

router.get('/', async (req, res) => {
    try {
        const departments = await Department.find();

        return res.send( departments );
    } catch(err) {
        return res.status(400).send({ error: 'Error listing Departments' });
    }
});

router.get('/:departmentId', async (req, res) => {
    try {
        const department = await Department.findById(req.params.departmentId);

        return res.send( department );
    } catch(err) {
        return res.status(400).send({ error: 'Error listing Department' });
    }
});

router.post('/', async (req, res) => {
    try{
        const { name, building } = req.body;

        const department = await Department.create({ name, building });

        await department.save();

        return res.send({ department })
    }catch (err) {
        return res.status(400).send({ error: 'Error creating new Department' });
    }
});

router.put('/:departmentId', async (req, res) => {
    try{
        const { name, building } = req.body;

        const department = await Department.findByIdAndUpdate(req.params.departmentId,
            { name, building }, { new: true });

        await department.save();

        return res.send({ department })
    }catch (err) {
        return res.status(400).send({ error: 'Error updating new Department' });
    }
});

router.delete('/:departmentId', async (req, res) => {
    try {
        await Department.findByIdAndRemove(req.params.departmentId);

        return res.send();
    } catch(err) {
        return res.status(400).send({ error: 'Error deleting Department' });
    }
});

module.exports = app => app.use('/departments', router);