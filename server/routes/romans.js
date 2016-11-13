var romans = [
    {
        id: 0,
        name: "Julek Cezar",
        avatar: "julek.jpg"
    },
    {
        id: 1,
        name: "Brutus",
        avatar: "brutus.jpg"
    }
]

module.exports = function (server) {
  server.get('/romans/:id', function (req, res, next) {
      var roman = romans.find(elem => elem.id == req.params.id);
      res.send(roman || 404);
      next();
  });

  server.get('/romans/', function (req, res, next) {
      res.send(romans);
      next();
  });
};