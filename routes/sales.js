const express = require("express");
const router = express.Router();

const SaleController = require("../controllers/sales");
const { route } = require("./products");

router.get("", SaleController.getSales);
router.post("", SaleController.addSale);
router.put("/:id", SaleController.updateSale);
router.delete("/:id", SaleController.deleteSale);
router.get("/:id", SaleController.getSaleId);

module.exports = router;
