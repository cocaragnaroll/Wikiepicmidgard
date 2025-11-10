import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Star, FileText, Trophy, Crown, Medal, Award } from 'lucide-react';

interface RankingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function RankingModal({ open, onOpenChange }: RankingModalProps) {
  // Mock data para o ranking completo (Excluindo Admin e Master)
  const allContributors = [
    { rank: 1, name: 'ProPlayer', avatar: 'PP', points: 380, articles: 38, badge: 'Lenda' },
    { rank: 2, name: 'WikiHero', avatar: 'WH', points: 320, articles: 32, badge: 'Mestre' },
    { rank: 3, name: 'Contributor4', avatar: 'C4', points: 280, articles: 28, badge: 'Expert' },
    { rank: 4, name: 'Helper123', avatar: 'H1', points: 250, articles: 25, badge: 'Avançado' },
    { rank: 5, name: 'GuideWriter', avatar: 'GW', points: 210, articles: 21, badge: 'Avançado' },
    { rank: 6, name: 'WikiMaster', avatar: 'WM', points: 190, articles: 19, badge: 'Intermediário' },
    { rank: 7, name: 'BuildMaker', avatar: 'BM', points: 170, articles: 17, badge: 'Intermediário' },
    { rank: 8, name: 'FarmGod', avatar: 'FG', points: 150, articles: 15, badge: 'Intermediário' },
    { rank: 9, name: 'QuestKing', avatar: 'QK', points: 140, articles: 14, badge: 'Iniciante' },
    { rank: 10, name: 'LoreExpert', avatar: 'LE', points: 120, articles: 12, badge: 'Iniciante' },
    { rank: 11, name: 'NewHelper', avatar: 'NH', points: 100, articles: 10, badge: 'Iniciante' },
    { rank: 12, name: 'GuideNinja', avatar: 'GN', points: 90, articles: 9, badge: 'Iniciante' },
    { rank: 13, name: 'WikiNoob', avatar: 'WN', points: 80, articles: 8, badge: 'Iniciante' },
    { rank: 14, name: 'ContentMaker', avatar: 'CM', points: 70, articles: 7, badge: 'Novato' },
    { rank: 15, name: 'ArticleWriter', avatar: 'AW', points: 60, articles: 6, badge: 'Novato' },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-slate-400" />;
    if (rank === 3) return <Award className="w-6 h-6 text-amber-700" />;
    return <Trophy className="w-5 h-5 text-[#D4AF37]" />;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'from-yellow-500/20 to-amber-600/20 border-yellow-500/50';
    if (rank === 2) return 'from-slate-400/20 to-slate-500/20 border-slate-400/50';
    if (rank === 3) return 'from-amber-700/20 to-orange-800/20 border-amber-700/50';
    return 'from-zinc-800/50 to-zinc-900/50 border-zinc-700';
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] bg-gradient-to-b from-zinc-900 to-black border-2 border-[#D4AF37]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-3xl">
            <Trophy className="w-8 h-8 text-[#D4AF37]" />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
              Ranking Completo de Contribuintes
            </span>
          </DialogTitle>
          <DialogDescription className="text-white/70 text-base">
            Todos os contribuidores que ajudam a construir nossa wiki • 10 pontos por artigo aprovado
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-3">
            {allContributors.map((contributor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`bg-gradient-to-r ${getRankColor(contributor.rank)} border-2 rounded-2xl p-4 hover:scale-[1.02] transition-all cursor-pointer`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex items-center gap-3">
                      {getRankIcon(contributor.rank)}
                      <span className="text-[#D4AF37] font-bold text-xl w-10">
                        #{contributor.rank}
                      </span>
                    </div>
                    
                    <Avatar className="w-12 h-12 border-2 border-[#D4AF37]/50">
                      <AvatarFallback className="bg-zinc-800 text-white font-bold">
                        {contributor.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-bold text-lg">{contributor.name}</h4>
                        <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/50">
                          {contributor.badge}
                        </Badge>
                      </div>
                      <p className="text-white/50 text-sm">
                        {contributor.articles} artigos publicados
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-white font-bold text-2xl">{contributor.points}</span>
                      </div>
                      <p className="text-white/50 text-xs">pontos</p>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-white font-bold text-2xl">{contributor.articles}</span>
                      </div>
                      <p className="text-white/50 text-xs">artigos</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>

        <div className="mt-4 p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl">
          <p className="text-white/90 text-center">
            <span className="font-bold text-[#D4AF37]">Quer aparecer no ranking?</span> Contribua com artigos, builds e guias de caça para ganhar pontos!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
