import { encoded, translations } from './data.js'

const excludedParams = ['groupId']

const getDecoded = (encoded, translations) => {
    const decoded = []
    const decodedValues = {};

    for (const item of encoded) {
        const decodedItem = {}

        for (const key in item) {
            if (key.toLowerCase().endsWith('id') && item[key] !== null && !excludedParams.includes(key)) {
                const value = translations[item[key]];
                if (!decodedValues[value]) {
                    // Если значение еще не было расшифровано, расшифровываем его
                    decodedValues[item[key]] = value;
                    decodedItem[key] = value;
                }
            } else {
                decodedItem[key] = item[key]
            }
        }
        decoded.push(decodedItem)
    }

    console.log(decoded)
    console.log(decodedValues)
    return decoded
}

getDecoded(encoded, translations)
