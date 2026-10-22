import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Droplets, Thermometer, Wind, AlertTriangle, Calendar, TrendingUp, CheckCircle2 } from 'lucide-react';
import { fetchWeatherData, getWeatherIcon, type WeatherData } from '../services/weatherService';

export default function Dashboard() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWeather();
  }, []);

  const loadWeather = async () => {
    try {
      const data = await fetchWeatherData('Nairobi');
      setWeather(data);
    } catch (error) {
      console.error('Failed to load weather:', error);
    } finally {
      setLoading(false);
    }
  };
  const cropData = {
    name: 'Tomatoes',
    emoji: '🍅',
    stage: 'Flowering',
    progress: 70,
    daysToHarvest: 21,
    status: 'healthy',
  };

  const metrics = [
    { label: 'Soil Health', value: 85, icon: TrendingUp, status: 'healthy', unit: '%' },
    { label: 'Rainfall', value: 45, icon: Droplets, status: 'moderate', unit: 'mm' },
    { label: 'Irrigation', value: 78, icon: Droplets, status: 'healthy', unit: '%' },
    { label: 'Risk Index', value: 32, icon: AlertTriangle, status: 'healthy', unit: '/100' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'risk':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-[#2D8C5A]';
      case 'moderate':
        return 'bg-yellow-500';
      case 'risk':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="p-4 md:p-8 space-y-6 pb-20 md:pb-8">
      {/* Farm Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="p-4 md:p-8 bg-white shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left: Crop Info */}
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{cropData.emoji}</span>
                  <div>
                    <h3 className="text-gray-900">{cropData.name}</h3>
                    <p className="text-sm text-gray-500">Current Stage: {cropData.stage}</p>
                  </div>
                </div>
                <Badge className={`${getStatusColor(cropData.status)} border`}>
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Healthy Growth
                </Badge>
              </div>
            </div>

            {/* Growth Progress */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Growth Progress</span>
                <span className="text-sm text-[#2D8C5A]">{cropData.progress}%</span>
              </div>
              <Progress value={cropData.progress} className="h-3" />
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Harvest in {cropData.daysToHarvest} days</span>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon className="w-4 h-4" />
                      <span>{metric.label}</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-gray-900">{metric.value}</span>
                      <span className="text-xs text-gray-500">{metric.unit}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getProgressColor(metric.status)}`}
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Plant Visualization */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-b from-[#E8F5E9] to-[#F1F8E9] rounded-2xl p-8 flex items-end justify-center overflow-hidden">
              {/* Animated plant illustration */}
              <div className="relative">
                {/* Soil with better texture */}
                <div className="relative w-64 h-12 rounded-full overflow-hidden">
                  {/* Soil base */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#8B7355] to-[#6B5345] opacity-90" />
                  {/* Soil texture */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_#A0826D_0%,transparent_40%),radial-gradient(circle_at_70%_60%,_#7D6350_0%,transparent_35%),radial-gradient(circle_at_50%_80%,_#5D4A3A_0%,transparent_30%)]" />
                  {/* Soil highlight */}
                  <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-b from-[#9D8269] to-transparent opacity-50" />
                  {/* Soil shadow */}
                  <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                {/* Plant stem and leaves */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  {/* Tomato fruits with better shading */}
                  <motion.div
                    className="flex gap-6 mb-4 relative z-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    {/* Left tomato */}
                    <motion.div
                      className="relative w-12 h-12"
                      animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {/* Tomato base */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-red-500 to-red-700 rounded-full" />
                      {/* Tomato shine/highlight */}
                      <div className="absolute top-2 left-2 w-4 h-4 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-sm" />
                      <div className="absolute top-3 left-3 w-2 h-2 bg-white/80 rounded-full" />
                      {/* Tomato shadow depth */}
                      <div className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-tl from-red-900/40 to-transparent rounded-full" />
                      {/* Stem attachment */}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2">
                        <div className="w-full h-full bg-green-700 rounded-full" />
                        <div className="absolute top-0 left-0 w-1 h-1 bg-green-500/50 rounded-full" />
                      </div>
                    </motion.div>
                    
                    {/* Center tomato */}
                    <motion.div
                      className="relative w-10 h-10"
                      animate={{ scale: [1, 1.05, 1], rotate: [0, -2, 0] }}
                      transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-red-500 to-red-700 rounded-full" />
                      <div className="absolute top-1.5 left-1.5 w-3 h-3 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-sm" />
                      <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-white/80 rounded-full" />
                      <div className="absolute bottom-0 right-0 w-5 h-5 bg-gradient-to-tl from-red-900/40 to-transparent rounded-full" />
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2">
                        <div className="w-full h-full bg-green-700 rounded-full" />
                        <div className="absolute top-0 left-0 w-1 h-1 bg-green-500/50 rounded-full" />
                      </div>
                    </motion.div>
                    
                    {/* Right tomato */}
                    <motion.div
                      className="relative w-11 h-11"
                      animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
                      transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-red-500 to-red-700 rounded-full" />
                      <div className="absolute top-2 left-2 w-3.5 h-3.5 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-sm" />
                      <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 bg-white/80 rounded-full" />
                      <div className="absolute bottom-0 right-0 w-5 h-5 bg-gradient-to-tl from-red-900/40 to-transparent rounded-full" />
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2">
                        <div className="w-full h-full bg-green-700 rounded-full" />
                        <div className="absolute top-0 left-0 w-1 h-1 bg-green-500/50 rounded-full" />
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Leaves with realistic shape */}
                  <motion.div
                    className="flex gap-8 mb-2 relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {/* Left leaf */}
                    <motion.div
                      className="relative w-16 h-16"
                      animate={{ rotate: [-15, -12, -15] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                        <defs>
                          <linearGradient id="leafGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4CAF50" />
                            <stop offset="30%" stopColor="#43A047" />
                            <stop offset="70%" stopColor="#388E3C" />
                            <stop offset="100%" stopColor="#2E7D32" />
                          </linearGradient>
                          <radialGradient id="leafHighlight1">
                            <stop offset="0%" stopColor="#81C784" stopOpacity="0.6" />
                            <stop offset="70%" stopColor="#4CAF50" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        {/* Leaf shape */}
                        <ellipse cx="50" cy="50" rx="45" ry="35" fill="url(#leafGradient1)" transform="rotate(-25 50 50)" />
                        {/* Leaf highlight */}
                        <ellipse cx="35" cy="35" rx="20" ry="15" fill="url(#leafHighlight1)" transform="rotate(-25 35 35)" />
                        {/* Central vein */}
                        <path d="M 20 60 Q 50 50 80 40" stroke="#2E7D32" strokeWidth="1.5" fill="none" opacity="0.6" />
                        {/* Side veins */}
                        <path d="M 35 55 Q 45 50 40 45" stroke="#2E7D32" strokeWidth="0.8" fill="none" opacity="0.4" />
                        <path d="M 50 52 Q 55 48 52 43" stroke="#2E7D32" strokeWidth="0.8" fill="none" opacity="0.4" />
                        <path d="M 65 48 Q 68 45 65 40" stroke="#2E7D32" strokeWidth="0.8" fill="none" opacity="0.4" />
                        {/* Shadow edge */}
                        <ellipse cx="50" cy="50" rx="44" ry="34" fill="none" stroke="#1B5E20" strokeWidth="1" opacity="0.3" transform="rotate(-25 50 50)" />
                      </svg>
                    </motion.div>
                    
                    {/* Center small leaves cluster */}
                    <motion.div
                      className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-1"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <svg viewBox="0 0 40 40" className="w-8 h-8 drop-shadow">
                        <ellipse cx="20" cy="20" rx="15" ry="12" fill="url(#leafGradient1)" transform="rotate(10 20 20)" />
                        <ellipse cx="14" cy="14" rx="7" ry="5" fill="#81C784" opacity="0.4" />
                      </svg>
                      <svg viewBox="0 0 40 40" className="w-8 h-8 drop-shadow">
                        <ellipse cx="20" cy="20" rx="15" ry="12" fill="url(#leafGradient1)" transform="rotate(-10 20 20)" />
                        <ellipse cx="14" cy="14" rx="7" ry="5" fill="#81C784" opacity="0.4" />
                      </svg>
                    </motion.div>
                    
                    {/* Right leaf */}
                    <motion.div
                      className="relative w-16 h-16"
                      animate={{ rotate: [15, 12, 15] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                        <defs>
                          <linearGradient id="leafGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4CAF50" />
                            <stop offset="30%" stopColor="#43A047" />
                            <stop offset="70%" stopColor="#388E3C" />
                            <stop offset="100%" stopColor="#2E7D32" />
                          </linearGradient>
                          <radialGradient id="leafHighlight2">
                            <stop offset="0%" stopColor="#81C784" stopOpacity="0.6" />
                            <stop offset="70%" stopColor="#4CAF50" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <ellipse cx="50" cy="50" rx="45" ry="35" fill="url(#leafGradient2)" transform="rotate(25 50 50)" />
                        <ellipse cx="65" cy="35" rx="20" ry="15" fill="url(#leafHighlight2)" transform="rotate(25 65 35)" />
                        <path d="M 80 60 Q 50 50 20 40" stroke="#2E7D32" strokeWidth="1.5" fill="none" opacity="0.6" />
                        <path d="M 65 55 Q 55 50 60 45" stroke="#2E7D32" strokeWidth="0.8" fill="none" opacity="0.4" />
                        <path d="M 50 52 Q 45 48 48 43" stroke="#2E7D32" strokeWidth="0.8" fill="none" opacity="0.4" />
                        <path d="M 35 48 Q 32 45 35 40" stroke="#2E7D32" strokeWidth="0.8" fill="none" opacity="0.4" />
                        <ellipse cx="50" cy="50" rx="44" ry="34" fill="none" stroke="#1B5E20" strokeWidth="1" opacity="0.3" transform="rotate(25 50 50)" />
                      </svg>
                    </motion.div>
                  </motion.div>
                  
                  {/* Stem with better gradient and texture */}
                  <motion.div
                    className="relative w-4 h-32 rounded-t-lg overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: 128 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    {/* Stem base gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#43A047] via-[#388E3C] to-[#2E7D32]" />
                    {/* Stem highlight (left side) */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#66BB6A] via-[#4CAF50] to-transparent opacity-60" />
                    {/* Stem shadow (right side) */}
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#1B5E20] to-[#1B5E20] opacity-50" />
                    {/* Stem texture lines */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent,transparent_8px,#2E7D32_8px,#2E7D32_9px)] opacity-20" />
                  </motion.div>
                </div>

                {/* Growth indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                  className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg"
                >
                  <TrendingUp className="w-5 h-5 text-[#2D8C5A]" />
                </motion.div>
              </div>

              {/* Weather overlay */}
              {weather && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{getWeatherIcon(weather.condition)}</span>
                      <div>
                        <p className="text-sm text-gray-900">{weather.temperature}°C</p>
                        <p className="text-xs text-gray-600">{weather.condition}</p>
                      </div>
                    </div>
                    <div className="flex gap-3 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Droplets className="w-3 h-3" />
                        <span>{weather.humidity}%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Wind className="w-3 h-3" />
                        <span>{weather.windSpeed}km/h</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
        </Card>
      </motion.div>

      {/* Next Actions Card - Dynamic based on weather */}
      {weather && weather.alerts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 bg-gradient-to-r from-[#2D8C5A] to-[#3DA56A] text-white shadow-sm border-0">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  <h3 className="text-white">Next Action Required</h3>
                </div>
                <p className="text-white/90">
                  {weather.alerts[0].message}
                </p>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Thermometer className="w-4 h-4" />
                  <span>Weather alert active</span>
                </div>
              </div>
              <Button className="bg-white text-[#2D8C5A] hover:bg-gray-100 w-full sm:w-auto">
                View Details
              </Button>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Additional Farm Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {[
          { label: 'Total Area', value: '2.5 hectares', icon: TrendingUp, bg: 'bg-green-100', color: 'text-[#2D8C5A]', delay: 0.3 },
          { label: 'Expected Yield', value: '8,500 kg', emoji: '📊', bg: 'bg-blue-100', delay: 0.4 },
          { label: 'Trust Score', value: '92/100', emoji: '⭐', bg: 'bg-yellow-100', delay: 0.5 },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: stat.delay }}
          >
            <Card className="p-4 md:p-6 bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg ${stat.bg} flex items-center justify-center`}>
                  {stat.icon ? (
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  ) : (
                    <span className="text-2xl">{stat.emoji}</span>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}