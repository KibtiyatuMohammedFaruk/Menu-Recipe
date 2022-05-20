import { getCsrfToken, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = ({ csrfToken }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/");
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      ...state,
      redirect: false,
      callbackUrl: "/",
    });
    if (res.error) setError(res.error);
  };

  return (
    <div className="max-w-2xl mx-auto p-10 shadow-2xl bg-white">

    <form className="space-y-5" onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input type="hidden" name="csrfToken" defaultValue={csrfToken} />

      <div>
      <label className='block mb-1' htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="john.doe@email.com"
        onChange={handleChange}
        value={state.email}
        className="border border-gray-300 w-full outline-none p-1"
      />
      </div>
      <div>
      <label className='block mb-1' htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
        onChange={handleChange}
        value={state.password}
        className="border border-gray-300 w-full outline-none p-1"
      />
      </div>
      <button
       className="bg-teal-700 py-2 px-4 text-white"
      >Login</button>
    </form>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  return {
    props: {
      csrfToken: await getCsrfToken(ctx),
    },
  };
}

export default Login;
