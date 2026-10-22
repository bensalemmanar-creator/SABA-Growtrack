import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { motion } from 'motion/react';
import {
  FileText,
  Download,
  Send,
  CheckCircle2,
  Clock,
  XCircle,
  MapPin,
  Sprout,
  DollarSign,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

export function AgronomistLoanFiles() {
  const [activeTab, setActiveTab] = useState<'draft' | 'submitted' | 'approved' | 'rejected'>('submitted');

  const loanFiles = [
    {
      id: 1,
      farmer: 'Ahmed Ben Salem',
      crop: 'Tomato',
      icon: '🍅',
      region: 'Kairouan',
      loanAmount: '2,500 TND',
      purpose: 'Seeds & Fertilizer',
      status: 'submitted',
      submittedDate: 'Nov 24, 2025',
      riskLevel: 'Low',
      healthScore: 78,
      expectedRevenue: '12,000 TND',
      inputCosts: '3,200 TND',
      completeness: 100,
      bankReviewer: 'Ahmed Khalil',
      lastUpdate: '1 day ago'
    },
    {
      id: 2,
      farmer: 'Salma Khelifi',
      crop: 'Pepper',
      icon: '🌶️',
      region: 'Nabeul',
      loanAmount: '1,800 TND',
      purpose: 'Irrigation Equipment',
      status: 'approved',
      submittedDate: 'Nov 20, 2025',
      approvedDate: 'Nov 23, 2025',
      riskLevel: 'Low',
      healthScore: 85,
      expectedRevenue: '7,500 TND',
      inputCosts: '2,400 TND',
      completeness: 100,
      bankReviewer: 'Ahmed Khalil',
      lastUpdate: '3 days ago'
    },
    {
      id: 3,
      farmer: 'Mohamed Trabelsi',
      crop: 'Wheat',
      icon: '🌾',
      region: 'Beja',
      loanAmount: '3,200 TND',
      purpose: 'Full Season Inputs',
      status: 'draft',
      createdDate: 'Nov 25, 2025',
      riskLevel: 'Medium',
      healthScore: 65,
      expectedRevenue: '8,500 TND',
      inputCosts: '4,200 TND',
      completeness: 75,
      lastUpdate: 'Today'
    },
    {
      id: 4,
      farmer: 'Youssef Gharbi',
      crop: 'Tomato',
      icon: '🍅',
      region: 'Sousse',
      loanAmount: '2,000 TND',
      purpose: 'Pest Control',
      status: 'rejected',
      submittedDate: 'Nov 18, 2025',
      rejectedDate: 'Nov 22, 2025',
      rejectionReason: 'Insufficient field health score',
      riskLevel: 'High',
      healthScore: 52,
      expectedRevenue: '5,000 TND',
      inputCosts: '2,800 TND',
      completeness: 100,
      bankReviewer: 'Ahmed Khalil',
      lastUpdate: '4 days ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      case 'submitted':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'approved':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Medium':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'High':
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'draft':
        return FileText;
      case 'submitted':
        return Clock;
      case 'approved':
        return CheckCircle2;
      case 'rejected':
        return XCircle;
      default:
        return FileText;
    }
  };

  const filteredFiles = loanFiles.filter(file => file.status === activeTab);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-slate-900 mb-2">Loan Files Management</h2>
          <p className="text-slate-600">
            Generate and manage verified loan dossiers for farmers
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Draft</p>
              <p className="text-slate-900">
                {loanFiles.filter(f => f.status === 'draft').length}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Under Review</p>
              <p className="text-slate-900">
                {loanFiles.filter(f => f.status === 'submitted').length}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Approved</p>
              <p className="text-slate-900">
                {loanFiles.filter(f => f.status === 'approved').length}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <XCircle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Rejected</p>
              <p className="text-slate-900">
                {loanFiles.filter(f => f.status === 'rejected').length}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Card className="p-2">
        <div className="flex gap-2 overflow-x-auto">
          <Button
            variant={activeTab === 'draft' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('draft')}
            className={activeTab === 'draft' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
          >
            <FileText className="w-4 h-4 mr-2" />
            Draft ({loanFiles.filter(f => f.status === 'draft').length})
          </Button>
          <Button
            variant={activeTab === 'submitted' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('submitted')}
            className={activeTab === 'submitted' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
          >
            <Clock className="w-4 h-4 mr-2" />
            Submitted ({loanFiles.filter(f => f.status === 'submitted').length})
          </Button>
          <Button
            variant={activeTab === 'approved' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('approved')}
            className={activeTab === 'approved' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Approved ({loanFiles.filter(f => f.status === 'approved').length})
          </Button>
          <Button
            variant={activeTab === 'rejected' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('rejected')}
            className={activeTab === 'rejected' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
          >
            <XCircle className="w-4 h-4 mr-2" />
            Rejected ({loanFiles.filter(f => f.status === 'rejected').length})
          </Button>
        </div>
      </Card>

      {/* Loan Files List */}
      <div className="space-y-4">
        {filteredFiles.map((file, index) => {
          const StatusIcon = getStatusIcon(file.status);
          return (
            <motion.div
              key={file.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:border-[#4FAF6C] hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center text-2xl">
                    {file.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-slate-900 mb-1">{file.farmer}</h3>
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Sprout className="w-4 h-4" />
                            {file.crop}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {file.region}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getStatusColor(file.status)}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {file.status.charAt(0).toUpperCase() + file.status.slice(1)}
                        </Badge>
                        <Badge className={getRiskColor(file.riskLevel)}>
                          {file.riskLevel} Risk
                        </Badge>
                      </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Loan Amount</p>
                        <div className="flex items-center gap-1 text-sm text-slate-900">
                          <DollarSign className="w-3 h-3" />
                          {file.loanAmount}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Purpose</p>
                        <p className="text-sm text-slate-900">{file.purpose}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Expected Revenue</p>
                        <div className="flex items-center gap-1 text-sm text-green-600">
                          <TrendingUp className="w-3 h-3" />
                          {file.expectedRevenue}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Input Costs</p>
                        <p className="text-sm text-slate-900">{file.inputCosts}</p>
                      </div>
                    </div>

                    {/* Health & Completeness */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs text-slate-600">Field Health Score</p>
                          <span className={`text-sm ${getHealthColor(file.healthScore)}`}>
                            {file.healthScore}%
                          </span>
                        </div>
                        <Progress value={file.healthScore} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs text-slate-600">File Completeness</p>
                          <span className="text-sm text-slate-900">{file.completeness}%</span>
                        </div>
                        <Progress value={file.completeness} className="h-2" />
                      </div>
                    </div>

                    {/* Rejection Reason */}
                    {file.status === 'rejected' && file.rejectionReason && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg mb-4">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
                          <div>
                            <p className="text-sm text-red-900 mb-1">Rejection Reason</p>
                            <p className="text-sm text-red-700">{file.rejectionReason}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <div className="text-sm text-slate-600">
                        {file.status === 'draft' && file.createdDate && (
                          <span>Created: {file.createdDate}</span>
                        )}
                        {file.status === 'submitted' && file.submittedDate && (
                          <span>Submitted: {file.submittedDate}</span>
                        )}
                        {file.status === 'approved' && file.approvedDate && (
                          <span className="text-green-600">Approved: {file.approvedDate}</span>
                        )}
                        {file.status === 'rejected' && file.rejectedDate && (
                          <span className="text-red-600">Rejected: {file.rejectedDate}</span>
                        )}
                        {file.bankReviewer && (
                          <>
                            <span> • </span>
                            <span>Reviewer: {file.bankReviewer}</span>
                          </>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        {file.status === 'draft' && (
                          <Button size="sm" className="bg-[#4FAF6C] hover:bg-[#3d9257]">
                            <Send className="w-4 h-4 mr-2" />
                            Submit to Bank
                          </Button>
                        )}
                        {file.status === 'submitted' && (
                          <Button size="sm" variant="outline">
                            View Status
                          </Button>
                        )}
                        {file.status === 'rejected' && (
                          <Button size="sm" className="bg-[#4FAF6C] hover:bg-[#3d9257]">
                            Revise & Resubmit
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {filteredFiles.length === 0 && (
        <Card className="p-12 text-center">
          <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-slate-900 mb-2">No {activeTab} loan files</h3>
          <p className="text-slate-600">
            {activeTab === 'draft' 
              ? "Create loan files from the Field File section"
              : activeTab === 'submitted'
              ? "No files pending bank review"
              : activeTab === 'approved'
              ? "No approved loan files yet"
              : "No rejected loan files"}
          </p>
        </Card>
      )}
    </div>
  );
}
