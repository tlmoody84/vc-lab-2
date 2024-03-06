let buttonOne = document.getElementById("btn1");
let buttonTwo = document.getElementById("btn2");


let h1 = document.querySelector("h1");

let ul = document.querySelector("ul");
let li = document.querySelector("li");


  

buttonOne.addEventListener("click",() => {
let myh1 =document.querySelector("h1")
let current=myh1.textContent
let lower=myh1.textContent.toLowerCase()
  if(current===lower){
    current=current.toUpperCase()
    myh1.textContent=current
  }else{
    current=current.toLowerCase()
    console.log(current)
    myh1.textContent=current
  }
})

buttonTwo.addEventListener("click",() => {
  
let myList = [ "git add .", "git commit -m", "git push origin master"]
  
                  
function github (ulist) {
    for (let i = 0; i < ulist.length; i++){
    let addItems = document.createElement("li");
    addItems.textContent = ulist[i]; 
    ulist.appendChild(addItems); 
  }
} 

github(myList);  


 
  // if(current == btn1.toUpperCase())
  //   output.push(btn1.toLowerCase())
  // else
  //   output.push(character.toUpperCase())
  // h1.innerText = output.join("")}
  
  
  
  
  
//   h1.innerText = "MARCH 5 LAB";
// if (h1.innerText === "MARCH 5 LAB"){
//   ToggleEvent
// })