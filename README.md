# AI 조교와 비밀의 강의실

팀 소개
-------
* 팀 구성원 소개

|황예빈|김민주|김승현|여지환|
|-----|------|-----|-----|
|![image](https://github.com/GNB-hackathon/AI-Classroom-FrontEnd/assets/137675779/3bb8b384-9116-4edc-bc0c-03758e4822b7)|![image](https://github.com/GNB-hackathon/AI-Classroom-FrontEnd/assets/137675779/04eca068-5718-4eb0-8afe-fa2a5a538950)|![image](https://github.com/GNB-hackathon/AI-Classroom-FrontEnd/assets/137675779/9a724c22-3772-4133-9c85-0a8951e7a18c)|![image](https://github.com/GNB-hackathon/AI-Classroom-FrontEnd/assets/137675779/7460b18c-d30b-47ba-acab-4a620eb4679a)|


배포 링크
------


기획 방향성
---------------------------------

지역사회의 지속 가능한 발전을 위한 문제해결 아이디어
- 지역사회 : 공통의 특성이나 관심사를 가진 사람들이 모여 사는 지리적 또는 사회적 공간을 의미
  - 대학교라는 작은 지역사회를 타겟
- *대학생들의 학업 문제를 해결하는 방향으로 선택*

우리 서비스가 해결하고자 하는 개선점
----------------------------------

- 학생들이 중요한 강의 내용을 놓치거나 이해하기 어려운 부분을 해결하고, 강사들이 목소리를 변조하여 강의를 업로드할 수 있도록 지원함으로써 학생들과 강사들이 각자의 필요에 맞게 강의를 이용할 수 있도록 지원

타겟층
------
- 학업 격차를 줄이고 싶은 학생
  - 수업 시간에 중요한 내용을 놓쳤거나 이해하기 어려운 부분이 있는 학생들
- 고품질 자료의 부족함을 느끼는 학생
  - 학생의 잘 이해할 수 있게 정리된 강의 영상이 흔치 않음
- 기존 강의자료 접근성의 향상을 원하는 학생
  - 복습하고 싶은 의지가 있지만, 적절한 자료를 찾는 것이 어려움
- 자신의 지식을 공유하고 싶어하지만, 자신의 목소리로 강의를 하고 싶지 않은 학생
  - 자신의 목소리가 녹음되는 것을 부담스럽게 느낄 수 있음

기대되는 효과
------------

- 학생들이 필요한 강의를 쉽게 찾고 이해하는데 도움이 됨
- 강사들이 자신의 강의를 효과적으로 공유하면서 더 많은 학생들에게 지식을 전파할 수 있음
- 학원 강사 아르바이트 지원 시 튜터에겐 스펙이 될 수 있음
- 과외 구하고자 하는 사람이 튜터들을 보고 구할 수 있음

기능
------
**핵심 기능 소개**

* 주요 기능
  - 로그인 / 회원가입
  - 학생 회원
  - 로그인
      - 아이디 , 비밀 번호
      - 이메일
  - 튜터 회원 (강의를 찍어 올리는 사람 )
  - 강의 시청 기능 (학생 회원)
      - 강의 목록에서 원하는 강의 선택
      - 강의 영상 시청 및 복습
      - 강의 시청 시 변조 목소리 선택 기능
  - 강의 업로드 기능 (튜터 회원)
      - 강의 제목, 설명, 영상 파일 업로드
      - 강의 수정 및 삭제 기능
      - 영상 업로드 시 변조 여부 선택 가능
  - 강의 검색 기능
      - 강의 제목, 강사 이름, 강의 내용 등을 키워드로 검색 가능
  - 강의 리뷰 기능 (학생 회원)
      - 강의에 대한 후기를 남길 수 있는 댓글 등록 기능
      - 댓글 수정 및 삭제 기능
  - 강의 북마크 기능 (학생 회원)
      - 나중에 볼 강의를 북마크 할 수 있는 기능
      - 북마크한 강의 목록 확인 기능
  - 강의 수정
      - 튜터 회원은 업로드한 강의를 수정 가능
  - 강의 삭제
      - 튜터 회원은 업로드한 강의를 삭제 가능
      - 관리자는 업로드된 강의가 저작권법에 위배 될 시 삭제 가능 


기술 스택
--------

**Front End**
* html/css

**Back End**
* firebase

**AI**
* python - RVC model



API
---



