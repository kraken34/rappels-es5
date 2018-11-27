console.log("01 - Fonctions");
let nombre1 = 10
let nombre2 = 20

let additionner = function (a, b) {
    return a + b
}

let result1 = additionner(nombre1, nombre2)
let somme = additionner

let result2 = somme(nombre1, nombre2)

console.log(result1 + "\n" + result2)

let afficherOperation = function (op, val1, val2) {
    return "" + op.name + "(" + val1 + "," + val2 + ")" + "->" + op(val1, val2)
}

console.log(afficherOperation(somme, 2, 3))