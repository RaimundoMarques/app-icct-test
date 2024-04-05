const livroModel = require('../models/livroModel');

// Controlador para obter todos os livros
async function getAllLivros(req, res) {
    try {
        const livros = await livroModel.getAllLivros();
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar livros' });
    }
}

// Controlador para criar um novo livro
async function criarLivro(req, res) {
    try {
        const novoLivro = req.body;
        const livroCriado = await livroModel.criarLivro(novoLivro);
        res.status(201).json(livroCriado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar um novo livro' });
    }
}

// Controlador para atualizar um livro existente
async function atualizarLivro(req, res) {
    try {
        const id = req.params.id;
        const livroAtualizado = req.body;
        await livroModel.atualizarLivro(id, livroAtualizado);
        res.status(200).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o livro' });
    }
}

// Controlador para deletar um livro existente
async function deletarLivro(req, res) {
    try {
        const id = req.params.id;
        await livroModel.deletarLivro(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar o livro' });
    }
}

module.exports = {
    getAllLivros,
    criarLivro,
    atualizarLivro,
    deletarLivro
};
