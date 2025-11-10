import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Shield, Target, Map, MessageCircle, Users, Bell, CheckCircle2, XCircle, Eye, AlertCircle, Calendar, TrendingUp, FileText, Award, Edit, Newspaper, Rocket, Gift, Plus, Trash2, Clock } from 'lucide-react';
import ArticleEditor from './ArticleEditor';
import PatchNotesEditor from './PatchNotesEditor';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface AdminDashboardProps {
  onBack: () => void;
}

export default function AdminDashboard({ onBack }: AdminDashboardProps) {
  const [selectedBuild, setSelectedBuild] = useState<number | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');

  // Dados mockados
  const pendingBuilds = [
    { id: 1, title: 'High Wizard - AoE Farm', author: 'MageMaster', date: '05 Nov', category: 'Build' },
    { id: 2, title: 'Assassin Cross - Sonic Blow Build', author: 'RogueGod', date: '06 Nov', category: 'Build' },
    { id: 3, title: 'Farm em Abyss Lake', author: 'FarmKing', date: '07 Nov', category: 'Guia' },
  ];

  const pendingDiscordRequests = [
    { id: 1, username: 'ProPlayer', discordTag: 'ProPlayer#1234', points: 120, articles: 12, requestDate: '05 Nov 2025' },
    { id: 2, username: 'WikiHero', discordTag: 'WikiHero#5678', points: 80, articles: 8, requestDate: '06 Nov 2025' },
    { id: 3, username: 'FarmGod', discordTag: 'FarmGod#9012', points: 50, articles: 5, requestDate: '07 Nov 2025' },
  ];

  const recentActions = [
    { id: 1, action: 'Build "Lord Knight DPS" aprovada', admin: 'GM_Balder', time: '1 hora atrás', type: 'approved' },
    { id: 2, action: 'Tag Discord aprovada para ProPlayer', admin: 'GM_Thor', time: '2 horas atrás', type: 'approved' },
    { id: 3, action: 'Guia "Sphinx Farm" rejeitado', admin: 'GM_Balder', time: '3 horas atrás', type: 'rejected' },
    { id: 4, action: 'Usuário WikiMaster promovido a Contribuidor Master', admin: 'GM_Odin', time: '5 horas atrás', type: 'promoted' },
  ];

  const allUsers = [
    { id: 1, username: 'ProPlayer', email: 'pro@example.com', points: 120, articles: 12, role: 'Contribuidor', joinDate: '15 Out 2025' },
    { id: 2, username: 'WikiHero', email: 'wiki@example.com', points: 80, articles: 8, role: 'Contribuidor', joinDate: '20 Out 2025' },
    { id: 3, username: 'FarmGod', email: 'farm@example.com', points: 50, articles: 5, role: 'Contribuidor', joinDate: '25 Out 2025' },
    { id: 4, username: 'MageMaster', email: 'mage@example.com', points: 150, articles: 15, role: 'Contribuidor Master', joinDate: '10 Out 2025' },
  ];

  const stats = {
    totalUsers: 247,
    totalArticles: 1543,
    pendingApprovals: 8,
    todayViews: 15234,
  };

  const handleApproveBuild = (buildId: number) => {
    console.log('Build aprovada:', buildId);
    // Aqui seria a lógica de aprovação
  };

  const handleRejectBuild = (buildId: number) => {
    if (rejectionReason.trim()) {
      console.log('Build rejeitada:', buildId, 'Motivo:', rejectionReason);
      setSelectedBuild(null);
      setRejectionReason('');
    }
  };

  const handleApproveDiscordTag = (requestId: number) => {
    console.log('Tag Discord aprovada:', requestId);
    // Aqui seria a lógica de aprovação
  };

  const handleRejectDiscordTag = (requestId: number) => {
    console.log('Tag Discord rejeitada:', requestId);
    // Aqui seria a lógica de rejeição
  };

  const getActionIcon = (type: string) => {
    switch (type) {
      case 'approved': return CheckCircle2;
      case 'rejected': return XCircle;
      case 'promoted': return Award;
      default: return Bell;
    }
  };

  const getActionColor = (type: string) => {
    switch (type) {
      case 'approved': return 'text-green-400';
      case 'rejected': return 'text-red-400';
      case 'promoted': return 'text-purple-400';
      default: return 'text-blue-400';
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
                <Shield className="w-12 h-12 text-[#D4AF37]" />
                <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wide">
                  Painel <span className="text-[#D4AF37]">Administrativo</span>
                </h1>
              </div>
              <p className="text-white/60 text-lg mt-2">
                Gerencie conteúdo, usuários e solicitações
              </p>
            </div>
            
            {/* Notificações */}
            <div className="relative">
              <Button className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white border-0">
                <Bell className="w-5 h-5 mr-2" />
                Notificações
                <Badge className="ml-2 bg-white text-red-600">
                  {pendingBuilds.length + pendingDiscordRequests.length}
                </Badge>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 border-0">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-3xl font-black text-white">{stats.totalUsers}</p>
                <p className="text-xs text-white/80 uppercase">Usuários</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-600 to-emerald-600 border-0">
              <CardContent className="p-4 text-center">
                <FileText className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-3xl font-black text-white">{stats.totalArticles}</p>
                <p className="text-xs text-white/80 uppercase">Artigos</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-600 to-amber-600 border-0">
              <CardContent className="p-4 text-center">
                <AlertCircle className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-3xl font-black text-white">{stats.pendingApprovals}</p>
                <p className="text-xs text-white/80 uppercase">Pendentes</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-600 to-indigo-600 border-0">
              <CardContent className="p-4 text-center">
                <Eye className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-3xl font-black text-white">{stats.todayViews.toLocaleString()}</p>
                <p className="text-xs text-white/80 uppercase">Views Hoje</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="approvals" className="w-full">
          <TabsList className="bg-zinc-900 border-2 border-zinc-800 p-2 mb-8 grid w-full grid-cols-4 md:grid-cols-8">
            <TabsTrigger 
              value="approvals" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold text-xs"
            >
              <CheckCircle2 className="w-4 h-4 mr-0 md:mr-2" />
              <span className="hidden md:inline">Aprovações</span>
            </TabsTrigger>
            <TabsTrigger 
              value="discord" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold text-xs"
            >
              <MessageCircle className="w-4 h-4 mr-0 md:mr-2" />
              <span className="hidden md:inline">Discord</span>
            </TabsTrigger>
            <TabsTrigger 
              value="users" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold text-xs"
            >
              <Users className="w-4 h-4 mr-0 md:mr-2" />
              <span className="hidden md:inline">Usuários</span>
            </TabsTrigger>
            <TabsTrigger 
              value="articles" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold text-xs"
            >
              <Edit className="w-4 h-4 mr-0 md:mr-2" />
              <span className="hidden md:inline">Artigos</span>
            </TabsTrigger>
            <TabsTrigger 
              value="patchnotes" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold text-xs"
            >
              <Newspaper className="w-4 h-4 mr-0 md:mr-2" />
              <span className="hidden md:inline">Patches</span>
            </TabsTrigger>
            <TabsTrigger 
              value="roadmap" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold text-xs"
            >
              <Rocket className="w-4 h-4 mr-0 md:mr-2" />
              <span className="hidden md:inline">Roadmap</span>
            </TabsTrigger>
            <TabsTrigger 
              value="calendario" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold text-xs"
            >
              <Calendar className="w-4 h-4 mr-0 md:mr-2" />
              <span className="hidden md:inline">Eventos</span>
            </TabsTrigger>
            <TabsTrigger 
              value="activity" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold text-xs"
            >
              <TrendingUp className="w-4 h-4 mr-0 md:mr-2" />
              <span className="hidden md:inline">Atividade</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab: Aprovações */}
          <TabsContent value="approvals" className="space-y-6">
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#D4AF37]" />
                  Builds e Guias Pendentes
                </CardTitle>
                <CardDescription className="text-white/60">
                  {pendingBuilds.length} itens aguardando aprovação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingBuilds.map((build) => (
                    <div key={build.id} className="p-4 bg-zinc-800/30 rounded-lg border border-zinc-700">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={build.category === 'Build' ? 'bg-red-500/20 text-red-400 border-red-500/40' : 'bg-teal-500/20 text-teal-400 border-teal-500/40'}>
                              {build.category}
                            </Badge>
                            <h3 className="text-white font-bold">{build.title}</h3>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-white/60">
                            <Avatar className="w-6 h-6 border border-zinc-700">
                              <AvatarFallback className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-black text-xs">
                                {build.author.slice(0, 2).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <span>{build.author}</span>
                            <span>•</span>
                            <Calendar className="w-3 h-3" />
                            <span>{build.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      {selectedBuild === build.id ? (
                        <div className="space-y-3 p-4 bg-zinc-900 rounded-lg border border-zinc-700">
                          <Label className="text-white">Motivo da Rejeição</Label>
                          <Textarea
                            value={rejectionReason}
                            onChange={(e) => setRejectionReason(e.target.value)}
                            placeholder="Explique o motivo da rejeição..."
                            className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 min-h-[100px]"
                          />
                          <div className="flex gap-2">
                            <Button
                              onClick={() => handleRejectBuild(build.id)}
                              disabled={!rejectionReason.trim()}
                              className="bg-red-600 hover:bg-red-500 text-white"
                            >
                              Confirmar Rejeição
                            </Button>
                            <Button
                              onClick={() => {
                                setSelectedBuild(null);
                                setRejectionReason('');
                              }}
                              variant="outline"
                              className="border-zinc-700 text-white hover:bg-zinc-800"
                            >
                              Cancelar
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleApproveBuild(build.id)}
                            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white flex-1"
                          >
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            Aprovar (+10 pontos)
                          </Button>
                          <Button
                            onClick={() => setSelectedBuild(build.id)}
                            variant="outline"
                            className="border-red-500/40 text-red-400 hover:bg-red-500/10"
                          >
                            <XCircle className="w-4 h-4 mr-2" />
                            Rejeitar
                          </Button>
                          <Button
                            variant="outline"
                            className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Tags Discord */}
          <TabsContent value="discord" className="space-y-6">
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
                  Solicitações de Tag Discord
                </CardTitle>
                <CardDescription className="text-white/60">
                  {pendingDiscordRequests.length} solicitações pendentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingDiscordRequests.map((request) => (
                    <div key={request.id} className="p-4 bg-zinc-800/30 rounded-lg border border-zinc-700">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Avatar className="w-10 h-10 border-2 border-[#D4AF37]">
                              <AvatarFallback className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-black">
                                {request.username.slice(0, 2).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="text-white font-bold">{request.username}</h3>
                              <p className="text-[#D4AF37] text-sm">{request.discordTag}</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mt-3">
                            <div className="p-2 bg-zinc-900 rounded border border-zinc-700">
                              <p className="text-white/60 text-xs">Pontos</p>
                              <p className="text-white font-bold">{request.points}</p>
                            </div>
                            <div className="p-2 bg-zinc-900 rounded border border-zinc-700">
                              <p className="text-white/60 text-xs">Artigos</p>
                              <p className="text-white font-bold">{request.articles}</p>
                            </div>
                            <div className="p-2 bg-zinc-900 rounded border border-zinc-700">
                              <p className="text-white/60 text-xs">Solicitado</p>
                              <p className="text-white font-bold text-xs">{request.requestDate}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleApproveDiscordTag(request.id)}
                          className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white flex-1"
                        >
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Aprovar Tag
                        </Button>
                        <Button
                          onClick={() => handleRejectDiscordTag(request.id)}
                          variant="outline"
                          className="border-red-500/40 text-red-400 hover:bg-red-500/10"
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Rejeitar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Usuários */}
          <TabsContent value="users" className="space-y-6">
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#D4AF37]" />
                  Gerenciar Usuários
                </CardTitle>
                <CardDescription className="text-white/60">
                  Total de {allUsers.length} usuários cadastrados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {allUsers.map((user) => (
                    <div key={user.id} className="p-4 bg-zinc-800/30 rounded-lg border border-zinc-700">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 flex-1">
                          <Avatar className="w-12 h-12 border-2 border-zinc-700">
                            <AvatarFallback className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-black">
                              {user.username.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-white font-bold">{user.username}</h3>
                              <Badge className={user.role === 'Contribuidor Master' ? 'bg-purple-500/20 text-purple-400 border-purple-500/40' : 'bg-blue-500/20 text-blue-400 border-blue-500/40'}>
                                {user.role}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-white/60">
                              <span>{user.email}</span>
                              <span>•</span>
                              <span>{user.points} pts</span>
                              <span>•</span>
                              <span>{user.articles} artigos</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-purple-500/40 text-purple-400 hover:bg-purple-500/10"
                          >
                            <Award className="w-4 h-4 mr-1" />
                            Promover
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Artigos */}
          <TabsContent value="articles">
            <ArticleEditor />
          </TabsContent>

          {/* Tab: Patch Notes */}
          <TabsContent value="patchnotes">
            <PatchNotesEditor />
          </TabsContent>

          {/* Tab: Roadmap */}
          <TabsContent value="roadmap" className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-black text-white uppercase">Gerenciar Roadmap</h2>
                <p className="text-white/60 mt-1">Adicione e gerencie as próximas atualizações do servidor</p>
              </div>
              <Button className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black font-bold">
                <Plus className="w-4 h-4 mr-2" />
                Nova Atualização
              </Button>
            </div>

            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-[#D4AF37]" />
                  Atualizações Planejadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      title: 'Update 12.5 - Novo Sistema PvP',
                      status: 'Em Breve',
                      statusColor: 'text-green-400 border-green-500/40 bg-green-500/10',
                      date: 'Dez 2025',
                      description: 'Arena ranqueada com torneios e recompensas exclusivas',
                      progress: 85
                    },
                    {
                      id: 2,
                      title: 'Expansão: Torre Infinita',
                      status: 'Em Desenvolvimento',
                      statusColor: 'text-blue-400 border-blue-500/40 bg-blue-500/10',
                      date: 'Jan 2026',
                      description: '100 andares com desafios únicos e boss épicos',
                      progress: 60
                    },
                    {
                      id: 3,
                      title: 'Sistema de Montarias Lendárias',
                      status: 'Planejado',
                      statusColor: 'text-purple-400 border-purple-500/40 bg-purple-500/10',
                      date: 'Fev 2026',
                      description: 'Montarias raras com habilidades especiais',
                      progress: 25
                    },
                  ].map((update) => (
                    <div key={update.id} className="p-4 bg-zinc-800/30 rounded-lg border border-zinc-700">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <h3 className="text-white font-black text-lg mb-1">{update.title}</h3>
                          <p className="text-white/70 text-sm mb-2">{update.description}</p>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className={update.statusColor}>
                              {update.status}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm text-white/60">
                              <Calendar className="w-3 h-3" />
                              {update.date}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-500/40 text-red-400 hover:bg-red-500/10">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-white/40">Progresso do Desenvolvimento</span>
                          <span className="text-xs font-bold text-[#D4AF37]">{update.progress}%</span>
                        </div>
                        <div className="w-full bg-zinc-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] h-2 rounded-full" style={{ width: `${update.progress}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Calendário */}
          <TabsContent value="calendario" className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-black text-white uppercase">Gerenciar Eventos</h2>
                <p className="text-white/60 mt-1">Adicione e gerencie os eventos do servidor</p>
              </div>
              <Button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold">
                <Plus className="w-4 h-4 mr-2" />
                Novo Evento
              </Button>
            </div>

            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#D4AF37]" />
                  Eventos Ativos e Agendados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      title: 'War of Emperium',
                      type: 'PvP',
                      color: 'from-red-600 to-rose-600',
                      days: ['Sábado'],
                      time: '20:00 - 22:00',
                      active: true,
                      participants: '50-100 players'
                    },
                    {
                      id: 2,
                      title: 'Boss Rush',
                      type: 'PvE',
                      color: 'from-purple-600 to-indigo-600',
                      days: ['Domingo'],
                      time: '18:00 - 20:00',
                      active: true,
                      participants: '1-5 players'
                    },
                    {
                      id: 3,
                      title: 'Caça ao Tesouro',
                      type: 'Evento',
                      color: 'from-[#D4AF37] to-[#B8941F]',
                      days: ['Terça', 'Quinta'],
                      time: '19:00 - 20:00',
                      active: false,
                      participants: 'Ilimitado'
                    },
                    {
                      id: 4,
                      title: 'Battlegrounds',
                      type: 'PvP',
                      color: 'from-orange-600 to-amber-600',
                      days: ['Quarta', 'Sexta'],
                      time: '21:00 - 22:30',
                      active: false,
                      participants: '20 players'
                    },
                  ].map((evento) => (
                    <div key={evento.id} className="p-4 bg-zinc-800/30 rounded-lg border border-zinc-700">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${evento.color} flex items-center justify-center flex-shrink-0`}>
                            <Gift className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-white font-black">{evento.title}</h3>
                              {evento.active && (
                                <Badge className="bg-green-500 text-white text-xs">
                                  Ativo
                                </Badge>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-2 mb-2">
                              <Badge variant="outline" className="text-xs border-orange-500/40 text-orange-400">
                                {evento.type}
                              </Badge>
                              {evento.days.map((day, idx) => (
                                <Badge key={idx} className="bg-zinc-700 text-white text-xs">
                                  {day}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-white/60">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {evento.time}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {evento.participants}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-500/40 text-red-400 hover:bg-red-500/10">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Atividade */}
          <TabsContent value="activity" className="space-y-6">
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                  Atividade Recente
                </CardTitle>
                <CardDescription className="text-white/60">
                  Últimas ações administrativas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActions.map((activity) => {
                    const Icon = getActionIcon(activity.type);
                    const colorClass = getActionColor(activity.type);
                    
                    return (
                      <div key={activity.id} className="p-4 bg-zinc-800/30 rounded-lg border border-zinc-700">
                        <div className="flex items-start gap-3">
                          <Icon className={`w-5 h-5 ${colorClass} mt-0.5 shrink-0`} />
                          <div className="flex-1">
                            <p className="text-white">{activity.action}</p>
                            <div className="flex items-center gap-2 text-sm text-white/60 mt-1">
                              <span>Por {activity.admin}</span>
                              <span>•</span>
                              <span>{activity.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
