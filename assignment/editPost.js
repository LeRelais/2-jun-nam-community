document.addEventListener('DOMContentLoaded', () => {
    //header profile icon handelr
    const dropdown = document.getElementById("dropdown");
    const profileIcon = document.getElementById("profile-icon")
    const modifyBtn = document.getElementById('modify-post-button');

    profileIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    })

    window.addEventListener('click', () => {
        dropdown.classList.remove('show');
    })

    const postTitle = document.getElementById('edit-post-form-title');
    const postInput = document.getElementById('edit-post-body-text-input');

    function validateInputs() {
       if (postTitle.value.length != 0 && postInput.value.length != 0){
            modifyBtn.style.backgroundColor = "#7F6AEE";
       }
       else
             modifyBtn.style.backgroundColor = "#ACA0EB";
    }

    postTitle.addEventListener('input', validateInputs);
    postInput.addEventListener('input', validateInputs);
    postTitle.dispatchEvent(new Event('input'))
    postInput.dispatchEvent(new Event('input'))
})