const jwt = require('jsonwebtoken');

module.exports = {
    auth: (req, res, next) => {
        const token = req.header('x-auth-token');
        if (!token) return res.status(401).send('Acesso negado!');

        try {
            const decoded = jwt.verify(token, 'secret');
            req.user = decoded;
            next();
        } catch (ex) {
            res.status(400).send('Token inválido!');
        }
    }
};