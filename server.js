const express = require("express");
const path = require("path");

const app = express();
const port = 2023;

const routes = require("./routes.js");
const { setupApp } = require("./middlewares.js");

// Configurar o aplicativo Express
setupApp(app, path);

// Configurar rotas
routes(app);

// Executar servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
