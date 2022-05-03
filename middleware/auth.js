const jwt = require("jsonwebtoken");

function isAuth(req, res, next) {
  try {
    const [tokenType, tokenValue] = req.headers.authorization.split(" ");
    const verifiedToken = jwt.verify(tokenValue, process.env.JWT_KEY_SECRET);

    if (tokenType === "Bearer" && verifiedToken) {
      next();
    }
  } catch (err) {
    res.status(401).json({ err: 'Sin Autorizacion' });
  }
}

module.exports = isAuth