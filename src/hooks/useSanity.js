import { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";

// Generic fetch hook
function useSanityQuery(query) {
  const [data, setData] = useState(null);
  useEffect(() => {
    client.fetch(query).then(setData).catch(console.error);
  }, [query]);
  return data;
}

// Specific hooks
export const useAbout = () => useSanityQuery(`*[_type == "about"][0]{ bio }`);
export const useEducation = () =>
  useSanityQuery(`*[_type == "education"]{ degree, university, year, details }`);
export const useExperience = () =>
  useSanityQuery(`*[_type == "experience"]{ role, company, duration, description }`);
export const useProjects = () =>
  useSanityQuery(`*[_type == "projects"]{ title, description, link }`);
export const useCertificates = () =>
  useSanityQuery(`*[_type == "certificates"]{ title, issuer, year, url }`);
export const useConferences = () =>
  useSanityQuery(`*[_type == "conferences"]{ title, year, location, details }`);
export const useAwards = () =>
  useSanityQuery(`*[_type == "awards"]{ title, year, issuer }`);
export const useContact = () =>
  useSanityQuery(`*[_type == "contact"][0]{ email, phone, whatsapp, telegram, github, linkedin }`);
