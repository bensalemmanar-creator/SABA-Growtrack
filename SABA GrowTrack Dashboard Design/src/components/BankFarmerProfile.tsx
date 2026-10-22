import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Download, 
  MessageSquare,
  Droplets,
  Thermometer,
  Cloud,
  AlertTriangle,
  TrendingUp,
  Calendar
} from 'lucide-react';
import { motion } from 'motion/react';

interface BankFarmerProfileProps {
  onBack: () => void;
}

export function BankFarmerProfile({ onBack }: BankFarmerProfileProps) {
  const [growthStage, setGrowthStage] = useState(65);

  const farmer = {
    name: 'Ahmed Ben Salem',
    verified: true,
    crop: 'Tomato',
    variety: 'Rio Grande',
    landSize: '2.5 hectares',
    plantingDate: 'March 15, 2025',
    expectedHarvest: 'June 20, 2025',
    loanAmount: '$15,000',
    disbursedAmount: '$12,000',
    roi: '145%',
    expectedYield: '45,000 kg'
  };

  const metrics = [
    {
      label: 'Soil Moisture',
      value: '72%',
      status: 'optimal',
      icon: Droplets,
      color: 'text-blue-500'
    },
    {
      label: 'Temperature',
      value: '24°C',
      status: 'good',
      icon: Thermometer,
      color: 'text-orange-500'
    },
    {
      label: 'Weather Risk',
      value: 'Low',
      status: 'low',
      icon: Cloud,
      color: 'text-slate-500'
    },
    {
      label: 'Irrigation',
      value: 'On schedule',
      status: 'good',
      icon: Droplets,
      color: 'text-cyan-500'
    }
  ];

  const agronomistNotes = [
    {
      date: 'Nov 1, 2025',
      note: 'Crop showing excellent growth. No pest issues detected.',
      agronomist: 'Dr. Karim Ayari'
    },
    {
      date: 'Oct 15, 2025',
      note: 'Applied organic fertilizer. Soil quality improved significantly.',
      agronomist: 'Dr. Karim Ayari'
    },
    {
      date: 'Oct 1, 2025',
      note: 'Irrigation system functioning well. Water levels optimal.',
      agronomist: 'Dr. Karim Ayari'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack} className="p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-slate-900">{farmer.name}</h2>
            {farmer.verified && (
              <Badge className="bg-green-100 text-green-700 border-green-200">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                SABA Verified
              </Badge>
            )}
          </div>
          <p className="text-slate-600">Loan Application #{Math.floor(Math.random() * 10000)}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <MessageSquare className="w-4 h-4" />
            Request Update
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Crop Details */}
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">Crop Details</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-600 mb-1">Crop Type</p>
                <p className="text-slate-900">🍅 {farmer.crop} ({farmer.variety})</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Land Size</p>
                <p className="text-slate-900">{farmer.landSize}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Planting Date</p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <p className="text-slate-900">{farmer.plantingDate}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Expected Harvest</p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <p className="text-slate-900">{farmer.expectedHarvest}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Growth Visualization */}
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">Growth Progress</h3>
            <div className="flex items-center justify-center py-8 mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="relative"
              >
                {/* Animated Plant */}
                <div className="relative w-48 h-48">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2"
                  >
                    <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
                      {/* Stem */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: growthStage / 100 }}
                        transition={{ duration: 1.5 }}
                        d="M60 160 Q60 100, 60 40"
                        stroke="#2D8C5A"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      {/* Leaves */}
                      {growthStage > 30 && (
                        <>
                          <motion.ellipse
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 }}
                            cx="40"
                            cy="100"
                            rx="20"
                            ry="15"
                            fill="#4FAF6C"
                          />
                          <motion.ellipse
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.7 }}
                            cx="80"
                            cy="90"
                            rx="20"
                            ry="15"
                            fill="#4FAF6C"
                          />
                        </>
                      )}
                      {/* Tomatoes */}
                      {growthStage > 60 && (
                        <>
                          <motion.circle
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1 }}
                            cx="50"
                            cy="60"
                            r="12"
                            fill="#EF4444"
                          />
                          <motion.circle
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.2 }}
                            cx="70"
                            cy="55"
                            r="10"
                            fill="#EF4444"
                          />
                        </>
                      )}
                    </svg>
                  </motion.div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-slate-900 mb-2">Growth Stage: {growthStage}%</p>
                  <Progress value={growthStage} className="h-2" />
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>Seeding</span>
                    <span>Flowering</span>
                    <span>Harvest</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[
                { stage: 'Seeding', progress: 100, icon: '🌱' },
                { stage: 'Growth', progress: 100, icon: '🌿' },
                { stage: 'Flowering', progress: 75, icon: '🌸' },
                { stage: 'Harvest', progress: 0, icon: '🍅' }
              ].map((stage) => (
                <div key={stage.stage} className="text-center">
                  <div className="text-2xl mb-2">{stage.icon}</div>
                  <p className="text-xs text-slate-600 mb-1">{stage.stage}</p>
                  <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#2D8C5A]"
                      style={{ width: `${stage.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Health & Risk Summary */}
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">Health & Risk Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-4 border border-slate-200 rounded-lg"
                >
                  <metric.icon className={`w-5 h-5 ${metric.color} mb-2`} />
                  <p className="text-xs text-slate-600 mb-1">{metric.label}</p>
                  <p className="text-slate-900">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-green-900 mb-1">Overall Status: Healthy</p>
                  <p className="text-sm text-green-700">
                    All key indicators within optimal range. No immediate risks detected.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Agronomist Notes */}
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">Agronomist Field Notes</h3>
            <div className="space-y-3">
              {agronomistNotes.map((note, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 border border-slate-200 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-slate-600">{note.date}</p>
                    <Badge variant="outline" className="text-xs">
                      {note.agronomist}
                    </Badge>
                  </div>
                  <p className="text-slate-900">{note.note}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Financial Summary */}
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">Financial Summary</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-600 mb-1">Loan Amount</p>
                <p className="text-slate-900">{farmer.loanAmount}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Disbursed</p>
                <p className="text-slate-900">{farmer.disbursedAmount}</p>
                <Progress value={80} className="h-2 mt-2" />
              </div>
              <div className="pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-600 mb-1">Expected ROI</p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <p className="text-green-600">{farmer.roi}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Predicted Yield</p>
                <p className="text-slate-900">{farmer.expectedYield}</p>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">Actions</h3>
            <div className="space-y-3">
              <Button className="w-full bg-[#2D8C5A] hover:bg-[#256f48]">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Approve Loan
              </Button>
              <Button variant="outline" className="w-full">
                Request Update from Agronomist
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download Full Report
              </Button>
            </div>
          </Card>

          {/* Risk Alerts */}
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">Risk Alerts</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                <div>
                  <p className="text-sm text-amber-900">Rainfall forecasted in 3 days</p>
                  <p className="text-xs text-amber-700 mt-1">Monitor drainage systems</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 text-center py-2">
                No critical alerts
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
