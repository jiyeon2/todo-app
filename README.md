# TODO APP
원티드 프리온보딩 인턴십 프론트엔드 9차 1주차 과제

## 배포 링크
http://todo-app-pre-onboarding.s3-website-us-east-1.amazonaws.com

## 실행 방법
```bash
npm install
npm start
```
## 디렉토리 구조
```
/src
├── apis       // 서버 요청 api
│   ├── auth
│   └── todo
├── components // 페이지에서 사용하는 컴포넌트
│   ├── auth
│   ├── common
│   └── todo
├── context    // context api
├── pages      // 라우팅 경로 별 페이지
├── utils      // 유틸리티 기능
├── App.tsx
├── index.css
└── index.tsx
```

## 사용 기술 스택
|사용처|사용 기술|결정 사유|
|--|--|--|
| 프레임워크 | React (CRA) | |
| 언어 | Typescript(Javascript) | - 더 안정적인 코드 작성: 컴파일 과정에서 버그를 사전에 찾을 수 있음 <br /> - 개발 생산성 향상: 자동완성, 타입체크, 에러 표시 도구 제공 <br /> - 코드 가독성 향상: 개발자가 코드를 이해하고 유지보수하기 쉽게 만듦 |
| 스타일 | TailwindCss | - 직관적이고 별도의 클래스 네이밍이 불필요해 편리함 <br /> - 다른 파일로 이동할 필요없이 코드 수정이 용이 |
| 라우팅 처리 | react-router | |
| 비동기 통신 | axios| - axios의 instance 기능을 활용하여 공통적으로 사용되는 옵션들을 정리 및 조건에 따른 재사용성 <br /> - 비동기적 HTTP 통신 방법으로 response 데이터를 다룰 수 있으며 Promise 객체화 가능 <br /> - HTTP Requests Intercept 가능|
| 상태 관리 | Context API | - 프로젝트 전역 변수 관리 가능|
| 코드 포매팅 | ESLint | |
| 배포 | AWS(S3) | - AWS와 Github Action을 활용해 CI/CD 구축 |
| 기타 | react-hot-toast | - 다른 기능을 블록시키는 alert창에 비해 블록을 시키지 않으며 전역에서 호출할 수 있어 편리 |

## 주안점

### 관심사 분리
- 파일의 유형 별로 구조를 나눔
- 서버 상태와 클라이언트 상태를 구분하기 위해 apis 폴더에 서버 관련 상태를 모음
- 파일과 폴더에 단일 책임 원칙을 적용해 제목에 맞는 하나의 기능을 수행

### 응집도
- components폴더에 파일의 기능별로 폴더 세분화
- 파일에 사용된 타입은 파일과 가까운 위치에 배치

### UX
- 로그인/회원가입에서 유효하지 않은 입력 시 레이아웃 변경 없이 피드백 멘트 제공
- Todo 입력시 창의 width 범위를 벗어나는 길이 입력 시 ellipsis(...)로 줄여 레이아웃 유지
- 인증이 된 사용자가 로그인/회원가입 라우트에 접근시 todo 페이지로 리다이렉팅(반대도 동일)

### 에러핸들링
- 매 api 호출 마다 토큰을 검사, 유효하지 않을 시 interceptors로 요청을 무효화, 사용자 피드백 제공

### 의존성 관리
- 토큰을 저장하는 storage 및 백엔드 api 주소 등 변경 가능한 사항들에 의존하지 않기 위해 추상화

## 시연 영상

### 회원가입
https://user-images.githubusercontent.com/46833758/221180904-cafe4555-7288-4ca2-9586-0bcbdaf48fd7.mov

### 로그인
https://user-images.githubusercontent.com/46833758/221180926-a75b531a-7ea4-44e8-8855-a22792198b91.mov

### Todo list
https://user-images.githubusercontent.com/46833758/221181098-79a69476-00a8-46d6-92db-ac281d322208.mov

## 팀원 구성표
<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/jiyeon2">
      <img src="https://avatars.githubusercontent.com/u/18395475?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>이지연</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/foreknowledge">
      <img src="https://avatars.githubusercontent.com/u/29790944?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>김예지</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ggsno">
      <img src="https://avatars.githubusercontent.com/u/46833758?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>오강산</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/yses9296">
      <img src="https://avatars.githubusercontent.com/u/54027716?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>최은서</b></sub>
      </a>
    </td>
        <td align="center">
      <a href="https://github.com/tjswo2292">
      <img src="https://avatars.githubusercontent.com/u/55657931?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>최선재</b></sub>
      </a>
    </td>
</tr>
<tr>
    <td align="center">
      <a href="https://github.com/jiwonmik">
      <img src="https://avatars.githubusercontent.com/u/59993029?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>김지원</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/onezeun">
      <img src="https://avatars.githubusercontent.com/u/78632052?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>한지은</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/iuesver">
      <img src="https://avatars.githubusercontent.com/u/87600354?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>오혁상</b></sub>
      </a>
    </td>
      <td align="center">
      <a href="https://github.com/junseokoh-hub">
      <img src="https://avatars.githubusercontent.com/u/99642719?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>오준석</b></sub>
      </a>
    </td>
        <td align="center">
      <a href="https://github.com/pre-onboarding-internship-team2">
      <img src="https://avatars.githubusercontent.com/u/125961436?s=200&v=4" width="100px;" alt=""/>
      <br />
      <sub><b>2팀</b></sub>
      </a>
    </td>
  </tr>
</table>

## commit convention

| Tag Name | Description      |
| -------- | ---------------- |
| feat     | 새로운 기능 추가 |
| design   | UI style 변경    |
| refactor | 코드 리팩토링    |
| fix      | 에러, 버그 수정  |
| docs     | 문서수정         |
| chores   | 기타 수정사항    |

# 협업 방식

## 커뮤니케이션 툴

- 노션([회의록](https://www.notion.so/2da78bd48750440292898f3157a0021b?v=7acf2ed892d34503b94004896de6576b&pvs=4))
- 디스코드
- Zoom

## 협업 목표

> **동료학습, 팀으로 일하는 법**에 익숙해지는 것, 과제를 대하는 태도를 연습하는 것

- 기능별로 각자 코드 작성하는 팀프로젝트 형태는 내가 맡은 역할이 아닌 코드는 잘 안보는 문제가 있다
- 그렇기 때문에 과제를 분할하지 않고 **모든 사람이 자신의 과제에 대해 Best Practice를 온전히 고민해 볼 수 있는**방식으로 진행

## 과제 수행 방식

1. 과제 1차 코드리뷰 및 피드백 <br />
   : Notion, Discord 활용: 코드 관련 질문과 의견 기록 및 소통
   - 많은 토론을 통해서 의견을 교환하고 소통하는 법을 연습
2. Best Practice에 대한 토론 및 의견 공유 후 코드 디벨롭 <br />
   : PR을 통해 코드를 설명하고 서로의 코드를 리뷰하며 의견을 공유한 뒤 각자의 프로젝트 디벨롭
     - 기본 세팅 된 프로젝트에서 각자 이름의 브랜치 만들어서 개개인이 모두 다 본인이 생각한 best practice로 코드 작성
     - PR을 날려 중요하다고 생각되는 부분들은 왜 이것이 Best Practice라고 생각했는지에 대한 이유를 기술
     - 동료들과 리뷰로 소통
3. 최종 Best Practice 선정 <br />
   : PR에 최종적으로 올라가 있는 각자의 코드를 디스코드로 화면공유


