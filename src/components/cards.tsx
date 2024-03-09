'use client'
import { useState } from 'react';
import {
  HoverCardTrigger,
  HoverCardContent,
  HoverCard,
} from "@/components/ui/hover-card";
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
  
];

const cardDescriptions = [
  "THE FOOL (new beginnings, spontaneity, and a free spirit.)",
  "THE MAGICIAN (manifestation, resourcefulness, and inspired action.)",
  "THE HIGH PRIESTESS (intuition, sacred knowledge, and divine feminine.)",
  "THE EMPRESS (femininity, beauty, nature, and abundance.)",
  "THE EMPEROR (authority, empowerment, and structure.)",
  "THE HIEROPHANT (spiritual wisdom, religious beliefs, and institutions.)",
  "THE LOVERS (love, harmony, relationships, and choices.)",
  "THE CHARIOT (control, willpower, success, and determination.)",
  "STRENGTH (courage, persuasion, influence, and compassion.)",
  "THE HERMIT (soul searching, introspection, and inner guidance.)",
  "THE WHEEL OF FORTUNE (good luck, karma, destiny, and a turning point.)",
  "JUSTICE (fairness, truth, and law.)",
  "THE HANGED MAN (surrender, letting go, and new perspectives.)",
  "DEATH (endings, change, transformation, and transitions.)",
  "TEMPERANCE (balance, moderation, patience, and purpose.)",
  "THE DEVIL (shadow self, attachment, addiction, and sexuality.)",
  "THE TOWER (sudden change, upheaval, chaos, and awakening.)",
  "THE STAR (hope, faith, purpose, and spirituality.)",
  "THE MOON (illusion, fear, anxiety, and intuition.)",
  "THE SUN (positivity, warmth, success, and vitality.)",
  "JUDGMENT (rebirth, inner calling, and absolution.)",
  "THE WORLD (completion, integration, accomplishment, and travel.)",
  
];

export default function Cards() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index:any) => {
    setSelectedCard(index === selectedCard ? null : index); // Toggle the selected card
  };
  
  return (
    <div className="grid w-full gap-10 gap-y-0 pt-48 px-4 sm:px-4 md:px-8 lg:px-10 xl:px-20 md:grid-cols-3 lg:grid-cols-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Click on a card to reveal its meaning.
        </h2>
      </div>
      {cards.map((card, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-card aspect-[1/2] sm:aspect-[2/3] md:aspect-[2/5]" onClick={() => handleCardClick(index)}>
          <Image
            alt={`Card ${index}`}
            className="object-cover w-full h-full"
            src={card}
            layout="responsive"
            width={160}
            height={320}
          />
          {selectedCard === index && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-2">
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {cardDescriptions[index]}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

