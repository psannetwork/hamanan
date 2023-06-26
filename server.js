const express = require('express');
const app = express();
const fs = require('fs');

const locationFilePath = 'location.txt';

app.use(express.json());

app.put('/location', (req, res) => {
  const locationData = req.body.locationData;

  fs.appendFile(locationFilePath, `${locationData}\n`, 'utf8', err => {
    if (err) {
      console.error('Failed to add location:', err);
      res.status(500).send('Failed to add location');
    } else {
      console.log('Location added successfully.');
      res.send('Location added successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
