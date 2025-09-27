// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

 // h2.innerText = h2.innerText  +  "from apna collage"; // concatenate

// let divs = document.querySelectorAll(".box");

 //console.log(divs[0]);

 let div = document.querySelector("div");
 console.log(div);

 let newbtn = document.createElement("button");
 newbtn.innerText = "Click me!";

 newbtn.style.color = "white";
 newbtn.style.backgroundColor = "red";

 document.querySelector("body").prepend(newbtn);


 let para = document.querySelector("p");