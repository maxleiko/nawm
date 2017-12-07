const express = require('express');
const authService = require('./services/auth.js');
const login = require('./routes/login');
const compute = require('./routes/compute');

const app = express();
const USERS = {
  admin: 'admin'
};
const TOKENS = {};

app.use(express.json());
app.use(authService(TOKENS));

app.post('/login', login(USERS, TOKENS));
app.post('/compute', compute());

app.listen(8080, () => {
  console.log('Listening at 0.0.0.0:8080');
});
