require("dotenv").config();
const http = require("http");
const cors = require("cors");

const app = require("./src/app");

app.use(cors());

const port = process.env.PORT || 8888;
const server = http.createServer(app);

server.listen(port);
