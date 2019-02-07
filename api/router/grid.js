const express = require("express");
const router = express.Router();

const gridController = require("../controller/gridController");
const controller = new gridController();

router.get("/grids", (req, res) => controller.getGrids(req, res));
router.post("/grid", (req, res) => controller.createGrid(req, res));

module.exports = router;