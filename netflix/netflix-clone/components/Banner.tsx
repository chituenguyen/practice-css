import React, { useEffect, useState } from "react";
import Image from "next/image";
import netflixOriginals from "../data/netflixOriginals";
import { baseUrl } from "./constants/movie";

function Banner() {
  const movie =
    netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)];

  return (
    <div
      className="flex flex-col space-y-2 py-16 md:spay-y-4 lg:h-[70vh]
    lg:justify-end lg:pb-12"
    >
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={`${baseUrl}${movie.backdrop_path}`}
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie.title}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie.overview}
      </p>
      <div className='flex space-x-3 mt-2'>
        <button className="bannerButton bg-white text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black md:h-8 md:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Play
        </button>
        <button className="bannerButton bg-[gray]/70">
          More Info
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black md;h-8 md:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Banner;
