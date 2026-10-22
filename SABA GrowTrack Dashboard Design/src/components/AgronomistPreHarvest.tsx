import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Plus,
  Eye,
  Calendar,
  MapPin,
  Sprout,
  DollarSign,
  Users,
  CheckCircle2,
  Clock
} from 'lucide-react';

interface AgronomistPreHarvestProps {
  onCreateListing?: () => void;
}

export function AgronomistPreHarvest({ onCreateListing }: AgronomistPreHarvestProps) {
  const [activeTab, setActiveTab] = useState<'active' | 'pending' | 'sold'>('active');

  const listings = [
    {
      id: 1,
      farmer: 'Ahmed Ben Salem',
      crop: 'Tomato',
      icon: '🍅',
      region: 'Kairouan',
      expectedYield: '4,800 kg',
      harvestDate: 'Dec 10, 2025',
      quality: 'Premium',
      healthScore: 78,
      price: '2.50 TND/kg',
      interestedBuyers: 5,
      status: 'active',
      daysToHarvest: 14,
      listedDate: 'Nov 20, 2025'
    },
    {
      id: 2,
      farmer: 'Salma Khelifi',
      crop: 'Pepper',
      icon: '🌶️',
      region: 'Nabeul',
      expectedYield: '2,200 kg',
      harvestDate: 'Dec 15, 2025',
      quality: 'Premium',
      healthScore: 85,
      price: '3.20 TND/kg',
      interestedBuyers: 8,
      status: 'active',
      daysToHarvest: 19,
      listedDate: 'Nov 22, 2025'
    },
    {
      id: 3,
      farmer: 'Mohamed Trabelsi',
      crop: 'Wheat',
      icon: '🌾',
      region: 'Beja',
      expectedYield: '8,500 kg',
      harvestDate: 'Dec 5, 2025',
      quality: 'Standard',
      healthScore: 65,
      price: '0.85 TND/kg',
      interestedBuyers: 3,
      status: 'pending',
      daysToHarvest: 9,
      listedDate: 'Nov 24, 2025'
    },
    {
      id: 4,
      farmer: 'Fatima Mansour',
      crop: 'Olive',
      icon: '🫒',
      region: 'Sfax',
      expectedYield: '3,200 kg',
      harvestDate: 'Nov 28, 2025',
      quality: 'Premium',
      healthScore: 82,
      price: '4.50 TND/kg',
      interestedBuyers: 12,
      status: 'sold',
      daysToHarvest: 2,
      listedDate: 'Nov 15, 2025',
      soldDate: 'Nov 25, 2025',
      buyer: 'Tunis Fresh Produce Ltd'
    }
  ];

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'Premium':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Standard':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Economy':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'pending':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'sold':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getHealthColor = (health: number) => {
    if (health >= 75) return 'text-green-600';
    if (health >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  const filteredListings = listings.filter(listing => listing.status === activeTab);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-slate-900 mb-2">Pre-Harvest Marketing</h2>
          <p className="text-slate-600">
            List crops for sale before harvest - Connect farmers with buyers
          </p>
        </div>
        <Button 
          className="bg-[#4FAF6C] hover:bg-[#3d9257]"
          onClick={onCreateListing}
        >
          <Plus className="w-4 h-4 mr-2" />
          Create New Listing
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Active Listings</p>
              <p className="text-slate-900">
                {listings.filter(l => l.status === 'active').length}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Pending Review</p>
              <p className="text-slate-900">
                {listings.filter(l => l.status === 'pending').length}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Sold</p>
              <p className="text-slate-900">
                {listings.filter(l => l.status === 'sold').length}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Total Buyers</p>
              <p className="text-slate-900">28</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Card className="p-2">
        <div className="flex gap-2">
          <Button
            variant={activeTab === 'active' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('active')}
            className={activeTab === 'active' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Active ({listings.filter(l => l.status === 'active').length})
          </Button>
          <Button
            variant={activeTab === 'pending' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('pending')}
            className={activeTab === 'pending' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
          >
            <Clock className="w-4 h-4 mr-2" />
            Pending ({listings.filter(l => l.status === 'pending').length})
          </Button>
          <Button
            variant={activeTab === 'sold' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('sold')}
            className={activeTab === 'sold' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Sold ({listings.filter(l => l.status === 'sold').length})
          </Button>
        </div>
      </Card>

      {/* Listings */}
      <div className="space-y-4">
        {filteredListings.map((listing, index) => (
          <motion.div
            key={listing.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 hover:border-[#4FAF6C] hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center text-2xl">
                  {listing.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-slate-900 mb-1">{listing.farmer}</h3>
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Sprout className="w-4 h-4" />
                          {listing.crop}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {listing.region}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getQualityColor(listing.quality)}>
                        {listing.quality}
                      </Badge>
                      <Badge className={getStatusColor(listing.status)}>
                        {listing.status === 'active' ? '● Active' : 
                         listing.status === 'pending' ? '⏳ Pending' : 
                         '✓ Sold'}
                      </Badge>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-slate-600 mb-1">Expected Yield</p>
                      <p className="text-sm text-slate-900">{listing.expectedYield}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 mb-1">Harvest Date</p>
                      <div className="flex items-center gap-1 text-sm text-slate-900">
                        <Calendar className="w-3 h-3" />
                        {listing.harvestDate}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 mb-1">Price</p>
                      <div className="flex items-center gap-1 text-sm text-slate-900">
                        <DollarSign className="w-3 h-3" />
                        {listing.price}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 mb-1">Days to Harvest</p>
                      <Badge variant="outline" className="text-slate-900">
                        {listing.daysToHarvest} days
                      </Badge>
                    </div>
                  </div>

                  {/* Health Score */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs text-slate-600">Field Health Score</p>
                      <span className={`text-sm ${getHealthColor(listing.healthScore)}`}>
                        {listing.healthScore}%
                      </span>
                    </div>
                    <Progress value={listing.healthScore} className="h-2" />
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      {listing.status !== 'sold' && (
                        <>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{listing.interestedBuyers} interested buyers</span>
                          </div>
                          <span>•</span>
                        </>
                      )}
                      <span>Listed: {listing.listedDate}</span>
                      {listing.status === 'sold' && listing.soldDate && (
                        <>
                          <span>•</span>
                          <span className="text-green-600">Sold: {listing.soldDate}</span>
                        </>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {listing.status === 'sold' && listing.buyer && (
                        <Badge variant="outline" className="text-blue-600">
                          Buyer: {listing.buyer}
                        </Badge>
                      )}
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      {listing.status === 'active' && (
                        <Button size="sm" className="bg-[#4FAF6C] hover:bg-[#3d9257]">
                          Manage Listing
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredListings.length === 0 && (
        <Card className="p-12 text-center">
          <TrendingUp className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-slate-900 mb-2">No {activeTab} listings</h3>
          <p className="text-slate-600 mb-4">
            {activeTab === 'active' 
              ? "Create a new listing to connect farmers with buyers"
              : activeTab === 'pending'
              ? "No listings pending review"
              : "No sold listings yet"}
          </p>
          {activeTab === 'active' && (
            <Button className="bg-[#4FAF6C] hover:bg-[#3d9257]" onClick={onCreateListing}>
              <Plus className="w-4 h-4 mr-2" />
              Create New Listing
            </Button>
          )}
        </Card>
      )}
    </div>
  );
}
