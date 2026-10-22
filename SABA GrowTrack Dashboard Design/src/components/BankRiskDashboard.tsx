import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { AlertTriangle, TrendingDown, TrendingUp, Droplets, Cloud } from 'lucide-react';
import { motion } from 'motion/react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function BankRiskDashboard() {
  const riskTrendData = [
    { month: 'Apr', risk: 18 },
    { month: 'May', risk: 22 },
    { month: 'Jun', risk: 19 },
    { month: 'Jul', risk: 25 },
    { month: 'Aug', risk: 20 },
    { month: 'Sep', risk: 16 },
    { month: 'Oct', risk: 14 },
    { month: 'Nov', risk: 12 }
  ];

  const cropDistribution = [
    { name: 'Tomato', value: 35, color: '#EF4444' },
    { name: 'Olive', value: 28, color: '#84CC16' },
    { name: 'Wheat', value: 20, color: '#F59E0B' },
    { name: 'Pepper', value: 12, color: '#EAB308' },
    { name: 'Others', value: 5, color: '#94A3B8' }
  ];

  const regionalPerformance = [
    { region: 'Kairouan', performance: 92 },
    { region: 'Sfax', performance: 88 },
    { region: 'Beja', performance: 85 },
    { region: 'Nabeul', performance: 78 },
    { region: 'Sousse', performance: 82 },
    { region: 'Bizerte', performance: 90 }
  ];

  const alerts = [
    {
      severity: 'high',
      count: 2,
      message: 'High-risk farms due to drought conditions',
      region: 'Kairouan',
      icon: Droplets,
      action: 'Review irrigation plans'
    },
    {
      severity: 'medium',
      count: 3,
      message: 'Delayed irrigation reports pending',
      region: 'Multiple regions',
      icon: AlertTriangle,
      action: 'Contact agronomists'
    },
    {
      severity: 'low',
      count: 1,
      message: 'Heavy rainfall expected next week',
      region: 'Nabeul',
      icon: Cloud,
      action: 'Monitor drainage'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-50 border-red-200 text-red-700';
      case 'medium':
        return 'bg-amber-50 border-amber-200 text-amber-700';
      case 'low':
        return 'bg-blue-50 border-blue-200 text-blue-700';
      default:
        return 'bg-slate-50 border-slate-200 text-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-slate-900 mb-2">Risk Visualization Dashboard</h2>
        <p className="text-slate-600">
          Monitor aggregated risk metrics and performance indicators
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-600">Overall Risk Index</p>
              <TrendingDown className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-slate-900 mb-1">12%</p>
            <Badge className="bg-green-100 text-green-700 text-xs">
              -4% from last month
            </Badge>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-600">High-Risk Projects</p>
              <AlertTriangle className="w-4 h-4 text-red-600" />
            </div>
            <p className="text-slate-900 mb-1">8</p>
            <Badge className="bg-red-100 text-red-700 text-xs">
              Requires attention
            </Badge>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-600">Avg Performance</p>
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-slate-900 mb-1">87%</p>
            <Badge className="bg-green-100 text-green-700 text-xs">
              +3% improvement
            </Badge>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-600">Active Alerts</p>
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            </div>
            <p className="text-slate-900 mb-1">6</p>
            <Badge className="bg-amber-100 text-amber-700 text-xs">
              3 new today
            </Badge>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Index Over Time */}
        <Card className="p-6">
          <h3 className="text-slate-900 mb-4">Risk Index Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={riskTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" stroke="#64748B" />
              <YAxis stroke="#64748B" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px'
                }}
              />
              <Line
                type="monotone"
                dataKey="risk"
                stroke="#2D8C5A"
                strokeWidth={2}
                dot={{ fill: '#2D8C5A', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-900">
              Risk index trending downward - portfolio health improving
            </p>
          </div>
        </Card>

        {/* Crop Types Funded */}
        <Card className="p-6">
          <h3 className="text-slate-900 mb-4">Crop Types Funded</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={cropDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {cropDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {cropDistribution.map((crop) => (
              <div key={crop.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: crop.color }}
                />
                <span className="text-sm text-slate-600">
                  {crop.name}: {crop.value}%
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Loan Performance by Region */}
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-slate-900 mb-4">Loan Performance by Region</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={regionalPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="region" stroke="#64748B" />
              <YAxis stroke="#64748B" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="performance" fill="#2D8C5A" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Alerts Section */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-slate-900">Active Alerts & Notifications</h3>
          <Badge variant="outline">6 alerts</Badge>
        </div>
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 border rounded-lg ${getSeverityColor(alert.severity)}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-lg">
                  <alert.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="text-xs">
                      {alert.count} {alert.count === 1 ? 'project' : 'projects'}
                    </Badge>
                    <span className="text-xs text-slate-600">• {alert.region}</span>
                  </div>
                  <p className="mb-2">{alert.message}</p>
                  <p className="text-sm opacity-75">
                    Recommended action: {alert.action}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Review
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-slate-900 mb-4">Weather Impact Analysis</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Droplets className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-slate-900">Drought Conditions</p>
                  <p className="text-xs text-slate-600">2 regions affected</p>
                </div>
              </div>
              <Badge className="bg-red-100 text-red-700">High Impact</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Cloud className="w-5 h-5 text-slate-600" />
                <div>
                  <p className="text-sm text-slate-900">Normal Rainfall</p>
                  <p className="text-xs text-slate-600">4 regions</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-700">Low Impact</Badge>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-slate-900 mb-4">Portfolio Health Score</h3>
          <div className="flex items-center justify-center py-8">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#E2E8F0"
                  strokeWidth="12"
                  fill="none"
                />
                <motion.circle
                  initial={{ strokeDashoffset: 352 }}
                  animate={{ strokeDashoffset: 352 - (352 * 87) / 100 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#2D8C5A"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="352"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-slate-900">87%</p>
                  <p className="text-xs text-slate-600">Excellent</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
