const express = require('express');
const app = express();
const PORT = 8080;
const receiptRoutes = require('./routes/receiptRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(express.json());
app.use(errorMiddleware);
app.use('/receipts', receiptRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});