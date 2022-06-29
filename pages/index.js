import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function HomePage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const isLoading = status === "loading";
  const unAuthenticated = status === "unauthenticated";

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (unAuthenticated) {
    router.push("/login");
  }

  return (
    <div>
      <h1>Home</h1>
      {session ? (
        <>
          <p>Hello, {session.user.name}</p>
          <p>Email: {session.user.email}</p>
          <img src={session.user.image} alt="avatar" />
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

export default HomePage;
