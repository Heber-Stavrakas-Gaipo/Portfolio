const express = require("express");
const path = require("path");
const fs = require("fs").promises;
const favicon = require("serve-favicon");
const fileUpload = require("express-fileupload");

const app = express();
const port = 2023;

// set assets directory
const assetsDir = path.join(__dirname, "assets");

// set views directory (avoid repeat)
const viewsDir = path.join(__dirname, "views");

// set view engine (avoid repeat)
app.set("views", viewsDir);
app.set("view engine", "ejs");

// Favicon
app.use(favicon(path.join(assetsDir, "icons", "myfavicon.png")));

// Middleware for static files
app.use(express.static(assetsDir));

// Middleware for upload files (use after static middleware)
app.use(fileUpload());

// function to search github repos (avoid repeat)
async function getRepos() {
  const url = "https://api.github.com/users/Heber-Stavrakas-Gaipo/repos";
  const response = await fetch(url);
  const data = await response.json();
  return data.filter((repo) => repo.name !== "Heber-Stavrakas-Gaipo.md"); // Filtrar repositório indesejado
}

// principal route
app.get("/", async (req, res) => {
  try {
    const projects = await getRepos();
    projects.sort((a, b) => a.id - b.id); // Ordenar por ID
    res.render("pages/home/index", { projects });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar repositórios");
  }
});

// about route
app.get("/about", (req, res) => {
  res.render("pages/about/about");
});

// certificates route
app.get("/certificate", async (req, res) => {
  try {
    const certificatesPath = path.join(__dirname, "certificates.json");
    const data = await fs.readFile(certificatesPath, "utf8");
    const certificates = JSON.parse(data);
    const filteredCertificates = certificates.filter((cert) => cert.id >= 1 && cert.id <= 6);
    res.render("pages/certificates/certificates", { certificates });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao buscar certificados");
  }
});

// Run server
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
