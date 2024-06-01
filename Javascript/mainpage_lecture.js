// 가정: 백엔드로부터 받은 강의 영상 데이터는 아래와 같은 형태의 배열로 되어 있습니다.
// 각 객체에는 id, thumbnail, tutorName, lectureTitle, lecturePageUrl 속성이 있습니다.
const lecturesData = [
  {
    id: 1,
    thumbnail: "image/thumbnail1.jpeg",
    tutorName: "튜터1",
    lectureTitle: "강의제목1",
    lecturePageUrl: "Lecture1.html"
  },
  {
    id: 2,
    thumbnail: "image/thumbnail2.jpeg",
    tutorName: "튜터2",
    lectureTitle: "강의제목2",
    lecturePageUrl: "Lecture2.html"
  },
  // ... 더 많은 강의 데이터가 있을 수 있습니다.
];
async function fetchLectures() {
    try {
      // 백엔드 서버로부터 강의 데이터를 요청합니다.
      const response = await fetch('https://example.com/api/lectures');
      
      // 응답을 JSON 형태로 변환합니다.
      const lecturesData = await response.json();
  
      // 데이터를 화면에 표시하는 함수를 호출합니다.
      displayLectures(lecturesData);
    } catch (error) {
      // 오류 처리: 네트워크 오류나 응답 파싱 중 오류가 발생할 수 있습니다.
      console.error('강의 데이터를 불러오는데 실패했습니다:', error);
    }
  }
  
  function displayLectures(lecturesData) {
    // 이전에 작성한 displayLectures 함수 내용을 이곳에 넣되,
    // 함수 인자로 받은 lecturesData를 사용하도록 수정합니다.
  }
  
  // 페이지가 로드되면 강의 정보를 서버로부터 불러옵니다.
  document.addEventListener('DOMContentLoaded', fetchLectures);

function displayLectures() {
  // 'lectures-latest'와 'lectures-popular' 클래스를 가진 요소를 찾습니다.
  const latestLecturesElement = document.querySelector('.lectures-latest');
  const popularLecturesElement = document.querySelector('.lectures-popular');

  // 최신 강의와 인기 강의 데이터를 가정하고, 여기서는 동일한 데이터를 사용합니다.
  // 실제로는 서버로부터 받은 데이터에 따라 다를 수 있습니다.
  const latestLecturesData = lecturesData; // 최신 강의 데이터
  const popularLecturesData = lecturesData; // 인기 강의 데이터

  // 최신 강의를 화면에 표시
  latestLecturesData.forEach(lecture => {
    latestLecturesElement.innerHTML += createLectureHTML(lecture);
  });

  // 인기 강의를 화면에 표시
  popularLecturesData.forEach(lecture => {
    popularLecturesElement.innerHTML += createLectureHTML(lecture);
  });
}

function createLectureHTML(lecture) {
  // 강의 정보를 바탕으로 HTML 문자열을 생성합니다.
  return `
    <div class="lectures-info">
      <a href="${lecture.lecturePageUrl}">
        <img src="${lecture.thumbnail}">
      </a>
      <div class="lectures-info__text">
        <span>${lecture.tutorName}</span>
        <span>${lecture.lectureTitle}</span>
      </div>
    </div>
  `;
}

// 페이지가 로드되면 강의 정보를 표시합니다.
document.addEventListener('DOMContentLoaded', displayLectures);

function displayLectures() {
    const lecturesContainer = document.getElementById('lectures-container');
  
    lecturesData.forEach(lecture => {
      const lectureElement = document.createElement('div');
      lectureElement.innerHTML = `
        <img src="${lecture.thumbnail}" alt="Thumbnail" class="lecture-thumbnail" />
        <p>${lecture.lectureTitle}</p>
      `;
      // 썸네일 클릭 시 lecture.html로 이동하며 강의 ID를 쿼리 스트링으로 전달
      lectureElement.addEventListener('click', () => {
        window.location.href = `lecture.html?id=${lecture.id}`;
      });
      lecturesContainer.appendChild(lectureElement);
    });
  }
  
  document.addEventListener('DOMContentLoaded', displayLectures);