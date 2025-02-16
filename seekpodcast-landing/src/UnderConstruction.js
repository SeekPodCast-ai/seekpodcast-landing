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

                <h3 className="text-xl md:text-3xl mt-10">AI-Driven Podcast Tagging & Categorization 🚀 Under Active
                    Development 🚀</h3>
                <p className="text-md md:text-xl mt-10">
                    <a className="hover:underline" href="#">SeekPodCast.ai</a> is an AI-powered solution that
                    automatically generates relevant tags for podcasts based on their title and description.
                    By leveraging NLP techniques and models like <strong>SpaCy</strong>, it enhances podcast
                    discoverability and categorization, making it easier
                    for listeners to find content tailored to their interests.
                </p>
            </div>

            <div className="flex flex-wrap mt-12 justify-center">
                              {/* Two-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Key Features */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Automatic tag generation using NLP</li>
                            <li>Customizable categorization of podcasts</li>
                            <li>API for fetching categorized podcasts</li>
                            <li>Cloud-hosted and scalable infrastructure</li>
                            <li>Integrated ad engine for monetization</li>
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Tech Stack</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>Backend:</strong> Python (Django, FastAPI)</li>
                            <li><strong>ETL:</strong> Apache Airflow</li>
                            <li><strong>Frontend:</strong> ReactJS</li>
                            <li><strong>Database:</strong> PostgreSQL</li>
                            <li><strong>CI/CD:</strong> GitHub Actions</li>
                            <li><strong>Hosting:</strong> AWS & OCI (Free-tier)</li>
                            <li><strong>Authentication:</strong> Google OAuth2</li>
                            <li><strong>Containers:</strong> Docker</li>
                        </ul>
                    </div>
                </div>
                <p class="text-gray-800 font-medium mt-6">
                    🚀 This project is a work in progress, with future plans for cloud hosting, improved NLP models, and
                    ad integration for monetization.
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
