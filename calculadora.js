const soma = require('./soma/soma.js');
const subtracao = require('./subtracao/sub.js');
const multiplicacao = require('./multiplicacao/multi.js');
const divisao = require('./divisao/divisao.js');
function calcular(operacao, a, b) {
    switch (operacao) {
        case 'soma':
            return soma(a, b);
        case 'subtracao':
            return subtracao(a, b);
        case 'multiplicacao':
            return multiplicacao(a, b);
        case 'divisao':
            return divisao(a, b);
        default:
            throw new Error("Operação inválida.");
    }
}
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Digite a operação (soma, subtracao, multiplicacao, divisao): ', operacao => {
    readline.question('Digite o primeiro número: ', num1 => {
        readline.question('Digite o segundo número: ', num2 => {
            try {
                const resultado = calcular(operacao, parseFloat(num1), parseFloat(num2));
                console.log(`O resultado é: ${resultado}`);
            } catch (error) {
                console.error(error.message);
            }
            readline.close();
        });
    });
});
