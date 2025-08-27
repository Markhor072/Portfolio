import React from "react";
import { useAbout } from "./hooks/useSupabase";

export default function App() {
  const { about, loading } = useAbout();

  if (loading) return <p className="text-center mt-20 text-gray-400">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-lg leading-relaxed">{about?.bio}</p>
    </div>
  );
}
