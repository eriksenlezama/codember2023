import { input } from './input.js'

const operations = {
    '#': (a) => a + 1,
    '@': (a) => a - 1,
    '*': (a) => a * a,
    '&': (a) => a
}

const compile = (a) => {
    let message = ""
    let num = 0

    for (const char of input) {
        if (char !== '&') {
            num = operations[char](num)
            continue
        }
        message += num
    }

    return message
}

console.log(compile(input))