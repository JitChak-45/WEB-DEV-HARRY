console.log(document.querySelector(".container").innerHTML);
document.querySelector(".box");
document.querySelector(".box").innerHTML;
document.querySelector(".box").innerText;

document.querySelector(".container").outerHTML;
document.querySelector(".container").tagName;//it show only the elements
document.querySelector(".container").nodeName;//it show the nodes not only the element
document.querySelector(".container").textContent;//text - all the tags

// document.querySelector(".container").hidden=true//hides the element

// when we write document.querySelector(".box") then if there multiple Element present with 
// same class name then the first box are automatically chosen

document.querySelector(".box").innerHTML = "Jit"
//it changes the context of the box


// /************ document.designMode="on" ***********/ very important command to edit any webpage -----------

document.querySelector(".box").hasAttribute("style")
document.querySelector(".box").getAttribute("style")
document.querySelector(".box").setAttribute("style", "color:red")
document.querySelector(".box").setAttribute("id", "firstElem")
document.querySelector(".box").attributes
document.querySelector(".box").removeAttribute("style");
document.getElementsByClassName("container")[0].children[1].dataset

//all insert method -----------
let div1=document.createElement("div");
div1.className="forCheck";
div1.innerHTML="<b>Ro45</b>"
//document.querySelector(".container").insertAdjacentElement(div1)//insertAdjacentElement has two arguments one is position and another is the elemnt
document.querySelector(".container").insertAdjacentElement("afterbegin", div1);
// document.querySelector(".container").insertAdjacentHTML
// document.querySelector(".container").insertAdjacentText
// document.querySelector(".container").insertBefore


//inserting an element -----------
let div=document.createElement("div");
div.innerHTML="I am created by <b>Jit</b>"
div.setAttribute("class","created");
document.querySelector(".container").append(div);
document.querySelector(".container").prepend(div);
document.querySelector(".container").after(div);
document.querySelector(".container").before(div);
// document.querySelector(".container").replaceWith(div);


//inserting html element -----------
let cont=document.querySelector(".container");
cont.insertAdjacentHTML("beforeend","<p>hey I am in the container</p>");


//remove an element-----------
// document.querySelector(".box").remove()

//get classname and classlist
document.querySelector(".container").className
document.querySelector(".container").classList

//add and remove class
// document.querySelector(".container").classList.add("white")
// document.querySelector(".container").classList.remove("red")

//toggle------means if it is open then shut down and if it is close then open it up
document.querySelector(".container").classList.toggle("red")

//contains---------
document.querySelector(".container").classList.contains("red")

