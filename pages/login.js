import React from "react";
import { useRouter } from "next-auth/react";

function LoginPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          router.push("/api/auth/signin/github");
        }}
      >
        Sign in with Github
      </button>
    </div>
  );
}

export default LoginPage;
