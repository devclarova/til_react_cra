import React, { useState } from "react";
import CommentList from "../components/comments/CommentList";

function Comments() {
  // js 자리
  const [commentsData, setCommentsData] = useState([]);
  async function getComments() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const result = await res.json();
      setCommentsData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getComments();
  function resetList() {
    setCommentsData([]);
  }

  // jsx 자리
  return (
    <div>
      <h1>
        Comments 목록
        <button onClick={getComments}>목록 가져오기</button>
        <button onClick={resetList}>목록 초기화</button>
      </h1>
      <div>
        {commentsData.map(function (요소, 인덱스) {
          return (
            <CommentList
              postId={요소.postId}
              id={요소.id}
              name={요소.name}
              email={요소.email}
              body={요소.body}
              key={인덱스}
            ></CommentList>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
