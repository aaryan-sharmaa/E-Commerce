import React from "react";
import Search from "../Search";

function Hero() {
  return (
    <section className="text-gray-600 body-font mt-15">
      <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Amazing things will happen 
            <br className="hidden lg:inline-block" />
            when you listen to the consumer 
          </h1>
          <p className="mb-8 leading-relaxed">
          Don’t forget about those people who have spent their hard-earned money with you. They could be responsible for substantial online sales later down the line. Treat them like your family and take them with you on your journey.
          </p>
          <div className="flex justify-center">
            <Search />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="sale "
            src="\src\assets\pexels-karolina-grabowska-5632386.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
