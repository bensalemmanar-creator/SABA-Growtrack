import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { X, AlertTriangle, CheckCircle2, Info, MessageSquare, Phone } from 'lucide-react';
import { fetchWeatherData, getWeatherIcon, type WeatherData } from '../services/weatherService';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && !weather) {
      loadWeather();
    }
  }, [isOpen]);

  const loadWeather = async () => {
    setLoading(true);
    try {
      const data = await fetchWeatherData('Nairobi');
      setWeather(data);
    } catch (error) {
      console.error('Failed to load weather:', error);
    } finally {
      setLoading(false);
    }
  };

  const notifications = [
    {
      id: 1,
      type: 'alert',
      icon: AlertTriangle,
      title: 'Weather Alert',
      message: weather?.alerts[0]?.message || 'High temperature expected tomorrow (32°C)',
      time: '2 hours ago',
      action: 'View Forecast',
    },
    {
      id: 2,
      type: 'success',
      icon: CheckCircle2,
      title: 'Task Completed',
      message: 'Pruning & staking marked as done. Great job!',
      time: 'Yesterday',
      action: null,
    },
    {
      id: 3,
      type: 'info',
      icon: Info,
      title: 'New Market Price',
      message: 'Tomato prices increased to KES 85/kg',
      time: '2 days ago',
      action: 'View Marketplace',
    },
  ];

  const smsNotifications = [
    {
      id: 1,
      sender: 'SABA GrowTrack',
      message: '🌧️ Rain expected in 2 days. Check drainage systems. Reply DONE when complete.',
      time: '10:30 AM',
      read: false,
    },
    {
      id: 2,
      sender: 'SABA GrowTrack',
      message: '✅ Great work! Your trust score increased to 92%. Keep it up!',
      time: 'Yesterday',
      read: true,
    },
    {
      id: 3,
      sender: 'SABA Advisory',
      message: '🌱 Week 8 Task: Apply organic fertilizer tomorrow. NPK 10-10-10, 50g per plant.',
      time: '2 days ago',
      read: true,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 z-40"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-gray-900">Notifications</h3>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto">
              {/* Weather Section */}
              {weather && (
                <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-green-50">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-4xl">{getWeatherIcon(weather.condition)}</div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">Current Weather</p>
                      <p className="text-gray-900">{weather.temperature}°C</p>
                      <p className="text-sm text-gray-700">{weather.condition}</p>
                    </div>
                  </div>
                  
                  {/* Forecast */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {weather.forecast.slice(0, 5).map((day, index) => (
                      <div key={index} className="flex-shrink-0 bg-white rounded-lg p-2 text-center min-w-[60px]">
                        <p className="text-xs text-gray-600 mb-1">{day.day}</p>
                        <p className="text-lg mb-1">{getWeatherIcon(day.condition)}</p>
                        <p className="text-sm text-gray-900">{day.temp}°</p>
                        <p className="text-xs text-blue-600">{day.rainChance}%</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SMS/WhatsApp Style Notifications */}
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm text-gray-900">SMS Alerts</h4>
                  <Button variant="ghost" size="sm" className="text-xs">
                    <Phone className="w-3 h-3 mr-1" />
                    Enable SMS
                  </Button>
                </div>
                <div className="space-y-2">
                  {smsNotifications.map((sms) => (
                    <Card
                      key={sms.id}
                      className={`p-3 ${
                        sms.read ? 'bg-white' : 'bg-green-50 border-green-200'
                      }`}
                    >
                      <div className="flex items-start gap-2 mb-1">
                        <MessageSquare className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-600 mb-1">{sms.sender}</p>
                          <p className="text-sm text-gray-900 break-words">{sms.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{sms.time}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Regular Notifications */}
              <div className="p-4">
                <h4 className="text-sm text-gray-900 mb-3">Recent Activity</h4>
                <div className="space-y-3">
                  {notifications.map((notification) => {
                    const Icon = notification.icon;
                    const iconColor = 
                      notification.type === 'alert' ? 'text-yellow-600 bg-yellow-100' :
                      notification.type === 'success' ? 'text-green-600 bg-green-100' :
                      'text-blue-600 bg-blue-100';

                    return (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className={`w-10 h-10 rounded-full ${iconColor} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900 mb-1">{notification.title}</p>
                          <p className="text-sm text-gray-600 break-words">{notification.message}</p>
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-xs text-gray-500">{notification.time}</p>
                            {notification.action && (
                              <Button variant="ghost" size="sm" className="text-xs h-auto py-1 px-2">
                                {notification.action}
                              </Button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200">
              <Button variant="outline" className="w-full" size="sm">
                Mark All as Read
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
