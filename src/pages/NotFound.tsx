
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full"></div>
      
      <div className="glassmorphic border border-white/10 p-8 rounded-xl max-w-md text-center relative z-10">
        <div className="w-16 h-16 rounded-full bg-navy-light flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="h-8 w-8 text-gold" />
        </div>
        
        <h1 className="text-6xl font-display font-bold text-gold mb-2">404</h1>
        <p className="text-xl font-medium mb-6">Security Breach Detected</p>
        <p className="text-foreground/70 mb-8">
          Our AI security system has detected an unauthorized access attempt. 
          The page you're looking for doesn't exist or has been secured.
        </p>
        
        <Link 
          to="/" 
          className="button-primary inline-flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          <span>Return to Secure Dashboard</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
