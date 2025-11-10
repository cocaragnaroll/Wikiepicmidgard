import { motion } from 'motion/react';
import { ArrowLeft, Sword, Shield, Heart, Zap, Target, Eye, Bookmark, Share2, Calendar, TrendingUp, AlertCircle, CheckCircle2, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Separator } from './ui/separator';
import { Progress } from './ui/progress';

interface BuildDpsCriticoPageProps {
  onBack: () => void;
  onViewProfile: (username: string) => void;
}

export default function BuildDpsCriticoPage({ onBack, onViewProfile }: BuildDpsCriticoPageProps) {
  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Header */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2070')] bg-cover bg-center opacity-30" />
        
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
            className="flex items-end gap-8"
          >
            {/* Imagem da Classe em Destaque */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37] to-transparent blur-2xl opacity-50" />
                <img
                  src="https://images.unsplash.com/photo-1563310978-dd47a28323ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmlnaHQlMjB3YXJyaW9yJTIwYXJtb3J8ZW58MXx8fHwxNzYyNDQxODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Lord Knight"
                  className="relative w-64 h-80 object-cover rounded-2xl border-4 border-[#D4AF37] shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 border-2 border-[#D4AF37]/50">
                  <p className="text-[#D4AF37] font-black uppercase text-center tracking-wider">
                    Lord Knight
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Informações da Build */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-red-600 text-white text-sm px-3 py-1">Build PvP</Badge>
                <Badge className="bg-blue-600 text-white text-sm px-3 py-1">Lord Knight</Badge>
                <Badge className="bg-purple-600 text-white text-sm px-3 py-1">DPS Alto</Badge>
                <Badge className="bg-yellow-600 text-white text-sm px-3 py-1">Meta Atual</Badge>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white mb-2 uppercase tracking-tight drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#D4AF37]">DPS Crítico</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-6 font-bold">
                Maximize seu dano com golpes críticos devastadores
              </p>

            <div className="flex flex-wrap items-center gap-6 text-white/80 mb-6">
              <button 
                onClick={() => onViewProfile('ProPlayer')}
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors group"
              >
                <Avatar className="w-8 h-8 border-2 border-white/30 group-hover:border-[#D4AF37]">
                  <AvatarFallback className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-black font-bold text-sm">
                    PP
                  </AvatarFallback>
                </Avatar>
                <span className="font-semibold">ProPlayer</span>
              </button>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>01 Nov 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>12,547 visualizações</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black font-bold hover:opacity-90">
                <Heart className="w-4 h-4 mr-2" />
                Curtir (487)
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
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white uppercase text-2xl flex items-center gap-2">
                    <Target className="w-6 h-6 text-[#D4AF37]" />
                    Visão Geral
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/80 leading-relaxed">
                    Esta build de Lord Knight focada em crítico é uma das mais devastadoras no PvP atual. 
                    Com alta taxa de crítico (80%+), dano explosivo e boa mobilidade, você pode eliminar alvos rapidamente 
                    antes que possam reagir. Ideal para jogadores que buscam alto DPS e gameplay agressivo.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 pt-4">
                    {[
                      { icon: Sword, label: 'Dano', value: 'Muito Alto', progress: 95, color: 'text-red-400' },
                      { icon: Shield, label: 'Defesa', value: 'Média', progress: 60, color: 'text-blue-400' },
                      { icon: Zap, label: 'Mobilidade', value: 'Alta', progress: 80, color: 'text-yellow-400' },
                    ].map((stat, idx) => (
                      <div key={idx} className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700">
                        <div className="flex items-center gap-2 mb-2">
                          <stat.icon className={`w-5 h-5 ${stat.color}`} />
                          <p className="text-white/60 text-sm">{stat.label}</p>
                        </div>
                        <p className="text-white font-bold mb-2">{stat.value}</p>
                        <Progress value={stat.progress} className="h-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl mt-4">
                    <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white font-semibold mb-1">⚠️ Pontos Fortes:</p>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Dano crítico extremamente alto (15k-25k por hit)</li>
                        <li>• Ignorar defesa com ataques críticos</li>
                        <li>• Excelente para eliminar alvos squishy rapidamente</li>
                        <li>• Boa mobilidade com Spear Quicken</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white uppercase text-2xl flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
                    Distribuição de Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { stat: 'STR', value: 110, total: 120, color: 'bg-red-500', desc: 'Máximo de dano físico' },
                      { stat: 'AGI', value: 95, total: 120, color: 'bg-green-500', desc: 'ASPD e esquiva' },
                      { stat: 'VIT', value: 70, total: 120, color: 'bg-blue-500', desc: 'Survivabilidade mínima' },
                      { stat: 'INT', value: 1, total: 120, color: 'bg-purple-500', desc: 'Base' },
                      { stat: 'DEX', value: 40, total: 120, color: 'bg-yellow-500', desc: 'Acerto e ASPD' },
                      { stat: 'LUK', value: 80, total: 120, color: 'bg-pink-500', desc: 'Taxa de crítico' },
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-white font-bold text-lg w-12">{item.stat}</span>
                            <span className="text-white/60 text-sm">{item.desc}</span>
                          </div>
                          <span className="text-[#D4AF37] font-bold">{item.value}</span>
                        </div>
                        <div className="relative h-3 bg-zinc-800 rounded-full overflow-hidden">
                          <div 
                            className={`absolute inset-y-0 left-0 ${item.color} rounded-full transition-all`}
                            style={{ width: `${(item.value / item.total) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Equipamentos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white uppercase text-2xl flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[#D4AF37]" />
                    Equipamentos Recomendados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        slot: 'Cabeça Superior',
                        item: 'Helm of Abyss [1]',
                        card: 'Carta Valkyrie Randgris',
                        color: 'border-red-500/50',
                        reason: '+10 STR, +10 LUK, 5% de dano crítico adicional'
                      },
                      {
                        slot: 'Cabeça Média',
                        item: 'Evil Wing Ears',
                        card: '-',
                        color: 'border-purple-500/50',
                        reason: '+3 STR, visual intimidador'
                      },
                      {
                        slot: 'Cabeça Inferior',
                        item: 'CD in Mouth',
                        card: '-',
                        color: 'border-blue-500/50',
                        reason: '+5 ASPD, -10% after-cast delay'
                      },
                      {
                        slot: 'Armadura',
                        item: 'Saphire Armor [1]',
                        card: 'Carta Tao Gunka',
                        color: 'border-cyan-500/50',
                        reason: '+100% HP máximo para survivabilidade'
                      },
                      {
                        slot: 'Arma',
                        item: 'Crimson Lance [2]',
                        card: '2x Carta Hydra',
                        color: 'border-red-500/50',
                        reason: '40% de dano adicional contra Demi-Human'
                      },
                      {
                        slot: 'Escudo',
                        item: 'Valkyrja\'s Shield [1]',
                        card: 'Carta Thara Frog',
                        color: 'border-green-500/50',
                        reason: '30% redução de dano de Demi-Human'
                      },
                      {
                        slot: 'Manto',
                        item: 'Asprika [1]',
                        card: 'Carta Deviling',
                        color: 'border-orange-500/50',
                        reason: 'Reduz 50% dano Neutro, +50% outros elementos'
                      },
                      {
                        slot: 'Calçado',
                        item: 'Variant Shoes [1]',
                        card: 'Carta Firelock Soldier',
                        color: 'border-yellow-500/50',
                        reason: '+5 STR, HP e SP adicionais'
                      },
                      {
                        slot: 'Acessório 1',
                        item: 'Glove [1]',
                        card: 'Carta Zerom',
                        color: 'border-pink-500/50',
                        reason: '+3 DEX, +10 CRIT'
                      },
                      {
                        slot: 'Acessório 2',
                        item: 'Glove [1]',
                        card: 'Carta Kobold',
                        color: 'border-pink-500/50',
                        reason: '+4 STR, +5 CRIT'
                      },
                    ].map((equip, idx) => (
                      <div key={idx} className={`p-4 bg-zinc-800/30 rounded-xl border-2 ${equip.color}`}>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline" className="border-[#D4AF37]/40 text-[#D4AF37] text-xs">
                                {equip.slot}
                              </Badge>
                            </div>
                            <h4 className="text-white font-bold text-lg">{equip.item}</h4>
                            {equip.card !== '-' && (
                              <p className="text-purple-300 text-sm mt-1">🎴 {equip.card}</p>
                            )}
                          </div>
                        </div>
                        <p className="text-white/60 text-sm">{equip.reason}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white uppercase text-2xl flex items-center gap-2">
                    <Zap className="w-6 h-6 text-[#D4AF37]" />
                    Skills Principais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        name: 'Bowling Bash',
                        level: 10,
                        priority: 'Alta',
                        usage: 'Skill principal de dano AoE',
                        color: 'text-red-400'
                      },
                      {
                        name: 'Pierce',
                        level: 10,
                        priority: 'Alta',
                        usage: 'Alto dano single-target, ótimo crítico',
                        color: 'text-orange-400'
                      },
                      {
                        name: 'Spear Quicken',
                        level: 10,
                        priority: 'Essencial',
                        usage: 'Aumenta ASPD drasticamente',
                        color: 'text-yellow-400'
                      },
                      {
                        name: 'Parry',
                        level: 10,
                        priority: 'Alta',
                        usage: 'Defesa contra ataques físicos',
                        color: 'text-blue-400'
                      },
                      {
                        name: 'Aura Blade',
                        level: 5,
                        priority: 'Média',
                        usage: 'Dano adicional em todas as skills',
                        color: 'text-purple-400'
                      },
                      {
                        name: 'Concentration',
                        level: 5,
                        priority: 'Média',
                        usage: 'Buff de ATK e HIT',
                        color: 'text-green-400'
                      },
                    ].map((skill, idx) => (
                      <div key={idx} className="p-4 bg-zinc-800/30 rounded-xl border border-zinc-700 hover:border-[#D4AF37]/50 transition-all">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className={`font-bold text-lg ${skill.color}`}>{skill.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge className="bg-zinc-700 text-white text-xs">Nv. {skill.level}</Badge>
                              <Badge className={`${
                                skill.priority === 'Essencial' ? 'bg-red-500/20 text-red-300 border-red-500/30' :
                                skill.priority === 'Alta' ? 'bg-orange-500/20 text-orange-300 border-orange-500/30' :
                                'bg-blue-500/20 text-blue-300 border-blue-500/30'
                              } text-xs`}>
                                {skill.priority}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <p className="text-white/60 text-sm">{skill.usage}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white uppercase text-2xl flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />
                    Estratégia de Combate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                      <h4 className="text-green-400 font-bold mb-2">✅ FAÇA:</h4>
                      <ul className="space-y-2 text-white/80 text-sm">
                        <li>• Sempre use Spear Quicken antes de engajar</li>
                        <li>• Foque em alvos squishy (Mages, Priests, Snipers)</li>
                        <li>• Use Pierce para burst damage em 1v1</li>
                        <li>• Mantenha Parry ativo contra outros melees</li>
                        <li>• Carregue White Potions e Yggdrasil Berry</li>
                      </ul>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                      <h4 className="text-red-400 font-bold mb-2">❌ NÃO FAÇA:</h4>
                      <ul className="space-y-2 text-white/80 text-sm">
                        <li>• Não encare múltiplos inimigos sozinho sem suporte</li>
                        <li>• Evite lutar contra High Wizards com Storm Gust</li>
                        <li>• Não desperdice SP com Bowling Bash em alvos únicos</li>
                        <li>• Nunca subestime a importância de Pots e Berries</li>
                        <li>• Não fique parado - aproveite sua mobilidade</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Build Rating */}
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-[#D4AF37]">
              <CardHeader>
                <CardTitle className="text-[#D4AF37] uppercase">Avaliação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-white font-bold text-2xl">4.8/5.0</p>
                  <p className="text-white/60 text-sm">Baseado em 234 votos</p>
                </div>
                <Separator className="bg-zinc-800" />
                <div className="space-y-3">
                  {[
                    { label: 'PvP', value: 95 },
                    { label: 'PvM', value: 75 },
                    { label: 'WoE', value: 85 },
                    { label: 'Farm', value: 60 },
                  ].map((rating, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">{rating.label}</span>
                        <span className="text-white font-bold">{rating.value}%</span>
                      </div>
                      <Progress value={rating.value} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Author */}
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white uppercase text-sm">Sobre o Autor</CardTitle>
              </CardHeader>
              <CardContent>
                <button 
                  onClick={() => onViewProfile('ProPlayer')}
                  className="w-full group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="w-12 h-12 border-2 border-zinc-700 group-hover:border-[#D4AF37] transition-all">
                      <AvatarFallback className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-black font-bold">
                        PP
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-white font-bold group-hover:text-[#D4AF37] transition-colors">ProPlayer</p>
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30 text-xs">
                        Especialista PvP
                      </Badge>
                    </div>
                  </div>
                </button>
                <Separator className="bg-zinc-800 mb-3" />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Pontos</span>
                    <span className="text-white font-bold">450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Builds Publicadas</span>
                    <span className="text-white font-bold">45</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Builds */}
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white uppercase text-sm">Builds Relacionadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: 'AoE Farm Wizard', author: 'MageMaster', views: '10.2k' },
                    { title: 'Trap Hunter Build', author: 'ArcherPro', views: '9.8k' },
                    { title: 'Tank Paladin', author: 'TankKing', views: '8.5k' },
                  ].map((build, idx) => (
                    <div key={idx} className="p-3 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/50 cursor-pointer transition-all group">
                      <p className="text-white font-semibold text-sm mb-1 group-hover:text-[#D4AF37]">
                        {build.title}
                      </p>
                      <div className="flex items-center justify-between text-xs text-white/60">
                        <span>{build.author}</span>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{build.views}</span>
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
