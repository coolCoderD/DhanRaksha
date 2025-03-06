
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Fingerprint, Scan, Shield, Smartphone, Key, Eye, Lock } from 'lucide-react';

const AuthPanel = () => {
  const [authMethod, setAuthMethod] = useState('biometric');
  const [processingAuth, setProcessingAuth] = useState(false);
  
  const handleAuthRequest = () => {
    setProcessingAuth(true);
    // Simulate authentication process
    setTimeout(() => {
      setProcessingAuth(false);
    }, 2000);
  };

  return (
    <Card className="card-panel h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Shield className="text-gold h-5 w-5" />
          <CardTitle className="text-2xl font-display">Secure Authentication</CardTitle>
        </div>
        <CardDescription className="text-xl text-foreground/70">
          Multi-factor biometric authentication with AI behavioral analysis
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="biometric" className="w-full " onValueChange={setAuthMethod}>
          <TabsList className="grid grid-cols-3  mb-4" >
            <TabsTrigger value="biometric" className="data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold text-lg ">
              <Fingerprint className="h-4 w-4 mr-2" />
              <span>Biometric</span>
            </TabsTrigger>
            <TabsTrigger value="device" className="data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold text-lg">
              <Smartphone className="h-4 w-4 mr-2" />
              <span>Device</span>
            </TabsTrigger>
            <TabsTrigger value="web3" className="data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold text-lg">
              <Key className="h-4 w-4 mr-2" />
              <span>Web3</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="biometric" className="mt-0 space-y-4">
            <div className={`rounded-xl border border-gold/20 bg-navy-light/50 h-[30rem] w-full flex flex-col items-center justify-center ${processingAuth ? 'animate-pulse' : ''}`}>
              {authMethod === 'biometric' && (
                <>
                  <Scan className="h-12 w-12 text-gold mb-3" />
                  <p className="text-lg text-center px-4">
                    {processingAuth ? 'Analyzing biometric patterns...' : 'Position your face in the frame or place your finger on the sensor'}
                  </p>
                  
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={handleAuthRequest}
                      className="button-primary flex items-center gap-1 text-lg"
                      disabled={processingAuth}
                    >
                      <Fingerprint size={14} />
                      <span>Authenticate</span>
                    </button>
                  </div>
                </>
              )}
            </div>
            
            <div className="bg-navy-light/30 rounded-lg p-3">
              <h4 className="text-lg font-medium flex items-center gap-1">
                <Eye size={15} className="text-gold" />
                <span>Behavioral Authentication</span>
              </h4>
              <p className="text-sm text-foreground/70 mt-1">
                AI is analyzing your typing patterns and device interaction for additional security verification
              </p>
              <div className="h-1 w-full bg-navy mt-2 rounded-full overflow-hidden">
                <div className="h-full bg-gold w-3/4 rounded-full"></div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="device" className="mt-0 space-y-4">
            <div className="rounded-xl border border-gold/20 bg-navy-light/50 p-4">
              <h4 className="text-lg font-medium mb-3">Trusted Device Authentication</h4>
              <p className="text-sm text-foreground/70 mb-4">
                Verify your identity using a trusted device in proximity
              </p>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between bg-navy-dark/80 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <Smartphone size={18} className="text-gold" />
                    <span className="text-lg">iPhone 14 Pro</span>
                  </div>
                  <span className="text-sm px-2 py-1 bg-neon-green/10 text-neon-green rounded-full">Connected</span>
                </div>
                <div className="flex items-center justify-between bg-navy-dark/80 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <Smartphone size={18} />
                    <span className="text-lg">MacBook Pro</span>
                  </div>
                  <span className="text-sm px-2 py-1 bg-foreground/10 text-foreground/50 rounded-full">Not in range</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="web3" className="mt-0 space-y-4">
            <div className="rounded-xl border border-gold/20 bg-navy-light/50 p-4">
              <h4 className="text-lg font-medium mb-3">Web3 Authentication</h4>
              <p className="text-sm text-foreground/70 mb-4">
                Connect your wallet or use decentralized one-time password
              </p>
              <div className="space-y-3">
                <button className="w-full button-secondary flex items-center justify-center gap-2 py-3">
                  <svg className="h-4 w-4" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.9582 1L19.8241 10.7183L22.2665 5.09088L32.9582 1Z" fill="#E17726" stroke="#E17726" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.65179 1L15.6752 10.809L13.3434 5.09088L2.65179 1Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Connect with MetaMask</span>
                </button>
                <div className="text-center text-sm text-foreground/50 my-2">or</div>
                <div className="flex flex-col space-y-2">
                  <Input placeholder="Enter Web3 OTP" className="bg-navy-dark border-white/5" />
                  <button className="button-primary py-2">Verify OTP</button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between border-t border-white/5 pt-3 text-sm text-foreground/50">
        <div className="flex items-center gap-1">
          <Lock className="h-3 w-3" />
          <span>Zero-knowledge proof</span>
        </div>
        <span>Last login: 2 hours ago</span>
      </CardFooter>
    </Card>
  );
};

export default AuthPanel;
