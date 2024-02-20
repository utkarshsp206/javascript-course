const name = "Utkarsh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('utkarsh-us-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   utkarsh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://drive.google.com/drive/folders/1SKftvKH6AhTkolz4Nmp2DyZ47bdUSCDv"

console.log(url.replace('.com', '.in'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));