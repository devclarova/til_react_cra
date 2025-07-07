import styled from "@emotion/styled";
import React from "react";

function CommentList({ postId, id, name, email, body }) {
  const CommentsCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #ffb703;
    margin: 20px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const CommentsTitle = styled.div`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const CommentsInfo = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;

  return (
    <div>
      <CommentsCard>
        <CommentsTitle>
          {postId}.{id}.{name}
        </CommentsTitle>
        <CommentsInfo>
          {email}.{body}
        </CommentsInfo>
      </CommentsCard>
    </div>
  );
}

export default CommentList;
