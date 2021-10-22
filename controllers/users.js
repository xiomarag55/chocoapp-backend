const Usuario = require("../models/users");

exports.existUsuario = (req, res) => {
  Usuario.find()
    .where("email")
    .equals(req.body.email)
    .then((usuarioResult) => {
      if (usuarioResult.length > 0) {
        
        res.status(200).json({ status: 0, response: usuarioResult });
      } else {
        res.status(200).json({ status: 1, error: "Not found User" });
      }
    })
    .catch((err) => {
      res.status(200).json({ status: 1, error: "Not found User" });
    });
};

exports.addUser = (req, res) => {
  const UsuarioAdd = new Usuario({
    email: req.body.email,
    name: req.body.name,
    role: req.body.role,
    status: req.body.status,
  });

  UsuarioAdd.save()
    .then((createdUser) => {
      console.log(createdUser);
      res.status(201).json({ status: 0, response: createdUser });
    })
    .catch((err) => {
      res.status(200).json({ status: 1, error: err });
    });
};

exports.getUsers = (req, res) => {
  Usuario.find().then((usuarioResult) => {
    res.status(200).json(usuarioResult);
  });
};

exports.getVendorUsers = (req, res) => {
  Usuario.find()
    .where("role")
    .equals("vendedor")
    .then((usuarioResult) => {
      res.status(200).json(usuarioResult);
    });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const userUpdate = new Usuario({
    _id: id,
    role: req.body.role,
    status: req.body.status,
  });
  console.log(userUpdate);

  Usuario.findByIdAndUpdate(id, userUpdate).then((usuarioResult) => {
    res.status(200).json("El usuario se actualizó satisfactoriamente");
  });
};
exports.deleteUser = (req, res) => {
  Usuario.findByIdAndRemove(req.params.id)
    .then((Usuario) => {
      if (!Usuario) {
        return res.status(404).send({
          message: "No se pudo encontrar usuario con ID " + req.params.id,
        });
      }
      res.send({ message: "Usuario eliminado con éxito" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "No se pudo encontrar usuario con ID " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "No se pudo eliminar el usuario con ID " + req.params.id,
      });
    });
};
