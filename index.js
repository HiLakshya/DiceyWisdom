function generateRandomNumber() {
    var randomNumber = (Math.floor((Math.random()) * 5) + 1);

    var diceName = "Images/dice" + randomNumber + ".png";

    var currentDice = document.querySelector("img");

    currentDice.setAttribute("src", diceName);
}


let Quote = document.getElementsByClassName("Quote")[0];
let Author = document.getElementsByClassName("Author")[0];
const url="https://api.quotable.io/random";
function generateRandomQuote(){
    fetch(url)
        .then((data) => data.json())
        .then((item) =>{
            Quote.innerText = item.content;
            Author.innerText ="― " + item.author;
            

        })
    
    
}
document.addEventListener("click", function(){
    generateRandomNumber();
    generateRandomQuote();
});


function Musics() {
    var audio = new Audio('nggyu.mp3');
    audio.play();
}
document.addEventListener("click", function () {
    generateRandomNumber();
    generateRandomQuote();
    Musics();
});
