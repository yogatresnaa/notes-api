const routes = (handler) => [
  {
    method: 'POST',
    path: '/export/notes',
    handler: handler.postExportNotHandler,
    options: {
      auth: 'notesapp_jwt',
    },
  },

];

module.exports = routes;
