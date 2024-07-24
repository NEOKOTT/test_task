const readline = require('readline');

function getRandomCharacter() {
    const characters = "ABDEFGHIKLMNOQRTUVWYZabcdefghiklmnopqrstuvwyz0123456789+-_$~";
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function generateRandomString(length) {
    let randomString = "";
    for (let i = 0; i < length; i++) {
        randomString += getRandomCharacter();
    }
    return randomString;
}

function replaceLetters(inputString, replacementChar) {
    let resultString = "";
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            resultString += replacementChar;
        } else {
            resultString += char;
        }
    }
    return resultString;
}

function replaceDigits(inputString, replacementChar) {
    let resultString = "";
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (char >= '0' && char <= '9') {
            resultString += replacementChar;
        } else {
            resultString += char;
        }
    }
    return resultString;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите длину строки (N): ', (inputN) => {
    const N = parseInt(inputN, 10);

    if (!isNaN(N) && N > 0) {
        let randomString = generateRandomString(N);
        console.log("Сгенерированная строка: " + randomString);

        rl.question('Введите символ для замены всех букв: ', (replacementChar1) => {
            if (replacementChar1.length === 1) {
                let modifiedString1 = replaceLetters(randomString, replacementChar1);
                console.log("Строка после замены букв: " + modifiedString1);

                rl.question('Введите символ для замены всех цифр: ', (replacementChar2) => {
                    if (replacementChar2.length === 1) {
                        let modifiedString2 = replaceDigits(modifiedString1, replacementChar2);
                        console.log("Итоговая строка: " + modifiedString2);

                        let countChar1 = 0;
                        let countChar2 = 0;
                        let countChar3 = 0;
                        for (let i = 0; i < modifiedString2.length; i++) {
                            if (modifiedString2[i] === replacementChar1) {
                                countChar1++;
                            } else if (modifiedString2[i] === replacementChar2) {
                                countChar2++;
                            } else {
                                countChar3++;
                            }
                        }
                        console.log("Количество замененных букв: " + countChar1);
                        console.log("Количество замененных цифр: " + countChar2);
                        console.log("Количество остальных символов: " + countChar3);
                    } else {
                        console.log("Ошибка: Введите только один символ для замены цифр.");
                    }
                    rl.close();
                });
            } else {
                console.log("Ошибка: Введите только один символ для замены букв.");
                rl.close();
            }
        });
    } else {
        console.log("Ошибка: Введите допустимое число больше нуля.");
        rl.close();
    }
});
