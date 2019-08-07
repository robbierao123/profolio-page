var message = document.getElementById("text-area");
// var x = document.getElementById("myTextarea").value;
const submitButton = document.getElementById('submit-form')


console.log(submitButton);

submitButton.addEventListener("click",

    function(event){
        event.preventDefault();
        console.log("tested here");
        console.log(message.value);
    }
)