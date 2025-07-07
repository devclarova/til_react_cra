import React, { useState } from "react";
import PhotoList from "../components/photos/PhotoList";

function Photos() {
  // js 자리
  const [photosData, setPhotosData] = useState([]);
  async function getPhotos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await res.json();
      setPhotosData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getPhotos();

  function resetList() {
    setPhotosData([]);
  }

  // jsx 자리
  return (
    <div>
      <h1>
        Photos 목록
        <button onClick={getPhotos}>목록 가져오기</button>
        <button onClick={resetList}>목록 초기화</button>
      </h1>
      <div>
        {photosData.map(function (요소, 인덱스) {
          return (
            <PhotoList
              albumId={요소.albumId}
              id={요소.id}
              title={요소.title}
              url={요소.url}
              thumbnailUrl={요소.thumbnailUrl}
              key={인덱스}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
