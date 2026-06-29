const perguntas = [
  { pergunta: "Qual linguagem usamos para estilizar páginas?", 
    alternativas: ["HTML", "CSS", "JavaScript"], 
    correta: 1 },
  { pergunta: "Qual tag usamos para títulos?", 
    alternativas: ["<h1>", "<p>", "<div>"], 
    correta: 0 },
  { pergunta: "Qual linguagem é usada para lógica?", 
    alternativas: ["CSS", "JavaScript", "HTML"], 
    correta: 1 }
];

let indice = 0;
let pontos = 0;

function mostrarPergunta() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = `<h2>${perguntas[indice].pergunta}</h2>`;
  perguntas[indice].alternativas.forEach((alt, i) => {
    const btn = document.createElement("button");
    btn.textContent = alt;
    btn.onclick = () => verificarResposta(i);
    quiz.appendChild(btn);
  });
}

function verificarResposta(i) {
  if (i === perguntas[indice].correta) pontos++;
  indice++;
  if (indice < perguntas.length) {
    mostrarPergunta();
  } else {
    document.getElementById("quiz").innerHTML = `<h2>Você fez ${pontos} pontos!</h2>`;
  }
}

document.getElementById("start").onclick = mostrarPergunta;
