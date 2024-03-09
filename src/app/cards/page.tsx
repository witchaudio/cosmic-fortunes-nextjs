// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Cards from "@/components/cards";

export default function Page() {
    return (
        <div>
            <Navbar />
            <Cards />
            <Footer />
        </div>
    );
}
