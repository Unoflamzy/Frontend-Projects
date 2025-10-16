

function countCharacters(){
    var text = document.getElementById('Textarea').value;
    var count = text.length;
    var limit = 250;

    document.getElementById('charCount').innerHTML = count;

    if(count>limit){
        document.getElementById('Textarea').style.color="red";
        document.getElementById('charCount').style.color="red";
        document.getElementById('lastCount').style.color="red";
        document.getElementById('Textarea').value = text.substring(0,limit);
        document.getElementById('message-container').style.borderColor="red";

    }else{
        document.getElementById('Textarea').style.color="black";
        document.getElementById('message-container').style.borderColor="black";
        document.getElementById('charCount').style.color="black";
        document.getElementById('lastCount').style.color="black";
    }
}
