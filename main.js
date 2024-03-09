const botoes = document.querySelectorAll(".botao");
//console.log(botoes);;
const textos = document.querySelectorAll(".aba-conteudo");

//laço de repetição para adicionar a seleção das abas ao clicar.
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

//declaração dos objetivos por data.
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-03-07T00:00:00");
const tempoObjetivo2 = new Date("2024-05-10T00:00:00");
const tempoObjetivo3 = new Date("2025-01-10T00:00:00");
const tempoObjetivo4 = new Date("2024-08-10T00:00:00");

//criação da lista dos contadores de tempo dos objetivos
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3,tempoObjetivo4];

// Função atualiza cronometro com um laço de repetição para chamada dos tempos de objetivos por meio de um contador i
function atualizaCronometro(){
    for(let i = 0; i < contadores.length; i++){
        contadores[i].textContent = calculaTempo(tempos[i]);
    }

}

//função que calcula os objetivos por variáveis
function calculaTempo(tempoObjetivo1){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo1 - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %=60;
    minutos %= 60;
    horas %=24;

//Mensagem de RETORNO: prazo encerrado (Condição)
    if (tempoFinal > 0){
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos "; 
    }else{
        return "P r a z o  E n c e r r a d o"
    }
}

//função que realiza a atualização ao vivo na página da contagem regressiva em segundos no cronometro.
function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000); //metodo que usa o parametro de atualização de 1 em 1 seg
}

//comecaCronometro();