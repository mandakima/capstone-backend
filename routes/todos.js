const express = require('express')
const {
    createTodo, 
    getTodos,
    getTodo,
    deleteTodo,
    updateTodo

} = require('../controllers/todoController')

const router = express.Router()

//GET ALL TODO
router.get('/', getTodos)

//GET SINGLE TODO
router.get('/:id', getTodo)

//POST NEW TODO
router.post('/', createTodo)

//DELETE TODO
router.delete('/:id', deleteTodo)

//UPDATE TODO
router.patch('/:id', updateTodo)

module.exports = router