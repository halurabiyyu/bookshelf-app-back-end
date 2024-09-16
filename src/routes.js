const { addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler } = require('./handler');
 
const routes = [
  {
    // mengirim data 
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    // mengambil semua data 
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    // mengambil data berdasarkan id 
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    //mengedit data berdasarkan id
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    // menghapus data berdasarkan id 
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  }
];

module.exports = routes;