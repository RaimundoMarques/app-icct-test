const axios = require('axios');
const apiUrl = 'http://54.167.117.206:8000/livro';

// Função para receber dados da API e ler os dados
async function getAllLivros() {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Erro ao receber os dados da API externa:', error);
        throw new Error('Erro ao receber os dados da API externa');
    }
}

// Função para criar um novo livro
async function criarLivro(novoLivro) {
    try {
        const response = await axios.post(apiUrl, novoLivro);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar um novo livro:', error);
        throw new Error('Erro ao criar um novo livro');
    }
}

// Função para atualizar um livro existente
async function atualizarLivro(id, livroAtualizado) {
    try {
        const response = await axios.put(`${apiUrl}/${id}`, livroAtualizado);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar o livro:', error);
        throw new Error('Erro ao atualizar o livro');
    }
}

// Função para deletar um livro existente
async function deletarLivro(id) {
    try {
        await axios.delete(`${apiUrl}/${id}`);
    } catch (error) {
        console.error('Erro ao deletar o livro:', error);
        throw new Error('Erro ao deletar o livro');
    }
}

module.exports = {
    getAllLivros,
    criarLivro,
    atualizarLivro,
    deletarLivro
};
