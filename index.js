function convertToCelsius(fahrenheit) {  
    return (fahrenheit - 32) * 5 / 9;
}

// console.log(convertToCelsius(50)); // Output: 10


function describeTemperature(fahrenheit) {
    const celsius = convertToCelsius(fahrenheit); // celsius = -9

    if (celsius < 0) return "very cold";
    if (celsius < 20) return "cold";
    if (celsius < 30) return "warm";
    if (celsius < 40) return "hot";
    return "very hot";
}

 console.log(describeTemperature(14)); // very cold
// console.log(describeTemperature(106)); // Output: "very hot"


function getTempInput() {
    const fahrenheit = prompt("Enter Temperature in Fahrenheit:"); 

    if (fahrenheit) { 
        const celsius = convertToCelsius(fahrenheit); 
        const description = describeTemperature(fahrenheit); 
        alert(`The equivalent temperature in Celsius is ${celsius} and it feels ${description}.`);
    }
}

// getTempInput(); 

