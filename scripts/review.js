function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const tableBody = document.querySelector('#reviews-table tbody');
    tableBody.innerHTML = '';

    reviews.forEach(review => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${review.name}</td>
      <td>${review.review}</td>
      <td>${review.rating}</td>
      <td>${review.date}</td>
    `;
        tableBody.appendChild(row);
    });
}

function saveReview(reviewData) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(reviewData);
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

function clearReviews() {
    if (confirm('Вы уверены, что хотите удалить все отзывы?')) {
        localStorage.removeItem('reviews');
        loadReviews();
    }
}

document.getElementById('review-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;
    const date = new Date().toLocaleString();

    if (name && review && rating) {
        const reviewData = {name, review, rating, date};
        saveReview(reviewData);
        loadReviews();
        document.getElementById('review-form').reset();
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
});

document.getElementById('clear-reviews-button').addEventListener('click', clearReviews);
window.addEventListener('load', loadReviews);
