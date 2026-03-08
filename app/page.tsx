import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { AudioPreview } from "@/components/AudioPreview";
import { CourseModules } from "@/components/CourseModules";
import { Testimonials } from "@/components/Testimonials";
import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <AudioPreview />
      <CourseModules />
      <Testimonials />
      <LeadForm />
    </main>
  );
}
