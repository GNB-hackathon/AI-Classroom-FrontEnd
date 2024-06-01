document.addEventListener('DOMContentLoaded', function() {
    // 질문 게시판에 질문과 답변을 불러오는 함수
    function loadQuestions() {
        fetch('/questions') // 백엔드 엔드포인트를 적절히 수정하세요
            .then(response => response.json())
            .then(data => {
                const questionsList = document.querySelector('.questions');
                questionsList.innerHTML = ''; // 기존 목록을 비움
                data.forEach(question => {
                    const li = document.createElement('li');
                    li.textContent = `${question.name}: ${question.content}`;
                    questionsList.appendChild(li);
                });
            })
            .catch(error => console.error('Error:', error));
    }

    // 질문 작성하기 버튼 클릭 이벤트 리스너
    document.querySelector('.submit-question').addEventListener('click', function() {
        const questionInput = document.querySelector('.question-input');
        const questionContent = questionInput.value.trim();

        if (questionContent) {
            fetch('/questions', { // 백엔드 엔드포인트를 적절히 수정하세요
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: questionContent })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                loadQuestions(); // 질문 목록을 다시 불러옴
                questionInput.value = ''; // 입력 필드를 비움
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        } else {
            alert('질문을 작성해주세요.');
        }
    });

    // 페이지가 로드될 때 질문 목록을 불러옴
    loadQuestions();
});
