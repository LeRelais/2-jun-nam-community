document.addEventListener('DOMContentLoaded', () => {
     //header profile icon handelr
     const dropdown = document.getElementById("dropdown");
     const profileIcon = document.getElementById("profile-icon")
    const createBtn = document.getElementById('create-post-button');

     profileIcon.addEventListener('click', (e) => {
         e.stopPropagation();
         dropdown.classList.toggle('show');
     })

     window.addEventListener('click', () => {
         dropdown.classList.remove('show');
     })

     const postTitle = document.getElementById('create-post-form-title');
     const postInput = document.getElementById('create-post-body-text-input');

     function validateInputs() {
        if (postTitle.value.length != 0 && postInput.value.length != 0){
            createBtn.style.backgroundColor = "#7F6AEE";
        }
        else
            createBtn.style.backgroundColor = "#ACA0EB";
     }

     postTitle.addEventListener('input', validateInputs);
     postInput.addEventListener('input', validateInputs);
})