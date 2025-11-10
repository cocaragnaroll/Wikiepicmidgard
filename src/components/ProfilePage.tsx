import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { ArrowLeft, User, Star, FileText, Trophy, Calendar, Eye, Target, Map, Settings, Upload, Crown, Award, TrendingUp } from 'lucide-react';

interface ProfilePageProps {
  onBack: () => void;
  username?: string;
}

export default function ProfilePage({ onBack, username = 'ProPlayer' }: ProfilePageProps) {
  const [profileImage, setProfileImage] = useState<string>('');

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

  // Mock data do perfil
  const profileData = {
    username: username,
    avatar: username.slice(0, 2).toUpperCase(),
    points: 380,
    articles: 38,
    rank: 1,
    badge: 'Lenda',
    joinDate: '15 Mar 2024',
    totalViews: 45234,
    bio: 'Jogador veterano de Ragnarok Online desde 2005. Especialista em builds e estratégias de PvP/WoE.',
  };

  const userArticles = [
    { id: '25158', type: 'build', title: 'Lord Knight - DPS Crítico', views: 12547, date: '05 Nov 2025', approved: true },
    { id: '25165', type: 'build', title: 'High Wizard - AoE Farm', views: 10234, date: '03 Nov 2025', approved: true },
    { id: '25173', type: 'build', title: 'Sniper - Trap Hunter', views: 9876, date: '01 Nov 2025', approved: true },
    { id: '25174', type: 'guide', title: 'Farm em Clock Tower', views: 8543, date: '30 Out 2025', approved: true },
    { id: '25180', type: 'build', title: 'Assassin Cross - Sonic Blow', views: 7654, date: '28 Out 2025', approved: true },
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
            Voltar
          </Button>
        </div>
      </div>

      {/* Profile Header */}
      <div className="bg-gradient-to-b from-zinc-900 to-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Avatar */}
            <div className="relative group">
              <Avatar className="w-32 h-32 border-4 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/30">
                {profileImage ? (
                  <AvatarImage src={profileImage} alt={profileData.username} />
                ) : (
                  <AvatarFallback className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-black text-4xl font-bold">
                    {profileData.avatar}
                  </AvatarFallback>
                )}
              </Avatar>
              
              {/* Upload Button */}
              <label className="absolute bottom-0 right-0 bg-[#D4AF37] hover:bg-[#FFD700] text-black p-2 rounded-full cursor-pointer shadow-lg transition-all">
                <Upload className="w-5 h-5" />
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              {/* Rank Badge */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-3 py-1 rounded-full flex items-center gap-1 border-2 border-white/30 shadow-lg">
                <Crown className="w-4 h-4" />
                <span className="font-bold text-sm">#{profileData.rank}</span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-black text-white">{profileData.username}</h1>
                <Badge className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black font-bold px-3 py-1">
                  {profileData.badge}
                </Badge>
              </div>
              
              <p className="text-white/70 text-lg mb-4 max-w-2xl">{profileData.bio}</p>
              
              <div className="flex flex-wrap gap-6 text-sm text-white/60 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>Membro desde {profileData.joinDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#D4AF37]" />
                  <span>{profileData.totalViews.toLocaleString()} visualizações totais</span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border-2 border-yellow-500/30">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Star className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{profileData.points}</div>
                    <div className="text-xs text-white/60">Pontos</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border-2 border-blue-500/30">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <FileText className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{profileData.articles}</div>
                    <div className="text-xs text-white/60">Publicações</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 border-2 border-purple-500/30">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Trophy className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">#{profileData.rank}</div>
                    <div className="text-xs text-white/60">Ranking</div>
                  </CardContent>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <Button className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black font-bold">
                  <Settings className="w-4 h-4 mr-2" />
                  Editar Perfil
                </Button>
                <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-bold">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Ver Estatísticas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="publicacoes" className="w-full">
          <TabsList className="bg-zinc-900 border-2 border-zinc-800 p-2 mb-8 w-full md:w-auto">
            <TabsTrigger 
              value="publicacoes" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold px-8 py-3"
            >
              <FileText className="w-4 h-4 mr-2" />
              Publicações ({userArticles.length})
            </TabsTrigger>
            <TabsTrigger 
              value="conquistas" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold px-8 py-3"
            >
              <Award className="w-4 h-4 mr-2" />
              Conquistas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="publicacoes">
            <div className="grid md:grid-cols-2 gap-6">
              {userArticles.map((article, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800 hover:border-[#D4AF37]/50 transition-all cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center border-2 border-zinc-700">
                          <ItemIcon id={article.id} size="w-12 h-12" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {article.type === 'build' ? (
                              <Target className="w-4 h-4 text-red-400" />
                            ) : (
                              <Map className="w-4 h-4 text-teal-400" />
                            )}
                            <Badge variant="outline" className={article.type === 'build' ? 'border-red-500/40 text-red-400' : 'border-teal-500/40 text-teal-400'}>
                              {article.type === 'build' ? 'Build' : 'Guia de Caça'}
                            </Badge>
                            {article.approved && (
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/40">
                                Aprovado
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-white font-bold text-lg mb-2 hover:text-[#D4AF37] transition-colors">
                            {article.title}
                          </h3>
                        </div>
                      </div>
                      
                      <Separator className="my-4 bg-zinc-800" />
                      
                      <div className="flex items-center justify-between text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-[#D4AF37]" />
                          <span className="text-[#D4AF37] font-semibold">{article.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="conquistas">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Crown, title: 'Top 1 Contribuidor', description: 'Alcançou o primeiro lugar no ranking', color: 'from-yellow-500 to-amber-600' },
                { icon: Star, title: '300+ Pontos', description: 'Acumulou mais de 300 pontos', color: 'from-blue-500 to-cyan-600' },
                { icon: FileText, title: '30+ Publicações', description: 'Publicou mais de 30 artigos', color: 'from-purple-500 to-pink-600' },
                { icon: Trophy, title: 'Lenda', description: 'Atingiu o nível de Lenda', color: 'from-orange-500 to-red-600' },
                { icon: Award, title: 'Contribuidor Veterano', description: 'Membro há mais de 6 meses', color: 'from-green-500 to-emerald-600' },
                { icon: TrendingUp, title: '40k+ Visualizações', description: 'Artigos com mais de 40k views', color: 'from-indigo-500 to-purple-600' },
              ].map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className={`bg-gradient-to-br ${achievement.color} border-2 border-white/20 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <CardContent className="p-6 relative">
                      <div className="flex items-center justify-center w-16 h-16 bg-black/30 rounded-xl mb-4 mx-auto">
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-center text-lg mb-2">{achievement.title}</h3>
                      <p className="text-white/80 text-center text-sm">{achievement.description}</p>
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
