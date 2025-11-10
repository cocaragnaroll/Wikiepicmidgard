import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, Target, Eye, User, TrendingUp, Clock } from 'lucide-react';

interface BuildsPageProps {
  onBack: () => void;
  onCreateBuild?: () => void;
}

export default function BuildsPage({ onBack, onCreateBuild }: BuildsPageProps) {
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

  const maisVistosBuilds = [
    { id: '25158', label: 'Lord Knight - DPS Crítico', author: 'ProPlayer', class: 'Lord Knight', views: 12547 },
    { id: '25165', label: 'High Wizard - AoE Farm', author: 'MageMaster', class: 'High Wizard', views: 10234 },
    { id: '25173', label: 'Sniper - Trap Hunter', author: 'ArcherPro', class: 'Sniper', views: 9876 },
    { id: '25174', label: 'High Priest - Full Support', author: 'HealerKing', class: 'High Priest', views: 8543 },
    { id: '25180', label: 'Assassin Cross - Sonic Blow', author: 'RogueGod', class: 'Assassin Cross', views: 7654 },
  ];

  const ultimosPublicadosBuilds = [
    { id: '25180', label: 'Whitesmith - Breaking Build', author: 'SmithPro', class: 'Whitesmith', views: 1234 },
    { id: '25158', label: 'Champion - Asura Strike', author: 'MonkMaster', class: 'Champion', views: 2345 },
    { id: '25165', label: 'Paladin - Tank Shield', author: 'TankGod', class: 'Paladin', views: 3456 },
    { id: '25173', label: 'Professor - Support Magnus', author: 'SagePro', class: 'Professor', views: 1876 },
    { id: '25174', label: 'Stalker - Full Strip', author: 'StripKing', class: 'Stalker', views: 2987 },
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
                <Target className="w-12 h-12 text-[#D4AF37]" />
                <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wide">
                  Builds da <span className="text-[#D4AF37]">Comunidade</span>
                </h1>
              </div>
              <p className="text-white/60 text-lg mt-2">
                Builds criadas e compartilhadas pela nossa comunidade • Cada build aprovada vale 10 pontos
              </p>
            </div>
            {onCreateBuild && (
              <Button 
                onClick={onCreateBuild}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white uppercase tracking-wide border-0 shadow-lg shadow-green-600/30 whitespace-nowrap"
              >
                <Target className="w-5 h-5 mr-2" />
                Criar Minha Build
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
              {maisVistosBuilds.map((build, idx) => (
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
                          <ItemIcon id={build.id} size="w-12 h-12" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-lg mb-2 hover:text-[#D4AF37] transition-colors">
                            {build.label}
                          </h3>
                          <Badge variant="outline" className="border-blue-500/40 text-blue-400 mb-2">
                            {build.class}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{build.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-[#D4AF37]" />
                          <span className="text-[#D4AF37] font-semibold">{build.views.toLocaleString()}</span>
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
              {ultimosPublicadosBuilds.map((build, idx) => (
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
                          <ItemIcon id={build.id} size="w-12 h-12" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-lg mb-2 hover:text-[#D4AF37] transition-colors">
                            {build.label}
                          </h3>
                          <Badge variant="outline" className="border-blue-500/40 text-blue-400 mb-2">
                            {build.class}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{build.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-[#D4AF37]" />
                          <span className="text-[#D4AF37] font-semibold">{build.views.toLocaleString()}</span>
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
