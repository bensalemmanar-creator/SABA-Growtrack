import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { motion } from 'motion/react';
import {
  Package,
  Search,
  ShoppingCart,
  CheckCircle2,
  Filter,
  Truck,
  Star
} from 'lucide-react';

export function AgronomistMarketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<number[]>([]);

  const categories = [
    { id: 'all', label: 'All Products', icon: '📦' },
    { id: 'fertilizers', label: 'Fertilizers', icon: '🌱' },
    { id: 'pesticides', label: 'Pesticides', icon: '🐛' },
    { id: 'seeds', label: 'Seeds', icon: '🌾' },
    { id: 'irrigation', label: 'Irrigation', icon: '💧' }
  ];

  const products = [
    {
      id: 1,
      name: 'NPK Fertilizer 15-15-15',
      category: 'fertilizers',
      supplier: 'AgriSupply Tunisia',
      price: '45 TND',
      unit: 'per 25kg bag',
      dosage: '300 kg/ha',
      rating: 4.8,
      verified: true,
      inStock: true,
      delivery: '2-3 days',
      icon: (
        <div className="relative w-full h-full bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white">
            <path d="M16 4L8 8V16C8 21 12 25 16 28C20 25 24 21 24 16V8L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.3"/>
            <circle cx="16" cy="14" r="3" fill="currentColor"/>
            <path d="M13 19L15 21L19 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )
    },
    {
      id: 2,
      name: 'Organic Pesticide Premium',
      category: 'pesticides',
      supplier: 'BioFarm Solutions',
      price: '120 TND',
      unit: 'per liter',
      dosage: '2 L/ha',
      rating: 4.9,
      verified: true,
      inStock: true,
      delivery: '1-2 days',
      icon: (
        <div className="relative w-full h-full bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white">
            <path d="M16 6V10M16 22V26M8 14H12M20 14H24M10 10L12 12M20 12L22 10M10 22L12 20M20 20L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.3"/>
          </svg>
        </div>
      )
    },
    {
      id: 3,
      name: 'Hybrid Tomato Seeds - Premium',
      category: 'seeds',
      supplier: 'SeedTech International',
      price: '180 TND',
      unit: 'per 1000 seeds',
      dosage: '2500 seeds/ha',
      rating: 4.7,
      verified: true,
      inStock: true,
      delivery: '3-5 days',
      icon: (
        <div className="relative w-full h-full bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white">
            <ellipse cx="16" cy="16" rx="5" ry="7" fill="currentColor" fillOpacity="0.4"/>
            <path d="M16 9C12 9 10 12 10 16C10 20 12 23 16 23C20 23 22 20 22 16C22 12 20 9 16 9Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M16 9V6M14 10L12 8M18 10L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      )
    },
    {
      id: 4,
      name: 'Drip Irrigation System Kit',
      category: 'irrigation',
      supplier: 'IrrigaTech Pro',
      price: '850 TND',
      unit: 'per hectare kit',
      dosage: '1 kit per hectare',
      rating: 4.6,
      verified: true,
      inStock: true,
      delivery: '5-7 days',
      icon: (
        <div className="relative w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white">
            <path d="M16 6V14M16 14C13 14 12 16 12 18C12 20 13 22 16 22C19 22 20 20 20 18C20 16 19 14 16 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="currentColor" fillOpacity="0.3"/>
            <path d="M12 10C12 10 11 12 10 14M20 10C20 10 21 12 22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="25" r="1.5" fill="currentColor"/>
          </svg>
        </div>
      )
    },
    {
      id: 5,
      name: 'Potassium Fertilizer',
      category: 'fertilizers',
      supplier: 'AgriSupply Tunisia',
      price: '65 TND',
      unit: 'per 25kg bag',
      dosage: '200 kg/ha',
      rating: 4.5,
      verified: true,
      inStock: true,
      delivery: '2-3 days',
      icon: (
        <div className="relative w-full h-full bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white">
            <rect x="10" y="12" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.3"/>
            <path d="M13 8L16 4L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="13" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="2"/>
            <line x1="13" y1="21" x2="19" y2="21" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      )
    },
    {
      id: 6,
      name: 'Fungicide Treatment',
      category: 'pesticides',
      supplier: 'CropProtect Ltd',
      price: '95 TND',
      unit: 'per liter',
      dosage: '1.5 L/ha',
      rating: 4.7,
      verified: true,
      inStock: false,
      delivery: 'Out of stock',
      icon: (
        <div className="relative w-full h-full bg-gradient-to-br from-purple-400 via-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg opacity-50">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white">
            <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.3"/>
            <path d="M11 11L21 21M21 11L11 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      )
    },
    {
      id: 7,
      name: 'Wheat Seeds - Drought Resistant',
      category: 'seeds',
      supplier: 'SeedTech International',
      price: '220 TND',
      unit: 'per 50kg bag',
      dosage: '150 kg/ha',
      rating: 4.9,
      verified: true,
      inStock: true,
      delivery: '3-5 days',
      icon: (
        <div className="relative w-full h-full bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white">
            <path d="M16 4V12M12 8L16 12L20 8M8 16L12 16M20 16L24 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <ellipse cx="16" cy="20" rx="4" ry="6" fill="currentColor" fillOpacity="0.4"/>
            <path d="M12 14C12 18 13 24 16 26C19 24 20 18 20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      )
    },
    {
      id: 8,
      name: 'Micro-Sprinkler Set',
      category: 'irrigation',
      supplier: 'IrrigaTech Pro',
      price: '320 TND',
      unit: 'per set (50 units)',
      dosage: '100 units/ha',
      rating: 4.4,
      verified: true,
      inStock: true,
      delivery: '4-6 days',
      icon: (
        <div className="relative w-full h-full bg-gradient-to-br from-sky-400 via-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white">
            <circle cx="16" cy="12" r="2" fill="currentColor"/>
            <path d="M10 18C11 16 13 15 16 15C19 15 21 16 22 18M8 22C9 20 12 18 16 18C20 18 23 20 24 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 15L10 12M20 15L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      )
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.supplier.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleCart = (productId: number) => {
    if (cart.includes(productId)) {
      setCart(cart.filter(id => id !== productId));
    } else {
      setCart([...cart, productId]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-slate-900 mb-2">SABA Marketplace</h2>
          <p className="text-slate-600">
            Order inputs for farmers - Verified suppliers only
          </p>
        </div>
        <Button className="bg-[#4FAF6C] hover:bg-[#3d9257]">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Cart ({cart.length})
        </Button>
      </div>

      {/* Search & Filter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search products or suppliers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </Card>
        <Card className="p-4">
          <Button variant="outline" className="w-full">
            <Filter className="w-4 h-4 mr-2" />
            Advanced Filters
          </Button>
        </Card>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex-shrink-0 ${
              selectedCategory === category.id
                ? 'bg-[#4FAF6C] hover:bg-[#3d9257]'
                : ''
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.label}
          </Button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-slate-600 mb-1">Total Products</p>
          <p className="text-slate-900">{products.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-slate-600 mb-1">In Cart</p>
          <p className="text-[#4FAF6C]">{cart.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-slate-600 mb-1">Verified Suppliers</p>
          <p className="text-slate-900">8</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-slate-600 mb-1">Orders This Month</p>
          <p className="text-slate-900">24</p>
        </Card>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-5 hover:border-[#4FAF6C] hover:shadow-xl transition-all h-full flex flex-col shadow-md">
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 flex-shrink-0">
                  {product.icon}
                </div>
                {product.verified && (
                  <Badge className="bg-green-100 text-green-700 border-green-200 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>

              <div className="flex-1">
                <h4 className="text-slate-900 mb-2">{product.name}</h4>
                <p className="text-sm text-slate-600 mb-3">{product.supplier}</p>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm text-slate-900">{product.rating}</span>
                  </div>
                  <Badge variant="outline" className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </Badge>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Price:</span>
                    <span className="text-slate-900">{product.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Unit:</span>
                    <span className="text-slate-900 text-xs">{product.unit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Dosage:</span>
                    <span className="text-slate-900 text-xs">{product.dosage}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-600">
                    <Truck className="w-3 h-3" />
                    <span className="text-xs">{product.delivery}</span>
                  </div>
                </div>
              </div>

              <Button
                className={`w-full ${
                  cart.includes(product.id)
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-[#4FAF6C] hover:bg-[#3d9257]'
                }`}
                onClick={() => toggleCart(product.id)}
                disabled={!product.inStock}
              >
                {cart.includes(product.id) ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </>
                )}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <Card className="p-12 text-center">
          <Package className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-slate-900 mb-2">No products found</h3>
          <p className="text-slate-600">Try adjusting your search or filters</p>
        </Card>
      )}
    </div>
  );
}