const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListFavs = Schema({
    name: {
          type: String, 
          required: true,
          minLength: 4 
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
               required: true
                },
    }],
    user:{ type: Schema.Types.ObjectId,
          ref: 'user'}
    })

module.exports = mongoose.model('Favs', ListFavs);