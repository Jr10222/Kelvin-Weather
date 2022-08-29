const kelvin = 293; //This is the temperature in Kelvin
const celsius = kelvin - 273; //Temperature of kelvin in celsius
let fahrenheit = celsius * (9/5) + 32; //Temperature of celsius converted to fahrenheit

fahrenheit = Math.floor(fahrenheit); //returns the largest integer less thanor equal fahrenehit
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${newton} degrees Newton`);