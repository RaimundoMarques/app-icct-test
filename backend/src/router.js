const express = require('express')

const router = express.Router()
const usersController = require('./controllers/usersController')
const livrosController = require('./controllers/livrosController')
const tasksController = require('./controllers/tasksController')
// verificação de dados
const tasksMiddleware = require('./middlewares/tasksMiddlewares')

// rotas de usuários
//router.get('/users', usersController.getAllUser)
// rotas livros
//router.get('/livros', livrosController.getAllLivros)
// router.get('/livro/:id/', livrosController.searchLivro)
// router.post('/livro', livrosController.createLivro)
// router.delete('/livro/:id', livrosController.deleteLivro)
// Rotas de test
// router.get('/tasks', tasksController.getAllTasks)
// router.post('/tasks', tasksMiddleware.validateTitle, tasksController.createTask)
// router.delete('/tasks/:id', tasksController.deleteTask)
// router.put('/tasks/:id',
//     tasksMiddleware.validateTitle,
//     tasksMiddleware.validateStatus,
//     tasksController.updateTask
// )


module.exports = router;