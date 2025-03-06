
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PaymentGateway from '@/components/dashboard/PaymentGateway';

const Payments = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gold animate-fade-in">
          Payment Gateway
        </h1>
        
        <div className="" style={{ animationDelay: "0.1s" }}>
          <PaymentGateway />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Payments;
