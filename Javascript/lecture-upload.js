document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.upload-form').addEventListener('submit', function(e) {
        e.preventDefault();

        // 가정: 튜터 이름을 가져오는 백엔드 엔드포인트가 '/get-tutor-name'이라고 가정합니다.
        // 실제 구현에서는 적절한 엔드포인트와 인증 방식을 사용해야 합니다.
        fetch('/get-tutor-name', {
            method: 'GET',
            headers: {
                // 필요한 경우 인증 헤더를 추가하세요.
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
            }
        })
        .then(response => response.json())
        .then(data => {
            const tutorName = data.tutorName; // 백엔드에서 반환된 튜터 이름

            const formData = new FormData(document.querySelector('.upload-form'));
            formData.append('tutorName', tutorName); // 폼 데이터에 튜터 이름 추가

            // 이제 폼 데이터를 서버로 전송
            return fetch('/your-endpoint-url', { // 실제 백엔드 엔드포인트로 변경
                method: 'POST',
                body: formData,
            });
        })
        .then(response => {
            if(response.ok) {
                alert('강의가 성공적으로 업로드되었습니다!');
            } else {
                alert('업로드에 실패했습니다.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('업로드 중 문제가 발생했습니다.');
        });
    });
});
