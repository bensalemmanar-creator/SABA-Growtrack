import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { CheckCircle2, TrendingUp, Calendar, MapPin, Phone, MessageSquare } from 'lucide-react';

export default function PreHarvest() {
  const cropListings = [
    {
      id: 1,
      crop: 'Tomatoes',
      emoji: '🍅',
      expectedYield: '8,500 kg',
      harvestDate: 'Nov 25, 2024',
      healthScore: 92,
      verifiedBy: 'Dr. Sarah Kimani',
      status: 'available',
      interestedBuyers: 5,
    },
    {
      id: 2,
      crop: 'Bell Peppers',
      emoji: '🫑',
      expectedYield: '3,200 kg',
      harvestDate: 'Dec 10, 2024',
      healthScore: 88,
      verifiedBy: 'Dr. John Mwangi',
      status: 'available',
      interestedBuyers: 3,
    },
  ];

  const buyers = [
    {
      id: 1,
      name: 'Fresh Export Co.',
      type: 'Exporter',
      location: 'Nairobi',
      rating: 4.8,
      offer: 'KES 85/kg',
      verified: true,
      phone: '+254 700 123 456',
    },
    {
      id: 2,
      name: 'Urban Fresh Markets',
      type: 'Retailer',
      location: 'Mombasa',
      rating: 4.6,
      offer: 'KES 80/kg',
      verified: true,
      phone: '+254 700 789 012',
    },
    {
      id: 3,
      name: 'AgriProcessors Ltd',
      type: 'Processor',
      location: 'Eldoret',
      rating: 4.7,
      offer: 'KES 75/kg',
      verified: true,
      phone: '+254 700 345 678',
    },
  ];

  const getHealthColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getHealthBg = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 75) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="p-4 md:p-8 space-y-6 pb-20 md:pb-8">
      {/* Header */}
      <Card className="p-6 bg-gradient-to-r from-[#2D8C5A] to-[#3DA56A] text-white shadow-sm border-0">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white mb-2">Pre-Harvest Marketplace</h3>
            <p className="text-white/90">
              Secure buyers before harvest and get early income access
            </p>
          </div>
          <Button className="bg-white text-[#2D8C5A] hover:bg-gray-100">
            List New Crop
          </Button>
        </div>
      </Card>

      {/* Benefits Banner */}
      <Card className="p-5 bg-blue-50 border border-blue-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-gray-900 mb-1">Earn Early Income</p>
            <p className="text-sm text-gray-600">
              Pre-sell your verified crops to secure funding faster. Banks trust our 
              agronomist-verified data, making loan approval easier.
            </p>
          </div>
        </div>
      </Card>

      {/* Your Crop Listings */}
      <div>
        <h3 className="text-gray-900 mb-4">Your Active Listings</h3>
        <div className="space-y-4">
          {cropListings.map((listing) => (
            <Card key={listing.id} className="p-6 bg-white shadow-sm border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Crop Info */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                        <span className="text-3xl">{listing.emoji}</span>
                      </div>
                      <div>
                        <h4 className="text-gray-900 mb-1">{listing.crop}</h4>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-100 text-green-800 border-green-200 border">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Verified by {listing.verifiedBy}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Expected Yield</p>
                      <p className="text-gray-900">{listing.expectedYield}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Harvest Date</p>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <p className="text-gray-900">{listing.harvestDate}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Crop Health</p>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-12 h-12 rounded-lg ${getHealthBg(
                            listing.healthScore
                          )} flex items-center justify-center`}
                        >
                          <span className={getHealthColor(listing.healthScore)}>
                            {listing.healthScore}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-[#2D8C5A]" />
                        <span>
                          {listing.interestedBuyers} buyers interested
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        className="border-[#2D8C5A] text-[#2D8C5A] hover:bg-[#2D8C5A] hover:text-white"
                      >
                        View Offers
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Right: Quick Stats */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <p className="text-sm text-gray-600">Market Insights</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Average Price</span>
                      <span className="text-gray-900">KES 80/kg</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Est. Revenue</span>
                      <span className="text-gray-900">KES 680,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Best Offer</span>
                      <span className="text-[#2D8C5A]">KES 85/kg</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Available Buyers */}
      <div>
        <h3 className="text-gray-900 mb-4">Available Buyers for Tomatoes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {buyers.map((buyer) => (
            <Card
              key={buyer.id}
              className="p-5 bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-gray-900">{buyer.name}</h4>
                      {buyer.verified && (
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      )}
                    </div>
                    <Badge variant="outline" className="border-gray-200">
                      {buyer.type}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{buyer.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{buyer.phone}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600">Offer Price</span>
                    <span className="text-gray-900">{buyer.offer}</span>
                  </div>
                  <Button className="w-full bg-[#2D8C5A] hover:bg-[#236B47] text-white">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Negotiate Deal
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Success Story */}
      <Card className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">💡</span>
          </div>
          <div>
            <h4 className="text-gray-900 mb-2">Success Story</h4>
            <p className="text-gray-700 mb-3">
              "I secured a buyer 3 weeks before harvest through SABA. This gave me confidence 
              to apply for a loan, which was approved in 2 days. The verified crop data from 
              GrowTrack made all the difference." - Mary Wanjiku, Kiambu
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Crop: Tomatoes</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-600">Revenue: KES 950,000</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
