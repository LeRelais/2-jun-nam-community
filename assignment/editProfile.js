document.addEventListener('DOMContentLoaded', () => {
    const changeProfilePicBtn = document.getElementById('changeProfilePicBtn');
    const profilePicInput = document.getElementById('profilePicInput');
    const profileImage = document.getElementById('profileImage');

    changeProfilePicBtn.addEventListener('click', (e) => {
        e.preventDefault();
        profilePicInput.click();
    });

    profilePicInput.addEventListener('change', (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                profileImage.src = e.target.result;
            };

            reader.readAsDataURL(file);
        }
    });

    const modifyButton = document.getElementById('modify-button');
    modifyButton.addEventListener('click', e => {
        e.preventDefault();
        
        const nickname = document.getElementById('nickname');
        const nicknameError = document.getElementById('nick-error-message');
        if(nickname.value.length >= 11){
            nicknameError.innerText = "*닉네임은 최대 10자 까지 작성 가능합니다";
        }
        else{
            nicknameError.innerHTML = '&nbsp;'
            alert('수정 완료');
        }
    })

    const deleteAccountModalOverlay = document.getElementById('deleteAccountModalOverlay');
    const deleteAccount = document.getElementById('delete-account');
    deleteAccount.addEventListener('click', e => {
        e.preventDefault();
        deleteAccountModalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    })

    const modifyComplete = document.getElementById('modify-complete');
    modifyComplete.addEventListener('click', () => {
        window.location.href = 'index.html';
    })

    const dropdown = document.getElementById("dropdown");
    const profileIcon = document.getElementById("profile-icon")

    profileIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    })

    window.addEventListener('click', () => {
        dropdown.classList.remove('show');
    })


    //modal EventHandler
    const deleteAccountCancelButton = document.getElementById('deleteAccountCancelButton');
    const deleteAccountConfirmButton = document.getElementById('deleteAccountConfirmButton');


    deleteAccountCancelButton.addEventListener('click', () => {
        deleteAccountModalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    deleteAccountConfirmButton.addEventListener('click', () => {
        deleteAccountModalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        window.location.href = 'login.html';
    });
})