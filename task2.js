/*
2) Функция. Принимает массив строк.
Должна вернуть массив результатов проверки двух строк.
Если у одной строки с последующей совпадают первый и последний символы, то true.
Например ["asd", "afffd", "cc", "kk"]. Для такого массива функция должна вернуть [true, false, false]
 */
let arr = ["asd", "afffd", "cc", "kk"];

function checkArr (arr) {
let finalArr = [];
for (let i=0; i <= arr.length - 2; i++) {
    if ( checkStr(arr[i], arr[i+1]) ) {
        finalArr.push("true")
    } else {
        finalArr.push("false")
    }
}
return finalArr;
}

function checkStr (str1, str2) {
return (str1[0] == str2[0] && str1[-1] == str2[-1])
}

console.log(checkArr(arr))