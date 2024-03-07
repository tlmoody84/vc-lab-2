let employees = [
  {
    "name": "Zoey Clark", "email": "zoey.clark@iou.com", "position": "developer"},
  {
    "name": "Niko Brown", "email": "niko.brown@iou.com", "position": "architect"},
 
  {  
      "name": "Kino Black", "email": "kino.black@iou.com", "position": "engineer"}
    
];


let locations = (["Miami", "Los Angeles", "Los Vegas"]);


let buttonOne = document.getElementById("btn1");


buttonOne.addEventListener("click", () =>{
  let locations = document.querySelector("ul");
  for (let i = 0; i < offices.length; i++){
    let li = document.createElement("li");
    li.textContent = offices[i];
    locations.appendChild(li);
  }
})







         