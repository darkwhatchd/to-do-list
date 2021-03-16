const express = require('express')
const path = require('path')
require('./config/database')

const app = express()
const checkListRouter = require('./src/routes/checklist')
const taskRouter = require('./src/routes/task')
const rootRouter = require('./src/routes/index')
const methodOverride = require('method-override')

// Verifica se a requisição retorna um JSON, caso retorne, e deixa disponivel no req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }))

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, '/src/views'))
app.set('view engine', 'ejs')

app.use('/', rootRouter)
app.use('/checklists', checkListRouter)
app.use('/checklists', taskRouter.checklistDependent)
app.use('/tasks', taskRouter.simple)

app.listen(3000, () => {
  console.log("Servidor Iniciado")
})

/*
Vamos criar um middleware
req é a requisição
res é a resposta
next é o que permite que a requisição passe para o próximo middleware
const log = (req, res, next) => {
  console.log(req.body)
  console.log(`Data: ${Date.now()}`)
  next()
}
app.use(log)


app.get('/', (req, res) => {
  res.send('<h1>Minha lista de Tarefas</h1>')
})

app.get('/json', (req, res) => {
  console.log(req.body)
  res.json({title: 'Tarefa X', done: true})
})
*/