document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    
    fetch('/login', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('로그인 성공!');
            window.location.href = '/mainpagae.html'; // 대시보드 페이지로 이동
        } else {
            alert('로그인 실패. 이메일 또는 비밀번호를 확인하세요.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('서버 오류로 인해 로그인에 실패했습니다.');
    });
});