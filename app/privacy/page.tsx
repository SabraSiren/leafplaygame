import type { Metadata } from "next";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { Container } from "@/components/layout/Container/Container";
import { PrivacyContent } from "@/components/sections/Privacy/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main>
        <Container>
          <PrivacyContent />
        </Container>
      </main>

      <Footer />
    </>
  );
}
