"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import ErrorMessage from "./error";


export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage("Username and/or password is missing");
      return;
    }
    try {
      const res = await signIn("credentials", {
        username: username,
        password: password,
        redirect: false,
      });
      if (!res || res.status !== 200) {
        setErrorMessage("Invalid username and/or password");
      }
      router.push("/exercises");
    } catch (error) {
      setErrorMessage("Error Occured");
    }
  }
  return (
    <>
      <section className="flex flex-col m-auto p-7 w-80 rounded border-2 bg-white">
        <h1 className=" text-center text-2xl mb-8 cursor-default after:w-4/5 after:m-auto after:h-2 after:rounded after:bg-peace-300 after:block">
          Sign in
        </h1>
        <button
          onClick={() => signIn("github")}
          className=" text-lg mx-2 py-2 rounded-xl border-4 border-peace-300"
        >
          GitHub
        </button>
        <p className=" flex justify-center text-lg m-2 cursor-default">or</p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className=" m-2 py-2 px-3 rounded-xl border-4 border-peace-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className=" m-2 py-2 px-3 rounded-xl border-4 border-peace-500"
          />
          {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
          <Link
            href={"/exercises"}
            className="pl-3 hover:text-peace-500 underline"
          >
            Forgot password?
          </Link>
          <br />
          <button
            type="submit"
            className=" text-lg self-center w-fit py-1 px-2 mt-5 rounded-xl border-4 border-peace-500 hover:bg-peace-300 "
          >
            Login
          </button>
        </form>
        <p className="flex justify-center text-lg mt-4 cursor-default">
          Dont have an account?
        </p>
        <Link
          href={"/signup"}
          className="flex justify-center pt-1 pl-2 hover:text-peace-500 underline"
        >
          Sign Up
        </Link>
      </section>
    </>
  );
}
