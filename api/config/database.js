const mongoose = require('mongoose');
const utils = require('./utils');

class Mongo {

    constructor() {
        mongoose.connect(utils.mongoUrl);

        const db = mongoose.connection; 

        db.on('error', console.error.bind(console, 'Erreur lors de la connexion')); 
        db.once('open', function (){
            console.log("Connexion à la base OK"); 
        });
      }
}


module.exports = Mongo;