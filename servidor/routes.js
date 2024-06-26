const express = require('express');
const router = express.Router();

const Funcionario = require('./models/funcionario');
const jwt = require('jsonwebtoken');

router.get('/ola', (req, res) => {
    res.send('Olá, seja bem vindo!');
});

router.get('/teste', (req, res) => {
    res.send('Funcionou!');
});

router.post('/funcionarios', async (req, res) => {
    const funcionario = new Funcionario(req.body);
    await funcionario.save();
    res.status(201).send(funcionario);
});

router.put('/funcionarios/:id', async (req, res) => {
    const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body);
    res.send(funcionario);
});

router.get('/funcionarios', async (req, res) => {
    const funcionarios = await Funcionario.find();
    res.send(funcionarios);
});

router.delete('/funcionarios/:id', async (req, res) => {
    await Funcionario.findByIdAndRemove(req.params.id);
    res.send('Funcionário excluído!');
});

router.post('/autenticar', async (req, res) => {
    const funcionario = await Funcionario.findOne({ email: req.body.email });
    if (!funcionario) return res.status(400).send('Usuário não encontrado!');

    const passwordIsValid = await funcionario.comparePassword(req.body.senha);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

    const token = jwt.sign({ _id: funcionario._id }, 'secret', { expiresIn: 86400 });
    res.send({ auth: true, token: token });
});

module.exports = router;