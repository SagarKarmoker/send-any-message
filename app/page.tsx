"use client";
import { useSession } from "next-auth/react";
import WelcomePage from "./pages/Welcome";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();

  if(session?.user?.username){
    redirect("/dashboard");
  }
  
  if(!session?.user?.username){
    redirect("/choice-username");
  }

  return (
    <>
      <WelcomePage />
    </>
  );
}
