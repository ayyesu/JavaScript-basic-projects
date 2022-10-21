const value = document.querySelector("#value");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");
const btn = document.querySelectorAll(".btn");
let count = 0;


btn.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("increase")){
            count++;
        } else if (styles.contains("decrease")){
            count--;
        } else {
            count = 0;
        }
        value.textContent = count;

        if (count >= 1){
            value.style.color = "green";
        } else if (count <= -1) {
            value.style.color = "red";
        } else {
            value.style.color = null;
        }
    })
})