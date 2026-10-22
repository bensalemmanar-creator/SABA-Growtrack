import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { 
  Download, 
  FileText, 
  Share2, 
  Calendar as CalendarIcon,
  Filter,
  FileSpreadsheet,
  FileBarChart
} from 'lucide-react';
import { motion } from 'motion/react';
import { format } from 'date-fns';

export function BankReports() {
  const [season, setSeason] = useState<string>('all');
  const [region, setRegion] = useState<string>('all');
  const [cropType, setCropType] = useState<string>('all');
  const [dateFrom, setDateFrom] = useState<Date | undefined>();
  const [dateTo, setDateTo] = useState<Date | undefined>();

  const reportTypes = [
    {
      title: 'Portfolio Performance Report',
      description: 'Comprehensive overview of all active loans and performance metrics',
      format: ['PDF', 'Excel'],
      icon: FileBarChart,
      color: 'bg-blue-500'
    },
    {
      title: 'Risk Assessment Report',
      description: 'Detailed risk analysis by region, crop type, and season',
      format: ['PDF', 'Excel'],
      icon: FileText,
      color: 'bg-red-500'
    },
    {
      title: 'Farmer Progress Reports',
      description: 'Individual farmer crop progress and health metrics',
      format: ['PDF'],
      icon: FileText,
      color: 'bg-green-500'
    },
    {
      title: 'Financial Summary',
      description: 'Loan disbursement, repayment status, and ROI analysis',
      format: ['Excel', 'PDF'],
      icon: FileSpreadsheet,
      color: 'bg-purple-500'
    },
    {
      title: 'Regional Performance',
      description: 'Performance metrics grouped by geographic region',
      format: ['PDF', 'Excel'],
      icon: FileBarChart,
      color: 'bg-orange-500'
    },
    {
      title: 'Agronomist Activity Log',
      description: 'Summary of field visits, updates, and recommendations',
      format: ['PDF', 'Excel'],
      icon: FileText,
      color: 'bg-teal-500'
    }
  ];

  const recentReports = [
    {
      name: 'Q4 2025 Portfolio Performance',
      date: 'Nov 1, 2025',
      format: 'PDF',
      size: '2.4 MB'
    },
    {
      name: 'October Risk Assessment',
      date: 'Oct 31, 2025',
      format: 'Excel',
      size: '1.8 MB'
    },
    {
      name: 'Kairouan Regional Report',
      date: 'Oct 28, 2025',
      format: 'PDF',
      size: '1.2 MB'
    },
    {
      name: 'Tomato Crop Analysis',
      date: 'Oct 25, 2025',
      format: 'PDF',
      size: '956 KB'
    }
  ];

  const shareOptions = [
    'Ministry of Agriculture',
    'Financial Regulatory Authority',
    'Donor Partners',
    'Internal Audit Team',
    'Board of Directors'
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-slate-900 mb-2">Reports & Insights</h2>
        <p className="text-slate-600">
          Generate and export comprehensive reports for analysis and compliance
        </p>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-4 h-4 text-slate-600" />
          <h3 className="text-slate-900">Report Filters</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="text-sm text-slate-600 mb-2 block">Season</label>
            <Select value={season} onValueChange={setSeason}>
              <SelectTrigger>
                <SelectValue placeholder="All Seasons" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Seasons</SelectItem>
                <SelectItem value="spring-2025">Spring 2025</SelectItem>
                <SelectItem value="summer-2025">Summer 2025</SelectItem>
                <SelectItem value="fall-2025">Fall 2025</SelectItem>
                <SelectItem value="winter-2025">Winter 2025</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-slate-600 mb-2 block">Region</label>
            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger>
                <SelectValue placeholder="All Regions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="kairouan">Kairouan</SelectItem>
                <SelectItem value="sfax">Sfax</SelectItem>
                <SelectItem value="beja">Beja</SelectItem>
                <SelectItem value="nabeul">Nabeul</SelectItem>
                <SelectItem value="sousse">Sousse</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-slate-600 mb-2 block">Crop Type</label>
            <Select value={cropType} onValueChange={setCropType}>
              <SelectTrigger>
                <SelectValue placeholder="All Crops" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Crops</SelectItem>
                <SelectItem value="tomato">Tomato</SelectItem>
                <SelectItem value="olive">Olive</SelectItem>
                <SelectItem value="wheat">Wheat</SelectItem>
                <SelectItem value="pepper">Pepper</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-slate-600 mb-2 block">Date Range</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateFrom ? format(dateFrom, 'PP') : 'Select date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dateFrom}
                  onSelect={setDateFrom}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </Card>

      {/* Report Types */}
      <div>
        <h3 className="text-slate-900 mb-4">Available Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reportTypes.map((report, index) => (
            <motion.div
              key={report.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:border-[#2D8C5A] hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${report.color} p-3 rounded-lg`}>
                    <report.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-slate-900 mb-1">{report.title}</h4>
                    <p className="text-sm text-slate-600">{report.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  {report.format.map((fmt) => (
                    <Badge key={fmt} variant="outline" className="text-xs">
                      {fmt}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-[#2D8C5A] hover:bg-[#256f48]">
                    <Download className="w-4 h-4 mr-2" />
                    Generate
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Reports */}
      <Card className="p-6">
        <h3 className="text-slate-900 mb-4">Recent Reports</h3>
        <div className="space-y-3">
          {recentReports.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-[#2D8C5A] hover:bg-green-50/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <FileText className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <p className="text-slate-900 mb-1">{report.name}</p>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <span>{report.date}</span>
                    <span>•</span>
                    <Badge variant="outline" className="text-xs">
                      {report.format}
                    </Badge>
                    <span>•</span>
                    <span>{report.size}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Share Options */}
      <Card className="p-6">
        <h3 className="text-slate-900 mb-4">Share with Stakeholders</h3>
        <p className="text-sm text-slate-600 mb-4">
          Select recipients to securely share reports with external partners and regulatory bodies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {shareOptions.map((option) => (
            <Button
              key={option}
              variant="outline"
              className="justify-start"
            >
              <Share2 className="w-4 h-4 mr-2" />
              {option}
            </Button>
          ))}
        </div>
      </Card>

      {/* Export Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <p className="text-sm text-slate-600 mb-2">Reports Generated (This Month)</p>
          <p className="text-slate-900">47</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-slate-600 mb-2">Total Downloads</p>
          <p className="text-slate-900">152</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-slate-600 mb-2">Shared with Partners</p>
          <p className="text-slate-900">28</p>
        </Card>
      </div>
    </div>
  );
}
