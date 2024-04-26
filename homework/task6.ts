/*
    Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar
    max, la función debe de determinar cual es el mayor de los 3 y retornarlo… la función debe de
    trabajar así:
    let maxValue = max( 5, 2, 6);
    console.log( maxValue ); // 6
*/

function numbers(a: number,b: number,c: number){
    if(a>b&&c<b){
        console.log( `the max num is: ${a}`);
    }else if(b>a&&c<b){
        console.log( `the max num is: ${b}`);
    }else{
        console.log( `the max num is: ${c}`);
    }
}
numbers(-1,0,5)