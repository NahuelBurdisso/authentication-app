import React from "react";
import { getSession } from "next-auth/react";

function HomePage(props) {
  const { user } = props;

  return (
    <div>
      <h1>Home</h1>
      {user ? (
        <>
          <p>Hello, {user.name}</p>
          <p>Email: {user.email}</p>
          <img src={user.image} alt="avatar" />
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const user = session.user;
  return {
    props: {
      user,
    },
  };
};

export default HomePage;
