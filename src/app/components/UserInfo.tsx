"use client";
import { firebaseGetData } from "@/lib/firebase/firebaseService";
import { useSession } from "next-auth/react";
import React from "react";

export default function UserInfo() {
  const { data: session } = useSession();
  if (session) {
    return <div>{session.user?.name}</div>;
  }
  return null;
}
