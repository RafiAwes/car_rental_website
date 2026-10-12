import React from 'react';
import { AppProvider } from './providers';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FleetModal } from '../components/FleetModal';
import { ConciergeDrawer } from '../components/ConciergeDrawer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-[#12100e] text-[#f4efe6]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FleetModal />
        <ConciergeDrawer />
        <FloatingWhatsApp />
      </div>
    </AppProvider>
  );
};

export default Layout;
