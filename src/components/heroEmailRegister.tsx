"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import axios from "axios";
import { toast } from "sonner";

function HeroEmailRegister() {
  const [email, setEmail] = useState("");
  const handleEmailRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await axios.post("/api/send", { email });
      if (res.data) {
        toast.success("Successfully RSVP'ed", {
          description: "Check your email for more information",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Couldn't RSVP", {
        description: "Pls check your internet connection and try again.",
      });
    }
  };
  return (
    <form
      className="grid w-full grid-cols-12 gap-4"
      onSubmit={handleEmailRegister}
    >
      <Input
        placeholder="dev@email.com"
        className="col-span-8 h-10 rounded-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="border-primary col-span-4 flex h-10 items-center justify-center border-2">
        <Button
          type="submit"
          className="border-bg h-full w-full rounded-none border-2"
        >
          RSVP
        </Button>
      </div>
    </form>
  );
}

export default HeroEmailRegister;
