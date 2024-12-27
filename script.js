// Example reviews data
const reviews = [
    {
        title: "Inception",
        review: "A mind-bending thriller with stunning visuals and a complex story.",
        rating: "★★★★★"
    },
    {
        title: "The Dark Knight",
        review: "An iconic superhero film with an unforgettable performance by Heath Ledger.",
        rating: "★★★★★"
    },
    {
        title: "Interstellar",
        review: "A visually stunning journey through space with a touching emotional core.",
        rating: "★★★★☆"
    }
];

// Display reviews on the page
const reviewsContainer = document.getElementById("reviews");

reviews.forEach((movie) => {
    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review");

    reviewCard.innerHTML = `
    <h2>${movie.title}</h2>
    <p>${movie.review}</p>
    <p class="rating">Rating: ${movie.rating}</p>
  `;

    reviewsContainer.appendChild(reviewCard);
});
