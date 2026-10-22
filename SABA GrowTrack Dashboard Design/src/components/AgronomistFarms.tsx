import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { 
  Search, 
  Map as MapIcon, 
  List, 
  Plus,
  MapPin,
  Calendar,
  Sprout
} from 'lucide-react';
import { motion } from 'motion/react';

interface AgronomistFarmsProps {
  onSelectFarm: (farmId: string) => void;
  onAddUpdate: (farmId: string) => void;
}

export function AgronomistFarms({ onSelectFarm, onAddUpdate }: AgronomistFarmsProps) {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [searchQuery, setSearchQuery] = useState('');

  const farms = [
    {
      id: '1',
      farmerName: 'Ahmed Ben Salem',
      crop: 'Tomato',
      cropIcon: '🍅',
      region: 'Kairouan',
      landSize: '2.5 ha',
      growthStage: 'Flowering',
      stageProgress: 65,
      lastUpdate: '2 days ago',
      status: 'healthy',
      nextVisit: 'Nov 6, 2025'
    },
    {
      id: '2',
      farmerName: 'Fatima Mansour',
      crop: 'Olive',
      cropIcon: '🫒',
      region: 'Sfax',
      landSize: '5 ha',
      growthStage: 'Growth',
      stageProgress: 45,
      lastUpdate: '1 day ago',
      status: 'healthy',
      nextVisit: 'Nov 8, 2025'
    },
    {
      id: '3',
      farmerName: 'Mohamed Trabelsi',
      crop: 'Wheat',
      cropIcon: '🌾',
      region: 'Beja',
      landSize: '10 ha',
      growthStage: 'Growth',
      stageProgress: 40,
      lastUpdate: '5 days ago',
      status: 'attention',
      nextVisit: 'Nov 5, 2025'
    },
    {
      id: '4',
      farmerName: 'Salma Khelifi',
      crop: 'Pepper',
      cropIcon: '🌶️',
      region: 'Nabeul',
      landSize: '1.8 ha',
      growthStage: 'Flowering',
      stageProgress: 55,
      lastUpdate: 'Today',
      status: 'healthy',
      nextVisit: 'Nov 10, 2025'
    },
    {
      id: '5',
      farmerName: 'Youssef Gharbi',
      crop: 'Tomato',
      cropIcon: '🍅',
      region: 'Sousse',
      landSize: '3 ha',
      growthStage: 'Harvest Prep',
      stageProgress: 85,
      lastUpdate: '1 week ago',
      status: 'attention',
      nextVisit: 'Nov 4, 2025'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'attention':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'critical':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const filteredFarms = farms.filter(farm =>
    farm.farmerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    farm.crop.toLowerCase().includes(searchQuery.toLowerCase()) ||
    farm.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-slate-900 mb-2">My Assigned Farms</h2>
          <p className="text-slate-600">
            {farms.length} farms under your supervision
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            onClick={() => setViewMode('list')}
            className={viewMode === 'list' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
          >
            <List className="w-4 h-4 mr-2" />
            List
          </Button>
          <Button
            variant={viewMode === 'map' ? 'default' : 'outline'}
            onClick={() => setViewMode('map')}
            className={viewMode === 'map' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
          >
            <MapIcon className="w-4 h-4 mr-2" />
            Map
          </Button>
        </div>
      </div>

      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <Input
            type="text"
            placeholder="Search by farmer, crop, or region..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-slate-600 mb-1">Total Farms</p>
          <p className="text-slate-900">{farms.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-slate-600 mb-1">Need Attention</p>
          <p className="text-amber-600">
            {farms.filter(f => f.status === 'attention').length}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-slate-600 mb-1">Healthy</p>
          <p className="text-green-600">
            {farms.filter(f => f.status === 'healthy').length}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-slate-600 mb-1">Visits This Week</p>
          <p className="text-slate-900">8</p>
        </Card>
      </div>

      {/* Content */}
      {viewMode === 'list' ? (
        <div className="space-y-3">
          {filteredFarms.map((farm, index) => (
            <motion.div
              key={farm.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:border-[#4FAF6C] hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center text-2xl">
                    {farm.cropIcon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-slate-900 mb-1">{farm.farmerName}</h3>
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Sprout className="w-4 h-4" />
                            {farm.crop}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {farm.region}
                          </span>
                          <span>📏 {farm.landSize}</span>
                        </div>
                      </div>
                      <Badge className={getStatusColor(farm.status)}>
                        {farm.status === 'healthy' ? '✓ Healthy' : '⚠ Needs Attention'}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Growth Stage</p>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#4FAF6C] rounded-full"
                              style={{ width: `${farm.stageProgress}%` }}
                            />
                          </div>
                          <span className="text-sm text-slate-900">{farm.stageProgress}%</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">{farm.growthStage}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Last Update</p>
                        <p className="text-sm text-slate-900">{farm.lastUpdate}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Next Visit</p>
                        <div className="flex items-center gap-1 text-sm text-slate-900">
                          <Calendar className="w-3 h-3" />
                          {farm.nextVisit}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => onAddUpdate(farm.id)}
                        className="bg-[#4FAF6C] hover:bg-[#3d9257]"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Update
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onSelectFarm(farm.id)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <Card className="p-6">
          <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-amber-100/50"></div>
            <div className="relative z-10 text-center">
              <MapIcon className="w-12 h-12 text-[#4FAF6C] mx-auto mb-4" />
              <h3 className="text-slate-900 mb-2">Interactive Farm Map</h3>
              <p className="text-slate-600 max-w-md">
                Geographic view of all assigned farms across Tunisia
              </p>
            </div>
            {/* Mock map markers */}
            {farms.map((farm, index) => (
              <motion.div
                key={farm.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="absolute w-8 h-8 bg-[#4FAF6C] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                style={{
                  top: `${20 + index * 15}%`,
                  left: `${25 + index * 12}%`
                }}
                title={farm.farmerName}
              >
                {farm.cropIcon}
              </motion.div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
