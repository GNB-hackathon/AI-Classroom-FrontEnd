// 강의의 ID입니다. 실제 애플리케이션에서는 강의 페이지에 따라 동적으로 결정되어야 합니다.
var lectureId = '1234'; 

// 서버에 사용자가 이 강의의 소유자인지 확인하는 요청을 보냅니다.
// 이 URL과 요청 방식은 서버의 API 디자인에 따라 달라집니다.
fetch('/api/check-tutor-ownership?lectureId=' + lectureId, {
    method: 'GET', // 또는 'POST', 서버 API에 따라 달라질 수 있습니다.
    headers: {
        // 필요한 경우 인증 토큰을 포함시킵니다.
        // 'Authorization': 'Bearer ' + 사용자_인증_토큰,
        'Content-Type': 'application/json',
    },
    // body: JSON.stringify({ lectureId: lectureId }) // POST 방식으로 요청을 보낼 경우
})
.then(response => response.json()) // 서버로부터 받은 응답을 JSON 형태로 변환합니다.
.then(data => {
    // 서버로부터 받은 데이터를 사용하여 isTutorOwner 변수를 설정합니다.
    var isTutorOwner = data.isTutorOwner;

    // 여기서는 예시로 받은 값이 true일 때만 강의 수정 버튼을 보이게 합니다.
    if (isTutorOwner) {
        document.getElementById('add-favorite-lecture').style.display = 'none'; // 즐겨찾기 버튼 숨김
        document.getElementById('edit-lecture-button').style.display = 'block'; // 강의 수정 버튼 표시
    }
})
.catch(error => {
    console.error('Error:', error);
});
