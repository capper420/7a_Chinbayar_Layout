function Login(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
   
    if (password.length < 8){
                alert("Password has to be longer than 8");                }  
    else if ( name[0] == name[0].CheckUpperCase() ){
        alert("Username has to be a capital letter");
    }                          
     else if (name=="Admin" && password == "12345678"){
        alert("Login Success");       
    }  
    else{
        alert("Incorrect Username or Password");
    }
}