import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Radar,
  CheckCircle2,
  Camera,
  FileDown,
  Package,
  TrendingUp,
  FileText,
  Droplets,
  Sprout,
  Bug,
  MapPin,
  Calendar,
  DollarSign,
  ShoppingCart,
  User,
  Download,
  Send,
  Activity
} from 'lucide-react';

interface AgronomistFieldFileProps {
  onBack: () => void;
  farmId?: string;
}

export function AgronomistFieldFile({ onBack, farmId }: AgronomistFieldFileProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'visit' | 'marketplace' | 'preharvest' | 'funding'>('overview');
  
  // Mock farm data
  const farmData = {
    farmer: 'Ahmed Ben Salem',
    crop: 'Tomato',
    icon: '🍅',
    region: 'Kairouan',
    landSize: '2.5 ha',
    plantingDate: 'Sept 15, 2025',
    harvestDate: 'Dec 10, 2025',
    credibility: 'Verified',
    droneStatus: 'Active'
  };

  // Growth stages with data sources
  const growthStages = [
    { 
      stage: 'Soil Prep', 
      icon: '🏗️', 
      progress: 100, 
      source: 'Agronomist',
      date: 'Sept 10-14'
    },
    { 
      stage: 'Seedling', 
      icon: '🌱', 
      progress: 100, 
      source: 'Agronomist',
      date: 'Sept 15-25'
    },
    { 
      stage: 'Vegetative', 
      icon: '🌿', 
      progress: 100, 
      source: 'RoboCare',
      date: 'Sept 26-Oct 20'
    },
    { 
      stage: 'Flowering', 
      icon: '🌸', 
      progress: 80, 
      source: 'RoboCare',
      date: 'Oct 21-Nov 10'
    },
    { 
      stage: 'Fruit Set', 
      icon: '🍃', 
      progress: 40, 
      source: 'Drone + Agronomist',
      date: 'Nov 11-25'
    },
    { 
      stage: 'Maturity', 
      icon: '🍅', 
      progress: 10, 
      source: 'Pending',
      date: 'Nov 26-Dec 10'
    }
  ];

  const droneReport = {
    health: 78,
    lastScan: 'Today at 12:32',
    ndvi: 0.76,
    canopyHealth: 78,
    diseaseRisk: 'Low',
    soilMoisture: 72,
    alerts: [
      'Slight water stress detected in northeast corner',
      'Optimal growth conditions in 85% of field',
      'Minor pest activity detected - monitor closely'
    ]
  };

  const [visitData, setVisitData] = useState({
    soilCondition: false,
    irrigationStatus: false,
    fertilizerUsed: false,
    pestObserved: false,
    photos: 0,
    notes: ''
  });

  const inputs = [
    { 
      id: 1, 
      name: 'NPK Fertilizer 15-15-15', 
      supplier: 'AgriSupply Tunisia',
      price: '45 TND/bag',
      dosage: '300 kg/ha',
      verified: true
    },
    { 
      id: 2, 
      name: 'Organic Pesticide', 
      supplier: 'BioFarm Solutions',
      price: '120 TND/liter',
      dosage: '2 L/ha',
      verified: true
    },
    { 
      id: 3, 
      name: 'Drip Irrigation Kit', 
      supplier: 'IrrigaTech',
      price: '850 TND/kit',
      dosage: '1 kit per hectare',
      verified: true
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={onBack} className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-2xl">{farmData.icon}</span>
              <h2 className="text-slate-900">{farmData.farmer} - {farmData.crop} Farm</h2>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {farmData.region}
              </span>
              <span>•</span>
              <span>📏 {farmData.landSize}</span>
              <span>•</span>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                ✓ {farmData.credibility}
              </Badge>
            </div>
          </div>
        </div>
        <Button className="bg-[#4FAF6C] hover:bg-[#3d9257]">
          <Send className="w-4 h-4 mr-2" />
          Send Update to Bank
        </Button>
      </div>

      {/* Tabs */}
      <Card className="p-2">
        <div className="flex gap-2 overflow-x-auto">
          <Button
            variant={activeTab === 'overview' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('overview')}
            className={activeTab === 'overview' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
          >
            <Activity className="w-4 h-4 mr-2" />
            Overview
          </Button>
          <Button
            variant={activeTab === 'visit' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('visit')}
            className={activeTab === 'visit' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Field Visit
          </Button>
          <Button
            variant={activeTab === 'marketplace' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('marketplace')}
            className={activeTab === 'marketplace' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
          >
            <Package className="w-4 h-4 mr-2" />
            Inputs
          </Button>
          <Button
            variant={activeTab === 'preharvest' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('preharvest')}
            className={activeTab === 'preharvest' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Pre-Harvest
          </Button>
          <Button
            variant={activeTab === 'funding' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('funding')}
            className={activeTab === 'funding' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
          >
            <FileText className="w-4 h-4 mr-2" />
            Funding
          </Button>
        </div>
      </Card>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Crop Overview */}
            <Card className="p-6">
              <h3 className="text-slate-900 mb-4">Crop Overview</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Crop Type</p>
                  <p className="text-slate-900">{farmData.crop}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Planting Date</p>
                  <p className="text-slate-900">{farmData.plantingDate}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Expected Harvest</p>
                  <p className="text-slate-900">{farmData.harvestDate}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Drone Status</p>
                  <Badge className="bg-blue-100 text-blue-700">
                    <Radar className="w-3 h-3 mr-1" />
                    {farmData.droneStatus}
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Growth Timeline */}
            <Card className="p-6">
              <h3 className="text-slate-900 mb-6">Growth Timeline</h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-12 left-0 right-0 h-1 bg-slate-200">
                  <div 
                    className="h-full bg-[#4FAF6C] transition-all duration-1000"
                    style={{ width: '70%' }}
                  />
                </div>

                {/* Timeline Stages */}
                <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {growthStages.map((stage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="text-center"
                    >
                      <div className={`relative z-10 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl mb-3 ${
                        stage.progress === 100 ? 'bg-green-100 border-4 border-[#4FAF6C]' :
                        stage.progress > 0 ? 'bg-amber-100 border-4 border-amber-400' :
                        'bg-slate-100 border-4 border-slate-300'
                      }`}>
                        {stage.icon}
                      </div>
                      <p className="text-sm text-slate-900 mb-1">{stage.stage}</p>
                      <p className="text-xs text-slate-600 mb-2">{stage.date}</p>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          stage.source === 'RoboCare' || stage.source.includes('RoboCare') 
                            ? 'bg-blue-50 text-blue-700 border-blue-200' 
                            : 'bg-green-50 text-green-700 border-green-200'
                        }`}
                      >
                        {stage.source === 'RoboCare' || stage.source.includes('RoboCare') ? (
                          <Radar className="w-3 h-3 mr-1" />
                        ) : (
                          <User className="w-3 h-3 mr-1" />
                        )}
                        {stage.source}
                      </Badge>
                      <div className="mt-2 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            stage.progress === 100 ? 'bg-green-500' :
                            stage.progress > 0 ? 'bg-amber-500' : 'bg-slate-300'
                          }`}
                          style={{ width: `${stage.progress}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Drone Scan Report */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Radar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900">RoboCare Scan Report</h3>
                    <p className="text-sm text-slate-600">Last scan: {droneReport.lastScan}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>

              {/* Health Score */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 mb-4">
                <div className="text-center mb-4">
                  <p className="text-sm text-slate-600 mb-2">Overall Field Health</p>
                  <p className="text-4xl text-[#4FAF6C] mb-1">{droneReport.health}%</p>
                  <Badge className="bg-green-100 text-green-700">Healthy</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-slate-600 mb-1">NDVI Index</p>
                    <p className="text-slate-900">{droneReport.ndvi}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-slate-600 mb-1">Canopy</p>
                    <p className="text-[#4FAF6C]">{droneReport.canopyHealth}%</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-slate-600 mb-1">Disease Risk</p>
                    <p className="text-green-600">{droneReport.diseaseRisk}</p>
                  </div>
                </div>
              </div>

              {/* Alerts */}
              <div className="space-y-2">
                <p className="text-sm text-slate-900 mb-3">Top Alerts:</p>
                {droneReport.alerts.map((alert, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-slate-600 p-2 bg-slate-50 rounded">
                    <span className="text-blue-500">•</span>
                    <span>{alert}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Metrics */}
            <Card className="p-6">
              <h3 className="text-slate-900 mb-4">Current Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Droplets className="w-4 h-4" />
                      Soil Moisture
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">{droneReport.soilMoisture}%</Badge>
                  </div>
                  <Progress value={droneReport.soilMoisture} className="h-2" />
                  <Badge variant="outline" className="text-xs mt-2 bg-blue-50 text-blue-700">
                    <Radar className="w-3 h-3 mr-1" />
                    RoboCare Sensor
                  </Badge>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Sprout className="w-4 h-4" />
                      Leaf Health
                    </div>
                    <Badge className="bg-green-100 text-green-700">{droneReport.health}%</Badge>
                  </div>
                  <Progress value={droneReport.health} className="h-2" />
                  <Badge variant="outline" className="text-xs mt-2 bg-blue-50 text-blue-700">
                    <Radar className="w-3 h-3 mr-1" />
                    Drone Analysis
                  </Badge>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Bug className="w-4 h-4" />
                      Pest Stress
                    </div>
                    <Badge className="bg-green-100 text-green-700">Low</Badge>
                  </div>
                  <Progress value={15} className="h-2" />
                  <Badge variant="outline" className="text-xs mt-2 bg-blue-50 text-blue-700">
                    <Radar className="w-3 h-3 mr-1" />
                    Drone Detection
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6">
              <h3 className="text-slate-900 mb-4">Field Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Land Size</span>
                  <span className="text-slate-900">{farmData.landSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Days Since Planting</span>
                  <span className="text-slate-900">72 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Days to Harvest</span>
                  <span className="text-slate-900">14 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Field Visits</span>
                  <span className="text-slate-900">8 visits</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Drone Scans</span>
                  <span className="text-slate-900">15 scans</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Field Visit Tab */}
      {activeTab === 'visit' && (
        <Card className="p-6">
          <h3 className="text-slate-900 mb-6">Field Visit Record</h3>
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-slate-900">Inspection Checklist</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                  <Checkbox 
                    checked={visitData.soilCondition}
                    onCheckedChange={(checked) => 
                      setVisitData({...visitData, soilCondition: !!checked})
                    }
                  />
                  <div className="flex-1">
                    <p className="text-sm text-slate-900">Soil condition assessed</p>
                    <p className="text-xs text-slate-600">Check soil texture, moisture, and compaction</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                  <Checkbox 
                    checked={visitData.irrigationStatus}
                    onCheckedChange={(checked) => 
                      setVisitData({...visitData, irrigationStatus: !!checked})
                    }
                  />
                  <div className="flex-1">
                    <p className="text-sm text-slate-900">Irrigation status verified</p>
                    <p className="text-xs text-slate-600">Confirm water distribution and system function</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                  <Checkbox 
                    checked={visitData.fertilizerUsed}
                    onCheckedChange={(checked) => 
                      setVisitData({...visitData, fertilizerUsed: !!checked})
                    }
                  />
                  <div className="flex-1">
                    <p className="text-sm text-slate-900">Fertilizer application recorded</p>
                    <p className="text-xs text-slate-600">Document type, amount, and application date</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                  <Checkbox 
                    checked={visitData.pestObserved}
                    onCheckedChange={(checked) => 
                      setVisitData({...visitData, pestObserved: !!checked})
                    }
                  />
                  <div className="flex-1">
                    <p className="text-sm text-slate-900">Pest observations documented</p>
                    <p className="text-xs text-slate-600">Note any signs of pests or disease</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-slate-900 mb-4">Field Notes</h4>
              <Textarea
                placeholder="Enter detailed observations from your field visit..."
                value={visitData.notes}
                onChange={(e) => setVisitData({...visitData, notes: e.target.value})}
                rows={6}
                className="mb-4"
              />
            </div>

            <div>
              <h4 className="text-slate-900 mb-4">Photos Captured</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-32 flex flex-col items-center justify-center">
                  <Camera className="w-8 h-8 mb-2 text-slate-400" />
                  <span className="text-sm text-slate-600">Add Photo</span>
                </Button>
                <div className="h-32 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                  Photo 1
                </div>
                <div className="h-32 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                  Photo 2
                </div>
                <div className="h-32 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                  Photo 3
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <Button className="flex-1 bg-[#4FAF6C] hover:bg-[#3d9257]">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Save Visit Record
              </Button>
              <Button variant="outline" className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Marketplace Tab */}
      {activeTab === 'marketplace' && (
        <Card className="p-6">
          <h3 className="text-slate-900 mb-6">Order Inputs for Farmer</h3>
          <div className="space-y-4">
            {inputs.map((input) => (
              <div key={input.id} className="p-4 border border-slate-200 rounded-lg hover:border-[#4FAF6C] transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-slate-900">{input.name}</h4>
                      {input.verified && (
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          ✓ Verified by SABA
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mb-1">Supplier: {input.supplier}</p>
                    <p className="text-sm text-slate-600">Recommended dosage: {input.dosage}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-900 mb-2">{input.price}</p>
                    <Button size="sm" className="bg-[#4FAF6C] hover:bg-[#3d9257]">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Pre-Harvest Tab */}
      {activeTab === 'preharvest' && (
        <Card className="p-6">
          <h3 className="text-slate-900 mb-6">List Crop for Pre-Harvest Sale</h3>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600 mb-2 block">Expected Yield (kg)</label>
                <Input type="number" placeholder="e.g., 5000" defaultValue="4800" />
                <p className="text-xs text-slate-500 mt-1">Auto-calculated from drone + agronomist data</p>
              </div>
              <div>
                <label className="text-sm text-slate-600 mb-2 block">Expected Harvest Date</label>
                <Input type="date" defaultValue="2025-12-10" />
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-600 mb-2 block">Quality Grade</label>
              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" className="border-2 border-[#4FAF6C] bg-green-50">
                  Premium
                </Button>
                <Button variant="outline">Standard</Button>
                <Button variant="outline">Economy</Button>
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-600 mb-2 block">Health Score</label>
              <div className="flex items-center gap-4">
                <Progress value={78} className="h-3 flex-1" />
                <Badge className="bg-green-100 text-green-700">78%</Badge>
              </div>
              <p className="text-xs text-slate-500 mt-1">Based on drone scans and field assessments</p>
            </div>

            <div>
              <label className="text-sm text-slate-600 mb-2 block">Listing Description</label>
              <Textarea
                placeholder="Describe the crop quality, growing conditions, etc..."
                rows={4}
                defaultValue="Premium quality tomatoes grown in Kairouan. Verified by SABA agronomist with regular drone monitoring. Excellent health score (78%). Ready for harvest in December 2025."
              />
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <Button className="flex-1 bg-[#4FAF6C] hover:bg-[#3d9257]">
                <TrendingUp className="w-4 h-4 mr-2" />
                Share Listing with Buyers
              </Button>
              <Button variant="outline" className="flex-1">
                Save Draft
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Funding Tab */}
      {activeTab === 'funding' && (
        <Card className="p-6">
          <h3 className="text-slate-900 mb-6">Generate Verified Loan Dossier</h3>
          <div className="space-y-6">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-900 mb-1">Auto-filled financial file ready</p>
                  <p className="text-xs text-blue-700">
                    All crop data, drone reports, and field assessments have been compiled automatically.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600 mb-1">Estimated Input Costs</p>
                <p className="text-xl text-slate-900">3,200 TND</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600 mb-1">Expected Revenue</p>
                <p className="text-xl text-green-600">12,000 TND</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600 mb-1">Risk Assessment</p>
                <Badge className="bg-green-100 text-green-700">Low Risk</Badge>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600 mb-1">Loan Amount</p>
                <p className="text-xl text-slate-900">2,500 TND</p>
              </div>
            </div>

            <div>
              <h4 className="text-slate-900 mb-3">Yield Simulator</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600">Conservative Estimate</span>
                    <span className="text-slate-900">4,000 kg</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600">Expected Yield</span>
                    <span className="text-green-600">4,800 kg</span>
                  </div>
                  <Progress value={80} className="h-2 [&>div]:bg-green-500" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600">Optimistic Estimate</span>
                    <span className="text-slate-900">5,500 kg</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-green-900 mb-3">Included Documents</h4>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Complete field visit records (8 visits)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  RoboCare drone scan reports (15 scans)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Growth timeline with verified data sources
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Input costs and supplier verification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Yield projections and risk assessment
                </li>
              </ul>
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <Button className="flex-1 bg-[#4FAF6C] hover:bg-[#3d9257]">
                <FileDown className="w-4 h-4 mr-2" />
                Generate Verified Loan Dossier
              </Button>
              <Button variant="outline">
                Preview Document
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
