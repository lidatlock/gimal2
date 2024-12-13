document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password'); // 비밀번호 입력 필드
    const passwordButton = document.getElementById('check-password'); // 확인 버튼
    const passwordError = document.getElementById('password-error'); // 에러 메시지

    // 비밀번호 기능 추가
    passwordButton.addEventListener('click', () => {
        const password = passwordInput.value.trim();

        // 입력된 비밀번호가 '1234'일 경우
        if (password === '5820') {
            window.location.href = '보물.html'; // 비밀번호 맞으면 201.html로 이동
        } else {
            passwordError.style.display = 'block'; // 비밀번호 틀리면 오류 메시지 표시
        }
    });

    const textBox = document.getElementById('draggable'); // textBox를 처리하는 부분

    textBox.addEventListener('mousedown', () => {
        textBox.classList.add('show-kr');
    });

    textBox.addEventListener('mouseup', () => {
        textBox.classList.remove('show-kr');
    });

    // 이미지 클릭 시 새 창을 여는 기능 추가
    const images = document.querySelectorAll('.image img'); // .image 안의 img 요소만 선택
    images.forEach(image => {
        image.addEventListener('click', () => {
            window.location.href = '201.html'; // 클릭 시 201.html로 이동
        });
    });
});











