"use client";

import { useState } from "react";
import Image from "next/image";

import AppWrap from "../wrapper/AppWrap";
import { workBackground } from "../assets";
import { people } from "../constants";


const Testimonials = () => {
  const [clickedPerson, setClickedPerson] = useState(people[1]);

  return (
    <section className="flex flex-col items-center justify-center xl:h-screen-navbar h-auto gap-[3.8rem]">
      <h2 className="mt-1.5 font-bold sm:text-[2.5rem] text-3xl text-textPrimary sm:leading-[5.4rem] leading-10 text-center sm:text-left">
        What{" "}
        <span className="relative z-0">
          they say
          <span className="absolute sm:bottom-1 bottom-0.5 sm:-left-1 -left-0.5 -z-10 w-[105%] sm:h-3.5 h-3 bg-highlight"></span>
        </span>{" "}
        about me
      </h2>
      <p className="body2 !leading-9 text-center lg:w-3/5 md:w-2/3 min-[430px]:w-4/5">
        {clickedPerson.testimonial}
      </p>
      <div className="flex items-center justify-center gap-6">
        {people.map((person, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 text-center cursor-pointer"
            onClick={() => setClickedPerson(person)}
          >
            <div className={person !== clickedPerson ? "opacity-50" : ""}>
              <Image
                className="rounded-full"
                src={workBackground}
                alt={person.name}
                width={person !== clickedPerson ? 70 : 88}
                height={person !== clickedPerson ? 70 : 88}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-cente -mt-12 text-center">
        <p className="mt-4 mb-1 font-bold text-base md:text-2xl text-textPrimary">
          {clickedPerson.name}
        </p>
        <p className="body2">{clickedPerson.position}</p>
      </div>
    </section>
  );
};

export default AppWrap(Testimonials, "testimonials", "bg-secondary");
