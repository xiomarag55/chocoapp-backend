const mongoose = require("mongoose");

const producto = mongoose.Schema({
  producto: { type: String, required: true },
  unidades: { type: Number, required: true },
  precioUnitario: { type: Number, required: true },
  valorTotal: { type: Number, required: true },
  fecha: { type: Date, required: true },
  estado: { type: String, required: true },
});
module.exports = mongoose.model("Producto", producto);
