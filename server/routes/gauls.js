var gauls = [
    {
        id: 0,
        name: "Asterix",
        avatar: "asterix.jpg"
    },
    {
        id: 1,
        name: "Obelix",
        avatar: "obelix.jpg"
    }
]

module.exports = function (server) {
  server.get('/gauls/:id', function (req, res, next) {
      var gaul = gauls.find(elem => elem.id == req.params.id);
      res.send(gaul || 404);
      next();
  });

  server.get('/gauls/', function (req, res, next) {
      res.send(gauls);
      next();
  });
};