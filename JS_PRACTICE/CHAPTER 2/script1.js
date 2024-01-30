const age=prompt("Enter your age");

if(age>=10 && age <=20){
    alert("you are at under maturity level");
}
else if(age<10){
    alert("You don't have maturity");
}
else{
    alert("You have maturity to take decision own");
}

let age2=confirm("Your age is 10?");
 
if(age2){
    alert("wow!");
}
else{
    alert("amazing");
}