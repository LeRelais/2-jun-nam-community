document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('log-in-button');
    
    function validateInputs() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
        
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        const isEmailValid = emailPattern.test(email.value);
        const isPasswordValid = passPattern.test(password.value);
        
        if (isEmailValid && isPasswordValid) {
            loginButton.style.backgroundColor = "#7F6AEE";
        } else {
            loginButton.style.backgroundColor = "#ACA0EB";
        }
    }

    email.addEventListener('input', validateInputs);
    password.addEventListener('input', validateInputs);

    loginButton.addEventListener('click', e => {
        e.preventDefault();

        const emailErrorMessage = document.getElementById('email-error-message');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(email.value)){
            emailErrorMessage.innerText="*올바른 이메일 주소 형식을 입력해주세요 (예: example@example.com)";
            return;
        }
        else{
            emailErrorMessage.innerHTML = "&nbsp;";
        }

        const passwordErrorMessage = document.getElementById('password-error-message');
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

        window.location.href = 'index.html';
    })
})