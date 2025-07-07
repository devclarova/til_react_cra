import React, { useState } from "react";
import UserList from "../components/users/UserList";

function Users() {
  // js 자리
  const [userData, setUserData] = useState([]);
  async function getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      setUserData(result);
    } catch (error) {
      console.log(error);
    }
  }
  // getUsers();

  function resetList() {
    setUserData([]);
  }

  // jsx 자리
  return (
    <div>
      <h1>
        Users 목록
        <button onClick={getUsers}>목록 가져오기</button>
        <button onClick={resetList}>목록 초기화</button>
      </h1>
      <div>
        {userData.map(function (요소, 인덱스) {
          return (
            <UserList
              id={요소.id}
              name={요소.name}
              username={요소.username}
              email={요소.email}
              address={요소.address}
              street={요소.address.street}
              suite={요소.address.suite}
              city={요소.address.city}
              zipcode={요소.address.zipcode}
              phone={요소.phone}
              website={요소.website}
              company={요소.company}
              company_name={요소.company_name}
              catchPhrase={요소.catchPhrase}
              bs={요소.bs}
              key={인덱스}
            ></UserList>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
