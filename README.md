# API Olivedos-COVID19

API RestFull para acesso aos dados da COVID-19 no município de Olivêdos/PB.
Desenvolvida utilizando Nodejs.

## Acesso aos dados

A aplicação está rodando [aqui](https://olivedos-covid.herokuapp.com)

#### Os dados disponibilizados são atualizados de acordo com a divulgação da secretaria de saúde do município.

Os dados podem ser acessados da seguinte forma:

Recuperar todos os registros coletados:

```
GET https://olivedos-covid.herokuapp.com
{
    "date":"2020-05-18 00:00:00",
    "suspect":0,
    "discarded":0,
    "confirmed":0,
    "monitored":3,
    "deaths":0
}, {
    "date":"2020-05-19 00:00:00",
    "suspect":0,
    "discarded":0,
    "confirmed":0,
    "monitored":7,
    "deaths":0
}
...
```

Recuperar o relatório mais atualizado:

```
GET https://olivedos-covid.herokuapp.com/current
{
    "date":"2020-05-18 00:00:00",
    "suspect":0,
    "discarded":0,
    "confirmed":0,
    "monitored":3,
    "deaths":0
}
```

## Executando localmente

É bem simples, clone o projeto, instale as dependências, prepare o ambiente e inicie o servidor :)

```
# Clone o projeto
git clone https://github.com/juakacc/api-olivedos-covid.git
cd api-olivedos-covid
```

```
# Instale as dependências
npm i
```

Altere as variáveis presentes em `.env_example` na raíz do projeto, após isso o renomeie para `.env`.

```
# Execute as migrações para criar as tabelas necessárias
npx sequelize-cli db:migrate
```

```
# Inicie o servidor
npm start
```

Server running in `PORT`

## Contribuições

Sinta-se a vontade para contribuir de qualquer maneira.

**Juntos somos mais fortes! Vamos lá, vencer o corona vírus.**
