document.addEventListener('DOMContentLoaded', () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const passwordReenter = document.getElementById('password-reenter');
    const nickname = document.getElementById('nickname');
    const signupbutton = document.getElementById('signupbutton');

    function isNicknameValid(nickname) {
        const trimmedNickname = nickname.trim();
        return trimmedNickname.length > 0 && trimmedNickname.length <= 10 && !trimmedNickname.includes(' ');
    }

    function validateInputs() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
        
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        const isEmailValid = emailPattern.test(email.value);
        const isPasswordValid = passPattern.test(password.value);
        const isPasswordRenterValid = password.value === passwordReenter.value;
        const isNicknameInputValid = isNicknameValid(nickname.value);

        if (isEmailValid && isPasswordValid && isPasswordRenterValid && isNicknameInputValid) {
            signupbutton.style.backgroundColor = "#7F6AEE";
            console.log('valid')
        } 
        else {
            signupbutton.style.backgroundColor = "#ACA0EB";
            console.log('invalid')
        }
    }

    email.addEventListener('input', validateInputs);
    password.addEventListener('input', validateInputs);
    passwordReenter.addEventListener('input', validateInputs);
    nickname.addEventListener('input', validateInputs);

    signupbutton.addEventListener('click', (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        const isEmailValid = emailPattern.test(email.value);
        const emailErrorMessage = document.getElementById('email-error-message');
        if(!emailPattern.test(email.value)){
            emailErrorMessage.innerText="*올바른 이메일 주소 형식을 입력해주세요 (예: example@example.com)";
            return;
        }
        else{
            emailErrorMessage.innerHTML = "&nbsp;";
        }

        const isPasswordValid = passPattern.test(password.value);
        const passwordErrorMessage = document.getElementById('password-error-message');
        let passwordLength = password.value.length;

        if(passwordLength < 8 || passwordLength > 20){
            passwordErrorMessage.innerText="*비밀번호는 8자 이상, 20자 이하여야 합니다";
            return;
        }

        if(!isPasswordValid){
            passwordErrorMessage.innerText="*대문자, 소문자, 숫자, 특수문자를 각 최소 1개 포함해야 합니다";
            return;
        }
        else{
            passwordErrorMessage.innerHTML = "&nbsp;";
        }

        const isPasswordRenterValid = password.value === passwordReenter.value;
        const passwordReenterErrorMessage = document.getElementById('password-reenter-error-message');
        if(!isPasswordRenterValid){
            passwordReenterErrorMessage.innerText="*비밀번호가 다릅니다";
            return;
        }
        else{
            passwordErrorMessage.innerHTML = "&nbsp;";
        }

        const isNicknameInputValid = isNicknameValid(nickname.value);
        const nicknameErrorMessage = document.getElementById('nicknamer-error-message');
        if(!isNicknameInputValid){
            nicknameErrorMessage.innerText="*유효한 닉네임을 입력하세요";
            return;
        }
        else{
            passwordErrorMessage.innerHTML = "&nbsp;";
        }

        if(signupbutton.style.backgroundColor == "#7F6AEE"){
            window.location.href = 'login.html';
        }
    })
})