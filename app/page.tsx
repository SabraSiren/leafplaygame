import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { About } from "@/components/sections/About/About";
import { GamesSection } from "@/components/sections/Games/GamesSection";
import { Contact } from "@/components/sections/Contact/Contact";
import { GAMES } from "@/content/games";
import { SOCIAL_LINKS } from "@/content/socials";
import dividerStyles from "@/styles/divider.module.scss";

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <GamesSection games={GAMES} />
        <hr className={dividerStyles.divider} />
        <About />
        <hr className={dividerStyles.divider} />
        <Contact links={SOCIAL_LINKS} />
      </main>

      <Footer />
    </>
  );
}
