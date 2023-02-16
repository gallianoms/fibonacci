const fib = (num: number) => {
  if (num === 0) return 0
  if (num === 1) return 1
  else {
    return fib(num - 1) + fib(num - 2)
  }
}

console.log(fib(10))

//! algorithmic complexity 2^N
