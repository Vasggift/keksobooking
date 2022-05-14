import { Ad, Author, Location, Offer } from "./types.js"
import { getRandomFloatInRange, getRandomIntInRange, getRandomItem, getRandomSubSet } from "./utils.js"
function format0(value: number) {
    return (value < 10) ? (`0${value}`) : (`${value}`)
}
function createAuthor(): Author {
    return {
        avatar: `img/avatars/user${format0(getRandomIntInRange(1, 10))}.png`
    }
}

function createLocation(): Location {
    return {
        lat: getRandomFloatInRange(35.65000, 35.70000, 5),
        lng: getRandomFloatInRange(139.70000, 139.80000, 5)
    }
}
function formatLocation(location: Location) {
    return `${location.lat},${location.lng}`
}
const checkInCheckOut = ["12:00", "13:00", "14:00"]
const descriptions = [
    "строка — заголовок предложения. Придумайте самостоятельно.",

    "address: string; //строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.",

    "price: number; // число — стоимость. Случайное целое положительное число.",

    "type: string; // строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.",

    "rooms: number; // число — количество комнат. Случайное целое положительное число.",

    "guests: number; //, число — количество гостей, которое можно разместить. Случайное целое положительное число.",

    "checkin: string; // строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.",

    "checkout: string; // строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.",

    "features: string[]; // массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.",

    "description: string; //  строка — описание помещения. Придумайте самостоятельно."

];
const features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
const photos = [
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg"
]
const types = [
    "palace", "flat", "house", "bungalow", "hotel"
]
function createOffer(location: Location): Offer {
    return {
        address: formatLocation(location),
        checkin: getRandomItem(checkInCheckOut),
        checkout: getRandomItem(checkInCheckOut),
        description: getRandomItem(descriptions),
        features: getRandomSubSet(features),
        guests: getRandomIntInRange(1, 5),
        photos: getRandomSubSet(photos),
        price: getRandomIntInRange(150,300),
        rooms: getRandomIntInRange(2,5),
        title: getRandomItem(descriptions),
        type: getRandomItem(types)
    }
}
export function createAd():Ad{
    const location = createLocation()
    return {
        author: createAuthor(),
        location,
        offer: createOffer(location)

    }
}