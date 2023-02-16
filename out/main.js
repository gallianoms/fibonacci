// const fib = (num: number) => {
//   if (num === 0) return 0
//   if (num === 1) return 1
//   else {
//     return fib(num - 1) + fib(num - 2)
//   }
// }
var fib = function (n) {
    var sol = [0, 1];
    for (var i = 2; i <= n; i++) {
        sol[i] = sol[i - 1] + sol[i - 2];
    }
    return sol[n];
};
console.log(fib(10));
//# sourceMappingURL=main.js.map