# JSX 1.

- React에서 사용하는 html 태그
- 용도: 컴포넌트 만들기

## 1. Component란?

- HTML 태그 형태를 리턴하는 함수
- 화살표 함수(`rafce`)든 일반 함수(`rfce`)든 `HTML 태그를 리턴`하면 인정
- JSX는 `반드시 하나의 태그`에 `포함되도록 배치`하여야 한다.
- `<></>`를 `Fragment`라고 합니다.
- 파일명 및 컴포넌트 함수는 반드시 `파스칼`이여야 한다.

## 2. Component와 Page 폴더 구분 (관례상)

- `폴더명은 반드시 소문자`로 하여야 한다.
- 각 화면 단위로 구성한다면 `pages 폴더`에 저장
- `하나의 html을 완성하기 위한 배치 요소`라면 `componenets 폴더`에 저장
- `/src/components/소문자컴포넌트단어/Header.jsx`
- `/src/components/소문자컴포넌트단어/Header.css`

# css

## 1. JSX의 css 추가하기

- 일반적으로 src 폴더 하단에 `css 폴더`를 생성함
- css 파일은 모두 이곳에 배치한다.
- css 파일명은 컴포넌트명과 동일하게 파스칼케이스를 사용한다.
- 예) Header.css, Footer.css, Slide.css
- 예) header.css, footer.css, slide.css

## 2. css 사용하기

### src/index.css

- 기본적인 css 적용
- index.js에 적용되는 css
- css를 불러들이는 import 형태 확인

```js
import "./index.css";
```

### src/pages/StartPage.jsx

- src/css/StartPage.css 파일 생성
- css 파일 불러들이기

```jsx
import "../css/StartPage.css";
```

- Header.jsx

```jsx
import "../css/Header.css";
```

- Footer.jsx

```jsx
import "../css/Footer.css";
```

-Slide.jsx

```jsx
import "../css/Slide.css";
```

## 3. 외부 css 라이브러리 사용하기

### 3.1. 링크 방식

- 위처럼 리액트에서 활용은 추천하지 않음
- 일반 웹 퍼블리싱에서만 활용하길 추천
- reset.css: https://meyerweb.com/eric/tools/css/reset/
- normalize.css: https://necolas.github.io/normalize.css/8.0.1/normalize.css
- fontAwsome: https://cdnjs.com/libraries/font-awesome
- 구글 폰트: https://fonts.google.com/

- public/index.html 파일에 추가

```html
<!-- reset.css -->
<link
  rel="stylesheet"
  href="https://meyerweb.com/eric/tools/css/reset/reset200802.css"
/>
<!-- normalize.css -->
<link
  rel="stylesheet"
  href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
/>
<!-- font-awsome -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
  integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
<!-- 구글 폰트 -->
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
  rel="stylesheet"
/>
```

### 3.2. npm 설치 방식 권장

```bash
npm i normalize
npm i reset-css
```

### 3.3. 구글폰트는 `index.css에서 작성` 권장

- index.css가 모든 페이지에 적용되는 기본 파일이므로
- link 방식 보다는 @import url 방식 권장

```css
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-style: none;
}
a {
  text-decoration: none;
  color: #000;
}
ul,
ol {
  list-style: none;
}
html {
}
body {
}
```

## 4. 일반 css 적용해보기

- css: `import "../css/StartPage.css";`
- jsx: `<div className="box">로고</div>`
- css 내용: `.box{background-color: red;}`

- SrartPage.jsx

```jsx
import React from "react";
// css
import "../css/StartPage.css";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";

function StartPage() {
  return (
    <>
      <div className="box">로고</div>
      {/* 헤더 컴포넌트 */}
      <Header></Header>
      {/* 슬라이드 컴포넌트 */}
      <Slide></Slide>
      {/* 분류메뉴 컴포넌트 */}
      {/* 공지 컴포넌트 */}
      {/* 추천 컴포넌트 */}
      {/* 새목록 컴포넌트 */}
      {/* 앱설치 안내 컴포넌트 */}
      {/* 하단 컴포넌트 */}
      <Footer></Footer>
    </>
  );
}

export default StartPage;
```

- StartPage.css

```css
.box {
  background-color: red;
}
```

## 5. `module.css` 적용해보기

- index.css: 공통 적용 내용 (클래스명 충돌 가능성)
- StartPage.css를 파일명 변경: `StartPage.module.css`
- css가 아니라 module.css를 불러들임

```jsx
// import from "../css/StartPage.css"
import styles from "../css/StartPage.module.css";
```

```jsx
// <div className="box">로고</div>
<div className={styles.box}>로고</div>
```

## 6. SCSS 활용하기

- 소스 가독성이 상당히 좋음
- css를 체계적으로 생성 및 관리

### 6.1. SCSS npm 설치

- VSCode 플러그인은 설치되어 있음 (live sass compile)

```bash
npm i sass -D
```

### 6.2. 기본 폴더 생성

- src/scss 폴더 생성 권장
- src/scss/test.scss 파일 생성
- `Watching Sass...` 실행

### 6.3. 중첩(Nesting)

```scss
.wrap {
  position: relative;
  .notice {
    width: 800px;
    height: 400px;
    a {
      display: block;
      &:hover {
        background-color: red;
      }
      span {
        display: block;
      }
    }
  }
}
```

### 6.4. 변수

- 변수는 `$` 기호를 사용한다.
- 가능하면 외부파일로 생성하길 권장
- 변수만 모은 파일명은 `_파일명.sdss`로 `css 생성을 하지 않는게` 좋음

```scss
// 변수만들기
$width-800: 800px;
$height-400: 400px;
$red: red;

.wrap {
  position: relative;
  .notice {
    width: $width-800;
    height: $width-400;
    a {
      display: block;
      &:hover {
        background-color: $red;
      }
      span {
        display: block;
      }
    }
  }
}
```

- 변수만 모은 `_val.scss`, `_color.scss`

```scss
// _val.scss
$red: red;
```

```scss
// _color.scss
$width-800: 800px;
$height-400: 400px;
```

```scss
// test.scss
@import "val";
@import "color;";

.wrap {
  position: relative;
  .notice {
    width: $width-800;
    height: $width-400;
    a {
      display: block;
      &:hover {
        background-color: $red;
      }
      span {
        display: block;
      }
    }
  }
}
```

### 6.5. 함수

- `파일명은 _붙이고 생성`, css 생성되지 않도록
- `src/scss/_mixins.scss` 파일 생성

```scss
// 변수사용하기
@import "val";
@import "color;";
// 함수사용하기
@import "mixins";

.wrap {
// _mixins.scss
@mixin flex-center-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
@mixin border-line ($num, $cc) {
    border: $num solid $cc;
}
```

```scss
// 변수사용하기
@import "val";
@import "color;";
// 함수사용하기
@import "mixins";

.wrap {
  position: relative;
  @include flex-center-center;
  .notice {
    @include flex-center-center;
    @include border-line(5px, #ff0000);
    width: $width-800;
    height: $width-400;
    a {
      display: block;
      &:hover {
        background-color: $red;
      }
      span {
        display: block;
      }
    }
  }
}
```

### 6.6. `React에서 scss` 쓰기로 했다면?

- 반드시 `npm i sass -D`가 되어있다는 전제로 진행 가능
- `Watch Sass...` 꼭 꺼서 불필요한 css 생성하지 말기
- pages/StartPage.scss 파일 생성

```jsx
import "./StartPage.scss";
```

- pages/StartPage`.module`.scss 파일명 수정

```jsx
import styles from "./StartPage.module.scss";

<div className={styles.wrap}></div>;
```

# JSX 2.

## 1. JSX에서 변수 사용하기

- 값의 종류: 글자, 숫자, null, undefined, boolean, [], {}
- 보간법(`{}`)을 이용하기: 중괄호 표현법

```jsx
import React from "react";

function Header() {
  // js 코드 자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "하하하";
  }

  // 아래는 html jsx 코드 자리
  return (
    <div>
      <div>{title}</div>
      <div>
        버전:{version} {say()}
      </div>
    </div>
  );
}

export default Header;
```

## 2. style 태그에 `css 객체` 넣기

```js
import React from "react";

function Header() {
  // js 코딩자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "하하하";
  }

  // html jsx 코드 자리
  return (
    <div>
      <div
        style={{
          backgroundColor: "green",
          color: "#fff",
          border: "5px solid hotpink",
        }}
      >
        {title}
      </div>
      <div>
        버전:{version} {say()}
      </div>
    </div>
  );
}

export default Header;
```

- 아래처럼 변수에 담아서 전달하길 추천

```js
import React from "react";

function Header() {
  // js 코딩자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "하하하";
  }

  const bgObj = {
    backgroundColor: "green",
    color: "#fff",
    border: "5px solid hotpink",
  };

  // html jsx 코드 자리
  return (
    <div>
      <div style={bgObj}>{title}</div>
      <div>
        버전:{version} {say()}
      </div>
    </div>
  );
}

export default Header;
```

- 응용 버전

```js
import React from "react";

function Header() {
  // js 코딩자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "하하하";
  }

  const isLogin = true;

  const bgObj = {
    backgroundColor: "green",
    color: "#fff",
    border: "5px solid hotpink",
  };
  const bgObjRed = {
    backgroundColor: "red",
    color: "#fff",
    border: "5px solid hotpink",
  };

  // html jsx 코드 자리
  return (
    <div>
      <div style={isLogin ? bgObj : bgObjRed}>{title}</div>
      <div>
        버전:{version} {say()}
      </div>
    </div>
  );
}

export default Header;
```

## 3. css에 객체를 별도로 모아서 관리하기

- 위의 css 객체를 `객체 리터럴 오브젝트 방식`이라고 칭함
- 관례상 css 객체는 `파스칼` 케이스를 사용
- /components/bg.js 파일 생성

```js
export const BgObj = {
  backgroundColor: "green",
  color: "#fff",
  border: "5px solid hotpink",
};

const BgObjRed = {
  backgroundColor: "red",
  color: "#fff",
  border: "5px solid hotpink",
};

export default BgObjRed;
```

```jsx
import React from "react";
import BgObjRed, { BgObj } from "./bg";

function Header() {
  // js 코딩자리
  const title = "웹 서비스 제목";
  const version = 0.5;
  function say() {
    return "하하하";
  }

  const isLogin = true;

  // html jsx 코드 자리
  return (
    <div>
      <div style={isLogin ? BgObj : BgObjRed}>{title}</div>
      <div>
        버전:{version} {say()}
      </div>
    </div>
  );
}

export default Header;
```
