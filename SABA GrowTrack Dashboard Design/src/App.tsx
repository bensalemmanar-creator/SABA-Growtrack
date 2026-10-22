import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Dashboard from './components/Dashboard';
import PlantRight from './components/PlantRight';
import Marketplace from './components/Marketplace';
import PreHarvest from './components/PreHarvest';
import RiskReport from './components/RiskReport';
import MobileNav from './components/MobileNav';
import NotificationPanel from './components/NotificationPanel';

// Bank Interface Components
import { BankLogin } from './components/BankLogin';
import { BankPortfolio } from './components/BankPortfolio';
import { BankFarmerProfile } from './components/BankFarmerProfile';
import { BankRiskDashboard } from './components/BankRiskDashboard';
import { BankReports } from './components/BankReports';

// Agronomist Interface Components
import { AgronomistLogin } from './components/AgronomistLogin';
import { AgronomistDashboard } from './components/AgronomistDashboard';
import { AgronomistFieldFile } from './components/AgronomistFieldFile';
import { AgronomistDroneInsights } from './components/AgronomistDroneInsights';
import { AgronomistFieldForm } from './components/AgronomistFieldForm';
import { AgronomistMarketplace } from './components/AgronomistMarketplace';
import { AgronomistPreHarvest } from './components/AgronomistPreHarvest';
import { AgronomistLoanFiles } from './components/AgronomistLoanFiles';
import { AgronomistMessages } from './components/AgronomistMessages';

import { 
  LayoutDashboard, 
  Sprout, 
  ShoppingCart, 
  TrendingUp, 
  FileText, 
  Bell, 
  Menu, 
  X,
  Building2,
  Users,
  BarChart3,
  MessageSquare,
  ClipboardList,
  Radar,
  Package,
  Activity
} from 'lucide-react';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';

type UserType = 'farmer' | 'bank' | 'agronomist' | null;
type BankScreen = 'portfolio' | 'farmer-profile' | 'risk' | 'reports';
type AgronomistScreen = 'dashboard' | 'field-file' | 'drone-insights' | 'field-form' | 'marketplace' | 'pre-harvest' | 'loan-files' | 'messages';

export default function App() {
  const [userType, setUserType] = useState<UserType>(null);
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [bankScreen, setBankScreen] = useState<BankScreen>('portfolio');
  const [agronomistScreen, setAgronomistScreen] = useState<AgronomistScreen>('dashboard');
  const [notifications] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showUserSelector, setShowUserSelector] = useState(true);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const farmerNavigation = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'plantright', label: 'Plant Right', icon: Sprout },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingCart },
    { id: 'preharvest', label: 'Pre-Harvest', icon: TrendingUp },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  const bankNavigation = [
    { id: 'portfolio', label: 'Portfolio', icon: LayoutDashboard },
    { id: 'farmer-profile', label: 'Farmer Profile', icon: Users },
    { id: 'risk', label: 'Risk Dashboard', icon: BarChart3 },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  const agronomistNavigation = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'field-file', label: 'Field File', icon: ClipboardList },
    { id: 'drone-insights', label: 'Drone Insights', icon: Radar },
    { id: 'marketplace', label: 'Marketplace', icon: Package },
    { id: 'pre-harvest', label: 'Pre-Harvest', icon: TrendingUp },
    { id: 'loan-files', label: 'Loan Files', icon: FileText },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
  ];

  const handleScreenChange = (screenId: string) => {
    if (userType === 'farmer') {
      setActiveScreen(screenId);
    } else if (userType === 'bank') {
      setBankScreen(screenId as BankScreen);
    } else if (userType === 'agronomist') {
      setAgronomistScreen(screenId as AgronomistScreen);
    }
    setIsMobileMenuOpen(false);
  };

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    setShowUserSelector(false);
  };

  const handleLogout = () => {
    setUserType(null);
    setShowUserSelector(true);
    setActiveScreen('dashboard');
    setBankScreen('portfolio');
    setAgronomistScreen('dashboard');
  };

  // User Type Selector
  if (showUserSelector) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1589313331637-fa8ceb1fac0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGFncmljdWx0dXJhbCUyMGZpZWxkJTIwYWVyaWFsfGVufDF8fHx8MTc2NDEwNTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="relative min-h-screen flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl w-full"
          >
            {/* Logo & Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center justify-center mb-6"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-600 rounded-3xl blur-xl opacity-50" />
                  <div className="relative w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                    <Sprout className="w-12 h-12 text-white" strokeWidth={2.5} />
                  </div>
                </div>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-slate-900 mb-4 tracking-tight"
              >
                SABA GrowTrack
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-slate-600 max-w-2xl mx-auto text-lg"
              >
                Agricultural Intelligence Platform • Verified Crop Data • Smart Financing
              </motion.p>
            </div>

            {/* Portal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Agronomist Portal */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div 
                  className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/50"
                  onClick={() => handleUserTypeSelect('agronomist')}
                >
                  {/* Icon */}
                  <div className="mb-8">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl blur-lg opacity-50" />
                      <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                        <ClipboardList className="w-10 h-10 text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    Agronomist Portal
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Manage field visits, integrate drone data, verify crop health, and prepare loan documentation for farmers
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Radar className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span>RoboCare Drone Integration</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span>Automated Loan Files</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span>Pre-Harvest Marketing</span>
                    </li>
                  </ul>

                  {/* Button */}
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-12">
                    <span className="flex items-center justify-center gap-2">
                      Access Portal
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </Button>
                </div>
              </motion.div>

              {/* Bank Portal */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div 
                  className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/50"
                  onClick={() => handleUserTypeSelect('bank')}
                >
                  {/* Icon */}
                  <div className="mb-8">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl blur-lg opacity-50" />
                      <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                        <Building2 className="w-10 h-10 text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Bank Portal
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Evaluate agricultural loans, monitor real-time crop health, assess risk, and make data-driven decisions
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-4 h-4 text-blue-600" />
                      </div>
                      <span>Real-Time Risk Analytics</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <span>Verified Farmer Portfolios</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Activity className="w-4 h-4 text-blue-600" />
                      </div>
                      <span>Live Crop Health Monitoring</span>
                    </li>
                  </ul>

                  {/* Button */}
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-12">
                    <span className="flex items-center justify-center gap-2">
                      Access Portal
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-12"
            >
              <p className="text-sm text-slate-500">
                Powered by SABA • Secure Agricultural Banking Analytics
              </p>
            </motion.div>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(20px, -50px) scale(1.1); }
            50% { transform: translate(-20px, 20px) scale(0.9); }
            75% { transform: translate(50px, 50px) scale(1.05); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </div>
    );
  }

  // Bank Login Flow
  if (userType === 'bank' && bankScreen === 'portfolio') {
    const handleBankLogin = () => {
      // Already on portfolio screen after login
    };
    
    // Show login if not "logged in" - for demo, we'll skip directly to portfolio
    // return <BankLogin onLogin={handleBankLogin} />;
  }

  // Agronomist Login Flow
  if (userType === 'agronomist' && agronomistScreen === 'dashboard') {
    const handleAgronomistLogin = () => {
      // Already on dashboard screen after login
    };
    
    // Show login if not "logged in" - for demo, we'll skip directly to dashboard
    // return <AgronomistLogin onLogin={handleAgronomistLogin} />;
  }

  const renderFarmerScreen = () => {
    const screens = {
      dashboard: <Dashboard />,
      plantright: <PlantRight />,
      marketplace: <Marketplace />,
      preharvest: <PreHarvest />,
      reports: <RiskReport />,
    };
    
    return screens[activeScreen as keyof typeof screens] || <Dashboard />;
  };

  const renderBankScreen = () => {
    const screens = {
      portfolio: <BankPortfolio onSelectFarmer={(id) => setBankScreen('farmer-profile')} />,
      'farmer-profile': <BankFarmerProfile onBack={() => setBankScreen('portfolio')} />,
      risk: <BankRiskDashboard />,
      reports: <BankReports />,
    };
    
    return screens[bankScreen] || <BankPortfolio onSelectFarmer={(id) => setBankScreen('farmer-profile')} />;
  };

  const renderAgronomistScreen = () => {
    const screens = {
      dashboard: <AgronomistDashboard 
        onNavigate={(screen, farmId) => setAgronomistScreen(screen as AgronomistScreen)}
      />,
      'field-file': <AgronomistFieldFile onBack={() => setAgronomistScreen('dashboard')} />,
      'drone-insights': <AgronomistDroneInsights />,
      'field-form': <AgronomistFieldForm onBack={() => setAgronomistScreen('dashboard')} />,
      marketplace: <AgronomistMarketplace />,
      'pre-harvest': <AgronomistPreHarvest onCreateListing={() => setAgronomistScreen('field-file')} />,
      'loan-files': <AgronomistLoanFiles />,
      messages: <AgronomistMessages />,
    };
    
    return screens[agronomistScreen] || <AgronomistDashboard 
      onNavigate={(screen, farmId) => setAgronomistScreen(screen as AgronomistScreen)}
    />;
  };

  const getNavigation = () => {
    if (userType === 'bank') return bankNavigation;
    if (userType === 'agronomist') return agronomistNavigation;
    return farmerNavigation;
  };

  const getCurrentScreen = () => {
    if (userType === 'bank') return bankScreen;
    if (userType === 'agronomist') return agronomistScreen;
    return activeScreen;
  };

  const getUserInfo = () => {
    if (userType === 'bank') return { name: 'Ahmed Khalil', role: 'Bank Officer', initials: 'AK' };
    if (userType === 'agronomist') return { name: 'Dr. Karim Ayari', role: 'Agronomist', initials: 'KA' };
    return { name: 'Jean Dubois', role: 'Farmer', initials: 'JD' };
  };

  const getAccentColor = () => {
    if (userType === 'bank') return '#2D8C5A';
    if (userType === 'agronomist') return '#4FAF6C';
    return '#2D8C5A';
  };

  const navigation = getNavigation();
  const currentScreen = getCurrentScreen();
  const userInfo = getUserInfo();
  const accentColor = getAccentColor();

  return (
    <div className="flex h-screen bg-[#F8FAF7] overflow-hidden">
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isMobile && !isMobileMenuOpen ? -280 : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="w-64 bg-white border-r border-gray-200 flex flex-col fixed md:relative h-full z-50 md:z-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: accentColor }}>
              {userType === 'bank' ? (
                <Building2 className="w-6 h-6 text-white" />
              ) : userType === 'agronomist' ? (
                <ClipboardList className="w-6 h-6 text-white" />
              ) : (
                <Sprout className="w-6 h-6 text-white" />
              )}
            </div>
            <div>
              <h1 className="text-[#1F2937]">SABA GrowTrack</h1>
              <p className="text-sm text-gray-500">
                {userType === 'bank' ? 'Bank Portal' : userType === 'agronomist' ? 'Agronomist' : 'Smart Farming'}
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <li key={item.id}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleScreenChange(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    style={isActive ? { backgroundColor: accentColor } : {}}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </motion.button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200 space-y-2">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 rounded-full bg-[#8B7355] flex items-center justify-center text-white">
              {userInfo.initials}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">{userInfo.name}</p>
              <p className="text-xs text-gray-500">{userInfo.role}</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full"
            onClick={handleLogout}
          >
            Switch Portal
          </Button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden w-full md:w-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
              
              <div>
                <h2 className="text-gray-900">
                  {navigation.find((n) => n.id === currentScreen)?.label || 'Dashboard'}
                </h2>
                <p className="text-sm text-gray-500 hidden sm:block">
                  Welcome back, {userInfo.name.split(' ')[0]}
                </p>
              </div>
            </div>
            
            {userType === 'farmer' && (
              <div className="flex items-center gap-2 md:gap-4">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Bell className="w-5 h-5 text-gray-600" />
                  {notifications > 0 && (
                    <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                      {notifications}
                    </Badge>
                  )}
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Screen Content with Animation */}
        <div className="flex-1 overflow-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${userType}-${currentScreen}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="h-full p-4 md:p-8"
            >
              {userType === 'farmer' && renderFarmerScreen()}
              {userType === 'bank' && renderBankScreen()}
              {userType === 'agronomist' && renderAgronomistScreen()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Notification Panel (Farmer only) */}
      {userType === 'farmer' && (
        <NotificationPanel 
          isOpen={showNotifications} 
          onClose={() => setShowNotifications(false)} 
        />
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <MobileNav 
          activeScreen={currentScreen} 
          onNavigate={handleScreenChange}
          navigation={navigation}
        />
      )}
    </div>
  );
}