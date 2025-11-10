import { motion } from 'motion/react';
import { ArrowLeft, Rocket, Clock, Calendar, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface RoadmapPageProps {
  onBack: () => void;
}

export default function RoadmapPage({ onBack }: RoadmapPageProps) {
  const roadmapEvents = [
    {
      title: 'GRAND OPENING',
      description: 'Embarque em uma nova jornada épica com aventuras e recompensas exclusivas! Servidor lançado com sucesso!',
      date: '7 DE DEZEMBRO',
      completed: true,
      image: 'https://images.unsplash.com/photo-1735885684658-ffeea376f061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcGljJTIwZmFudGFzeSUyMG9wZW5pbmclMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjI1MDA3ODF8MA&ixlib=rb-4.1.0&q=80&w=600',
      progress: 100,
      details: 'Mais de 1.000 jogadores ativos desde o lançamento!'
    },
    {
      title: 'ESSENCE GATHERING',
      description: 'Coleta essências mágicas e reclame recompensas exclusivas! Evento especial de coleta com bônus únicos.',
      date: '8 DE DEZEMBRO',
      completed: true,
      image: 'https://images.unsplash.com/photo-1726925998496-55604c88910b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdpY2FsJTIwZXNzZW5jZSUyMGNyeXN0YWxzfGVufDF8fHx8MTc2MjUwMDc4MXww&ixlib=rb-4.1.0&q=80&w=600',
      progress: 100,
      details: 'Sistema de essências implementado com sucesso!'
    },
    {
      title: '1ST WEEKSARY EVENT',
      description: 'Celebre a 1ª semana com eventos especiais e recompensas! Eventos de aniversário, drops aumentados e itens exclusivos.',
      date: '14 DE DEZEMBRO',
      completed: false,
      image: 'https://images.unsplash.com/photo-1720850539227-a84a044be66a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5JTIwZmlyZXdvcmtzfGVufDF8fHx8MTc2MjUwMDc4MXww&ixlib=rb-4.1.0&q=80&w=600',
      progress: 65,
      details: 'Preparativos em andamento para grande celebração!'
    },
    {
      title: 'GUILD BOSS RAID',
      description: 'Derrote chefes épicos com sua guilda para grandes recompensas! Boss raids em grupo com mecânicas únicas.',
      date: '20 DE DEZEMBRO',
      completed: false,
      image: 'https://images.unsplash.com/photo-1574867032425-fa5247fbf771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWlsZCUyMGJvc3MlMjByYWlkJTIwYmF0dGxlfGVufDF8fHx8MTc2MjUwMDc4Mnww&ixlib=rb-4.1.0&q=80&w=600',
      progress: 40,
      details: 'Sistema de raids sendo desenvolvido e testado!'
    },
    {
      title: '2ND WEEKSARY EVENT',
      description: 'Mais celebrações com recompensas especiais e eventos únicos! Continuação das celebrações com novos desafios.',
      date: '21 DE DEZEMBRO',
      completed: false,
      image: 'https://images.unsplash.com/photo-1720850539227-a84a044be66a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5JTIwZmlyZXdvcmtzfGVufDF8fHx8MTc2MjUwMDc4MXww&ixlib=rb-4.1.0&q=80&w=600',
      progress: 20,
      details: 'Planejamento inicial das festividades!'
    },
    {
      title: 'CHRISTMAS EVENT',
      description: 'Celebre o Natal com eventos temáticos, itens festivos e recompensas especiais para toda a comunidade!',
      date: '25 DE DEZEMBRO',
      completed: false,
      image: 'https://images.unsplash.com/photo-1720850539227-a84a044be66a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5JTIwZmlyZXdvcmtzfGVufDF8fHx8MTc2MjUwMDc4MXww&ixlib=rb-4.1.0&q=80&w=600',
      progress: 15,
      details: 'Evento natalino em desenvolvimento!'
    },
    {
      title: 'PLAYER OF THE MONTH',
      description: 'Batalha épica entre campeões pelo título de Jogador do Mês! Competição global com prêmios exclusivos.',
      date: '29 DE DEZEMBRO',
      completed: false,
      image: 'https://images.unsplash.com/photo-1574867032425-fa5247fbf771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWlsZCUyMGJvc3MlMjByYWlkJTIwYmF0dGxlfGVufDF8fHx8MTc2MjUwMDc4Mnww&ixlib=rb-4.1.0&q=80&w=600',
      progress: 10,
      details: 'Sistema de ranking em desenvolvimento!'
    },
    {
      title: 'NEW YEAR CELEBRATION',
      description: 'Receba o ano novo com fogos de artifício, eventos especiais e bônus exclusivos para começar 2025!',
      date: '1 DE JANEIRO',
      completed: false,
      image: 'https://images.unsplash.com/photo-1720850539227-a84a044be66a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5JTIwZmlyZXdvcmtzfGVufDF8fHx8MTc2MjUwMDc4MXww&ixlib=rb-4.1.0&q=80&w=600',
      progress: 5,
      details: 'Planejamento de celebração de ano novo!'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black">
      {/* Header */}
      <div className="bg-gradient-to-b from-zinc-900/50 to-transparent border-b border-zinc-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Button 
            variant="ghost" 
            className="text-white/60 hover:text-[#D4AF37] mb-6 -ml-4"
            onClick={onBack}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          
          <div className="flex items-center gap-4 mb-4">
            <Rocket className="w-12 h-12 text-[#D4AF37]" />
            <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-wide">
              Roadmap do <span className="text-[#D4AF37]">Servidor</span>
            </h1>
          </div>
          <p className="text-white/60 text-xl mt-4">
            Acompanhe o desenvolvimento e as próximas atualizações do EpicMidgard
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Contador do Próximo Evento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 p-6 bg-zinc-900/50 border border-[#D4AF37]/30 rounded-xl backdrop-blur-sm"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-[#D4AF37] animate-pulse" />
              <div>
                <p className="text-white/60 text-sm uppercase tracking-wide">Próximo Evento</p>
                <h4 className="text-white font-black text-2xl">1ST WEEKSARY EVENT</h4>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-zinc-800 px-3 py-2 rounded-lg text-center min-w-[60px]">
                <span className="text-3xl font-black text-[#D4AF37] block">07</span>
                <p className="text-xs text-white/60 uppercase mt-1">Dias</p>
              </div>
              <div className="bg-zinc-800 px-3 py-2 rounded-lg text-center min-w-[60px]">
                <span className="text-3xl font-black text-[#D4AF37] block">14</span>
                <p className="text-xs text-white/60 uppercase mt-1">Horas</p>
              </div>
              <div className="bg-zinc-800 px-3 py-2 rounded-lg text-center min-w-[60px]">
                <span className="text-3xl font-black text-[#D4AF37] block">32</span>
                <p className="text-xs text-white/60 uppercase mt-1">Min</p>
              </div>
              <div className="bg-zinc-800 px-3 py-2 rounded-lg text-center min-w-[60px]">
                <span className="text-3xl font-black text-[#D4AF37] block">45</span>
                <p className="text-xs text-white/60 uppercase mt-1">Seg</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Roadmap Estilo Estrada Vertical */}
        <div className="relative">
          {/* Linha central da estrada - Base */}
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-zinc-800 transform -translate-x-1/2 rounded-full" />
          
          {/* Barra de Progresso Animada na Linha Central */}
          <motion.div 
            className="absolute left-1/2 top-0 w-2 bg-gradient-to-b from-[#D4AF37] via-yellow-400 to-[#D4AF37] transform -translate-x-1/2 shadow-lg shadow-[#D4AF37]/50 rounded-full"
            initial={{ height: 0 }}
            whileInView={{ height: '50%' }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
          >
            {/* Efeito de Brilho Vertical */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-transparent rounded-full"
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
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-yellow-400 border-2 border-black flex items-center justify-center shadow-lg shadow-[#D4AF37]/50 animate-pulse">
                <Rocket className="w-4 h-4 text-black" />
              </div>
            </div>
          </motion.div>
          
          {/* Faixas da estrada */}
          <div className="absolute left-1/2 top-0 bottom-0 w-32 bg-zinc-900/20 transform -translate-x-1/2 -z-10 border-l-2 border-r-2 border-zinc-800/30" />
          
          {/* Eventos */}
          <div className="space-y-12">
            {roadmapEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative flex items-start gap-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Marco da Estrada - Simples */}
                <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
                  {event.completed ? (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] border-4 border-black flex items-center justify-center shadow-xl shadow-[#D4AF37]/30">
                      <Award className="w-8 h-8 text-black" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zinc-900 to-black border-4 border-[#D4AF37] flex items-center justify-center shadow-xl shadow-[#D4AF37]/30">
                      <Rocket className="w-7 h-7 text-[#D4AF37]" />
                    </div>
                  )}
                </div>

                {/* Card do Evento - Compacto */}
                <Card className={`flex-1 max-w-[46%] bg-gradient-to-br from-zinc-900 to-black border-2 ${event.completed ? 'border-zinc-700 grayscale opacity-70' : 'border-[#D4AF37]/40'} overflow-hidden hover:border-[#D4AF37] hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all group`}>
                  {/* Imagem - Menor */}
                  <div className="relative h-40 overflow-hidden">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${event.completed ? 'grayscale' : ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    {/* Badge Concluído - Menor */}
                    {event.completed && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                        <Badge className="bg-zinc-900 text-white border-2 border-zinc-600 text-lg px-4 py-2">
                          <Award className="w-4 h-4 mr-2" />
                          ✓ CONCLUÍDO
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-5">
                    <h4 className={`font-black ${event.completed ? 'text-zinc-500' : 'text-white'} uppercase text-lg mb-3 tracking-tight`}>
                      {event.title}
                    </h4>
                    <p className={`text-sm ${event.completed ? 'text-zinc-600' : 'text-white/70'} mb-4 leading-relaxed line-clamp-2`}>
                      {event.description}
                    </p>
                    
                    {/* Data */}
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className={`w-4 h-4 ${event.completed ? 'text-zinc-600' : 'text-[#D4AF37]'}`} />
                      <span className={`text-sm font-bold ${event.completed ? 'text-zinc-600' : 'text-[#D4AF37]'}`}>
                        {event.date}
                      </span>
                    </div>

                    {/* Detalhes */}
                    <div className={`p-3 rounded-lg ${event.completed ? 'bg-zinc-800/50' : 'bg-[#D4AF37]/10'} border ${event.completed ? 'border-zinc-700' : 'border-[#D4AF37]/30'}`}>
                      <p className={`text-xs ${event.completed ? 'text-zinc-500' : 'text-white/80'}`}>
                        {event.details}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Espaçador para o outro lado */}
                <div className="flex-1 max-w-[46%]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border-2 border-[#D4AF37]/30">
            <CardContent className="p-8">
              <Rocket className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-2xl font-black text-white uppercase mb-2">
                Tem sugestões?
              </h3>
              <p className="text-white/60 mb-6">
                Compartilhe suas ideias no Discord e ajude a moldar o futuro do servidor!
              </p>
              <Button className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black font-bold uppercase">
                Entrar no Discord
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
