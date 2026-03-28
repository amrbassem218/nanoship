"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Props = {};

function HeroEmailRegister({}: Props) {
  const handleEmailRegister = () => {};
  return (
    <form
      className="grid w-full grid-cols-12 gap-4"
      onSubmit={() => handleEmailRegister()}
    >
      <Input
        placeholder="dev@email.com"
        className="col-span-8 h-10 rounded-none"
      />
      <div className="border-primary col-span-4 flex h-10 items-center justify-center border-2">
        <Button
          type="submit"
          className="border-bg h-full w-full rounded-none border-2"
        >
          Sign up
        </Button>
      </div>
    </form>
  );
}

export default HeroEmailRegister;
