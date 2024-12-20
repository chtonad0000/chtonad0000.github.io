async function loadComments() {
    const commentsList = document.getElementById('comments-list');
    const errorMessage = document.getElementById('error-message');
    const preloader = document.getElementById('preloader');

    preloader.style.display = 'block';
    errorMessage.style.display = 'none';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
        const comments = await response.json();
        setTimeout(() => {
            preloader.style.display = 'none';
            comments.forEach(comment => {
                const commentItem = document.createElement('li');
                commentItem.classList.add('comment-item');
                commentItem.innerHTML = `
          <strong>${comment.name}</strong> (<em>${comment.email}</em>)<br>
          <p>${comment.body}</p>
        `;
                commentsList.appendChild(commentItem);
            });
        }, 1000);

    } catch (error) {
        preloader.style.display = 'none';
        errorMessage.style.display = 'block';
    }
}

window.addEventListener('load', loadComments);
