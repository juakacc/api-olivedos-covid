const express = require("express");
const httpStatus = require("http-status-codes");
const Olivedos = require("../models").olivedos;

const router = express.Router();

router.get("/", (req, res) => {
  let { page, limit } = req.query;
  let offset = 0;

  if (page && limit)
    offset = page * limit;

  if (!limit) limit = 500;
  

  Olivedos.findAll({ offset: parseInt(offset), limit: parseInt(limit) })
    .then((data) => res.status(httpStatus.OK).json(data))
    .catch((err) => {
      console.log(err);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        erro: "Ocorreu um erro na solicitação",
      })
    }
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
  const {
    date,
    suspect,
    discarded,
    confirmed,
    monitored,
    deaths,
    recovered,
  } = req.body;

  Olivedos.create({
    date,
    suspect,
    discarded,
    confirmed,
    monitored,
    deaths,
    recovered,
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
