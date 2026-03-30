import React, { useState } from 'react';

const FounderSection = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Tilt calculation (max 15 degrees)
    const rotateXAttr = ((y - centerY) / centerY) * -15;
    const rotateYAttr = ((x - centerX) / centerX) * 15;
    
    setRotateX(rotateXAttr);
    setRotateY(rotateYAttr);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="mt-40 mb-20 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2 flex justify-center">
        <div 
          className="relative w-full max-w-sm aspect-[3/4] cursor-crosshair group"
          style={{ perspective: 1000 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="w-full h-full rounded shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-surface-container-low transition-transform duration-200 ease-out"
            style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/20 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 border border-secondary/30 scale-95 z-20 pointer-events-none" />
            <img 
              src="/images/fondatrice.jpg" 
              alt="La Fondatrice" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pr-12 text-center md:text-left">
        <span className="font-label uppercase tracking-widest text-[10px] text-secondary mb-4 block">
          L'esprit de la Maison & L'Histoire
        </span>
        <h3 className="font-headline text-4xl md:text-6xl tracking-wide uppercase mb-6 text-primary">
          La Fondatrice
        </h3>
        <div className="w-12 h-[1px] bg-secondary mb-8 mx-auto md:mx-0"></div>
        <p className="text-on-surface-variant font-light text-sm md:text-base leading-relaxed mb-6">
          "Ma vision fondatrice pour DND a toujours été de sublimer la beauté et la puissance naturelles à travers une élégance intemporelle. En tant que femme dirigeante, je m'implique personnellement dans la sélection rigoureuse de chaque pièce, tissant des liens profonds avec les meilleurs artisans et créateurs du monde entier."
        </p>
        <p className="text-on-surface-variant font-light text-sm md:text-base leading-relaxed mb-8">
          "L'audace, couplée à l'authenticité et au luxe sans aucun compromis, constitue notre signature indélébile. Chaque projet présenté ici témoigne d'un parcours exigeant, d'une grande détermination et d'une passion inébranlable pour redessiner l'art de vivre moderne."
        </p>
        <p className="font-headline text-lg italic tracking-wider text-primary">
          — Dorcas Ndundu Diasilua
        </p>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="mt-40 mb-32 relative py-24 flex flex-col items-center justify-center overflow-hidden">
      {/* Premium Background Accents */}
      <div className="absolute inset-0 bg-surface-container-low/30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">
        <span className="font-label uppercase tracking-[0.4em] text-[10px] text-secondary mb-6 block w-full text-center">
          Ligne Directe
        </span>
        <h3 className="font-headline text-5xl md:text-7xl tracking-tighter uppercase mb-16 text-primary text-center">
          Parlons <span className="italic font-light text-secondary">Création.</span>
        </h3>
        
        {/* Modern Icon Dock */}
        <div className="flex gap-4 md:gap-8 items-center bg-white/5 dark:bg-black/20 backdrop-blur-2xl p-4 md:p-6 rounded-full border border-secondary/20 shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
          
          <a href="https://wa.me/243897861013" target="_blank" rel="noreferrer" className="group relative flex justify-center items-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-surface hover:bg-green-600 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(22,163,74,0.3)] border border-secondary/10">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-green-600 dark:text-green-500 group-hover:text-white transition-colors duration-500">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-label text-[9px] uppercase tracking-widest text-primary whitespace-nowrap">
              WhatsApp
            </span>
          </a>

          <div className="w-[1px] h-10 bg-secondary/20 hidden md:block" />

          <a href="https://www.facebook.com/dorcasngungu.diasiluaimer" target="_blank" rel="noreferrer" className="group relative flex justify-center items-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-surface hover:bg-blue-600 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] border border-secondary/10">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-500 group-hover:text-white transition-colors duration-500">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-label text-[9px] uppercase tracking-widest text-primary whitespace-nowrap">
              Facebook
            </span>
          </a>

          <div className="w-[1px] h-10 bg-secondary/20 hidden md:block" />

          <a href="https://www.tiktok.com/@dorcasdiasilua" target="_blank" rel="noreferrer" className="group relative flex justify-center items-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-surface hover:bg-black dark:hover:bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.3)] border border-secondary/10">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500">
              <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.545v-.034h-3.829v14.475a3.275 3.275 0 1 1-3.276-3.276 3.256 3.256 0 0 1 1.282.261V9.583a6.993 6.993 0 1 0 5.823 6.845V8.125a8.47 8.47 0 0 0 3.77 1.2Z" />
            </svg>
            <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-label text-[9px] uppercase tracking-widest text-primary whitespace-nowrap">
              TikTok
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

const TiltCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max 10 degrees tilt
    const rotateXAttr = ((y - centerY) / centerY) * -10;
    const rotateYAttr = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXAttr);
    setRotateY(rotateYAttr);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div 
      className={`relative cursor-crosshair group ${className}`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="w-full h-full transition-transform duration-200 ease-out"
        style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
      >
        {children}
      </div>
    </div>
  );
};

const WelcomeSection = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXAttr = ((y - centerY) / centerY) * -15;
    const rotateYAttr = ((x - centerX) / centerX) * 15;
    
    setRotateX(rotateXAttr);
    setRotateY(rotateYAttr);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-16 mb-24">
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left order-2 md:order-1">
        <span className="font-label uppercase tracking-[0.3em] text-[10px] text-secondary mb-6 block">
          Avant-Propos
        </span>
        <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight text-primary mb-6">
          Bienvenue dans <br />
          <span className="italic font-light text-secondary">mon portfolio.</span>
        </h2>
        <div className="w-16 h-[1px] bg-secondary mb-8 mx-auto md:mx-0"></div>
        <h3 className="font-headline text-2xl tracking-wide text-primary mb-6 uppercase">
          Je suis Dorcas Ndundu Diasilua
        </h3>
        <p className="text-on-surface-variant font-light leading-relaxed text-sm md:text-base md:pr-12 mb-6">
          Je suis profondément ravie de vous accueillir sur ma boutique en ligne officielle. Laissez-vous transporter dans un univers où chaque détail raconte une histoire de passion, d'audace et de raffinement absolu. DND Store n'est pas qu'une simple vitrine, c'est l'incarnation d'un rêve : redéfinir les standards du luxe moderne avec une touche véritablement personnelle et authentique.
        </p>
        <p className="text-on-surface-variant font-light leading-relaxed text-sm md:text-base md:pr-12">
          À travers cet espace, je partage avec vous mes créations exclusives. Que ce soit dans la haute couture, l'horlogerie de maître, les accessoires de prestige ou les perruques haute-gamme, chaque collection est soigneusement étudiée. Vous pouvez commander directement chacune des pièces affichées pour sublimer votre propre style !
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
        <div 
          className="relative w-full max-w-md aspect-[3/4] cursor-crosshair group"
          style={{ perspective: 1000 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="w-full h-full rounded shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-surface-container-low transition-transform duration-200 ease-out"
            style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/20 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 border border-secondary/30 scale-95 z-20 pointer-events-none" />
            <img 
              src="/images/welcome.jpg" 
              alt="Dorcas Ndundu Diasilua - Portfolio" 
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl flex justify-between items-center px-8 py-6">
        <div className="flex items-center gap-4">
          <span
            className="material-symbols-outlined text-black dark:text-white cursor-pointer hover:opacity-70 transition-opacity duration-300"
            onClick={() => setIsDrawerOpen(true)}
          >
            menu
          </span>
        </div>
        <h1 className="text-xl font-headline tracking-[0.3em] text-black dark:text-white uppercase">
          DND STORE
        </h1>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-black dark:text-white cursor-pointer hover:opacity-70 transition-opacity duration-300">
            shopping_bag
          </span>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="pt-32 pb-40 px-6 md:px-20 max-w-[1600px] mx-auto min-h-screen">
        
        <WelcomeSection />

        {/* Category Section */}
        <section className="space-y-32">
          {/* Wigs */}
          <div className="group relative editorial-grid items-center">
            <div className="col-span-12 md:col-span-7 overflow-hidden aspect-[4/5] bg-surface-container-low">
              <img
                className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                src="/images/perruques/votre-perruque.jpg"
                onError={(e) => { e.currentTarget.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuABhekLh6HHOpR1ZnzXQWhZWe9V2F3EDZJAp40tfMegjCnoedf1K_9yEXJ3ij-uA02HbXNiDDa4r_-YSEp7Mh3Rxz-dmV3mOa6PRZyDcgPDn12_GpqrrfRJ_D_0Y8aNP5MN0AOlUpdDbv-iYm3cb2flIzZ5Bl23AoomizvJVYtG07Zfeq9kCZMhpCogLZcaB4aTGOEHjJvLZ8rRSVbaGDj8kVBU8gS8Gz80XNllZuY5BPHtZZ-xgtkfbm6crKcSu5HgPkUEsuslxg0"; }}
                alt="La Collection Couronne"
              />
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
              <div className="w-12 h-[1px] bg-secondary mb-8"></div>
              <span className="font-label uppercase tracking-widest text-xs text-secondary-fixed-dim mb-2 block">
                Chapitre I
              </span>
              <h3 className="font-headline text-4xl mb-4 tracking-wide uppercase">
                La Collection Couronne
              </h3>
              <p className="text-on-surface-variant font-light mb-8 leading-loose text-sm">
                Cheveux vierges impeccables, ventilés à la main, conçus pour une perfection indétectable. Élevez votre aura avec notre art de la dentelle signature.
              </p>
              <a href="https://wa.me/243897861013?text=Bonjour,%20je%20souhaite%20passer%20une%20commande%20pour%20La%20Collection%20Couronne" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-primary text-on-primary font-label text-[10px] tracking-[0.2em] uppercase px-8 py-4 hover:opacity-90 transition-all active:scale-95 duration-200">
                <span className="material-symbols-outlined text-base">chat</span> Passer la commande
              </a>
            </div>
          </div>

          {/* Thin Gold Separation Line */}
          <div className="w-full h-[0.5px] bg-secondary/20"></div>

          {/* Clothing */}
          <div className="group relative flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="w-full md:w-1/2 overflow-hidden aspect-[4/5] bg-surface-container-low">
              <img
                className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                src="/images/habits/votre-habit.jpg"
                onError={(e) => { e.currentTarget.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuAArMgOWYkpkdfAdH0IIJvUs3smU5ZM4u7eh3kkVCRxuKB6cnn4cCkzre4dDbcYy8xPHD3p2ROyddvE2xCb5N1kIFXCXqlrU9vXBFnTDHXWAv1Z4lTVPrZmdVylTXaFQqOhJkUVN_I44DGD1gUH8LhweMEGrrRxpbUpmVWdA5gl-SFz4WWApLoNyDFekXDisPXhZz6EAWDw5ihIGpdSrcg1IfQFcZ7nWrQUXZMw38skMeMq-qoSm0I7j_kn0bqLj7axpj27SDqNFUY"; }}
                alt="Prêt-à-Porter"
              />
            </div>
            <div className="w-full md:w-1/3">
              <div className="w-12 h-[1px] bg-secondary mb-8"></div>
              <span className="font-label uppercase tracking-widest text-xs text-secondary-fixed-dim mb-2 block">
                Chapitre II
              </span>
              <h3 className="font-headline text-4xl mb-4 tracking-wide uppercase">
                Prêt-à-Porter
              </h3>
              <p className="text-on-surface-variant font-light mb-8 leading-loose text-sm">
                Silhouettes architecturales et confection sur mesure. Découvrez l'incarnation du luxe discret à travers nos collections saisonnières en édition limitée.
              </p>
              <a href="https://wa.me/243897861013?text=Bonjour,%20je%20souhaite%20passer%20une%20commande%20pour%20la%20collection%20Prêt-à-Porter" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-primary text-on-primary font-label text-[10px] tracking-[0.2em] uppercase px-8 py-4 hover:opacity-90 transition-all active:scale-95 duration-200">
                <span className="material-symbols-outlined text-base">chat</span> Passer la commande
              </a>
            </div>
          </div>

          {/* Thin Gold Separation Line */}
          <div className="w-full h-[0.5px] bg-secondary/20"></div>

          {/* Bento/Grid Variation for Handbags & Watches */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Handbags */}
            <div className="group flex flex-col">
              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="aspect-square overflow-hidden bg-surface-container-low">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="/images/accessoires/sac_1.png"
                    alt="Cuir Sculpté 1"
                  />
                </div>
                <div className="aspect-square overflow-hidden bg-surface-container-low">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="/images/accessoires/sac_2.png"
                    alt="Cuir Sculpté 2"
                  />
                </div>
              </div>
              <div className="px-2">
                <div className="w-8 h-[1px] bg-secondary mb-6"></div>
                <span className="font-label uppercase tracking-widest text-[10px] text-secondary mb-2 block">
                  Chapitre III
                </span>
                <h3 className="font-headline text-3xl mb-4 tracking-wider uppercase">
                  Cuir Sculpté
                </h3>
                <p className="text-on-surface-variant font-light text-sm leading-relaxed mb-6">
                  Chefs-d'œuvre de l'artisanat italien. Peaux exotiques et quincaillerie raffinée unies dans une élégance structurée et intemporelle.
                </p>
                <a
                  className="inline-flex items-center gap-2 text-[10px] font-label uppercase tracking-widest border-b border-primary/20 pb-1 hover:border-primary transition-colors text-primary"
                  href="https://wa.me/243897861013?text=Bonjour,%20je%20souhaite%20commander%20un%20sac%20en%20cuir"
                  target="_blank" rel="noreferrer"
                >
                  <span className="material-symbols-outlined text-sm">chat</span> Commander sur WhatsApp
                </a>
              </div>
            </div>

            {/* Watches */}
            <div className="group flex flex-col pt-16 md:pt-32">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                <div className="aspect-square overflow-hidden bg-surface-container-low">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="/images/accessoires/montre_1.png"
                    alt="Haute Horlogerie 1"
                  />
                </div>
                <div className="aspect-square overflow-hidden bg-surface-container-low">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="/images/accessoires/montre_2.png"
                    alt="Haute Horlogerie 2"
                  />
                </div>
                <div className="aspect-square overflow-hidden bg-surface-container-low">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="/images/accessoires/montre_3.png"
                    alt="Haute Horlogerie 3"
                  />
                </div>
              </div>
              <div className="px-2">
                <div className="w-8 h-[1px] bg-secondary mb-6"></div>
                <span className="font-label uppercase tracking-widest text-[10px] text-secondary mb-2 block">
                  Chapitre IV
                </span>
                <h3 className="font-headline text-3xl mb-4 tracking-wider uppercase">
                  Haute Horlogerie
                </h3>
                <p className="text-on-surface-variant font-light text-sm leading-relaxed mb-6">
                  L'ingénierie de précision rencontre le design opulent. Des montres d'investissement qui forcent l'admiration et traversent les générations.
                </p>
                <a
                  className="inline-flex items-center gap-2 text-[10px] font-label uppercase tracking-widest border-b border-primary/20 pb-1 hover:border-primary transition-colors text-primary"
                  href="https://wa.me/243897861013?text=Bonjour,%20je%20souhaite%20commander%20une%20montre"
                  target="_blank" rel="noreferrer"
                >
                  <span className="material-symbols-outlined text-sm">chat</span> Commander sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <FounderSection />

        {/* Nouvelle Collection Perruques */}
        <section className="mt-32 pt-16 border-t border-secondary/10">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="font-label uppercase tracking-widest text-xs text-secondary mb-4 block">
              Créations Exclusives
            </span>
            <h3 className="font-headline text-4xl tracking-wide uppercase">
              Nos Perruques Signatures
            </h3>
            <div className="w-12 h-[1px] bg-secondary mt-8"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { id: 1, title: "Carré Ombré Rubis", desc: "Coupe au carré lisse avec racines sombres" },
              { id: 2, title: "Trio Boucles Rétro", desc: "Ondulations courtes et élégantes" },
              { id: 3, title: "Ondes Volumineuses", desc: "Longueurs noires aux vagues profondes" },
              { id: 4, title: "Lisse Signature", desc: "Longueurs lisses et soyeuses" },
              { id: 5, title: "Lisse Naturel", desc: "Finition ultra-réaliste et éclatante" },
              { id: 6, title: "Pixie Cranté", desc: "Coupe courte texturée avec baby hairs" }
            ].map((item) => (
              <TiltCard key={item.id}>
                <div className="aspect-[4/5] overflow-hidden bg-surface-container-low mb-6 rounded shadow-sm group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                  <img
                    src={`/images/perruques/new-${item.id}.jpg`}
                    onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop"; }}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-headline text-lg uppercase tracking-wider mb-2">{item.title}</h4>
                  <p className="text-on-surface-variant font-light text-xs mb-4">{item.desc}</p>
                  <a href={`https://wa.me/243897861013?text=Bonjour,%20je%20suis%20intéressé(e)%20par%20la%20perruque%20${encodeURIComponent(item.title)}`} target="_blank" rel="noreferrer" className="font-label text-[10px] text-primary tracking-widest uppercase border-b border-transparent group-hover:border-primary inline-block pb-1 transition-all">Commander Directement</a>
                </div>
              </TiltCard>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a href="https://wa.me/243897861013?text=Bonjour,%20je%20souhaite%20passer%20une%20commande%20pour%20une%20de%20vos%20perruques!" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-primary text-primary font-label text-[10px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-primary hover:text-on-primary transition-all active:scale-95 duration-200">
              <span className="material-symbols-outlined text-base">chat</span> Commander sur WhatsApp
            </a>
          </div>
        </section>

        {/* Nouvelle Collection Prêt-à-Porter */}
        <section className="mt-32 pt-16 border-t border-secondary/10">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="font-label uppercase tracking-widest text-xs text-secondary mb-4 block">
              Style & Allure
            </span>
            <h3 className="font-headline text-4xl tracking-wide uppercase">
              Prêt-à-Porter : L'Élégance au Quotidien
            </h3>
            <div className="w-12 h-[1px] bg-secondary mt-8"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { id: 1, title: "Ensemble Safari Cuivré", desc: "Chemise et pantalon en lin texturé" },
              { id: 2, title: "Veste Saharienne Blanche", desc: "Coupe structurée avec poches plaquées" },
              { id: 3, title: "Chemises Rayées ZARA", desc: "Lot de chemises classiques rayées" },
              { id: 4, title: "Jeans Denim Brut", desc: "Coupe droite avec détails usés" },
              { id: 5, title: "Chemisier Nœuds Bleus", desc: "Rayures avec détails de nœuds contrastants" },
              { id: 6, title: "Costumes Safari Enfants", desc: "Ensembles élégants pour garçons" },
              { id: 7, title: "Chemisier Nœuds Porté", desc: "Coupe asymétrique et élégante" },
              { id: 8, title: "Ensemble Cœur Signature", desc: "T-shirts et casquettes assortis" },
              { id: 9, title: "Polos Zippés Texturés", desc: "Maille structurée avec col zippé" }
            ].map((item) => (
              <TiltCard key={item.id}>
                <div className="aspect-[3/4] overflow-hidden bg-surface-container-low mb-6 rounded shadow-sm group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                  <img
                    src={`/images/habits/new-${item.id}.jpg`}
                    onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop"; }}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-headline text-sm uppercase tracking-wider mb-2">{item.title}</h4>
                  <p className="text-on-surface-variant font-light text-[10px] mb-4">{item.desc}</p>
                  <a href={`https://wa.me/243897861013?text=Bonjour,%20je%20suis%20intéressé(e)%20par%20la%20pièce%20${encodeURIComponent(item.title)}`} target="_blank" rel="noreferrer" className="font-label text-[10px] text-primary tracking-widest uppercase border-b border-transparent group-hover:border-primary inline-block pb-1 transition-all">Commander Directement</a>
                </div>
              </TiltCard>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a href="https://wa.me/243897861013?text=Bonjour,%20je%20souhaite%20commander%20un%20vêtement!" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-primary text-primary font-label text-[10px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-primary hover:text-on-primary transition-all active:scale-95 duration-200">
              <span className="material-symbols-outlined text-base">chat</span> Commander sur WhatsApp
            </a>
          </div>
        </section>

        <ContactSection />

        {/* Signature Quote Section */}
        <section className="mt-40 text-center max-w-2xl mx-auto py-24 border-t border-secondary/10">
          <span className="material-symbols-outlined text-secondary text-4xl mb-8">
            auto_awesome
          </span>
          <p className="font-headline text-2xl italic font-light leading-relaxed text-on-surface">
            "Le vrai luxe murmure. Il se ressent dans le poids de la soie, la précision de la coupe et la confiance de celui qui le porte."
          </p>
          <div className="mt-8 font-label uppercase tracking-[0.3em] text-[10px] text-on-surface-variant">
            BOUTIQUE DND • FONDÉ EN MMXXIV
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-6 pb-8 pt-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl z-50">
        <div className="flex items-center justify-center text-black dark:text-white opacity-40 hover:opacity-100 transition-all cursor-pointer">
          <span className="material-symbols-outlined">home</span>
        </div>
        <div className="flex items-center justify-center text-yellow-600 dark:text-yellow-500 scale-110 transition-all cursor-pointer">
          <span className="material-symbols-outlined">search</span>
        </div>
        <div className="flex items-center justify-center text-black dark:text-white opacity-40 hover:opacity-100 transition-all cursor-pointer">
          <span className="material-symbols-outlined">favorite</span>
        </div>
        <div className="flex items-center justify-center text-black dark:text-white opacity-40 hover:opacity-100 transition-all cursor-pointer">
          <span className="material-symbols-outlined">person</span>
        </div>
      </nav>

      {/* Navigation Drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-500 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
        <aside
          className={`absolute left-0 top-0 h-full w-80 bg-white dark:bg-black shadow-[40px_0_80px_rgba(0,0,0,0.05)] p-12 flex flex-col space-y-8 transition-transform duration-500 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-headline tracking-widest text-black dark:text-white uppercase">
              DND STORE
            </h2>
            <span
              className="material-symbols-outlined cursor-pointer text-black dark:text-white"
              onClick={() => setIsDrawerOpen(false)}
            >
              close
            </span>
          </div>
          <div className="space-y-6">
            <a
              className="flex items-center gap-4 text-black dark:text-white opacity-60 hover:opacity-100 hover:translate-x-2 transition-all duration-500 font-headline font-light tracking-[0.15em] text-lg"
              href="#"
            >
              <span className="material-symbols-outlined">auto_awesome</span> COLLECTIONS
            </a>
            <a
              className="flex items-center gap-4 text-yellow-600 font-medium border-b border-yellow-600/20 pb-2 transition-all font-headline tracking-[0.15em] text-lg"
              href="#"
            >
              <span className="material-symbols-outlined">face</span> LA COLLECTION COURONNE
            </a>
            <a
              className="flex items-center gap-4 text-black dark:text-white opacity-60 hover:opacity-100 hover:translate-x-2 transition-all duration-500 font-headline font-light tracking-[0.15em] text-lg"
              href="#"
            >
              <span className="material-symbols-outlined">checkroom</span> PRÊT-À-PORTER
            </a>
            <a
              className="flex items-center gap-4 text-black dark:text-white opacity-60 hover:opacity-100 hover:translate-x-2 transition-all duration-500 font-headline font-light tracking-[0.15em] text-lg"
              href="#"
            >
              <span className="material-symbols-outlined">work</span> CUIR SCULPTÉ
            </a>
            <a
              className="flex items-center gap-4 text-black dark:text-white opacity-60 hover:opacity-100 hover:translate-x-2 transition-all duration-500 font-headline font-light tracking-[0.15em] text-lg"
              href="#"
            >
              <span className="material-symbols-outlined">watch</span> HAUTE HORLOGERIE
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
