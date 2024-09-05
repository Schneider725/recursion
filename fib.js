function fib(num, memo = {}) {
    if(num in memo) {
        return memo[num]
    }
    if(num == 0 || num == 1) {
        return 1;
    }

    return memo[num] = fib(num - 1) + fib(num - 2)

}

const fibo = fib(6)

console.log(fibo)