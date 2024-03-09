let customerReviews = [
  {
    "reviewerName": "Lovy Blue", "reviewText": "This is the best travel agency and place I have ever worked with. My vacation was perfect!", "stars": 5
  },
  {
    "reviewerName": "Hiro White", "reviewText": "This travel agency was used for my companies trip. Everything was top of the line. This agency placed us in the best hotel. Everyone's room was on the same floor, which was very convenient with all that we had going on. Our next business trip coming in the fall, we will most definitely use them", "stars": 5
  },
  {
    "reviewerName": "Kellie Noel", "reviewText": "My family used this agency, and they were so short staffed. The wait was way too long. The hotels were not up to par. This experience could have been better. I am not too sure if I will work with them again.", "stars": 3
  }
]



function displayReviews() {
  let reviewCards = document.getElementById("review-cards");
  console.log(reviewCards);
  for (let i = 0; i < customerReviews.length; i++) {
    let body = `Reviewed by ${customerReviews[i].reviewerName} rated ${customerReviews[i].stars}`;
    let card = `
    <div class="card">
      <div class="card-title">${customerReviews[i].reviewText}</div>
      <div class="card-body">${body}</div>
    </div>
  `
    reviewCards.innerHTML += card;

  }
}
displayReviews()