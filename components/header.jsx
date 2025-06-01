import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 ">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 ">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={60}
            height={200}
            className="h-12 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href={"/dashboard"}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
            >
              <Button variant="outline">
                <LayoutDashboard size={18}></LayoutDashboard>
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link
              href={"/dashboard"}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
            >
              <Button>
                <PenBox size={18}></PenBox>
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRefirectTo="/dashboard">
              <Button variant="outline">Log In</Button>
            </SignInButton>
            <SignUpButton>
              <Button variant="outline">Sign Up</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" }, }} />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
