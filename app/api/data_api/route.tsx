import supabase from "@/utils/supabase";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { data } = await supabase.from("post").select();
  return NextResponse.json(data);
}
