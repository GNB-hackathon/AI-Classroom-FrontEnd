document.querySelector('.mypage').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 동작 중단

    // 튜터 또는 학생 여부에 따라 페이지 이동
    const userType = 'student'; // '학생'으로 변경 가능
    let mypageUrl;

    if (userType === 'student') {
        mypageUrl = '/mypage_student.html'; // 튜터의 마이페이지 URL
    } else {
        mypageUrl = '/mypage_tutor.html'; // 학생의 마이페이지 URL
    }

    // 마이페이지로 이동
    window.location.href = mypageUrl;
});

