// Importa o módulo Express para criar o servidor
const express = require("express");
const app = express(); // Inicializa a aplicação Express

// Define a porta onde o servidor vai escutar
const PORT = 3000;

// Define a rota principal '/' para enviar o arquivo HTML ao navegador
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html"); // Envia o arquivo HTML ao cliente
});

// Inicia o servidor e faz com que ele "escute" na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
