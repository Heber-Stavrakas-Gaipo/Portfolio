async function getRepos() {
    const url = "https://api.github.com/users/Heber-Stavrakas-Gaipo/repos";
    const response = await fetch(url);
    const data = await response.json();
    return data.filter((repo) => repo.name !== "Heber-Stavrakas-Gaipo.md");
}

module.exports = {
    getRepos,
};
