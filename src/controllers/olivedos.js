const express = require('express');
const httpStatus = require('http-status-codes');
const Olivedos = require('../models').olivedos;

const router = express.Router();

router.get('/', (req, res) => {
  const page = req.query.page || 0;
  const limit = req.query.limit || 20;

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(page) || isNaN(limit)) {
    return res.status(httpStatus.BAD_REQUEST).json({
      erro: 'Parâmetro(s) inválido(s)'
    });
  }
  const offset = page * limit;

  return Olivedos.findAll({ offset: parseInt(offset, 10), limit: parseInt(limit, 10) })
    .then((data) => res.status(httpStatus.OK).json(data))
    .catch(() => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        erro: 'Ocorreu um erro na solicitação'
      });
    });
});

router.get('/current', (req, res) => {
  Olivedos.findOne({
    order: [['date', 'DESC']]
  })
    .then((data) => res.status(httpStatus.OK).json(data))
    .catch(() => res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      erro: 'Ocorreu um erro na solicitação'
    }));
});

router.post('/', (req, res) => {
  const {
    date,
    suspect,
    discarded,
    confirmed,
    monitored,
    deaths,
    recovered
  } = req.body;

  Olivedos.create({
    date,
    suspect,
    discarded,
    confirmed,
    monitored,
    deaths,
    recovered
  })
    .then((response) => res.status(httpStatus.CREATED).json(response.dataValues))
    .catch(() => res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      erro: 'Ocorreu um erro na solicitação'
    }));
});

module.exports = router;
