import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-end text-xl text-center pr-10 space-x-10 bg-blue min-w-full p-5 opacity-90">
      <Link href={"/exercises"} >Exercises</Link>
      <Link href={"/"} >Counter</Link>
      <Link href={"/login"} >Sign In</Link>
      <Link href={"/api/auth/signout"} >Sign Out</Link>
      <Link href={"/signup"}>Sign Up</Link>
    </nav>
  );
}
