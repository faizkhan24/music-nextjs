import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonial from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased  ">
   <HeroSection/>
   <FeaturedCourses/>
   <WhyChooseUs/>
   <MusicSchoolTestimonial/>
   <UpcomingWebinars/>
   <Instructors/>
   
    </main>
  );
   
}
