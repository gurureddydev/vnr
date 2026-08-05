import { useState } from 'react';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { NewsTicker } from './components/NewsTicker';
import { Breadcrumb, PageHeaderStrip } from './components/Breadcrumb';
import { ProfileCard } from './components/ProfileCard';
import { CenterColumn } from './components/CenterColumn';
import { RightSidebar } from './components/RightSidebar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="bg-[#dcdcdc] min-h-screen text-[#333333] font-['Open_Sans',Arial,sans-serif] antialiased selection:bg-[#0B8F45] selection:text-white py-0 md:py-3">
        {/* Centered Boxed Site Shell (Matches ysrcongress.com) */}
        <div className="max-w-[1200px] mx-auto bg-white shadow-2xl border-x border-[#cccccc] min-h-screen flex flex-col">
          {/* ─── YSRCP HEADER BANNER ─── */}
          <Header />

          {/* ─── PARTY NAVIGATION STRIP ─── */}
          <NavBar />

          {/* ─── REALTIME NEWS TICKER ─── */}
          <NewsTicker />

          {/* ─── BREADCRUMB ─── */}
          <Breadcrumb />

          {/* ─── PAGE HEADING STRIP ─── */}
          <PageHeaderStrip />

          {/* ─── 3-COLUMN DESKTOP MAIN LAYOUT ─── */}
          <main className="px-3 py-3.5 flex-1">
            <div className="flex flex-col lg:flex-row gap-3.5 items-start">

              {/* LEFT COLUMN: Leader Profile Card */}
              <div className="w-full lg:w-[250px] flex-shrink-0">
                <ProfileCard onContactClick={() => setIsContactOpen(true)} />
              </div>

              {/* CENTER COLUMN: Biography, Timeline, Gallery, Videos, News */}
              <CenterColumn />

              {/* RIGHT COLUMN: Info Cards, Election Details, Positions */}
              <RightSidebar onContactClick={() => setIsContactOpen(true)} />

            </div>
          </main>

          {/* ─── FOOTER ─── */}
          <Footer />
        </div>

        {/* ─── CONTACT OFFICE INTERACTIVE MODAL ─── */}
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
}
