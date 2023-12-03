"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Robert",
    avatar: "R",
    title: "Student",
    description: "This is the best AI tool I've ever used!",
  },
  {
    name: "Angelo",
    avatar: "A",
    title: "Software Developer",
    description: "VisionFlow brings something fresh to the AI scene.",
  },
  {
    name: "Serenity",
    avatar: "S",
    title: "New Grad",
    description: "This new tool is so easy to use!",
  },
  {
    name: "Pao",
    avatar: "P",
    title: "Stay At Home Dad",
    description: "The chat generation has given me amazing recipes to try!",
  },
  {
    name: "Killua",
    avatar: "K",
    title: "Freelance Engineer",
    description: "These AI tools are great for brainstorming.",
  },
  {
    name: "Scottie",
    avatar: "S",
    title: "Software Developer",
    description:
      "The code generation tool is great for creating boiler plate code.",
  },
  {
    name: "Hank",
    avatar: "H",
    title: "Student",
    description:
      "The chat generation tool is great for starting out essays and brainstorming.",
  },
  {
    name: "Pablo",
    avatar: "P",
    title: "Professor",
    description:
      "This tool has been great for creating resources for my students to study and learn from.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192239] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex-items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
