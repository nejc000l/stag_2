"use client";
import { useCallback, useEffect, useState } from "react";
import { Database } from "@/types/supabase";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
// import Avatar from "./avatar";
interface UpdateProfileParams {
  title: string | null;
  href: any | null;
  text: any | null;
  avatar_url: any | null;
}
export default function AccountForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);
  const [pass, setPass] = useState<any | null>(null);
  const [username, setUsername] = useState<any | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const user = session?.user;

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("pages")
        .select(`title, href, text, avatar_url`)
        .eq("profile_id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setPass(data.title);
        setUsername(data.href);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({
    title,
    text,
    href,
    avatar_url,
  }: UpdateProfileParams) {
    try {
      setLoading(true);
      if (user) {
        let { data, error } = await supabase
          .from("pages")
          .update({
            title,
            text,
            href,
            avatar_url,
          })
          .match({ profile_id: user.id });
        if (error) {
          console.error(error);
          throw error;
        }

        alert("Profile updated!");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="form-widget flex flex-col z-4 relative items-center justify-center h-screen text-red-400 gap-4">
      <div>
        <label htmlFor="email"></label>
        <span id="email" />
      </div>
      <div>
        <label className="m-4" htmlFor="fullName">
          Full Name: {username}
        </label>
      </div>
      <div>
        <label className="m-4" htmlFor="username">
          password: {pass}
        </label>
      </div>
      <input
        type="text"
        name="fullName"
        id="fullName"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button
        onClick={() =>
          updateProfile({
            title: pass,
            href: pass,
            text: pass,
            avatar_url: pass,
          })
        }
      >
        update
      </button>
      <div>
        <form action="/auth/singout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}
