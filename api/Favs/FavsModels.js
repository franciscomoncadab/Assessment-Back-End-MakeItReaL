const mongoose = require('mongoose');const Schema = mongoose.Schema;

const FavsList = new mongoose.Schema({
    name: {
          type: String, 
          required: true,          
     },
    favs: [
         {
          title: {
              type: String, 
              required: true
            },
          description: {
                type: String,
                required: true
            },
          link: { 
               type: String,
               required: true,
               lowercase: true,
            },
    }],

});

module.exports = mongoose.model('Favs', FavsList);