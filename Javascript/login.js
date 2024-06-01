document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form");

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault(); // 폼 기본 제출 동작 방지

        const id = loginForm.querySelector('input[name="ID"]').value;
        const password = loginForm.querySelector('input[name="Password"]').value;

        // 간단한 입력 값 검증
        if (!id || !password) {
            alert("아이디와 비밀번호를 모두 입력해주세요.");
            return;
        }

        const loginData = {
            ID: id,
            Password: password
        };

        fetch("/login", { // '/login'은 백엔드 로그인 처리 URL로 변경해야 함
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.loginSuccess) { // 'loginSuccess'는 백엔드에서 반환하는 JSON 객체의 속성으로 가정
                window.location.href = "mainpage.html"; // 로그인 성공 시 페이지 이동
            } else {
                alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
            }
        })
        .catch(error => {
            console.error("로그인 처리 중 오류 발생:", error);
            alert("로그인 처리 중 문제가 발생했습니다.");
        });
    });
});