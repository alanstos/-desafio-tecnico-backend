const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) => {
    const authorization = req.headers['authorization'];
    const authArray = authorization.split(" ");
    const token = authArray[1]

    if (!token) return res.status(401).json({ message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(401).json({ message: 'Failed to authenticate token.' });
      
      next();
    });
}

module.exports = verifyJWT