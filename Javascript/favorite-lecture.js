document.addEventListener('DOMContentLoaded', function() {
    // 즐겨찾는 강의 추가 버튼 클릭 이벤트
    document.getElementById('add-favorite-lecture').addEventListener('click', function() {
        // 여기에 백엔드 서버로 즐겨찾기 추가 요청을 보내는 코드를 작성하세요.
        // 예시 코드
        fetch('/add-favorite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 필요한 경우 인증 헤더 추가
            },
            body: JSON.stringify({ lectureId: '강의ID' }) // 적절한 강의 ID를 설정하세요.
        })
        .then(response => {
            if (response.ok) {
                alert('즐겨찾는 강의에 추가되었습니다.');
            } else {
                alert('강의 추가에 실패했습니다.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    // 즐겨찾는 강의 카테고리 클릭 이벤트
    document.querySelectorAll('.sidebar__list a').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.category; // 클릭된 카테고리
            // 여기에 해당 카테고리의 즐겨찾는 강의를 불러오는 코드를 작성하세요.
            // 예시 코드
            console.log(category + ' 카테고리의 즐겨찾는 강의를 불러옵니다.');
            // 실제로는 서버로부터 해당 카테고리 강의 데이터를 받아와 화면에 표시해야 합니다.
        });
    });
});

const lectures = [
    { category: '인문과학', tutor: '김인문', title: '인문학 입문' },
    { category: '사회과학', tutor: '이사회', title: '사회학 개론' },
    { category: '공학', tutor: '박공학', title: '기초 공학' },
    { category: '자연과학', tutor: '최자연', title: '자연 과학의 이해' },
    // 추가로 다른 카테고리의 강의 데이터 포함
];

// 페이지가 로드되었을 때 실행
document.addEventListener('DOMContentLoaded', function() {
    // 각 카테고리 링크에 이벤트 리스너 추가
    document.querySelectorAll('.sidebar__list a').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 동작 방지
            const category = this.getAttribute('data-cat-gory'); // 클릭된 링크의 카테고리 가져오기
            displayLectures(category); // 해당 카테고리에 맞는 강의 표시
        });
    });
});

// 주어진 카테고리에 맞는 강의를 화면에 표시하는 함수
function displayLectures(category) {
    // 주어진 카테고리에 맞는 강의만 필터링
    const filteredLectures = lectures.filter(lecture => lecture.category === category);
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = '<h2>최근 시청한 강의</h2><div class="lecture-container"></div>'; // 기존 내용 초기화
    const container = contentDiv.querySelector('.lecture-container');

    // 필터링된 강의를 화면에 추가
    filteredLectures.forEach(lecture => {
        const lectureDiv = document.createElement('div');
        lectureDiv.className = 'mypage-lecture';
        lectureDiv.innerHTML = `
            <a href="#">
                <img src="image/thumbnail.jpeg">
            </a>
            <div class="mypage-lecture__info">
                <span>[${lecture.tutor}]</span>
                <span>${lecture.title}</span>
            </div>
        `;
        container.appendChild(lectureDiv);
    });
}