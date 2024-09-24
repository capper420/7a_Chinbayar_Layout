function TakeInput(){
    let Gmail = document.getElementById("Gmail").value;
    let Password = document.getElementById("Password").value;
    console.log("Gmail: ",Gmail,"Password: ",Password);
    if(Gmail === "bataa@gmail.com" && Password === "12345678"){
        alert("login complete");
        
    }
    else{
        alert("fail");
    }

}

