const jogador1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const jogador2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

function rolarDado(){
    return Math.floor(Math.random() * 6) + 1;
}

function obterBlocoAleatorio(){
    let random = Math.random();
    let resultado;

    switch(true) {
        case random < 0.33:
            resultado = "RETA";
            break;
        case random < 0.66:
            resultado = "CURVA";
            break;
        default:
            resultado = "CONFRONTO";
    }
    return resultado;
}

async function registrarResultadoDeJogada(nomePersonagem, tipoBloco, resultadoDado, atributo){
    console.log(`${nomePersonagem} 🎲 rolou um dado de ${tipoBloco} ${resultadoDado} + ${atributo} = ${resultadoDado + atributo}`);
}

async function iniciarCorrida(jogador1, jogador2){
    for(let rodada = 1; rodada <= 5; rodada++){
        console.log(`🏁 Rodada ${rodada}`);

        let bloco = obterBlocoAleatorio();
        console.log(`Bloco: ${bloco}`);

        let resultadoDadoJogador1 = rolarDado();
        let resultadoDadoJogador2 = rolarDado();

        let totalHabilidadeJogador1 = 0;
        let totalHabilidadeJogador2 = 0;

        if(bloco === "RETA") {
            totalHabilidadeJogador1 = resultadoDadoJogador1 + jogador1.VELOCIDADE;
            totalHabilidadeJogador2 = resultadoDadoJogador2 + jogador2.VELOCIDADE;

            await registrarResultadoDeJogada(jogador1.NOME, "velocidade", resultadoDadoJogador1, jogador1.VELOCIDADE);
            await registrarResultadoDeJogada(jogador2.NOME, "velocidade", resultadoDadoJogador2, jogador2.VELOCIDADE);
        } 
        else if(bloco === "CURVA") {
            totalHabilidadeJogador1 = resultadoDadoJogador1 + jogador1.MANOBRABILIDADE;
            totalHabilidadeJogador2 = resultadoDadoJogador2 + jogador2.MANOBRABILIDADE;

            await registrarResultadoDeJogada(jogador1.NOME, "manobrabilidade", resultadoDadoJogador1, jogador1.MANOBRABILIDADE);
            await registrarResultadoDeJogada(jogador2.NOME, "manobrabilidade", resultadoDadoJogador2, jogador2.MANOBRABILIDADE);
        } 
        else if(bloco === "CONFRONTO") {
            let resultadoPoderJogador1 = resultadoDadoJogador1 + jogador1.PODER;
            let resultadoPoderJogador2 = resultadoDadoJogador2 + jogador2.PODER;

            console.log(`${jogador1.NOME} confrontou com ${jogador2.NOME} 🥊`);

            await registrarResultadoDeJogada(jogador1.NOME, "poder", resultadoDadoJogador1, jogador1.PODER);
            await registrarResultadoDeJogada(jogador2.NOME, "poder", resultadoDadoJogador2, jogador2.PODER);

            // Lógica para verificar e aplicar perda de pontos
            if(resultadoPoderJogador1 > resultadoPoderJogador2) {
                jogador2.PONTOS = jogador2.PONTOS > 0 ? jogador2.PONTOS - 1 : 0;
                console.log(`${jogador1.NOME} ganhou o confronto! ${jogador2.NOME} perdeu 1 ponto. 🐢`);
            } else if(resultadoPoderJogador2 > resultadoPoderJogador1) {
                jogador1.PONTOS = jogador1.PONTOS > 0 ? jogador1.PONTOS - 1 : 0;
                console.log(`${jogador2.NOME} ganhou o confronto! ${jogador1.NOME} perdeu 1 ponto. 🐢`);
            } else {
                console.log("Confronto empatado! Nenhum ponto foi perdido.");
            }
        }

        if(totalHabilidadeJogador1 > totalHabilidadeJogador2) {
            console.log(`${jogador1.NOME} marcou um ponto!`);
            jogador1.PONTOS++;
        } else if(totalHabilidadeJogador2 > totalHabilidadeJogador1){
            console.log(`${jogador2.NOME} marcou um ponto!`);
            jogador2.PONTOS++;
        }

        console.log("------------------------------");
    }


async function DeclareVencedor (jogador1, jogador2) {
    console.log(`Pontuação final:
        ${jogador1.NOME}: ${jogador1.PONTOS} pontos
        ${jogador2.NOME}: ${jogador2.PONTOS} pontos`);
        }
console.log("Resultado Final: ");

if (jogador1.PONTOS > jogador2.PONTOS) {
    console.log(`${jogador1.NOME} venceu com ${jogador1.PONTOS} Ponto(s)`);
}

else if (jogador2.PONTOS > jogador1.PONTOS) {
    console.log(`${jogador2.NOME} venceu com ${jogador2.PONTOS} Ponto(s)`);
}

else {
    console.log("A corrida terminou em empate");
}

}

(async function main(){
    console.log(`🏁🚨 Corrida entre ${jogador1.NOME} e ${jogador2.NOME} começando... \n`);
    await iniciarCorrida(jogador1, jogador2);

})();
