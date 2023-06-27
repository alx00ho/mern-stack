const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Set Goal" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update Goals ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete Goals ${req.params.id}` });
});

module.exports = router;