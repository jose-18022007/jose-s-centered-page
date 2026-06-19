import { ReactNode } from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";
import { ScrollProgress } from "./ScrollProgress";
import { PageLoader } from "./PageLoader";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <AnnouncementBar />
      <Navbar />
      <main className="pt-10 md:pt-[120px]">{children}</main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
