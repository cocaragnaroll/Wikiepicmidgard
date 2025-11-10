import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Map, 
  Plus, 
  X, 
  Save,
  Eye,
  MapPin,
  Coins,
  Users,
  Target,
  Clock
} from 'lucide-react';

interface CreateGuiaPageProps {
  onBack: () => void;
}

export default function CreateGuiaPage({ onBack }: CreateGuiaPageProps) {
  const [guiaName, setGuiaName] = useState('');
  const [location, setLocation] = useState('');
  const [levelRange, setLevelRange] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [farmItems, setFarmItems] = useState<Array<{ id: string; name: string; dropRate: string }>>([]);
  const [tips, setTips] = useState('');
  const [zenyPerHour, setZenyPerHour] = useState('');
  const [expPerHour, setExpPerHour] = useState('');

  const levelRanges = [
    'Lv 1-30', 'Lv 30-50', 'Lv 50-70', 'Lv 70-85', 
    'Lv 85-95', 'Lv 95+', 'Todos os níveis'
  ];

  const locations = [
    'Prontera', 'Geffen', 'Morocc', 'Payon', 'Alberta', 'Izlude',
    'Clock Tower', 'Glast Heim', 'Orc Dungeon', 'Ant Hell',
    'Sphinx', 'Toy Factory', 'Abyss Lake', 'Thanatos Tower',
    'Juperos', 'Rachel', 'Veins', 'Magma Dungeon', 'Outros'
  ];

  const addFarmItem = () => {
    setFarmItems([...farmItems, { id: '', name: '', dropRate: '' }]);
  };

  const removeFarmItem = (index: number) => {
    setFarmItems(farmItems.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log('Guia submitted:', {
      guiaName,
      location,
      levelRange,
      description,
      requirements,
      farmItems,
      tips,
      zenyPerHour,
      expPerHour,
    });
    // Aqui seria enviado para o backend
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
          
          <div className="flex items-center gap-4 mb-2">
            <Map className="w-12 h-12 text-[#D4AF37]" />
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wide">
              Criar <span className="text-[#D4AF37]">Guia de Caça</span>
            </h1>
          </div>
          <p className="text-white/60 text-lg mt-2">
            Compartilhe seu spot de farm favorito • Ganhe 10 pontos ao ser aprovado
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="space-y-6">
          {/* Informações Básicas */}
          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Informações do Guia</CardTitle>
              <CardDescription className="text-white/60">
                Preencha as informações sobre o local de caça
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="guiaName" className="text-white">Nome do Guia *</Label>
                <Input
                  id="guiaName"
                  placeholder="Ex: Farm em Clock Tower - Alarm"
                  value={guiaName}
                  onChange={(e) => setGuiaName(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    Localização *
                  </Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                      <SelectValue placeholder="Selecione a localização" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-700">
                      {locations.map((loc) => (
                        <SelectItem key={loc} value={loc} className="text-white focus:bg-zinc-800 focus:text-[#D4AF37]">
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="levelRange" className="text-white flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#D4AF37]" />
                    Nível Recomendado *
                  </Label>
                  <Select value={levelRange} onValueChange={setLevelRange}>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                      <SelectValue placeholder="Selecione o nível" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-700">
                      {levelRanges.map((range) => (
                        <SelectItem key={range} value={range} className="text-white focus:bg-zinc-800 focus:text-[#D4AF37]">
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-white">Descrição do Local *</Label>
                <Textarea
                  id="description"
                  placeholder="Descreva o local, os monstros, dificuldade, classes recomendadas..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 min-h-[150px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements" className="text-white">Requisitos</Label>
                <Textarea
                  id="requirements"
                  placeholder="Equipamentos recomendados, stats mínimos, skills necessárias..."
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Ganhos */}
          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Ganhos Estimados</CardTitle>
              <CardDescription className="text-white/60">
                Informações sobre exp e zeny por hora
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="zenyPerHour" className="text-white flex items-center gap-2">
                    <Coins className="w-4 h-4 text-[#D4AF37]" />
                    Zeny por Hora
                  </Label>
                  <Input
                    id="zenyPerHour"
                    placeholder="Ex: 500.000z"
                    value={zenyPerHour}
                    onChange={(e) => setZenyPerHour(e.target.value)}
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expPerHour" className="text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    EXP por Hora
                  </Label>
                  <Input
                    id="expPerHour"
                    placeholder="Ex: 2.000.000 exp"
                    value={expPerHour}
                    onChange={(e) => setExpPerHour(e.target.value)}
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Itens de Farm */}
          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Itens de Farm</CardTitle>
              <CardDescription className="text-white/60">
                Principais itens que podem ser farmados no local
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {farmItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-end gap-4"
                >
                  <div className="flex-1 grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label className="text-white">ID do Item</Label>
                      <Input
                        placeholder="Ex: 25261"
                        value={item.id}
                        onChange={(e) => {
                          const newItems = [...farmItems];
                          newItems[index].id = e.target.value;
                          setFarmItems(newItems);
                        }}
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Nome do Item</Label>
                      <Input
                        placeholder="Ex: Carta Alarm"
                        value={item.name}
                        onChange={(e) => {
                          const newItems = [...farmItems];
                          newItems[index].name = e.target.value;
                          setFarmItems(newItems);
                        }}
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Drop Rate</Label>
                      <Input
                        placeholder="Ex: 0.01%"
                        value={item.dropRate}
                        onChange={(e) => {
                          const newItems = [...farmItems];
                          newItems[index].dropRate = e.target.value;
                          setFarmItems(newItems);
                        }}
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                      />
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeFarmItem(index)}
                    className="border-red-500/40 text-red-400 hover:bg-red-500/10"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </motion.div>
              ))}

              <Button
                onClick={addFarmItem}
                variant="outline"
                className="w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-bold"
              >
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Item
              </Button>
            </CardContent>
          </Card>

          {/* Dicas */}
          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Dicas e Estratégias</CardTitle>
              <CardDescription className="text-white/60">
                Compartilhe suas melhores dicas para farmar neste local
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                id="tips"
                placeholder="Melhor horário para farmar, técnicas de ataque, como evitar PKs, melhores rotas..."
                value={tips}
                onChange={(e) => setTips(e.target.value)}
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 min-h-[150px]"
              />
            </CardContent>
          </Card>

          {/* Footer Actions */}
          <div className="flex gap-4 justify-end">
            <Button
              variant="outline"
              size="lg"
              className="border-zinc-700 text-white hover:bg-zinc-800 font-bold"
            >
              <Eye className="w-5 h-5 mr-2" />
              Pré-visualizar
            </Button>
            <Button
              onClick={handleSubmit}
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black font-bold px-8"
            >
              <Save className="w-5 h-5 mr-2" />
              Enviar para Aprovação
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
