const Producto = require("../models/productos");

exports.getProducts = (req, res) => {
  Producto.find().then((productoResult) => {
    res.status(200).json(productoResult);
  });
};

exports.getAvaliableProducts = (req, res) => {
  Producto.find()
    .where("estado")
    .equals("disponible")
    .then((productoResult) => {
      res.status(200).json(productoResult);
    });
};

exports.addProduct = (req, res) => {
  const productoAdd = new Producto({
    producto: req.body.producto,
    unidades: req.body.unidades,
    precioUnitario: req.body.precioUnitario,
    valorTotal: req.body.valorTotal,
    fecha: req.body.fecha,
    estado: req.body.estado,
  });

  productoAdd.save().then((createdProduct) => {
    res.status(201).json("Creado satisfactoriamente");
  });
};

exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const productUpdate = new Producto({
    _id: id,
    producto: req.body.producto,
    unidades: req.body.unidades,
    precioUnitario: req.body.precioUnitario,
    valorTotal: req.body.valorTotal,
    fecha: req.body.fecha,
    estado: req.body.estado,
  });
  console.log(productUpdate);

  Producto.findByIdAndUpdate(id, productUpdate).then((productoResult) => {
    res.status(200).json("El producto se actualizó satisfactoriamente");
  });
};
exports.deleteProduct = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    await producto.remove();
    res.send({ data: true });
    producto.save();
  } catch {
    res.status(404).send({ error: "Producto no encontrado" });
  }
};
exports.getProductId = (req, res) => {
  Producto.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      res.status(200).json(productoResult);
    } else {
      res.status(404).json("Producto no encontrado");
    }
  });
};
