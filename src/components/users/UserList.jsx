import styled from "@emotion/styled";
import React from "react";

function UserList({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) {
  // js 자리
  const UserCard = styled.div`
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
  const UserTitle = styled.div``;
  const UserNumber = styled.div``;
  const UserAddress = styled.div``;
  const UserCompany = styled.div``;

  const { street, suite, city, zipcode } = address;
  const { lat, lng } = address.geo;

  const { company_name, catchPhrase, bs } = company;

  // jsx 자리
  return (
    <div>
      <UserCard>
        <UserTitle>
          {id}.{name}.{username}
          <UserNumber>
            {email}.{phone}
          </UserNumber>
          <UserAddress>{address}</UserAddress>
          <UserCompany>{company}</UserCompany>
        </UserTitle>
      </UserCard>
    </div>
  );
}

export default UserList;
