/*
    Realizar un programa que muestre la nota de un estudiante en formato de letras.
    A - 90-100  
    B - 80-89
    C - 70-79
    D - 60-69
    F - 0-59
*/ 

//prompt("Ingresa la nota del estudiante: ");

let grade = 110;

if(grade >= 90 && grade <= 100){
    console.log("A");
} else if(grade >= 80 && grade <= 89){
    console.log("B");
} else if(grade >= 70 && grade <= 79){
    console.log("C");
} else if(grade >= 60 && grade <= 69){
    console.log("D");
} else if(grade >= 0 && grade <= 59){
    console.log("F");
} else {
    console.log("Nota no válida");
}