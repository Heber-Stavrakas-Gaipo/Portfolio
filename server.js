const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const app = express();
const url = "https://api.github.com/users/Heber-Stavrakas-Gaipo/repos";
const dirname = `${__filename}/..`;
app.use(express.static(dirname + "/assets"));
app.use(favicon(path.join(dirname, "assets", "icons", "myfavicon.png")));
app.set("view engine", "ejs");
let fileUpload = require("express-fileupload");
app.use(fileUpload());

// Read certificates from directory (assuming certificates directory exists)
const certificates = () => {
  return [
    {
      fileName: "discover-conectar-certificate_page-0001.jpg",
      imageUrl: path.join("certificates", "rocketseat", "discover-conectar-certificate_page-0001.jpg"),
      descritpion: "Certificado de Conclusão Trilha Conectar"
    },
    {
      fileName: "discover-fundamentar-certificate_page-0001.jpg",
      imageUrl: path.join("certificates", "rocketseat", "discover-fundamentar-certificate_page-0001.jpg"),
      descritpion: "Certificado de Conclusão Trilha Fundamentar"
    },
    {
      fileName: "discover-especializar-certificate_page-0001.jpg",
      imageUrl: path.join("certificates", "rocketseat", "discover-especializar-certificate_page-0001.jpg"),
      descritpion: "Certificado de Conclusão Trilha Especializar"
    },
    {
      fileName: "discover-discover-certificate_page-0001.jpg",
      imageUrl: path.join("certificates", "rocketseat", "discover-discover-certificate_page-0001.jpg"),
      descritpion: "Certificado de Conclusão Curso Discover"
    },
    {
      fileName: "ai-for-devs-certificate_page-0001.jpg",
      imageUrl: path.join("certificates", "rocketseat", "ai-for-devs-certificate_page-0001.jpg"),
      descritpion: "Certificado de Participação no Evento AI for Devs"
    },
    {
      fileName: "nlw-ia-certificate_page-0001.jpg",
      imageUrl: path.join("certificates", "rocketseat", "nlw-ia-certificate_page-0001.jpg"),
      descritpion: "Certificado de Participação no Evento Next Level Week - Artificial Intelligence"
    },
  ];
};

// API endpoint for certificates (optional, comment out if not used)
app.get("/api/certificates", (req, res) => {
  res.json(certificates());

});


app.get("/", async function (req, res) {
  const postsResponse = fetch(url);
  const [posts] = await Promise.all([postsResponse]);
  const postsJson = await posts.json();
  // Applying logic to ignore the object "Heber-Stavrakas-Gaipo.md"
  const filteredPosts = postsJson.filter((post) => post.name !== "Heber-Stavrakas-Gaipo");
  const post = filteredPosts.map((post) => {
    return { ...post };
  });
  post.sort((a, b) => a.id - b.id);
  res.render("pages/home/index", { projects: post });
});

app.get("/about", function (req, res) {
  res.render("pages/about/about");
});

app.get("/certificate", async function (req, res) {
  const certificatesResponse = fetch("http://localhost:2023/api/certificates");
  const [certificates] = await Promise.all([certificatesResponse]);
  const certificatesJson = await certificates.json();
  const certificate = certificatesJson.map((certificate) => {
    return { ...certificate };
  });
  res.render("pages/certificates/certificates", { certificates: certificate });
});

app.listen(2023);
console.log("Rodando!");
