import Hero from "../components/hero"; 
import Navbar from "../components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="dark min-h-screen flex flex-col items-center justify-center bg-black text-white p-24">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
