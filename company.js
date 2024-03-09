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

buttonThree.addEventListener("click", () => {

  for (let i = 0; i < locations.length; i++) {
    let li = document.createElement("li");
    li.textContent = locations[i];
    ul.appendChild(li);

  }
})



let customerReviews = [
  {
    "reviewerName": "Lovy Blue", "reviewText": "This is the best travel agency and place I have ever worked with. My vacation was perfect!", "stars": 5
  },
  {
    "reviewerName": "Hiro White", "reviewText": "We used the company for our companies trip and everything was top notch. We stayed at the best hotel. Everyone's room was on the same floor, so convenient.", "stars": 5
  },
  {
    "reviewerName": "Kellie Noel", "reviewText": "We used this agency, but they were so short staffed, the wait was a bit too long. The hotels were ok, they could have been better. I am not too sure if I will work with them again.", "stars": 3
  }
]



function displayReviews(){
  let reviewCards = document.getElementById("review-cards");
  for (let i = 0; i < customerReviews.length; i++);
  let body = `Reviewed by ${customerReviews.reviewerName} and received ${customerReviews.stars}`;
  let card = `
    <div class="card">
      <div class="card-title">${customerReviews.reviewText}</div>
      <div class="card-body">${body}</div>
    </div>
  `
  reviewCards.innerHTML += card;
      
}
