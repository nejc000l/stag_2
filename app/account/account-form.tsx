"use client";
import { useCallback, useEffect, useState } from "react";
import { Database } from "@/types/supabase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
// import Avatar from "./avatar";
interface UpdatePagesParams {
  title: string | null;
  href: string | null;
  text: any | null;
  avatar_url: any | null;
}
export default function AccountForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState<any | null>(null);
  const [text, setText] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<any | null>(null);
  const [href, setHref] = useState<any | null>(null);
  const user = session?.user;
  const notify = () => toast("Profile updated!");

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
        setTitle(data.title);
        setHref(data.href);
        setText(data.text);
        setAvatarUrl(data.avatar_url);
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

  async function updatePages({
    title,
    text,
    href,
    avatar_url,
  }: UpdatePagesParams) {
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
      }
    } catch (error) {
      console.error(error);
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }
  const updatePageF = () => {
    updatePages({
      title: title,
      href: href,
      text: text,
      avatar_url: avatarUrl,
    });
    notify();
  };
  async function createPages({
    title,
    text,
    href,
    avatar_url,
  }: UpdatePagesParams) {
    try {
      setLoading(true);
      if (user) {
        let { data, error } = await supabase.from("pages").insert({
          title,
          text,
          href,
          avatar_url,
          profile_id: user.id,
        });
        if (error) {
          console.error(error);
          throw error;
        }
        alert("Page created!");
      }
    } catch (error) {
      console.error(error);
      alert("Error creating the page!");
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
        <label className="m-4" htmlFor="username">
          title: {title}
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className="m-4" htmlFor="username">
          avatar_url: {avatarUrl}
        </label>
        <input
          type="text"
          name="avatar_url"
          id="avatar_url"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />
      </div>
      <div>
        <label className="m-4" htmlFor="username">
          {`${location.origin}` + `/${href}`}
        </label>
        <input
          type="text"
          name="href"
          id="href"
          value={href}
          onChange={(e) => setHref(e.target.value)}
        />
      </div>
      <div className="flex overflow-hidden h-auto">
        <h4 className="m-4 w-[20rem] break-words">{text}</h4>
        <textarea
          onChange={(e) => setText(e.target.value)}
          className="w-[20rem] h-[20rem] p-[10px] overflow-wrap: break-word; word-break: break-all;"
        ></textarea>
      </div>

      <button onClick={updatePageF}>Update</button>
      <ToastContainer />

      <button
        onClick={() =>
          createPages({
            title: title,
            text: text,
            href: href,
            avatar_url: avatarUrl,
          })
        }
      >
        Create Page
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
