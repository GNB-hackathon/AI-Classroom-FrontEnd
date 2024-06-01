document.addEventListener('DOMContentLoaded', function() {
    // 마이페이지 링크에 클릭 이벤트 리스너 추가
    document.querySelector('.mypage').addEventListener('click', function(e) {
        e.preventDefault(); // 기본 이벤트를 방지합니다.

        // 사용자의 회원 종류를 localStorage에서 가져옵니다.
        const userType = localStorage.getItem('userType');

        // 사용자 유형에 따라 적절한 페이지로 리디렉션합니다.
        if (userType === 'tutor') {
            window.location.href = 'mypage_tutor.html';
        } else if (userType === 'student') {
            window.location.href = 'mypage_student.html';
        } else {
            alert('회원 정보를 찾을 수 없습니다. 다시 로그인 해주세요.');
        }
    });
});
