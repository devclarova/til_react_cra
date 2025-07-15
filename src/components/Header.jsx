import React from "react";
import { Link } from "react-router-dom";

function Header({ children, company, service, setIsLogin }) {
  return (
    <header>
      <div onClick={() => setIsLogin(true)}>로그인 하기</div>
      <div onClick={() => setIsLogin(false)}>로그아웃 하기</div>
      {children}
      <Link to="/">😉{company}</Link>
      <Link to="/about">🤭{service}</Link>
      <Link to="/about/mission">😋소개/미션</Link>
      <Link to="/about/team">☝️소개/팀</Link>
      <Link to="/service">🙆‍♂️서비스</Link>
      <Link to="/blog">🙆블로그</Link>
      <Link to="/blog/design/100">🙅‍♀️블로그 100번글</Link>
      <Link to="/blog/design/detail?id=100&user=블랙핑크">
        💃블로그 100번글 상세내용
      </Link>
    </header>
  );
}

export default Header;
