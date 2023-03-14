//criando react
//npx create-react-app react001 
//pasta src  apagado todos arquivos e criado index.js 
//criado arquivo App.js dentro pasta src
//criado uma função com return e exportado (export default App)
//aqui em index.js chama o App (import App from "./App";)
//criado o dom em ReactDOM.createRoot(...) e rendererizado pelo render
//criado dentro do src o index.css, estilo da pagina index.js echamado em (import './index.css';)
//criado pasta componets e dentro Texto.jsx ou js e exportado tambem (export default Texto)
//chmando o modulo Texto.jsx dentro do App.js pelo (import Texto from "./components/Texto";)
//chamado varias vezes (<Texto></Texto>) que renderiza o que tem em Texto.jsx
//criado Texto.css e cahamndo em Texto.jsx (import './Texto.css')


//REACT 17
//import React from "react";
// import  ReactDOM  from "react-dom";
// import './index.css';
// import App from "./App";

// ReactDOM.render(<App></App>, document.querySelector("#root"))

//github sem a pasta node_modules
//npm start => start a pagina

//REACT 18
import  ReactDOM  from "react-dom/client";
import './index.css';
import App from "./App";

ReactDOM.createRoot(document.querySelector("#root")).render(<App></App>)

