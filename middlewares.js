const express = require("express");
const favicon = require("serve-favicon");
const fileUpload = require("express-fileupload");

function setupApp(app, path) {
    const assetsDir = path.join(__dirname, "assets");
    const viewsDir = path.join(__dirname, "views");

    // Configurar diretório de views e engine de visualização
    app.set("views", viewsDir);
    app.set("view engine", "ejs");

    // Favicon
    app.use(favicon(path.join(assetsDir, "icons", "myfavicon.png")));

    // Middleware para arquivos estáticos
    app.use(express.static(assetsDir));

    // Middleware para upload de arquivos
    app.use(fileUpload());
}

module.exports = { setupApp };