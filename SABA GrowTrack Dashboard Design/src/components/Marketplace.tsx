import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, CheckCircle2, Star, TrendingUp, ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Marketplace() {
  const recommendedProducts = [
    {
      id: 1,
      name: 'Organic NPK Fertilizer 10-10-10',
      supplier: 'AgroSupply Kenya',
      price: 'KES 2,500',
      unit: '25kg bag',
      rating: 4.8,
      verified: true,
      badge: 'Recommended',
      category: 'Fertilizer',
    },
    {
      id: 2,
      name: 'Bio Pesticide - Neem Extract',
      supplier: 'EcoFarm Solutions',
      price: 'KES 1,800',
      unit: '1L bottle',
      rating: 4.6,
      verified: true,
      badge: 'Best for Tomatoes',
      category: 'Pesticide',
    },
    {
      id: 3,
      name: 'Drip Irrigation System',
      supplier: 'WaterWise Tech',
      price: 'KES 15,000',
      unit: 'Complete kit',
      rating: 4.9,
      verified: true,
      badge: 'Save Water',
      category: 'Irrigation',
    },
  ];

  const allProducts = [
    {
      id: 4,
      name: 'Calcium Nitrate Spray',
      supplier: 'FarmChem Ltd',
      price: 'KES 1,200',
      unit: '500ml',
      rating: 4.5,
      verified: true,
      category: 'Fertilizer',
    },
    {
      id: 5,
      name: 'Mulching Film',
      supplier: 'PlasticAg Kenya',
      price: 'KES 3,500',
      unit: '100m roll',
      rating: 4.4,
      verified: true,
      category: 'Equipment',
    },
    {
      id: 6,
      name: 'Seedling Trays - 72 cells',
      supplier: 'NurseryPro',
      price: 'KES 350',
      unit: 'per tray',
      rating: 4.7,
      verified: true,
      category: 'Equipment',
    },
    {
      id: 7,
      name: 'Foliar Booster Spray',
      supplier: 'GrowStrong Ltd',
      price: 'KES 2,200',
      unit: '1L bottle',
      rating: 4.6,
      verified: true,
      category: 'Fertilizer',
    },
    {
      id: 8,
      name: 'Smart Soil Moisture Sensor',
      supplier: 'AgriTech Solutions',
      price: 'KES 5,500',
      unit: 'per sensor',
      rating: 4.8,
      verified: true,
      category: 'Technology',
    },
    {
      id: 9,
      name: 'Organic Compost',
      supplier: 'GreenWaste Recyclers',
      price: 'KES 800',
      unit: '20kg bag',
      rating: 4.5,
      verified: true,
      category: 'Fertilizer',
    },
  ];

  const partnerOffers = [
    {
      supplier: 'AgroSupply Kenya',
      offer: '15% off on orders above KES 10,000',
      validUntil: 'Nov 30, 2024',
      commission: 'SABA earns 5% commission',
    },
    {
      supplier: 'WaterWise Tech',
      offer: 'Free installation for SABA farmers',
      validUntil: 'Dec 15, 2024',
      commission: 'SABA earns 8% commission',
    },
  ];

  return (
    <div className="p-4 md:p-8 space-y-6 pb-20 md:pb-8">
      {/* Header */}
      <Card className="p-6 bg-white shadow-sm border border-gray-200">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Find verified inputs or suppliers..."
              className="pl-10"
            />
          </div>
          <Button className="bg-[#2D8C5A] hover:bg-[#236B47] text-white">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </Card>

      {/* Recommended Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[#2D8C5A]" />
          <h3 className="text-gray-900">Recommended for Your Tomato Crop</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center relative">
                <span className="text-5xl">
                  {product.category === 'Fertilizer'
                    ? '🌱'
                    : product.category === 'Pesticide'
                    ? '🛡️'
                    : '💧'}
                </span>
                <Badge className="absolute top-3 right-3 bg-[#2D8C5A] text-white border-0">
                  {product.badge}
                </Badge>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="text-gray-900 mb-1">{product.name}</h4>
                  <p className="text-sm text-gray-500">{product.unit}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-green-200 text-green-700">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {product.supplier}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">{product.price}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <Button size="sm" className="bg-[#2D8C5A] hover:bg-[#236B47] text-white">
                    Buy Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Partner Offers */}
      <div>
        <h3 className="text-gray-900 mb-4">Partner Offers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {partnerOffers.map((offer, index) => (
            <Card
              key={index}
              className="p-5 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-gray-900 mb-1">{offer.supplier}</p>
                  <p className="text-gray-700">{offer.offer}</p>
                </div>
                <Badge className="bg-yellow-500 text-white border-0">Special</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Valid until {offer.validUntil}</span>
                <span className="text-xs text-gray-400">{offer.commission}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* All Products */}
      <div>
        <h3 className="text-gray-900 mb-4">All Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <span className="text-5xl">
                  {product.category === 'Fertilizer'
                    ? '🌱'
                    : product.category === 'Equipment'
                    ? '🔧'
                    : '📡'}
                </span>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="text-gray-900 mb-1">{product.name}</h4>
                  <p className="text-sm text-gray-500">{product.unit}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-gray-200 text-gray-600 text-xs">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                  <span className="text-sm text-gray-600">{product.supplier}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">{product.price}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#2D8C5A] text-[#2D8C5A] hover:bg-[#2D8C5A] hover:text-white"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Info Banner */}
      <Card className="p-6 bg-blue-50 border border-blue-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h4 className="text-gray-900 mb-2">All Suppliers are SABA Verified</h4>
            <p className="text-gray-700">
              Every supplier in the marketplace has been vetted by SABA for quality, 
              authenticity, and fair pricing. Your purchases support the SABA ecosystem 
              and help maintain this free service for farmers.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
