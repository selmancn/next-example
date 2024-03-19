import React from "react";
import SigninButton from "./SigninButton";
import { useSession } from "next-auth/react";
import UserInfo from "./UserInfo";

export default function AppBar() {
  return (
    <header>
      <div className="flex justify-between px-10 py-8">
        <div>
          <UserInfo />
        </div>
        <div>
          <SigninButton />
        </div>
      </div>
      {/* <SigninButton /> */}
    </header>
  );
}
