const transectionModel = require('../models/transectionModel.js');
const moment = require('moment');

const getALLTransection = async (req, res) => {
    try {
        const { frequency, selectedDate, type, userid } = req.body;
        const filter = { userid };

        if (frequency !== 'custom') {
            filter.date = {
                $gt: moment().subtract(Number(frequency), 'days').toDate()
            };
        } else {
            filter.date = {
                $gte: new Date(selectedDate[0]),
                $lte: new Date(selectedDate[1])
            };
        }

        if (type !== 'all') {
            filter.type = type;
        }

        const transactions = await transectionModel.find(filter);
        res.status(200).json(transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ error: 'Fetch Issue with Transaction' });
    }
};

const editTransection = async (req, res) => {
    try {
        const { transactionId, payload } = req.body;
        await transectionModel.findOneAndUpdate({ _id: transactionId }, payload);
        res.status(200).send("Edit Successfully");
    } catch (error) {
        console.error('Error editing transaction:', error);
        res.status(500).json({ error: 'Edit Issue with Transaction' });
    }
};

const addTransection = async (req, res) => {
    try {
        const newTransection = new transectionModel(req.body);
        await newTransection.save();
        res.status(201).send("Transaction created");
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ error: 'Creation Issue with Transaction' });
    }
};

module.exports = { getALLTransection, editTransection, addTransection };
