function fib(num, memo = {}) {
    if(num in memo) {
        return memo[num]
    }
    if(num == 0 || num == 1) {
        return 1;
    }

    console.log('this was printed recursively')

    return memo[num] = fib(num - 1, memo) + fib(num - 2,memo)

}

// const fibo = fib(6)

console.log(fib(6))