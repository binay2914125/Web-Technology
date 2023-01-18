document.getElementById("three").onclick=function(){
    let username=document.getElementById("two").value;
    alert("Your username is "+ username)
    document.getElementById("four").innerHTML="Your username is "+username;
}
