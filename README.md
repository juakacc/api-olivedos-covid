# API Olivedos - COVID19

![GitHub repo size](https://img.shields.io/github/repo-size/juakacc/api-olivedos-covid)

API RestFull para acesso aos dados da COVID-19 no município de Olivêdos/PB.

Desenvolvida utilizando NodeJs, Sequelize, Mysql, entre outras tecnologias.

## Acessando os dados

A aplicação está executando no [Heroku](https://olivedos-covid.herokuapp.com)

#### Os dados disponibilizados são atualizados de acordo com a divulgação da secretaria de saúde do município.

Os dados podem ser acessados da seguinte forma:

Recuperar todos os registros coletados em Olivêdos:

```code
GET https://olivedos-covid.herokuapp.com?page=0&limit=10
[{
    "id": 1,
    "date": "2020-05-18 00:00:00",
    "suspect": 0,
    "discarded": 0,
    "confirmed": 0,
    "monitored": 3,
    "deaths": 0
}, {
    "id": 2,
    "date": "2020-05-19 00:00:00",
    "suspect": 0,
    "discarded": 0,
    "confirmed": 0,
    "monitored": 7,
    "deaths": 0
}
...
]
```

Onde `page` e `limit` são a página e a quantidade de itens por página, respectivamente. Esses dados estão ordenados pela data, de forma crescente.

Recuperar o registro mais atualizado, ou seja, com a data mais recente:

```code
GET https://olivedos-covid.herokuapp.com/current
{
    "date": "2020-05-18 00:00:00",
    "suspect": 0,
    "discarded": 0,
    "confirmed": 0,
    "monitored": 3,
    "deaths": 0
}
```

Para centralizar a recuperação dos dados estão sendo disponibilizados também os dados do estado da Paraíba, apresentando apenas os dados mais representativos.

A rotas seguem a mesma linha, apenas acrescentando o `/pb` ao fim do caminho:

```code
GET https://olivedos-covid.herokuapp.com/pb?page=0&limit=10
[{
    "id": 1,
    "date": "2020-06-01 00:00:00",
    "confirmed": 13695,
    "active": 10688,
    "recovered": 2637,
    "deaths": 370
}, {
    "id": 2,
    "date": "2020-06-02 00:00:00",
    "confirmed": 14859,
    "active": 11560,
    "recovered": 2920,
    "deaths": 379
}
...
]
```

O registro atual segue da mesma maneira para a Paraíba:

```code
GET https://olivedos-covid.herokuapp.com/pb/current
{
    "id": 2,
    "date": "2020-06-02 00:00:00",
    "confirmed": 14859,
    "active": 11560,
    "recovered": 2920,
    "deaths": 379
}
```

## Executando o projeto localmente

É bem simples, clone o projeto, instale as dependências, prepare o ambiente e inicie o servidor :)

```shell
# Clone o projeto
git clone https://github.com/juakacc/api-olivedos-covid.git
cd api-olivedos-covid
```

```shell
# Instale as dependências
npm i
```

Altere as variáveis presentes em `.env_example` na raíz do projeto, após isso o renomeie para `.env`.

```shell
# Execute as migrações para criar as tabelas necessárias
npx sequelize-cli db:migrate
```

```shell
# Inicie o servidor
npm start
```

O servidor estará executando na `PORT` definida no `.env`

## Contribuições

Sinta-se a vontade para contribuir de qualquer maneira.

**Juntos somos mais fortes! Vamos lá, vencer o coronavírus.**
