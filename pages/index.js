import React from "react";
import { useSession } from "next-auth/react";

function HomePage() {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  if (isLoading) {
    return <p>Loading...</p>;
  }

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

export default HomePage;
