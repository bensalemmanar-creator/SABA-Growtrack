import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  DollarSign, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  MapPin,
  Filter,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface BankPortfolioProps {
  onSelectFarmer: (farmerId: string) => void;
}

export function BankPortfolio({ onSelectFarmer }: BankPortfolioProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedCrop, setSelectedCrop] = useState<string>('all');
  const [selectedRisk, setSelectedRisk] = useState<string>('all');

  const stats = [
    {
      label: 'Total Active Loans',
      value: '$2.4M',
      change: '+12%',
      icon: DollarSign,
      color: 'bg-blue-500'
    },
    {
      label: 'Low-Risk Projects',
      value: '142',
      change: '78%',
      icon: TrendingUp,
      color: 'bg-[#2D8C5A]'
    },
    {
      label: 'Medium/High Risk',
      value: '38',
      change: '22%',
      icon: AlertTriangle,
      color: 'bg-amber-500'
    },
    {
      label: 'Avg Yield Performance',
      value: '87%',
      change: '+5%',
      icon: Users,
      color: 'bg-purple-500'
    }
  ];

  const farmers = [
    {
      id: '1',
      name: 'Ahmed Ben Salem',
      crop: 'Tomato',
      region: 'Kairouan',
      landSize: '2.5 ha',
      loanAmount: '$15,000',
      riskLevel: 'low',
      yieldProgress: 85,
      verified: true
    },
    {
      id: '2',
      name: 'Fatima Mansour',
      crop: 'Olive',
      region: 'Sfax',
      landSize: '5 ha',
      loanAmount: '$28,000',
      riskLevel: 'low',
      yieldProgress: 92,
      verified: true
    },
    {
      id: '3',
      name: 'Mohamed Trabelsi',
      crop: 'Wheat',
      region: 'Beja',
      landSize: '10 ha',
      loanAmount: '$42,000',
      riskLevel: 'medium',
      yieldProgress: 68,
      verified: true
    },
    {
      id: '4',
      name: 'Salma Khelifi',
      crop: 'Pepper',
      region: 'Nabeul',
      landSize: '1.8 ha',
      loanAmount: '$12,000',
      riskLevel: 'high',
      yieldProgress: 45,
      verified: true
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'bg-green-100 text-green-700';
      case 'medium':
        return 'bg-amber-100 text-amber-700';
      case 'high':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-slate-900 mb-2">Portfolio Overview</h2>
        <p className="text-slate-600">
          Monitor all financed farmer projects and loan performance
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <Badge variant="outline" className="text-green-600 border-green-200">
                  {stat.change}
                </Badge>
              </div>
              <p className="text-slate-600 text-sm mb-1">{stat.label}</p>
              <p className="text-slate-900">{stat.value}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-4 h-4 text-slate-600" />
          <h3 className="text-slate-900">Filters</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm text-slate-600 mb-2 block">Region</label>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger>
                <SelectValue placeholder="All Regions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="kairouan">Kairouan</SelectItem>
                <SelectItem value="sfax">Sfax</SelectItem>
                <SelectItem value="beja">Beja</SelectItem>
                <SelectItem value="nabeul">Nabeul</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm text-slate-600 mb-2 block">Crop Type</label>
            <Select value={selectedCrop} onValueChange={setSelectedCrop}>
              <SelectTrigger>
                <SelectValue placeholder="All Crops" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Crops</SelectItem>
                <SelectItem value="tomato">Tomato</SelectItem>
                <SelectItem value="olive">Olive</SelectItem>
                <SelectItem value="wheat">Wheat</SelectItem>
                <SelectItem value="pepper">Pepper</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm text-slate-600 mb-2 block">Risk Level</label>
            <Select value={selectedRisk} onValueChange={setSelectedRisk}>
              <SelectTrigger>
                <SelectValue placeholder="All Risk Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Risk Levels</SelectItem>
                <SelectItem value="low">Low Risk</SelectItem>
                <SelectItem value="medium">Medium Risk</SelectItem>
                <SelectItem value="high">High Risk</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Map Preview */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-slate-900">Geographic Distribution</h3>
          <Badge variant="outline">Tunisia</Badge>
        </div>
        <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-blue-100/50"></div>
          <div className="relative z-10 text-center">
            <MapPin className="w-8 h-8 text-[#2D8C5A] mx-auto mb-2" />
            <p className="text-slate-600">Interactive map showing farmer locations</p>
            <p className="text-sm text-slate-500 mt-1">180 active projects across 8 regions</p>
          </div>
          {/* Mock map markers */}
          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-[#2D8C5A] rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#2D8C5A] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </Card>

      {/* Farmer Projects List */}
      <Card className="p-6">
        <h3 className="text-slate-900 mb-4">Active Projects</h3>
        <div className="space-y-3">
          {farmers.map((farmer, index) => (
            <motion.div
              key={farmer.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-[#2D8C5A] hover:bg-green-50/50 transition-all cursor-pointer"
              onClick={() => onSelectFarmer(farmer.id)}
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                  <span className="text-[#2D8C5A]">{farmer.name.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-slate-900">{farmer.name}</p>
                    {farmer.verified && (
                      <Badge variant="outline" className="text-green-600 border-green-200 text-xs">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span>🌱 {farmer.crop}</span>
                    <span>📍 {farmer.region}</span>
                    <span>📏 {farmer.landSize}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-slate-900 mb-1">{farmer.loanAmount}</p>
                  <Badge className={getRiskColor(farmer.riskLevel)}>
                    {farmer.riskLevel} risk
                  </Badge>
                </div>
                <div className="text-right min-w-[80px]">
                  <p className="text-sm text-slate-600 mb-1">Yield Progress</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#2D8C5A] rounded-full"
                        style={{ width: `${farmer.yieldProgress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-slate-900">{farmer.yieldProgress}%</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
}
