let arr=["alu","potol","dab",7,false];
//print the whole array
console.log(arr);//[ 'alu', 'potol', 'dab', 7, false 
//to print the array length
console.log(arr.length);//5

//to show the array index wise(accessing the values)
console.log(arr[2]);//dab

//change the values
arr[2]="kochi dab";
console.log(arr);//[ 'alu', 'potol', 'kochi dab', 7, false ]

//in javascript array are objects
console.log(typeof arr);//object

//by the help of toString() method array is changed into string
console.log(arr.toString());//alu,potol,kochi dab,7,false

//join("") methods help to join element of array
console.log(arr.join(""));//alupotolkochi dab7false
console.log(arr.join("-"));//alu-potol-kochi dab-7-false

//pop() method pop the element from last
console.log(arr.pop());//false
console.log(arr);//after pop -->[ 'alu', 'potol', 'kochi dab', 7 ]

//push() method push the value at the last
arr.push(true)
console.log(arr);//[ 'alu', 'potol', 'kochi dab', 7, true ]

//shift() remove element from first
arr.shift();
console.log(arr);//[ 'potol', 'kochi dab', 7, true ]

//unshift() method add value at the front
arr.unshift("alu");
console.log(arr);//[ 'alu', 'potol', 'kochi dab', 7, true ]


// pop() is brother of shift()
// push() is brother of unshift()

let a=[1,2];
let b=["ma","baba"];

//concat() function concatinate arrays --> does not change the original array(exception)
console.log(arr.concat(a,b));//[ 'alu', 'potol', 'kochi dab', 7, true, 1, 2, 'ma', 'baba' ]

//delete() function delete the element ar]t the given index
let a1=[4,2,8,1,3];
delete a1[a1.length-1];
console.log(a1);//[ 4, 2, 8, 1, <1 empty item> ]-->because it aquire space upto that

//asign value
a1[a1.length-1]=5;
console.log(a1);//[ 4, 2, 8, 1, 5 ]

//sort()
console.log(a1.sort());//[ 1, 2, 4, 5, 8 ]-->it changes the actual array

//splice()
// [1,2,4,5,8]

a1.splice(1,2);
console.log(a1);//[ 1, 5, 8 ]

a1.splice(1,0,23,45);
console.log(a1);//[ 1, 23, 45, 5, 8 ]

//slice()
console.log(a1.slice(2));
console.log(a1.slice(2,4));//2 included 4 excluded

//reverse()-->reverse the array
console.log(a1.reverse());// [ 8, 5, 45, 23, 1 ]



