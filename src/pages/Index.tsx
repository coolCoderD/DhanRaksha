
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Shield, Wallet, Database, FileText, Fingerprint, Lock } from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: "Authentication",
      description: "AI-powered biometric and behavioral authentication",
      icon: Fingerprint,
      path: "/authentication",
      color: "bg-purple-500/10",
      textColor: "text-purple-400"
    },
    {
      title: "Security Dashboard",
      description: "Real-time fraud detection and risk analysis",
      icon: Shield,
      path: "/security",
      color: "bg-neon-green/10",
      textColor: "text-neon-green"
    },
    {
      title: "Payment Gateway",
      description: "Blockchain-powered secure transactions",
      icon: Wallet,
      path: "/payments",
      color: "bg-gold/10",
      textColor: "text-gold"
    },
    {
      title: "Transaction History",
      description: "Immutable on-chain transaction records",
      icon: FileText,
      path: "/transactions",
      color: "bg-blue-500/10",
      textColor: "text-blue-400"
    },
    {
      title: "Decentralized Identity",
      description: "Manage blockchain-backed identity credentials",
      icon: Fingerprint,
      path: "/identity",
      color: "bg-red-500/10",
      textColor: "text-red-400"
    },
    {
      title: "Encrypted Storage",
      description: "IPFS/Arweave-powered secure document vault",
      icon: Lock,
      path: "/storage",
      color: "bg-cyan-500/10",
      textColor: "text-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gold">
          DhanRaksha
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
            AI-Powered decentralized financial security and management platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Link 
              to={feature.path} 
              key={index}
              className="card-panel h-full flex flex-col transition-all duration-300 hover:border-gold/30 hover:shadow-glow-sm"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-3 rounded-full ${feature.color} ${feature.textColor}`}>
                  <feature.icon size={24} />
                </div>
                <h2 className="text-xl font-display font-semibold">{feature.title}</h2>
              </div>
              
              <p className="text-foreground/70 mb-6">{feature.description}</p>
              
              <div className="mt-auto text-gold text-sm flex items-center">
                <span>Explore</span>
                <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
