import { useState } from 'react';
import { motion } from 'motion/react';
import { Save, Eye, Trash2, Plus, FileText, Star, Sparkles, X, Zap, Bug, Trophy, Wrench, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import RichTextEditor from './RichTextEditor';

interface ChangeItem {
  id: string;
  text: string;
  type: 'new' | 'fix' | 'change' | 'balance';
}

export default function PatchNotesEditor() {
  const [version, setVersion] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [changes, setChanges] = useState<ChangeItem[]>([]);
  const [changeInput, setChangeInput] = useState('');
  const [changeType, setChangeType] = useState<'new' | 'fix' | 'change' | 'balance'>('new');
  const [detailedContent, setDetailedContent] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [highlights, setHighlights] = useState<string[]>([]);
  const [highlightInput, setHighlightInput] = useState('');

  const changeTypes = [
    { id: 'new', name: 'Novo', icon: Sparkles, color: 'text-green-400', bgColor: 'bg-green-500/20', borderColor: 'border-green-500/40' },
    { id: 'fix', name: 'Correção', icon: Bug, color: 'text-blue-400', bgColor: 'bg-blue-500/20', borderColor: 'border-blue-500/40' },
    { id: 'change', name: 'Mudança', icon: Wrench, color: 'text-yellow-400', bgColor: 'bg-yellow-500/20', borderColor: 'border-yellow-500/40' },
    { id: 'balance', name: 'Balanceamento', icon: Trophy, color: 'text-purple-400', bgColor: 'bg-purple-500/20', borderColor: 'border-purple-500/40' },
  ];

  const handleAddChange = () => {
    if (changeInput.trim()) {
      setChanges([...changes, {
        id: Date.now().toString(),
        text: changeInput.trim(),
        type: changeType
      }]);
      setChangeInput('');
    }
  };

  const handleRemoveChange = (id: string) => {
    setChanges(changes.filter(change => change.id !== id));
  };

  const handleAddHighlight = () => {
    if (highlightInput.trim() && !highlights.includes(highlightInput.trim())) {
      setHighlights([...highlights, highlightInput.trim()]);
      setHighlightInput('');
    }
  };

  const handleRemoveHighlight = (highlightToRemove: string) => {
    setHighlights(highlights.filter(h => h !== highlightToRemove));
  };

  const handleSave = () => {
    const patchNote = {
      version,
      title,
      date,
      changes,
      highlights,
      isFeatured,
      isPublished,
      imageUrl,
      createdAt: new Date().toISOString(),
    };
    console.log('Patch Notes salvo:', patchNote);
    // Aqui seria a lógica de salvar no backend
  };

  const getChangeTypeInfo = (type: string) => {
    return changeTypes.find(t => t.id === type) || changeTypes[0];
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white uppercase">
            <FileText className="w-8 h-8 text-[#D4AF37] inline mr-3" />
            Editor de Patch Notes
          </h2>
          <p className="text-white/60 mt-2">
            Crie e publique as atualizações do servidor
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-blue-500/40 text-blue-400 hover:bg-blue-500/10"
          >
            <Eye className="w-4 h-4 mr-2" />
            Pré-visualizar
          </Button>
          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white"
          >
            <Save className="w-4 h-4 mr-2" />
            Salvar Patch Notes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="content" className="w-full">
        <TabsList className="bg-zinc-900 border-2 border-zinc-800 p-2 grid w-full grid-cols-3">
          <TabsTrigger 
            value="content" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold"
          >
            Conteúdo
          </TabsTrigger>
          <TabsTrigger 
            value="changes" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold"
          >
            Mudanças
          </TabsTrigger>
          <TabsTrigger 
            value="settings" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold"
          >
            Configurações
          </TabsTrigger>
        </TabsList>

        {/* Tab: Conteúdo */}
        <TabsContent value="content" className="space-y-6">
          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Informações da Atualização</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-white">Versão *</Label>
                  <Input
                    value={version}
                    onChange={(e) => setVersion(e.target.value)}
                    placeholder="Ex: 12.5"
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Data de Lançamento *</Label>
                  <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white">Título da Atualização *</Label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Grande Atualização de Sistema PvP"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-white">URL da Imagem de Capa</Label>
                <Input
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://exemplo.com/imagem.jpg"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                />
              </div>

              {imageUrl && (
                <div className="relative rounded-lg overflow-hidden border-2 border-zinc-700">
                  <img 
                    src={imageUrl} 
                    alt="Preview" 
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070';
                    }}
                  />
                  <Button
                    onClick={() => setImageUrl('')}
                    variant="ghost"
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}

              <div className="space-y-2">
                <Label className="text-white">Destaques Principais</Label>
                <div className="flex gap-2">
                  <Input
                    value={highlightInput}
                    onChange={(e) => setHighlightInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddHighlight())}
                    placeholder="Adicionar destaque principal..."
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                  />
                  <Button
                    onClick={handleAddHighlight}
                    variant="outline"
                    className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-white/40 text-xs">
                  Destaques aparecem em cards especiais no topo das patch notes
                </p>
                <div className="space-y-2 mt-3">
                  {highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 bg-[#D4AF37]/10 rounded-lg border border-[#D4AF37]/30">
                      <Zap className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" />
                      <span className="text-white flex-1">{highlight}</span>
                      <button
                        onClick={() => handleRemoveHighlight(highlight)}
                        className="text-white/60 hover:text-red-400 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white">Descrição Detalhada (Opcional)</Label>
                <RichTextEditor
                  value={detailedContent}
                  onChange={setDetailedContent}
                  placeholder="Adicione detalhes extras sobre a atualização..."
                />
                <p className="text-white/40 text-xs">
                  Descrição detalhada que aparece no corpo completo das patch notes
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Mudanças */}
        <TabsContent value="changes" className="space-y-6">
          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Adicionar Mudanças</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-4 gap-3 mb-4">
                {changeTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setChangeType(type.id as any)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        changeType === type.id 
                          ? `${type.bgColor} ${type.borderColor}` 
                          : 'bg-zinc-800/30 border-zinc-700 hover:border-zinc-600'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${changeType === type.id ? type.color : 'text-white/40'}`} />
                      <p className={`text-sm font-bold ${changeType === type.id ? type.color : 'text-white/60'}`}>
                        {type.name}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-2">
                <Textarea
                  value={changeInput}
                  onChange={(e) => setChangeInput(e.target.value)}
                  placeholder="Descreva a mudança..."
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40 min-h-[100px]"
                />
              </div>

              <Button
                onClick={handleAddChange}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black font-bold"
              >
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Mudança
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                <span>Lista de Mudanças ({changes.length})</span>
                {changes.length > 0 && (
                  <Button
                    onClick={() => setChanges([])}
                    variant="outline"
                    size="sm"
                    className="border-red-500/40 text-red-400 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Limpar Tudo
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {changes.length === 0 ? (
                <div className="text-center py-8">
                  <AlertCircle className="w-12 h-12 text-white/30 mx-auto mb-3" />
                  <p className="text-white/60">Nenhuma mudança adicionada ainda</p>
                  <p className="text-white/40 text-sm mt-1">Use o formulário acima para adicionar mudanças</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {changes.map((change) => {
                    const typeInfo = getChangeTypeInfo(change.type);
                    const Icon = typeInfo.icon;
                    
                    return (
                      <div key={change.id} className={`flex items-start gap-3 p-4 rounded-lg border-2 ${typeInfo.bgColor} ${typeInfo.borderColor}`}>
                        <Icon className={`w-5 h-5 ${typeInfo.color} mt-0.5 shrink-0`} />
                        <div className="flex-1">
                          <Badge className={`${typeInfo.bgColor} ${typeInfo.color} ${typeInfo.borderColor} mb-2`}>
                            {typeInfo.name}
                          </Badge>
                          <p className="text-white text-sm">{change.text}</p>
                        </div>
                        <button
                          onClick={() => handleRemoveChange(change.id)}
                          className="text-white/60 hover:text-red-400 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Configurações */}
        <TabsContent value="settings" className="space-y-6">
          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Configurações de Publicação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg border border-zinc-700">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="w-5 h-5 text-[#D4AF37]" />
                    <h4 className="text-white font-bold">Patch Notes em Destaque</h4>
                  </div>
                  <p className="text-white/60 text-sm">
                    Patch notes em destaque aparecem no topo da página inicial
                  </p>
                </div>
                <Switch
                  checked={isFeatured}
                  onCheckedChange={setIsFeatured}
                  className="data-[state=checked]:bg-[#D4AF37]"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-lg border border-zinc-700">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-5 h-5 text-green-400" />
                    <h4 className="text-white font-bold">Publicar Patch Notes</h4>
                  </div>
                  <p className="text-white/60 text-sm">
                    Patch notes publicados ficam visíveis para todos os jogadores
                  </p>
                </div>
                <Switch
                  checked={isPublished}
                  onCheckedChange={setIsPublished}
                  className="data-[state=checked]:bg-green-500"
                />
              </div>

              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <h4 className="text-blue-400 font-bold mb-2">Status Atual</h4>
                <div className="flex flex-wrap gap-2">
                  {isPublished ? (
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/40">
                      ✓ Publicado
                    </Badge>
                  ) : (
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/40">
                      Rascunho
                    </Badge>
                  )}
                  {isFeatured && (
                    <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/40">
                      ⭐ Destaque
                    </Badge>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white">Autor</Label>
                <Input
                  defaultValue="Equipe EpicMidgard"
                  disabled
                  className="bg-zinc-800 border-zinc-700 text-white/50"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Ações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/10"
              >
                Duplicar Patch Notes
              </Button>
              <Button
                variant="outline"
                className="w-full border-red-500/40 text-red-400 hover:bg-red-500/10"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Excluir Patch Notes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
