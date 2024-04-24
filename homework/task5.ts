/* 
    6- Realice un algoritmo, que permita la impresión en consola de la siguiente tabla: 
    1 2 3 4 5
    2 4 6 8 10
    3 6 9 12 15
    4 8 12 16 20
    5 10 15 20 25
*/

for(let i = 1; i <= 5; i++){
    let row = '';
    for(let j = 1; j <= 5; j++){
        row += `${i * j} `;
    }
    console.log(row);
}