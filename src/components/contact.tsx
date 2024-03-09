import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-black flex justify-center items-center min-h-screen"> {/* Ensures the card is centered both vertically and horizontally in the viewport */}
      <Card className="bg-black w-full max-w-sm mx-auto pt-4"> {/* mx-auto centers the card horizontally */}
        <CardHeader>
          <CardTitle>Contact</CardTitle>
          <CardDescription>Reach out to us if you have any questions or feedback. PS: We&apos;re really bad at checking socials.</CardDescription>
        </CardHeader>
        <CardContent className=" flex flex-col items-center gap-4">
          <Image
            alt="Avatar"
            className="rounded-full"
            height={80}
            src="/s0undw1tch.png"
            layout="fixed"
            objectFit="cover"
            width={80}
          />
          <div className="text-center">
            <p>
              You can reach out to us on Twitter. 
              
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center"> {/* Flex container to center the button */}
          <a href="https://twitter.com/witchaudio_" target="_blank" rel="noopener noreferrer">
            <Button className="w-full justify-center" variant="outline">
              Message @witchaudio
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
