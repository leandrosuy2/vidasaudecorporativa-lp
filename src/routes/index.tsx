import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Pillars } from "@/components/landing/Pillars";
import { ProjectIntegra } from "@/components/landing/ProjectIntegra";
import { Nr1Law } from "@/components/landing/Nr1Law";
import { CultureDiagnostic } from "@/components/landing/CultureDiagnostic";
import { MethodBio } from "@/components/landing/MethodBio";
import { TalytaSignature } from "@/components/landing/TalytaSignature";
import { PartnersCert } from "@/components/landing/PartnersCert";
import { Testimonials } from "@/components/landing/Testimonials";
import { Videos } from "@/components/landing/Videos";
import { SocialProjects } from "@/components/landing/SocialProjects";
import { CtaFinal } from "@/components/landing/CtaFinal";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-dvh bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <Pillars />
      <ProjectIntegra />
      <Nr1Law />
      <CultureDiagnostic />
      <MethodBio />
      <TalytaSignature />
      <PartnersCert />
      <Testimonials />
      <Videos />
      <SocialProjects />
      <CtaFinal />
      <Footer />
    </main>
  );
}
