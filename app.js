//Variabile per richiamare le funzionalità di express
const express = require("express");

//Variabile per creare "istanza" di express
const app = express();

//Variabile per settare la porta di ascolto del server
const port = 3000;

//Importo il "pacchetto" router del file posts.js
const postsRouter = require("./routers/posts");

//Utilizzo una funzione di express per poter accedere agli elementi statici della directory "public"
app.use(express.static("public"));

//Creo una rotta che restituisca un semplice messaggio
app.get("/", (req, res) => {
  res.send("hello")
});

//Importo quanto creato nel file "posts"
app.use("/posts", postsRouter);

//Attivo porta di ascolto del server
app.listen(port, () => {
console.log("prova")
});