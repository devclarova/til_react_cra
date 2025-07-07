import React from "react";
import ReactDOM from "react-dom/client";

// css
import "./index.css";
import StartPage from "./pages/StartPage";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import Photos from "./pages/Photos";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";
import Comments from "./pages/Comments";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Hello = function () {
  return <div>안녕하세요.</div>;
};
root.render(
  <div className="wrap">
    <Posts></Posts>
    <Albums></Albums>
    <Photos></Photos>
    <Todos></Todos>
    <Users></Users>
    <Comments></Comments>
  </div>,
);
