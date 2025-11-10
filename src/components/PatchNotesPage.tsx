import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Shield, Sword, Sparkles, Zap, Bug, TrendingUp, Gift, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

interface PatchNotesPageProps {
  onBack: () => void;
}

export default function PatchNotesPage({ onBack }: PatchNotesPageProps) {
  const changeTypes = {
    new: { icon: Sparkles, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30' },
    buff: { icon: TrendingUp, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
    nerf: { icon: XCircle, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
    fix: { icon: Bug, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
    event: { icon: Gift, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/30' },
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/20 via-black/50 to-black z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070')] bg-cover bg-center opacity-30" />
        
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
            <Badge className="bg-[#D4AF37] text-black mb-4 uppercase font-bold">
              Patch Notes
            </Badge>
            <h1 className="text-6xl font-black text-white mb-4 uppercase tracking-tight">
              Update <span className="text-[#D4AF37]">12.4</span>
            </h1>
            <div className="flex items-center gap-4 text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>07 de Novembro, 2025</span>
              </div>
              <span>•</span>
              <span>Versão 12.4.0</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-black text-white mb-6 uppercase">
            ⚡ <span className="text-[#D4AF37]">Destaques</span> da Atualização
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: Shield,
                title: 'Novo Sistema de Guilda',
                desc: 'Sistema renovado com benefícios exclusivos',
                color: 'from-blue-600 to-cyan-600'
              },
              {
                icon: Sword,
                title: 'Balance de Classes',
                desc: 'Ajustes importantes em 8 classes',
                color: 'from-red-600 to-orange-600'
              },
              {
                icon: Gift,
                title: 'Evento de Outono',
                desc: 'Recompensas exclusivas por tempo limitado',
                color: 'from-purple-600 to-pink-600'
              }
            ].map((highlight, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 overflow-hidden group hover:border-[#D4AF37]/50 transition-all">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{highlight.title}</h3>
                  <p className="text-white/60 text-sm">{highlight.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* New Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
            <CardHeader className="border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${changeTypes.new.bg} border-2 ${changeTypes.new.border}`}>
                  <changeTypes.new.icon className={`w-6 h-6 ${changeTypes.new.color}`} />
                </div>
                <div>
                  <CardTitle className="text-white uppercase text-2xl">Novos Recursos</CardTitle>
                  <CardDescription>Adições ao servidor</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {[
                  {
                    title: 'Sistema de Guildas Renovado',
                    items: [
                      'Novas habilidades de guilda disponíveis',
                      'Sistema de ranking entre guildas com recompensas semanais',
                      'Sala de guilda personalizada com decorações',
                      'Bônus de EXP para membros ativos (até +15%)',
                    ]
                  },
                  {
                    title: 'Novo Dungeon: Cavernas do Caos',
                    items: [
                      'Dungeon para níveis 90+ com dificuldade progressiva',
                      'Mais de 50 novos monstros exclusivos',
                      '15 novos itens únicos incluindo 3 cartas MVP',
                      'Boss final: Caos Incarnado (MVP)',
                    ]
                  },
                  {
                    title: 'Sistema de Conquistas',
                    items: [
                      'Mais de 200 conquistas para desbloquear',
                      'Títulos exclusivos e recompensas cosméticas',
                      'Pontos de conquista trocáveis por itens raros',
                      'Leaderboard de jogadores com mais conquistas',
                    ]
                  },
                ].map((section, idx) => (
                  <li key={idx} className="border-l-4 border-green-500/50 pl-4">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      {section.title}
                    </h4>
                    <ul className="space-y-1 ml-6">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-white/70 text-sm">• {item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Balance Changes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
            <CardHeader className="border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-500/10 border-2 border-blue-500/30">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-white uppercase text-2xl">Balanceamento</CardTitle>
                  <CardDescription>Ajustes em classes e habilidades</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Buffs */}
                <div>
                  <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    Buffs
                  </h4>
                  <div className="space-y-2">
                    {[
                      { class: 'Assassin Cross', change: 'Sonic Blow: Dano aumentado em 15%' },
                      { class: 'High Wizard', change: 'Meteor Storm: Tempo de cast reduzido em 0.5s' },
                      { class: 'Sniper', change: 'Sharp Shooting: Alcance aumentado de 14 para 16 células' },
                      { class: 'Paladin', change: 'Sacrifice: Cooldown reduzido de 2s para 1.5s' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 shrink-0">
                          {item.class}
                        </Badge>
                        <span className="text-white/80 text-sm">{item.change}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-zinc-800" />

                {/* Nerfs */}
                <div>
                  <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-orange-400" />
                    Nerfs
                  </h4>
                  <div className="space-y-2">
                    {[
                      { class: 'Lord Knight', change: 'Spiral Pierce: Dano reduzido em 8% no PvP' },
                      { class: 'High Priest', change: 'Assumptio: Duração reduzida de 180s para 120s' },
                      { class: 'Stalker', change: 'Preserve: Cooldown aumentado de 10s para 15s' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-orange-500/5 border border-orange-500/20">
                        <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 shrink-0">
                          {item.class}
                        </Badge>
                        <span className="text-white/80 text-sm">{item.change}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bug Fixes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
            <CardHeader className="border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${changeTypes.fix.bg} border-2 ${changeTypes.fix.border}`}>
                  <changeTypes.fix.icon className={`w-6 h-6 ${changeTypes.fix.color}`} />
                </div>
                <div>
                  <CardTitle className="text-white uppercase text-2xl">Correções de Bugs</CardTitle>
                  <CardDescription>Problemas corrigidos nesta atualização</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-2">
                {[
                  'Corrigido bug que causava desconexão ao usar Cart Termination',
                  'Resolvido problema de visual duplicado em montarias',
                  'Corrigida taxa de drop incorreta de cartas em mapas específicos',
                  'Resolvido crash do servidor durante WoE em castelos específicos',
                  'Corrigido bug onde Homunculus não recebia EXP corretamente',
                  'Resolvido problema de lag em áreas com muitos jogadores',
                  'Corrigida descrição de itens que apareciam em branco',
                  'Resolvido bug de duplicação de zeny em situações específicas',
                ].map((fix, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/70 text-sm p-2 rounded hover:bg-zinc-800/30 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <span>{fix}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border-2 border-pink-500/30">
            <CardHeader className="border-b border-pink-500/20">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${changeTypes.event.bg} border-2 ${changeTypes.event.border}`}>
                  <changeTypes.event.icon className={`w-6 h-6 ${changeTypes.event.color}`} />
                </div>
                <div>
                  <CardTitle className="text-white uppercase text-2xl">Evento de Outono</CardTitle>
                  <CardDescription className="text-pink-200/60">
                    07 Nov - 21 Nov | Recompensas Exclusivas
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-xl p-4">
                  <h4 className="text-white font-bold mb-2">🎃 Caça aos Tesouros de Outono</h4>
                  <p className="text-white/70 text-sm mb-3">
                    Colete Folhas Douradas caçando monstros e troque por recompensas exclusivas!
                  </p>
                  <div className="grid md:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2 text-white/60">
                      <div className="w-2 h-2 rounded-full bg-pink-400" />
                      Headgear exclusivo: Coroa de Folhas
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <div className="w-2 h-2 rounded-full bg-pink-400" />
                      Costume: Manto de Outono
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <div className="w-2 h-2 rounded-full bg-pink-400" />
                      EXP Boost +50% (7 dias)
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <div className="w-2 h-2 rounded-full bg-pink-400" />
                      Caixa de Itens Raros
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Drop Rate Aumentado</p>
                    <p className="text-white/60 text-sm">
                      Durante o evento, todas as taxas de drop estão aumentadas em +25%!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Separator className="bg-zinc-800 mb-8" />
          <p className="text-white/40 text-sm mb-4">
            Agradecemos a todos os jogadores que reportaram bugs e deram feedback!
          </p>
          <Button onClick={onBack} className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black font-bold hover:opacity-90">
            Voltar para Wiki
          </Button>
        </div>
      </div>
    </div>
  );
}
