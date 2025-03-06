
import React from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUp, ArrowDown, ArrowRight, Database, FileText, Clock, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const transactions = [
  {
    id: 'tx-123456',
    type: 'incoming',
    amount: 1200,
    currency: 'USD',
    sender: 'John Smith',
    recipient: 'You',
    status: 'completed',
    date: '2023-07-15T14:30:00Z',
    blockchain: {
      hash: '0x3a1b2c...',
      confirmations: 18,
      network: 'Ethereum'
    }
  },
  {
    id: 'tx-123457',
    type: 'outgoing',
    amount: 850,
    currency: 'USD',
    sender: 'You',
    recipient: 'Jane Doe',
    status: 'completed',
    date: '2023-07-13T09:15:00Z',
    blockchain: {
      hash: '0x4d5e6f...',
      confirmations: 32,
      network: 'Ethereum'
    }
  },
  {
    id: 'tx-123458',
    type: 'incoming',
    amount: 300,
    currency: 'USD',
    sender: 'Tech Solutions Inc.',
    recipient: 'You',
    status: 'pending',
    date: '2023-07-16T11:45:00Z',
    blockchain: {
      hash: '0x7g8h9i...',
      confirmations: 4,
      network: 'Ethereum'
    }
  },
  {
    id: 'tx-123459',
    type: 'outgoing',
    amount: 65,
    currency: 'USD',
    sender: 'You',
    recipient: 'Express Market',
    status: 'completed',
    date: '2023-07-12T16:20:00Z',
    blockchain: {
      hash: '0x1j2k3l...',
      confirmations: 50,
      network: 'Ethereum'
    }
  },
];

const TransactionHistory = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  const formatAmount = (amount: number, currency: string, type: string) => {
    return `${type === 'incoming' ? '+' : '-'}${amount.toLocaleString()} ${currency}`;
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-1">
        <Database className="text-gold h-5 w-5" />
        <h2 className="text-2xl font-display font-semibold">Blockchain Transactions</h2>
      </div>
      
      <p className="text-lg text-foreground/70 mb-4">
        Transparent and immutable record of all your financial transactions
      </p>
      
      <Card className="text-lg card-panel">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="relative  w-full md:w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/50" />
            <Input placeholder="Search transactions..." className="pl-9 bg-navy-light border-white/5" />
          </div>
          
          <div className="flex items-center gap-2">
            <button className="button-secondary flex items-center gap-1">
              <Filter size={14} />
              <span>Filter</span>
            </button>
            
            <button className="button-ghost flex items-center gap-1">
              <FileText size={14} />
              <span>Export</span>
            </button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="all" className="data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold text-lg">
              All
            </TabsTrigger>
            <TabsTrigger value="incoming" className="data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold text-lg">
              <ArrowDown className="h-3 w-3 mr-1" />
              <span>Incoming</span>
            </TabsTrigger>
            <TabsTrigger value="outgoing" className="data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold text-lg">
              <ArrowUp className="h-3 w-3 mr-1" />
              <span>Outgoing</span>
            </TabsTrigger>
            <TabsTrigger value="pending" className="data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold text-lg">
              <Clock className="h-3 w-3 mr-1" />
              <span>Pending</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="space-y-3">
              {transactions.map((tx) => (
                <div 
                  key={tx.id} 
                  className="flex items-center justify-between p-3 rounded-lg bg-navy-light border border-white/10 hover:border-gold/20 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${tx.type === 'incoming' ? 'bg-neon-green/10 text-neon-green' : 'bg-gold/10 text-gold'}`}>
                      {tx.type === 'incoming' ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
                    </div>
                    
                    <div>
                      <p className="font-medium">
                        {tx.type === 'incoming' ? tx.sender : tx.recipient}
                      </p>
                      <div className="flex items-center text-sm text-foreground/50 mt-1">
                        <span className="flex items-center gap-1">
                          <Database size={10} />
                          <span>Hash: {tx.blockchain.hash}</span>
                        </span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(tx.date)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className={`font-medium ${tx.type === 'incoming' ? 'text-neon-green' : ''}`}>
                      {formatAmount(tx.amount, tx.currency, tx.type)}
                    </p>
                    <span className={`text-sm px-2 py-0.5 rounded-full ${
                      tx.status === 'completed' 
                        ? 'bg-neon-green/10 text-neon-green' 
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="incoming" className="mt-0">
            <div className="space-y-3">
              {transactions.filter(tx => tx.type === 'incoming').map((tx) => (
                <div 
                  key={tx.id} 
                  className="flex items-center justify-between p-3 rounded-lg bg-navy-light border border-white/10 hover:border-gold/20 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-neon-green/10 text-neon-green">
                      <ArrowDown size={16} />
                    </div>
                    
                    <div>
                      <p className="font-medium">{tx.sender}</p>
                      <div className="flex items-center text-sm text-foreground/50 mt-1">
                        <span className="flex items-center gap-1">
                          <Database size={10} />
                          <span>Hash: {tx.blockchain.hash}</span>
                        </span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(tx.date)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-medium text-neon-green">
                      {formatAmount(tx.amount, tx.currency, tx.type)}
                    </p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      tx.status === 'completed' 
                        ? 'bg-neon-green/10 text-neon-green' 
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="outgoing" className="mt-0">
            <div className="space-y-3">
              {transactions.filter(tx => tx.type === 'outgoing').map((tx) => (
                <div 
                  key={tx.id} 
                  className="flex items-center justify-between p-3 rounded-lg bg-navy-light border border-white/10 hover:border-gold/20 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gold/10 text-gold">
                      <ArrowUp size={16} />
                    </div>
                    
                    <div>
                      <p className="font-medium">{tx.recipient}</p>
                      <div className="flex items-center text-xs text-foreground/50 mt-1">
                        <span className="flex items-center gap-1">
                          <Database size={10} />
                          <span>Hash: {tx.blockchain.hash}</span>
                        </span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(tx.date)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-medium">
                      {formatAmount(tx.amount, tx.currency, tx.type)}
                    </p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      tx.status === 'completed' 
                        ? 'bg-neon-green/10 text-neon-green' 
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="pending" className="mt-0">
            <div className="space-y-3">
              {transactions.filter(tx => tx.status === 'pending').map((tx) => (
                <div 
                  key={tx.id} 
                  className="flex items-center justify-between p-3 rounded-lg bg-navy-light border border-white/10 hover:border-gold/20 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${tx.type === 'incoming' ? 'bg-neon-green/10 text-neon-green' : 'bg-gold/10 text-gold'}`}>
                      {tx.type === 'incoming' ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
                    </div>
                    
                    <div>
                      <p className="font-medium">
                        {tx.type === 'incoming' ? tx.sender : tx.recipient}
                      </p>
                      <div className="flex items-center text-xs text-foreground/50 mt-1">
                        <span className="flex items-center gap-1">
                          <Database size={10} />
                          <span>Hash: {tx.blockchain.hash}</span>
                        </span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(tx.date)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className={`font-medium ${tx.type === 'incoming' ? 'text-neon-green' : ''}`}>
                      {formatAmount(tx.amount, tx.currency, tx.type)}
                    </p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500">
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between">
          <div className="text-xs text-foreground/50">
            <span>Showing 4 of 24 transactions</span>
          </div>
          
          <button className="button-secondary flex items-center gap-1">
            <span>View all transactions</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default TransactionHistory;
