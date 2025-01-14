import gsap from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";

import { FaQuoteLeft } from "react-icons/fa";

import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const TestimonialInterface = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      review:
        "This product has completely transformed the way I work. It's intuitive, efficient, and a game-changer for my productivity.",
      backgroundColor: "bg-blue-10",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      review:
        "I'm impressed with the level of customer support. The team goes above and beyond to ensure customer satisfaction.",
      backgroundColor: "bg-green-100",
    },
    {
      id: 3,
      name: "Mike Johnson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      review:
        "The quality of this product exceeded my expectations. It's durable, well-designed, and worth every penny.",
      backgroundColor: "bg-purple-100",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <AnimatedTitle
        title="What Our <b>C</b>ustomers <b>S</b>ay"
        containerClass="mt-5 !text-black text-center"
      />
      <p className="text-xl text-gray-600 text-center mb-10 py-10 ">
        Don't just take our word for it - hear from our satisfied customers
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`${testimonial.backgroundColor} p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500`}
            aria-label={`Testimonial from ${testimonial.name}`}
            tabIndex="0"
          >
            <div className="flex items-start">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <FaQuoteLeft className="text-gray-400 mb-2" />
                <p className="text-gray-800 mb-4">{testimonial.review}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialInterface;
