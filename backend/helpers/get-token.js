// CRIADO A PARTIR DA AULA DE 25/07/2024
const getToken = (req) =>{
    const autHeader = req.headers.autorizacao
    /* Abaixo a função split() do JS pega a String dentro de autHeader e a divide
    quando encontrar como separador um espaço. Por fim, considera apenas a segunda 
    parte um array começa na posição [0], então [1] é o segundo elemento de um array.
    o resultado é gravado na variável token.
    */
    const token = autHeader.split(" ")[1]
    return token
}

module.exports = getToken