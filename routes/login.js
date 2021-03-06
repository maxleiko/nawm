const crypto = require('crypto');

module.exports = function login(USERS, TOKENS, TTL) {
  return (req, res) => {
    if (USERS[req.body.login] === req.body.pass) {
      const token = crypto.randomBytes(20).toString('hex');
      TOKENS[token] = 1;
      setTimeout(() => {
        delete TOKENS[token];
      }, TTL);
      res.send({ token });
    } else {
      res.status(401).send({ fault: 'invalid login and password' });
    }
  };
};
