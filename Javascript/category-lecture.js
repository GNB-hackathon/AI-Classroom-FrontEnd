document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav__link');
    const lectureList = document.getElementById('lecture-list');
    const banner = document.querySelector('.banner');

    navLinks.forEach(link => {
        link.addEventListener('click', async (event) => {
            event.preventDefault();
            const category = link.getAttribute('data-category');
            if (category) {
                removeAllContentAfterBanner(banner);
                await fetchLectures(category);
            }
        });
    });

    async function fetchLectures(category) {
        try {
            const response = await fetch(`/api/lectures?category=${category}`);
            if (!response.ok) {
                throw new Error('네트워크 응답이 올바르지 않습니다');
            }
            const lectures = await response.json();
            displayLectures(lectures);
        } catch (error) {
            console.error('강의를 불러오는 중 오류가 발생했습니다:', error);
        }
    }

    function displayLectures(lectures) {
        lectureList.innerHTML = '';
        if (lectures.length === 0) {
            lectureList.innerHTML = '<p>해당 카테고리의 강의가 없습니다.</p>';
        } else {
            lectures.forEach(lecture => {
                const lectureItem = document.createElement('div');
                lectureItem.className = 'lecture-item';
                lectureItem.innerHTML = `
                    <h3>${lecture.title}</h3>
                    <p>${lecture.description}</p>
                    <a href="/lectures/${lecture.id}">자세히 보기</a>
                `;
                lectureList.appendChild(lectureItem);
            });
        }
    }

    function removeAllContentAfterBanner(banner) {
        while (banner.nextElementSibling) {
            banner.nextElementSibling.remove();
        }
    }
});
