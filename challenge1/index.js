import { encryptedMessage } from "./input.js"

const words = encryptedMessage.split(" ")

const animals = {}

words.forEach(el => {
    if (animals[el] !== undefined) {
        animals[el] = animals[el] + 1
    } else {
        animals[el] = 1
    }
})

let result = ""

words.forEach(el => {
    if (result.indexOf(el) < 0) {
        result += `${el}${animals[el]}`
    }
})

console.log(result)