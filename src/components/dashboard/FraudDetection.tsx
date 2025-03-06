
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, TrendingUp, Activity, Eye, Server } from 'lucide-react';

// Simulated trust score and security data
const securityMetrics = [
  { name: 'Trust Score', value: 94, color: 'bg-neon-green', icon: Shield },
  { name: 'Risk Level', value: 'Low', color: 'bg-neon-green', icon: AlertTriangle },
  { name: 'Anomalies (30d)', value: '0', color: 'bg-neon-green', icon: Activity },
  { name: 'Auth Factor', value: '3+', color: 'bg-gold', icon: Eye },
];

const recentActivities = [
  { 
    type: 'login', 
    timestamp: '2023-10-15T14:32:21Z', 
    details: 'Successful biometric login', 
    severity: 'normal' 
  },
  { 
    type: 'transaction', 
    timestamp: '2023-10-15T13:45:08Z', 
    details: 'New recipient added: Jane Doe', 
    severity: 'warning' 
  },
  { 
    type: 'settings', 
    timestamp: '2023-10-14T09:12:33Z', 
    details: 'Recovery email updated', 
    severity: 'normal' 
  },
];

const FraudDetection = () => {
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Card className="card-panel h-full transition-all duration-300 hover:border-gold/30 hover:shadow-glow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Shield className="text-gold h-5 w-5" />
          <CardTitle className="text-2xl font-display">Security Dashboard</CardTitle>
        </div>
        <p className="text-lg text-foreground/70">
          AI-driven fraud detection and account security monitoring
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {securityMetrics.map((metric) => (
            <div key={metric.name} className="bg-navy-light rounded-lg p-3 flex items-center justify-between transition-all duration-200 hover:bg-navy-light/80">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-full ${metric.color === 'bg-neon-green' ? 'bg-neon-green/10 text-neon-green' : 'bg-gold/10 text-gold'}`}>
                  <metric.icon size={14} />
                </div>
                <span className="text-lg font-medium">{metric.name}</span>
              </div>
              <span className={`font-mono font-bold ${metric.color === 'bg-neon-green' ? 'text-neon-green' : 'text-gold'}`}>
                {metric.value}
              </span>
            </div>
          ))}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-medium flex items-center gap-1.5">
            <Activity size={14} className="text-gold" />
            <span>Recent Security Activities</span>
          </h3>
          
          <div className="space-y-2">
            {recentActivities.map((activity, index) => (
              <div key={index} className="bg-navy-light/50 rounded-lg p-2.5 flex items-center justify-between transition-all duration-200 hover:bg-navy-light/80">
                <div className="flex items-center gap-2">
                  <div className={`p-1  rounded-full ${
                    activity.severity === 'warning' 
                      ? 'bg-yellow-500/10 text-yellow-500' 
                      : 'bg-neon-green/10 text-neon-green'
                  }`}>
                    {activity.type === 'login' && <Eye size={12} />}
                    {activity.type === 'transaction' && <Server size={12} />}
                    {activity.type === 'settings' && <AlertTriangle size={12} />}
                  </div>
                  <div>
                    <p className="text-lg font-medium">
                      {activity.details}
                    </p>
                    <p className="text-lg text-foreground/50">
                      {formatTimestamp(activity.timestamp)}
                    </p>
                  </div>
                </div>
                <div className={`text-sm font-mono px-1.5 py-0.5 rounded-full ${
                  activity.severity === 'warning'
                    ? 'bg-yellow-500/10 text-yellow-500'
                    : 'bg-neon-green/10 text-neon-green'
                }`}>
                  {activity.severity}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium flex items-center gap-1.5">
            <TrendingUp size={14} className="text-gold" />
            <span>Security Insights</span>
          </h3>
          
          <div className="bg-navy-light/50 rounded-lg p-3 border border-neon-green/20 transition-all duration-200 hover:border-neon-green/40">
            <p className="text-sm text-neon-green flex items-center gap-1">
              <Shield size={12} />
              <span>Your account is currently secure</span>
            </p>
            <p className="text-sm text-foreground/70 mt-1">
              AI analysis shows no suspicious activities in the past 30 days. Your behavioral patterns match your historical usage.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FraudDetection;
