"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Image from "next/image";

const cards = [
  "/assets/fool.jpg",
  "/assets/magician.jpeg",
  "/assets/priestess.jpg",
  "/assets/empress.jpg",
  "/assets/emperor.jpg",
  "/assets/hierophant.jpg",
  "/assets/lovers.jpg",
  "/assets/chariot.jpg",
  "/assets/strength.jpg",
  "/assets/hermit.jpg",
  "/assets/wheel-fortune.jpg",
  "/assets/justice.jpg",
  "/assets/hanged-man.jpg",
  "/assets/death.jpg",
  "/assets/temperance1.jpg",
  "/assets/devil.jpg",
  "/assets/tower.jpg",
  "/assets/star.jpg",
  "/assets/moon.jpg",
  "/assets/sun.jpg",
  "/assets/judgment.jpg",
  "/assets/world1.jpg",
  "/assets/cups-page.jpg",
  "/assets/cups-knight.jpg",
  "/assets/cups-queen.jpg",
  "/assets/cups-king.jpg",
  "/assets/swords-page.jpg",
  "/assets/swords-knight.jpg",
  "/assets/swords-queen.jpg",
  "/assets/swords-king.jpg",
  "/assets/pentacles-page.jpg",
  "/assets/pentacles-knight.jpg",
  "/assets/pentacles-queen.jpg",
  "/assets/pentacles-king.jpg",
  "/assets/wands-page.jpg",
  "/assets/wands-knight.jpg",
  "/assets/wands-queen.jpg",
  "/assets/wands-king.jpg",
];

const cardDescriptions = [
  "Your card is: THE FOOL (new beginnings, spontaneity, and a free spirit.)",
  "Your card is: THE MAGICIAN (manifestation, resourcefulness, and inspired action.)",
  "Your card is: THE HIGH PRIESTESS (intuition, sacred knowledge, and divine feminine.)",
  "Your card is: THE EMPRESS (femininity, beauty, nature, and abundance.)",
  "Your card is: THE EMPEROR (authority, empowerment, and structure.)",
  "Your card is: THE HIEROPHANT (spiritual wisdom, religious beliefs, and institutions.)",
  "Your card is: THE LOVERS (love, harmony, relationships, and choices.)",
  "Your card is: THE CHARIOT (control, willpower, success, and determination.)",
  "Your card is: STRENGTH (courage, persuasion, influence, and compassion.)",
  "Your card is: THE HERMIT (soul searching, introspection, and inner guidance.)",
  "Your card is: THE WHEEL OF FORTUNE (good luck, karma, destiny, and a turning point.)",
  "Your card is: JUSTICE (fairness, truth, and law.)",
  "Your card is: THE HANGED MAN (surrender, letting go, and new perspectives.)",
  "Your card is: DEATH (endings, change, transformation, and transitions.)",
  "Your card is: TEMPERANCE (balance, moderation, patience, and purpose.)",
  "Your card is: THE DEVIL (shadow self, attachment, addiction, and sexuality.)",
  "Your card is: THE TOWER (sudden change, upheaval, chaos, and awakening.)",
  "Your card is: THE STAR (hope, faith, purpose, and spirituality.)",
  "Your card is: THE MOON (illusion, fear, anxiety, and intuition.)",
  "Your card is: THE SUN (positivity, warmth, success, and vitality.)",
  "Your card is: JUDGMENT (rebirth, inner calling, and absolution.)",
  "Your card is: THE WORLD (completion, integration, accomplishment, and travel.)",
  "Your card is: THE PAGE OF CUPS (creative opportunities, curiosity, and possibility.)",
  "Your card is: THE KNIGHT OF CUPS (creativity, romance, charm, and imagination.)",
  "Your card is: THE QUEEN OF CUPS (compassionate, caring, and flow.)",
  "Your card is: THE KING OF CUPS (emotional balance, and diplomacy.)",
  "Your card is: THE PAGE OF SWORDS (new ideas, thirst for knowledge, and new ways of communicating.)",
  "Your card is: THE KNIGHT OF SWORDS (action-oriented, driven to succeed, and fast thinking.)",
  "Your card is: THE QUEEN OF SWORDS (independent, unbiased judgement, and clear boundaries.)",
  "Your card is: THE KING OF SWORDS (mental clarity, intellectual clarity, power, and authority.)",
  "Your card is: THE PAGE OF PENTACLES (manifestation, financial opportunity, and skill development.)",
  "Your card is: THE KNIGHT OF PENTACLES (hard work, productivity, and conservatism.)",
  "Your card is: THE QUEEN OF PENTACLES (nurturing, practical, and providing financially.)",
  "Your card is: THE KING OF PENTACLES (wealth, business, leadership, and abundance.)",
  "Your card is: THE PAGE OF WANDS (inspirations, ideas, and free spirit.)",
  "Your card is: THE KNIGHT OF WANDS (energy, passion, adventure, and impulsiveness.)",
  "Your card is: THE QUEEN OF WANDS (courage, confidence, and determination.)",
  "Your card is: THE KING OF WANDS (natural-born leader, vision, and honor.)",
];

export default function Tarot() {
  const [selectedCard, setSelectedCard] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");

  const showRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setSelectedCard(cards[randomIndex]);
    setSelectedDescription(cardDescriptions[randomIndex]);
  };
  return (
    <div className="pb-20">
      <div className="flex flex-col items-center justify-center space-y-8 pt-48">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Choose your zodiac sign
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Click a button to reveal your tarot card.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:grid md:grid-cols-3 md:justify-items-center">

          <Button size="lg" variant="outline" onClick={showRandomCard}>
            <FishSymbolIcon />
            Aries
          </Button>
          <Button size="lg" variant="outline" onClick={showRandomCard}>
            <TurtleIcon />
            Taurus
          </Button>
          <Button size="lg" variant="outline" onClick={showRandomCard}>
            <GemIcon />
            Gemini
          </Button>
          <Button size="lg" variant="outline" onClick={showRandomCard}>
            <RadiationIcon />
            Cancer
          </Button>
          <Button size="lg" variant="outline" onClick={showRandomCard}>
            <LeafIcon />
            Leo
          </Button>
          <Button size="lg" variant="outline" onClick={showRandomCard}>
            <LibraryIcon />
            Virgo
          </Button>
          <Button size="lg" variant="outline" onClick={showRandomCard}>
            <MoonStarIcon />
            Libra
          </Button>
          <Button size="lg" variant="outline" onClick={showRandomCard}>
            <SquirrelIcon />
            Scorpio
          </Button>
          <Button size="lg" variant="outline" onClick={showRandomCard}>
            <StarIcon />
            Sagittarius
          </Button>
          <Button size="lg" variant="outline" onClick={showRandomCard}>
            <SunMoonIcon />
            Capricorn
          </Button>
          <Button size="lg" variant="outline" onClick={showRandomCard}>
            <AquariusIcon />
            Aquarius
          </Button>
          <Button size="lg" variant="outline" onClick={showRandomCard}>
            <PiscesIcon /> Pisces
          </Button>
        </div>
      </div>
      {selectedCard && (
        <div className="flex items-center justify-center w-full pt-16 ">
          <Card className="w-[400px] h-[650px]">
            <CardContent className="flex flex-col justify-center items-center p-8 space-y-4">
              <Image
                alt="Tarot card"
                className="rounded-xl"
                src={selectedCard}
                layout="responsive"
                objectFit="contain"
                width={340}
                height={460}
              />
              <p className="text-center text-lg">{selectedDescription}</p>
            </CardContent>
          </Card>
          </div>
      )}
    </div>
  );
}

function FishSymbolIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 16s9-15 20-4C11 23 2 8 2 8" />
    </svg>
  );
}

function GemIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  );
}

function LeafIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function LibraryIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </svg>
  );
}

function MoonStarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      <path d="M19 3v4" />
      <path d="M21 5h-4" />
    </svg>
  );
}

function RadiationIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12h0" />
      <path d="M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z" />
      <path d="M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z" />
      <path d="M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z" />
    </svg>
  );
}

function SquirrelIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" />
      <path d="M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" />
      <path d="M15.2 22a3 3 0 0 0-2.2-5" />
      <path d="M18 13h.01" />
    </svg>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function SunMoonIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.3 17.7-1.4 1.4" />
      <path d="m19.1 4.9-1.4 1.4" />
    </svg>
  );
}

function TurtleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" />
      <path d="M4.82 7.9 8 10" />
      <path d="M15.18 7.9 12 10" />
      <path d="M16.93 10H20a2 2 0 0 1 0 4H2" />
    </svg>
  );
}

function AquariusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h18m-18 7h18" />
    </svg>
  );
}

function PiscesIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M19 6.992v0a3 3 0 11-5.196-2.35L12 12m0 0l-1.804-7.358v0a3 3 0 10-5.196 2.35v0a3 3 0 005.196 2.35L12 12m0 0l1.804 7.358v0a3 3 0 105.196-2.35v0a3 3 0 00-5.196-2.35L12 12z" />
    </svg>
  );
}
