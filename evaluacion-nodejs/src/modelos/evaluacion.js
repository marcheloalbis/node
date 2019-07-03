const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EvaluacionSchema = Schema({
    curso: String,
    instructor: String,
    preguntas: [],
    comentarios: String
});
module.exports = mongoose.model('evaluacion', EvaluacionSchema);