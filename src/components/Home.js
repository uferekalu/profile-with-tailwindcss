import React from 'react';
import image from './kalu.jpg';

export default function Home() {
    return (
        <div className="relative bg-white overflow-hidden p-10 ml-10 mr-10">
        <div className="max-w-12xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Hi there! <br /></span>
                            <span className="block text-indigo-600 xl:inline">Am Lushak</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Your favorite web developer with React js. Pretty excited about new projects to delve into soon.
                            Please click on the project button below to see some of works I made. Hope u would like it!
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <a href="/projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                    My Project
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative" src={image} alt="" />
        </div>
        </div>

    );
}