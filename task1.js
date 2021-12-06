/*
1) Написать рекурсивную функцию вычисления чисел Фибоначчи.
На вход функции подавать длину конечного массива чисел.
*/


let fib = {

    getFib: function (n) {
        if (n <= 1) {
            return this.cache[n]; // выход из рекурсии
        }

        if (this.cache[n]) {
            return this.cache[n]; //проверка, если есть в кэше

        } else {
            this.cache[n] = this.getFib(n - 2) + this.getFib(n - 1); // сохранение в кэш
        }
        return this.cache[n];
    },

    cache: [0, 1, 1]
}

console.log(fib.getFib(100)) // если нужно n-е число
console.log(fib.cache) // ряд чисел
