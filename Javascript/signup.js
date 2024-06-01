document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 폼 제출 방지

    const formData = new FormData(event.target);

    const data = {
        username: formData.get('username'),
        Type: formData.get('membertype'),
        ID: formData.get('ID'),
        password: formData.get('password'),
        pwConfirm: formData.get('pw-confirm'),
        email: formData.get('email'),
        phonenumber: formData.get('phonenumber')
    };

    fetch('https://your-backend-server.com/signup', { // 실제 서버 URL로 변경
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // 회원가입 성공 시 로그인 페이지로 이동
            window.location.href = '/login.html'; // 실제 로그인 페이지 URL로 변경
        } else {
            alert('회원가입 실패: ' + data.message);
            // 추가 실패 처리 로직
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('회원가입 중 오류가 발생했습니다.');
        // 추가 오류 처리 로직
    });
});

document.querySelector('.signup__cancel').addEventListener('click', function() {
    // 취소 버튼 클릭 시 index.html로 이동
    window.location.href = 'index.html';
});