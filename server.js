const express = require('express');

const authMiddleware = require('./middlewares/auth.js');
const login = require('./routes/login');
const compute = require('./routes/compute');

const USERS = { admin: 'admin' };
const TOKENS = {};
const TTL = 1000 * 60 * 15; // 15 minutes

const app = express();

app.use(express.json());
app.use(authMiddleware(TOKENS));

app.post('/login', login(USERS, TOKENS, TTL));
app.post('/compute', compute());

app.listen(8080, () => {
  console.log('Listening at 0.0.0.0:8080');
});
