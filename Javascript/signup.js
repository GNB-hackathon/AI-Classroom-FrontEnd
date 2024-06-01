document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    
    fetch('/signup', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('회원가입이 완료되었습니다.');
            window.location.href = '/login.html'; // 로그인 페이지로 이동
        } else {
            alert('회원가입에 실패했습니다. 다시 시도해주세요.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('서버 오류로 인해 회원가입에 실패했습니다.');
    });
});