let employees = [
  {
    "name": "Zoey Clark",
    "email": "zoey.clark@iou.com",
    "position": "Developer"
  },

  {
    "name": "Niko Brown",
    "email": "niko.brown@iou.com",
    "position": "Architect"
  },

  {
    "name": "Kino Black",
    "email": "kino.black@iou.com",
    "position": "Engineer"
  }
];

function createEmployeeCards() {
  let employeeCards = document.getElementById("my-cards");

  for (let employee of employees) {
    let body = `Title: ${employee.position} can be reached at ${employee.email}`;
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

let locations = ["Miami", "Los Angeles", "Las Vegas"];

buttonThree.addEventListener("click", () => {
  let ul = document.querySelector("ul")
  for (let i = 0; i < locations.length; i++) {
    let li = document.createElement("li");
    li.textContent = locations[i];
    ul.appendChild(li);

  }
})


