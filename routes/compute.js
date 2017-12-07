const math = require('mathjs');

module.exports = function compute() {
  return (req, res) => {
    if (req.isAuthenticated) {
      try {
        res.send({ result: math.eval(req.body.expression) });
      } catch (err) {
        res.status(400).send({ fault: 'invalid expression' });
      }
    } else {
      res.sendStatus(401);
    }
  };
};
