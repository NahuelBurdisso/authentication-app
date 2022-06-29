import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

function LoginPage() {
  const router = useRouter();
  const { status } = useSession();

  if (status !== "loading" && status === "authenticated") {
    router.push("/");
  }

  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          signIn("github");
        }}
      >
        Sign in with Github
      </button>
    </div>
  );
}

export default LoginPage;
