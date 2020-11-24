import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Mike Irby",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/aa/Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
