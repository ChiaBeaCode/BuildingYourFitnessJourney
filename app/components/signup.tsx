"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!username || !password || !email) {
      setErrorMessage("Please fill out all sections");
      return;
    }
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      });
      const data = await res.json();
      if (data.status !== 200) {
        setErrorMessage(data.message);
      } else {
        router.push("/login");
      }
    } catch (error) {
      setErrorMessage(errorMessage);
    }
  }
  return (
    <>
      <section className="flex flex-col m-auto p-7 w-80 rounded border-2 bg-white">
        <h1 className=" text-center text-2xl mb-8 cursor-default after:w-4/5 after:m-auto after:h-2 after:rounded after:bg-peace-300 after:block">
          Create Account
        </h1>
        <button className=" text-lg mx-2 py-2 rounded-xl border-4 border-peace-300">
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
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className=" m-2 py-2 px-3 rounded-xl border-4 border-peace-500"
          />

          <button
            type="submit"
            className=" text-lg self-center w-fit py-1 px-2 mt-5 rounded-xl border-4 border-peace-500 hover:bg-peace-300 "
          >
            Login
          </button>
        </form>
        <p className="flex justify-center text-lg mt-4 cursor-default">
          Already have an account?
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
