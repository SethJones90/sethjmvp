const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const messages = require('./routes/api/messages');

const app = express();

// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World'));

//Use Routes
app.use('/api/users', users);
app.use('/api/messages', messages);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
