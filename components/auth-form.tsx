"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

import type { Database } from "@/types/supabase";
export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.error(error);
        setMessage("Your email or password is incorrect.");
      } else {
        console.log(data?.user);
        router.push("/account");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="">
      <div className=" h-[100vh] flex relative z-4 text-[#2b671cd8] justify-center items-center flex-col">
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="m-4 p-4"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="m-4 p-4"
        />
        <button className="m-4 p-4" onClick={handleSignUp}>
          Registracija
        </button>
        <button className=" m-4 p-4" onClick={handleSignIn}>
          Vpiši se
        </button>
        <button className="m-4 p-4" onClick={handleSignOut}>
          Izpiši se
        </button>
        <div>{message}</div>
      </div>
    </div>
  );
}
