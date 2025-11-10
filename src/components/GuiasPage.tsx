import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, Map, Eye, User, TrendingUp, Clock } from 'lucide-react';

interface GuiasPageProps {
  onBack: () => void;
  onCreateGuia?: () => void;
}

export default function GuiasPage({ onBack, onCreateGuia }: GuiasPageProps) {
  // Base URL para as imagens do GitHub
  const IMG_BASE = 'https://raw.githubusercontent.com/cocaragnaroll/img/main';
  const [attempts, setAttempts] = useState<Record<string, number>>({});

  const ItemIcon = ({ id, size = "w-6 h-6" }: { id: string; size?: string }) => {
    const [imgSrc, setImgSrc] = useState(`${IMG_BASE}/${id}.png`);
    const currentAttempts = attempts[id] || 0;

    const handleError = () => {
      if (currentAttempts === 0) {
        setImgSrc(`${IMG_BASE}/${id}.gif`);
        setAttempts({ ...attempts, [id]: 1 });
      } else if (currentAttempts === 1) {
        setImgSrc(`${IMG_BASE}/items/${id}.png`);
        setAttempts({ ...attempts, [id]: 2 });
      }
    };

    return (
      <img 
        src={imgSrc}
        alt={`item ${id}`}
        onError={handleError}
        className={`${size} flex-shrink-0`}
        style={{ imageRendering: 'pixelated' }}
      />
    );
  };

  const maisVistosGuias = [
    { id: '25261', label: 'Farm em Clock Tower', author: 'FarmGod', level: 'Lv 60-80', views: 15432 },
    { id: '25262', label: 'Glast Heim Knights', author: 'WikiHero', level: 'Lv 80+', views: 13245 },
    { id: '25263', label: 'Leveling Orc Dungeon', author: 'ExpMaster', level: 'Lv 50-70', views: 11876 },
    { id: '25264', label: 'Farm de Zeny Abyss', author: 'RichPlayer', level: 'Lv 90+', views: 10543 },
    { id: '25261', label: 'Anolian Farm Comodo', author: 'BeachFarmer', level: 'Lv 70-85', views: 9234 },
  ];

  const ultimosPublicadosGuias = [
    { id: '25262', label: 'Magma Dungeon 2F', author: 'LavaHunter', level: 'Lv 85+', views: 2341 },
    { id: '25263', label: 'Sphinx Base Camp', author: 'DesertKing', level: 'Lv 65-80', views: 1987 },
    { id: '25264', label: 'Toy Factory 2F', author: 'ToyCollector', level: 'Lv 75-90', views: 3210 },
    { id: '25261', label: 'Juperos Ruins', author: 'RuinsExplorer', level: 'Lv 90+', views: 2765 },
    { id: '25262', label: 'Thanatos Tower', author: 'TowerMaster', level: 'Lv 95+', views: 4123 },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gradient-to-b from-zinc-900 to-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Button 
            variant="ghost" 
            className="text-white/60 hover:text-[#D4AF37] mb-4 -ml-4"
            onClick={onBack}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Wiki
          </Button>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <Map className="w-12 h-12 text-[#D4AF37]" />
                <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wide">
                  Guias de Caça da <span className="text-[#D4AF37]">Comunidade</span>
                </h1>
              </div>
              <p className="text-white/60 text-lg mt-2">
                Guias criados e compartilhados pela nossa comunidade • Cada guia aprovado vale 10 pontos
              </p>
            </div>
            {onCreateGuia && (
              <Button 
                onClick={onCreateGuia}
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white uppercase tracking-wide border-0 shadow-lg shadow-teal-600/30 whitespace-nowrap"
              >
                <Map className="w-5 h-5 mr-2" />
                Criar Meu Guia
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="mais-vistos" className="w-full">
          <TabsList className="bg-zinc-900 border-2 border-zinc-800 p-2 mb-8 w-full md:w-auto">
            <TabsTrigger 
              value="mais-vistos" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold px-8 py-3"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Mais Vistos
            </TabsTrigger>
            <TabsTrigger 
              value="ultimos-publicados" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold px-8 py-3"
            >
              <Clock className="w-4 h-4 mr-2" />
              Últimos Publicados
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mais-vistos">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {maisVistosGuias.map((guia, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800 hover:border-[#D4AF37]/50 transition-all cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center border-2 border-zinc-700">
                          <ItemIcon id={guia.id} size="w-12 h-12" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-lg mb-2 hover:text-[#D4AF37] transition-colors">
                            {guia.label}
                          </h3>
                          <Badge variant="outline" className="border-purple-500/40 text-purple-400 mb-2">
                            {guia.level}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{guia.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-[#D4AF37]" />
                          <span className="text-[#D4AF37] font-semibold">{guia.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ultimos-publicados">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ultimosPublicadosGuias.map((guia, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800 hover:border-[#D4AF37]/50 transition-all cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center border-2 border-zinc-700">
                          <ItemIcon id={guia.id} size="w-12 h-12" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-lg mb-2 hover:text-[#D4AF37] transition-colors">
                            {guia.label}
                          </h3>
                          <Badge variant="outline" className="border-purple-500/40 text-purple-400 mb-2">
                            {guia.level}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{guia.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-[#D4AF37]" />
                          <span className="text-[#D4AF37] font-semibold">{guia.views.toLocaleString()}</span>
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
