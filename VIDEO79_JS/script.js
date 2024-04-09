let a = prompt("Enter the first number");
let b = prompt("Enter the second number");
if(isNaN(a)){
    // throw new Error("a is not a number");
    // console.error("new error")
    throw new SyntaxError("a is string");
}

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("It is not possible to sum")
}
let sum = parseInt(a) + parseInt(b);

function main(){
    // let x=1;

    try {
        console.log("The sum is ", sum*x);
        return true;
    } catch (error) {
        console.log("error a gaya bhai");
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
        return false;
    }
    finally{
        console.log("files are being closed and db connection is being closed");
        //finally used when it is in the function...
        //when try or catch return a value then normally function stop execution...
        //but if there is finally block then it always execute it...
        //when the try catch is not in the function then there is no need of finally block
    }
    // console.log("files are being closed and db connection is being closed");
    
}
let c=main();
