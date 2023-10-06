let receipts = {};

const calculatePoints = require('../utils/calculatePoints');

exports.processReceipt = (req, res) => {
    const receipt = req.body;

    // validate receipt data
    if (!receipt.retailer || !receipt.purchaseDate || !receipt.purchaseTime || !receipt.items || !receipt.total) {
        return res.status(400).send('Invalid receipt data provided.');
    }

    try {
        const id = Date.now().toString();
        const points = calculatePoints(receipt);
        receipts[id] = points;
        res.json({ id });
    } catch (error) {
        res.status(500).send(`Error processing receipt: ${error.message}`);
    }
};

exports.getReceiptPoints = (req, res) => {
    const id = req.params.id;

    if (!receipts[id]) {
        return res.status(404).send('Receipt not found');
    }

    res.json({ points: receipts[id] });
};
