const express = require("express");
const favicon = require("serve-favicon");
const fileUpload = require("express-fileupload");
const path = require("path");

function setupApp(app) {
  const assetsDir = path.join(__dirname, "src", "public"); // Atualizado para refletir a estrutura correta
  const viewsDir = path.join(__dirname, "src", "views");

  // Configurar diretório de views e engine de visualização
  app.set("views", viewsDir);
  app.set("view engine", "ejs");

  // Favicon
  app.use(favicon(path.join(assetsDir, "icons", "myfavicon.png")));

  // Middleware para arquivos estáticos CSS
  app.use(express.static(path.join(assetsDir, "css")));

  // Middleware para arquivos estáticos
  app.use(express.static(assetsDir));

  // Middleware para upload de arquivos
  app.use(fileUpload());
}

module.exports = { setupApp };
