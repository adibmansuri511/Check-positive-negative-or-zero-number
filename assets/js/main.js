const checkNumber = () => {

    // Get number from input
    let number = Number(document.getElementById("number").value);

    // Check if the number is positive, negative or zero 

    let result = "";

    if (number >= 0) {
        if (number === 0) {
            result = `The number is zero.`;
            console.log(result);
            document.querySelector("#h4").innerHTML = result;

        } else {
            result = `The number ${number} is positive.`;
            console.log(result);
            document.querySelector("#h4").innerHTML = result;

        }

    } else {
        result = `The number ${number} is negative.`;
        console.log(result);
        document.querySelector("#h4").innerHTML = result;

    }

    return;
}

document.getElementById("number").addEventListener("input", checkNumber);
