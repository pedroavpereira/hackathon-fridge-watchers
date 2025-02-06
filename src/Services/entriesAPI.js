import { supabase } from "./supabase";

export async function createEntry(payload) {
  const { data, error } = await supabase
    .from("entries")
    .insert([payload])
    .select();

  return data;
}

export async function getEntries() {
  let { data, error } = await supabase.from("entries").select("*");

  return data;
}
