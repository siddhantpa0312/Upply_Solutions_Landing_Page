const input = document.getElementById("headlineInput");
const button = document.getElementById("updateBtn");
const cta = document.getElementById("cta");

button.addEventListener("click", function(){

    const newText = input.value;

    if(newText !== ""){
        cta.textContent = newText;
    }

});