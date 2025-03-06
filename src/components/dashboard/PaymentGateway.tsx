
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Wallet, CreditCard, Database, Fingerprint, ArrowRight, Check, Copy } from 'lucide-react';

const PaymentGateway = () => {
  const [paymentMethod, setPaymentMethod] = useState('crypto');
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount && recipient) {
      setShowConfirmation(true);
    }
  };
  
  const resetForm = () => {
    setAmount('');
    setRecipient('');
    setShowConfirmation(false);
  };

  return (
    <Card className="card-panel">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Wallet className="text-gold h-5 w-5" />
          <CardTitle className="text-2xl font-display">Payment Gateway</CardTitle>
        </div>
        <p className="text-lg text-foreground/70">
          Blockchain-powered secure transactions with biometric verification
        </p>
      </CardHeader>
      
      <CardContent>
        {!showConfirmation ? (
          <>
            <Tabs defaultValue="crypto" className="w-full" onValueChange={setPaymentMethod}>
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="crypto" className="data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold text-lg">
                  <Database className="h-4 w-4 mr-2" />
                  <span>Crypto</span>
                </TabsTrigger>
                <TabsTrigger value="fiat" className="data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold text-lg">
                  <CreditCard className="h-4 w-4 mr-2" />
                  <span>Fiat</span>
                </TabsTrigger>
              </TabsList>
              
              <form onSubmit={handlePayment} className="space-y-4">
                <TabsContent value="crypto" className="mt-0 space-y-4">
                  <div className="space-y-1">
                    <label className="text-sm text-foreground/70">Connected Wallet</label>
                    <div className="flex items-center justify-between bg-navy-light rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-full bg-gold/10 text-gold">
                          <Wallet size={14} />
                        </div>
                        <span className="text-lg font-medium">MetaMask</span>
                      </div>
                      <span className="text-sm font-mono">0x71C...93E4</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-sm text-foreground/70" htmlFor="crypto-amount">Amount</label>
                      <div className="relative">
                        <Input 
                          id="crypto-amount"
                          type="number"
                          placeholder="0.00"
                          className="bg-navy-light  border-white/5 pl-10"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          required
                        />
                        {/* <span className="absolute left- top-1/2 transform -translate-y-1/2 text-foreground/70 ">ETH</span> */}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm text-foreground/70" htmlFor="crypto-recipient">Recipient Address</label>
                      <Input 
                        id="crypto-recipient"
                        placeholder="0x..."
                        className="bg-navy-light border-white/5"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="fiat" className="mt-0 space-y-4">
                  <div className="space-y-1">
                    <label className="text-sm text-foreground/70">Payment Method</label>
                    <div className="flex items-center justify-between bg-navy-light rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-full bg-gold/10 text-gold">
                          <CreditCard size={14} />
                        </div>
                        <span className="text-lg font-medium">VISA ****4242</span>
                      </div>
                      <span className="text-sm text-foreground/50">Default</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-sm text-foreground/70" htmlFor="fiat-amount">Amount</label>
                      <div className="relative">
                        <Input 
                          id="fiat-amount"
                          type="number"
                          placeholder="0.00"
                          className="bg-navy-light border-white/5 pl-10"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          required
                        />
                        {/* <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/70">USD</span> */}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm text-foreground/70" htmlFor="fiat-recipient">Recipient</label>
                      <Input 
                        id="fiat-recipient"
                        placeholder="Email or username"
                        className="bg-navy-light border-white/5"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <div className="bg-navy-light/50 rounded-lg p-3 border border-gold/20">
                  <div className="flex items-center gap-2">
                    <Fingerprint className="text-gold h-4 w-4" />
                    <p className="text-sm font-medium">Smart Contract Biometric Verification</p>
                  </div>
                  <p className="text-sm text-foreground/70 mt-1">
                    Enhanced security using biometric identity verification with zero-knowledge proof
                  </p>
                </div>
                
                <button type="submit" className="button-primary w-full flex text-lg items-center justify-center gap-2">
                  <span>Proceed to Payment</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            </Tabs>
          </>
        ) : (
          <div className="space-y-5">
            <div className="flex flex-col items-center justify-center p-6">
              <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center mb-4">
                <Check className="text-neon-green h-8 w-8" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-1">Transaction Initiated</h3>
              <p className="text-lg text-foreground/70 text-center">
                Your {paymentMethod === 'crypto' ? 'blockchain' : 'fiat'} transaction is being processed
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-navy-light/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/70">Amount</span>
                  <span className="font-medium">{amount} {paymentMethod === 'crypto' ? 'ETH' : 'USD'}</span>
                </div>
              </div>
              
              <div className="bg-navy-light/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/70">Recipient</span>
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-mono truncate max-w-[160px]">{recipient}</span>
                    <button className="text-foreground/50 hover:text-foreground/80">
                      <Copy size={14} />
                    </button>
                  </div>
                </div>
              </div>
              
              {paymentMethod === 'crypto' && (
                <div className="bg-navy-light/50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/70">Transaction Hash</span>
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-mono">0x8f2c...4e1a</span>
                      <button className="text-foreground/50 hover:text-foreground/80">
                        <Copy size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="bg-navy-light/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/70">Status</span>
                  <span className="text-sm px-2 py-0.5 bg-yellow-500/10 text-yellow-500 rounded-full">
                    {paymentMethod === 'crypto' ? 'Awaiting confirmations (1/12)' : 'Processing'}
                  </span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={resetForm}
              className="button-secondary w-full"
            >
              Return to Payment Gateway
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentGateway;
