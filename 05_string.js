const gameName = new String('yashabc')

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('s'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 2)
console.log(anotherString);

const newStringOne = "  yash  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://www.youtube.comwatch?v=fozwNnFunlo"
console.log(url.replace('=', 'yash'));

console.log(url.includes('youtube'))
console.log(gameName.includes('chaukhande'))

console.log(gameName.split('-'));

console.log(gameName.split('/'));

