let rand1=Math.random();
let rand2=Math.random();
let rand3=Math.random();

const adj=(rand1)=>{
    if(rand1<0.33){
        return "Crazy";
    }
    else if(rand1>=0.33 && rand1<0.66){
        return "Amazing";
    }
    else if(rand1>=0.66 && rand1<1){
        return "Fire";
    }
}

const shop=(rand2)=>{
    if(rand2<0.33){
        return "Engine";
    }
    else if(rand2>=0.33 && rand2<0.66){
        return "Foods";
    }
    else if(rand2>=0.66 && rand2<1){
        return "Garments";
    }
}

const other=(rand3)=>{
    if(rand3<0.33){
        return "Bros.";
    }
    else if(rand3>=0.33 && rand3<0.66){
        return "Limited.";
    }
    else if(rand3>=0.66 && rand3<1){
        return "Hub.";
    }
}

console.log(`The shop name is ${adj(rand1)} ${shop(rand2)} ${other(rand3)}`);

console.log(rand1,rand2,rand3);

