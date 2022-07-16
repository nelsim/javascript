//O problema envolve mais a saída que é a frase final que as próprias operações.
//Então as funções vão retornar partes da frase final.

//A função compara vai ter duas contantes que vão receber dois 'pedaços' da frase.
function compara(n1, n2){
    const primeiraFrase = criaFrase1(n1, n2);
    const segundaFrase = criaFrase2(n1, n2);
    //Vai retornar a frase inteira com os dois pedaços da frase.
    return `${primeiraFrase} ${segundaFrase}`;
}
//A função Cria Frase 1 vai verificar se os números são igual e retornar a frase.
function criaFrase1(n1, n2){
    //A variável iguais inicia como vazia.
    let iguais = '';
    //Se os números forem diferentes a variável iguais vai receber a palavra 'não'.
    if(n1 !== n2){
        iguais = 'não';
    }
    //Se os números forem iguais, a variável iguais não vai imprimir valor nenhum.
    return `Os números ${n1} e ${n2} ${iguais} são iguais.`;
}

//A função CriaFrase2 vai realizar a soma e imprimir a última parte da frase.
function criaFrase2(n1, n2){
    const soma = n1 + n2;
    //Iniciar as variáveis resultado10 e resultado20 como 'menor'
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    //As variáveis compara10 e compara20 que são booleanas vão receber a comparação se a soma são maiores.
    const compara10 = soma > 10;
    const compara20 = soma > 20;
    //Se a comparação for maior, as variáveis de resultado vão receber a palavra 'maior'.
    if(compara10){
        resultado10 = 'maior';
    }

    if(compara20){
        resultado20 = 'maior';
    }
    //Retornou a frase, mostrando a soma e o resultado.
    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}
//Chama a função compara para exibir a frase completa.
console.log(compara(20, 20));