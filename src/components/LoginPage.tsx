import { motion } from 'motion/react';
import { ArrowLeft, Mail, Lock, LogIn, UserPlus, Shield, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Separator } from './ui/separator';

interface LoginPageProps {
  onBack: () => void;
  onSignup: () => void;
}

export default function LoginPage({ onBack, onSignup }: LoginPageProps) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=2074')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-8 text-white hover:text-[#D4AF37] hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para Wiki
        </Button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center">
                    <LogIn className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <CardTitle className="text-white uppercase text-2xl">Login</CardTitle>
                    <CardDescription>Entre na sua conta de contribuidor</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="text-white flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#D4AF37]" />
                      E-mail
                    </Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 focus:border-[#D4AF37] h-12"
                    />
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="login-password" className="text-white flex items-center gap-2">
                      <Lock className="w-4 h-4 text-[#D4AF37]" />
                      Senha
                    </Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 focus:border-[#D4AF37] h-12"
                    />
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <label
                        htmlFor="remember"
                        className="text-sm text-white/80 cursor-pointer"
                      >
                        Lembrar de mim
                      </label>
                    </div>
                    <a href="#" className="text-sm text-[#D4AF37] hover:underline">
                      Esqueceu a senha?
                    </a>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-black font-bold hover:opacity-90 h-12"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Entrar
                  </Button>

                  <Separator className="bg-zinc-800" />

                  {/* Sign Up Link */}
                  <div className="text-center space-y-3">
                    <p className="text-white/60 text-sm">Ainda não tem uma conta?</p>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onSignup}
                      className="w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 h-12"
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      Criar Conta de Contribuidor
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Welcome Message */}
            <Card className="bg-gradient-to-br from-[#D4AF37]/20 to-transparent border-2 border-[#D4AF37]/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="w-12 h-12 text-[#D4AF37]" />
                  <div>
                    <h2 className="text-white text-2xl font-black mb-2 uppercase">
                      Bem-vindo à Wiki EpicMidgard
                    </h2>
                    <p className="text-white/80">
                      Faça login para acessar todas as funcionalidades de contribuidor e ajude a construir a melhor wiki de Ragnarok Online!
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      icon: Star,
                      text: 'Ganhe 10 pontos por cada artigo aprovado',
                      color: 'text-yellow-400'
                    },
                    {
                      icon: Shield,
                      text: 'Suba no ranking de contribuidores',
                      color: 'text-blue-400'
                    },
                    {
                      icon: UserPlus,
                      text: 'Perfil personalizado e badges exclusivos',
                      color: 'text-purple-400'
                    },
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <benefit.icon className={`w-5 h-5 ${benefit.color} mt-0.5 shrink-0`} />
                      <p className="text-white/90">{benefit.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-black text-[#D4AF37] mb-2">250+</div>
                  <p className="text-white/60 text-sm">Contribuidores Ativos</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-black text-[#D4AF37] mb-2">1.5k+</div>
                  <p className="text-white/60 text-sm">Artigos Publicados</p>
                </CardContent>
              </Card>
            </div>

            {/* Top Contributors Preview */}
            <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white uppercase text-sm flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#D4AF37]" />
                  Top Contribuidores Esta Semana
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { rank: 1, name: 'WikiMaster', points: 2850, badge: '👑' },
                    { rank: 2, name: 'ProGuider', points: 2340, badge: '⭐' },
                    { rank: 3, name: 'ContentKing', points: 1980, badge: '🎯' },
                  ].map((contributor) => (
                    <div
                      key={contributor.rank}
                      className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-white font-bold">
                          #{contributor.rank}
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm flex items-center gap-2">
                            {contributor.name}
                            <span>{contributor.badge}</span>
                          </p>
                          <p className="text-white/40 text-xs">{contributor.points} pontos</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Admin Login Note */}
            <Card className="bg-gradient-to-br from-blue-900/20 to-transparent border-2 border-blue-500/30">
              <CardContent className="p-4">
                <p className="text-white/60 text-sm text-center">
                  <Shield className="w-4 h-4 inline mr-1 text-blue-400" />
                  Administradores: Use suas credenciais especiais para acesso total
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
