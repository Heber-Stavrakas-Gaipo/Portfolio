const url = "https://api.github.com/users/Heber-Stavrakas-Gaipo"
const e = error => console.error(error)

function getProjectName() {
    axios.get(`${url}/repos`)
        .then(response => {
            project1Name.textContent = response.data[1].name
        })
        .catch(e)
}
getProjectName()

function getDescription() {
    axios.get(`${url}/repos`)
        .then(response => {
            project1Dsc.textContent = response.data[1].description
        })
        .catch(e)
}
getDescription()

function getGithubUserName() {
    axios.get(url)
        .then(response => {
            githubUserName.textContent = response.data.login
        })
        .catch(e)
}
getGithubUserName()

function getStars() {
    axios.get(`${url}/repos`)
        .then(response => {
            project1Stars.textContent = response.data[1].stargazers_count
        })
        .catch(e)
}
getStars()

function getForks() {
    axios.get(`${url}/repos`)
        .then(response => {
            project1Forks.textContent = response.data[1].forks
        })
        .catch(e)
}
getForks()

function getLanguage() {
    axios.get(`${url}/repos`)
        .then(response => {
            project1Language.textContent = response.data[1].language
        })
        .catch(e)
}
getLanguage()