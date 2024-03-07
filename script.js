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


  
  
let myList = [ "git add .", "git commit -m", "git push origin master"]
  
buttonTwo.addEventListener("click",() => {                  

    for (let i = 0; i < myList.length; i++){
      let li = document.createElement("li");
      li.textContent = myList[i];
      ul.appendChild(li);
   
  }
})


