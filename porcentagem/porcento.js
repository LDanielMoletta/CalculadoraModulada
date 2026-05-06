// portcetagem
function porcentagem(num, total) {
    if (total === 0) {
        throw new Error("O total não pode ser zero.");
    }
    return (num / total) * 100;
}
module.exports = porcentagem;