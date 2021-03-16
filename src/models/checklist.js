/*
  Aqui estamos criando nosso banco de dados de Checklist
  Ele possui referencia de várias tasks, já que um checklist
  possui várias tasks, por isso há um array de tasks
*/
const mongoose = require('mongoose')

const checklistSchema = mongoose.Schema({
  name: {type: String, required: true},
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }]
})

module.exports = mongoose.model('Checklist', checklistSchema)