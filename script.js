function home(){
    document.getElementById("home").style.color="green";
    document.getElementById("plan").style.color="white";
    document.getElementById("program").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contactUs").style.color="white";
}
function plan(){
    document.getElementById("home").style.color="white";
    document.getElementById("plan").style.color="green";
    document.getElementById("program").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contactUs").style.color="white";
}
function program(){
    document.getElementById("home").style.color="white";
    document.getElementById("plan").style.color="white";
    document.getElementById("program").style.color="green";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contactUs").style.color="white";
}
function blogs(){
    document.getElementById("home").style.color="white";
    document.getElementById("plan").style.color="white";
    document.getElementById("program").style.color="white";
    document.getElementById("blogs").style.color="green";
    document.getElementById("contactUs").style.color="white";
}
function contactUs(){
    document.getElementById("home").style.color="white";
    document.getElementById("plan").style.color="white";
    document.getElementById("program").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contactUs").style.color="green";
}
                            //   submit
function submit(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");
    if(name.value ==""){
        alert("please enter name");
     } else if(number.value ==""){
        alert("please enter number");
     

     }else{
        alert("Thanks for joining : " + name.value);

     }
    

}