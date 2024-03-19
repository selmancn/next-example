"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function SigninButton() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <button
          className="text-red-600"
          onClick={() => {
            signOut();
            router.replace("/");
          }}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div>
      <button className="text-red-600" onClick={() => signIn()}>
        Sign In
      </button>
    </div>
  );
}
