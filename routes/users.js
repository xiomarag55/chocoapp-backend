const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users");

router.get("", UserController.getUsers);
router.post("", UserController.addUser);
router.post("/login", UserController.existUsuario);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
router.get("/vendors", UserController.getVendorUsers);

module.exports = router;