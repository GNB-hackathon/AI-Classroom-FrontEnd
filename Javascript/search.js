// 검색 폼 이벤트 리스너
document.querySelector('.search-box').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼의 기본 제출 동작을 막음

    const query = document.querySelector('.search-txt').value; // 입력된 검색어 가져오기

    // 백엔드 서버로 검색 요청 보내기
    fetch(`https://example.com/search?query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            displayLectures(data.lectures); // 받은 강의 데이터로 강의 목록 업데이트
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

// 강의 목록을 화면에 표시하는 함수
function displayLectures(lectures) {
    const lectureList = document.querySelector('.lecture-list');
    lectureList.innerHTML = ''; // 기존 내용 지우기

    lectures.forEach(lecture => {
        const lectureItem = document.createElement('div');
        lectureItem.className = 'lectures-info';
        lectureItem.innerHTML = `
            <a href="#">
                <img src="${lecture.thumbnail}" alt="Thumbnail of ${lecture.title}">
            </a>
            <div class="lectures-info__text">
                <span>${lecture.tutor}</span>
                <span>${lecture.title}</span>
            </div>
        `;
        lectureList.appendChild(lectureItem);
    });
}
