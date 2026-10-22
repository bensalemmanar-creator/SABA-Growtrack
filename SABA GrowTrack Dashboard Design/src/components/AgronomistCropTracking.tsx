import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  ArrowLeft,
  Cloud,
  Droplets,
  Thermometer,
  Wind,
  Send,
  AlertTriangle
} from 'lucide-react';
import { motion } from 'motion/react';

interface AgronomistCropTrackingProps {
  onBack: () => void;
}

export function AgronomistCropTracking({ onBack }: AgronomistCropTrackingProps) {
  const [growthProgress, setGrowthProgress] = useState(65);

  const weatherData = {
    current: {
      temp: '24°C',
      condition: 'Partly Cloudy',
      humidity: '68%',
      wind: '12 km/h'
    },
    forecast: [
      { day: 'Today', icon: '⛅', temp: '24°C', rain: '10%' },
      { day: 'Tomorrow', icon: '☀️', temp: '26°C', rain: '5%' },
      { day: 'Thu', icon: '🌧️', temp: '22°C', rain: '60%' },
      { day: 'Fri', icon: '⛅', temp: '23°C', rain: '20%' },
      { day: 'Sat', icon: '☀️', temp: '25°C', rain: '0%' }
    ]
  };

  const recommendations = [
    {
      priority: 'high',
      title: 'Irrigation Recommended',
      description: 'Soil moisture below optimal. Schedule irrigation within 24 hours.',
      action: 'Schedule Now'
    },
    {
      priority: 'medium',
      title: 'Fertilizer Application Due',
      description: 'Next fertilizer application recommended by Nov 8.',
      action: 'Add to Calendar'
    },
    {
      priority: 'low',
      title: 'Monitor for Pests',
      description: 'Neighboring farms reported aphid activity.',
      action: 'View Details'
    }
  ];

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
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack} className="p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h2 className="text-slate-900 mb-1">Crop Progress Tracking</h2>
          <p className="text-slate-600">Ahmed Ben Salem - Tomato Farm</p>
        </div>
        <Button className="bg-[#4FAF6C] hover:bg-[#3d9257]">
          <Send className="w-4 h-4 mr-2" />
          Send Update to Bank
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Animated Plant Visualization */}
          <Card className="p-8">
            <h3 className="text-slate-900 mb-6 text-center">Growth Visualization</h3>
            <div className="flex items-center justify-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="relative"
              >
                <div className="relative w-64 h-64">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2"
                  >
                    <svg width="160" height="200" viewBox="0 0 160 200" fill="none">
                      {/* Pot */}
                      <path
                        d="M60 200 L100 200 L110 180 L50 180 Z"
                        fill="#8B4513"
                      />
                      {/* Soil */}
                      <ellipse cx="80" cy="180" rx="30" ry="8" fill="#654321" />
                      
                      {/* Main Stem */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: growthProgress / 100 }}
                        transition={{ duration: 2 }}
                        d="M80 180 Q80 140, 80 60"
                        stroke="#2D8C5A"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                      
                      {/* Leaves */}
                      {growthProgress > 20 && (
                        <>
                          <motion.ellipse
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 }}
                            cx="55"
                            cy="130"
                            rx="25"
                            ry="18"
                            fill="#4FAF6C"
                          />
                          <motion.ellipse
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.7 }}
                            cx="105"
                            cy="120"
                            rx="25"
                            ry="18"
                            fill="#4FAF6C"
                          />
                          <motion.ellipse
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.9 }}
                            cx="50"
                            cy="90"
                            rx="22"
                            ry="16"
                            fill="#3d9257"
                          />
                          <motion.ellipse
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.1 }}
                            cx="110"
                            cy="85"
                            rx="22"
                            ry="16"
                            fill="#3d9257"
                          />
                        </>
                      )}
                      
                      {/* Flowers/Tomatoes */}
                      {growthProgress > 60 && (
                        <>
                          <motion.circle
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1] }}
                            transition={{ delay: 1.5 }}
                            cx="65"
                            cy="75"
                            r="14"
                            fill="#EF4444"
                          />
                          <motion.circle
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1] }}
                            transition={{ delay: 1.7 }}
                            cx="95"
                            cy="70"
                            r="12"
                            fill="#DC2626"
                          />
                          <motion.circle
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1] }}
                            transition={{ delay: 1.9 }}
                            cx="80"
                            cy="65"
                            r="13"
                            fill="#EF4444"
                          />
                        </>
                      )}
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-4 mt-8">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-slate-600">Overall Growth Progress</p>
                  <Badge className="bg-green-100 text-green-700">
                    {growthProgress}% Complete
                  </Badge>
                </div>
                <Progress value={growthProgress} className="h-3" />
              </div>

              <div className="grid grid-cols-4 gap-4 pt-4">
                {[
                  { stage: 'Seeding', progress: 100, icon: '🌱', color: 'bg-green-500' },
                  { stage: 'Growth', progress: 100, icon: '🌿', color: 'bg-green-500' },
                  { stage: 'Flowering', progress: 80, icon: '🌸', color: 'bg-amber-500' },
                  { stage: 'Harvest', progress: 10, icon: '🍅', color: 'bg-slate-300' }
                ].map((stage) => (
                  <div key={stage.stage} className="text-center">
                    <div className="text-3xl mb-2">{stage.icon}</div>
                    <p className="text-xs text-slate-600 mb-2">{stage.stage}</p>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${stage.color} rounded-full transition-all duration-500`}
                        style={{ width: `${stage.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Recommendations */}
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">AI-Generated Recommendations</h3>
            <div className="space-y-3">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 border rounded-lg ${getPriorityColor(rec.priority)}`}
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm">{rec.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {rec.priority} priority
                        </Badge>
                      </div>
                      <p className="text-sm opacity-75 mb-2">{rec.description}</p>
                      <Button size="sm" variant="outline">
                        {rec.action}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Weather */}
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">Weather Forecast</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Current</p>
                    <p className="text-slate-900">{weatherData.current.condition}</p>
                  </div>
                  <p className="text-slate-900">{weatherData.current.temp}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="flex items-center gap-1 text-slate-600">
                    <Droplets className="w-4 h-4" />
                    {weatherData.current.humidity}
                  </div>
                  <div className="flex items-center gap-1 text-slate-600">
                    <Wind className="w-4 h-4" />
                    {weatherData.current.wind}
                  </div>
                  <div className="flex items-center gap-1 text-slate-600">
                    <Cloud className="w-4 h-4" />
                    Low
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {weatherData.forecast.map((day, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{day.icon}</span>
                      <div>
                        <p className="text-sm text-slate-900">{day.day}</p>
                        <p className="text-xs text-slate-600">Rain: {day.rain}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-900">{day.temp}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Current Metrics */}
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">Current Metrics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-slate-600">Soil Moisture</p>
                  <Badge className="bg-blue-100 text-blue-700">72%</Badge>
                </div>
                <Progress value={72} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-slate-600">Plant Health</p>
                  <Badge className="bg-green-100 text-green-700">Excellent</Badge>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-slate-600">Nutrient Level</p>
                  <Badge className="bg-green-100 text-green-700">Good</Badge>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                📸 Add Photo Update
              </Button>
              <Button variant="outline" className="w-full justify-start">
                📝 Add Field Note
              </Button>
              <Button variant="outline" className="w-full justify-start">
                🔔 Set Reminder
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
