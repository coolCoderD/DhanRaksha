
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Lock, FileText, Upload, Download, Search, File, FilePlus } from 'lucide-react';

const documents = [
  {
    name: 'Authentication Logs',
    type: 'log',
    size: '256 KB',
    modified: '2023-09-25T14:32:00Z',
    cid: 'Qm7PmPL8uE...',
    encrypted: true
  },
  {
    name: 'Identity Proof',
    type: 'pdf',
    size: '1.2 MB',
    modified: '2023-09-15T09:28:00Z',
    cid: 'QmYx3GZfro1...',
    encrypted: true
  },
  {
    name: 'Trust Score History',
    type: 'json',
    size: '124 KB',
    modified: '2023-09-28T16:45:00Z',
    cid: 'QmT18d4xqL...',
    encrypted: true
  },
  {
    name: 'Recovery Keys',
    type: 'key',
    size: '4 KB',
    modified: '2023-08-30T10:17:00Z',
    cid: 'QmSx72Tfd9...',
    encrypted: true
  }
];

const DecentralizedStorage = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  return (
    <Card className="card-panel transition-all duration-300 hover:border-gold/30 hover:shadow-glow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Database className="text-gold h-5 w-5" />
          <CardTitle className="text-xl font-display">Encrypted Vault</CardTitle>
        </div>
        <p className="text-sm text-foreground/70">
          Decentralized storage for your sensitive documents and identity proofs
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div className="flex items-center gap-2 rounded-lg bg-navy-light/50 border border-white/5 p-1 pl-3 w-full md:w-auto transition-all duration-200 hover:border-white/10">
            <Search className="h-4 w-4 text-foreground/50" />
            <input
              type="text"
              placeholder="Search documents..."
              className="bg-transparent border-none text-sm focus:outline-none w-full"
            />
          </div>
          
          <div className="flex gap-2">
            <button className="button-primary flex items-center gap-1.5 text-sm transition-all duration-300 hover:shadow-glow-md">
              <Upload size={14} />
              <span>Upload</span>
            </button>
            <button className="button-secondary flex items-center gap-1.5 text-sm transition-all duration-300 hover:border-gold/40">
              <FilePlus size={14} />
              <span>New</span>
            </button>
          </div>
        </div>
        
        <div className="bg-navy-light/50 rounded-lg p-3 border border-gold/20 transition-all duration-200 hover:border-gold/30">
          <div className="flex items-center gap-2 mb-1">
            <Lock className="text-gold h-4 w-4" />
            <h3 className="text-sm font-medium">IPFS/Arweave Encrypted Storage</h3>
          </div>
          
          <div className="text-xs text-foreground/70 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2">
            <div className="flex items-center gap-1">
              <Database size={12} />
              <span>Storage: 1.6 MB / 10 GB</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText size={12} />
              <span>Documents: 4</span>
            </div>
            <div className="flex items-center gap-1">
              <Lock size={12} />
              <span>End-to-end encrypted</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-foreground/50 px-3 py-2">
            <span>Name</span>
            <div className="flex gap-12">
              <span>Size</span>
              <span>Modified</span>
              <span className="w-16"></span>
            </div>
          </div>
          
          {documents.map((doc, index) => (
            <div key={index} className="flex items-center justify-between bg-navy-light/30 hover:bg-navy-light/50 rounded-lg p-3 transition-colors duration-200">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-gold/10 text-gold">
                  <File size={14} />
                </div>
                <div>
                  <p className="text-sm font-medium flex items-center gap-1">
                    {doc.name}
                    {doc.encrypted && <Lock size={12} className="text-gold" />}
                  </p>
                  <p className="text-xs text-foreground/50 flex items-center gap-1">
                    <span>CID: {doc.cid}</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-12">
                <span className="text-xs text-foreground/70 w-14 text-right">{doc.size}</span>
                <span className="text-xs text-foreground/70 w-24">{formatDate(doc.modified)}</span>
                <button className="button-ghost p-1.5 rounded-full hover:text-gold transition-colors duration-200">
                  <Download size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DecentralizedStorage;
