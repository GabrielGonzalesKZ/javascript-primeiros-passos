const valorRefrigerante = 11.99
const valorMacarrao     = 6.99
const valorErvilha      = 6.99
const valorArroz        = 22.99
const valorFeijao       = 11.89
const valorVinho        = 70.00

let quantRefrigerante   = 3 * valorRefrigerante
let quantMacarrao       = 4 * valorMacarrao
let quantErvilha        = 3 * valorErvilha
let quantArroz          = 3 * valorArroz
let quantFeijao         = 2 * valorFeijao
let quantVinho          = 3 * valorVinho

let totalGabriel = quantRefrigerante + quantMacarrao + quantErvilha + quantArroz + quantFeijao
let totalAmigo   = quantVinho
let total = totalGabriel + totalAmigo

let metadeVinho = quantVinho / 2
let metadeGabriel = totalGabriel /2


if (total%2 ==0){
    console.log (`Valor total da compra R$ ${total} , Valor para Gabriel R$ ${metadeGabriel} , Valor para Amigo R$ ${totalAmigo + metadeGabriel}`)
}

else{
    console.log (`Valor total da compra R$ ${total} , Valor para Gabriel R$ ${total / 2} , Valor para Amigo R$ ${total / 2}`)
}




// // EXTRA

// let precoRefrigerante       = parseFloat(prompt("Digite o valor do refrigerante"))
// let quantidadeRefrigerante  = parseInt(prompt("Quantas Unidades ?"))
// let total1                  = precoRefrigerante * quantidadeRefrigerante
// alert(`Total do produto: R$ ${total1}`)

// let precoMacarrao           = parseFloat(prompt("Digite o valor do macarrão"))
// let quantidadeMacarrao      = parseInt(prompt("Quantas Unidades ?"))
// let total2                  = precoMacarrao * quantidadeMacarrao
// alert(`Total do produto: R$ ${total2}`)

// let precoErvilha            = parseFloat(prompt("Digite o valor do ervilha"))
// let quantidadeErvilha       = parseInt(prompt("Quantas Unidades ?"))
// let total3                  = precoErvilha * quantidadeErvilha
// alert(`Total do produto: R$ ${total3}`)


// let precoArroz              = parseFloat(prompt("Digite o valor do arroz"))
// let quantidadeArroz         = parseInt(prompt("Quantas Unidades ?"))
// let total4                  = precoArroz * quantidadeArroz
// alert(`Total do produto: R$ ${total4}`)


// let precoFeijao             = parseFloat(prompt("Digite o valor do feijão"))
// let quantidadeFeijao        = parseInt(prompt("Quantas Unidades ?"))
// let total5                  = precoFeijao * quantidadeFeijao
// alert(`Total do produto: R$ ${total5}`)


// let precoVinho              = parseFloat(prompt("Digite o valor do Vinho"))
// let quantidadeVinho         = parseInt(prompt("Quantas Unidades ?"))
// let total6                  = precoVinho * quantidadeVinho
// alert(`Total do produto: R$ ${total6}`)



// let total = total1 + total2 + total3 + total4 + total5 + total6
// alert(`Total da compra: R$ ${total}`)

