function getLectureIdFromQueryString() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get('id');
  }
  
  // 강의 ID를 기반으로 강의 정보를 가져오고 화면에 표시하는 함수
  async function displayLectureInfo() {
    const lectureId = getLectureIdFromQueryString();
    if (!lectureId) return;
  
    // 여기서는 예제를 위해 강의 데이터를 직접 정의하지만,
    // 실제로는 서버로부터 강의 정보를 가져오는 코드를 작성해야 합니다.
    // 예: const lectureData = await fetchLectureData(lectureId);
    const lectureData = {
      id: lectureId,
      lectureTitle: "강의제목1",
      lectureDescription: "이 강의는 ...에 대해 다룹니다.",
      lectureVideoLink: "강의영상링크"
    };
  
    document.querySelector('.lecture-video iframe').src = lectureData.lectureVideoLink;
    document.querySelector('.lecture__info h2').textContent = lectureData.lectureTitle;
    document.querySelector('.lecture__info p').textContent = lectureData.lectureDescription;
  }
  
  document.addEventListener('DOMContentLoaded', displayLectureInfo);