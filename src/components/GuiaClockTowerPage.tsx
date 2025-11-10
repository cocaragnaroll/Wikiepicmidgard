import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Clock, TrendingUp, DollarSign, Users, Eye, Heart, Bookmark, Share2, Calendar, Target, Zap, AlertCircle, CheckCircle2, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Separator } from './ui/separator';
import { Progress } from './ui/progress';

interface GuiaClockTowerPageProps {
  onBack: () => void;
  onViewProfile: (username: string) => void;
}

export default function GuiaClockTowerPage({ onBack, onViewProfile }: GuiaClockTowerPageProps) {
  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Header */}
      <div className="relative h-[450px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2070')] bg-cover bg-center opacity-40" />
        
        <div className="relative z-20 h-full flex flex-col justify-end max-w-7xl mx-auto px-4 pb-12">
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
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-teal-600 text-white">Guia de Farm</Badge>
              <Badge className="bg-purple-600 text-white">Lv 60-80</Badge>
              <Badge className="bg-yellow-600 text-white">Alto Lucro</Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
              Farm em <span className="text-[#D4AF37]">Clock Tower</span>
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80 mb-6">
              <button 
                onClick={() => onViewProfile('FarmGod')}
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors group"
              >
                <Avatar className="w-8 h-8 border-2 border-white/30 group-hover:border-[#D4AF37]">
                  <AvatarFallback className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white font-bold text-sm">
                    FG
                  </AvatarFallback>
                </Avatar>
                <span className="font-semibold">FarmGod</span>
              </button>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>01 Nov 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>15,234 visualizações</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black font-bold hover:opacity-90">
                <Heart className="w-4 h-4 mr-2" />
                Curtir (342)
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Bookmark className="w-4 h-4 mr-2" />
                Salvar
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Resumo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white uppercase text-2xl flex items-center gap-2">
                    <Target className="w-6 h-6 text-[#D4AF37]" />
                    Resumo do Spot
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/80 leading-relaxed">
                    Clock Tower é um dos melhores spots de farm para níveis 60-80 no servidor EpicMidgard. 
                    Com alta densidade de mobs e drops valiosos, você pode farmar tanto EXP quanto Zeny de forma eficiente. 
                    Este guia completo vai te ensinar tudo sobre como maximizar seus ganhos neste dungeon clássico.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    {[
                      { icon: TrendingUp, label: 'EXP/Hora', value: '800k - 1.2M', color: 'text-green-400' },
                      { icon: DollarSign, label: 'Zeny/Hora', value: '1.5M - 2.5M', color: 'text-yellow-400' },
                      { icon: Users, label: 'Dificuldade', value: 'Média', color: 'text-blue-400' },
                      { icon: Clock, label: 'Duração', value: '2-4 horas', color: 'text-purple-400' },
                    ].map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700">
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                        <div>
                          <p className="text-white/60 text-sm">{stat.label}</p>
                          <p className="text-white font-bold text-lg">{stat.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Localização */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white uppercase text-2xl flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-[#D4AF37]" />
                    Localização e Acesso
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700">
                    <h4 className="text-white font-bold mb-3">📍 Como Chegar:</h4>
                    <ol className="space-y-2 text-white/80">
                      <li className="flex items-start gap-3">
                        <span className="bg-[#D4AF37] text-black font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm">1</span>
                        <span>Vá para Aldebaran (use Kafra ou Butterfly Wings)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#D4AF37] text-black font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm">2</span>
                        <span>Entre na Clock Tower no centro da cidade (alde_dun)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#D4AF37] text-black font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm">3</span>
                        <span>Desça para o 2º andar (clock_dun02) para farm otimizado</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#D4AF37] text-black font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm">4</span>
                        <span>Recomendo ficar na área central com maior densidade</span>
                      </li>
                    </ol>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white font-semibold mb-1">💡 Dica Pro:</p>
                      <p className="text-white/70 text-sm">
                        Use Fly Wing para se reposicionar rapidamente em áreas com mais mobs. 
                        Traga pelo menos 100 Fly Wings para maximizar eficiência.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Monstros */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white uppercase text-2xl flex items-center gap-2">
                    <Zap className="w-6 h-6 text-[#D4AF37]" />
                    Monstros e Drops
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: 'Clock',
                        level: 81,
                        hp: '5,556',
                        element: 'Terra 2',
                        exp: '1,520',
                        drops: ['Gear', 'Spring', 'Elunium (Raro)', 'Clock Card'],
                        difficulty: 60
                      },
                      {
                        name: 'Alarm',
                        level: 88,
                        hp: '5,562',
                        element: 'Neutro 3',
                        exp: '1,733',
                        drops: ['Metal Fragment', 'Cyfar', 'Oridecon (Raro)', 'Alarm Card'],
                        difficulty: 70
                      },
                      {
                        name: 'Punk',
                        level: 82,
                        hp: '3,620',
                        element: 'Fogo 1',
                        exp: '1,444',
                        drops: ['Trunk', 'Cyfar', 'Coal', 'Punk Card'],
                        difficulty: 55
                      },
                      {
                        name: 'Penomena',
                        level: 85,
                        hp: '4,458',
                        element: 'Veneno 1',
                        exp: '1,611',
                        drops: ['Sticky Mucus', 'Poison Spore', 'Penomena Card'],
                        difficulty: 65
                      },
                    ].map((mob, idx) => (
                      <div key={idx} className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-white font-bold text-lg mb-1">{mob.name}</h4>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline" className="border-blue-500/40 text-blue-300 text-xs">
                                Lv {mob.level}
                              </Badge>
                              <Badge variant="outline" className="border-purple-500/40 text-purple-300 text-xs">
                                {mob.element}
                              </Badge>
                              <Badge variant="outline" className="border-green-500/40 text-green-300 text-xs">
                                {mob.exp} EXP
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white/60 text-xs mb-1">HP</p>
                            <p className="text-white font-bold">{mob.hp}</p>
                          </div>
                        </div>

                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-white/60 text-sm">Dificuldade</span>
                            <span className="text-white/80 text-sm">{mob.difficulty}%</span>
                          </div>
                          <Progress value={mob.difficulty} className="h-2" />
                        </div>

                        <div>
                          <p className="text-white/60 text-xs mb-2">Drops Principais:</p>
                          <div className="flex flex-wrap gap-1">
                            {mob.drops.map((drop, i) => (
                              <Badge key={i} className="bg-zinc-700 text-white/80 text-xs">
                                {drop}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Classes Recomendadas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white uppercase text-2xl flex items-center gap-2">
                    <Star className="w-6 h-6 text-[#D4AF37]" />
                    Classes Recomendadas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { 
                        class: 'High Wizard', 
                        rating: 95, 
                        reason: 'AoE massivo com Storm Gust e Lord of Vermillion',
                        color: 'text-purple-400',
                        bg: 'bg-purple-500/10',
                        border: 'border-purple-500/30'
                      },
                      { 
                        class: 'Hunter/Sniper', 
                        rating: 85, 
                        reason: 'Excelente para farm com Blitz Beat e Arrow Shower',
                        color: 'text-green-400',
                        bg: 'bg-green-500/10',
                        border: 'border-green-500/30'
                      },
                      { 
                        class: 'Monk/Champion', 
                        rating: 80, 
                        reason: 'Altamente eficiente com Asura Strike em grupos',
                        color: 'text-orange-400',
                        bg: 'bg-orange-500/10',
                        border: 'border-orange-500/30'
                      },
                      { 
                        class: 'Knight/Lord Knight', 
                        rating: 75, 
                        reason: 'Boa survivabilidade e dano consistente',
                        color: 'text-blue-400',
                        bg: 'bg-blue-500/10',
                        border: 'border-blue-500/30'
                      },
                    ].map((item, idx) => (
                      <div key={idx} className={`p-4 ${item.bg} border ${item.border} rounded-xl`}>
                        <div className="flex items-start justify-between mb-2">
                          <h4 className={`font-bold text-lg ${item.color}`}>{item.class}</h4>
                          <div className="flex items-center gap-1">
                            <Star className={`w-4 h-4 ${item.color}`} />
                            <span className={`font-bold ${item.color}`}>{item.rating}%</span>
                          </div>
                        </div>
                        <p className="text-white/70 text-sm">{item.reason}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Itens Necessários */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white uppercase text-2xl flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />
                    Itens Necessários
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white font-bold mb-3">⚡ Consumíveis Essenciais:</h4>
                      <ul className="space-y-2 text-white/80">
                        {[
                          'White Potion (200+)',
                          'Blue Potion (100+)',
                          'Fly Wing (100)',
                          'Butterfly Wing (10)',
                          'Concentration Potion',
                          'Awakening Potion',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-3">🛡️ Equipamentos Sugeridos:</h4>
                      <ul className="space-y-2 text-white/80">
                        {[
                          'Manteau com resistência',
                          'Sapatos com DEX/AGI',
                          'Elemento Ghost ou Terra',
                          'Acessórios com +DEX',
                          'Arma com elemental vantagem',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-[#D4AF37]">
              <CardHeader>
                <CardTitle className="text-[#D4AF37] uppercase">Info Rápida</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { label: 'Nível Recomendado', value: '60-80' },
                  { label: 'Tipo', value: 'PvM Farm' },
                  { label: 'Densidade', value: 'Alta' },
                  { label: 'Competição', value: 'Média' },
                  { label: 'Lucro', value: '⭐⭐⭐⭐⭐' },
                  { label: 'EXP', value: '⭐⭐⭐⭐' },
                ].map((stat, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-zinc-800 last:border-0">
                    <span className="text-white/60 text-sm">{stat.label}</span>
                    <span className="text-white font-bold">{stat.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Author Info */}
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white uppercase text-sm">Sobre o Autor</CardTitle>
              </CardHeader>
              <CardContent>
                <button 
                  onClick={() => onViewProfile('FarmGod')}
                  className="w-full group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="w-12 h-12 border-2 border-zinc-700 group-hover:border-[#D4AF37] transition-all">
                      <AvatarFallback className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white font-bold">
                        FG
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-white font-bold group-hover:text-[#D4AF37] transition-colors">FarmGod</p>
                      <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 text-xs">
                        Especialista em Farm
                      </Badge>
                    </div>
                  </div>
                </button>
                <Separator className="bg-zinc-800 mb-3" />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Pontos</span>
                    <span className="text-white font-bold">520</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Guias Publicados</span>
                    <span className="text-white font-bold">52</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Guides */}
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white uppercase text-sm">Guias Relacionados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: 'Farm em Glast Heim', author: 'WikiHero', views: '12.8k' },
                    { title: 'Leveling Orc Dungeon', author: 'ExpMaster', views: '11.5k' },
                    { title: 'Farm de Zeny Abyss', author: 'RichPlayer', views: '10.2k' },
                  ].map((guide, idx) => (
                    <div key={idx} className="p-3 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/50 cursor-pointer transition-all group">
                      <p className="text-white font-semibold text-sm mb-1 group-hover:text-[#D4AF37]">
                        {guide.title}
                      </p>
                      <div className="flex items-center justify-between text-xs text-white/60">
                        <span>{guide.author}</span>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{guide.views}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
