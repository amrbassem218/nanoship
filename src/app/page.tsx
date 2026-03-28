import Link from "next/link";
import HeroEmailRegister from "~/components/heroEmailRegister";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function HomePage() {
  const HOW_IT_WORKS = [
    "Build a software. Make it small.",
    "Ship it. Get it voted.",
    "Earn coins.",
    "Redeem for awesome prizes like Raspberry Pis, Servers, 3D printers and more.",
  ];
  const PRIZES = [
    "PCB credits",
    "Free domain",
    "Hackducky ",
    "Mac mini M4",
    "CPU Grant",
    "Ram Grant",
    "MacBook Neo,",
    "Raspberry Pi 5",
    "Airpods Pro 2",
    "CMF Buds",
    "iPad Air",
    "Framwork 12",
    "Blahaj",
    "Macbook Air M5",
  ];
  return (
    <div className="relative">
      <div className="z-50 mx-auto flex w-120 flex-col items-center space-y-8">
        {/* Header */}
        <div className="w-full">
          {/* TODO: Change logo */}
          {/* Logo */}
          <h1 className="text-primary text-8xl font-extrabold">Nanoship</h1>
        </div>

        {/* Main Description */}
        <div className="space-y-2 text-lg">
          <p>Design a game in Assembly - git prizes from Hackclub for free</p>
          <p>or any software project that’s hyproptimized.</p>
        </div>

        {/* Registery  */}
        <div className="w-full space-y-2">
          <div className="space-y-1">
            <span className="">Ends in April 31st, 2026</span>
            <HeroEmailRegister />
            <span className="text-muted-foreground text-sm">
              For high schoolers aged 13-18.
            </span>
          </div>
          <div className="flex w-full justify-center">
            <span className="underline">Already have an account? Log in</span>
          </div>
        </div>

        {/* How this works */}
        <div className="w-full space-y-2">
          {/* Header */}
          <div className="flex items-start gap-1 text-lg font-bold">
            {/* TODO: Replace with ASCII arrow art */}
            <span>{">>:"}</span>
            <h1 className="">HOW THIS WORKS?</h1>
          </div>

          <ul className="list-inside list-disc">
            {HOW_IT_WORKS.map((rule) => (
              <li>{rule}</li>
            ))}
          </ul>
        </div>

        {/* Prizes */}
        <div className="flex w-full flex-col gap-5">
          {/* Edges top two */}
          <div className="flex w-full items-center justify-between">
            <img
              src={"/bottom_right_edge.png"}
              className="h-4 w-4 -scale-y-100 rotate-270"
            />

            {/* prizes header */}
            <div className="flex items-center gap-5">
              <img src={"/prizes_line.png"} className="h-1/2 w-16" />
              <h3 className="text-primary text-lg font-bold">PRIZES</h3>
              <img src={"/prizes_line.png"} className="h-1/2 w-16" />
            </div>
            <img
              src={"/bottom_right_edge.png"}
              className="h-4 w-4 -scale-y-100"
            />
          </div>

          {/* Prizes Content */}
          <div className="flex items-center justify-between px-5">
            <ul className="list-inside list-disc">
              {PRIZES.map((prize, i) => {
                return i % 2 == 0 ? (
                  <li className="truncate">{prize}</li>
                ) : (
                  <></>
                );
              })}
            </ul>
            <ul className="list-inside list-disc">
              {PRIZES.map((prize, i) => {
                return i % 2 != 0 ? (
                  <li className="truncate">{prize}</li>
                ) : (
                  <></>
                );
              })}
            </ul>
          </div>
          {/* Edges bottom two */}
          <div className="flex w-full items-center justify-between">
            <img src={"/bottom_right_edge.png"} className="h-4 w-4 rotate-90" />
            <img src={"/bottom_right_edge.png"} className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* bg */}
      <div className="absolute top-0 left-0 z-1 w-full">
        <video autoPlay loop muted className="w-full opacity-7">
          <source src="/bg.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
