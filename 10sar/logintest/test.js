function Login(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    if (password == "" && name == ""){
        alert(" fill the password and name");
    }
    else if (name==""){
        alert("Fill Name");
    }
    else if (password==""){
        alert("Fill Password");
    }
    else if (password.length < 8){
                alert("Password has to be longer than 8");                }  
    else if ( name[0] != name[0].toUpperCase() ){
        alert("Username has to be a capital letter");
    }                          
     else if (name=="Admin" && password == "12345678"){
        alert("Login Success");       
    }  
    else{
        alert("Incorrect Username or Password");
    }
}