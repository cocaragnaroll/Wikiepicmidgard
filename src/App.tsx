import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import ArticlePage from './components/ArticlePage';
import RankingModal from './components/RankingModal';
import BuildsPage from './components/BuildsPage';
import GuiasPage from './components/GuiasPage';
import ProfilePage from './components/ProfilePage';
import CreateBuildPage from './components/CreateBuildPage';
import CreateGuiaPage from './components/CreateGuiaPage';
import PatchNotesPage from './components/PatchNotesPage';
import RankingTotalPage from './components/RankingTotalPage';
import GuiaClockTowerPage from './components/GuiaClockTowerPage';
import BuildDpsCriticoPage from './components/BuildDpsCriticoPage';
import ContributorSignupPage from './components/ContributorSignupPage';
import LoginPage from './components/LoginPage';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import RoadmapPage from './components/RoadmapPage';
import CalendarioEventosPage from './components/CalendarioEventosPage';
import logoEpicMidgard from 'figma:asset/3f549fb072f9b69628723da91e014f56748f6755.png';
import bgProntera from 'figma:asset/4bd213d27d01bad0e2f105ffff14fc9736b228e3.png';
import { Book, Sword, Users, Map, Trophy, Sparkles, Search, User, ShoppingBag, Crown, Star, Zap, Heart, TrendingUp, Calendar, MessageCircle, Bell, ChevronRight, Flame, Shield, Wand2, PlayCircle, Award, Gift, Target, Rocket, Gem, Eye, Clock, Instagram, Youtube, FileText, Globe, Menu, X } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Progress } from './components/ui/progress';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/ui/tooltip';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './components/ui/hover-card';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState<'home' | 'article' | 'builds' | 'guias' | 'profile' | 'createBuild' | 'createGuia' | 'patchNotes' | 'rankingTotal' | 'guiaClockTower' | 'buildDpsCritico' | 'signup' | 'login' | 'userDashboard' | 'adminDashboard' | 'roadmap' | 'calendario'>('home');
  const [rankingModalOpen, setRankingModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string>('ProPlayer');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Contador de lançamento
  const [countdown, setCountdown] = useState({
    days: 35,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  // Atualizar contador a cada segundo
  useEffect(() => {
    const targetDate = new Date('2025-12-15T18:00:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Base URL para as imagens do GitHub
  const IMG_BASE = 'https://raw.githubusercontent.com/cocaragnaroll/img/main';

  // Componente para ícone de item do RO
  const ItemIcon = ({ id, name, size = "w-6 h-6" }: { id: string; name?: string; size?: string }) => {
    const [imgSrc, setImgSrc] = useState(`${IMG_BASE}/${id}.png`);
    const [attempts, setAttempts] = useState(0);

    const handleError = () => {
      if (attempts === 0) {
        setImgSrc(`${IMG_BASE}/${id}.gif`);
        setAttempts(1);
      } else if (attempts === 1) {
        setImgSrc(`${IMG_BASE}/items/${id}.png`);
        setAttempts(2);
      } else {
        setImgSrc(`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' fill='%23f0f0f0' stroke='%23ccc' stroke-width='1'/%3E%3Ctext x='12' y='16' font-size='10' text-anchor='middle' fill='%23999'%3E?%3C/text%3E%3C/svg%3E`);
      }
    };

    return (
      <img 
        src={imgSrc}
        alt={name || `item ${id}`}
        onError={handleError}
        className={`${size} flex-shrink-0`}
        style={{ 
          imageRendering: 'pixelated'
        }}
      />
    );
  };

  // Se estiver na página de artigo, mostrar ArticlePage
  if (currentPage === 'article') {
    return <ArticlePage onBack={() => setCurrentPage('home')} />;
  }

  // Se estiver na página de builds, mostrar BuildsPage
  if (currentPage === 'builds') {
    return <BuildsPage onBack={() => setCurrentPage('home')} onCreateBuild={() => setCurrentPage('createBuild')} />;
  }

  // Se estiver na página de guias, mostrar GuiasPage
  if (currentPage === 'guias') {
    return <GuiasPage onBack={() => setCurrentPage('home')} onCreateGuia={() => setCurrentPage('createGuia')} />;
  }

  // Se estiver na página de perfil, mostrar ProfilePage
  if (currentPage === 'profile') {
    return <ProfilePage onBack={() => setCurrentPage('home')} username={selectedUser} />;
  }

  // Se estiver na página de criar build, mostrar CreateBuildPage
  if (currentPage === 'createBuild') {
    return <CreateBuildPage onBack={() => setCurrentPage('home')} />;
  }

  // Se estiver na página de criar guia, mostrar CreateGuiaPage
  if (currentPage === 'createGuia') {
    return <CreateGuiaPage onBack={() => setCurrentPage('home')} />;
  }

  // Se estiver na página de patch notes, mostrar PatchNotesPage
  if (currentPage === 'patchNotes') {
    return <PatchNotesPage onBack={() => setCurrentPage('home')} />;
  }

  // Se estiver na página de ranking total, mostrar RankingTotalPage
  if (currentPage === 'rankingTotal') {
    return <RankingTotalPage onBack={() => setCurrentPage('home')} onViewProfile={(username) => { setSelectedUser(username); setCurrentPage('profile'); }} />;
  }

  // Se estiver na página de guia Clock Tower, mostrar GuiaClockTowerPage
  if (currentPage === 'guiaClockTower') {
    return <GuiaClockTowerPage onBack={() => setCurrentPage('home')} onViewProfile={(username) => { setSelectedUser(username); setCurrentPage('profile'); }} />;
  }

  // Se estiver na página de build DPS Crítico, mostrar BuildDpsCriticoPage
  if (currentPage === 'buildDpsCritico') {
    return <BuildDpsCriticoPage onBack={() => setCurrentPage('home')} onViewProfile={(username) => { setSelectedUser(username); setCurrentPage('profile'); }} />;
  }

  // Se estiver na página de cadastro, mostrar ContributorSignupPage
  if (currentPage === 'signup') {
    return <ContributorSignupPage onBack={() => setCurrentPage('home')} />;
  }

  // Se estiver na página de login, mostrar LoginPage
  if (currentPage === 'login') {
    return <LoginPage onBack={() => setCurrentPage('home')} onSignup={() => setCurrentPage('signup')} />;
  }

  // Se estiver no painel de usuário, mostrar UserDashboard
  if (currentPage === 'userDashboard') {
    return <UserDashboard onBack={() => setCurrentPage('home')} userName="ProPlayer" />;
  }

  // Se estiver no painel administrativo, mostrar AdminDashboard
  if (currentPage === 'adminDashboard') {
    return <AdminDashboard onBack={() => setCurrentPage('home')} />;
  }

  // Se estiver na página de roadmap, mostrar RoadmapPage
  if (currentPage === 'roadmap') {
    return <RoadmapPage onBack={() => setCurrentPage('home')} />;
  }

  // Se estiver na página de calendário, mostrar CalendarioEventosPage
  if (currentPage === 'calendario') {
    return <CalendarioEventosPage onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Epic Hero Section with Parallax Background */}
      <div className="relative min-h-[85vh] overflow-hidden">
        {/* Background Prontera */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={bgProntera}
            alt="Prontera Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black"></div>
        
        {/* Animated Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: -20,
                opacity: 0 
              }}
              animate={{ 
                y: window.innerHeight + 20,
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
        
        {/* Animated Glow Effects */}
        <motion.div 
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-[#D4AF37]/20 rounded-full blur-[200px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#6B8E23]/20 rounded-full blur-[150px]"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#8B7355]/20 rounded-full blur-[120px]"
          animate={{ 
            x: [0, -40, 0],
            y: [0, -25, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Top Navigation with Glassmorphism */}
        <motion.div 
          className="relative z-10 border-b border-white/10 backdrop-blur-xl bg-black/30"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <nav className="flex items-center gap-8">
                {['Database', 'Download', 'Discord'].map((item, idx) => (
                  <motion.a 
                    key={item}
                    href="#" 
                    className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider font-semibold relative group hidden md:block"
                    whileHover={{ y: -2 }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
                <motion.button
                  onClick={() => setCurrentPage('article')}
                  className="text-[#D4AF37] hover:text-[#FFD700] transition-colors text-sm uppercase tracking-wider font-semibold relative group"
                  whileHover={{ y: -2 }}
                >
                  Ver Artigo Demo
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              </nav>
              
              <div className="flex items-center gap-3">
                {/* Botão de Notificações - Apenas quando logado */}
                {isLoggedIn && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.button 
                          className="relative p-2 hover:bg-white/10 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Bell className="w-5 h-5 text-white" />
                          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        </motion.button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>3 novas notificações</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}

                <motion.div className="flex items-center gap-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      onClick={() => setCurrentPage('createBuild')}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white uppercase tracking-wide border-0 shadow-lg shadow-green-600/30 hidden md:flex"
                    >
                      <Target className="w-4 h-4 mr-2" />
                      Criar Build
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      onClick={() => setCurrentPage('userDashboard')}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white uppercase tracking-wide border-0 shadow-lg shadow-blue-600/30 hidden lg:flex"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Meu Painel
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      onClick={() => setCurrentPage('adminDashboard')}
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white uppercase tracking-wide border-0 shadow-lg shadow-purple-600/30 hidden lg:flex"
                    >
                      <Shield className="w-4 h-4 mr-2" />
                      Admin
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      onClick={() => setCurrentPage('login')}
                      className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black uppercase tracking-wide border-0 shadow-lg shadow-[#D4AF37]/30"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Login
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      onClick={() => setCurrentPage('signup')}
                      variant="outline" 
                      className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/20 hover:text-[#FFD700] hover:border-[#FFD700] uppercase tracking-wide hidden md:flex transition-all"
                    >
                      <Star className="w-4 h-4 mr-2" />
                      Seja um Contribuidor
                    </Button>
                  </motion.div>

                  {/* Botão Menu Mobile */}
                  <motion.button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors lg:hidden"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {mobileMenuOpen ? (
                      <X className="w-6 h-6 text-white" />
                    ) : (
                      <Menu className="w-6 h-6 text-white" />
                    )}
                  </motion.button>
                </motion.div>
              </div>
            </div>

            {/* Menu Mobile Dropdown */}
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-white/10 lg:hidden"
              >
                <div className="px-4 py-4 space-y-2">
                  <button
                    onClick={() => {
                      setCurrentPage('createBuild');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-white/80 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all flex items-center gap-2"
                  >
                    <Target className="w-4 h-4" />
                    Criar Build
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage('userDashboard');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-white/80 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Meu Painel
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage('adminDashboard');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-white/80 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all flex items-center gap-2"
                  >
                    <Shield className="w-4 h-4" />
                    Admin
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage('signup');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-white/80 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all flex items-center gap-2"
                  >
                    <Star className="w-4 h-4" />
                    Seja um Contribuidor
                  </button>
                  <div className="pt-2 border-t border-white/10">
                    <a href="#" className="w-full text-left px-4 py-3 text-white/80 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Database
                    </a>
                    <a href="#" className="w-full text-left px-4 py-3 text-white/80 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Download
                    </a>
                    <a href="#" className="w-full text-left px-4 py-3 text-white/80 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Discord
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Logo & Title Section */}
        <div className="relative z-10 text-center pt-16 pb-6">
          <motion.div 
            className="flex items-center justify-center mb-10"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Animated glow */}
              <motion.div 
                className="absolute inset-0 bg-[#D4AF37]/50 blur-[80px] rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main logo */}
              <motion.div 
                className="relative w-64 h-64"
                animate={{ 
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src={logoEpicMidgard}
                  alt="Epic Midgard Logo"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 0 40px rgba(212, 175, 55, 0.6))' }}
                />
              </motion.div>
              
              {/* Rotating ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/40"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ borderStyle: 'dashed' }}
              />
              
              {/* Pulsing ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/30"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              className="h-px w-24 bg-gradient-to-r from-transparent to-[#D4AF37]"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.7 }}
            />
            <p className="text-3xl text-[#D4AF37] uppercase tracking-[0.5em]">Wiki</p>
            <motion.div 
              className="h-px w-24 bg-gradient-to-l from-transparent to-[#D4AF37]"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </motion.div>

          {/* Contador de Lançamento do Servidor */}
          <motion.div
            className="max-w-3xl mx-auto mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border-2 border-[#D4AF37] rounded-2xl p-4 md:p-6 shadow-xl shadow-[#D4AF37]/20">

              <div className="text-center mb-4 md:mb-6">
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <Rocket className="w-6 h-6 md:w-8 md:h-8 text-[#FFD700]" />
                  <h3 className="text-xl md:text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#FFD700] bg-clip-text uppercase tracking-wider">
                    Lançamento do Servidor
                  </h3>
                  <Rocket className="w-6 h-6 md:w-8 md:h-8 text-[#FFD700]" />
                </div>
                <p className="text-sm md:text-lg text-[#D4AF37] font-bold">
                  15 de Dezembro de 2025 às 18:00
                </p>
              </div>
              
              <div className="grid grid-cols-4 gap-1.5 md:gap-4">
                {[
                  { value: countdown.days, label: 'Dias', key: 'days' },
                  { value: countdown.hours, label: 'Horas', key: 'hours' },
                  { value: countdown.minutes, label: 'Min', key: 'minutes' },
                  { value: countdown.seconds, label: 'Seg', key: 'seconds' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="relative"
                    initial={{ scale: 0, rotateY: 180 }}
                    animate={{ scale: 1, rotateY: 0 }}
                    transition={{ delay: 1 + idx * 0.1, type: "spring" }}
                  >
                    <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 border-2 border-[#D4AF37]/50 rounded-lg md:rounded-xl p-1.5 md:p-4 shadow-lg overflow-hidden">
                      <motion.div
                        className="relative text-base md:text-4xl lg:text-5xl font-black text-[#FFD700] mb-0.5 md:mb-1"
                        key={item.value}
                        initial={{ rotateX: -90, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        transition={{ duration: 0.4, type: "spring" }}
                        style={{ textShadow: '0 0 15px rgba(255, 215, 0, 0.6)' }}
                      >
                        {String(item.value).padStart(2, '0')}
                      </motion.div>
                      <div className="text-[7px] md:text-xs lg:text-sm text-white/70 uppercase tracking-wider font-bold">
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-4 md:mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <p className="text-sm md:text-lg text-white/80">
                  Prepare-se para uma jornada <span className="text-[#FFD700] font-bold">épica</span>!
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12">
          <div className="text-center mb-10">
            <motion.div 
              className="inline-block mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-4">
                <motion.span 
                  className="text-white block"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  ENCICLOPÉDIA
                </motion.span>
              </h2>
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black text-[#D4AF37]" style={{ textShadow: '0 0 60px rgba(212, 175, 55, 1)' }}>
                <motion.span
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  ÉPICA
                </motion.span>
              </h2>
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-white/70 mt-6 tracking-wide px-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Sua jornada épica no EpicMidgard começa aqui
              </motion.p>
            </motion.div>
            
            {/* Premium Search Bar */}
            <motion.div 
              className="max-w-4xl mx-auto mb-10"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="relative group">
                {/* Animated glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/30 via-[#FFD700]/30 to-[#D4AF37]/30 rounded-3xl blur-2xl"
                  animate={{ 
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative flex items-center backdrop-blur-xl bg-black/60 border-2 border-[#D4AF37]/50 rounded-3xl overflow-hidden shadow-2xl shadow-[#D4AF37]/20">
                  <Search className="absolute left-8 w-7 h-7 text-[#D4AF37] pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Procurar artigos, itens, monstros, classes, quests..."
                    className="w-full pl-20 pr-4 md:pr-40 py-6 bg-transparent text-white text-lg md:text-xl placeholder-white/40 focus:outline-none"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                  >
                    <Button className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black border-0 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-lg">
                      <Search className="w-5 h-5 mr-0 md:mr-2" />
                      <span className="hidden md:inline">Buscar</span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>


          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs md:text-sm uppercase tracking-wider">Rolar</span>
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 rotate-90" />
          </div>
        </motion.div>
      </div>

      {/* PATCH NOTES Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 -mt-16 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider mb-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Zap className="inline-block w-8 h-8 md:w-10 md:h-10 mr-3 text-[#D4AF37]" />
              Patch Notes
            </motion.h2>
            <p className="text-white/60 text-base md:text-lg">Acompanhe todas as atualizações e novidades do EpicMidgard</p>
          </div>

          {/* Desktop - Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                id: '25143', 
                version: 'Update 12.4',
                title: 'Grandes Mudanças no Balanceamento',
                date: '07 Novembro 2025',
                tag: 'Novo',
                tagColor: 'bg-green-500/20 text-green-400 border-green-500/40',
                description: 'Ajustes nas classes, novos itens exclusivos e melhorias no sistema de refino.'
              },
              { 
                id: '25144', 
                version: 'Evento Especial',
                title: 'Halloween 2025 - Noite das Bruxas',
                date: '31 Outubro 2025',
                tag: 'Evento',
                tagColor: 'bg-purple-500/20 text-purple-400 border-purple-500/40',
                description: 'Novos monstros, quests exclusivas e recompensas limitadas do evento de Halloween.'
              },
              { 
                id: '25145', 
                version: 'Patch 12.3.5',
                title: 'Correções e Otimizações',
                date: '15 Outubro 2025',
                tag: 'Fix',
                tagColor: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
                description: 'Correção de bugs críticos, otimização de performance e ajustes no WoE.'
              },
              { 
                id: '25146', 
                version: 'Update 12.3',
                title: 'Novos MVPs e Dungeons',
                date: '01 Outubro 2025',
                tag: 'Conteúdo',
                tagColor: 'bg-orange-500/20 text-orange-400 border-orange-500/40',
                description: 'Três novos MVPs adicionados, nova dungeon de nível alto e novas cartas épicas.'
              },
            ].map((patch, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className={`bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-black border-2 ${idx === 0 ? 'border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/30' : 'border-zinc-800 hover:border-[#D4AF37]/50'} transition-all h-full shadow-lg hover:shadow-[#D4AF37]/20`}>
                  <CardHeader className="pb-3 md:pb-4 p-3 md:p-6 relative">
                    {idx === 0 && (
                      <div className="absolute -top-3 -right-3 z-10">
                        <Badge className="bg-gradient-to-r from-red-600 to-red-500 text-white border-0 text-xs font-black px-3 py-1 shadow-lg shadow-red-500/50 animate-pulse">
                          NEW
                        </Badge>
                      </div>
                    )}
                    <div className="flex items-start justify-between mb-2 md:mb-3">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-800 rounded-lg flex items-center justify-center border-2 border-zinc-700">
                        <ItemIcon id={patch.id} size="w-9 h-9" />
                      </div>
                      <Badge variant="outline" className={`${patch.tagColor} border text-xs px-2 py-1`}>
                        {patch.tag}
                      </Badge>
                    </div>
                    <CardTitle className={`text-[#D4AF37] text-base md:text-xl mb-1 ${idx === 0 ? 'text-[#FFD700]' : ''}`}>{patch.version}</CardTitle>
                    <CardTitle className="text-white text-sm md:text-lg mb-2 line-clamp-2">{patch.title}</CardTitle>
                    <div className={`flex items-center gap-2 ${idx === 0 ? 'text-[#D4AF37]' : 'text-white/50'} text-xs md:text-sm ${idx === 0 ? 'font-bold' : ''}`}>
                      <Calendar className={`w-3 h-3 md:w-4 md:h-4 ${idx === 0 ? 'animate-pulse' : ''}`} />
                      {patch.date}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 p-3 md:p-6 md:pt-0">
                    <p className="text-white/70 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{patch.description}</p>
                    <Button variant="outline" className={`w-full border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] text-[#D4AF37] hover:text-white group text-xs md:text-sm py-2 ${idx === 0 ? 'bg-[#D4AF37]/5 border-[#D4AF37]' : ''}`}>
                      Ler mais
                      <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile - Carrossel */}
          <div className="md:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2">
                {[
                  { 
                    id: '25143', 
                    version: 'Update 12.4',
                    title: 'Grandes Mudanças no Balanceamento',
                    date: '07 Novembro 2025',
                    tag: 'Novo',
                    tagColor: 'bg-green-500/20 text-green-400 border-green-500/40',
                    description: 'Ajustes nas classes, novos itens exclusivos e melhorias no sistema de refino.'
                  },
                  { 
                    id: '25144', 
                    version: 'Evento Especial',
                    title: 'Halloween 2025 - Noite das Bruxas',
                    date: '31 Outubro 2025',
                    tag: 'Evento',
                    tagColor: 'bg-purple-500/20 text-purple-400 border-purple-500/40',
                    description: 'Novos monstros, quests exclusivas e recompensas limitadas do evento de Halloween.'
                  },
                  { 
                    id: '25145', 
                    version: 'Patch 12.3.5',
                    title: 'Correções e Otimizações',
                    date: '15 Outubro 2025',
                    tag: 'Fix',
                    tagColor: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
                    description: 'Correção de bugs críticos, otimização de performance e ajustes no WoE.'
                  },
                  { 
                    id: '25146', 
                    version: 'Update 12.3',
                    title: 'Novos MVPs e Dungeons',
                    date: '01 Outubro 2025',
                    tag: 'Conteúdo',
                    tagColor: 'bg-orange-500/20 text-orange-400 border-orange-500/40',
                    description: 'Três novos MVPs adicionados, nova dungeon de nível alto e novas cartas épicas.'
                  },
                ].map((patch, idx) => (
                  <CarouselItem key={idx} className="pl-2 basis-[90%]">
                    <Card className={`bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-black border-2 ${idx === 0 ? 'border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/30' : 'border-zinc-800'} transition-all h-full shadow-lg`}>
                      <CardHeader className="pb-3 p-3 relative">
                        {idx === 0 && (
                          <div className="absolute -top-3 -right-3 z-10">
                            <Badge className="bg-gradient-to-r from-red-600 to-red-500 text-white border-0 text-xs font-black px-3 py-1 shadow-lg shadow-red-500/50 animate-pulse">
                              NEW
                            </Badge>
                          </div>
                        )}
                        <div className="flex items-start justify-between mb-2">
                          <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center border-2 border-zinc-700">
                            <ItemIcon id={patch.id} size="w-9 h-9" />
                          </div>
                          <Badge variant="outline" className={`${patch.tagColor} border text-xs px-2 py-1`}>
                            {patch.tag}
                          </Badge>
                        </div>
                        <CardTitle className={`text-[#D4AF37] text-base mb-1 ${idx === 0 ? 'text-[#FFD700]' : ''}`}>{patch.version}</CardTitle>
                        <CardTitle className="text-white text-sm mb-2 line-clamp-2">{patch.title}</CardTitle>
                        <div className={`flex items-center gap-2 ${idx === 0 ? 'text-[#D4AF37]' : 'text-white/50'} text-xs ${idx === 0 ? 'font-bold' : ''}`}>
                          <Calendar className={`w-3 h-3 ${idx === 0 ? 'animate-pulse' : ''}`} />
                          {patch.date}
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 p-3">
                        <p className="text-white/70 text-xs mb-3 line-clamp-2">{patch.description}</p>
                        <Button variant="outline" className={`w-full border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] text-[#D4AF37] hover:text-white group text-xs py-2 ${idx === 0 ? 'bg-[#D4AF37]/5 border-[#D4AF37]' : ''}`}>
                          Ler mais
                          <ChevronRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0 border-[#D4AF37] bg-black/50 text-white hover:bg-[#D4AF37] hover:text-black" />
                <CarouselNext className="static translate-y-0 border-[#D4AF37] bg-black/50 text-white hover:bg-[#D4AF37] hover:text-black" />
              </div>
            </Carousel>
          </div>

          <div className="text-center mt-10">
            <Button className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black text-base md:text-lg px-8 md:px-10 py-5 md:py-6 uppercase tracking-wide shadow-xl shadow-[#D4AF37]/30">
              Ver Todas as Postagens
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Featured Carousel */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div className="flex items-center gap-2 md:gap-4">
              <Flame className="w-6 h-6 md:w-10 md:h-10 text-[#D4AF37]" />
              <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-wide">
                Em <span className="text-[#D4AF37]">Destaque</span>
              </h3>
            </div>
            <Button variant="outline" className="border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hidden md:flex">
              Ver Todos
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {[
                { 
                  id: '25143', 
                  title: 'Patch Notes 12.4', 
                  desc: 'Confira todas as novidades da atualização',
                  tag: 'Atualização',
                  views: '42.3k',
                  img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070',
                  onClick: () => setCurrentPage('patchNotes')
                },
                { 
                  id: '25158', 
                  title: 'Build DPS Crítico', 
                  desc: 'Build devastadora de Lord Knight para PvP',
                  tag: 'Build',
                  views: '12.5k',
                  img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2070',
                  onClick: () => setCurrentPage('buildDpsCritico')
                },
                { 
                  id: '25252', 
                  title: 'Farm em Clock Tower', 
                  desc: 'Guia completo de farm para níveis 60-80',
                  tag: 'Guia',
                  views: '15.2k',
                  img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2070',
                  onClick: () => setCurrentPage('guiaClockTower')
                },
                { 
                  id: '25261', 
                  title: 'Ranking de Contribuidores', 
                  desc: 'Veja os top contribuidores da wiki',
                  tag: 'Ranking',
                  views: '25.8k',
                  img: 'https://images.unsplash.com/photo-1579547621869-0ddb5f237392?q=80&w=2070',
                  onClick: () => setCurrentPage('rankingTotal')
                },
                { 
                  id: '25266', 
                  title: 'Mapa Completo de Prontera', 
                  desc: 'Explore todos os segredos da capital',
                  tag: 'Mapas',
                  views: '15.7k',
                  img: 'https://images.unsplash.com/photo-1515015344162-d91eb073be28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0aWNhbCUyMHBvcnRhbCUyMG1hZ2ljfGVufDF8fHx8MTc2MjQ3NjQzNXww&ixlib=rb-4.1.0&q=80&w=1080'
                },
              ].map((item, idx) => (
                <CarouselItem key={idx} className="pl-2 md:pl-4 basis-[85%] sm:basis-[60%] md:basis-1/2 lg:basis-1/4">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <Card 
                      onClick={item.onClick}
                      className="group bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 hover:border-[#D4AF37] overflow-hidden cursor-pointer transition-all shadow-xl hover:shadow-[#D4AF37]/30 h-full"
                    >
                      <div className="relative h-40 md:h-48 overflow-hidden">
                        <ImageWithFallback 
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                        
                        {/* Badges */}
                        <div className="absolute top-4 right-4 flex gap-2">
                          <Badge className="bg-[#D4AF37]/90 text-black border-0 uppercase tracking-wide shadow-lg">
                            {item.tag}
                          </Badge>
                        </div>
                        
                        {/* Views */}
                        <div className="absolute top-4 left-4">
                          <Badge variant="outline" className="bg-black/60 backdrop-blur-sm border-white/20 text-white">
                            <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                            {item.views} views
                          </Badge>
                        </div>
                        
                        {/* Item Icon */}
                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-black/80 backdrop-blur-sm rounded-xl border-2 border-[#D4AF37]/50 flex items-center justify-center">
                          <ItemIcon id={item.id} size="w-12 h-12" />
                        </div>
                      </div>
                      
                      <CardContent className="p-3 md:p-5 flex flex-col h-[140px] md:h-[200px]">
                        <h4 className="font-black text-white mb-1 md:mb-2 uppercase tracking-wide text-sm md:text-lg group-hover:text-[#D4AF37] transition-colors line-clamp-2">{item.title}</h4>
                        <p className="text-xs md:text-sm text-white/60 mb-2 md:mb-4 leading-relaxed line-clamp-1 md:line-clamp-2 flex-grow">{item.desc}</p>
                        
                        <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black border-0 uppercase tracking-wide shadow-lg group-hover:shadow-xl text-xs md:text-sm py-2 md:py-3">
                          Ler Artigo
                          <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <motion.div
              animate={{ x: [-5, 0, -5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10"
            >
              <CarouselPrevious className="w-14 h-14 md:w-16 md:h-16 border-3 border-[#D4AF37] bg-gradient-to-r from-black via-zinc-900 to-black backdrop-blur-sm text-white hover:bg-[#D4AF37] hover:text-black hover:scale-110 transition-all shadow-2xl shadow-[#D4AF37]/40 relative left-0" />
            </motion.div>
            <motion.div
              animate={{ x: [5, 0, 5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10"
            >
              <CarouselNext className="w-14 h-14 md:w-16 md:h-16 border-3 border-[#D4AF37] bg-gradient-to-r from-black via-zinc-900 to-black backdrop-blur-sm text-white hover:bg-[#D4AF37] hover:text-black hover:scale-110 transition-all shadow-2xl shadow-[#D4AF37]/40 relative right-0" />
            </motion.div>
          </Carousel>
        </motion.div>
      </div>

      {/* Latest Updates Timeline */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
            <TrendingUp className="w-6 h-6 md:w-10 md:h-10 text-[#D4AF37]" />
            <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-wide">
              Últimas <span className="text-[#D4AF37]">Publicações</span>
            </h3>
          </div>

          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800 shadow-2xl">
            <CardContent className="p-3 md:p-6">
              {/* Desktop: Lista normal */}
              <div className="hidden md:block space-y-1">
                {[
                  { title: 'Novo MVP: Baphomet Jr.', time: 'Há 2 horas', user: 'Admin', icon: '25262', type: 'new' },
                  { title: 'Atualização: Sistema de Encantamento', time: 'Há 5 horas', user: 'Moderador', icon: '25231', type: 'update' },
                  { title: 'Guia: Build Arcebispo Crítico', time: 'Há 8 horas', user: 'Contributor', icon: '25174', type: 'guide' },
                  { title: 'Nova Quest: Espada Flamejante', time: 'Há 1 dia', user: 'GameMaster', icon: '25273', type: 'quest' },
                ].map((update, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center gap-6 p-5 rounded-2xl hover:bg-zinc-800/50 transition-all cursor-pointer group border border-transparent hover:border-[#D4AF37]/30"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg border-2 border-zinc-700 group-hover:border-[#D4AF37]">
                        <ItemIcon id={update.icon} size="w-10 h-10" />
                      </div>
                      {update.type === 'new' && (
                        <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0 animate-pulse">
                          NEW
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white group-hover:text-[#D4AF37] transition-colors font-bold text-lg mb-1 truncate">{update.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-white/40">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {update.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {update.user}
                        </span>
                      </div>
                    </div>
                    
                    <ChevronRight className="w-6 h-6 text-white/20 group-hover:text-[#D4AF37] group-hover:translate-x-2 transition-all flex-shrink-0" />
                  </motion.div>
                ))}
              </div>

              {/* Mobile: Carrossel */}
              <div className="md:hidden">
                <Carousel className="w-full">
                  <CarouselContent className="-ml-2">
                    {[
                      { title: 'Novo MVP: Baphomet Jr.', time: 'Há 2 horas', user: 'Admin', icon: '25262', type: 'new' },
                      { title: 'Atualização: Sistema de Encantamento', time: 'Há 5 horas', user: 'Moderador', icon: '25231', type: 'update' },
                      { title: 'Guia: Build Arcebispo Crítico', time: 'Há 8 horas', user: 'Contributor', icon: '25174', type: 'guide' },
                      { title: 'Nova Quest: Espada Flamejante', time: 'Há 1 dia', user: 'GameMaster', icon: '25273', type: 'quest' },
                    ].map((update, idx) => (
                      <CarouselItem key={idx} className="pl-2">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/30 border border-zinc-700/50">
                          <div className="relative flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center shadow-lg border-2 border-zinc-700">
                              <ItemIcon id={update.icon} size="w-8 h-8" />
                            </div>
                            {update.type === 'new' && (
                              <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] px-1 py-0 animate-pulse">
                                NEW
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white font-bold text-sm mb-1 line-clamp-1">{update.title}</h4>
                            <div className="flex items-center gap-2 text-xs text-white/40">
                              <Calendar className="w-3 h-3" />
                              <span>{update.time}</span>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center gap-2 mt-4">
                    <CarouselPrevious className="static translate-y-0" />
                    <CarouselNext className="static translate-y-0" />
                  </div>
                </Carousel>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Top Contribuintes */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-8">
            <Crown className="w-6 h-6 md:w-10 md:h-10 text-[#D4AF37]" />
            <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-wide">
              Top <span className="text-[#D4AF37]">Contribuintes</span>
            </h3>
          </div>

          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800 shadow-2xl overflow-hidden">
            <CardContent className="p-4 md:p-8">
              {/* Desktop: Grid */}
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                {[
                  { rank: 1, name: 'ProPlayer', avatar: 'PP', points: 380, articles: 38, badge: 'Lenda', color: 'from-yellow-500 to-amber-600' },
                  { rank: 2, name: 'WikiHero', avatar: 'WH', points: 320, articles: 32, badge: 'Mestre', color: 'from-slate-400 to-slate-500' },
                  { rank: 3, name: 'Contributor4', avatar: 'C4', points: 280, articles: 28, badge: 'Expert', color: 'from-amber-700 to-orange-800' },
                ].map((contributor, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className={`bg-gradient-to-br ${contributor.color} border-2 border-white/20 relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                      <CardContent className="p-6 relative">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <Avatar className="w-16 h-16 border-4 border-white/30">
                                <AvatarFallback className="bg-black/50 text-white text-xl font-bold">
                                  {contributor.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <div className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center border-2 border-white/50">
                                <span className="text-white font-bold text-sm">#{contributor.rank}</span>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-white font-bold text-xl">{contributor.name}</h4>
                              <Badge className="bg-black/50 text-white border-white/30 mt-1">
                                {contributor.badge}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                            <div className="flex items-center gap-2">
                              <Star className="w-5 h-5 text-white" />
                              <span className="text-white/90">Pontos</span>
                            </div>
                            <span className="text-white font-bold text-xl">{contributor.points}</span>
                          </div>
                          
                          <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                            <div className="flex items-center gap-2">
                              <FileText className="w-5 h-5 text-white" />
                              <span className="text-white/90">Artigos</span>
                            </div>
                            <span className="text-white font-bold text-xl">{contributor.articles}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Mobile: Carrossel */}
              <div className="md:hidden">
                <Carousel className="w-full">
                  <CarouselContent className="-ml-2">
                    {[
                      { rank: 1, name: 'ProPlayer', avatar: 'PP', points: 380, articles: 38, badge: 'Lenda', color: 'from-yellow-500 to-amber-600' },
                      { rank: 2, name: 'WikiHero', avatar: 'WH', points: 320, articles: 32, badge: 'Mestre', color: 'from-slate-400 to-slate-500' },
                      { rank: 3, name: 'Contributor4', avatar: 'C4', points: 280, articles: 28, badge: 'Expert', color: 'from-amber-700 to-orange-800' },
                    ].map((contributor, idx) => (
                      <CarouselItem key={idx} className="pl-2 basis-4/5">
                        <Card className={`bg-gradient-to-br ${contributor.color} border-2 border-white/20 relative overflow-hidden`}>
                          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                          <CardContent className="p-4 relative">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <div className="relative">
                                  <Avatar className="w-12 h-12 border-4 border-white/30">
                                    <AvatarFallback className="bg-black/50 text-white font-bold">
                                      {contributor.avatar}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-black rounded-full flex items-center justify-center border-2 border-white/50">
                                    <span className="text-white font-bold text-xs">#{contributor.rank}</span>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="text-white font-bold">{contributor.name}</h4>
                                  <Badge className="bg-black/50 text-white border-white/30 text-xs">
                                    {contributor.badge}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex items-center justify-between p-2 bg-black/30 rounded-lg">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-white" />
                                  <span className="text-white/90 text-sm">Pontos</span>
                                </div>
                                <span className="text-white font-bold">{contributor.points}</span>
                              </div>
                              
                              <div className="flex items-center justify-between p-2 bg-black/30 rounded-lg">
                                <div className="flex items-center gap-1">
                                  <FileText className="w-4 h-4 text-white" />
                                  <span className="text-white/90 text-sm">Artigos</span>
                                </div>
                                <span className="text-white font-bold">{contributor.articles}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center gap-2 mt-4">
                    <CarouselPrevious className="static translate-y-0" />
                    <CarouselNext className="static translate-y-0" />
                  </div>
                </Carousel>
              </div>

              {/* Botão Ver Ranking Total */}
              <div className="mt-6 md:mt-8 text-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={() => setCurrentPage('rankingTotal')}
                    className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black font-bold uppercase tracking-wide shadow-lg shadow-[#D4AF37]/30 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
                  >
                    <Trophy className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Ver Ranking Total
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </Button>
                </motion.div>
                <p className="text-white/50 text-xs md:text-sm mt-3">
                  Veja todos os contribuidores e suas pontuações
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Main Content with Advanced Tabs */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-8">
            <Book className="w-6 h-6 md:w-10 md:h-10 text-[#D4AF37]" />
            <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-wide">
              Explore a <span className="text-[#D4AF37]">Wiki</span>
            </h3>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-zinc-900 border-2 border-zinc-800 p-2 mb-8 md:mb-12 w-full justify-start overflow-x-auto flex-nowrap shadow-xl rounded-2xl">
              {['Tudo', 'Classes', 'Builds', 'Guias de Caça', 'Itens', 'Monstros', 'Quests', 'Mapas'].map((tab) => (
                <TabsTrigger 
                  key={tab.toLowerCase().replace(/\s+/g, '-')}
                  value={tab.toLowerCase().replace(/\s+/g, '-')} 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold px-4 md:px-8 py-2 md:py-3 rounded-xl transition-all data-[state=active]:shadow-lg text-sm md:text-base whitespace-nowrap"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="mt-0">
              {/* Categorias Oficiais */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {/* Classes */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800 overflow-hidden shadow-2xl hover:shadow-[#D4AF37]/10 transition-all">
                      <CardHeader className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 pb-4 md:pb-6 bg-[length:200%_100%] animate-[gradient_5s_ease_infinite]">
                        <CardTitle className="flex items-center gap-2 md:gap-3 text-white uppercase tracking-wide text-lg md:text-2xl">
                          <Sword className="w-5 h-5 md:w-7 md:h-7" />
                          Classes & Builds
                        </CardTitle>
                        <CardDescription className="text-white/90 text-sm md:text-base">
                          Guias completos para todas as classes
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-0">
                          {[
                            { id: '25157', label: 'Noviço', status: 'Completo', progress: 100 },
                            { id: '25158', label: 'Espadachim', status: 'Atualizado', progress: 95 },
                            { id: '25165', label: 'Mago', status: 'Novo', progress: 100 },
                            { id: '25173', label: 'Arqueiro', status: 'Completo', progress: 100 },
                            { id: '25174', label: 'Acólito', status: 'Atualizado', progress: 90 },
                            { id: '25180', label: 'Gatuno', status: 'Completo', progress: 100 },
                            { id: '25181', label: 'Mercador', status: 'Completo', progress: 100 },
                          ].map((item, idx) => (
                            <motion.li 
                              key={idx} 
                              className="group"
                              whileHover={{ x: 10 }}
                            >
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <a href="#" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-800/50 transition-all border border-transparent hover:border-[#D4AF37]/30">
                                      <div className="flex items-center gap-3">
                                        <div className="relative w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-zinc-700 group-hover:border-[#D4AF37]">
                                          <ItemIcon id={item.id} size="w-9 h-9" />
                                          <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 rounded-xl transition-colors"></div>
                                        </div>
                                        <div className="flex-1">
                                          <span className="text-white/90 group-hover:text-[#D4AF37] transition-colors font-semibold text-base block">{item.label}</span>
                                          <div className="flex items-center gap-2 text-xs text-white/40 mt-1">
                                            <User className="w-3 h-3" />
                                            <span>Admin</span>
                                            <span>•</span>
                                            <Calendar className="w-3 h-3" />
                                            <span>05 Nov</span>
                                            <span>•</span>
                                            <Eye className="w-3 h-3" />
                                            <span>2.4k</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col items-end gap-1">
                                        <Badge variant="outline" className="border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold">
                                          {item.status}
                                        </Badge>
                                        <Progress value={item.progress} className="h-1 w-16 bg-zinc-800" />
                                      </div>
                                    </a>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Ver guia completo de {item.label}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Sistemas */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800 overflow-hidden shadow-2xl">
                      <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 pb-4 md:pb-6">
                        <CardTitle className="flex items-center gap-2 md:gap-3 text-white uppercase tracking-wide text-lg md:text-2xl">
                          <Trophy className="w-5 h-5 md:w-7 md:h-7" />
                          Sistemas do Servidor
                        </CardTitle>
                        <CardDescription className="text-white/90 text-base">
                          Conheça todos os sistemas especiais
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-0.5">
                          {[
                            { id: '25223', label: 'Sistema de Refino', icon: Wand2 },
                            { id: '25231', label: 'Sistema de Encantamento', icon: Sparkles },
                            { id: '25232', label: 'Sistema de Party', icon: Users },
                            { id: '25235', label: 'Sistema de Guild', icon: Shield },
                            { id: '25240', label: 'War of Emperium', icon: Flame },
                          ].map((item, idx) => (
                            <motion.li 
                              key={idx} 
                              className="group"
                              whileHover={{ x: 10 }}
                            >
                              <a href="#" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-800/50 transition-all border border-transparent hover:border-[#D4AF37]/30">
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-zinc-700 group-hover:border-[#D4AF37]">
                                    <ItemIcon id={item.id} size="w-8 h-8" />
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-white/90 group-hover:text-[#D4AF37] transition-colors font-semibold text-base">{item.label}</span>
                                    <div className="flex items-center gap-2 text-xs text-white/40 mt-1">
                                      <User className="w-3 h-3" />
                                      <span>GM_Loki</span>
                                      <span>•</span>
                                      <span>03 Nov</span>
                                      <span>•</span>
                                      <Eye className="w-3 h-3" />
                                      <span>1.8k</span>
                                    </div>
                                  </div>
                                </div>
                                <item.icon className="w-5 h-5 text-white/30 group-hover:text-[#D4AF37] transition-colors" />
                              </a>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Itens & Equipamentos */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800 overflow-hidden shadow-2xl">
                      <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 pb-4 md:pb-6">
                        <CardTitle className="flex items-center gap-2 md:gap-3 text-white uppercase tracking-wide text-lg md:text-2xl">
                          <Sparkles className="w-7 h-7" />
                          Itens & Equipamentos
                        </CardTitle>
                        <CardDescription className="text-white/90 text-base">
                          Database completo de itens
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-0">
                          {[
                            { id: '25143', label: 'Armas & Equipamentos' },
                            { id: '25252', label: 'Cartas' },
                            { id: '25245', label: 'Consumíveis' },
                            { id: '25247', label: 'Visuais & Costumes' },
                            { id: '25249', label: 'Itens Raros' },
                          ].map((item, idx) => (
                            <motion.li 
                              key={idx} 
                              className="group"
                              whileHover={{ x: 10 }}
                            >
                              <a href="#" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-800/50 transition-all border border-transparent hover:border-[#D4AF37]/30">
                                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-zinc-700 group-hover:border-[#D4AF37]">
                                  <ItemIcon id={item.id} size="w-8 h-8" />
                                </div>
                                <div className="flex flex-col flex-1">
                                  <span className="text-white/90 group-hover:text-[#D4AF37] transition-colors font-semibold text-base">{item.label}</span>
                                  <div className="flex items-center gap-1.5 text-xs text-white/40 mt-1">
                                    <span>Admin</span>
                                    <span>•</span>
                                    <span>01 Nov</span>
                                    <span>•</span>
                                    <Eye className="w-3 h-3" />
                                    <span>3.2k</span>
                                  </div>
                                </div>
                              </a>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Monstros */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800 overflow-hidden shadow-2xl">
                      <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 pb-4 md:pb-6">
                        <CardTitle className="flex items-center gap-2 md:gap-3 text-white uppercase tracking-wide text-lg md:text-2xl">
                          <Users className="w-7 h-7" />
                          Monstros & MVPs
                        </CardTitle>
                        <CardDescription className="text-white/90 text-base">
                          Informações sobre todos os mobs
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-0">
                          {[
                            { id: '25261', label: 'Lista de Monstros', level: 'Todos' },
                            { id: '25262', label: 'MVPs', level: 'Lv 80+' },
                            { id: '25263', label: 'Mini-Boss', level: 'Lv 50+' },
                            { id: '25265', label: 'Tabela de Drops', level: 'Database' },
                          ].map((item, idx) => (
                            <motion.li 
                              key={idx} 
                              className="group"
                              whileHover={{ x: 10 }}
                            >
                              <a href="#" className="flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-800/50 transition-all border border-transparent hover:border-[#D4AF37]/30">
                                <div className="flex items-center gap-3 flex-1">
                                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-zinc-700 group-hover:border-[#D4AF37]">
                                    <ItemIcon id={item.id} size="w-8 h-8" />
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-white/90 group-hover:text-[#D4AF37] transition-colors font-semibold text-base">{item.label}</span>
                                    <div className="flex items-center gap-1.5 text-xs text-white/40 mt-1">
                                      <span>GM_Freya</span>
                                      <span>•</span>
                                      <span>30 Out</span>
                                      <span>•</span>
                                      <Eye className="w-3 h-3" />
                                      <span>5.1k</span>
                                    </div>
                                  </div>
                                </div>
                                <Badge variant="outline" className="border-cyan-500/40 text-cyan-400 text-xs px-2">
                                  {item.level}
                                </Badge>
                              </a>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Mapas */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800 overflow-hidden shadow-2xl">
                      <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 pb-4 md:pb-6">
                        <CardTitle className="flex items-center gap-2 md:gap-3 text-white uppercase tracking-wide text-lg md:text-2xl">
                          <Map className="w-7 h-7" />
                          Cidades & Mapas
                        </CardTitle>
                        <CardDescription className="text-white/90 text-base">
                          Explore o mundo de Midgard
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-0.5">
                          {[
                            { id: '25266', label: 'Prontera' },
                            { id: '25267', label: 'Geffen' },
                            { id: '25268', label: 'Morocc' },
                            { id: '25269', label: 'Payon' },
                            { id: '25270', label: 'Alberta' },
                          ].map((item, idx) => (
                            <motion.li 
                              key={idx} 
                              className="group"
                              whileHover={{ x: 10 }}
                            >
                              <a href="#" className="flex items-center gap-4 p-3 rounded-2xl hover:bg-zinc-800/50 transition-all border border-transparent hover:border-[#D4AF37]/30">
                                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-zinc-700 group-hover:border-[#D4AF37]">
                                  <ItemIcon id={item.id} size="w-8 h-8" />
                                </div>
                                <div className="flex flex-col flex-1">
                                  <span className="text-white/90 group-hover:text-[#D4AF37] transition-colors font-semibold text-base">{item.label}</span>
                                  <div className="flex items-center gap-1.5 text-xs text-white/40 mt-1">
                                    <span>Admin</span>
                                    <span>•</span>
                                    <span>28 Out</span>
                                    <span>•</span>
                                    <Eye className="w-3 h-3" />
                                    <span>1.5k</span>
                                  </div>
                                </div>
                              </a>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Quests */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800 overflow-hidden shadow-2xl">
                      <CardHeader className="bg-gradient-to-r from-yellow-600 to-amber-600 pb-4 md:pb-6">
                        <CardTitle className="flex items-center gap-2 md:gap-3 text-white uppercase tracking-wide text-lg md:text-2xl">
                          <Book className="w-7 h-7" />
                          Quests & Missões
                        </CardTitle>
                        <CardDescription className="text-white/90 text-base">
                          Todas as quests disponíveis
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-0">
                          {[
                            { id: '25273', label: 'Quest de Classe' },
                            { id: '25274', label: 'Quest de Rebirth' },
                            { id: '25276', label: 'Quests Principais' },
                            { id: '25277', label: 'Quests Secundárias' },
                          ].map((item, idx) => (
                            <motion.li 
                              key={idx} 
                              className="group"
                              whileHover={{ x: 10 }}
                            >
                              <a href="#" className="flex items-center gap-4 p-3 rounded-2xl hover:bg-zinc-800/50 transition-all border border-transparent hover:border-[#D4AF37]/30">
                                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-zinc-700 group-hover:border-[#D4AF37]">
                                  <ItemIcon id={item.id} size="w-8 h-8" />
                                </div>
                                <div className="flex flex-col flex-1">
                                  <span className="text-white/90 group-hover:text-[#D4AF37] transition-colors font-semibold text-base">{item.label}</span>
                                  <div className="flex items-center gap-1.5 text-xs text-white/40 mt-1">
                                    <span>GM_Balder</span>
                                    <span>•</span>
                                    <span>25 Out</span>
                                    <span>•</span>
                                    <Eye className="w-3 h-3" />
                                    <span>4.7k</span>
                                  </div>
                                </div>
                              </a>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Eventos & Sistemas */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800 overflow-hidden shadow-2xl">
                      <CardHeader className="bg-gradient-to-r from-pink-600 to-rose-600 pb-4 md:pb-6">
                        <CardTitle className="flex items-center gap-2 md:gap-3 text-white uppercase tracking-wide text-lg md:text-2xl">
                          <Gem className="w-7 h-7" />
                          Eventos & Sistemas
                        </CardTitle>
                        <CardDescription className="text-white/90 text-base">
                          Sistemas especiais do servidor
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-0">
                          {[
                            { id: '25290', label: 'Sistema de VIP', icon: Crown },
                            { id: '25291', label: 'War of Emperium', icon: Shield },
                            { id: '25292', label: 'Eventos Semanais', icon: Calendar },
                            { id: '25293', label: 'Sistema de Pets', icon: Heart },
                          ].map((item, idx) => (
                            <motion.li 
                              key={idx} 
                              className="group"
                              whileHover={{ x: 10 }}
                            >
                              <a href="#" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-zinc-800/50 transition-all border border-transparent hover:border-[#D4AF37]/30">
                                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-zinc-700 group-hover:border-[#D4AF37]">
                                  <item.icon className="w-6 h-6 text-white/70" />
                                </div>
                                <div className="flex flex-col flex-1">
                                  <span className="text-white/90 group-hover:text-[#D4AF37] transition-colors font-semibold text-base">{item.label}</span>
                                  <div className="flex items-center gap-1.5 text-xs text-white/40 mt-1">
                                    <span>Admin</span>
                                    <span>•</span>
                                    <span>20 Out</span>
                                    <span>•</span>
                                    <Eye className="w-3 h-3" />
                                    <span>6.2k</span>
                                  </div>
                                </div>
                              </a>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
              </div>

              {/* Seção Enviado pela Comunidade */}
              <div className="mt-16">
                <div className="flex items-center gap-4 mb-8">
                  <Users className="w-10 h-10 text-[#D4AF37]" />
                  <h3 className="text-4xl font-black text-white uppercase tracking-wide">
                    Enviado pela <span className="text-[#D4AF37]">Comunidade</span>
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Builds da Comunidade */}
                  <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800 overflow-hidden shadow-2xl">
                    <CardHeader className="bg-gradient-to-r from-red-600 to-rose-600 pb-4 md:pb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2 md:gap-3 text-white uppercase tracking-wide text-lg md:text-2xl">
                            <Target className="w-5 h-5 md:w-7 md:h-7" />
                            Builds da Comunidade
                          </CardTitle>
                          <CardDescription className="text-white/80 text-sm mt-1">
                            Criadas pelos jogadores
                          </CardDescription>
                        </div>
                        <Button 
                          onClick={() => setCurrentPage('builds')}
                          variant="outline" 
                          size="sm"
                          className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 hidden md:flex font-bold"
                        >
                          Ver Todos
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <Tabs defaultValue="mais-vistos" className="w-full">
                        <TabsList className="bg-zinc-800 border border-zinc-700 p-1 mb-4 w-full grid grid-cols-2">
                          <TabsTrigger 
                            value="mais-vistos" 
                            className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-white/70 text-sm font-bold"
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            Mais Vistos
                          </TabsTrigger>
                          <TabsTrigger 
                            value="recentes" 
                            className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-white/70 text-sm font-bold"
                          >
                            <Clock className="w-3 h-3 mr-1" />
                            Recentes
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="mais-vistos" className="mt-0">
                          <ul className="space-y-0">
                            {[
                              { id: '25158', label: 'DPS Crítico', author: 'ProPlayer', class: 'Lord Knight', views: 12547 },
                              { id: '25165', label: 'AoE Farm', author: 'MageMaster', class: 'High Wizard', views: 10234 },
                              { id: '25173', label: 'Trap Hunter', author: 'ArcherPro', class: 'Sniper', views: 9876 },
                              { id: '25174', label: 'Full Support', author: 'HealerKing', class: 'High Priest', views: 8543 },
                              { id: '25180', label: 'Sonic Blow', author: 'RogueGod', class: 'Assassin Cross', views: 7654 },
                            ].map((item, idx) => (
                              <motion.li 
                                key={idx} 
                                className="group"
                                whileHover={{ x: 10 }}
                              >
                                <a href="#" className="flex items-center justify-between p-2 rounded-xl hover:bg-zinc-800/50 transition-all border border-transparent hover:border-[#D4AF37]/30">
                                  <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <Avatar className="w-10 h-10 border-2 border-zinc-700 group-hover:border-[#D4AF37] transition-all group-hover:scale-110">
                                      <AvatarFallback className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-black font-bold text-sm">
                                        {item.author.slice(0, 2).toUpperCase()}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col flex-1 min-w-0">
                                      <span className="text-white/90 group-hover:text-[#D4AF37] transition-colors font-semibold text-sm truncate">{item.label}</span>
                                      <div className="flex items-center gap-1.5 text-xs text-white/40 mt-0.5">
                                        <button 
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setSelectedUser(item.author);
                                            setCurrentPage('profile');
                                          }}
                                          className="hover:text-[#D4AF37] transition-colors underline cursor-pointer"
                                        >
                                          {item.author}
                                        </button>
                                        <span>•</span>
                                        <Eye className="w-3 h-3 text-[#D4AF37]" />
                                        <span className="text-[#D4AF37]">{item.views.toLocaleString()}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <Badge variant="outline" className="border-blue-500/40 text-blue-400 ml-2 whitespace-nowrap text-xs">
                                    {item.class}
                                  </Badge>
                                </a>
                              </motion.li>
                            ))}
                          </ul>
                        </TabsContent>

                        <TabsContent value="recentes" className="mt-0">
                          <ul className="space-y-0">
                            {[
                              { id: '25180', label: 'Sonic Blow', author: 'RogueGod', class: 'Assassin Cross', views: 7654, date: '05 Nov' },
                              { id: '25174', label: 'Full Support', author: 'HealerKing', class: 'High Priest', views: 8543, date: '04 Nov' },
                              { id: '25173', label: 'Trap Hunter', author: 'ArcherPro', class: 'Sniper', views: 9876, date: '03 Nov' },
                              { id: '25165', label: 'AoE Farm', author: 'MageMaster', class: 'High Wizard', views: 10234, date: '02 Nov' },
                              { id: '25158', label: 'DPS Crítico', author: 'ProPlayer', class: 'Lord Knight', views: 12547, date: '01 Nov' },
                            ].map((item, idx) => (
                              <motion.li 
                                key={idx} 
                                className="group"
                                whileHover={{ x: 10 }}
                              >
                                <a href="#" className="flex items-center justify-between p-2 rounded-xl hover:bg-zinc-800/50 transition-all border border-transparent hover:border-[#D4AF37]/30">
                                  <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <Avatar className="w-10 h-10 border-2 border-zinc-700 group-hover:border-[#D4AF37] transition-all group-hover:scale-110">
                                      <AvatarFallback className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-black font-bold text-sm">
                                        {item.author.slice(0, 2).toUpperCase()}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col flex-1 min-w-0">
                                      <span className="text-white/90 group-hover:text-[#D4AF37] transition-colors font-semibold text-sm truncate">{item.label}</span>
                                      <div className="flex items-center gap-1.5 text-xs text-white/40 mt-0.5">
                                        <button 
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setSelectedUser(item.author);
                                            setCurrentPage('profile');
                                          }}
                                          className="hover:text-[#D4AF37] transition-colors underline cursor-pointer"
                                        >
                                          {item.author}
                                        </button>
                                        <span>•</span>
                                        <span>{item.date}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <Badge variant="outline" className="border-blue-500/40 text-blue-400 ml-2 whitespace-nowrap text-xs">
                                    {item.class}
                                  </Badge>
                                </a>
                              </motion.li>
                            ))}
                          </ul>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>

                  {/* Guias de Caça da Comunidade */}
                  <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800 overflow-hidden shadow-2xl">
                    <CardHeader className="bg-gradient-to-r from-teal-600 to-cyan-600 pb-4 md:pb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2 md:gap-3 text-white uppercase tracking-wide text-lg md:text-2xl">
                            <Map className="w-5 h-5 md:w-7 md:h-7" />
                            Guias de Caça
                          </CardTitle>
                          <CardDescription className="text-white/80 text-sm mt-1">
                            Spots de farm da comunidade
                          </CardDescription>
                        </div>
                        <Button 
                          onClick={() => setCurrentPage('guias')}
                          variant="outline" 
                          size="sm"
                          className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 hidden md:flex font-bold"
                        >
                          Ver Todos
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <Tabs defaultValue="mais-vistos" className="w-full">
                        <TabsList className="bg-zinc-800 border border-zinc-700 p-1 mb-4 w-full grid grid-cols-2">
                          <TabsTrigger 
                            value="mais-vistos" 
                            className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-white/70 text-sm font-bold"
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            Mais Vistos
                          </TabsTrigger>
                          <TabsTrigger 
                            value="recentes" 
                            className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-white/70 text-sm font-bold"
                          >
                            <Clock className="w-3 h-3 mr-1" />
                            Recentes
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="mais-vistos" className="mt-0">
                          <ul className="space-y-0">
                            {[
                              { id: '25261', label: 'Farm em Clock Tower', author: 'FarmGod', level: 'Lv 60-80', views: 15234 },
                              { id: '25262', label: 'Glast Heim Knights', author: 'WikiHero', level: 'Lv 80+', views: 12876 },
                              { id: '25263', label: 'Leveling Orc Dungeon', author: 'ExpMaster', level: 'Lv 50-70', views: 11543 },
                              { id: '25264', label: 'Farm de Zeny Abyss', author: 'RichPlayer', level: 'Lv 90+', views: 10234 },
                              { id: '25265', label: 'Sphinx EXP Farm', author: 'ProFarmer', level: 'Lv 70+', views: 9876 },
                            ].map((item, idx) => (
                              <motion.li 
                                key={idx} 
                                className="group"
                                whileHover={{ x: 10 }}
                              >
                                <a href="#" className="flex items-center justify-between p-2 rounded-xl hover:bg-zinc-800/50 transition-all border border-transparent hover:border-[#D4AF37]/30">
                                  <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <Avatar className="w-10 h-10 border-2 border-zinc-700 group-hover:border-[#D4AF37] transition-all group-hover:scale-110">
                                      <AvatarFallback className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white font-bold text-sm">
                                        {item.author.slice(0, 2).toUpperCase()}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col flex-1 min-w-0">
                                      <span className="text-white/90 group-hover:text-[#D4AF37] transition-colors font-semibold text-sm truncate">{item.label}</span>
                                      <div className="flex items-center gap-1.5 text-xs text-white/40 mt-0.5">
                                        <button 
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setSelectedUser(item.author);
                                            setCurrentPage('profile');
                                          }}
                                          className="hover:text-[#D4AF37] transition-colors underline cursor-pointer"
                                        >
                                          {item.author}
                                        </button>
                                        <span>•</span>
                                        <Eye className="w-3 h-3 text-[#D4AF37]" />
                                        <span className="text-[#D4AF37]">{item.views.toLocaleString()}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <Badge variant="outline" className="border-purple-500/40 text-purple-400 ml-2 whitespace-nowrap text-xs">
                                    {item.level}
                                  </Badge>
                                </a>
                              </motion.li>
                            ))}
                          </ul>
                        </TabsContent>

                        <TabsContent value="recentes" className="mt-0">
                          <ul className="space-y-0">
                            {[
                              { id: '25265', label: 'Sphinx EXP Farm', author: 'ProFarmer', level: 'Lv 70+', views: 9876, date: '05 Nov' },
                              { id: '25264', label: 'Farm de Zeny Abyss', author: 'RichPlayer', level: 'Lv 90+', views: 10234, date: '04 Nov' },
                              { id: '25263', label: 'Leveling Orc Dungeon', author: 'ExpMaster', level: 'Lv 50-70', views: 11543, date: '03 Nov' },
                              { id: '25262', label: 'Glast Heim Knights', author: 'WikiHero', level: 'Lv 80+', views: 12876, date: '02 Nov' },
                              { id: '25261', label: 'Farm em Clock Tower', author: 'FarmGod', level: 'Lv 60-80', views: 15234, date: '01 Nov' },
                            ].map((item, idx) => (
                              <motion.li 
                                key={idx} 
                                className="group"
                                whileHover={{ x: 10 }}
                              >
                                <a href="#" className="flex items-center justify-between p-2 rounded-xl hover:bg-zinc-800/50 transition-all border border-transparent hover:border-[#D4AF37]/30">
                                  <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <Avatar className="w-10 h-10 border-2 border-zinc-700 group-hover:border-[#D4AF37] transition-all group-hover:scale-110">
                                      <AvatarFallback className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white font-bold text-sm">
                                        {item.author.slice(0, 2).toUpperCase()}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col flex-1 min-w-0">
                                      <span className="text-white/90 group-hover:text-[#D4AF37] transition-colors font-semibold text-sm truncate">{item.label}</span>
                                      <div className="flex items-center gap-1.5 text-xs text-white/40 mt-0.5">
                                        <button 
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setSelectedUser(item.author);
                                            setCurrentPage('profile');
                                          }}
                                          className="hover:text-[#D4AF37] transition-colors underline cursor-pointer"
                                        >
                                          {item.author}
                                        </button>
                                        <span>•</span>
                                        <span>{item.date}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <Badge variant="outline" className="border-purple-500/40 text-purple-400 ml-2 whitespace-nowrap text-xs">
                                    {item.level}
                                  </Badge>
                                </a>
                              </motion.li>
                            ))}
                          </ul>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>

                  {/* Roadmap do Servidor - Timeline Horizontal */}
                  <div className="md:col-span-2">
                    <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800 overflow-hidden shadow-2xl">
                      <CardHeader className="bg-transparent border-b border-zinc-800 pb-4 md:pb-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="flex items-center gap-2 md:gap-3 text-white uppercase tracking-wide text-lg md:text-2xl">
                              <Rocket className="w-5 h-5 md:w-7 md:h-7 text-[#D4AF37]" />
                              Roadmap do Servidor
                            </CardTitle>
                            <CardDescription className="text-white/60 text-sm mt-1">
                              Acompanhe o desenvolvimento e as próximas atualizações
                            </CardDescription>
                          </div>
                          <Button 
                            onClick={() => setCurrentPage('roadmap')}
                            className="bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 hidden md:flex"
                          >
                            Ver Completo
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="p-3 md:p-6">
                        {/* Roadmap Estilo Estrada Vertical */}
                        <div className="relative max-w-3xl mx-auto">
                          {/* Contador do Próximo Evento - Mobile Optimized */}
                          <div className="mb-6 md:mb-8 p-3 md:p-4 bg-zinc-900/50 border border-[#D4AF37]/30 rounded-xl backdrop-blur-sm">
                            <div className="flex items-center justify-between flex-col md:flex-row gap-3">
                              <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto justify-center md:justify-start">
                                <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] animate-pulse" />
                                <div className="text-center md:text-left">
                                  <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-wide">Próximo Evento</p>
                                  <h4 className="text-white font-black text-xs md:text-sm">1ST WEEKSARY EVENT</h4>
                                </div>
                              </div>
                              <div className="flex gap-1">
                                <div className="bg-zinc-800 px-2 md:px-1.5 py-1 rounded">
                                  <span className="text-sm md:text-base font-black text-[#D4AF37]">07</span>
                                  <p className="text-[8px] text-white/60 uppercase text-center">D</p>
                                </div>
                                <div className="bg-zinc-800 px-2 md:px-1.5 py-1 rounded">
                                  <span className="text-sm md:text-base font-black text-[#D4AF37]">14</span>
                                  <p className="text-[8px] text-white/60 uppercase text-center">H</p>
                                </div>
                                <div className="bg-zinc-800 px-2 md:px-1.5 py-1 rounded">
                                  <span className="text-sm md:text-base font-black text-[#D4AF37]">32</span>
                                  <p className="text-[8px] text-white/60 uppercase text-center">M</p>
                                </div>
                                <div className="bg-zinc-800 px-2 md:px-1.5 py-1 rounded">
                                  <span className="text-sm md:text-base font-black text-[#D4AF37]">45</span>
                                  <p className="text-[8px] text-white/60 uppercase text-center">S</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Estrada Vertical - Roadmap */}
                          <div className="relative">
                            {/* Linha central da estrada - Base */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-zinc-800 transform -translate-x-1/2" />
                            
                            {/* Barra de Progresso Animada na Linha Central */}
                            <motion.div 
                              className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-[#D4AF37] via-yellow-400 to-[#D4AF37] transform -translate-x-1/2 shadow-lg shadow-[#D4AF37]/50"
                              initial={{ height: 0 }}
                              whileInView={{ height: '65%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 2, ease: 'easeOut' }}
                            >
                              {/* Efeito de Brilho Vertical */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-transparent"
                                animate={{
                                  y: ['0%', '200%'],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              />
                              {/* Ponta da Barra com Ícone */}
                              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-yellow-400 border-2 border-black flex items-center justify-center shadow-lg shadow-[#D4AF37]/50">
                                  <Rocket className="w-3 h-3 text-black" />
                                </div>
                              </div>
                            </motion.div>
                            
                            {/* Faixas da estrada */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-16 md:w-20 bg-zinc-900/30 transform -translate-x-1/2 -z-10 border-l-2 border-r-2 border-zinc-800/50" />
                            
                            {/* Eventos */}
                            <div className="space-y-6 md:space-y-8">
                              {[
                                {
                                  title: 'GRAND OPENING',
                                  description: 'Embarque em uma nova jornada épica!',
                                  date: '7 DEZ',
                                  completed: true,
                                  image: 'https://images.unsplash.com/photo-1735885684658-ffeea376f061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcGljJTIwZmFudGFzeSUyMG9wZW5pbmclMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjI1MDA3ODF8MA&ixlib=rb-4.1.0&q=80&w=400',
                                  progress: 100
                                },
                                {
                                  title: 'ESSENCE GATHERING',
                                  description: 'Coleta essências mágicas exclusivas!',
                                  date: '8 DEZ',
                                  completed: true,
                                  image: 'https://images.unsplash.com/photo-1726925998496-55604c88910b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdpY2FsJTIwZXNzZW5jZSUyMGNyeXN0YWxzfGVufDF8fHx8MTc2MjUwMDc4MXww&ixlib=rb-4.1.0&q=80&w=400',
                                  progress: 100
                                },
                                {
                                  title: '1ST WEEKSARY',
                                  description: 'Celebre a 1ª semana com eventos!',
                                  date: '14 DEZ',
                                  completed: false,
                                  image: 'https://images.unsplash.com/photo-1720850539227-a84a044be66a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5JTIwZmlyZXdvcmtzfGVufDF8fHx8MTc2MjUwMDc4MXww&ixlib=rb-4.1.0&q=80&w=400',
                                  progress: 65
                                },
                                {
                                  title: 'GUILD BOSS RAID',
                                  description: 'Derrote chefes épicos em guilda!',
                                  date: '20 DEZ',
                                  completed: false,
                                  image: 'https://images.unsplash.com/photo-1574867032425-fa5247fbf771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWlsZCUyMGJvc3MlMjByYWlkJTIwYmF0dGxlfGVufDF8fHx8MTc2MjUwMDc4Mnww&ixlib=rb-4.1.0&q=80&w=400',
                                  progress: 40
                                },
                                {
                                  title: '2ND WEEKSARY',
                                  description: 'Mais celebrações e recompensas!',
                                  date: '21 DEZ',
                                  completed: false,
                                  image: 'https://images.unsplash.com/photo-1720850539227-a84a044be66a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5JTIwZmlyZXdvcmtzfGVufDF8fHx8MTc2MjUwMDc4MXww&ixlib=rb-4.1.0&q=80&w=400',
                                  progress: 20
                                },
                                {
                                  title: 'CHRISTMAS EVENT',
                                  description: 'Celebre o Natal com itens festivos!',
                                  date: '25 DEZ',
                                  completed: false,
                                  image: 'https://images.unsplash.com/photo-1720850539227-a84a044be66a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5JTIwZmlyZXdvcmtzfGVufDF8fHx8MTc2MjUwMDc4MXww&ixlib=rb-4.1.0&q=80&w=400',
                                  progress: 15
                                },
                                {
                                  title: 'PLAYER OF THE MONTH',
                                  description: 'Competição global com prêmios!',
                                  date: '29 DEZ',
                                  completed: false,
                                  image: 'https://images.unsplash.com/photo-1574867032425-fa5247fbf771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWlsZCUyMGJvc3MlMjByYWlkJTIwYmF0dGxlfGVufDF8fHx8MTc2MjUwMDc4Mnww&ixlib=rb-4.1.0&q=80&w=400',
                                  progress: 10
                                },
                              ].map((event, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: idx * 0.1 }}
                                  className={`relative flex items-center gap-2 md:gap-4 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                  {/* Marco da Estrada - Simples - Mobile Optimized */}
                                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                    {event.completed ? (
                                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] border-2 md:border-4 border-black flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
                                        <Award className="w-4 h-4 md:w-5 md:h-5 text-black" />
                                      </div>
                                    ) : (
                                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-zinc-900 to-black border-2 md:border-4 border-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
                                        <Rocket className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                                      </div>
                                    )}
                                  </div>

                                  {/* Card do Evento - Mobile Optimized */}
                                  <Card className={`flex-1 max-w-[45%] md:max-w-[47%] bg-gradient-to-br from-zinc-900 to-black border-2 ${event.completed ? 'border-zinc-700 grayscale opacity-70' : 'border-[#D4AF37]/40'} overflow-hidden hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all group`}>
                                    <div className="flex items-center gap-2 md:gap-4 p-2 md:p-4">
                                      {/* Imagem - Mobile Responsive */}
                                      <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-lg md:rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                                        <ImageWithFallback
                                          src={event.image}
                                          alt={event.title}
                                          className={`w-full h-full object-cover group-hover:scale-110 transition-transform ${event.completed ? 'grayscale' : ''}`}
                                        />
                                        {event.completed && (
                                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                            <Award className="w-8 h-8 text-zinc-500" />
                                          </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                      </div>

                                      {/* Conteúdo - Mobile Responsive */}
                                      <div className="flex-1 min-w-0">
                                        <h4 className={`font-black ${event.completed ? 'text-zinc-500' : 'text-white'} uppercase text-[10px] md:text-sm mb-1 md:mb-2 line-clamp-1`}>
                                          {event.title}
                                        </h4>
                                        <p className={`text-[9px] md:text-xs ${event.completed ? 'text-zinc-600' : 'text-white/60'} mb-1 md:mb-2 line-clamp-2 leading-relaxed hidden md:block`}>
                                          {event.description}
                                        </p>
                                        <div className="flex items-center gap-1 md:gap-2">
                                          <Calendar className={`w-3 h-3 md:w-4 md:h-4 ${event.completed ? 'text-zinc-600' : 'text-[#D4AF37]'}`} />
                                          <span className={`text-[9px] md:text-xs font-bold ${event.completed ? 'text-zinc-600' : 'text-[#D4AF37]'}`}>
                                            {event.date}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </Card>

                                  {/* Espaçador para o outro lado */}
                                  <div className="flex-1 max-w-[45%] md:max-w-[47%]" />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <Button 
                          onClick={() => setCurrentPage('roadmap')}
                          variant="outline"
                          className="w-full mt-4 border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 md:hidden"
                        >
                          Ver Roadmap Completo
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Calendário de Eventos */}
                  <div className="md:col-span-2">
                    <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800 overflow-hidden shadow-2xl">
                      <CardHeader className="bg-transparent border-b border-zinc-800 pb-4 md:pb-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="flex items-center gap-2 md:gap-3 text-white uppercase tracking-wide text-lg md:text-2xl">
                              <Calendar className="w-5 h-5 md:w-7 md:h-7 text-[#D4AF37]" />
                              Calendário de Eventos
                            </CardTitle>
                            <CardDescription className="text-white/60 text-sm mt-1">
                              Programe-se para não perder nenhum evento épico!
                            </CardDescription>
                          </div>
                          <Button 
                            onClick={() => setCurrentPage('calendario')}
                            className="bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 hidden md:flex"
                          >
                            Ver Página Completa
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="p-3 md:p-6">
                        {/* Timeline Semanal - Mobile Optimized */}
                        <div className="mb-4 md:mb-6">
                          <h3 className="text-base md:text-xl font-black text-white uppercase tracking-wide mb-3 md:mb-4 flex items-center gap-2">
                            <Calendar className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" />
                            Agenda <span className="text-[#D4AF37]">Semanal</span>
                          </h3>
                          <div className="grid grid-cols-7 gap-1 md:gap-2">
                            {['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'].map((day, index) => {
                              const eventosNoDia = (() => {
                                const eventos = [
                                  { days: [6], color: 'from-red-600 to-rose-600', name: 'WoE' },
                                  { days: [2, 4], color: 'from-[#D4AF37] to-[#B8941F]', name: 'Tesouro' },
                                  { days: [0], color: 'from-purple-600 to-indigo-600', name: 'Boss Rush' },
                                  { days: [3, 5], color: 'from-orange-600 to-amber-600', name: 'PvP' },
                                  { days: [1, 2, 3, 4, 5], color: 'from-green-600 to-emerald-600', name: 'Daily' }
                                ];
                                return eventos.filter(e => e.days.includes(index));
                              })();
                              const currentDay = new Date().getDay();
                              const isToday = index === currentDay;
                              const isPast = index < currentDay;
                              
                              return (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                  whileHover={{ y: -5, scale: 1.05 }}
                                  className={`relative group cursor-pointer`}
                                >
                                  <div className={`p-1 md:p-3 rounded-lg md:rounded-xl border md:border-2 transition-all ${
                                    isToday 
                                      ? 'bg-gradient-to-br from-[#D4AF37] to-[#B8941F] border-[#D4AF37] shadow-md md:shadow-2xl shadow-[#D4AF37]/40 scale-100 md:scale-110' 
                                      : isPast
                                        ? 'bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border-zinc-800 grayscale opacity-50'
                                        : 'bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 border-zinc-700 hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-[#D4AF37]/10'
                                  }`}>
                                    {/* Badge Hoje - Mobile Optimized */}
                                    {isToday && (
                                      <div className="absolute -top-1.5 -right-1.5 md:-top-3 md:-right-3 z-10">
                                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-[6px] md:text-xs px-1 md:px-3 py-0.5 md:py-1 font-black uppercase shadow-md md:shadow-xl shadow-green-500/50 border border-white/30 md:border-2">
                                          <span className="animate-pulse hidden md:inline">⭐ HOJE</span>
                                          <span className="animate-pulse md:hidden">⭐</span>
                                        </Badge>
                                      </div>
                                    )}

                                    <div className="text-center">
                                      {/* Dia */}
                                      <p className={`font-black uppercase text-[7px] md:text-xs mb-1 md:mb-3 tracking-wider ${
                                        isToday ? 'text-black' : isPast ? 'text-zinc-600' : 'text-[#D4AF37]'
                                      }`}>
                                        {day}
                                      </p>
                                      
                                      {/* Contador de Eventos - Mobile Ultra Compact */}
                                      <div className={`w-6 h-6 md:w-12 md:h-12 mx-auto rounded-full border md:border-4 flex items-center justify-center mb-0.5 md:mb-2 ${
                                        isToday 
                                          ? 'border-black bg-black/20 shadow-sm md:shadow-lg' 
                                          : isPast
                                            ? 'border-zinc-700 bg-zinc-800/30'
                                            : eventosNoDia.length > 0 
                                              ? 'border-[#D4AF37] bg-[#D4AF37]/10' 
                                              : 'border-zinc-700 bg-zinc-800/50'
                                      }`}>
                                        <span className={`text-xs md:text-2xl font-black ${
                                          isToday ? 'text-black' : isPast ? 'text-zinc-600' : eventosNoDia.length > 0 ? 'text-[#D4AF37]' : 'text-zinc-600'
                                        }`}>
                                          {eventosNoDia.length}
                                        </span>
                                      </div>

                                      <p className={`text-[6px] md:text-[10px] font-bold uppercase ${
                                        isToday ? 'text-black/80' : isPast ? 'text-zinc-600' : 'text-white/50'
                                      }`}>
                                        {eventosNoDia.length === 1 ? 'Evento' : 'Eventos'}
                                      </p>

                                      {/* Barras de Indicação - Mobile Ultra Compact */}
                                      {eventosNoDia.length > 0 && (
                                        <div className="mt-1 md:mt-3 flex flex-col gap-[2px] md:gap-1">
                                          {eventosNoDia.slice(0, 2).map((evento, idx) => (
                                            <motion.div
                                              key={idx}
                                              initial={{ width: 0 }}
                                              animate={{ width: '100%' }}
                                              transition={{ delay: index * 0.05 + idx * 0.1 }}
                                              className={`h-[2px] md:h-1 rounded-full bg-gradient-to-r ${evento.color} ${isToday ? 'opacity-40' : isPast ? 'grayscale opacity-30' : ''}`}
                                              title={evento.name}
                                            />
                                          ))}
                                          {eventosNoDia.length > 2 && (
                                            <div className="hidden md:block">
                                              <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: '100%' }}
                                                transition={{ delay: index * 0.05 + 0.2 }}
                                                className={`h-1 rounded-full bg-gradient-to-r ${eventosNoDia[2].color} ${isToday ? 'opacity-40' : isPast ? 'grayscale opacity-30' : ''}`}
                                                title={eventosNoDia[2].name}
                                              />
                                            </div>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  {/* Tooltip com nomes dos eventos no hover - Hidden on mobile */}
                                  {eventosNoDia.length > 0 && (
                                    <div className="hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black border border-[#D4AF37]/30 rounded text-[10px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                      {eventosNoDia.map(e => e.name).join(', ')}
                                    </div>
                                  )}
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Todos os Eventos - Mobile Optimized */}
                        <div>
                          <h3 className="text-base md:text-xl font-black text-white uppercase tracking-wide mb-3 md:mb-4">
                            Todos os <span className="text-[#D4AF37]">Eventos</span>
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            {[
                              {
                                title: 'WAR OF EMPERIUM',
                                type: 'PvP',
                                days: ['SÁB'],
                                dayIndex: 6,
                                time: '20:00 - 22:00',
                                participants: '50-100 players',
                                difficulty: 'Extremo',
                                color: 'from-red-600 to-rose-600',
                                borderColor: 'border-red-500/40',
                                icon: Sword,
                                image: 'https://images.unsplash.com/photo-1613477757272-96c69d8a64de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcGljJTIwbWVkaWV2YWwlMjBiYXR0bGV8ZW58MXx8fHwxNzYyNDk5NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080'
                              },
                              {
                                title: 'CAÇA AO TESOURO',
                                type: 'PvE',
                                days: ['TER', 'QUI'],
                                dayIndex: 2,
                                time: '19:00 - 20:00',
                                participants: 'Ilimitado',
                                difficulty: 'Médio',
                                color: 'from-[#D4AF37] to-[#B8941F]',
                                borderColor: 'border-[#D4AF37]/40',
                                icon: Gift,
                                image: 'https://images.unsplash.com/photo-1632809199725-72a4245e846b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVhc3VyZSUyMGNoZXN0JTIwZ29sZHxlbnwxfHx8fDE3NjI0NTM1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
                              },
                              {
                                title: 'BOSS RUSH',
                                type: 'PvE',
                                days: ['DOM'],
                                dayIndex: 0,
                                time: '18:00 - 20:00',
                                participants: '1-5 players',
                                difficulty: 'Difícil',
                                color: 'from-purple-600 to-indigo-600',
                                borderColor: 'border-purple-500/40',
                                icon: Target,
                                image: 'https://images.unsplash.com/photo-1665934231832-3de7123253d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW5nZW9uJTIwbW9uc3RlcnxlbnwxfHx8fDE3NjI0OTk0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
                              },
                              {
                                title: 'BATTLEGROUNDS',
                                type: 'PvP',
                                days: ['QUA', 'SEX'],
                                dayIndex: 3,
                                time: '21:00 - 22:30',
                                participants: '20 players',
                                difficulty: 'Alto',
                                color: 'from-orange-600 to-amber-600',
                                borderColor: 'border-orange-500/40',
                                icon: Shield,
                                image: 'https://images.unsplash.com/photo-1613477757272-96c69d8a64de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcGljJTIwbWVkaWV2YWwlMjBiYXR0bGV8ZW58MXx8fHwxNzYyNDk5NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080'
                              },
                            ].map((evento, idx) => {
                              const Icon = evento.icon;
                              const currentDay = new Date().getDay();
                              const isEventPast = evento.dayIndex < currentDay;
                              const getDifficultyColor = (difficulty: string) => {
                                switch (difficulty) {
                                  case 'Fácil': return 'text-green-400 border-green-500/40';
                                  case 'Médio': return 'text-yellow-400 border-yellow-500/40';
                                  case 'Alto': return 'text-orange-400 border-orange-500/40';
                                  case 'Difícil': return 'text-red-400 border-red-500/40';
                                  case 'Extremo': return 'text-purple-400 border-purple-500/40';
                                  default: return 'text-zinc-400 border-zinc-500/40';
                                }
                              };
                              
                              return (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="group"
                                >
                                  <Card className={`bg-gradient-to-br from-zinc-900 to-black border ${isEventPast ? 'border-zinc-700 grayscale opacity-60' : evento.borderColor} hover:border-[#D4AF37]/70 transition-all overflow-hidden`}>
                                    <div className="flex">
                                      <div className="relative w-20 md:w-24 flex-shrink-0 overflow-hidden">
                                        <img
                                          src={evento.image}
                                          alt={evento.title}
                                          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${isEventPast ? 'grayscale' : ''}`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
                                        {isEventPast && (
                                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <span className="text-[9px] md:text-xs font-black text-zinc-500 uppercase">Concluído</span>
                                          </div>
                                        )}
                                      </div>

                                      <CardContent className="flex-1 p-2 md:p-3">
                                        <div className="flex items-start justify-between mb-2">
                                          <div className="flex items-center gap-2">
                                            <div className={`p-2 rounded-lg bg-gradient-to-br ${evento.color}`}>
                                              <Icon className="w-4 h-4 text-white" />
                                            </div>
                                            <div>
                                              <h4 className="font-black text-white uppercase text-xs">
                                                {evento.title}
                                              </h4>
                                              <p className="text-xs text-white/60">{evento.type}</p>
                                            </div>
                                          </div>
                                          <Badge variant="outline" className={`${getDifficultyColor(evento.difficulty)} text-xs`}>
                                            {evento.difficulty}
                                          </Badge>
                                        </div>

                                        <div className="flex flex-wrap gap-1 mb-2">
                                          {evento.days.map((day, dIdx) => (
                                            <Badge key={dIdx} className="bg-zinc-800 text-[#D4AF37] text-xs">
                                              {day}
                                            </Badge>
                                          ))}
                                        </div>

                                        <div className="flex items-center gap-3 text-xs text-white/70">
                                          <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3 text-[#D4AF37]" />
                                            {evento.time}
                                          </div>
                                          <div className="flex items-center gap-1">
                                            <Users className="w-3 h-3 text-[#D4AF37]" />
                                            {evento.participants}
                                          </div>
                                        </div>
                                      </CardContent>
                                    </div>
                                  </Card>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>

                        <Button 
                          onClick={() => setCurrentPage('calendario')}
                          variant="outline"
                          className="w-full mt-6 border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 md:hidden"
                        >
                          Ver Calendário Completo
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      {/* Discord CTA */}
      <div className="relative max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative inline-block">
            {/* Glow effect animado */}
            <motion.div
              className="absolute inset-0 bg-[#5865F2] rounded-2xl blur-3xl opacity-50"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                className="relative bg-gradient-to-r from-[#5865F2] to-[#4752C4] hover:from-[#6875F5] hover:to-[#5865F2] text-white px-12 md:px-16 py-6 md:py-8 uppercase tracking-wider border-0 shadow-2xl text-lg md:text-2xl font-black rounded-2xl overflow-hidden group"
              >
                <a href="https://discord.gg/YOUR_INVITE_CODE" target="_blank" rel="noopener noreferrer">
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-200%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut"
                    }}
                  />
                  <MessageCircle className="w-6 h-6 md:w-8 md:h-8 mr-3 relative z-10" />
                  <span className="relative z-10">Junte-se ao Discord</span>
                  
                  {/* Pulse ring */}
                  <motion.span
                    className="absolute inset-0 border-4 border-white rounded-2xl"
                    animate={{
                      scale: [1, 1.1],
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                </a>
              </Button>
            </motion.div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/60 mt-6 text-sm md:text-base"
          >
            Entre na nossa comunidade e fique por dentro de tudo! 🎮✨
          </motion.p>
        </motion.div>
      </div>

      {/* Premium Footer */}
      <footer className="relative border-t-2 border-zinc-900 bg-gradient-to-b from-black via-zinc-950 to-black py-12">
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={logoEpicMidgard}
                  alt="Epic Midgard"
                  className="w-16 h-16 object-contain"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))' }}
                />
                <div>
                  <h4 className="font-black text-[#D4AF37] uppercase tracking-wide text-xl">EpicMidgard</h4>
                  <p className="text-xs text-white/40">Wiki Oficial</p>
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                A wiki mais completa e atualizada do servidor EpicMidgard. Criada pela comunidade, para a comunidade.
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: MessageCircle, link: 'https://discord.gg/YOUR_INVITE', color: 'hover:bg-[#5865F2]' },
                  { Icon: Instagram, link: 'https://instagram.com/epicmidgard', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600' },
                  { Icon: Youtube, link: 'https://youtube.com/@epicmidgard', color: 'hover:bg-[#FF0000]' },
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center transition-all group ${item.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                Navegação
              </h4>
              <ul className="space-y-3 text-sm text-white/60">
                {['Página Principal', 'Mudanças Recentes', 'Página Aleatória', 'Estatísticas'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                Redes Sociais
              </h4>
              <ul className="space-y-3 text-sm text-white/60">
                {[
                  { icon: MessageCircle, label: 'Discord', link: 'https://discord.gg/YOUR_INVITE' },
                  { icon: Instagram, label: 'Instagram', link: 'https://instagram.com/epicmidgard' },
                  { icon: Youtube, label: 'YouTube', link: 'https://youtube.com/@epicmidgard' },
                  { icon: FileText, label: 'TikTok', link: 'https://tiktok.com/@epicmidgard' }
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                Links Úteis
              </h4>
              <ul className="space-y-3 text-sm text-white/60">
                {[
                  { icon: Globe, label: 'Site Oficial', link: 'http://epicmidgard.com.br' },
                  { icon: MessageCircle, label: 'Discord', link: 'https://discord.gg/YOUR_INVITE' },
                  { icon: Shield, label: 'Regras', link: '#' },
                  { icon: Users, label: 'Comunidade', link: '#' }
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-900 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-8 text-sm text-white/40">
                <span>© 2025 EpicMidgard Wiki</span>
                <span>•</span>
                <span>Todos os direitos reservados</span>
              </div>
              <div className="text-sm text-white/40 text-center md:text-right">
                <p>Ragnarok Online © Gravity Co., Ltd.</p>
                <p className="text-xs mt-1">EpicMidgard - Wiki Oficial do Servidor</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Modal de Ranking */}
      <RankingModal open={rankingModalOpen} onOpenChange={setRankingModalOpen} />
    </div>
  );
}
