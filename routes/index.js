// index.js
var express = require('express');
var router = express.Router();
const db = require("../db");
const { ObjectId } = require("mongodb");

/* GET home page. */
router.get('/', async (req, res, next) => {
    const result = await db.find();
    res.render('index', { title: 'GeniusXP', result });
});

router.post("/save", async (req, res) => {
    const fullName = req.body.name.split(' '); // Divide o nome completo em partes
    const firstName = fullName[0];
    const lastName = fullName[1] || ""; // Se não houver segundo nome, usa vazio

    // Gera a URL do avatar
    const avatarUrl = `https://example.com/avatars/${firstName}_${lastName}.jpg`.toLowerCase();

    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cpf: req.body.cpf,
        birth_date: new Date(req.body.birth_date),
        description: req.body.description,
        interests: req.body.interests.split(',').map(interest => interest.trim()), // Converte a string em array
        avatar_url: avatarUrl, // A URL do avatar gerada
        created_at: new Date(),
        updated_at: new Date()
    };
    
    await db.insert(user);
    res.redirect('/');
});

router.post("/delete", async (req, res) => {
    const id = req.body.id;
    await db.remove(id);
    res.redirect('/');
});

router.post("/edit", async (req, res) => {
    const id = req.body.id;
    const updatedUser = {};

    // Verifica se cada campo foi preenchido e, se sim, adiciona ao objeto de atualização
    if (req.body.name) {
        updatedUser.name = req.body.name;
        const fullName = req.body.name.split(' ');
        const firstName = fullName[0];
        const lastName = fullName[1] || "";
        updatedUser.avatar_url = `https://example.com/avatars/${firstName}_${lastName}.jpg`.toLowerCase(); // Atualiza URL do avatar
    }
    if (req.body.email) updatedUser.email = req.body.email;
    if (req.body.password) updatedUser.password = req.body.password;
    if (req.body.cpf) updatedUser.cpf = req.body.cpf;
    if (req.body.birth_date) updatedUser.birth_date = new Date(req.body.birth_date);
    if (req.body.description) updatedUser.description = req.body.description;
    if (req.body.interests) updatedUser.interests = req.body.interests.split(',').map(interest => interest.trim());

    updatedUser.updated_at = new Date(); // Atualiza a data de modificação

    await db.update(id, updatedUser);
    res.redirect('/');
});

// Rota para buscar usuário por ID
router.get('/getUserById', async (req, res) => {
    const id = req.query.id;
    const user = await db.findOne({ _id: new ObjectId(id) });
    res.json(user);
});

module.exports = router;