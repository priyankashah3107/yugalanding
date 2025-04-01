import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Testimonials = () => {
  return (
    <>
      <div className="bg-white w-full">
        <section className="bg-blue-600 text-white py-20 px-4 mx-20 rounded-md mb-20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="inline-block px-4 py-1.5 bg-blue-500 rounded-full text-sm font-medium mb-6 ">
              Testimonials Made Easy
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Experience the Impact of Our Software in
              <br />
              your Next Yogasana Championship.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Host Your Championships Locally or Globally – We Provide
              <br />
              All the Tools You Need.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Get start for free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};
