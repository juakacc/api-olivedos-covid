const router = require("express").Router();

router.get("/", (req, res) => {
  return res.json({
    msg: "Testando saída",
  });
});

module.exports = router;
