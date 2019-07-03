const express = require("express");
const router = express.Router();
const Alumnos = require("../modelos/Alumno");


router.get("/", async (req, res) => {
  const alumnos = await Alumnos.find({});
  res.json(alumnos);
});

router.get("/:ci", async (req, res) => {
  const ci = req.params.ci;
  const alumno = await Alumnos.find({ ci });
  res.json(alumno);
});

router.post("/", async (req, res) => {
  const { ci, nombres, apellidos,curso } = req.body;
  const alumno = new Alumnos({ ci, nombres, apellidos,curso });
  await alumno.save();
  res.json({ mensaje: "Alumno registrado" });
});

router.put("/:ci", async (req, res) => {
  const ci = req.params.ci;
  const { nombres, apellidos,curso } = req.body;
  await Alumnos.findOneAndUpdate({ ci }, { nombres, apellidos,curso });
  res.json({ mensaje: "Alumno actualizado" });
});

router.delete("/:ci", async (req, res) => {
  const ci = req.params.ci;
  await Alumnos.findOneAndRemove({ ci });
  res.json({ mensaje: "Alumno eliminado" });
});
module.exports = router;
