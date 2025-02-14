import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-10">
      <h1 className="text-4xl font-bold text-gray-900">SeekPodCast AI</h1>
      <p className="mt-4 text-lg text-gray-700">
        AI-powered podcast tagging for content discovery.
      </p>
      <a
        href="https://github.com/SeekPodCast-ai"
        className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition"
      >
        View on GitHub
      </a>
    </div>
  );
}
