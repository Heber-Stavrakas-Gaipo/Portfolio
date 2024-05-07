<h1 align="center">Portfolio</h1>

<p align="center">Projeto destinado a concentrar e apresentar meus conhecimentos de programação, voltados ao desenvolvimento WEB.</p>

<p align="center">
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#alura">Desafio Alura</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#home">Home</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#certificates">Certificates</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#✨features">Features</a>
</p>

## Tecnologias
- HTML
- CSS
- JavaScript
    - Axios
    - Express
    - Node.js

## Projeto
Esse projeto nasceu com a proposta de aplicar e desenvolver meus conhecimentos em HTML e CSS, para apresentar uma página inicial que servisse como portfólio. Mas decidi reunir aqui conhecimentos mais profundos, tanto HTML e CSS, quanto JavaScript e suas ferramentas.

O site conta com uma página inicial para exibir meu projetos públicos no GitHub através de requisição em API, uma seção que falo sobre mim de forma breve, porém contextual e por último, mas não menos importante, uma seção para meus certificados, que vão sendo inseridos conforme adquiridos.

Esse README exibe uma apresentação estática e mais prática. O gif apresenta alguns recursos extras como efeitos em :hover, :focus, um botão de "voltar ao topo" com efeito smooth quando clicado, um theme-switcher e requisições em APIs. O site também conta com media queries.

## Desafio Alura
Estou participando da Imersão Alura - Inteligência Artificial 2ª Edição, foi apresentado o Gemini e o todas as possibilidades que ele oferece.

O primeiro desafio envolve implementar a IA Generativa Gemini ou Google AI Studio, ambos da Google, para automatizar tarefas realizadas pelos alunos, em trabalhos pessoais. Enfim, o objetivo era explorar a ferramenta para desenvolver algo.

Decidi usar a IA para automatizar a exibição dos certificados (por enquanto da Rocketseat) na respectiva seção, alimentando uma API com as informações desses certificados e utilizar NodeJS com EJS para enviar essas informações para o front-end.

|Prompt|
--------
|Possuo um site referente ao meu portfólio que é estruturado com NodeJS baseado em EJS. Esse site possui uma sessão onde eu insiro alguns certificados e eu gostaria de automatizar essa inserção criando uma api local no arquivo server.js que inclua os endereço de cada imagem no repositório local e a respectiva inserção da função forEach() no arquivo certificates.ejs para inserir a estrutura necessária para que intere por todos os elementos e gere como saída da função app.get() no argumento res.render do servidor. Gere uma estrutura genérica, tanto para a api, quanto para a inserção, para que eu altere de acordo com minhas especificações.|
--------

|Saídas|
--------
```JS
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Define certificates directory path
const certificatesDir = path.join(__dirname, 'certificates');

// Read certificates from directory
const certificates = fs.readdirSync(certificatesDir).map(fileName => {
  return {
    fileName: fileName, // Filename of the certificate
    imageUrl: path.join(certificatesDir, fileName) // Path to the certificate image
  };
});

// Create API endpoint for certificates
app.get('/api/certificates', (req, res) => {
  res.json(certificates);
});

// Serve your EJS templates from the 'views' directory
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').render);
app.use(express.static(path.join(__dirname, 'public')));

// Render the 'certificates.ejs' template
app.get('/', (req, res) => {
  res.render('certificates', { certificates });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```
```
<% for (const certificate of certificates) { %>
  <div class="certificate">
    <img src="<%= certificate.imageUrl %>" alt="Certificate">
    <h3><%= certificate.fileName %></h3>
    </div>
<% } %>
```
Algumas mudanças foram feitas para que o resultado estivesse mais alinhado com o desejado, seguindo a solicitação de que o código fosse mais genérico.

<div aLign="center" style="display: flex; flex-direction: row; justify-content: center; align-items: center; gap:2rem">
  <a href="./server.js"><img aLign="center" alt="JavaScript" src="https://img.shields.io/badge/Aplicação do código JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /></a>
  <a href="./views/pages/certificates/certificates.ejs"><img aLign="center" alt="NodeJS" src="https://img.shields.io/badge/Aplicação do código EJS-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" /></a>
</div>

---

![page_example_part1](./assets/prints/page-example.gif)
![page_example_part2](./assets/prints/page-examplept2.gif)

## Home

- Tema claro
![Página_inicial_tema_claro](./assets/prints/localhost_2023_(laptop_light).png)

- Tema escuro
![Página_inicial_tema_escuro](./assets/prints/localhost_2023_(laptop_default).png)

## About

- Tema claro
![Sobre_mim_tema_escuro](./assets/prints/localhost_2023_about(laptop_light).png)

- Tema escuro
![Sobre_mim_tema_escuro](./assets/prints/localhost_2023_about(laptop_default).png)

## Certificates

- Tema claro
![Certificados_tema_escuro](./assets/prints/localhost_2023_certificates(laptop_light).png)

- Tema escuro
![Certificados_tema_escuro](./assets/prints/localhost_2023_certificates(laptop_default).png)

## ✨Features
- Switch Theme
- Back-to-top button
- CSS Effects and Media Queries
- API Requests
- Local API
- Google Gemini