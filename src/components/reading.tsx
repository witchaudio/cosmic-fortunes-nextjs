"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CardContent, Card } from "@/components/ui/card";

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
  "PAGE OF CUPS (creative opportunities, curiosity, and possibility.)",
  "KNIGHT OF CUPS (creativity, romance, charm, and imagination.)",
  "QUEEN OF CUPS (compassionate, caring, and flow.)",
  "KING OF CUPS (emotional balance and diplomacy.)",
  "PAGE OF SWORDS (new ideas, thirst for knowledge, and new ways of communicating.)",
  "KNIGHT OF SWORDS (action-oriented, driven to succeed, and fast thinking.)",
  "QUEEN OF SWORDS (independent, unbiased judgment, and clear boundaries.)",
  "KING OF SWORDS (mental clarity, intellectual clarity, power, and authority.)",
  "PAGE OF PENTACLES (manifestation, financial opportunity, and skill development.)",
  "KNIGHT OF PENTACLES (hard work, productivity, and conservatism.)",
  "QUEEN OF PENTACLES (nurturing, practical, and providing financially.)",
  "KING OF PENTACLES (wealth, business, leadership, and abundance.)",
  "PAGE OF WANDS (inspiration, ideas, and free spirit.)",
  "KNIGHT OF WANDS (energy, passion, adventure, and impulsiveness.)",
  "QUEEN OF WANDS (courage, confidence, and determination.)",
  "KING OF WANDS (natural-born leader, vision, and honor.)",
];

export default function Reading() {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [selectedDescriptions, setSelectedDescriptions] = useState<string[]>(
    []
  );
  const [showCards, setShowCards] = useState(false);

  const getRandomCards = () => {
    const shuffledIndices = Array.from(cards.keys()).sort(
      () => 0.5 - Math.random()
    );
    const selectedIndices = shuffledIndices.slice(0, 3);
    setSelectedCards(selectedIndices.map((index) => cards[index]));
    setSelectedDescriptions(
      selectedIndices.map((index) => cardDescriptions[index])
    );
    setShowCards(true);
  };

  return (
    <div className="px-4 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Get a Full Tarot Reading
        </h1>
        <p className="text-2xl mx-auto text-gray-600 dark:text-gray-400">
          Seek your future with virtual tarot cards
        </p>
      </div>
      <div className="max-w-lg mx-auto space-y-6 mb-8">
        <Input
          className="w-full"
          id="question"
          placeholder="What do I need to know today?"
          type="text"
        />
        <Button
          className="w-full bg-black text-white border-2 border-gray hover:border-white p-2 transition duration-300 ease-in-out"
          onClick={getRandomCards}
        >
          Show Me My Cards
        </Button>
      </div>
      {showCards && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto px-4 pb-10">
            {selectedCards.map((card, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800"
                style={{ width: "240px", height: "350px" }}
              >
                <Image
                  alt={`Card ${index + 1}`}
                  src={card}
                  layout="responsive"
                  width={240}
                  height={650}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>

          <Card className="max-w-lg mx-auto">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4">Reading Overview</h2>
              <div className="text-gray-500">
                <p>
                  <strong>1. Past:</strong> {selectedDescriptions[0]}
                </p>
                <p>
                  <strong>2. Present:</strong> {selectedDescriptions[1]}
                </p>
                <p>
                  <strong>3. Future:</strong> {selectedDescriptions[2]}
                </p>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
