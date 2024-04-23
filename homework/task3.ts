/* 
    Dado el siguiente arreglo:
    let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
    Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor?
*/

export let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

let max = 0;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
}
console.log(`The biggest number is: ${max}`);
