const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(400).json({ message: 'Пользователь не авторизован' });
  }

  try {
    const validToken = jwt.verify(token, process.env.SECRET_KEY);

    if (validToken) {
      req.user = validToken;
      return next();
    }
  } catch (error) {
    return res.status(403).json({ message: 'Пользователь не авторизован' });
  }
};

module.exports = validateToken;
