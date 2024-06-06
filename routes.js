const path = require("path");
const fs = require("fs");
const { getRepos } = require("./services");

const CERTIFICATES_DIR = path.join(__dirname, "src", "public", "certificates");

const readCertificates = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        return reject(`Erro ao ler o diretório: ${dir}`);
      }
      const certificates = files.filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file));
      resolve(certificates);
    });
  });
};

function routes(app) {
  app.get("/", async (req, res) => {
    try {
      const projects = await getRepos();
      projects.sort((a, b) => a.id - b.id);
      res.render("index.ejs", { projects });
    } catch (error) {
      console.error(error);
      res.status(500).render("error.ejs");
    }
  });

  app.get("/about", (req, res) => {
    res.render("about.ejs");
  });

  app.get("/certificate", async (req, res) => {
    try {
      const rocketseatCertificates = await readCertificates(path.join(CERTIFICATES_DIR, "rocketseat"));
      const dioCertificates = await readCertificates(path.join(CERTIFICATES_DIR, "dio"));
      const aluraCertificates = await readCertificates(path.join(CERTIFICATES_DIR, "alura"));

      res.render("certificates.ejs", { rocketseatCertificates, dioCertificates, aluraCertificates });
    } catch (error) {
      res.status(500).send(error);
    }
  });
}

module.exports = routes;
