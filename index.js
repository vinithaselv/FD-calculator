function FD_calculator(){
    let input = parseFloat(document.getElementById("num").value);
    let fd = document.getElementById("fd");
    
    if (input < 3){
        fd.innerHTML = "The FD rate is 3.8%" 
    }
    else if (input >= 3 && input <= 6){
        fd.textContent = "The FD rate is 6.3%" 
    }
    else if(input >= 7 && input <= 9){
        fd.textContent = "The FD rate is 6.8%" 
    }
    else{
        fd.textContent = "The FD rate is 7%" 
    }

}