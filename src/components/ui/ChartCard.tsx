
import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { LucideIcon } from 'lucide-react';

interface ChartCardProps {
  title: string;
  value: string;
  change: number;
  data: any[];
  dataKey: string;
  icon: LucideIcon;
  gradient: {
    from: string;
    to: string;
  };
}

const ChartCard = ({ 
  title, 
  value, 
  change, 
  data, 
  dataKey, 
  icon: Icon,
  gradient 
}: ChartCardProps) => {
  return (
    <Card className="card-panel h-full">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-sm text-foreground/70 mb-1">{title}</h3>
          <div className="flex items-baseline gap-2">
            <p className="text-xl font-display font-bold">{value}</p>
            <span className={`text-xs font-medium ${change >= 0 ? 'text-neon-green' : 'text-destructive'}`}>
              {change >= 0 ? '+' : ''}{change}%
            </span>
          </div>
        </div>
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-light">
          <Icon size={16} className="text-gold" />
        </div>
      </div>
      
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={gradient.from} stopOpacity={0.4} />
                <stop offset="95%" stopColor={gradient.to} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.5)' }} 
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickLine={false}
            />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0F1729', 
                borderColor: 'rgba(255,215,0,0.2)',
                borderRadius: '0.375rem',
                fontSize: '0.75rem',
                boxShadow: '0 0 10px rgba(255,215,0,0.1)'
              }} 
              itemStyle={{ color: '#FFD700' }}
              labelStyle={{ color: 'rgba(255,255,255,0.7)' }}
            />
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              stroke={gradient.from} 
              strokeWidth={2}
              fillOpacity={1}
              fill={`url(#gradient-${title})`} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ChartCard;
