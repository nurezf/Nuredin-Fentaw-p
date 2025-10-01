import React from "react";
import SectionHeading from "../SectionHeading";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Testimonial = [
  {
    name: string;
    role: string;
    image: string;
    company?: string;
    testimonial: string;
  }
];

const testimonials: Testimonial = [
  {
    name: "John Doe",
    role: "Software Engineer",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    company: "Tech Company",
    testimonial:
      "This is an amazing product! It has changed the way I work and I can't imagine going back to how things were before.",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    company: "Another Tech Company",
    testimonial:
      "I love using this product! It has made my life so much easier and I highly recommend it to anyone looking for a solution.",
  },
  {
    name: "Alice Johnson",
    role: "UX Designer",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    company: "Design Studio",
    testimonial:
      "This product is fantastic! The design is intuitive and user-friendly, making it a pleasure to use every day.",
  },
];

const Testimonial = () => {
  return (
    <div
      className="backdrop-blur-2xl bg-white/5 my-8 px-2 sm:px-8 py-8 rounded-lg shadow-md w-full max-w-5xl mx-auto"
      id="testimonials"
    >
      <SectionHeading
        heading="What People Say"
        subheading="Testimonials from our users"
      />
      <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="mb-6 backdrop-blur-2xl bg-white/30 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs mx-auto"
          >
            <CardHeader className="flex items-center space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <CardTitle className="text-lg text-white font-semibold">
                  {testimonial.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-200">
                  {testimonial.role} at {testimonial.company}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white italic">"{testimonial.testimonial}"</p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-white text-black hover:bg-blue-600">
                contact
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
