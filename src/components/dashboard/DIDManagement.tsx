
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Key, UserCheck, Database, Link, Shield, Check, AlertTriangle, Plus } from 'lucide-react';

const DIDManagement = () => {
  return (
    <Card className="card-panel h-full transition-all duration-300 hover:border-gold/30 hover:shadow-glow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Key className="text-gold h-5 w-5" />
          <CardTitle className="text-2xl font-display">Decentralized Identity</CardTitle>
        </div>
        <p className="text-lg text-foreground/70">
          Manage your blockchain-secured identity and authentication factors
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="bg-navy-light/50 rounded-lg p-4 border border-gold/20 transition-all duration-200 hover:border-gold/30">
          <div className="flex items-center gap-2 mb-3">
            <UserCheck className="text-gold h-4 w-4" />
            <h3 className="text-lg font-medium">Your DID Profile</h3>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground/70">DID Identifier</span>
              <span className="text-sm font-mono">did:ethr:0x71C...93E4</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground/70">Controller</span>
              <span className="text-sm font-mono">0x71C...93E4</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground/70">Created</span>
              <span className="text-sm">March 15, 2023</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium flex items-center gap-1.5">
            <Link className="text-gold h-4 w-4" />
            <span>Authentication Methods</span>
          </h3>
          
          <div className="space-y-2">
            <div className="bg-navy-light/50 rounded-lg p-3 flex items-center justify-between transition-all duration-200 hover:bg-navy-light/80">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-neon-green/10 text-neon-green">
                  <Check size={14} />
                </div>
                <div>
                  <p className="text-sm font-medium">Ethereum Public Key</p>
                  <p className="text-sm text-foreground/50">Primary authentication method</p>
                </div>
              </div>
              <div className="text-sm px-2 py-0.5 rounded-full bg-neon-green/10 text-neon-green">
                Active
              </div>
            </div>
            
            <div className="bg-navy-light/50 rounded-lg p-3 flex items-center justify-between transition-all duration-200 hover:bg-navy-light/80">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-neon-green/10 text-neon-green">
                  <Check size={14} />
                </div>
                <div>
                  <p className="text-sm font-medium">Biometric Authentication</p>
                  <p className="text-sm text-foreground/50">Fingerprint + Face ID</p>
                </div>
              </div>
              <div className="text-sm px-2 py-0.5 rounded-full bg-neon-green/10 text-neon-green">
                Active
              </div>
            </div>
            
            <div className="bg-navy-light/50 rounded-lg p-3 flex items-center justify-between transition-all duration-200 hover:bg-navy-light/80">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-yellow-500/10 text-yellow-500">
                  <AlertTriangle size={14} />
                </div>
                <div>
                  <p className="text-sm font-medium">Recovery Key</p>
                  <p className="text-sm text-foreground/50">Cold storage backup</p>
                </div>
              </div>
              <div className="text-sm px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500">
                Not verified
              </div>
            </div>
            
            <button className="w-full text-lg button-secondary flex items-center justify-center gap-1.5 transition-all duration-300 hover:border-gold/40">
              <Plus size={14} />
              <span>Add Authentication Method</span>
            </button>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium flex items-center gap-1.5">
            <Database className="text-gold h-4 w-4" />
            <span>Verifiable Credentials</span>
          </h3>
          
          <div className="space-y-2">
            <div className="bg-navy-light/50 rounded-lg p-3 transition-all duration-200 hover:bg-navy-light/80">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="text-gold h-4 w-4" />
                <p className="text-lg font-medium">KYC Verification</p>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-foreground/50">Issued by: Veritas Identity</span>
                <span className="text-neon-green">Verified</span>
              </div>
            </div>
            
            <div className="bg-navy-light/50 rounded-lg p-3 transition-all duration-200 hover:bg-navy-light/80">
              <div className="flex items-center gap-2 mb-1">
                <Database className="text-gold h-4 w-4" />
                <p className="text-lg font-medium">Payment Reputation</p>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-foreground/50">Issued by: ChainScore</span>
                <span className="text-neon-green">Excellent (98/100)</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DIDManagement;
