import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  MessageSquare, 
  Send, 
  Bell,
  AlertTriangle,
  Cloud,
  Building2,
  User,
  Search
} from 'lucide-react';
import { motion } from 'motion/react';

export function AgronomistMessages() {
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const messages = [
    {
      id: '1',
      from: 'Bank Officer - Ahmed Khalil',
      fromType: 'bank',
      subject: 'Need updated soil data for loan review',
      preview: 'Could you please provide the latest soil moisture readings for Ahmed Ben Salem\'s farm?',
      time: '2 hours ago',
      unread: true,
      priority: 'high'
    },
    {
      id: '2',
      from: 'Bank Officer - Leila Mansour',
      fromType: 'bank',
      subject: 'Requesting field visit report',
      preview: 'We need the latest field visit report for Fatima Mansour\'s olive farm.',
      time: '5 hours ago',
      unread: true,
      priority: 'medium'
    },
    {
      id: '3',
      from: 'Farmer - Mohamed Trabelsi',
      fromType: 'farmer',
      subject: 'Question about fertilizer application',
      preview: 'When should I apply the next round of fertilizer?',
      time: '1 day ago',
      unread: false,
      priority: 'low'
    }
  ];

  const alerts = [
    {
      id: '1',
      type: 'weather',
      severity: 'high',
      message: 'Heavy rainfall expected in Kairouan region',
      action: 'Alert farmers about drainage preparation',
      time: '1 hour ago',
      icon: Cloud
    },
    {
      id: '2',
      type: 'pest',
      severity: 'medium',
      message: 'Pest outbreak reported in neighboring area',
      action: 'Inspect tomato crops for early signs',
      time: '3 hours ago',
      icon: AlertTriangle
    },
    {
      id: '3',
      type: 'task',
      severity: 'low',
      message: 'Fertilizer application due for 3 farms',
      action: 'Schedule field visits this week',
      time: '1 day ago',
      icon: Bell
    }
  ];

  const notificationTemplates = [
    {
      title: 'Fertilizer Reminder',
      template: 'Time to apply fertilizer to your {crop} crop. Recommended: {fertilizer_type}.'
    },
    {
      title: 'Irrigation Alert',
      template: 'Irrigation needed within 24 hours. Soil moisture below optimal level.'
    },
    {
      title: 'Weather Warning',
      template: '{weather_event} forecasted for {date}. Please take necessary precautions.'
    },
    {
      title: 'Harvest Ready',
      template: 'Your {crop} crop is approaching harvest readiness. Schedule harvest planning.'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
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

  const getIconByType = (type: string) => {
    switch (type) {
      case 'bank':
        return Building2;
      case 'farmer':
        return User;
      default:
        return MessageSquare;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-slate-900 mb-2">Messages & Alerts</h2>
        <p className="text-slate-600">
          Communication hub for farmers and bank officers
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <MessageSquare className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-slate-600 text-sm">Unread Messages</p>
              <p className="text-slate-900">2</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Bell className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-slate-600 text-sm">Active Alerts</p>
              <p className="text-slate-900">3</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Send className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-slate-600 text-sm">Sent Today</p>
              <p className="text-slate-900">8</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <User className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-slate-600 text-sm">Farmer Queries</p>
              <p className="text-slate-900">1</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="messages" className="space-y-6">
        <TabsList>
          <TabsTrigger value="messages" className="gap-2">
            <MessageSquare className="w-4 h-4" />
            Messages
            <Badge className="bg-blue-100 text-blue-700">2</Badge>
          </TabsTrigger>
          <TabsTrigger value="alerts" className="gap-2">
            <Bell className="w-4 h-4" />
            Alerts
            <Badge className="bg-amber-100 text-amber-700">3</Badge>
          </TabsTrigger>
          <TabsTrigger value="send" className="gap-2">
            <Send className="w-4 h-4" />
            Send Notification
          </TabsTrigger>
        </TabsList>

        {/* Messages Tab */}
        <TabsContent value="messages" className="space-y-4">
          <Card className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Message List */}
            <div className="lg:col-span-1 space-y-3">
              {messages.map((message, index) => {
                const Icon = getIconByType(message.fromType);
                return (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      className={`p-4 cursor-pointer transition-all ${
                        selectedMessage === message.id
                          ? 'border-[#4FAF6C] bg-green-50/50'
                          : 'hover:border-[#4FAF6C]'
                      } ${message.unread ? 'bg-blue-50/30' : ''}`}
                      onClick={() => setSelectedMessage(message.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-slate-100 rounded-lg">
                          <Icon className="w-4 h-4 text-slate-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-sm text-slate-900 truncate">
                              {message.from}
                            </p>
                            {message.unread && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            )}
                          </div>
                          <p className="text-xs text-slate-900 mb-1 truncate">
                            {message.subject}
                          </p>
                          <p className="text-xs text-slate-600 truncate mb-2">
                            {message.preview}
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-slate-500">{message.time}</p>
                            <Badge
                              variant="outline"
                              className={`text-xs ${getSeverityColor(message.priority)}`}
                            >
                              {message.priority}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Message Detail */}
            <div className="lg:col-span-2">
              {selectedMessage ? (
                <Card className="p-6">
                  {(() => {
                    const message = messages.find(m => m.id === selectedMessage);
                    if (!message) return null;
                    const Icon = getIconByType(message.fromType);
                    return (
                      <>
                        <div className="flex items-start gap-4 mb-6 pb-6 border-b border-slate-200">
                          <div className="p-3 bg-slate-100 rounded-lg">
                            <Icon className="w-6 h-6 text-slate-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-slate-900 mb-1">{message.subject}</h3>
                            <p className="text-sm text-slate-600 mb-2">
                              From: {message.from}
                            </p>
                            <p className="text-xs text-slate-500">{message.time}</p>
                          </div>
                          <Badge className={getSeverityColor(message.priority)}>
                            {message.priority} priority
                          </Badge>
                        </div>

                        <div className="mb-6">
                          <p className="text-slate-900">
                            {message.preview}
                          </p>
                          <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                            <p className="text-sm text-slate-600">
                              This request requires you to provide updated field data for the specified farm.
                              Please use the field form to submit the latest readings.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Label className="text-slate-900">Reply</Label>
                          <Textarea
                            placeholder="Type your response..."
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            rows={4}
                          />
                          <div className="flex gap-2">
                            <Button className="bg-[#4FAF6C] hover:bg-[#3d9257]">
                              <Send className="w-4 h-4 mr-2" />
                              Send Reply
                            </Button>
                            <Button variant="outline">Mark as Read</Button>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </Card>
              ) : (
                <Card className="p-12 text-center">
                  <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">Select a message to view details</p>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        {/* Alerts Tab */}
        <TabsContent value="alerts" className="space-y-4">
          {alerts.map((alert, index) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`p-6 border ${getSeverityColor(alert.severity)}`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg">
                    <alert.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-slate-900">{alert.message}</h3>
                      <Badge variant="outline" className="text-xs">
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-sm opacity-75 mb-3">
                      Recommended action: {alert.action}
                    </p>
                    <div className="flex items-center gap-3">
                      <Button size="sm" className="bg-[#4FAF6C] hover:bg-[#3d9257]">
                        Take Action
                      </Button>
                      <Button size="sm" variant="outline">
                        Dismiss
                      </Button>
                      <p className="text-xs text-slate-500 ml-auto">{alert.time}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </TabsContent>

        {/* Send Notification Tab */}
        <TabsContent value="send" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-slate-900 mb-4">Send Push Notification to Farmers</h3>
            <p className="text-sm text-slate-600 mb-6">
              Send alerts and reminders via SMS or app notifications
            </p>

            <div className="space-y-4">
              <div>
                <Label>Quick Templates</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {notificationTemplates.map((template, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start h-auto py-3 px-4"
                      onClick={() => setReplyText(template.template)}
                    >
                      <div className="text-left">
                        <p className="text-sm text-slate-900 mb-1">{template.title}</p>
                        <p className="text-xs text-slate-600">{template.template}</p>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Type your message..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  rows={5}
                  className="mt-2"
                />
                <p className="text-xs text-slate-500 mt-1">
                  {replyText.length}/160 characters
                </p>
              </div>

              <Button className="w-full md:w-auto bg-[#4FAF6C] hover:bg-[#3d9257]">
                <Send className="w-4 h-4 mr-2" />
                Send to All Farmers
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Label({ children, htmlFor, className = '' }: { children: React.ReactNode; htmlFor?: string; className?: string }) {
  return (
    <label htmlFor={htmlFor} className={`text-sm text-slate-700 ${className}`}>
      {children}
    </label>
  );
}
