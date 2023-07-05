"use client";
import React from "react";
import Image from "next/image";

import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const { data: session, status } = useSession();

  const handleLogin = () => signIn();
  const handleSignout = () => {
    setMenuIsOpen(false);
    signOut();
  };
  const handleMenu = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
      <div className="relative h-[32px] w-[182px]">
        <Image src="/logo.png" alt="Logo que contém Jeje-trips" fill />
      </div>

      {status === "unauthenticated" && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={handleLogin}
        >
          Login
        </button>
      )}

      {status === "authenticated" && session.user && (
        <div className="flex items-center gap-3 border-grayLighter p-2 border border-solid rounded-full relative">
          <AiOutlineMenu
            size={16}
            onClick={handleMenu}
            className="cursor-pointer"
          />

          <Image
            className="rounded-full shadow-md"
            width={30}
            height={30}
            alt={session?.user.name ? `Olá ${session?.user.name}` : "Olá User"}
            src={session.user.image ? session.user.image : ""}
          />

          {menuIsOpen && (
            <div className="absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <button
                className="text-primary text-sm font-semibold"
                onClick={handleSignout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
