import { useState } from 'react';
import { motion } from 'motion/react';
import { Save, Eye, Trash2, Plus, Image as ImageIcon, FileText, Star, Sparkles, X } from 'lucide-react';
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

export default function ArticleEditor() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  // Ícones disponíveis do GitHub
  const availableIcons = [
    { id: 'sword', name: 'Espada', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/devicon/devicon-original.svg' },
    { id: 'shield', name: 'Escudo', url: 'https://raw.githubusercontent.com/gilbarbara/logos/master/logos/discord-icon.svg' },
    { id: 'book', name: 'Livro', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/readme.svg' },
    { id: 'star', name: 'Estrela', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/starship.svg' },
    { id: 'crown', name: 'Coroa', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kingfisher.svg' },
    { id: 'fire', name: 'Fogo', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/firebase.svg' },
    { id: 'lightning', name: 'Raio', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/lightning.svg' },
    { id: 'target', name: 'Alvo', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/target.svg' },
    { id: 'trophy', name: 'Troféu', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/trophy.svg' },
    { id: 'map', name: 'Mapa', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/openstreetmap.svg' },
    { id: 'quest', name: 'Quest', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/questdb.svg' },
    { id: 'battle', name: 'Batalha', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/battle-dot-net.svg' },
  ];

  // Categorias disponíveis
  const categories = [
    { id: 'classes', name: 'Classes' },
    { id: 'equipamentos', name: 'Equipamentos' },
    { id: 'mapas', name: 'Mapas e Dungeons' },
    { id: 'quests', name: 'Quests' },
    { id: 'mecanicas', name: 'Mecânicas' },
    { id: 'eventos', name: 'Eventos' },
    { id: 'pvp', name: 'PvP' },
    { id: 'woe', name: 'War of Emperium' },
    { id: 'economia', name: 'Economia' },
    { id: 'builds', name: 'Builds' },
    { id: 'guias', name: 'Guias de Caça' },
  ];

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSave = () => {
    const article = {
      title,
      category,
      icon: selectedIcon,
      content,
      tags,
      isFeatured,
      isPublished,
      imageUrl,
      createdAt: new Date().toISOString(),
    };
    console.log('Artigo salvo:', article);
    // Aqui seria a lógica de salvar no backend
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white uppercase">
            <FileText className="w-8 h-8 text-[#D4AF37] inline mr-3" />
            Editor de Artigos
          </h2>
          <p className="text-white/60 mt-2">
            Crie e edite artigos da wiki com facilidade
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
            Salvar Artigo
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
            value="settings" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold"
          >
            Configurações
          </TabsTrigger>
          <TabsTrigger 
            value="media" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold"
          >
            Mídia
          </TabsTrigger>
        </TabsList>

        {/* Tab: Conteúdo */}
        <TabsContent value="content" className="space-y-6">
          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Informações Básicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-white">Título do Artigo *</Label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Guia Completo de Lord Knight"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-white">Categoria *</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700">
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id} className="text-white hover:bg-zinc-700">
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Ícone do Artigo</Label>
                  <Select value={selectedIcon} onValueChange={setSelectedIcon}>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                      <SelectValue placeholder="Selecione um ícone" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700">
                      {availableIcons.map((icon) => (
                        <SelectItem key={icon.id} value={icon.id} className="text-white hover:bg-zinc-700">
                          <div className="flex items-center gap-2">
                            <img src={icon.url} alt={icon.name} className="w-5 h-5" />
                            {icon.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white">Conteúdo do Artigo *</Label>
                <RichTextEditor
                  value={content}
                  onChange={setContent}
                  placeholder="Escreva o conteúdo do artigo aqui..."
                />
              </div>

              <div className="space-y-2">
                <Label className="text-white">Tags</Label>
                <div className="flex gap-2">
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                    placeholder="Adicionar tag..."
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                  />
                  <Button
                    onClick={handleAddTag}
                    variant="outline"
                    className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {tags.map((tag) => (
                    <Badge key={tag} className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/40 pr-1">
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-2 hover:text-white transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
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
                    <h4 className="text-white font-bold">Artigo em Destaque</h4>
                  </div>
                  <p className="text-white/60 text-sm">
                    Artigos em destaque aparecem no topo da página inicial
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
                    <h4 className="text-white font-bold">Publicar Artigo</h4>
                  </div>
                  <p className="text-white/60 text-sm">
                    Artigos publicados ficam visíveis para todos os usuários
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
                  defaultValue="Administrador"
                  disabled
                  className="bg-zinc-800 border-zinc-700 text-white/50"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-white">Data de Publicação</Label>
                <Input
                  type="datetime-local"
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Ações Avançadas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/10"
              >
                Duplicar Artigo
              </Button>
              <Button
                variant="outline"
                className="w-full border-red-500/40 text-red-400 hover:bg-red-500/10"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Excluir Artigo
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Mídia */}
        <TabsContent value="media" className="space-y-6">
          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Imagem de Capa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-white">URL da Imagem</Label>
                <Input
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://exemplo.com/imagem.jpg"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-white/40"
                />
              </div>

              {imageUrl ? (
                <div className="relative rounded-lg overflow-hidden border-2 border-zinc-700">
                  <img 
                    src={imageUrl} 
                    alt="Preview" 
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=2074';
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
              ) : (
                <div className="border-2 border-dashed border-zinc-700 rounded-lg p-12 text-center">
                  <ImageIcon className="w-12 h-12 text-white/30 mx-auto mb-3" />
                  <p className="text-white/60 mb-2">Nenhuma imagem selecionada</p>
                  <p className="text-white/40 text-sm">
                    Cole a URL de uma imagem acima para visualizar
                  </p>
                </div>
              )}

              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-blue-400 text-sm">
                  <strong>Dica:</strong> Use imagens com proporção 16:9 e tamanho mínimo de 1200x675px para melhor qualidade.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-b from-zinc-900 to-black border-2 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Galeria de Imagens</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
              >
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Imagem à Galeria
              </Button>
              <p className="text-white/40 text-sm mt-3 text-center">
                Nenhuma imagem na galeria
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
