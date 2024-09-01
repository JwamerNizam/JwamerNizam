const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HTML.html'));
});

app.post('/Yalla_Mama', (req, res) => {
    const { name1, name2 } = req.body;

    // Write names to a file
    const namesToWrite = `Name1: ${name1}, Name2: ${name2}\n`;
    fs.appendFile('.C:\\Users\\jwame\\OneDrive\\Desktop\\LoveCalculator\\data\\Names.txt', namesToWrite, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).send('Server error');
        }
        console.log('Names written to file');
        res.status(200).send('Names saved successfully');
    });
});

app.listen(3000, () =>{
    console.log('the server is runing on port 3000..');
});
