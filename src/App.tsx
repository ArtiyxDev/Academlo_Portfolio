import { Suspense, useEffect, useState } from 'react';
import Header from './components/Header';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import HomeSection from './components/sections/HomeSection';
import PortfolioSection from './components/sections/portfolio/PortfolioSection';
import PortfolioLoader from './components/portfolio-loader';
import { LanguageProvider } from './i18n';

import './App.css';
import Footer from './components/sections/Footer';
function App() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
   }, []);

   return (
      <LanguageProvider>
         <Suspense
            fallback={<PortfolioLoader variant="detailed" duration={1500} />}
         >
            {loading ? (
               <PortfolioLoader variant="detailed" duration={1500} />
            ) : (
               <>
                  <Header className="sticky top-0 z-20" />
                  <main className="main-content relative z-10 flex min-h-screen w-full items-center justify-center">
                     <div className="flex-col items-center justify-center lg:w-8/12">
                        <HomeSection />
                        <AboutSection />
                        <PortfolioSection />
                        <ContactSection />
                     </div>
                  </main>
                  <Footer />
                  <div className="absolute inset-0 backdrop-blur-[1px]"></div>
               </>
            )}
         </Suspense>
      </LanguageProvider>
   );
}

export default App;
