const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const funcionarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    }
});

funcionarioSchema.pre('save', async function (next) {
    if (this.isModified('senha')) {
        this.senha = await bcrypt.hash(this.senha, 10);
    }
    next();
});

funcionarioSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.senha);
};

const Funcionario = mongoose.model('Funcionario', funcionarioSchema);

module.exports = Funcionario;