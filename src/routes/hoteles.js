const express = require("express");
const _ = require("underscore");
const hoteles = require("../sample.json");

const router = express.Router();

router.get("/", (req, res) => {
    res.json(hoteles);
});

router.post("/", (req, res) => {
    const id = hoteles.length + 1;
    const { nombre, ciudad, telefono, opiniones } = req.body;

    if (nombre && ciudad && telefono && opiniones) {
        const newhotel = { id , ...req.body};
        hoteles.push(newhotel);
        res.json(hoteles);
    } else {
        res.status(500).json({ error: "There was an error." });
    }
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, ciudad, telefono, opiniones } = req.body;
    if (nombre && ciudad && telefono && opiniones) {
        _.each(hoteles, (hotel, i) => {
            if (hotel.id == id) {
                hotel.nombre = nombre;
                hotel.ciudad = ciudad;
                hotel.telefono = telefono;
                hotel.opiniones = opiniones;
            }
        });
        debugger;
        res.json(hoteles);
    } else {
        res.status(500).json({ error: "There was an error." });
    }
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    if (id) {
        _.each(hoteles, (hotel, i) => {
            if (hotel.id == id) {
                hoteles.splice(i, 1);
                return false;
            }
        });
        res.json(hoteles);
    } else {
        res.status(400).json({ error: "No se proporcionó un ID válido" });
    }
});

module.exports = router;