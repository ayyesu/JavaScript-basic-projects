const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let result = "#";
    let i;
    for (i=0;i<6;i++){
        result += hex[randomPick()];
    }
    document.body.style.backgroundColor = result;
    color.textContent = result;
})

function randomPick(){
    const pick = Math.floor(Math.random() * hex.length);
    return pick;
}
