import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export function useAbout() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAbout() {
      const { data, error } = await supabase
        .from("about")
        .select("*")
        .single(); // get one row only

      if (error) {
        console.error("Error fetching About:", error);
      } else {
        setAbout(data);
      }
      setLoading(false);
    }

    fetchAbout();
  }, []);

  return { about, loading };
}
