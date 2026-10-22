import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { CheckCircle2, Circle, Droplets, Sprout, Package, TrendingUp, Award, Star } from 'lucide-react';

export default function PlantRight() {
  const crops = [
    { id: 'tomatoes', name: 'Tomatoes 🍅', active: true },
    { id: 'peppers', name: 'Peppers 🌶️', active: false },
  ];

  const tomatoTimeline = [
    {
      week: 'Week 8',
      date: 'Nov 4-10',
      task: 'Apply organic fertilizer',
      description: 'NPK 10-10-10 ratio, 50g per plant',
      status: 'pending',
      icon: Package,
      completed: false,
    },
    {
      week: 'Week 9',
      date: 'Nov 11-17',
      task: 'Check for pests',
      description: 'Inspect leaves for aphids and whiteflies',
      status: 'upcoming',
      icon: TrendingUp,
      completed: false,
    },
    {
      week: 'Week 10',
      date: 'Nov 18-24',
      task: 'Increase watering',
      description: 'Fruit development phase - water twice daily',
      status: 'upcoming',
      icon: Droplets,
      completed: false,
    },
    {
      week: 'Week 11',
      date: 'Nov 25-Dec 1',
      task: 'Harvest preparation',
      description: 'Prepare containers and arrange transport',
      status: 'upcoming',
      icon: Sprout,
      completed: false,
    },
  ];

  const completedTasks = [
    {
      week: 'Week 7',
      date: 'Oct 28-Nov 3',
      task: 'Pruning & staking',
      status: 'completed',
    },
  ];

  const notifications = [
    {
      time: '2 hours ago',
      message: 'Rain expected in 2 days – check drainage systems',
      type: 'alert',
    },
    {
      time: 'Yesterday',
      message: 'Great job! Your consistency score increased to 92%',
      type: 'success',
    },
  ];

  const badges = [
    { name: 'Reliable Grower', icon: '🏆', earned: true, progress: 100 },
    { name: 'Consistent Maintainer', icon: '⭐', earned: true, progress: 100 },
    { name: 'Early Adopter', icon: '🚀', earned: false, progress: 65 },
    { name: 'Climate Smart', icon: '🌍', earned: false, progress: 40 },
  ];

  return (
    <div className="p-4 md:p-8 space-y-6 pb-20 md:pb-8">
      {/* Header Card */}
      <Card className="p-6 bg-gradient-to-r from-[#2D8C5A] to-[#3DA56A] text-white shadow-sm border-0">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white mb-2">Plant Right Advisory</h3>
            <p className="text-white/90">
              Follow personalized recommendations to maximize your yield
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
              <span className="text-white">92%</span>
            </div>
            <p className="text-sm text-white/80">Trust Score</p>
          </div>
        </div>
      </Card>

      {/* Crop Tabs */}
      <Tabs defaultValue="tomatoes" className="w-full">
        <TabsList className="bg-white border border-gray-200">
          {crops.map((crop) => (
            <TabsTrigger
              key={crop.id}
              value={crop.id}
              className="data-[state=active]:bg-[#2D8C5A] data-[state=active]:text-white"
            >
              {crop.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="tomatoes" className="space-y-6 mt-6">
          {/* Timeline View */}
          <Card className="p-6 bg-white shadow-sm border border-gray-200">
            <h4 className="text-gray-900 mb-6">Weekly Action Plan</h4>

            {/* Completed Tasks */}
            {completedTasks.map((task, index) => (
              <div key={index} className="flex gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="w-0.5 h-full bg-green-200 mt-2" />
                </div>
                <div className="flex-1 opacity-60">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-gray-900">{task.week}</p>
                      <p className="text-sm text-gray-500">{task.date}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-200 border">
                      Completed
                    </Badge>
                  </div>
                  <p className="text-gray-700">{task.task}</p>
                </div>
              </div>
            ))}

            {/* Upcoming Tasks */}
            {tomatoTimeline.map((item, index) => {
              const Icon = item.icon;
              const isFirst = index === 0;
              return (
                <div key={index} className="flex gap-4 mb-6">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isFirst
                          ? 'bg-[#2D8C5A] text-white'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {index < tomatoTimeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-gray-900">{item.week}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                      {isFirst && (
                        <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 border">
                          Action Required
                        </Badge>
                      )}
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <p className="text-gray-900">{item.task}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      {isFirst && (
                        <Button className="bg-[#2D8C5A] hover:bg-[#236B47] text-white w-full">
                          Mark as Done
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </Card>

          {/* SMS Notifications */}
          <Card className="p-6 bg-white shadow-sm border border-gray-200">
            <h4 className="text-gray-900 mb-4">Recent Notifications</h4>
            <div className="space-y-3">
              {notifications.map((notif, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    notif.type === 'alert'
                      ? 'bg-yellow-50 border-yellow-200'
                      : 'bg-green-50 border-green-200'
                  }`}
                >
                  <p className="text-sm text-gray-500 mb-1">{notif.time}</p>
                  <p className="text-gray-900">{notif.message}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Trust Badges */}
          <Card className="p-6 bg-white shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-gray-900">Your Trust Badges</h4>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    badge.earned
                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{badge.icon}</span>
                    <div className="flex-1">
                      <p className="text-gray-900">{badge.name}</p>
                      <p className="text-sm text-gray-500">
                        {badge.earned ? 'Earned' : `${badge.progress}% complete`}
                      </p>
                    </div>
                    {badge.earned && (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                  {!badge.earned && <Progress value={badge.progress} className="h-2" />}
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="peppers">
          <Card className="p-12 bg-white shadow-sm border border-gray-200 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌶️</span>
            </div>
            <h4 className="text-gray-900 mb-2">Pepper Advisory Coming Soon</h4>
            <p className="text-gray-500">
              Start tracking your pepper crops to receive personalized advice
            </p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
