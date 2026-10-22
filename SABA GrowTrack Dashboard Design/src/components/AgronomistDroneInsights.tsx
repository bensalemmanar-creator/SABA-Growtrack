import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import {
  Radar,
  Activity,
  MapPin,
  Calendar,
  Download,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Filter
} from 'lucide-react';

export function AgronomistDroneInsights() {
  const [selectedFarm, setSelectedFarm] = useState<string | null>(null);

  const droneScans = [
    {
      id: 1,
      farmer: 'Ahmed Ben Salem',
      crop: 'Tomato',
      icon: '🍅',
      region: 'Kairouan',
      scanDate: 'Today at 12:32',
      health: 78,
      ndvi: 0.76,
      alerts: 2,
      trend: 'up',
      status: 'healthy',
      heatmap: [
        { x: 20, y: 25, stress: 'low', health: 85 },
        { x: 45, y: 35, stress: 'medium', health: 65 },
        { x: 70, y: 45, stress: 'low', health: 82 }
      ]
    },
    {
      id: 2,
      farmer: 'Fatima Mansour',
      crop: 'Olive',
      icon: '🫒',
      region: 'Sfax',
      scanDate: 'Nov 25 at 14:15',
      health: 82,
      ndvi: 0.81,
      alerts: 0,
      trend: 'up',
      status: 'healthy',
      heatmap: [
        { x: 30, y: 30, stress: 'low', health: 88 },
        { x: 50, y: 50, stress: 'low', health: 82 },
        { x: 65, y: 40, stress: 'low', health: 85 }
      ]
    },
    {
      id: 3,
      farmer: 'Mohamed Trabelsi',
      crop: 'Wheat',
      icon: '🌾',
      region: 'Beja',
      scanDate: 'Nov 25 at 10:20',
      health: 65,
      ndvi: 0.68,
      alerts: 3,
      trend: 'down',
      status: 'attention',
      heatmap: [
        { x: 25, y: 35, stress: 'medium', health: 65 },
        { x: 55, y: 45, stress: 'high', health: 52 },
        { x: 75, y: 55, stress: 'medium', health: 68 }
      ]
    },
    {
      id: 4,
      farmer: 'Salma Khelifi',
      crop: 'Pepper',
      icon: '🌶️',
      region: 'Nabeul',
      scanDate: 'Nov 26 at 09:45',
      health: 85,
      ndvi: 0.84,
      alerts: 0,
      trend: 'up',
      status: 'healthy',
      heatmap: [
        { x: 35, y: 25, stress: 'low', health: 88 },
        { x: 60, y: 40, stress: 'low', health: 85 },
        { x: 45, y: 65, stress: 'low', health: 82 }
      ]
    }
  ];

  const recentAlerts = [
    {
      farm: 'Mohamed Trabelsi - Wheat',
      icon: '🌾',
      priority: 'high',
      message: 'High water stress detected in central zone',
      time: '2 hours ago',
      health: 52
    },
    {
      farm: 'Ahmed Ben Salem - Tomato',
      icon: '🍅',
      priority: 'medium',
      message: 'Slight nutrient deficiency in northeast corner',
      time: '3 hours ago',
      health: 65
    },
    {
      farm: 'Mohamed Trabelsi - Wheat',
      icon: '🌾',
      priority: 'medium',
      message: 'Potential pest activity observed',
      time: '1 day ago',
      health: 58
    }
  ];

  const getHealthColor = (health: number) => {
    if (health >= 75) return 'text-green-600';
    if (health >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  const getHealthBg = (health: number) => {
    if (health >= 75) return 'bg-green-100 text-green-700 border-green-200';
    if (health >= 60) return 'bg-amber-100 text-amber-700 border-amber-200';
    return 'bg-red-100 text-red-700 border-red-200';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'low':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-slate-900 mb-2">RoboCare Drone Insights</h2>
          <p className="text-slate-600">
            Real-time crop health monitoring across all farms
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Radar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Total Scans</p>
              <p className="text-slate-900">32</p>
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
              <p className="text-green-600">77.5%</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Active Alerts</p>
              <p className="text-amber-600">5</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Last Scan</p>
              <p className="text-slate-900">Today</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Scan List */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">Recent Drone Scans</h3>
            <div className="space-y-4">
              {droneScans.map((scan, index) => (
                <motion.div
                  key={scan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => setSelectedFarm(scan.farmer)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center text-2xl">
                      {scan.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-slate-900 mb-1">{scan.farmer}</h4>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <span>{scan.crop}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {scan.region}
                            </span>
                          </div>
                        </div>
                        <Badge className={getHealthBg(scan.health)}>
                          {scan.health}% Health
                        </Badge>
                      </div>

                      {/* Heatmap Preview */}
                      <div className="relative bg-gradient-to-br from-green-50 to-blue-50 rounded-lg h-32 mb-3 overflow-hidden">
                        {scan.heatmap.map((point) => (
                          <div
                            key={`${point.x}-${point.y}`}
                            className={`absolute w-8 h-8 rounded-full flex items-center justify-center text-white text-xs shadow-md ${
                              point.stress === 'high'
                                ? 'bg-red-500'
                                : point.stress === 'medium'
                                ? 'bg-amber-500'
                                : 'bg-green-500'
                            }`}
                            style={{ left: `${point.x}%`, top: `${point.y}%` }}
                          >
                            {point.health}
                          </div>
                        ))}
                        <div className="absolute bottom-2 right-2 bg-white rounded px-2 py-1 text-xs text-slate-600 shadow-sm">
                          Field Heatmap
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-3 mb-3">
                        <div className="text-center p-2 bg-slate-50 rounded">
                          <p className="text-xs text-slate-600 mb-1">NDVI</p>
                          <p className="text-sm text-slate-900">{scan.ndvi}</p>
                        </div>
                        <div className="text-center p-2 bg-slate-50 rounded">
                          <p className="text-xs text-slate-600 mb-1">Alerts</p>
                          <p className={`text-sm ${scan.alerts > 0 ? 'text-amber-600' : 'text-green-600'}`}>
                            {scan.alerts}
                          </p>
                        </div>
                        <div className="text-center p-2 bg-slate-50 rounded">
                          <p className="text-xs text-slate-600 mb-1">Trend</p>
                          <div className="flex items-center justify-center">
                            {scan.trend === 'up' ? (
                              <TrendingUp className="w-4 h-4 text-green-600" />
                            ) : (
                              <TrendingDown className="w-4 h-4 text-red-600" />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-slate-600">
                          <Radar className="w-4 h-4" />
                          <span>{scan.scanDate}</span>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download Report
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar - Alerts & Info */}
        <div className="space-y-6">
          {/* Recent Alerts */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-900">Attention Needed</h3>
              <Badge className="bg-amber-100 text-amber-700">{recentAlerts.length}</Badge>
            </div>
            <div className="space-y-3">
              {recentAlerts.map((alert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-3 rounded-lg border ${getPriorityColor(alert.priority)}`}
                >
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-lg">{alert.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm mb-1">{alert.farm}</p>
                      <p className="text-sm opacity-75">{alert.message}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-2 pt-2 border-t border-current opacity-50">
                    <span>{alert.time}</span>
                    <span>Health: {alert.health}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Scan Schedule */}
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">Upcoming Scans</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Radar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-900">Zone A</p>
                    <p className="text-xs text-slate-600">Tomorrow, 10:00 AM</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Radar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-900">Zone B</p>
                    <p className="text-xs text-slate-600">Nov 28, 2:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Radar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-900">Zone C</p>
                    <p className="text-xs text-slate-600">Nov 29, 9:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Drone Info */}
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">RoboCare System</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Status</span>
                <Badge className="bg-green-100 text-green-700">Active</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Coverage</span>
                <span className="text-slate-900">24.5 hectares</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Scan Frequency</span>
                <span className="text-slate-900">Every 48 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Last Maintenance</span>
                <span className="text-slate-900">Nov 20, 2025</span>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Calendar className="w-4 h-4 mr-2" />
              View Full Schedule
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
