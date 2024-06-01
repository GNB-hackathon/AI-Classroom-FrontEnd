// 로그아웃 버튼 클릭 시 동작할 JavaScript
document.querySelector('.log-out').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 동작 중단

    // 로그아웃 확인 메시지 표시
    const confirmLogout = confirm('로그아웃 되었습니다.');

    if (confirmLogout) {
        // 인덱스 페이지로 이동
        window.location.href = 'index.html';
    }
});