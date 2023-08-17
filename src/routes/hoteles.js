const express = require("express");
const _ = require("underscore");
const hoteles = require("../sample.json");

const router = express.Router();

//get id
router.get("/", (req, res) => {
    res.json(hoteles);
});
//get id filtro
router.get("/:filtro", (req, res) => {
    const { filtro } = req.params;
    const filteredData = hoteles.filter((item) => {
        const nombreLowerCase = item.nombre.toLowerCase();
        const ciudadLowerCase = item.ciudad.toLowerCase();
        const opinionesLowerCase = item.opiniones.toLowerCase();
        const filtroLowerCase = filtro.toLowerCase();

        return (
            nombreLowerCase.includes(filtroLowerCase) ||
            ciudadLowerCase.includes(filtroLowerCase) ||
            opinionesLowerCase.includes(filtroLowerCase)
        );
    });
    res.json(filteredData)
});

router.get("/getbyId/:id", (req, res) => {
    const { id } = req.params;
    const filterId = hoteles.filter((item) => {
        return item.id == id 
            
            
    });
    res.json(filterId)
});


router.post("/", (req, res) => {
    const id = hoteles.length + 1;
    const { nombre, ciudad, telefono, opiniones, imagen, url } = req.body;

    if (nombre && ciudad && telefono && opiniones && imagen && url) {
        const newhotel = { id, ...req.body };
        hoteles.push(newhotel);
        res.json(hoteles);
    } else {
        res.status(500).json({ error: "There was an error." });
    }
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, ciudad, telefono, opiniones, imagen, url } = req.body;
    if (nombre && ciudad && telefono && opiniones && imagen && url) {
        _.each(hoteles, (hotel, i) => {
            if (hotel.id == id) {
                hotel.nombre = nombre;
                hotel.ciudad = ciudad;
                hotel.telefono = telefono;
                hotel.opiniones = opiniones;
                hotel.imagen = imagen;
                hotel.url = url;

            }
        });
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