/*
    Crear una función que reciba un arreglo como argumento, la función debe de retornar un
    nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra.
    Ejemplo:
    let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
    let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
    console.log( herosWithLetterS ); // She Hulk, Spiderman
    Tip: Para determinar si un string empieza con una letra
    let hero = ‘Spiderman';
    hero.startsWith(’S’); // true
    Si se tiene un arreglo vació, por ejemplo:
    let newHeroes = [];
    Se puede insertar en el arreglo
*/

function heroesThatStartsWith(heroes: string[], letter: string){
    let heroesWithLetter: string[] = [];

    for(let i = 0; i < heroes.length; i++){
        let hero = heroes[i];
        if(hero.startsWith(letter)){
            heroesWithLetter.push(hero);
        }
    }
    return heroesWithLetter;
}

/*
    Sure! The code you provided is a TypeScript function called `heroesThatStartsWith`. Let's break it down step by step:

    1. The function takes in two parameters: `heroes`, which is an array of strings representing hero names, and `letter`, which is a string representing the letter to filter the hero names by.

    2. Inside the function, a new empty array called `heroesWithLetter` is declared. This array will store the hero names that start with the specified letter.

    3. The function then enters a `for` loop that iterates over each element in the `heroes` array. The loop uses the variable `i` as the index to access each element.

    4. Inside the loop, the current hero name is assigned to the variable `hero` using the index `i`.

    5. The `if` statement checks if the current hero name starts with the specified letter. The `startsWith` method is a built-in JavaScript/TypeScript string method that returns `true` if the string starts with the specified substring, and `false` otherwise.

    6. If the condition is `true`, meaning the hero name starts with the specified letter, the hero name is added to the `heroesWithLetter` array using the `push` method.

    7. After the loop finishes iterating over all the hero names, the function returns the `heroesWithLetter` array, which contains only the hero names that start with the specified letter.

    This function can be used to filter an array of hero names based on a specific letter. For example, if you have an array `["Superman", "Spiderman", "Batman", "Wonder Woman"]` and you call `heroesThatStartsWith(heroes, "S")`, it will return `["Superman", "Spiderman"]` because those are the hero names that start with the letter "S".
*/ 