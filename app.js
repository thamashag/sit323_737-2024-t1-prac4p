const express = require('express');
const app = express();

const winston = require('winston');

const logger = winston.createLogger({
level: 'info',
format: winston.format.json(),
defaultMeta: { service: 'calculator-microservice' },
transports: [
new winston.transports.Console({
format: winston.format.simple(),
}),
new winston.transports.File({ filename: 'logs/error.log', level:
'error' }),
new winston.transports.File({ filename: 'logs/combined.log' }),
], });


app.get('/add', (req, res) => {

    logger.log({
        level: 'info',
        message: 'Received request for addition operation'
    });

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }

    const result = num1 + num2;
    res.json({ result });

    logger.log({
        level: 'info',
        message: 'Addition operation completed'
    });

});

app.get('/subtract', (req, res) => {

    logger.log({
        level: 'info',
        message: 'Received request for subtract operation'
    });

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }

    const result = num1 - num2;
    res.json({ result });

    logger.log({
        level: 'info',
        message: 'Subtract operation completed'
    });
});

app.get('/multiply', (req, res) => {

    logger.log({
        level: 'info',
        message: 'Received request for multiply operation'
    });

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }

    const result = num1 * num2;
    res.json({ result });

    logger.log({
        level: 'info',
        message: 'Multiply operation completed'
    });
});

app.get('/divide', (req, res) => {

    logger.log({
        level: 'info',
        message: 'Received request for division operation'
    });

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }

    if (num2 === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed.' });
    }

    const result = num1 / num2;
    res.json({ result });

    logger.log({
        level: 'info',
        message: 'Divide operation completed'
    });
});

logger.log({
    level: 'info',
    message: 'This is an informational message.'
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
