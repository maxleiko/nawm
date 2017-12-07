module.exports = function auth(TOKENS) {
  return (req, res, next) => {
    if (req.body && req.body.token) {
      if (TOKENS[req.body.token]) {
        req.isAuthenticated = true;
      }
    }
    next();
  };
};
