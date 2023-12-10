import { input } from './input.js'

const entries = input.split('\n');

function isValid(entry) {
    const [id, username, email, age, location] = entry.split(',');

    const idRegex = /^[a-zA-Z0-9]+$/;
    if (!id.match(idRegex) || !username.match(idRegex)) {
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        return false;
    }

    if (age && isNaN(age)) {
        return false;
    }

    const locationRegex = /^[a-zA-Z\s]+$/;
    if (location && !location.match(locationRegex)) {
        return false;
    }

    return true;
}

let hiddenMessage = '';
for (const entry of entries) {
    if (!isValid(entry)) {
        hiddenMessage += entry.split(',')[1][0];
    }
}

console.log(hiddenMessage);