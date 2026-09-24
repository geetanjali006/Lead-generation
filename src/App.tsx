import React, { useState } from 'react';
import { Language, translations } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DoctorsSection } from './components/DoctorsSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { RegistrationModal } from './components/RegistrationModal';
import { MobileBottomBar } from './components/MobileBottomBar';

export function App() {
  // Default language is set to Telugu ('te')
  const [lang, setLang] = useState<Language>('te');
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState<{
    name: string;
    phone: string;
    slot: string;
    date: string;
    age?: string;
  } | null>(null);

  const t = translations[lang];

  const handleOpenRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const handleBookClick = () => {
    setIsRegistrationModalOpen(true);
  };

  const handleFormSubmit = (data: { name: string; phone: string; slot: string; date: string; age?: string }) => {
    setBookingData(data);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF6FA] text-[#2A102D] font-sans pb-16 lg:pb-0">
      {/* Top Glass Navbar */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        onBookClick={handleBookClick} 
        onOpenRegistrationModal={handleOpenRegistrationModal}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero 
          t={t} 
          onFormSubmit={handleFormSubmit} 
        />

        {/* Doctors Section ("Meet the experts / మా స్పెషలిస్ట్ డాక్టర్స్") */}
        <DoctorsSection 
          t={t} 
          onDoctorClick={handleBookClick} 
        />
      </main>

      {/* Footer with Map & Contact */}
      <Footer 
        t={t} 
        onBookClick={handleBookClick} 
      />

      {/* Registration Popup Modal */}
      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
        onFormSubmit={handleFormSubmit}
        t={t}
      />

      {/* Token Confirmation Modal */}
      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookingData={bookingData}
        t={t}
      />

      {/* Mobile Bottom Action Bar */}
      <MobileBottomBar 
        t={t} 
        onBookClick={handleBookClick} 
      />
    </div>
  );
}

export default App;
