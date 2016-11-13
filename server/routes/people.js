var people = [
    {
        id: 0,
        type: "rzymianie",
        name: "Julek Cezar",
        avatar: "julek.jpg",
        online: true
    },
    {
        id: 1,
        type: "rzymianie",
        name: "Brutus",
        avatar: "brutus.jpg",
        online: false
    },
    {
        id: 2,
        type: "galowie",
        name: "Asterix",
        avatar: "asterix.jpg",
        online: false
    },
    {
        id: 3,
        type: "galowie",
        name: "Obelix",
        avatar: "obelix.jpg",
        online: false
    }
];

module.exports = function (server) {
  server.get('/people/:type/:id', function (req, res, next) {
      var person = people.find(elem => elem.id == req.params.id);
      res.send(person || {});
      next();
  });

  server.get('/people/:type', function (req, res, next) {
      var filtered = people.filter(elem => elem.type == req.params.type);
      res.send(filtered || []);
      next();
  });
};