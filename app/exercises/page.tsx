"use client";

import { useSession } from "next-auth/react";

export default function Exercises() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div>
        Name: {session.user?.name}
        Status: {status}
        Test page for successful login/session
      </div>
    );
  }
  return <div>Not logged in</div>;
}
