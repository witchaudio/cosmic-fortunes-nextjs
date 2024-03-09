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
  "THE PAGE OF CUPS (creative opportunities, curiosity, and possibility.)",
  "THE KNIGHT OF CUPS (creativity, romance, charm, and imagination.)",
  "THE QUEEN OF CUPS (compassionate, caring, and flow.)",
  "THE KING OF CUPS (emotional balance, and diplomacy.)",
  "THE PAGE OF SWORDS (new ideas, thirst for knowledge, and new ways of communicating.)",
  "THE KNIGHT OF SWORDS (action-oriented, driven to succeed, and fast thinking.)",
  "THE QUEEN OF SWORDS (independent, unbiased judgement, and clear boundaries.)",
  "THE KING OF SWORDS (mental clarity, intellectual clarity, power, and authority.)",
  "THE PAGE OF PENTACLES (manifestation, financial opportunity, and skill development.)",
  "THE KNIGHT OF PENTACLES (hard work, productivity, and conservatism.)",
  "THE QUEEN OF PENTACLES (nurturing, practical, and providing financially.)",
  "THE KING OF PENTACLES (wealth, business, leadership, and abundance.)",
  "THE PAGE OF WANDS (inspirations, ideas, and free spirit.)",
  "THE KNIGHT OF WANDS (energy, passion, adventure, and impulsiveness.)",
  "THE QUEEN OF WANDS (courage, confidence, and determination.)",
  "THE KING OF WANDS (natural-born leader, vision, and honor.)",
];

export default function Cards() {
  return (
    <div className="grid w-full gap-10 gap-y-0 pt-48 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 md:grid-cols-3 lg:grid-cols-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Hover over a card to reveal your its meaning.
        </h2>
      </div>
      {cards.map((card, index) => (
        <HoverCard key={index}>
          <div className="relative aspect-[2/5] overflow-hidden rounded-lg shadow-card">
            <HoverCardTrigger asChild>
              <Image
                alt={`Card ${index}`}
                className="object-cover w-full h-full"
                height={450}
                src={card}
                layout="responsive"
                objectFit="cover"
                width={200}
              />
            </HoverCardTrigger>
            <HoverCardContent className=" bg-white ">
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {cardDescriptions[index]}
              </p>
            </HoverCardContent>
          </div>
        </HoverCard>
      ))}
    </div>
  );
}
