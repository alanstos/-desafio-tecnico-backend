const jwt = require('jsonwebtoken');


login = (req, res) => {

    if(req.body.login === process.env.LOGIN && req.body.senha === process.env.SENHA){
        const login = req.body.login
        const token = jwt.sign({ login }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
        });
        return res.json(token);
    }
    
    res.status(500).json({message: 'Invalid login!'});
}

module.exports = login