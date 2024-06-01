document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼의 기본 제출 이벤트를 막음

    const formData = new FormData(this);

    fetch('YOUR_BACKEND_URL', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // 서버 응답 처리
        alert('강의가 성공적으로 등록되었습니다!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('강의 등록에 실패했습니다.');
    });
});
