import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Download, TrendingUp, TrendingDown, CheckCircle2, AlertTriangle, Cloud, Droplets } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function RiskReport() {
  const yieldData = [
    { week: 'Week 1', predicted: 4000, actual: 4200 },
    { week: 'Week 2', predicted: 4500, actual: 4400 },
    { week: 'Week 3', predicted: 5000, actual: 5100 },
    { week: 'Week 4', predicted: 5500, actual: 5600 },
    { week: 'Week 5', predicted: 6000, actual: 6200 },
    { week: 'Week 6', predicted: 6500, actual: 6400 },
    { week: 'Week 7', predicted: 7000, actual: 7100 },
    { week: 'Week 8', predicted: 7500, actual: 7600 },
    { week: 'Week 9', predicted: 8000, actual: null },
    { week: 'Week 10', predicted: 8300, actual: null },
    { week: 'Week 11', predicted: 8500, actual: null },
  ];

  const riskIndexData = [
    { week: 'Week 1', risk: 45 },
    { week: 'Week 2', risk: 42 },
    { week: 'Week 3', risk: 38 },
    { week: 'Week 4', risk: 35 },
    { week: 'Week 5', risk: 40 },
    { week: 'Week 6', risk: 38 },
    { week: 'Week 7', risk: 33 },
    { week: 'Week 8', risk: 32 },
  ];

  const profitForecast = [
    { month: 'Oct', revenue: 0, costs: 45000, profit: -45000 },
    { month: 'Nov', revenue: 680000, costs: 85000, profit: 595000 },
    { month: 'Dec', revenue: 250000, costs: 40000, profit: 210000 },
  ];

  const weatherImpact = [
    {
      event: 'Heavy Rainfall',
      date: 'Week 5',
      impact: 'Medium',
      action: 'Improved drainage systems',
      outcome: 'No crop damage',
    },
    {
      event: 'High Temperature',
      date: 'Week 7',
      impact: 'Low',
      action: 'Increased irrigation frequency',
      outcome: 'Maintained growth rate',
    },
  ];

  const keyMetrics = [
    {
      label: 'Current Yield Progress',
      value: '89%',
      change: '+5%',
      trend: 'up',
      icon: TrendingUp,
    },
    {
      label: 'Risk Index',
      value: '32/100',
      change: '-8',
      trend: 'down',
      icon: AlertTriangle,
    },
    {
      label: 'Expected Revenue',
      value: 'KES 680K',
      change: '+12%',
      trend: 'up',
      icon: TrendingUp,
    },
    {
      label: 'Trust Score',
      value: '92/100',
      change: '+3',
      trend: 'up',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="p-4 md:p-8 space-y-6 pb-20 md:pb-8">
      {/* Header */}
      <Card className="p-6 bg-white shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-gray-900 mb-2">Funding Readiness Report</h3>
            <p className="text-gray-600">
              Comprehensive data-driven insights for farmers and financial institutions
            </p>
          </div>
          <Button className="bg-[#2D8C5A] hover:bg-[#236B47] text-white">
            <Download className="w-4 h-4 mr-2" />
            Download PDF Report
          </Button>
        </div>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {keyMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="p-5 bg-white shadow-sm border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    metric.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}
                  />
                </div>
                <Badge
                  className={`${
                    metric.trend === 'up'
                      ? 'bg-green-100 text-green-800 border-green-200'
                      : 'bg-red-100 text-red-800 border-red-200'
                  } border`}
                >
                  {metric.change}
                </Badge>
              </div>
              <p className="text-sm text-gray-500 mb-1">{metric.label}</p>
              <p className="text-gray-900">{metric.value}</p>
            </Card>
          );
        })}
      </div>

      {/* Yield Prediction vs Actual */}
      <Card className="p-6 bg-white shadow-sm border border-gray-200">
        <div className="mb-6">
          <h4 className="text-gray-900 mb-2">Yield Prediction vs Actual Performance</h4>
          <p className="text-sm text-gray-600">
            Tracking expected vs actual yield growth (kg)
          </p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={yieldData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="week" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FFF',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#94A3B8"
              strokeWidth={2}
              strokeDasharray="5 5"
              name="Predicted Yield"
            />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#2D8C5A"
              strokeWidth={3}
              name="Actual Yield"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Risk Index Trend */}
      <Card className="p-6 bg-white shadow-sm border border-gray-200">
        <div className="mb-6">
          <h4 className="text-gray-900 mb-2">Risk Index Trend</h4>
          <p className="text-sm text-gray-600">
            Lower scores indicate better crop health and reduced risk
          </p>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={riskIndexData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="week" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FFF',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
              }}
            />
            <Area
              type="monotone"
              dataKey="risk"
              stroke="#F59E0B"
              fill="#FEF3C7"
              strokeWidth={2}
              name="Risk Index"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* Profit Forecast */}
      <Card className="p-6 bg-white shadow-sm border border-gray-200">
        <div className="mb-6">
          <h4 className="text-gray-900 mb-2">Profit Forecast</h4>
          <p className="text-sm text-gray-600">
            Revenue, costs, and projected profit (KES)
          </p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={profitForecast}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="month" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FFF',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Bar dataKey="revenue" fill="#2D8C5A" name="Revenue" />
            <Bar dataKey="costs" fill="#EF4444" name="Costs" />
            <Bar dataKey="profit" fill="#3B82F6" name="Net Profit" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Weather Impact Summary */}
      <Card className="p-6 bg-white shadow-sm border border-gray-200">
        <h4 className="text-gray-900 mb-4">Weather Impact Summary</h4>
        <div className="space-y-3">
          {weatherImpact.map((event, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                {event.event.includes('Rain') ? (
                  <Droplets className="w-5 h-5 text-blue-600" />
                ) : (
                  <Cloud className="w-5 h-5 text-orange-600" />
                )}
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Event</p>
                  <p className="text-gray-900">{event.event}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Impact Level</p>
                  <Badge
                    className={`${
                      event.impact === 'Low'
                        ? 'bg-green-100 text-green-800 border-green-200'
                        : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                    } border`}
                  >
                    {event.impact}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Action Taken</p>
                  <p className="text-sm text-gray-700">{event.action}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Outcome</p>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <p className="text-sm text-gray-700">{event.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Growth Timeline */}
      <Card className="p-6 bg-white shadow-sm border border-gray-200">
        <h4 className="text-gray-900 mb-4">Growth Timeline (Week 1-12)</h4>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
          
          <div className="space-y-6">
            {[
              { week: 'Week 1-2', stage: 'Seedling', status: 'completed', color: 'green' },
              { week: 'Week 3-4', stage: 'Vegetative Growth', status: 'completed', color: 'green' },
              { week: 'Week 5-6', stage: 'Early Flowering', status: 'completed', color: 'green' },
              { week: 'Week 7-8', stage: 'Flowering & Fruit Set', status: 'current', color: 'blue' },
              { week: 'Week 9-10', stage: 'Fruit Development', status: 'upcoming', color: 'gray' },
              { week: 'Week 11-12', stage: 'Ripening & Harvest', status: 'upcoming', color: 'gray' },
            ].map((phase, index) => (
              <div key={index} className="relative flex items-center gap-4 ml-6">
                <div
                  className={`absolute -left-6 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center z-10 ${
                    phase.status === 'completed'
                      ? 'bg-green-500'
                      : phase.status === 'current'
                      ? 'bg-blue-500'
                      : 'bg-gray-300'
                  }`}
                >
                  {phase.status === 'completed' && (
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  )}
                  {phase.status === 'current' && (
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900">{phase.stage}</p>
                  <p className="text-sm text-gray-500">{phase.week}</p>
                </div>
                {phase.status === 'current' && (
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 border">
                    In Progress
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Verification Footer */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h4 className="text-gray-900 mb-2">Data Verification</h4>
            <p className="text-gray-700">
              All data in this report has been verified by SABA Agronomists and AgriCash Partners. 
              This report can be used for loan applications, insurance claims, and buyer negotiations. 
              Report generated on Nov 4, 2024.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-600">Verified by Dr. Sarah Kimani</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-600">AgriCash Approved</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
