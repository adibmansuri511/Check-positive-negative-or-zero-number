const randomNumber = () => {

    // Get Minimum value from input
    let minValue = Number(document.getElementById("minValue").value);

    // Get Maximum value from input
    let maxValue = Number(document.getElementById("maxValue").value);

    // Random number generation equation
    let randomNumber = (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);

    randomNumber = `The random number between ${minValue} and ${maxValue} is : ${randomNumber}`;

    console.log(randomNumber);

    document.querySelector("#h4").innerHTML = randomNumber;

    return;
}

