import { useSession } from "next-auth/react";

export default async function Home() {
  // const {data: session} = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <p>Home Page</p>
      {/* <button onClick={() => console.log({session})}></button> */}
      {/* Expires: {session?.expires}
      User-Email: {session?.user?.email}
      User-name: {session?.user?.name}
      User-image: {session?.user?.image} */}
      {/* <p className="m-40 text-center text-xl">
        Under Maintenance
        <br />
        You can view the project on figma:
        <br/>
        <a href="https://www.figma.com/file/fUAeNhJwbc2ka73nfguHLy/Your-Fitness-Journey?type=design&node-id=0%3A1&mode=design&t=OiXPJJupINZfrXei-1">
      <Image
      className="m-5"
        src={ggg}
        alt="figma file"
        width={350}
        height={150}
      ></Image></a>
      </p> */}

      {/* {session?.user?.name ? (
        <div>{session?.user?.name}</div>
      ) : (
        <div>Not signed in</div>
      )} */}
      {/* { toggle ? <Signup handleToggle={handleToggle}/> : <Login handleToggle={handleToggle}/> } */}
    </main>
  );
}
