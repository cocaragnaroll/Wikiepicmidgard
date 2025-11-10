import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  Target, 
  Zap, 
  Shield, 
  Sword, 
  Crown, 
  Plus, 
  X, 
  Search,
  Save,
  Eye,
  Upload,
  Sparkles,
  Star,
  Shirt,
  Footprints,
  Hand,
  BookOpen
} from 'lucide-react';

interface CreateBuildPageProps {
  onBack: () => void;
}

export default function CreateBuildPage({ onBack }: CreateBuildPageProps) {
  const [buildName, setBuildName] = useState('');
  const [buildClass, setBuildClass] = useState('');
  const [buildType, setBuildType] = useState('');
  const [description, setDescription] = useState('');
  
  // Status
  const [stats, setStats] = useState({
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
  });

  // Base Stats
  const [baseStats, setBaseStats] = useState({
    hp: 0,
    sp: 0,
    atk: 0,
    matk: 0,
    def: 0,
    mdef: 0,
    hit: 0,
    flee: 0,
    crit: 0,
    aspd: 0,
  });

  // Equipamentos
  const [equipment, setEquipment] = useState({
    topHead: { id: '', name: '', cards: ['', '', '', ''] },
    midHead: { id: '', name: '', cards: [''] },
    lowHead: { id: '', name: '', cards: [''] },
    armor: { id: '', name: '', cards: [''] },
    weapon: { id: '', name: '', cards: ['', '', '', ''] },
    shield: { id: '', name: '', cards: [''] },
    garment: { id: '', name: '', cards: [''] },
    shoes: { id: '', name: '', cards: [''] },
    accessory1: { id: '', name: '', cards: [''] },
    accessory2: { id: '', name: '', cards: [''] },
  });

  // Skills
  const [skills, setSkills] = useState<Array<{ name: string; level: number }>>([]);

  // Base URL para as imagens do GitHub
  const IMG_BASE = 'https://raw.githubusercontent.com/cocaragnaroll/img/main';
  const [attempts, setAttempts] = useState<Record<string, number>>({});

  const ItemIcon = ({ id, size = "w-12 h-12" }: { id: string; size?: string }) => {
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

  const classes = [
    'Swordman', 'Mage', 'Archer', 'Acolyte', 'Merchant', 'Thief',
    'Knight', 'Priest', 'Wizard', 'Blacksmith', 'Hunter', 'Assassin',
    'Lord Knight', 'High Priest', 'High Wizard', 'Whitesmith', 'Sniper', 'Assassin Cross',
    'Crusader', 'Monk', 'Sage', 'Rogue', 'Alchemist', 'Bard', 'Dancer',
    'Paladin', 'Champion', 'Professor', 'Stalker', 'Creator', 'Clown', 'Gypsy'
  ];

  const buildTypes = [
    'PvM - Farm', 'PvM - MVP', 'PvP', 'WoE', 'Suporte', 'Híbrido', 'Iniciante'
  ];

  const equipmentSlots = [
    { key: 'topHead', label: 'Cabeça (Topo)', icon: Crown, cardSlots: 1 },
    { key: 'midHead', label: 'Cabeça (Meio)', icon: Crown, cardSlots: 1 },
    { key: 'lowHead', label: 'Cabeça (Baixo)', icon: Crown, cardSlots: 1 },
    { key: 'armor', label: 'Armadura', icon: Shield, cardSlots: 1 },
    { key: 'weapon', label: 'Arma', icon: Sword, cardSlots: 4 },
    { key: 'shield', label: 'Escudo', icon: Shield, cardSlots: 1 },
    { key: 'garment', label: 'Capa', icon: Shirt, cardSlots: 1 },
    { key: 'shoes', label: 'Sapatos', icon: Footprints, cardSlots: 1 },
    { key: 'accessory1', label: 'Acessório 1', icon: Star, cardSlots: 1 },
    { key: 'accessory2', label: 'Acessório 2', icon: Star, cardSlots: 1 },
  ];

  const handleStatChange = (stat: string, value: number) => {
    setStats({ ...stats, [stat]: value });
  };

  const handleBaseStatChange = (stat: string, value: number) => {
    setBaseStats({ ...baseStats, [stat]: value });
  };

  const addSkill = () => {
    setSkills([...skills, { name: '', level: 1 }]);
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log('Build submitted:', {
      buildName,
      buildClass,
      buildType,
      description,
      stats,
      baseStats,
      equipment,
      skills,
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
            <Target className="w-12 h-12 text-[#D4AF37]" />
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wide">
              Criar <span className="text-[#D4AF37]">Build</span>
            </h1>
          </div>
          <p className="text-white/60 text-lg mt-2">
            Compartilhe sua build com a comunidade • Ganhe 10 pontos ao ser aprovado
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="bg-zinc-900 border-2 border-zinc-800 p-2 mb-8 grid w-full grid-cols-4">
            <TabsTrigger 
              value="info" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Info
            </TabsTrigger>
            <TabsTrigger 
              value="stats" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold"
            >
              <Zap className="w-4 h-4 mr-2" />
              Status
            </TabsTrigger>
            <TabsTrigger 
              value="equipment" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold"
            >
              <Shield className="w-4 h-4 mr-2" />
              Equipamentos
            </TabsTrigger>
            <TabsTrigger 
              value="skills" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Skills
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: Informações Básicas */}
          <TabsContent value="info">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Informações da Build</CardTitle>
                  <CardDescription className="text-white/60">
                    Preencha as informações básicas da sua build
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="buildName" className="text-white">Nome da Build *</Label>
                    <Input
                      id="buildName"
                      placeholder="Ex: Lord Knight - DPS Crítico"
                      value={buildName}
                      onChange={(e) => setBuildName(e.target.value)}
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="buildClass" className="text-white">Classe *</Label>
                      <Select value={buildClass} onValueChange={setBuildClass}>
                        <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                          <SelectValue placeholder="Selecione a classe" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-900 border-zinc-700">
                          {classes.map((cls) => (
                            <SelectItem key={cls} value={cls} className="text-white focus:bg-zinc-800 focus:text-[#D4AF37]">
                              {cls}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="buildType" className="text-white">Tipo de Build *</Label>
                      <Select value={buildType} onValueChange={setBuildType}>
                        <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-900 border-zinc-700">
                          {buildTypes.map((type) => (
                            <SelectItem key={type} value={type} className="text-white focus:bg-zinc-800 focus:text-[#D4AF37]">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-white">Descrição *</Label>
                    <Textarea
                      id="description"
                      placeholder="Descreva sua build, suas vantagens, onde usar, dicas de gameplay..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 min-h-[200px]"
                    />
                    <p className="text-xs text-white/40">
                      Mínimo 100 caracteres. Seja detalhado para ajudar outros jogadores!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Tab 2: Status */}
          <TabsContent value="stats">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Status de Atributos */}
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Status de Atributos</CardTitle>
                  <CardDescription className="text-white/60">
                    Defina a distribuição de status
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(stats).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor={key} className="text-white uppercase font-bold text-sm">
                          {key.toUpperCase()}
                        </Label>
                        <span className="text-[#D4AF37] font-bold text-lg">{value}</span>
                      </div>
                      <Input
                        id={key}
                        type="number"
                        min="0"
                        max="999"
                        value={value}
                        onChange={(e) => handleStatChange(key, parseInt(e.target.value) || 0)}
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                  ))}
                  <div className="pt-4 border-t border-zinc-800">
                    <div className="flex items-center justify-between text-white">
                      <span className="font-bold">Total de Pontos:</span>
                      <span className="text-2xl text-[#D4AF37] font-black">
                        {Object.values(stats).reduce((a, b) => a + b, 0)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Status Base */}
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Status Base</CardTitle>
                  <CardDescription className="text-white/60">
                    Estatísticas finais da build
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(baseStats).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor={`base-${key}`} className="text-white uppercase font-bold text-sm">
                          {key.toUpperCase()}
                        </Label>
                        <span className="text-[#D4AF37] font-bold text-lg">{value}</span>
                      </div>
                      <Input
                        id={`base-${key}`}
                        type="number"
                        min="0"
                        value={value}
                        onChange={(e) => handleBaseStatChange(key, parseInt(e.target.value) || 0)}
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Tab 3: Equipamentos */}
          <TabsContent value="equipment">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Equipamentos</CardTitle>
                  <CardDescription className="text-white/60">
                    Configure todos os equipamentos e cartas da build
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {equipmentSlots.map((slot) => {
                    const SlotIcon = slot.icon;
                    return (
                      <div key={slot.key} className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center">
                            <SlotIcon className="w-6 h-6 text-black" />
                          </div>
                          <div className="flex-1">
                            <Label className="text-white font-bold text-lg">{slot.label}</Label>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 pl-15">
                          <div className="space-y-2">
                            <Label className="text-white/60 text-sm">ID do Item</Label>
                            <Input
                              placeholder="Ex: 25158"
                              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-white/60 text-sm">Nome do Item</Label>
                            <Input
                              placeholder="Ex: Excalibur"
                              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                            />
                          </div>
                        </div>

                        {/* Cards */}
                        <div className="pl-15 space-y-2">
                          <Label className="text-white/60 text-sm">Cartas</Label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {Array.from({ length: slot.cardSlots }).map((_, idx) => (
                              <div key={idx} className="space-y-1">
                                <Input
                                  placeholder={`Carta ${idx + 1}`}
                                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 text-sm"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        <Separator className="bg-zinc-800" />
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Tab 4: Skills */}
          <TabsContent value="skills">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Skills</CardTitle>
                  <CardDescription className="text-white/60">
                    Adicione as skills e seus níveis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-end gap-4"
                    >
                      <div className="flex-1 space-y-2">
                        <Label className="text-white">Nome da Skill</Label>
                        <Input
                          placeholder="Ex: Bash, Magnum Break..."
                          value={skill.name}
                          onChange={(e) => {
                            const newSkills = [...skills];
                            newSkills[index].name = e.target.value;
                            setSkills(newSkills);
                          }}
                          className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                        />
                      </div>
                      <div className="w-24 space-y-2">
                        <Label className="text-white">Nível</Label>
                        <Input
                          type="number"
                          min="1"
                          max="10"
                          value={skill.level}
                          onChange={(e) => {
                            const newSkills = [...skills];
                            newSkills[index].level = parseInt(e.target.value) || 1;
                            setSkills(newSkills);
                          }}
                          className="bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => removeSkill(index)}
                        className="border-red-500/40 text-red-400 hover:bg-red-500/10"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  ))}

                  <Button
                    onClick={addSkill}
                    variant="outline"
                    className="w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-bold"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar Skill
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Footer Actions */}
        <div className="flex gap-4 mt-8 justify-end">
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
  );
}
