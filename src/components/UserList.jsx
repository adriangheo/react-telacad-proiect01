import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";

function UserList(props) {
  const { users, deleteUserByEmail } = props;

  return (
    <div className="container-fluid">
      <div className="UserList row">
        <h2>Lista utilizatorilor:</h2>
        {users.map((user, index) => {
          return (
            <UserItem
              id={user.id}
              name={user.name}
              email={user.email}
              isGoldClient={user.isGoldClient}
              salariu={user.salariu}
              imagine={user.imagine}
              key={index}
              deleteUserByEmail={(email) => deleteUserByEmail(email)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
