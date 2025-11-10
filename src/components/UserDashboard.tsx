import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Target, Map, Trophy, Star, Clock, CheckCircle2, Eye, Edit, Trash2, MessageCircle, User, FileText, TrendingUp, Award, AlertCircle, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback } from './ui/avatar';

interface UserDashboardProps {
  onBack: () => void;
  userName: string;
}

export default function UserDashboard({ onBack, userName }: UserDashboardProps) {
  const [discordTag, setDiscordTag] = useState('');
  const [requestMessage, setRequestMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Dados mockados do usuário
  const userData = {
    name: userName,
    email: 'usuario@exemplo.com',
    points: 120,
    totalArticles: 12,
    rank: 5,
    joinDate: '15 Out 2025',
  };

  const myBuilds = [
    { id: 1, title: 'Lord Knight - DPS Crítico', status: 'Aprovado', views: 4523, likes: 234, date: '20 Out', points: 10 },
    { id: 2, title: 'High Wizard - Farm Eficiente', status: 'Pendente', views: 0, likes: 0, date: '05 Nov', points: 0 },
    { id: 3, title: 'Sniper - Trap Hunter', status: 'Aprovado', views: 2341, likes: 156, date: '15 Out', points: 10 },
  ];

  const myGuides = [
    { id: 1, title: 'Farm em Clock Tower', status: 'Aprovado', views: 8234, likes: 445, date: '25 Out', points: 10 },
    { id: 2, title: 'Sphinx Dungeon Guide', status: 'Rejeitado', views: 0, likes: 0, date: '30 Out', points: 0, reason: 'Conteúdo incompleto' },
    { id: 3, title: 'Glast Heim Farm Guide', status: 'Em Análise', views: 0, likes: 0, date: '05 Nov', points: 0 },
  ];

  const discordRequests = [
    { id: 1, discordTag: 'ProPlayer#1234', status: 'Aprovado', requestDate: '20 Out 2025', completedDate: '21 Out 2025' },
    { id: 2, discordTag: 'UserTest#5678', status: 'Pendente', requestDate: '05 Nov 2025', completedDate: null },
  ];

  const handleSubmitDiscordRequest = () => {
    if (discordTag.trim()) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setDiscordTag('');
        setRequestMessage('');
      }, 3000);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Aprovado': return 'bg-green-500/20 text-green-400 border-green-500/40';
      case 'Pendente': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40';
      case 'Em Análise': return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      case 'Rejeitado': return 'bg-red-500/20 text-red-400 border-red-500/40';
      default: return 'bg-zinc-500/20 text-zinc-400 border-zinc-500/40';
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
            Voltar para Wiki
          </Button>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <User className="w-12 h-12 text-[#D4AF37]" />
                <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wide">
                  Meu <span className="text-[#D4AF37]">Painel</span>
                </h1>
              </div>
              <p className="text-white/60 text-lg mt-2">
                Gerencie suas contribuições e perfil
              </p>
            </div>
            
            {/* Stats Rápidas */}
            <div className="flex gap-4">
              <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] p-4 rounded-xl text-center min-w-[100px]">
                <Trophy className="w-8 h-8 text-black mx-auto mb-1" />
                <p className="text-2xl font-black text-black">{userData.points}</p>
                <p className="text-xs text-black/70 uppercase">Pontos</p>
              </div>
              <div className="bg-zinc-800 border-2 border-zinc-700 p-4 rounded-xl text-center min-w-[100px]">
                <FileText className="w-8 h-8 text-[#D4AF37] mx-auto mb-1" />
                <p className="text-2xl font-black text-white">{userData.totalArticles}</p>
                <p className="text-xs text-white/60 uppercase">Artigos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-zinc-900 border-2 border-zinc-800 p-2 mb-8 grid w-full grid-cols-4">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Visão Geral
            </TabsTrigger>
            <TabsTrigger 
              value="content" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold"
            >
              <FileText className="w-4 h-4 mr-2" />
              Conteúdo
            </TabsTrigger>
            <TabsTrigger 
              value="discord" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Tag Discord
            </TabsTrigger>
            <TabsTrigger 
              value="profile" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold"
            >
              <User className="w-4 h-4 mr-2" />
              Perfil
            </TabsTrigger>
          </TabsList>

          {/* Tab: Visão Geral */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card de Ranking */}
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#D4AF37]" />
                    Ranking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-5xl font-black text-[#D4AF37] mb-2">#{userData.rank}</p>
                    <p className="text-white/60">No ranking geral</p>
                  </div>
                </CardContent>
              </Card>

              {/* Card de Estatísticas */}
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                    Estatísticas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Total de Views:</span>
                    <span className="text-white font-bold">15.1k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Total de Likes:</span>
                    <span className="text-white font-bold">835</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Taxa de Aprovação:</span>
                    <span className="text-green-400 font-bold">83%</span>
                  </div>
                </CardContent>
              </Card>

              {/* Card de Info Pessoal */}
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <User className="w-5 h-5 text-[#D4AF37]" />
                    Informações
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-white/60 text-sm">Membro desde:</p>
                    <p className="text-white font-bold">{userData.joinDate}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email:</p>
                    <p className="text-white font-bold text-sm">{userData.email}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Atividade Recente */}
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                  Atividade Recente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { icon: CheckCircle2, text: 'Build "Lord Knight DPS" foi aprovada', time: '2 horas atrás', color: 'text-green-400' },
                    { icon: Clock, text: 'Guia "Glast Heim" está em análise', time: '1 dia atrás', color: 'text-blue-400' },
                    { icon: Star, text: 'Você ganhou 10 pontos!', time: '2 dias atrás', color: 'text-yellow-400' },
                    { icon: MessageCircle, text: 'Tag Discord aprovada', time: '5 dias atrás', color: 'text-indigo-400' },
                  ].map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-zinc-800/30 rounded-lg border border-zinc-700">
                      <activity.icon className={`w-5 h-5 ${activity.color} mt-0.5 shrink-0`} />
                      <div className="flex-1">
                        <p className="text-white">{activity.text}</p>
                        <p className="text-white/40 text-sm mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Conteúdo */}
          <TabsContent value="content" className="space-y-6">
            {/* Minhas Builds */}
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Target className="w-5 h-5 text-[#D4AF37]" />
                      Minhas Builds
                    </CardTitle>
                    <CardDescription className="text-white/60">
                      {myBuilds.length} builds criadas
                    </CardDescription>
                  </div>
                  <Badge className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black border-0">
                    {myBuilds.filter(b => b.status === 'Aprovado').length * 10} pontos
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {myBuilds.map((build) => (
                    <div key={build.id} className="p-4 bg-zinc-800/30 rounded-lg border border-zinc-700">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <h3 className="text-white font-bold mb-1">{build.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-white/60">
                            <span>{build.date}</span>
                            {build.status === 'Aprovado' && (
                              <>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                  <Eye className="w-3 h-3" />
                                  <span>{build.views.toLocaleString()}</span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        <Badge className={getStatusColor(build.status)}>
                          {build.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
                          <Edit className="w-4 h-4 mr-2" />
                          Editar
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-500/40 text-red-400 hover:bg-red-500/10">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Excluir
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Meus Guias */}
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Map className="w-5 h-5 text-[#D4AF37]" />
                      Meus Guias de Caça
                    </CardTitle>
                    <CardDescription className="text-white/60">
                      {myGuides.length} guias criados
                    </CardDescription>
                  </div>
                  <Badge className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black border-0">
                    {myGuides.filter(g => g.status === 'Aprovado').length * 10} pontos
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {myGuides.map((guide) => (
                    <div key={guide.id} className="p-4 bg-zinc-800/30 rounded-lg border border-zinc-700">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <h3 className="text-white font-bold mb-1">{guide.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-white/60">
                            <span>{guide.date}</span>
                            {guide.status === 'Aprovado' && (
                              <>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                  <Eye className="w-3 h-3" />
                                  <span>{guide.views.toLocaleString()}</span>
                                </div>
                              </>
                            )}
                          </div>
                          {guide.status === 'Rejeitado' && guide.reason && (
                            <p className="text-red-400 text-sm mt-2 flex items-start gap-2">
                              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                              Motivo: {guide.reason}
                            </p>
                          )}
                        </div>
                        <Badge className={getStatusColor(guide.status)}>
                          {guide.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
                          <Edit className="w-4 h-4 mr-2" />
                          Editar
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-500/40 text-red-400 hover:bg-red-500/10">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Excluir
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Tag Discord */}
          <TabsContent value="discord" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Solicitar Tag */}
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
                    Solicitar Tag Discord
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    Receba a tag exclusiva de Contribuidor no Discord
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {showSuccess ? (
                    <div className="p-4 bg-green-500/20 border border-green-500/40 rounded-lg">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-green-400 font-bold">Solicitação Enviada!</p>
                          <p className="text-white/70 text-sm mt-1">
                            Sua solicitação foi enviada para análise. O processo pode levar até 48 horas.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                          <div>
                            <p className="text-blue-400 font-bold">Importante</p>
                            <p className="text-white/70 text-sm mt-1">
                              Digite exatamente o nome que aparece no Discord (incluindo #números). A solicitação será analisada em até 48 horas.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white">Tag do Discord *</Label>
                        <Input
                          placeholder="Ex: SeuNome#1234"
                          value={discordTag}
                          onChange={(e) => setDiscordTag(e.target.value)}
                          className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white">Mensagem (opcional)</Label>
                        <Textarea
                          placeholder="Alguma informação adicional..."
                          value={requestMessage}
                          onChange={(e) => setRequestMessage(e.target.value)}
                          className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 min-h-[100px]"
                        />
                      </div>

                      <Button 
                        onClick={handleSubmitDiscordRequest}
                        disabled={!discordTag.trim()}
                        className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black font-bold"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Solicitação
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Histórico de Solicitações */}
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                    Minhas Solicitações
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    Histórico de solicitações de tag
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {discordRequests.length === 0 ? (
                      <p className="text-white/60 text-center py-8">
                        Você ainda não fez nenhuma solicitação
                      </p>
                    ) : (
                      discordRequests.map((request) => (
                        <div key={request.id} className="p-4 bg-zinc-800/30 rounded-lg border border-zinc-700">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="flex-1">
                              <p className="text-white font-bold">{request.discordTag}</p>
                              <p className="text-white/60 text-sm">
                                Solicitado em: {request.requestDate}
                              </p>
                              {request.completedDate && (
                                <p className="text-green-400 text-sm">
                                  Concluído em: {request.completedDate}
                                </p>
                              )}
                            </div>
                            <Badge className={getStatusColor(request.status)}>
                              {request.status}
                            </Badge>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab: Perfil */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <User className="w-5 h-5 text-[#D4AF37]" />
                  Editar Perfil
                </CardTitle>
                <CardDescription className="text-white/60">
                  Atualize suas informações pessoais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-white">Nome de Usuário</Label>
                  <Input
                    defaultValue={userData.name}
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Email</Label>
                  <Input
                    type="email"
                    defaultValue={userData.email}
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Biografia</Label>
                  <Textarea
                    placeholder="Conte um pouco sobre você..."
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 min-h-[120px]"
                  />
                </div>

                <Button className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black font-bold">
                  Salvar Alterações
                </Button>
              </CardContent>
            </Card>

            {/* Alterar Senha */}
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#D4AF37]" />
                  Alterar Senha
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-white">Senha Atual</Label>
                  <Input
                    type="password"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Nova Senha</Label>
                  <Input
                    type="password"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Confirmar Nova Senha</Label>
                  <Input
                    type="password"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>

                <Button className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black font-bold">
                  Atualizar Senha
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
