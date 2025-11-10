import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Book, 
  ChevronRight, 
  Calendar, 
  User, 
  Eye, 
  ArrowLeft,
  Sword,
  Heart,
  Zap,
  Shield,
  Target,
  Users,
  Map,
  Coins,
  Star,
  Clock,
  Tag,
  Share2,
  Bookmark,
  Gift,
  Sparkles
} from 'lucide-react';

interface ArticlePageProps {
  onBack?: () => void;
}

export default function ArticlePage({ onBack }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Header com breadcrumb */}
      <div className="bg-gradient-to-b from-zinc-900 to-black border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button 
              variant="ghost" 
              className="text-white/60 hover:text-[#D4AF37] mb-4 -ml-4"
              onClick={onBack}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Wiki
            </Button>
            
            <div className="flex items-center gap-2 text-sm text-white/50 mb-4">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Wiki</a>
              <ChevronRight className="w-4 h-4" />
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Guias para Iniciantes</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white/80">Como Começar no RO</span>
            </div>

            <h1 className="text-4xl md:text-5xl uppercase tracking-wider mb-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
              Como Começar no Ragnarok Online
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Atualizado em 07 Nov 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Admin</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>1.234 visualizações</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min de leitura</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>Tutorial, Iniciantes</span>
              </div>
            </div>

            {/* Ações do Artigo */}
            <div className="flex gap-3 mt-4">
              <Button variant="outline" size="sm" className="border-zinc-700 hover:border-[#D4AF37] text-[#D4AF37] hover:text-[#FFD700] hover:bg-[#D4AF37]/10">
                <Share2 className="w-4 h-4 mr-2" />
                <span className="text-base font-semibold">Compartilhar</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1543844481-52e5d6b93760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcGljJTIwZmFudGFzeSUyMGdhbWUlMjBoZXJvfGVufDF8fHx8MTc2MjQ5MDkwMnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Como Começar no Ragnarok Online"
          className="w-full h-full object-contain bg-black"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Conteúdo do Artigo */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_280px] gap-8">
          {/* Artigo Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardContent className="p-8 md:p-12">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/40">
                    Iniciante
                  </Badge>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/40">
                    Tutorial
                  </Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/40">
                    Essencial
                  </Badge>
                </div>

                {/* Introdução com destaque */}
                <div className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-l-4 border-[#D4AF37] p-6 rounded-r-xl mb-8">
                  <p className="text-white/90 text-lg leading-relaxed">
                    Bem-vindo ao <span className="text-[#D4AF37] font-semibold">EpicMidgard</span>! Este guia completo vai te ajudar a dar os primeiros passos no mundo de Ragnarok Online, desde a criação do personagem até suas primeiras aventuras.
                  </p>
                </div>

                {/* Índice */}
                <Card className="bg-zinc-900/50 border-zinc-700 mb-8">
                  <CardHeader>
                    <CardTitle className="text-[#D4AF37] flex items-center gap-2">
                      <Book className="w-5 h-5" />
                      Índice do Guia
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        'Criando seu Personagem',
                        'Entendendo a Interface',
                        'Primeiras Missões',
                        'Sistema de Classes',
                        'Dicas de Equipamento',
                        'Onde Fazer Level'
                      ].map((item, idx) => (
                        <li key={idx}>
                          <a href={`#section-${idx}`} className="text-white/70 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Seção 1: Criando seu Personagem */}
                <section id="section-0" className="mb-12">
                  <h2 className="text-3xl text-[#D4AF37] uppercase tracking-wide mb-6 flex items-center gap-3">
                    <Sword className="w-8 h-8" />
                    1. Criando seu Personagem
                  </h2>
                  <Separator className="bg-zinc-700 mb-6" />
                  
                  <div className="prose prose-invert max-w-none">
                    <p className="text-white/90 text-lg leading-relaxed mb-4">
                      Ao entrar no jogo pela primeira vez, você começará como um <span className="text-orange-400 font-semibold">Noviço</span>. Esta é a classe inicial de todos os jogadores e serve como introdução ao mundo de Ragnarok Online.
                    </p>

                    <Card className="bg-zinc-900/30 border-zinc-700 my-6">
                      <CardContent className="p-6">
                        <h3 className="text-xl text-white font-semibold mb-4">📝 Passo a passo:</h3>
                        <ol className="space-y-3 text-white/80">
                          <li className="flex gap-3">
                            <span className="text-[#D4AF37] font-bold">1.</span>
                            <span>Escolha o nome do seu personagem (não poderá ser alterado depois)</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-[#D4AF37] font-bold">2.</span>
                            <span>Selecione o visual inicial (cabelo, cor, estilo)</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-[#D4AF37] font-bold">3.</span>
                            <span>Distribua seus pontos de atributo iniciais com sabedoria</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-[#D4AF37] font-bold">4.</span>
                            <span>Converse com o NPC de treinamento para começar</span>
                          </li>
                        </ol>
                      </CardContent>
                    </Card>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-6">
                      <div className="flex gap-3">
                        <Zap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-blue-400 font-semibold mb-2">💡 Dica Importante</h4>
                          <p className="text-white/80">
                            Não se preocupe muito com a distribuição inicial de pontos. Você poderá redistribuir seus atributos gratuitamente até o nível 40!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Seção 2: Entendendo a Interface */}
                <section id="section-1" className="mb-12">
                  <h2 className="text-3xl text-[#D4AF37] uppercase tracking-wide mb-6 flex items-center gap-3">
                    <Target className="w-8 h-8" />
                    2. Entendendo a Interface
                  </h2>
                  <Separator className="bg-zinc-700 mb-6" />
                  
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    A interface do Ragnarok Online pode parecer complexa no início, mas é muito intuitiva. Aqui estão os elementos principais:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: Heart, title: 'HP/SP Bars', desc: 'Monitore sua vida e mana no canto superior esquerdo' },
                      { icon: Shield, title: 'Inventário', desc: 'Acesse com ALT+E para ver seus itens' },
                      { icon: Star, title: 'Skills', desc: 'Pressione ALT+S para abrir a janela de habilidades' },
                      { icon: Users, title: 'Party/Guild', desc: 'Gerencie grupos e guilda pelo menu lateral' },
                    ].map((item, idx) => (
                      <Card key={idx} className="bg-zinc-900/50 border-zinc-700 hover:border-[#D4AF37]/50 transition-all">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-5 h-5 text-[#D4AF37]" />
                            </div>
                            <div>
                              <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                              <p className="text-white/60 text-sm">{item.desc}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                    <div className="flex gap-3">
                      <Shield className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-yellow-400 font-semibold mb-2">⚠️ Atalhos Úteis</h4>
                        <div className="grid md:grid-cols-2 gap-2 text-white/80 text-sm">
                          <div><kbd className="bg-zinc-800 px-2 py-1 rounded">ALT+E</kbd> - Inventário</div>
                          <div><kbd className="bg-zinc-800 px-2 py-1 rounded">ALT+S</kbd> - Skills</div>
                          <div><kbd className="bg-zinc-800 px-2 py-1 rounded">ALT+Q</kbd> - Equipamentos</div>
                          <div><kbd className="bg-zinc-800 px-2 py-1 rounded">ALT+V</kbd> - Atributos</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Seção 3: Primeiras Missões */}
                <section id="section-2" className="mb-12">
                  <h2 className="text-3xl text-[#D4AF37] uppercase tracking-wide mb-6 flex items-center gap-3">
                    <Map className="w-8 h-8" />
                    3. Primeiras Missões
                  </h2>
                  <Separator className="bg-zinc-700 mb-6" />
                  
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    Após criar seu personagem, você aparecerá na <span className="text-cyan-400 font-semibold">Academia de Iniciantes</span>. Este é um local seguro onde você aprenderá o básico do jogo.
                  </p>

                  <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 mb-6">
                    <CardContent className="p-6">
                      <h3 className="text-xl text-cyan-400 font-semibold mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5" />
                        Missões Recomendadas para Iniciantes
                      </h3>
                      <ul className="space-y-3">
                        {[
                          { quest: 'Tutorial Básico', reward: '5.000 Zeny + Pots', level: 'Nv 1+' },
                          { quest: 'Conhecendo Prontera', reward: '10.000 Zeny', level: 'Nv 5+' },
                          { quest: 'Primeira Caçada', reward: 'Equipamentos Iniciais', level: 'Nv 10+' },
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                            <span className="text-white/90">{item.quest}</span>
                            <div className="flex gap-3 text-sm">
                              <Badge variant="outline" className="border-green-500/40 text-green-400">
                                {item.reward}
                              </Badge>
                              <Badge variant="outline" className="border-blue-500/40 text-blue-400">
                                {item.level}
                              </Badge>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Seção 4: Sistema de Classes */}
                <section id="section-3" className="mb-12">
                  <h2 className="text-3xl text-[#D4AF37] uppercase tracking-wide mb-6 flex items-center gap-3">
                    <Sword className="w-8 h-8" />
                    4. Sistema de Classes
                  </h2>
                  <Separator className="bg-zinc-700 mb-6" />
                  
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    Ao atingir o <span className="text-orange-400 font-semibold">nível 10</span> como Noviço, você poderá escolher sua primeira classe. Esta é uma das decisões mais importantes do jogo!
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { 
                        class: 'Espadachim',
                        color: 'from-red-600 to-orange-600',
                        desc: 'Alta defesa e dano físico próximo',
                        best: 'Tank, DPS corpo-a-corpo'
                      },
                      { 
                        class: 'Mago',
                        color: 'from-blue-600 to-cyan-600',
                        desc: 'Poderosas magias de área',
                        best: 'DPS mágico, Support'
                      },
                      { 
                        class: 'Arqueiro',
                        color: 'from-green-600 to-emerald-600',
                        desc: 'Dano de longa distância',
                        best: 'DPS ranged, Farming'
                      },
                    ].map((item, idx) => (
                      <Card key={idx} className="bg-zinc-900/50 border-zinc-700 hover:border-[#D4AF37]/50 transition-all overflow-hidden">
                        <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                        <CardContent className="p-5">
                          <h3 className="text-xl text-white font-semibold mb-2">{item.class}</h3>
                          <p className="text-white/60 text-sm mb-3">{item.desc}</p>
                          <div className="pt-3 border-t border-zinc-700">
                            <p className="text-xs text-white/50 mb-1">Melhor para:</p>
                            <p className="text-sm text-[#D4AF37]">{item.best}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Stats e Info do Artigo */}
                <div className="mt-12 pt-8 border-t border-zinc-700">
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <Card className="bg-zinc-900 border-zinc-800">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                          <Eye className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-white/50 text-sm">Visualizações</p>
                          <p className="text-white font-bold text-xl">12.547</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-zinc-900 border-zinc-800">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                          <Heart className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <p className="text-white/50 text-sm">Curtidas</p>
                          <p className="text-white font-bold text-xl">1.823</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-zinc-900 border-zinc-800">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                          <Share2 className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-white/50 text-sm">Compartilhamentos</p>
                          <p className="text-white font-bold text-xl">342</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-zinc-900 border-zinc-800 mb-6">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Star className="w-5 h-5 text-[#D4AF37]" />
                        <h4 className="text-white font-bold text-lg">Informações do Artigo</h4>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-white/70">
                          <Calendar className="w-4 h-4 text-[#D4AF37]" />
                          <span>Publicado: 05 Nov 2024</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <Clock className="w-4 h-4 text-[#D4AF37]" />
                          <span>Atualizado: 06 Nov 2024</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <User className="w-4 h-4 text-[#D4AF37]" />
                          <span>Autor: Admin (258 pontos)</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <Tag className="w-4 h-4 text-[#D4AF37]" />
                          <span>Categoria: Guias para Iniciantes</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                
                  <Card className="bg-gradient-to-br from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent border-2 border-[#D4AF37]/50 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsIDE3NSwgNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
                    <CardContent className="p-6 md:p-8 relative">
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
                            <Gift className="w-8 h-8 text-black" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                              Quer contribuir para a comunidade?
                            </h3>
                            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] animate-pulse" />
                          </div>
                          <p className="text-white/80 mb-4 text-base md:text-lg">
                            Ganhe <span className="text-[#D4AF37] font-bold">10 pontos</span> por cada artigo aprovado! Escreva guias, builds, tutoriais e ajude outros jogadores. Troque pontos por prêmios exclusivos.
                          </p>
                          <Button className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/20">
                            Saiba Mais
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

              </CardContent>
            </Card>


          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 lg:sticky lg:top-4 lg:self-start"
          >
            {/* Artigos Relacionados */}
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Book className="w-5 h-5 text-[#D4AF37]" />
                  Artigos Relacionados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Guia de Atributos',
                    'Melhores Builds Iniciantes',
                    'Como Ganhar Zeny',
                    'Áreas de Level 1-50',
                    'Dicas de PvP'
                  ].map((article, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-white/80 hover:text-[#D4AF37] transition-colors text-sm flex items-center gap-2 group">
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-[#D4AF37]/20 to-transparent border-2 border-[#D4AF37]/50">
              <CardContent className="p-6 text-center">
                <Coins className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Precisa de ajuda?</h3>
                <p className="text-white/60 text-sm mb-4">
                  Entre no nosso Discord para tirar dúvidas!
                </p>
                <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black">
                  Entrar no Discord
                </Button>
              </CardContent>
            </Card>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
