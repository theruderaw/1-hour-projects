const display = document.getElementById("display");
flg = false;
function appendToDisplay(str){
    if(flg){
        display.value=str
        flg=false;
    }
    else{
        display.value += str;
    }
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(Error){
        display.value = "Error";
    }
    finally{
        flg=true
    }
}