import { input } from './input.js'

const files = input.split('\n')
const realFiles = []

files.forEach(file => {
    const [name, checksum] = file.split('-')
    let position = 0

    if (checksum.split('').every(char => {
        for (let i = position; i < name.length; i++) {
            console.log(name[i], char)
            if (name[i] === char) {
                position = i + 1
                return true
            }
        }
        return false
    })) {
        realFiles.push(file)
    }
})

console.log(realFiles[32].split('-')[1])
