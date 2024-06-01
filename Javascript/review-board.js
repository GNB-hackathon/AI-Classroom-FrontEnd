document.querySelector('.submit-review').addEventListener('click', function() {
    const reviewInput = document.querySelector('.review-input');
    const reviewText = reviewInput.value.trim();

    // 입력된 리뷰가 없으면 경고
    if (!reviewText) {
        alert('리뷰를 작성해주세요.');
        return;
    }

    // 리뷰 데이터를 서버로 전송
    fetch('http://your-backend-server.com/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ review: reviewText }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // 성공적으로 전송 후 리뷰 입력 필드 초기화
        reviewInput.value = '';

        // 새로운 리뷰를 리스트에 추가
        const newReview = document.createElement('li');
        newReview.textContent = reviewText;
        document.querySelector('.reviews').appendChild(newReview);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
