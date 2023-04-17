"use client";

import { useState } from "react";
import Image from "next/image";

import AppWrap from "../wrapper/AppWrap";
import { workBackground } from "../assets";

const people = [
  {
    name: "John Doe",
    position: "CEO of Company",
    image: "https://picsum.photos/200",
    testimonial:
      "Lorem111 ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nisl. Sed euismod, nisl vel aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vel aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc.",
  },
  {
    name: "John Doe",
    position: "CEO of Company",
    testimonial:
      "Lorem222 ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nisl. Sed euismod, nisl vel aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vel aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc.",
  },
  {
    name: "John Doe",
    position: "CEO of Company",
    image: "https://picsum.photos/200",
    testimonial:
      "Lorem333 ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nisl. Sed euismod, nisl vel aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vel aliquam lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eu nunc.",
  },
];

const Testimonials = () => {
  const [clickedPerson, setClickedPerson] = useState(people[1]);

  return (
    <div className="flex flex-col items-center justify-center xl:h-screen-navbar h-auto gap-[3.8rem]">
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
      <div className="flex items-center justify-center">
        {people.map((person, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 text-center cursor-pointer"
            onClick={() => setClickedPerson(person)}
          >
            <div className={person !== clickedPerson ? "opacity-50" : "ease"}>
              <Image
                className="rounded-full"
                src={workBackground}
                alt={person.name}
                width={person !== clickedPerson ? 70 : 88}
                height={person !== clickedPerson ? 70 : 88}
              />
            </div>
            <div className={person !== clickedPerson ? "opacity-0" : "ease"}>
              <p className="mt-4 font-bold text-base md:text-2xl text-textPrimary">
                {person.name}
              </p>
              <p className="body2">{person.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(Testimonials, "testimonials", "bg-secondary");
