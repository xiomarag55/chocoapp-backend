const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/products");

router.get("", ProductController.getProducts);
router.get("/availables", ProductController.getAvaliableProducts);
router.post("", ProductController.addProduct);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);
router.get("/:id", ProductController.getProductId);

module.exports = router;