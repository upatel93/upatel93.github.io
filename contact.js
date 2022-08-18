window.onload = function(){
    errorPhNo = document.getElementById("phnoError");
    }
    
    
    function clearPhNoError(){
        errorPhNo.innerHTML = "";
        var phNo1= document.getElementById("phno");
        phNo1.style.border = "";
    }
    
    var phNoValidator = function(){
    
        var phNo = document.getElementById("phno").value;
        phNo = phNo.trim();
    
        clearPhNoError();
        
        if(phNo.length == 0){
            return true;
        }
        var bad = false;
    
        for(var i of phNo){
            if(i != '-' || i != ' ' ||i != ')' || i != '('){
                if(i > 9){
                    bad = true;
                 break;
                }
            }
        }
    
        if(phNo.length != 12 || phNo.charAt(1) !== '(' || phNo.charAt(4) !== ')' || phNo.charAt(5) !== ' ' || phNo.charAt(7) !== '-' || bad ){
    
            errorPhNo.innerHTML = '<p>Phone number should be 10 digits only with "(###) ###-####" format</p>';
            var phNo1= document.getElementById("phno");
            phNo1.style.border = "1px solid red";
            return false;
        }
        else{
            return true;
        }
    
    }
    
    function clearError(){
        clearPhNoError();
    }
    
    function fromValidator(){
        phNoValidator();   
    }