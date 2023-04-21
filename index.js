const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const app = express();

app.use(bodyParser.json());

app.post('/users', userController.createUser);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
