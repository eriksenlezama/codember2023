import { input } from './input.js'

const encryptionKeys = input.split('\n')

let count = 0

encryptionKeys.forEach(encryptionKey => {
    const [range, letter, key] = encryptionKey.split(' ')
    const [low, high] = range.split('-')
    const times = key.split('').filter(token => token === letter[0]).length

    if (times < low || times > high) count += 1

    if (count === 42) console.log('submit', key)
})
