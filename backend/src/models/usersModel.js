const pool = require('../db/connection')

// Método para trazer todos os usuários cadastrados

const sql = 'SELECT * FROM users LIMIT 100';

pool.query(sql)
    .then((users) => {
        console.log(users.rows)
    })
    .catch((error) => {
        console.error("Erro durante a consulta:", error);
    })

const getAllUsers = async () => {
    try {
        
        const users = await pool.query('SELECT * FROM users LIMIT 100');
        return users.rows;

    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        throw error;
    }
};

// Função que exporta como objetos, todas as funções
module.exports = {
    getAllUsers,
}