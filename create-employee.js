$(document).ready(function(){
    let json = {};
    let correct = [];
    function checkValidation(){
        correct.length = 0;
        json = {
            "Name": $("#txtname").val(),
            "Mobile": $("#txtmobile").val(),
            "Telephone": $("#txttel").val(),
            "address": $("#txtadr").val(),
            "UserName": $("#txtusername").val(),
            "Password": $("#txtpass").val()
        };

        for (const key in json) {
            if(json[key] == ""){
                correct.push("you should put " + key);
            }
        }

        if(correct.length != 0){
            return false ;
        }else{
            return true;
        }
    }
    $("#subpost").click(function(){
        if(checkValidation() == false){
            $("#lstvalidation").remove();
            $("#datavalidation").append('<ul id="lstvalidation"></ul>');
            for (const iterator of correct) {
                $("#lstvalidation").append('<li style="color : red;">'+iterator+"</li>");
            }
           
        }else{
            let urlPost = "http://employeesintern.azurewebsites.net/api/employees";
        
        
        $.ajax({
            method : 'POST',
            url : urlPost ,
            async : true,
            contentType : 'application/json',
            data : JSON.stringify(json),
            crossDomain : true,
            success : function(){
                console.log("Post Success");
                window.location.assign("employees.html");
            }

        }); 
        }
        
    });
});