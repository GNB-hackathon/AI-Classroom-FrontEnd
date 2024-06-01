document.addEventListener('DOMContentLoaded', function() {
    // 즐겨찾기 상태 확인 및 버튼 업데이트
    checkFavoriteStatusAndUpdateButton();

    document.getElementById('add-favorite-lecture').addEventListener('click', function() {
        const isFavorite = this.classList.contains('favorite');
        if (isFavorite) {
            // 즐겨찾는 강의 취소 요청
            removeFromFavorite();
        } else {
            // 즐겨찾는 강의 추가 요청
            addToFavorite();
        }
    });

    document.querySelectorAll('.sidebar__list a').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.category;
            console.log(category + ' 카테고리의 즐겨찾는 강의를 불러옵니다.');
        });
    });
});

function addToFavorite() {
    // 즐겨찾는 강의 추가 요청
    fetch('/add-favorite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lectureId: '강의ID' })
    })
    .then(response => {
        if (response.ok) {
            alert('즐겨찾는 강의에 추가되었습니다.');
            updateButtonToFavorite(true); // 버튼을 '즐겨찾기 취소'로 업데이트
        } else {
            alert('강의 추가에 실패했습니다.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function removeFromFavorite() {
    // 즐겨찾는 강의 취소 요청
    fetch('/remove-favorite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lectureId: '강의ID' })
    })
    .then(response => {
        if (response.ok) {
            alert('즐겨찾는 강의에서 삭제되었습니다.');
            updateButtonToFavorite(false); // 버튼을 '즐겨찾기 추가'로 업데이트
        } else {
            alert('강의 삭제에 실패했습니다.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function updateButtonToFavorite(isFavorite) {
    const button = document.getElementById('add-favorite-lecture');
    if (isFavorite) {
        button.textContent = '즐겨찾는 강의 취소';
        button.classList.add('favorite');
    } else {
        button.textContent = '즐겨찾는 강의 추가';
        button.classList.remove('favorite');
    }
}

function checkFavoriteStatusAndUpdateButton() {
    // 여기에 사용자의 즐겨찾기 상태를 확인하는 코드를 작성하세요.
    // 예를 들어, 서버로부터 사용자의 즐겨찾기 목록을 받아와 현재 페이지의 강의가 포함되어 있는지 확인하고,
    // updateButtonToFavorite 함수를 호출하여 버튼 상태를 업데이트할 수 있습니다.
}