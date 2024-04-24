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

/*
    This TypeScript code generates a 5x5 multiplication table and prints it to the console.

    Here's a step-by-step explanation:

    1. The outer loop (`for(let i = 1; i <= 5; i++)`) iterates over the numbers 1 through 5. Each iteration of this loop represents a row in the multiplication table.

    2. Inside the outer loop, a variable `row` is initialized as an empty string. This variable will hold the values for the current row of the multiplication table.

    3. The inner loop (`for(let j = 1; j <= 5; j++)`) also iterates over the numbers 1 through 5. Each iteration of this loop represents a column in the multiplication table.

    4. Inside the inner loop, the product of the current row number (`i`) and the current column number (`j`) is calculated (`i * j`). This product is then converted to a string and appended to the `row` string, followed by a space.

    5. After the inner loop finishes (i.e., after all columns for the current row have been calculated), the `row` string is printed to the console using `console.log(row)`.

    6. This process repeats for each row, resulting in the printing of a 5x5 multiplication table to the console.
*/
