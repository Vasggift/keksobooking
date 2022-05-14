export interface Author {
    avatar: string
}
export interface Offer {
    title: string; //строка — заголовок предложения. Придумайте самостоятельно.

    address: string; //строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.

    price: number; // число — стоимость. Случайное целое положительное число.

    type: string; // строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

    rooms: number; // число — количество комнат. Случайное целое положительное число.

    guests: number; //, число — количество гостей, которое можно разместить. Случайное целое положительное число.

    checkin: string; // строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

    checkout: string; // строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

    features: string[]; // массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

    description: string; //  строка — описание помещения. Придумайте самостоятельно.

    photos: string[];
}
export interface Location {
    lat: number;
    lng: number;
}
export interface Ad {
    author: Author; 
    offer: Offer;
    location: Location;
}