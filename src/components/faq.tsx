"use client";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "./ui/collapsible";

type Props = {};

function Faq({}: Props) {
  const FAQ = [
    {
      question: "How are coins calculated?",
      answer:
        "After submitting. Your project gets voted on by 10 other hackers. After getting your vote rate with Elo-based approach. It’s divided by the KB size of your program. I.e. If you get a 9.8 rate and your app is 1.4 KBs. Then your final rate is 7. For each rate point you get 10 coins. so 70 coins!",
    },
    {
      question: "How much is a coin worth?",
      answer:
        "Each accepted hour is worth 10 coins. You can exchange those coins around ~$5 per 10 coins",
    },
    {
      question: "I don’t know software, can I still try",
      answer:
        "Of course. Hackclub is setup for teenagers of all skill levels. You are absolutely welcome if you're a total beginner or a rust veteran.",
    },
    {
      question: "Wait, What’s the point?",
      answer:
        "Develoeprs just neglect optimizations nowadays. Even frown upon micro optimizations (unless Linus Torvalds is the one doing it). So in this ysws, we bring back this notion of micro optimization where you will learn WAY more than building an extra feature",
    },
    {
      question: "I have more questions",
      answer:
        "Absolutely, just RSVP for now and join #nanoship channel. You can ask your questions there",
    },
  ];
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-start gap-1 text-lg font-bold">
        {/* TODO: Replace with ASCII arrow art */}
        <span>{">>:"}</span>
        <h1 className="">FAQ</h1>
      </div>
      {FAQ.map((ques, i) => (
        <Collapsible key={i}>
          <CollapsibleTrigger>{ques.question}</CollapsibleTrigger>
          <CollapsibleContent>{ques.answer}</CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}

export default Faq;
