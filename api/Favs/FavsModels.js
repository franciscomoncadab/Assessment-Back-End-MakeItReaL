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

    ListFavsSchema.statics.findByUser = function (userId) {
          return this.find({ 'user': userId})
    };

    ListFavsSchema.statics.findByUserAndId = function (userId, favListId) {
      return this.find({ 'user': userId, '_id': ListFavsId }).limit(1);
  };

    ListFavsSchema.statics.addListFavs = function (userId, ListFavs, fav) {
          return this.updateOne(
                {'user': userId, '_id': ListFavs.id},
                { $push: {'favs' : fav} }
          ) 
    }; 

    ListFavsSchema.statics.removeListFavs = function (userId, ListFavs) {
          return this.remove({ 'user': userId, '_id': ListFavsIds.id })
    }

module.exports = mongoose.model('Favs', ListFavs);