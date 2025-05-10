
function submit(){
 let uname=document.getElementById("name").value;
 let pass=document.getElementById("password").value;
 console.log(uname);
 console.log(pass);
 
 if("Khadar"===uname){
     if("Khadar@951"===pass){
        let datadiv=document.getElementById("data");
        datadiv.style.display="none";
        // let newdiv=document.getElementById("app");
        // let welcome=document.createElement("div");
        // welcome.innerHTML="<h1> WELCOME TO HOME PAGE</h1>"
        // welcome.style.cssText="padding:300px; padding-left: 550px";
        // newdiv.appendChild(welcome);
        let logindiv=document.getElementById("login");
        logindiv.style.display="block";
        logindiv.innerHTML="<h1>Welcome to Home Page</h1>";

     }
     else{
         alert("Please enter valid credentials");
     }
 }
 else{
     alert("Please enter valid credentials")
 }
}
function register(){
    let datadiv=document.getElementById("data");
        datadiv.style.display="none";
    let reg=document.getElementById("Register");
    reg.style.display="block";

}
function reg(){
    let Name=document.getElementById("Name").value;
    console.log(Name);
    let gen=document.getElementsByName("gender");
    for(let i=0;i<gen.length;i++){
        if(gen[i].checked){
            console.log(gen[i].value);
            break;
        }
    }
    let date=document.getElementById("date").value;
    console.log(date);
    let dropdow=document.getElementById("subject");
    console.log(dropdow.value);
    alert("Registered Successfully");
    let reg=document.getElementById("Register");
    reg.style.display="none";
    let datadiv=document.getElementById("data");
        datadiv.style.display="block";



}
