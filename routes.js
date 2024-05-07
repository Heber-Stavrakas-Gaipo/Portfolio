const path = require("path");
const fs = require("fs").promises;
const { getRepos } = require("./services");

function routes(app) {
    app.get("/", async (req, res) => {
        try {
            const projects = await getRepos();
            projects.sort((a, b) => a.id - b.id);
            res.render("pages/home/index", { projects });
        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao buscar repositórios");
        }
    });

    app.get("/about", (req, res) => {
        res.render("pages/about/about");
    });

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
}

module.exports = routes;
