import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { NewsTicker } from './components/NewsTicker';
import { PageHeaderStrip } from './components/Breadcrumb';
import { ProfileCard } from './components/ProfileCard';
import { CenterColumn } from './components/CenterColumn';
import { RightSidebar } from './components/RightSidebar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { LanguageProvider } from './context/LanguageContext';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { Sitemap } from './pages/Sitemap';

type PageRoute = 'home' | 'privacy' | 'terms' | 'sitemap';

const mapAnchorToTab = (anchor?: string): string => {
  if (!anchor) return 'aboutLeader';
  switch (anchor.toLowerCase()) {
    case 'about': return 'aboutLeader';
    case 'career': return 'politicalCareer';
    case 'philanthropy': return 'philanthropy';
    case 'constituency': return 'constituency';
    case 'ysrschemes': return 'ysrSchemes';
    case 'gallery': return 'photoGallery';
    case 'videos': return 'videosMedia';
    case 'news': return 'inTheNews';
    default: return 'aboutLeader';
  }
};

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [activeTab, setActiveTab] = useState<string>('aboutLeader');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy') setCurrentPage('privacy');
      else if (hash === '#terms') setCurrentPage('terms');
      else if (hash === '#sitemap') setCurrentPage('sitemap');
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  const handleNavigateHome = (anchor?: string) => {
    setCurrentPage('home');
    window.location.hash = '';
    const tab = mapAnchorToTab(anchor);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="bg-[#dcdcdc] min-h-screen text-[#333333] font-['Open_Sans',Arial,sans-serif] antialiased selection:bg-[#0B8F45] selection:text-white py-0 md:py-3">
        {/* Centered Boxed Site Shell (Matches ysrcongress.com) */}
        <div className="max-w-[1200px] mx-auto bg-white shadow-2xl border-x border-[#cccccc] min-h-screen flex flex-col">
          {/* ─── YSRCP HEADER BANNER ─── */}
          <Header />

          {/* ─── PARTY NAVIGATION STRIP ─── */}
          <NavBar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            onNavigateHome={handleNavigateHome} 
            currentPage={currentPage} 
          />

          {/* ─── REALTIME NEWS TICKER ─── */}
          <NewsTicker />

          {currentPage === 'home' && (
            <>
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
                  <CenterColumn activeTab={activeTab} />

                  {/* RIGHT COLUMN: Info Cards, Election Details, Positions */}
                  <RightSidebar onContactClick={() => setIsContactOpen(true)} />
                </div>
              </main>
            </>
          )}

          {currentPage === 'privacy' && (
            <PrivacyPolicy onNavigateHome={() => navigateTo('home')} />
          )}

          {currentPage === 'terms' && (
            <TermsOfUse onNavigateHome={() => navigateTo('home')} />
          )}

          {currentPage === 'sitemap' && (
            <Sitemap
              onNavigateHome={handleNavigateHome}
              onNavigatePage={(page) => navigateTo(page)}
              onOpenContact={() => setIsContactOpen(true)}
            />
          )}

          {/* ─── FOOTER ─── */}
          <Footer onNavigatePage={(page) => navigateTo(page)} />
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
