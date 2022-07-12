function validaArray(array, numero){
    try{
    if(!array && !numero) throw new ReferenceError("Envie os parâmetros");

    if(typeof array !== 'object') 
        throw new TypeError("Array precisa ser do tipo object");

    if(typeof numero !== 'number') 
        throw new TypeError("Numero precisa ser do tipo number");

    if(array.length !== numero) throw new RangeError ('Tamanho inválido!');

    return array;
    }
    catch(e){
        if (e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!")
            console.log(e.message)
        } else if (e instanceof TypeError){
            console.log("Este erro é um TypeError!")
            console.log(e.message)
        } else if (e instanceof RangeError){
            console.log("Este erro é um RangeError!")
            console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado: " + e);
        }
    }
}

/* Erro sem parâmetros
console.log(validaArray());
*/

/* Erro precisa ser do tipo object
console.log(validaArray(5, 5));
*/

/* Erro precisa ser do tipo number
console.log(validaArray([], 'a'));
*/

/* Erro de tamanho inválido
console.log(validaArray([], 5));
*/

//Array sem erro com tamanho do array passado por parâmetro
console.log(validaArray([1, 2, 3, 4, 5], 5));


