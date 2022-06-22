import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import React, { useRef, useState } from "react";
import Thumbnail from "./Thubnails";

interface Props {
  title: string;
  movies: object[];
}
function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

          rowRef.current.scrollTo({left:scrollTo,behavior:"smooth"})
    }
  };
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2
        className="w-56 cursor-pointer text-sm font-semibold
       text-[#e5e5e5] transition duration-200 hover:text-white
       md:text-2xl"
      >
        {title}
      </h2> 
      <div className="group relative md: -ml-2">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-4 m-auto h-9 w-9 z-10
          cursor-poiter opacity-100 transition hover:scale-125 group-hover:opactity-100
          `}
          onClick={() => handleClick("left")}
        />
        <div
          ref={rowRef}
          className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5
        md:p-2" 
        >
          {/* {Object.keys(movies).map((item) => (
            <Thumbnail movie={movies[item]} />
          ))} */}
          {movies.map((item)=>(
            <Thumbnail  movie={item}></Thumbnail>
          ))}
        </div>
        <ChevronRightIcon
          className={`absolute top-0 bottom-0 right-2 z-4 m-auto h-9 w-9
          cursor-poiter opacity-100 transition hover:scale-125 group-hover:opactity-100
          `}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Row;
