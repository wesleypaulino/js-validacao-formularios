export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}

function validaDataNascimento(input){
    const dataRecebida = new Date(input.value)
    let mensagem= ' '

    if(!maiorque18(dataRecebida)) {
        mensagem = 'Sua idade deve ser maior que 18 anos para se cadastrar.'
    }
    
    input.setCustomValidity(mensagem)
}

function maiorque18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTDCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}