"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center"></div>
        <h2>
          <h2 className="text-base text-center text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </h2>
      </div>
      <div className="mt-10 ">
        <div className="grid grid-cols-1  lg:max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <div className="w-full h-auto py-5 shadow-2xl">
                    <img src={course.image} alt="" className="rounded-lg " />
                  </div>
                  <p className="text-md text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>

                  <Link href={`/courses/${course.slug}`}>
                  <button className="w-36 h-10 bg-white text-black my-5 rounded-lg shadow-lg font-bold">Learn More</button>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>

          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
       
        <Link href={'/courses'}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
