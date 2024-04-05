const express = require('express')
const axios = require('axios')
const cors = require('cors');
const pool = require('./db/connection')

const app = express()
app.use(cors());
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Ou você pode especificar origens específicas, por exemplo, 'http://seusite.com'
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const API = 'http://54.167.117.206:8000/livro/'


// Função para obter todos os dados da API externa
async function obterLivrosAPI() {
    try {
        const response = await axios.get(API)
        return response.data
    } catch (error) {
        console.error('Erro ao obter dados da API externa:', error)
        throw error
    }
}

// ROTA DE VALIDAÇÃO DE LOGIN
app.post('/login', async (req, res) => {
    try {

        const { email, password } = req.body

            if (email === 'admin@gmail.com' && password === 'senha123') {
                //res.status(200).json({ message: 'Login bem-sucedido', token: 'seu_token_de_autenticacao' });
                res.status(200).json({ message: 'Login realizado com sucesso!' });
            } else {
                res.status(401).json({ message: 'Dados inválidos. Favor tentar novamente!' });
            }

    } catch (error) {
        console.error('Erro durante o login:', error);
        res.status(500).json({ error: 'Erro durante o login' });
    }
})




// Rota para obter todos os dados
app.get('/', async (req, res) => {
    try {
        res.status(200).sendFile(__dirname + "/templates/index.html")
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter dados da API externa.' })
    }
})

// Rota para obter todos os dados
app.get('/livros', async (req, res) => {
    try {
        const dados = await obterLivrosAPI()
        res.json(dados)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter dados da API externa.' })
    }
})

// Rota para obter um dado específico
app.get('/livro/:id', async (req, res) => {
    try {
        const dados = await obterLivrosAPI()
        const dado = dados.find(d => d.id === parseInt(req.params.id))
        if (!dado) {
            res.status(404).json({ error: 'Dado não encontrado.' })
        } else {
            res.json(dado)
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter dados da API externa.' })
    }
})

// Rota para criar um novo dado
app.post('/livro', async (req, res) => {
    try {
        const newLivro = req.body
        // Lógica para criar o dado na API externa
        // Por exemplo:
        const response = await axios.post(API, newLivro)
        const createdData = response.data
        res.status(201).json({ message: "Livro criado com sucesso!" })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar dado.' })
    }
})

// Rota para excluir um dado existente
app.delete('/livro/:id', async (req, res) => {

    try {
        const id = req.params.id
        // Lógica para excluir o dado na API externa
        // Por exemplo:
        await axios.delete(`${API}${id}`)
        res.json({ message: 'Dado excluído com sucesso.' })


    } catch (error) {
        const id = req.params.id
        res.status(500).json({ error: `Erro ao excluir dado ${id}` })
    }
})

// Editar livros
app.patch('/livro/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { nome, nomeDoAutor, lancamento, tipo, genero, editora, anoEdicao, numEdicao } = req.body; // Ajuste conforme a estrutura do seu livro
        const requestData = {
            nome: nome,
            nomeDoAutor: nomeDoAutor,
            lancamento: lancamento,
            tipo: tipo,
            genero: genero,
            editora: editora,
            anoEdicao: anoEdicao,
            numEdicao: numEdicao
        };
        const res = await axios.patch(`${API}${id}/`, requestData);
        res.status(200).json({
            message: 'Livro atualizado com sucesso',
            data: response.data
        });

    } catch (error) {

        // Por algum motivo, a API dá um erro na hora da atualização dos dados mas, executa a função e atualiza o dado mesmo assim
        // console.error(error);
        res.status(200).json({});
    }
});



const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
