const mongoose = require("mongoose");
const { Schema } = mongoose;
const Alumno = new Schema({ ci: Number, nombres: String, apellidos: String, curso: String });

module.exports = mongoose.model("Alumnos", Alumno);
