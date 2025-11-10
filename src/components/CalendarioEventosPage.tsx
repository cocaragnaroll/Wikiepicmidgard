import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Calendar, Clock, Users, Trophy, Gift, Zap, Sparkles, Sword, Shield, Target, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CalendarioEventosPageProps {
  onBack: () => void;
}

export default function CalendarioEventosPage({ onBack }: CalendarioEventosPageProps) {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const dayNames = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
  const currentDay = new Date().getDay();
  
  // Função para verificar se o evento já passou esta semana
  const isEventPast = (eventDays: number[]) => {
    return eventDays.every(day => day < currentDay);
  };
  
  const eventos = [
    {
      id: 1,
      title: 'War of Emperium',
      type: 'PvP',
      description: 'Batalha épica entre guilds pelo controle dos castelos de Midgard. Estratégia, coordenação e poder bruto decidem quem reina.',
      days: [6], // Sábado
      time: '20:00 - 22:00',
      rewards: ['100.000 Zeny', 'Itens WoE', 'Buff Guild 7 dias'],
      participants: '50-100 players',
      difficulty: 'Extremo',
      color: 'from-red-600 to-rose-600',
      borderColor: 'border-red-500/40',
      bgColor: 'bg-red-500/10',
      icon: Sword,
      image: 'https://images.unsplash.com/photo-1613477757272-96c69d8a64de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcGljJTIwbWVkaWV2YWwlMjBiYXR0bGV8ZW58MXx8fHwxNzYyNDk5NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      title: 'Caça ao Tesouro',
      type: 'PvE',
      description: 'Encontre tesouros escondidos por todo Midgard. Decifre pistas e seja o primeiro a encontrar os baús lendários!',
      days: [2, 4], // Terça e Quinta
      time: '19:00 - 20:00',
      rewards: ['Cards Raras', 'Equips +7', 'Consumíveis Premium'],
      participants: 'Ilimitado',
      difficulty: 'Médio',
      color: 'from-[#D4AF37] to-[#B8941F]',
      borderColor: 'border-[#D4AF37]/40',
      bgColor: 'bg-[#D4AF37]/10',
      icon: Gift,
      image: 'https://images.unsplash.com/photo-1632809199725-72a4245e846b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVhc3VyZSUyMGNoZXN0JTIwZ29sZHxlbnwxfHx8fDE3NjI0NTM1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      title: 'Boss Rush',
      type: 'PvE',
      description: 'Derrote MVPs consecutivos em tempo limitado. Cada boss derrotado aumenta as recompensas e a dificuldade!',
      days: [0], // Domingo
      time: '18:00 - 20:00',
      rewards: ['MVP Cards', 'Headgears Custom', 'Pontos Evento x2'],
      participants: '1-5 players',
      difficulty: 'Difícil',
      color: 'from-purple-600 to-indigo-600',
      borderColor: 'border-purple-500/40',
      bgColor: 'bg-purple-500/10',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1665934231832-3de7123253d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW5nZW9uJTIwbW9uc3RlcnxlbnwxfHx8fDE3NjI0OTk0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      title: 'Battlegrounds',
      type: 'PvP',
      description: 'Combate em equipe 10v10 com objetivos estratégicos. Capture pontos e derrote adversários!',
      days: [3, 5], // Quarta e Sexta
      time: '21:00 - 22:30',
      rewards: ['Badges BG', 'Equipamentos BG', 'Títulos'],
      participants: '20 players',
      difficulty: 'Alto',
      color: 'from-orange-600 to-amber-600',
      borderColor: 'border-orange-500/40',
      bgColor: 'bg-orange-500/10',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1613477757272-96c69d8a64de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcGljJTIwbWVkaWV2YWwlMjBiYXR0bGV8ZW58MXx8fHwxNzYyNDk5NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 5,
      title: 'Invasão de Monstros',
      type: 'PvE',
      description: 'Ondas de monstros invadem as principais cidades! Defenda Prontera, Geffen e Payon.',
      days: [1, 2, 3, 4, 5], // Segunda a Sexta
      time: '12:00 e 20:00',
      rewards: ['EXP Boost', 'Drop Rate +50%', 'Materiais Raros'],
      participants: 'Ilimitado',
      difficulty: 'Fácil',
      color: 'from-green-600 to-emerald-600',
      borderColor: 'border-green-500/40',
      bgColor: 'bg-green-500/10',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1665934231832-3de7123253d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW5nZW9uJTIwbW9uc3RlcnxlbnwxfHx8fDE3NjI0OTk0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 6,
      title: 'Evento Mensal Especial',
      type: 'Especial',
      description: 'Evento temático que muda a cada mês com prêmios únicos e colecionáveis exclusivos.',
      days: [6], // Último Sábado
      time: '15:00 - 23:00',
      rewards: ['Headgears Exclusivos', 'Montarias Raras', 'Títulos Limitados'],
      participants: 'Ilimitado',
      difficulty: 'Variável',
      color: 'from-pink-600 to-rose-600',
      borderColor: 'border-pink-500/40',
      bgColor: 'bg-pink-500/10',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1632809199725-72a4245e846b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVhc3VyZSUyMGNoZXN0JTIwZ29sZHxlbnwxfHx8fDE3NjI0NTM1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
  ];

  const getEventosForDay = (day: number) => {
    return eventos.filter(evento => evento.days.includes(day));
  };

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
            <Calendar className="w-12 h-12 text-[#D4AF37]" />
            <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-wide">
              Calendário de <span className="text-[#D4AF37]">Eventos</span>
            </h1>
          </div>
          <p className="text-white/60 text-xl mt-4">
            Programe-se para não perder nenhum evento épico do servidor!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Timeline Semanal Interativa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-black text-white uppercase tracking-wide mb-8">
            Agenda <span className="text-[#D4AF37]">Semanal</span>
          </h2>

          <div className="grid grid-cols-7 gap-2 md:gap-4">
            {dayNames.map((day, index) => {
              const eventosNoDia = getEventosForDay(index);
              const isSelected = selectedDay === index;
              
              return (
                <motion.button
                  key={index}
                  onClick={() => setSelectedDay(isSelected ? null : index)}
                  className={`relative p-4 rounded-xl border-2 transition-all ${
                    isSelected 
                      ? 'bg-gradient-to-b from-[#D4AF37] to-[#B8941F] border-[#D4AF37] scale-105' 
                      : 'bg-zinc-900/50 border-zinc-800 hover:border-[#D4AF37]/50'
                  }`}
                  whileHover={{ scale: isSelected ? 1.05 : 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-center">
                    <p className={`font-black uppercase text-xs md:text-sm mb-2 ${
                      isSelected ? 'text-black' : 'text-[#D4AF37]'
                    }`}>
                      {day}
                    </p>
                    
                    {/* Indicadores de eventos */}
                    <div className="flex flex-col gap-1">
                      {eventosNoDia.length > 0 ? (
                        eventosNoDia.slice(0, 3).map((evento) => {
                          const Icon = evento.icon;
                          return (
                            <div
                              key={evento.id}
                              className={`w-full h-1.5 rounded-full bg-gradient-to-r ${evento.color}`}
                              title={evento.title}
                            />
                          );
                        })
                      ) : (
                        <div className="w-full h-1.5 rounded-full bg-zinc-800" />
                      )}
                    </div>

                    {/* Contador de eventos */}
                    <p className={`text-xs mt-2 font-bold ${
                      isSelected ? 'text-black' : 'text-white/60'
                    }`}>
                      {eventosNoDia.length} {eventosNoDia.length === 1 ? 'evento' : 'eventos'}
                    </p>
                  </div>

                  {/* Badge "Hoje" */}
                  {index === new Date().getDay() && (
                    <div className="absolute -top-2 -right-2">
                      <Badge className="bg-green-500 text-white text-xs animate-pulse">
                        Hoje
                      </Badge>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Eventos do Dia Selecionado */}
        <AnimatePresence mode="wait">
          {selectedDay !== null && (
            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-black text-white uppercase mb-6">
                Eventos de <span className="text-[#D4AF37]">{dayNames[selectedDay]}</span>
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {getEventosForDay(selectedDay).map((evento, idx) => {
                  const Icon = evento.icon;
                  const isPast = isEventPast(evento.days);
                  
                  return (
                    <motion.div
                      key={evento.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <Card className={`bg-gradient-to-br from-zinc-900 to-black border-2 ${isPast ? 'border-zinc-700 grayscale opacity-50' : evento.borderColor} overflow-hidden hover:scale-[1.02] transition-all group`}>
                        {/* Imagem de fundo */}
                        <div className="relative h-40 overflow-hidden">
                          <ImageWithFallback
                            src={evento.image}
                            alt={evento.title}
                            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${isPast ? 'grayscale' : ''}`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                          
                          <div className="absolute top-4 right-4">
                            {isPast ? (
                              <Badge className="bg-black/70 text-white/60 backdrop-blur-sm border border-zinc-700">
                                Concluído
                              </Badge>
                            ) : (
                              <Badge className={`${evento.bgColor} ${evento.borderColor} backdrop-blur-sm`}>
                                {evento.type}
                              </Badge>
                            )}
                          </div>

                          <div className={`absolute bottom-4 left-4 w-16 h-16 rounded-xl bg-gradient-to-br ${isPast ? 'from-zinc-700 to-zinc-800' : evento.color} flex items-center justify-center`}>
                            <Icon className={`w-8 h-8 ${isPast ? 'text-zinc-400' : 'text-white'}`} />
                          </div>
                        </div>

                        <CardContent className="p-6">
                          <h4 className="text-xl font-black text-white uppercase mb-2">
                            {evento.title}
                          </h4>
                          
                          <p className="text-white/70 text-sm mb-4">
                            {evento.description}
                          </p>

                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="flex items-center gap-2 text-white/80 text-sm">
                              <Clock className="w-4 h-4 text-[#D4AF37]" />
                              <span>{evento.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/80 text-sm">
                              <Users className="w-4 h-4 text-[#D4AF37]" />
                              <span>{evento.participants}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mb-4">
                            <Award className="w-4 h-4 text-[#D4AF37]" />
                            <Badge variant="outline" className={getDifficultyColor(evento.difficulty)}>
                              {evento.difficulty}
                            </Badge>
                          </div>

                          <div className={`p-3 rounded-lg ${evento.bgColor} border ${evento.borderColor}`}>
                            <div className="flex items-center gap-2 mb-2">
                              <Trophy className="w-4 h-4 text-[#D4AF37]" />
                              <span className="text-white font-bold text-xs uppercase">Recompensas</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {evento.rewards.map((reward, rIdx) => (
                                <Badge key={rIdx} variant="outline" className="bg-black/30 text-white/80 text-xs">
                                  {reward}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Todos os Eventos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-black text-white uppercase tracking-wide mb-6">
            Todos os <span className="text-[#D4AF37]">Eventos</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {eventos.map((evento, index) => {
              const Icon = evento.icon;
              const isPast = isEventPast(evento.days);
              
              return (
                <motion.div
                  key={evento.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className={`bg-gradient-to-br from-zinc-900 to-black border-2 ${isPast ? 'border-zinc-700 grayscale opacity-50' : evento.borderColor} hover:border-[#D4AF37]/70 transition-all overflow-hidden group`}>
                    <div className="flex">
                      {/* Imagem lateral */}
                      <div className="relative w-32 flex-shrink-0 overflow-hidden">
                        <ImageWithFallback
                          src={evento.image}
                          alt={evento.title}
                          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${isPast ? 'grayscale' : ''}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
                        {isPast && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                            <Badge className="bg-black/80 text-white/60 text-xs">
                              Concluído
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Conteúdo */}
                      <CardContent className="flex-1 p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${isPast ? 'from-zinc-700 to-zinc-800' : evento.color}`}>
                              <Icon className={`w-4 h-4 ${isPast ? 'text-zinc-400' : 'text-white'}`} />
                            </div>
                            <div>
                              <h4 className={`font-black uppercase text-sm ${isPast ? 'text-zinc-400' : 'text-white'}`}>
                                {evento.title}
                              </h4>
                              <p className={`text-xs ${isPast ? 'text-zinc-600' : 'text-white/60'}`}>{evento.type}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className={getDifficultyColor(evento.difficulty)} title="Dificuldade">
                            {evento.difficulty}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-2">
                          {evento.days.map(day => (
                            <Badge key={day} className={`${isPast ? 'bg-zinc-800 text-zinc-500' : 'bg-zinc-800 text-[#D4AF37]'} text-xs`}>
                              {dayNames[day]}
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
        </motion.div>

        {/* Legenda */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-br from-zinc-900/80 to-black border-2 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-white font-black uppercase mb-4">Legenda de Dificuldade</h3>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="text-green-400 border-green-500/40">Fácil</Badge>
                <Badge variant="outline" className="text-yellow-400 border-yellow-500/40">Médio</Badge>
                <Badge variant="outline" className="text-orange-400 border-orange-500/40">Alto</Badge>
                <Badge variant="outline" className="text-red-400 border-red-500/40">Difícil</Badge>
                <Badge variant="outline" className="text-purple-400 border-purple-500/40">Extremo</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
