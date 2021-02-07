# React-homework

게시판의 CRUD 기능을 구현해보기

(C: Create, 생성)

(R: Read, 조회)

(U: Update, 수정)

(D: Delete, 삭제)

## 실행 방법

- - -

프로젝트 폴더, Frontend 폴더, Backend 폴더에서 `npm install` 후

프로젝트 폴더에서 `npm start`

( `npm-run-all`을 통해 Frontend와 Backend 동시 실행됨 )

## Stacks

- - -

### Frontend

- React
- Material UI
- scss

### Backend

- Node
- Express
- Lowdb(json)

## Path

- - -

- / => 글목록
- /write => 글쓰기
- /read/:postid => `postid`값과 동일한 id를 가진 글의 데이터를 DB에서 받아서 조회
- /update/:postid => `postid`값과 동일한 id를 가진 글을 수정

## Logic

- - -

Frontend에서 Backend와 모두 fetch()를 통해 통신을 함

Backend에서는 Frontend에서 요청한 정보를 db.json에서 찾아서 각각의 로직을 수행함

DataBase는 db.json임 (LowDB)

LowDB의 장점은 쓰기가 간편하나, 한계점으로는 id를 자동으로 생성할 수 없어 shortid라는 라이브러리를 이용해 id를 난수로 생성했음

### Frontend

- C : 각 `TextField`에 있는 `value`를 `onChange`와 `setState`를 이용해 State에 저장 후 `전송하기` 버튼 클릭 시 `fetch()`를 통해 서버로 전송

- R(글 목록) : 서버로 요청, 서버에서 받은 글 데이터를 `setState`로 저장한 후 `map`을 이용해 출력

- R(글 자세히) : `props.match.params.postid`를 통해 `id`를 얻어서 서버로 전송, 서버에서 받은 글 데이터를 `setState`로 저장해 출력

- U : `useEffect`에서 `props.match.params.postid`를 통해 `id`를 얻어서 서버로 전송, 서버에서 받은 글 데이터를 `useState`를 이용해 출력, `수정하기` 버튼 클릭 시 각 `value`를 서버로 전송

- D : `props.match.params.postid`를 통해 `id`를 얻어서 서버로 전송

### Backend

- C : `shortid`를 통해 글의 `id`를 생성하고 `id`와 함께 하나의 객체(json)로 만들어 `db.json`에 저장

- R(글 목록) : DB에 있는 글 전체 데이터를 전송

- R(글 자세히) : DB에 있는 글 전체 데이터 中, `id`와 일치하는 튜플을 전송

- U : DB에 있는 글 전체 데이터 中, `id`와 일치하는 튜플을 찾아 `id`를 제외한 나머지 인덱스를 모두 Frontend에서 넘어온 데이터로 수정

- D : DB에 있는 글 전체 데이터 中, `id`와 일치하는 튜플을 찾아 삭제

## Directory

- - -

```
/ ┬ backend ┬ src - server.js
  │         │ 
  │         ├ db.json
  │         └ package.json
  ├ frontend ┬ public - (index.html, etc..)
  │          ├ src ┬ conponents - Header.js
  │          │     ├ css ┬ base.scss
  │          │     │     ├ Header.scss
  │          │     │     ├ List.scss
  │          │     │     ├ Read.scss
  │          │     │     └ Write.scss
  │          │     ├ routes ┬ PostList.js    ...('/')
  │          │     │        ├ Read.js        ...('/read/:postid')
  │          │     │        ├ Update.js      ...('/update/:postid')
  │          │     │        └ Write.js       ...('/write)
  │          │     ├ App.js
  │          │     └ index.js
  │          ├ package.json
  │          └ tsconfig.json
  ├ package.json
  └ README.md
```

## 실행 사진(CRUD)

- - -

![C](https://user-images.githubusercontent.com/42960217/107151102-346c5500-69a4-11eb-9853-ab69e8f29335.gif)
![R](https://user-images.githubusercontent.com/42960217/107151106-39c99f80-69a4-11eb-8652-f4234712d394.gif)
![U](https://user-images.githubusercontent.com/42960217/107151118-44843480-69a4-11eb-9152-48ae7dad381c.gif)
![D](https://user-images.githubusercontent.com/42960217/107151122-4a7a1580-69a4-11eb-9585-b3b3fe2dc34c.gif)

## 참고 자료

- - -

[axios, styledComponent를 이용한 게시판 예시](https://grahams.tistory.com/280)

[React - express 연결](https://hello-bryan.tistory.com/121)

[React Hooks 완전 정복](https://velog.io/@velopert/react-hooks)

[LowDB 사용법](https://uhou.tistory.com/76)
