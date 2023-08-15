
// bloquear alguns carecteres do input do email
var bloqEmail = document.querySelector('input[name=email]')

bloqEmail.addEventListener("keypress", function(Event){
    if(!checkCaractEmail(Event)){
        Event.preventDefault();
    }
});

function checkCaractEmail(Event){
    var char = String.fromCharCode(Event.keyCode);
    var padrao = "[/\S+@\S+-\.\S+_\S+a-z\S+A-Z\S+0-9/]";

    if(char.match(padrao)){
        return true;
    }
};