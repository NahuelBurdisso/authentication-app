import { getSession, signOut } from "next-auth/react";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  return {
    props: {
      session,
    },
  };
};

function HomePage({ session }) {
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
        <p>Skeleton.</p>
      )}

      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}

export default HomePage;
