console.log(document.body);
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1].childNodes);

const cont=document.body.childNodes[1]
console.log(cont);

console.log(cont.childNodes);
// div is a element but text is not an Element
console.log(cont.firstElementChild);

cont.lastElementChild.style.backgroundColor="red";
cont.lastElementChild.parentElement.style.backgroundColor="blue"

// it shows only elements
document.body.firstElementChild.children
// get 0 element 
document.body.firstElementChild.children[0]

//previous element sibling and next element sibling

document.body.firstElementChild.children[3].nextElementSibling;
document.body.firstElementChild.children[3].previousElementSibling;

//not elements also the nodes
document.body.firstElementChild.children[3].previousSibling;

document.body.firstElementChild.children[3].parentElement;

// children of table 
document.body.firstElementChild.children[3].parentElement.parentElement.children[1];