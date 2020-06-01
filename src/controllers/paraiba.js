const express = require("express");
const httpStatus = require("http-status-codes");
const Paraiba = require("../models").paraiba;

const router = express.Router();

router.get("/", (req, res) => {
  Paraiba.findAll()
    .then((data) => res.status(httpStatus.OK).json(data))
    .catch(() =>
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        erro: "Ocorreu um erro na solicitação",
      })
    );
});

router.get("/current", (req, res) => {
  Paraiba.findOne({
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
  const { date, recovered, confirmed, active, deaths } = req.body;

  const save = {
    date,
    recovered,
    confirmed,
    active,
    deaths,
  };

  if (!date || !confirmed || !active || !deaths) {
    return res.status(httpStatus.BAD_REQUEST).json({
      mensagem: "Parâmetros incompletos",
    });
  }

  if (!recovered) {
    save.recovered = confirmed - (active + deaths);
  }

  Paraiba.create(save)
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
