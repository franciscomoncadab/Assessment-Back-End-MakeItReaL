const Favs = require('../models/favs')

const SaveList = async function({name, favs}, user) {
     if (name === undefined) throw new Error('Parametro inexistente');
     if (favs === undefined) throw new Error('Parametro inexistente');
     if (favs.length === undefined) throw new Error('No existen elementos para mostrar');

     const listFav = new ListFavsSchema({ name, favs, user})

     const createFavList = await listFav.save();
     console.log(`Lista Favoritos <${JSON.stringify(createFavList)}> creada`)
     return createFavList
};

const getListFavs = async function(user) {
     const listFav = await ListFavsSchema.findByUser(user._id)
     console.log(`Lista Favoritos: <${JSON.stringify(listFav)}> desde el usuario <${user}>`)
     return listFav     
};

const getListFavsById = async function(user, listId) {
     const listFav = await ListFavsSchema.findByUserAndId(user._id, listId);
     if (favList.length === 0) return null;
 
     console.log(`Fav List: <${JSON.stringify(favList[0])}> from user <${user}> retrieved`);
     return listFav[0];
 };

 const addListFavs = async (user, listId, { title, description, link }) => {
     if (title === undefined) throw new Error('Falta Titulo');
     if (description === undefined) throw new Error('Falta description');
     if (link === undefined) throw new Error('Falta link de la lista');
 
     const updateParams = await ListFavsSchema.addListFavs(user._id, listId, { title, description, link });
     return updateParams.modifiedCount === 1;
 };
 
 const removeList = async (user, listId) => {
     const deleteParams = await ListFavsSchema.removeListFavs(user._id, listId);
     return deleteParams.deletedCount === 1;
 };

 module.exports = {
      SaveList,
      getListFavs,
      getListFavsById,
      addListFavs,
      removeList,
 }

