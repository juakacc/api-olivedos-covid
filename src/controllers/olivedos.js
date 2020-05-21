const express = require("express");
const httpStatus = require("http-status-codes");
const Olivedos = require("../models").olivedos;

const router = express.Router();

router.get("/", (req, res) => {
  Olivedos.findAll()
    .then((data) => res.status(httpStatus.OK).json(data))
    .catch(() =>
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        erro: "Ocorreu um erro na solicitação",
      })
    );
});

router.get("/current", (req, res) => {
  Olivedos.findOne({
    order: [["date", "DESC"]],
  })
    .then((data) => res.status(httpStatus.OK).json(data))
    .catch(() =>
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        erro: "Ocorreu um erro na solicitação",
      })
    );
});

router.post("/", (req, res) => {
  const { date, suspect, descarded, confirmed, monitored, deaths } = req.body;

  Olivedos.create({
    date,
    suspect,
    descarded,
    confirmed,
    monitored,
    deaths,
  })
    .then((response) =>
      res.status(httpStatus.CREATED).json(response.dataValues)
    )
    .catch(() =>
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        erro: "Ocorreu um erro na solicitação",
      })
    );
});

module.exports = router;
