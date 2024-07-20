let  numbers = [3, 5, 10, 2, 8];

let somma = numbers.reduce((acc, num)=> acc + num)
console.log(somma);

let media = somma / numbers.length
console.log(media);

let ValoriMinoriMedia = numbers.filter(num => num < media)
console.log(ValoriMinoriMedia);