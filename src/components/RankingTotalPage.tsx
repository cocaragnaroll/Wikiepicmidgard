import { motion } from 'motion/react';
import { ArrowLeft, Trophy, Star, TrendingUp, Crown, Medal, Award, Zap, Target, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface RankingTotalPageProps {
  onBack: () => void;
  onViewProfile: (username: string) => void;
}

export default function RankingTotalPage({ onBack, onViewProfile }: RankingTotalPageProps) {
  const allContributors = [
    { rank: 1, name: 'WikiMaster', avatar: '👑', points: 2850, articles: 285, badge: 'Mestre da Wiki', tier: 'legendary' },
    { rank: 2, name: 'ProGuider', avatar: '⭐', points: 2340, articles: 234, badge: 'Especialista', tier: 'epic' },
    { rank: 3, name: 'ContentKing', avatar: '🎯', points: 1980, articles: 198, badge: 'Veterano', tier: 'epic' },
    { rank: 4, name: 'HelpfulHero', avatar: '🛡️', points: 1750, articles: 175, badge: 'Guardião', tier: 'rare' },
    { rank: 5, name: 'KnowledgeSeeker', avatar: '📚', points: 1620, articles: 162, badge: 'Sábio', tier: 'rare' },
    { rank: 6, name: 'BuildMaster', avatar: '⚔️', points: 1450, articles: 145, badge: 'Especialista', tier: 'rare' },
    { rank: 7, name: 'FarmGuru', avatar: '💎', points: 1280, articles: 128, badge: 'Veterano', tier: 'rare' },
    { rank: 8, name: 'QuestSolver', avatar: '🗺️', points: 1150, articles: 115, badge: 'Aventureiro', tier: 'uncommon' },
    { rank: 9, name: 'ClassExpert', avatar: '🎓', points: 980, articles: 98, badge: 'Mestre', tier: 'uncommon' },
    { rank: 10, name: 'LoreKeeper', avatar: '📖', points: 920, articles: 92, badge: 'Historiador', tier: 'uncommon' },
    { rank: 11, name: 'TipProvider', avatar: '💡', points: 850, articles: 85, badge: 'Contribuidor', tier: 'uncommon' },
    { rank: 12, name: 'DataMiner', avatar: '⛏️', points: 790, articles: 79, badge: 'Pesquisador', tier: 'uncommon' },
    { rank: 13, name: 'ItemCollector', avatar: '🎁', points: 730, articles: 73, badge: 'Colecionador', tier: 'common' },
    { rank: 14, name: 'MapExplorer', avatar: '🧭', points: 680, articles: 68, badge: 'Explorador', tier: 'common' },
    { rank: 15, name: 'MonsterHunter', avatar: '🐉', points: 620, articles: 62, badge: 'Caçador', tier: 'common' },
    { rank: 16, name: 'SkillAnalyst', avatar: '⚡', points: 570, articles: 57, badge: 'Analista', tier: 'common' },
    { rank: 17, name: 'NewbieFriend', avatar: '🤝', points: 510, articles: 51, badge: 'Amigo', tier: 'common' },
    { rank: 18, name: 'EventWriter', avatar: '🎊', points: 460, articles: 46, badge: 'Cronista', tier: 'common' },
    { rank: 19, name: 'PvPAnalyst', avatar: '⚔️', points: 410, articles: 41, badge: 'Estrategista', tier: 'common' },
    { rank: 20, name: 'EconomyGuru', avatar: '💰', points: 380, articles: 38, badge: 'Mercador', tier: 'common' },
    { rank: 21, name: 'CraftingPro', avatar: '🔨', points: 340, articles: 34, badge: 'Artesão', tier: 'common' },
    { rank: 22, name: 'GuildLeader', avatar: '👥', points: 310, articles: 31, badge: 'Líder', tier: 'common' },
    { rank: 23, name: 'PetMaster', avatar: '🐾', points: 270, articles: 27, badge: 'Domador', tier: 'common' },
    { rank: 24, name: 'StatOptimizer', avatar: '📊', points: 240, articles: 24, badge: 'Otimizador', tier: 'common' },
    { rank: 25, name: 'DungeonRunner', avatar: '🏰', points: 210, articles: 21, badge: 'Aventureiro', tier: 'common' },
  ];

  const topBuilds = [
    { rank: 1, name: 'ProPlayer', avatar: 'PP', points: 450, articles: 45, specialty: 'Builds PvP' },
    { rank: 2, name: 'MageMaster', avatar: 'MM', points: 380, articles: 38, specialty: 'Builds Mago' },
    { rank: 3, name: 'ArcherPro', avatar: 'AP', points: 320, articles: 32, specialty: 'Builds Arqueiro' },
    { rank: 4, name: 'TankKing', avatar: 'TK', points: 290, articles: 29, specialty: 'Builds Tank' },
    { rank: 5, name: 'SupportGod', avatar: 'SG', points: 260, articles: 26, specialty: 'Builds Suporte' },
  ];

  const topGuides = [
    { rank: 1, name: 'FarmGod', avatar: 'FG', points: 520, articles: 52, specialty: 'Guias de Farm' },
    { rank: 2, name: 'ExpMaster', avatar: 'EM', points: 410, articles: 41, specialty: 'Guias de Level' },
    { rank: 3, name: 'RichPlayer', avatar: 'RP', points: 370, articles: 37, specialty: 'Guias de Zeny' },
    { rank: 4, name: 'QuestHero', avatar: 'QH', points: 330, articles: 33, specialty: 'Guias de Quest' },
    { rank: 5, name: 'MVPHunter', avatar: 'MH', points: 300, articles: 30, specialty: 'Guias de MVP' },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'legendary': return 'from-yellow-600 via-orange-500 to-yellow-600';
      case 'epic': return 'from-purple-600 via-pink-600 to-purple-600';
      case 'rare': return 'from-blue-600 via-cyan-600 to-blue-600';
      case 'uncommon': return 'from-green-600 via-emerald-600 to-green-600';
      default: return 'from-zinc-600 via-zinc-500 to-zinc-600';
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-yellow-400" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-zinc-300" />;
    if (rank === 3) return <Award className="w-6 h-6 text-amber-600" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Header */}
      <div className="relative h-[350px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/30 via-black/50 to-black z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579547621869-0ddb5f237392?q=80&w=2070')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-20 h-full flex flex-col justify-center max-w-7xl mx-auto px-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="self-start mb-8 text-white hover:text-[#D4AF37] hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Trophy className="w-12 h-12 text-[#D4AF37]" />
              <h1 className="text-6xl font-black text-white uppercase tracking-tight">
                Ranking <span className="text-[#D4AF37]">Total</span>
              </h1>
            </div>
            <p className="text-white/60 text-lg">
              Os maiores contribuidores da Wiki EpicMidgard
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-zinc-900 border-2 border-zinc-800 p-2 mb-8 w-full md:w-auto grid grid-cols-3">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 font-bold"
            >
              <Trophy className="w-4 h-4 mr-2" />
              Geral
            </TabsTrigger>
            <TabsTrigger 
              value="builds" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 font-bold"
            >
              <Target className="w-4 h-4 mr-2" />
              Builds
            </TabsTrigger>
            <TabsTrigger 
              value="guides" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 font-bold"
            >
              <FileText className="w-4 h-4 mr-2" />
              Guias
            </TabsTrigger>
          </TabsList>

          {/* Ranking Geral */}
          <TabsContent value="all">
            <div className="space-y-4">
              {allContributors.map((contributor, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                >
                  <Card className={`bg-gradient-to-r ${contributor.rank <= 3 ? getTierColor(contributor.tier) : 'from-zinc-900 to-black'} border-2 ${contributor.rank <= 3 ? 'border-[#D4AF37]' : 'border-zinc-800'} overflow-hidden group hover:scale-[1.02] transition-all cursor-pointer`}
                    onClick={() => onViewProfile(contributor.name)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          {/* Rank */}
                          <div className={`w-16 h-16 rounded-xl ${contributor.rank <= 3 ? 'bg-black/40' : 'bg-zinc-800'} flex items-center justify-center border-2 ${contributor.rank <= 3 ? 'border-[#D4AF37]' : 'border-zinc-700'} group-hover:scale-110 transition-transform`}>
                            {getRankIcon(contributor.rank) || (
                              <span className="text-white font-black text-xl">#{contributor.rank}</span>
                            )}
                          </div>

                          {/* Avatar */}
                          <Avatar className="w-16 h-16 border-4 border-white/30">
                            <AvatarFallback className={`bg-gradient-to-br ${getTierColor(contributor.tier)} text-white text-2xl`}>
                              {contributor.avatar}
                            </AvatarFallback>
                          </Avatar>

                          {/* Info */}
                          <div className="flex-1">
                            <h3 className="text-white font-bold text-xl mb-1">{contributor.name}</h3>
                            <Badge className={`${contributor.rank <= 3 ? 'bg-black/50 text-[#D4AF37] border-[#D4AF37]' : 'bg-zinc-800 text-white border-zinc-700'}`}>
                              {contributor.badge}
                            </Badge>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-8">
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                              <Star className={`w-5 h-5 ${contributor.rank <= 3 ? 'text-[#D4AF37]' : 'text-white'}`} />
                              <span className={`font-black text-2xl ${contributor.rank <= 3 ? 'text-white' : 'text-white'}`}>
                                {contributor.points}
                              </span>
                            </div>
                            <span className={`text-xs ${contributor.rank <= 3 ? 'text-white/80' : 'text-white/60'}`}>Pontos</span>
                          </div>

                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                              <FileText className={`w-5 h-5 ${contributor.rank <= 3 ? 'text-[#D4AF37]' : 'text-white/70'}`} />
                              <span className={`font-black text-2xl ${contributor.rank <= 3 ? 'text-white' : 'text-white'}`}>
                                {contributor.articles}
                              </span>
                            </div>
                            <span className={`text-xs ${contributor.rank <= 3 ? 'text-white/80' : 'text-white/60'}`}>Artigos</span>
                          </div>

                          {contributor.rank <= 3 && (
                            <TrendingUp className="w-8 h-8 text-[#D4AF37] animate-pulse" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Ranking Builds */}
          <TabsContent value="builds">
            <div className="space-y-4">
              {topBuilds.map((contributor, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="bg-gradient-to-r from-red-900/20 to-black border-2 border-red-500/30 overflow-hidden group hover:scale-[1.02] transition-all cursor-pointer"
                    onClick={() => onViewProfile(contributor.name)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-16 h-16 rounded-xl bg-red-500/20 flex items-center justify-center border-2 border-red-500/50">
                            {getRankIcon(contributor.rank) || (
                              <span className="text-white font-black text-xl">#{contributor.rank}</span>
                            )}
                          </div>

                          <Avatar className="w-16 h-16 border-4 border-red-500/30">
                            <AvatarFallback className="bg-gradient-to-br from-red-600 to-rose-600 text-white font-bold text-xl">
                              {contributor.avatar}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <h3 className="text-white font-bold text-xl mb-1">{contributor.name}</h3>
                            <Badge className="bg-red-500/20 text-red-300 border-red-500/40">
                              {contributor.specialty}
                            </Badge>
                          </div>
                        </div>

                        <div className="flex items-center gap-8">
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                              <Star className="w-5 h-5 text-red-400" />
                              <span className="font-black text-2xl text-white">{contributor.points}</span>
                            </div>
                            <span className="text-xs text-white/60">Pontos</span>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                              <Target className="w-5 h-5 text-red-400" />
                              <span className="font-black text-2xl text-white">{contributor.articles}</span>
                            </div>
                            <span className="text-xs text-white/60">Builds</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Ranking Guias */}
          <TabsContent value="guides">
            <div className="space-y-4">
              {topGuides.map((contributor, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="bg-gradient-to-r from-cyan-900/20 to-black border-2 border-cyan-500/30 overflow-hidden group hover:scale-[1.02] transition-all cursor-pointer"
                    onClick={() => onViewProfile(contributor.name)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-16 h-16 rounded-xl bg-cyan-500/20 flex items-center justify-center border-2 border-cyan-500/50">
                            {getRankIcon(contributor.rank) || (
                              <span className="text-white font-black text-xl">#{contributor.rank}</span>
                            )}
                          </div>

                          <Avatar className="w-16 h-16 border-4 border-cyan-500/30">
                            <AvatarFallback className="bg-gradient-to-br from-cyan-600 to-teal-600 text-white font-bold text-xl">
                              {contributor.avatar}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <h3 className="text-white font-bold text-xl mb-1">{contributor.name}</h3>
                            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/40">
                              {contributor.specialty}
                            </Badge>
                          </div>
                        </div>

                        <div className="flex items-center gap-8">
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                              <Star className="w-5 h-5 text-cyan-400" />
                              <span className="font-black text-2xl text-white">{contributor.points}</span>
                            </div>
                            <span className="text-xs text-white/60">Pontos</span>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                              <FileText className="w-5 h-5 text-cyan-400" />
                              <span className="font-black text-2xl text-white">{contributor.articles}</span>
                            </div>
                            <span className="text-xs text-white/60">Guias</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
