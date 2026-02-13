import dynamic from "next/dynamic";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { GamesSection } from "@/components/sections/Games/GamesSection";
import { GAMES } from "@/content/games";
import { SOCIAL_LINKS } from "@/content/socials";
import dividerStyles from "@/styles/divider.module.scss";

const About = dynamic(() =>
  import("@/components/sections/About/About").then((m) => ({ default: m.About }))
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact/Contact").then((m) => ({
    default: m.Contact,
  }))
);

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
