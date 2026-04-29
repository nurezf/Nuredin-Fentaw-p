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
type Testimonial = {
  name: string;
  role: string;
  image: string;
  company?: string;
  testimonial: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Leul Aynekulu",
    role: "Software Engineer Department Head",
    image: "/leul.jpg",
    company: "Wollo University",
    testimonial:
      "Nuredin Fentaw is an exceptional software engineer with a strong work ethic and a passion for learning. He consistently delivers high-quality code and is a valuable asset to any team.",
  },
  {
    name: "Mubarek Mohammed",
    role: "CEO and Founder of MKF's ICT Solutions",
    image:
      "https://media.istockphoto.com/id/176221393/photo/businessman-portrait-silhouette-and-a-mysterious-face.jpg?s=1024x1024&w=is&k=20&c=E3oXFCGxWa1C87Kqj1RP_9rwz-QuencmTdJVY2-59xM=",
    company: "MKF's ICT Solutions",
    testimonial:
      "Nuredin Fentaw is a talented software engineer who has made significant contributions to our projects. His technical skills and collaborative approach make him a pleasure to work with.",
  },
  {
    name: "Anwar Andargie",
    role: "freelance software engineer",
    image:
      "https://media.istockphoto.com/id/176221393/photo/businessman-portrait-silhouette-and-a-mysterious-face.jpg?s=1024x1024&w=is&k=20&c=E3oXFCGxWa1C87Kqj1RP_9rwz-QuencmTdJVY2-59xM=",
    company: "Upwork",
    testimonial:
      "Nuredin Fentaw is very professional and delivers high-quality work on time. He is a great communicator and always goes the extra mile to ensure client satisfaction. I highly recommend him for any software engineering project.",
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
