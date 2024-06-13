const kelvin = 0; //Kelvin temp set to a constant of 293.
let celsius = kelvin - 273; // celsius temp is 273 less than kelvin.
let fahrenheit = celsius *(9/5)+32; // Fahrenheit according to formula given. My math maybe off. Double Check.
fahrenheit = (Math.floor(fahrenheit)); //should round fahrenheit temp.
console.log (`The temperature is ${fahrenheit} degrees Fahrenheit`); //final formula to give kelvin in fahrenheit rounding with mathfloor.
let newton = celsius *(33/100); //convert to newton
newton = (Math.floor(newton)); //round down
console.log(`The temperature is ${newton} degrees newton.`)


