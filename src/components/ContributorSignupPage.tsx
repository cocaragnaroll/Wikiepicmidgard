import { motion } from 'motion/react';
import { ArrowLeft, User, Mail, Lock, Trophy, Star, FileText, Shield, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { useState } from 'react';

interface ContributorSignupPageProps {
  onBack: () => void;
}

export default function ContributorSignupPage({ onBack }: ContributorSignupPageProps) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/20 via-black/50 to-black z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-20 h-full flex flex-col justify-center max-w-4xl mx-auto px-4">
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
            <div className="flex items-center gap-4 mb-4">
              <Trophy className="w-10 h-10 text-[#D4AF37]" />
              <h1 className="text-5xl font-black text-white uppercase tracking-tight">
                Seja um <span className="text-[#D4AF37]">Contribuidor</span>
              </h1>
            </div>
            <p className="text-white/60 text-lg">
              Ajude a construir a melhor wiki de Ragnarok Online e ganhe recompensas!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Benefits */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-[#D4AF37]">
              <CardHeader>
                <CardTitle className="text-[#D4AF37] uppercase text-lg">
                  ⭐ Benefícios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    icon: Star,
                    title: '10 Pontos',
                    desc: 'Por artigo aprovado',
                    color: 'text-yellow-400'
                  },
                  {
                    icon: Trophy,
                    title: 'Rankings',
                    desc: 'Apareça no top contribuidores',
                    color: 'text-orange-400'
                  },
                  {
                    icon: Shield,
                    title: 'Badges',
                    desc: 'Badges exclusivos de reconhecimento',
                    color: 'text-blue-400'
                  },
                  {
                    icon: FileText,
                    title: 'Perfil',
                    desc: 'Perfil personalizado na wiki',
                    color: 'text-purple-400'
                  },
                  {
                    icon: MessageCircle,
                    title: 'Tag Discord',
                    desc: 'Tag exclusiva de Contribuidor no Discord',
                    color: 'text-indigo-400'
                  },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-zinc-800/30 rounded-lg border border-zinc-700">
                    <benefit.icon className={`w-5 h-5 ${benefit.color} mt-0.5 shrink-0`} />
                    <div>
                      <p className="text-white font-bold text-sm">{benefit.title}</p>
                      <p className="text-white/60 text-xs">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white uppercase text-sm">
                  📝 O que você pode criar?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80 text-sm">
                  {[
                    'Builds de classes',
                    'Guias de farm',
                    'Guias de quests',
                    'Análises de equipamentos',
                    'Estratégias de PvP/WoE',
                    'Tutoriais para iniciantes',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white uppercase text-2xl">
                    Formulário de Cadastro
                  </CardTitle>
                  <CardDescription>
                    Preencha os dados abaixo para se tornar um contribuidor
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    {/* Nome de Usuário */}
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-white flex items-center gap-2">
                        <User className="w-4 h-4 text-[#D4AF37]" />
                        Nome de Usuário
                      </Label>
                      <Input
                        id="username"
                        placeholder="Seu nickname na wiki"
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 focus:border-[#D4AF37]"
                      />
                      <p className="text-white/40 text-xs">
                        Este será seu nome exibido em todos os artigos
                      </p>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#D4AF37]" />
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 focus:border-[#D4AF37]"
                      />
                    </div>

                    {/* Senha */}
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white flex items-center gap-2">
                        <Lock className="w-4 h-4 text-[#D4AF37]" />
                        Senha
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 focus:border-[#D4AF37]"
                      />
                    </div>

                    {/* Confirmar Senha */}
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="text-white flex items-center gap-2">
                        <Lock className="w-4 h-4 text-[#D4AF37]" />
                        Confirmar Senha
                      </Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="••••••••"
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 focus:border-[#D4AF37]"
                      />
                    </div>

                    {/* Personagem Principal */}
                    <div className="space-y-2">
                      <Label htmlFor="character" className="text-white">
                        Personagem Principal (Opcional)
                      </Label>
                      <Input
                        id="character"
                        placeholder="Nome do seu personagem no servidor"
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 focus:border-[#D4AF37]"
                      />
                    </div>

                    {/* Especialidade */}
                    <div className="space-y-2">
                      <Label htmlFor="specialty" className="text-white">
                        Área de Especialidade
                      </Label>
                      <Textarea
                        id="specialty"
                        placeholder="Ex: Sou especialista em builds de PvP, principalmente Lord Knight e Sniper..."
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 focus:border-[#D4AF37] min-h-[100px]"
                      />
                    </div>

                    {/* Discord (Opcional) */}
                    <div className="space-y-2">
                      <Label htmlFor="discord" className="text-white">
                        Discord (Opcional)
                      </Label>
                      <Input
                        id="discord"
                        placeholder="usuario#1234"
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 focus:border-[#D4AF37]"
                      />
                      <p className="text-white/40 text-xs">
                        Para comunicação com a equipe administrativa
                      </p>
                    </div>

                    {/* Avisos */}
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                        <div className="text-sm text-white/80 space-y-2">
                          <p className="font-semibold text-white">📋 Regras para Contribuidores:</p>
                          <ul className="space-y-1 text-xs">
                            <li>• Todo conteúdo será revisado por um administrador antes da publicação</li>
                            <li>• Você receberá 10 pontos por cada artigo aprovado</li>
                            <li>• Conteúdo copiado ou plágio resultará em banimento</li>
                            <li>• Mantenha o respeito e qualidade nos artigos</li>
                            <li>• Você pode editar seus próprios artigos após aprovação</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-3 p-4 bg-zinc-800/50 rounded-xl">
                      <Checkbox 
                        id="terms" 
                        checked={agreed}
                        onCheckedChange={(checked) => setAgreed(checked as boolean)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <label
                          htmlFor="terms"
                          className="text-sm text-white/80 cursor-pointer leading-relaxed"
                        >
                          Concordo com as{' '}
                          <a href="#" className="text-[#D4AF37] hover:underline">
                            Regras da Wiki
                          </a>
                          {' '}e{' '}
                          <a href="#" className="text-[#D4AF37] hover:underline">
                            Termos de Uso
                          </a>
                          . Entendo que meu conteúdo será moderado e que devo seguir as diretrizes da comunidade.
                        </label>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="flex gap-3">
                      <Button
                        type="submit"
                        disabled={!agreed}
                        className="flex-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black font-bold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Trophy className="w-4 h-4 mr-2" />
                        Criar Conta de Contribuidor
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={onBack}
                        className="border-zinc-700 text-white hover:bg-zinc-800"
                      >
                        Cancelar
                      </Button>
                    </div>

                    <p className="text-center text-white/40 text-sm">
                      Já tem uma conta?{' '}
                      <a href="#" className="text-[#D4AF37] hover:underline font-semibold">
                        Faça login aqui
                      </a>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
