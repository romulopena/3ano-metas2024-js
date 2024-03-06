const botoes = document.querySelectorAll(".botao");
//console.log(botoes);
const textos = document.querySelectorAll(".aba-conteudo");

for (let i= 0; i <botoes.length;i++){
    botoes[i].onclick = function(){
        for (let j=0; j <botoes.length;j++){
            botoes[j].classList.remove("ativo");    
            textos[j].classList.remove("ativo");    
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
    console.log();
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-12-10T00:00:00");
let tempoAtual = new Date();
contadores[0].textContent = tempoObjetivo1 - tempoAtual;