document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById("dropdown");
    const profileIcon = document.getElementById("profile-icon")

    profileIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    })

    window.addEventListener('click', () => {
        dropdown.classList.remove('show');
    })

    const postCard = document.getElementById('post-card');
    postCard.addEventListener('click', () => {
        window.location.href = 'post.html';
    })

    const likes = document.getElementById('likes');
    
})