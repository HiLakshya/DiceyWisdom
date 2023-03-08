function generateRandomNumber() {
    var randomNumber = (Math.floor((Math.random()) * 5) + 1);

    var diceName = "Images/dice" + randomNumber + ".png";

    var currentDice = document.querySelector("img");

    currentDice.setAttribute("src", diceName);
}

document.addEventListener("click", function(){
    generateRandomNumber();
});