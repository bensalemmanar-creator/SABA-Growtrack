import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import {
  Radar,
  Activity,
  AlertTriangle,
  MapPin,
  Sprout,
  Droplets,
  Package,
  TrendingUp,
  FileText,
  Plus,
  Clock,
  Thermometer,
  Users
} from 'lucide-react';

interface AgronomistDashboardProps {
  onNavigate: (screen: string, farmId?: string) => void;
}

export function AgronomistDashboard({ onNavigate }: AgronomistDashboardProps) {
  const farmers = [
    {
      id: '1',
      name: 'Ahmed Ben Salem',
      crop: 'Tomato',
      icon: '🍅',
      region: 'Kairouan',
      stage: 'Flowering',
      stageIcon: '🌸',
      progress: 65,
      riskLevel: 'low',
      droneHealth: 78,
      lastScan: '2 hours ago'
    },
    {
      id: '2',
      name: 'Fatima Mansour',
      crop: 'Olive',
      icon: '🫒',
      region: 'Sfax',
      stage: 'Growth',
      stageIcon: '🌿',
      progress: 45,
      riskLevel: 'low',
      droneHealth: 82,
      lastScan: '5 hours ago'
    },
    {
      id: '3',
      name: 'Mohamed Trabelsi',
      crop: 'Wheat',
      icon: '🌾',
      region: 'Beja',
      stage: 'Growth',
      stageIcon: '🌿',
      progress: 40,
      riskLevel: 'medium',
      droneHealth: 65,
      lastScan: '1 day ago'
    },
    {
      id: '4',
      name: 'Salma Khelifi',
      crop: 'Pepper',
      icon: '🌶️',
      region: 'Nabeul',
      stage: 'Flowering',
      stageIcon: '🌸',
      progress: 55,
      riskLevel: 'low',
      droneHealth: 85,
      lastScan: '3 hours ago'
    }
  ];

  const tasks = [
    {
      priority: 'high',
      title: 'Irrigation overdue',
      farm: 'Mohamed Trabelsi - Wheat',
      time: '2 hours ago',
      icon: Droplets,
      color: 'text-red-600'
    },
    {
      priority: 'high',
      title: 'Fertilizer application today',
      farm: 'Ahmed Ben Salem - Tomato',
      time: 'Due today',
      icon: Package,
      color: 'text-amber-600'
    },
    {
      priority: 'medium',
      title: 'Drone detected pest risk',
      farm: 'Mohamed Trabelsi - Wheat',
      time: '1 day ago',
      icon: AlertTriangle,
      color: 'text-amber-600'
    },
    {
      priority: 'medium',
      title: 'Weather warning: heat wave in Kairouan',
      farm: 'Ahmed Ben Salem',
      time: 'Tomorrow',
      icon: Thermometer,
      color: 'text-orange-600'
    }
  ];

  const droneInsights = {
    lastScan: 'Today at 12:32',
    fieldsScanned: 8,
    alerts: 2,
    avgHealth: 76,
    heatmapData: [
      { id: 1, x: 20, y: 25, stress: 'low', health: 85 },
      { id: 2, x: 45, y: 35, stress: 'medium', health: 65 },
      { id: 3, x: 70, y: 45, stress: 'low', health: 82 },
      { id: 4, x: 30, y: 60, stress: 'low', health: 78 },
      { id: 5, x: 60, y: 70, stress: 'high', health: 52 }
    ]
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'medium':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getHealthColor = (health: number) => {
    if (health >= 75) return 'text-green-600';
    if (health >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-slate-900 mb-2">Agronomist Dashboard</h2>
          <p className="text-slate-600">
            Welcome back, Dr. Karim Ayari
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Total Farms</p>
              <p className="text-slate-900">{farmers.length}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Alerts</p>
              <p className="text-amber-600">{droneInsights.alerts}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Radar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Drone Scans</p>
              <p className="text-slate-900">{droneInsights.fieldsScanned}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Avg Health</p>
              <p className={getHealthColor(droneInsights.avgHealth)}>{droneInsights.avgHealth}%</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Drone Intel Panel */}
          <Card className="p-6 shadow-lg border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50/30">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl blur-md opacity-50" />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Radar className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-slate-900">RoboCare Drone Insights</h3>
                  <Badge variant="outline" className="text-xs mt-1 bg-blue-50 text-blue-700 border-blue-300 shadow-sm">
                    <Radar className="w-3 h-3 mr-1" />
                    Source: RoboCare Drone Scan
                  </Badge>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onNavigate('drone-insights')}
                className="shadow-sm hover:shadow-md transition-shadow"
              >
                View Details
              </Button>
            </div>

            {/* Heatmap Visualization */}
            <div className="relative bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 h-64 overflow-hidden">
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-sm p-3 text-xs space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-600">Healthy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-600">Medium Stress</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-slate-600">High Stress</span>
                </div>
              </div>

              {/* Heatmap Points */}
              {droneInsights.heatmapData.map((point) => (
                <motion.div
                  key={point.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: point.id * 0.2 }}
                  className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-125 transition-transform shadow-lg ${
                    point.stress === 'high'
                      ? 'bg-red-500'
                      : point.stress === 'medium'
                      ? 'bg-amber-500'
                      : 'bg-green-500'
                  }`}
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  title={`Health: ${point.health}%`}
                >
                  <span className="text-xs">{point.health}%</span>
                </motion.div>
              ))}

              <div className="absolute bottom-4 left-4 text-sm text-slate-600 bg-white rounded-lg shadow-sm px-3 py-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Last scan: {droneInsights.lastScan}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center p-3 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600 mb-1">NDVI Index</p>
                <p className="text-slate-900">0.76</p>
              </div>
              <div className="text-center p-3 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600 mb-1">Canopy Health</p>
                <p className={getHealthColor(droneInsights.avgHealth)}>{droneInsights.avgHealth}%</p>
              </div>
              <div className="text-center p-3 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600 mb-1">Disease Risk</p>
                <p className="text-amber-600">Low</p>
              </div>
            </div>
          </Card>

          {/* Farmer List */}
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">Managed Farms</h3>
            <div className="space-y-3">
              {farmers.map((farmer, index) => (
                <motion.div
                  key={farmer.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 border border-slate-200 rounded-lg hover:border-[#4FAF6C] hover:shadow-md transition-all cursor-pointer"
                  onClick={() => onNavigate('field-file', farmer.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center text-xl">
                      {farmer.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-slate-900 mb-1">{farmer.name}</h4>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <span className="flex items-center gap-1">
                              <Sprout className="w-3 h-3" />
                              {farmer.crop}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {farmer.region}
                            </span>
                          </div>
                        </div>
                        <Badge className={getRiskColor(farmer.riskLevel)}>
                          {farmer.riskLevel === 'low' ? '✓ Healthy' : '⚠ Attention'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{farmer.stageIcon}</span>
                          <span className="text-slate-600">{farmer.stage}</span>
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#4FAF6C] rounded-full"
                              style={{ width: `${farmer.progress}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-slate-900">{farmer.progress}%</span>
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <Radar className="w-3 h-3" />
                          Drone: {farmer.droneHealth}% • {farmer.lastScan}
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigate('field-file', farmer.id);
                          }}
                        >
                          Open Field File
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tasks & Alerts */}
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">Tasks & Alerts</h3>
            <div className="space-y-3">
              {tasks.map((task, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <task.icon className={`w-4 h-4 mt-0.5 ${task.color}`} />
                    <div className="flex-1">
                      <p className="text-sm text-slate-900 mb-1">{task.title}</p>
                      <p className="text-xs text-slate-600">{task.farm}</p>
                      <p className="text-xs text-slate-500 mt-1">{task.time}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => onNavigate('field-form')}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Field Visit
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => onNavigate('marketplace')}
              >
                <Package className="w-4 h-4 mr-2" />
                Order Inputs
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => onNavigate('pre-harvest')}
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                List for Pre-Harvest Sale
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => onNavigate('loan-files')}
              >
                <FileText className="w-4 h-4 mr-2" />
                Generate Loan File
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => onNavigate('drone-insights')}
              >
                <Radar className="w-4 h-4 mr-2" />
                View Drone History
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}