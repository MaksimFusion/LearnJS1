/*
Написать функцию, которая принимает целочисленный number и рисует спиральную матрицу NxN, где N - входной параметр.
Например,matrix(3)
Ответ:
1 2 3
8 9 4
7 6 5
 */
function matrix (n) {
let result = new Array(n).fill().map(() => new Array(n).fill());

let counter = 1,
    startCol = 0, //начальная колонка
    endCol = n-1, //конечная колонка
    startRow = 0, //начальный ряд
    endRow = n-1; //конечный ряд

while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++){
        result[startRow][i] = counter;
        counter++
    }
    startRow++;

    for (let j =startRow; j <= endRow; j++){
        result[j][endCol] = counter;
        counter++;
    }
    endCol--;

    for(let i = endCol; i >= startCol; i--) {
        result[endRow][i] = counter;
        counter++;
    }
    endRow--;

    for(let j = endRow; j >= startRow; j--){
        result[j][startCol] = counter;
        counter++;

    }
    startCol++;
}
return result;
}


console.log(matrix(4))