/*
  Aqui estamos usando o MongoDB para criar um BD para nossa Task
  taskSchema é o formato da nossa task, no BD, ela guarda uma coluna
  para checklist, já que uma task pertence a um checklist
*/
const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  name: {type: String, required: true},
  done: {type: Boolean, default: false},
  checklist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Checklist',
    required: true
  }
})

module.exports = mongoose.model('Task', taskSchema)