import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import SectionHeading from "../SectionHeading";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="backdrop-blur-2xl bg-white/5 my-8 px-2 sm:px-8 py-8 rounded-lg shadow-md w-full max-w-5xl mx-auto">
      <SectionHeading
        heading="Contact Me"
        subheading="Feel free to reach out for any inquiries or collaborations."
      />
      <form className="max-w-2xl mx-auto p-4 space-y-4">
        <Input
          type="text"
          placeholder="Your Name"
          className="w-full bg-white/30 text-black placeholder:text-gray-300"
        />
        <Input
          type="email"
          placeholder="Your Email"
          className="w-full bg-white/30 text-black placeholder:text-gray-300"
        />
        <Textarea
          placeholder="Your Message"
          className="w-full bg-white/30 text-black placeholder:text-gray-300"
          rows={4}
        />
        <Button className="w-full bg-white text-black hover:bg-grey-700">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
