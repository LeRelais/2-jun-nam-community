document.addEventListener('DOMContentLoaded', () => {
    const modifyButton = document.getElementById('modify-button');
    
    function validateInputs() {
        const passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
        
        const password = document.getElementById('password');
        const passwordReenter = document.getElementById('passReenter');

        const isPasswordValid = passPattern.test(password.value);
        
        if (isPasswordValid && passwordReenter.value === password.value) {
            modifyButton.style.backgroundColor = "#7F6AEE";
            return true;
        } else {
            modifyButton.style.backgroundColor = "#ACA0EB";
            return false;
        }
    }

    password.addEventListener('input', validateInputs);
    passReenter.addEventListener('input', validateInputs);

    modifyButton.addEventListener('click', e => {
        e.preventDefault();

        const passwordErrorMessage = document.getElementById('password-error-message');
        const passwordReenterErrorMessage = document.getElementById('pass-reenter-error-message');
        let passwordLength = password.value.length;

        if(passwordLength < 8 || passwordLength > 20){
            passwordErrorMessage.innerText="*비밀번호는 8자 이상, 20자 이하여야 합니다";
            return;
        }

        const passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
        if(!passPattern.test(password.value)){
            passwordErrorMessage.innerText="*대문자, 소문자, 숫자, 특수문자를 각 최소 1개 포함해야 합니다";
            return;
        }
        else{
            passwordErrorMessage.innerHTML = "&nbsp;";
        }
        
        if(validateInputs()){
            window.location.href = 'index.html';
        }
        else{
            passwordReenterErrorMessage.innerText="*비밀번호와 다릅니다.";
        }
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
})