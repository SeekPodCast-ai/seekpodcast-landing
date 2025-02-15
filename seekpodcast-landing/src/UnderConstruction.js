import React from "react";

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="container">
        <div className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2">
          <div className="text-center">
            {/* Logo and Heading Wrapper */}
            <div className="flex items-center justify-center space-x-4">
              {/* Logo */}
              <img
                src={`${process.env.PUBLIC_URL}/android-chrome-512x512.png`}
                alt="SeekPodCast Logo"
                className="w-16 h-16 rounded-full"
              />
              {/* Title */}
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                SeekPodCast<span className="text-indigo-600">.ai</span>
              </h2>
            </div>

            <h3 className="text-xl md:text-3xl mt-10">🚀 Under Active Development</h3>
            <p className="text-md md:text-xl mt-10">
              <a className="hover:underline" href="#">SeekPodCast.ai</a> is your smart podcast companion, harnessing the power of AI to help you discover trending topics, generate insightful tags, and organize your favorite shows effortlessly. Whether you're a creator or a listener, our cutting-edge technology ensures you stay ahead in the world of podcasts. Explore, engage, and elevate your podcasting experience with us!
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap mt-12 justify-center">
            {/* GitHub Button */}
            <div className="m-4">
              <a href="https://github.com/SeekPodCast-ai" title="SeekPodCast.ai On GitHub"
                className="md:w-40 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                <span className="mr-2">🐙</span> <span>GitHub</span>
              </a>
            </div>

            {/* Email Button */}
            <div className="m-4">
              <a href="mailto:garjesomesh@gmail.com" title="SeekPodCast.ai On Email"
                className="md:w-40 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                <span className="mr-2">📧</span> <span>Email</span>
              </a>
            </div>

            {/* LinkedIn Button */}
            <div className="m-4">
              <a href="https://www.linkedin.com/in/somesh-garje-09ba6895/" title="SeekPodCast.ai On LinkedIn"
                className="md:w-40 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                <span className="mr-2">🔗</span> <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
