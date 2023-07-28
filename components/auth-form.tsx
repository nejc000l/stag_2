"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>();

  return (
    <div className="relative m-auto w-[50%] px-8 py-[140px]  z-[100]">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        showLinks={false}
        providers={["google"]}
        redirectTo="http://localhost:3000/auth/callback"
      />
    </div>
  );
}
