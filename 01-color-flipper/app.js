const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const color = document.querySelector(".color");
const button = document.getElementById("btn");

btn.addEventListener("click", function(){
    const randomNum = pickColour();
    console.log(randomNum);
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
});

function pickColour(){
    const randomPick = Math.floor(Math.random() * colors.length);
    return randomPick;
};