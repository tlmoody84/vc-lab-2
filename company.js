let employees = [
  {
    "name": "Zoey Clark",
    "email": "zoey.clark@iou.com",
    "position": "developer"
  },
  {
    "name": "Niko Brown",
    "email": "niko.brown@iou.com",
    "position": "architect"
  },
  {
    "name": "Kino Black",
    "email": "kino.black@iou.com",
    "position": "engineer"
  }
];

function createEmployeeCards() {
  let employeeCards = document.getElementById("my-cards"); 

  for (let employee of employees) {
    let body = `Contact ${employee.position} at ${employee.email}`;
    let card = `
      <div class="card">
        <div class="card-title">${employee.name}</div>
        <div class="card-body">${body}</div>
      </div>
    `;

    employeeCards.innerHTML += card;
  }
}


createEmployeeCards();


let buttonThree = document.getElementById("btn3");

let locations = ["Miami", "Los Angeles", "Los Vegas"];
 
buttonThree.addEventListener("click",() => {                  

    for (let i = 0; i < locations.length; i++){
      let li = document.createElement("li");
      li.textContent = locations[i];
      ul.appendChild(li);

  }
})





