// filepath: /workspaces/B-Motivation-Log/server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'physical-management-page')));

app.post('/submit', (req, res) => {
    const data = {
        date: req.body.date,
        temperature: req.body.temperature,
        condition: req.body.condition,
        reasonUnwell: req.body['reason-unwell'],
        motivation: req.body.motivation,
        notes: req.body.notes
    };

    fs.appendFile('data.json', JSON.stringify(data) + '\n', (err) => {
        if (err) {
            console.error('Error saving data:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Data saved successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
