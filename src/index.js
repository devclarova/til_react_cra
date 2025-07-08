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
import Test from "./pages/Test";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Hello = function () {
  return <div>안녕하세요.</div>;
};
root.render(
  <div className="wrap">
    <Test></Test>
  </div>,
);
