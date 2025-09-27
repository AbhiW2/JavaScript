/**let headings = document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);


let p = document.querySelector("p");
p.after(newBtn); **/

//let newheading = document.createElement("h1");
//newheading.innerHTML = "<i> Hii, i am new!</i>"

//document.querySelector("body").prepend(newheading);

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);
};

let div = document.querySelector("div");

div.onmouseover = () => {
    console.log("you are inside div");
};