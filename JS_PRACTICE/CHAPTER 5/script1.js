
let isValid;

do{
    let age=prompt("Enter your age to check driving eligibility");
    if(age>=18){
        alert("You are eligible");
    }
    else if(age<0){
        console.error("are you kidding");
    }
    else{
        alert("You are not eligible");
    }
    isValid=confirm("Do you want to show the prompt again?")
}while(isValid)

