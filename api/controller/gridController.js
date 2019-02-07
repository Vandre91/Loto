const mongoose = require('mongoose');
const gridSchema = require('../models/grids');
const Grid = mongoose.model('grids', gridSchema);

class gridController{

    getGrids(req,res){
        Grid.find({})
        .then((data) => {
                res.status(200);
                res.send(data);
            })
        .catch((error) => {
            res.status(500);
        });
    }

    async createGrid(req,res){
        const number1 = parseInt(req.body.number1);
        const number2 = parseInt(req.body.number2);
        const number3 = parseInt(req.body.number3);
        const number4 = parseInt(req.body.number4);
        const number5 = parseInt(req.body.number5);
        const star = parseInt(req.body.star);
        const grid = new Grid({
            number1,
            number2,
            number3,
            number4,
            number5,
            star
        });
        await grid.save()
        .then((data) => {
            res.status(201);
            res.send(data);
        }).catch((error) => {
            res.status(500);
        });
    }

}

module.exports = gridController;