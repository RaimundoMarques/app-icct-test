const { json } = require('express')
const usersModel = require('../models/usersModel');

// Controlador para obter todos os usuários
const getAllUser = async (request, response) => {

    try {

        // Consulta ao modelo para obter todos os usuários
        const users = await usersModel.getAllUsers();
        console.log("Usuários: ", users)
        
        // Enviar os usuários como uma resposta JSON
        return response.status(200).json(users);

    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        // Enviar uma resposta de erro em caso de falha na consulta ao banco de dados
        return response.status(500).json({ error: 'Erro ao buscar usuários' });
    }
};

// Exportar a função controladora
module.exports = {
    getAllUser
};
