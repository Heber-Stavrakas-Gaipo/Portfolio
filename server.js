const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const app = express();
const url = "https://api.github.com/users/Heber-Stavrakas-Gaipo/repos";
/* eslint-disable */
const __dirname = `${__filename}/..`;

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/assets"));
app.use(favicon(path.join(__dirname, "assets", "icons", "myfavicon.png")));

let fileUpload = require("express-fileupload");
app.use(fileUpload());

app.get("/", async function (req, res) {
	const postsResponse = fetch(url);
	const [posts] = await Promise.all([postsResponse]);
	const postsJson = await posts.json();
	// Applying logic to ignore the object "Heber-Stavrakas-Gaipo.md"
	const filteredPosts = postsJson.filter(
		(post) => post.name !== "Heber-Stavrakas-Gaipo"
	);
	const post = filteredPosts.map((post) => {
		return { ...post };
	});
	post.sort((a, b) => a.id - b.id);
	res.render("pages/home/index", { projects: post });
});

app.get("/about", function (req, res) {
	res.render("pages/about/about");
});

app.get("/certificates", function (req, res) {
	res.render("pages/certificates/certificates");
});

app.listen(2023);
console.log("Rodando!");
