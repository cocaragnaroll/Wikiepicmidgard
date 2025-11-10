import { useState, useRef, useEffect } from 'react';
import { 
  Bold, Italic, Underline, Strikethrough, AlignLeft, AlignCenter, AlignRight, AlignJustify,
  List, ListOrdered, Link, Image, Code, Quote, Heading1, Heading2, Heading3,
  Undo, Redo, Eye, FileCode, Palette, Table, Video, Youtube
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ value, onChange, placeholder = 'Escreva o conteúdo do artigo aqui...' }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [showHtml, setShowHtml] = useState(false);
  const [htmlCode, setHtmlCode] = useState(value);
  const [linkUrl, setLinkUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [tableRows, setTableRows] = useState('3');
  const [tableCols, setTableCols] = useState('3');

  useEffect(() => {
    if (editorRef.current && !showHtml) {
      editorRef.current.innerHTML = value;
    }
  }, [value, showHtml]);

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    updateContent();
  };

  const updateContent = () => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      onChange(content);
      setHtmlCode(content);
    }
  };

  const insertHTML = (html: string) => {
    if (editorRef.current) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        const div = document.createElement('div');
        div.innerHTML = html;
        const frag = document.createDocumentFragment();
        let node;
        while ((node = div.firstChild)) {
          frag.appendChild(node);
        }
        range.insertNode(frag);
        updateContent();
      }
    }
  };

  const handleInsertLink = () => {
    if (linkUrl) {
      execCommand('createLink', linkUrl);
      setLinkUrl('');
    }
  };

  const handleInsertImage = () => {
    if (imageUrl) {
      insertHTML(`<img src="${imageUrl}" alt="Imagem" class="max-w-full h-auto rounded-lg my-4" />`);
      setImageUrl('');
    }
  };

  const handleInsertVideo = () => {
    if (videoUrl) {
      let embedUrl = videoUrl;
      
      // Converter URL do YouTube para embed
      if (videoUrl.includes('youtube.com/watch?v=')) {
        const videoId = videoUrl.split('v=')[1]?.split('&')[0];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      } else if (videoUrl.includes('youtu.be/')) {
        const videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      }

      insertHTML(`
        <div class="relative w-full my-4" style="padding-bottom: 56.25%;">
          <iframe 
            src="${embedUrl}" 
            class="absolute top-0 left-0 w-full h-full rounded-lg"
            frameborder="0" 
            allowfullscreen
          ></iframe>
        </div>
      `);
      setVideoUrl('');
    }
  };

  const handleInsertTable = () => {
    const rows = parseInt(tableRows) || 3;
    const cols = parseInt(tableCols) || 3;
    
    let tableHTML = '<table class="w-full border-2 border-zinc-700 my-4"><tbody>';
    for (let i = 0; i < rows; i++) {
      tableHTML += '<tr>';
      for (let j = 0; j < cols; j++) {
        tableHTML += `<td class="border border-zinc-700 p-2 ${i === 0 ? 'bg-zinc-800 font-bold' : ''}">Célula ${i + 1}-${j + 1}</td>`;
      }
      tableHTML += '</tr>';
    }
    tableHTML += '</tbody></table>';
    
    insertHTML(tableHTML);
  };

  const handleHtmlChange = (code: string) => {
    setHtmlCode(code);
    onChange(code);
  };

  const toolbarButtons = [
    { icon: Undo, command: 'undo', title: 'Desfazer' },
    { icon: Redo, command: 'redo', title: 'Refazer' },
  ];

  const formatButtons = [
    { icon: Bold, command: 'bold', title: 'Negrito (Ctrl+B)' },
    { icon: Italic, command: 'italic', title: 'Itálico (Ctrl+I)' },
    { icon: Underline, command: 'underline', title: 'Sublinhado (Ctrl+U)' },
    { icon: Strikethrough, command: 'strikeThrough', title: 'Tachado' },
  ];

  const headingButtons = [
    { icon: Heading1, command: 'formatBlock', value: 'h1', title: 'Título 1' },
    { icon: Heading2, command: 'formatBlock', value: 'h2', title: 'Título 2' },
    { icon: Heading3, command: 'formatBlock', value: 'h3', title: 'Título 3' },
  ];

  const alignButtons = [
    { icon: AlignLeft, command: 'justifyLeft', title: 'Alinhar à esquerda' },
    { icon: AlignCenter, command: 'justifyCenter', title: 'Centralizar' },
    { icon: AlignRight, command: 'justifyRight', title: 'Alinhar à direita' },
    { icon: AlignJustify, command: 'justifyFull', title: 'Justificar' },
  ];

  const listButtons = [
    { icon: List, command: 'insertUnorderedList', title: 'Lista com marcadores' },
    { icon: ListOrdered, command: 'insertOrderedList', title: 'Lista numerada' },
  ];

  return (
    <div className="space-y-2">
      <Tabs value={showHtml ? 'html' : 'visual'} onValueChange={(v) => setShowHtml(v === 'html')} className="w-full">
        <TabsList className="bg-zinc-900 border-2 border-zinc-800 p-2 grid w-full grid-cols-2">
          <TabsTrigger 
            value="visual" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold"
          >
            <Eye className="w-4 h-4 mr-2" />
            Visual
          </TabsTrigger>
          <TabsTrigger 
            value="html" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#D4AF37] data-[state=active]:to-[#B8941F] data-[state=active]:text-black text-white/70 hover:text-white uppercase tracking-wide font-bold"
          >
            <FileCode className="w-4 h-4 mr-2" />
            HTML
          </TabsTrigger>
        </TabsList>

        <TabsContent value="visual" className="space-y-2">
          {/* Toolbar */}
          <div className="bg-zinc-900 border-2 border-zinc-800 rounded-lg p-2 space-y-2">
            {/* Linha 1: Desfazer/Refazer e Formatação */}
            <div className="flex flex-wrap gap-1">
              {toolbarButtons.map((btn, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  onClick={() => execCommand(btn.command)}
                  className="text-white/70 hover:text-[#D4AF37] hover:bg-zinc-800"
                  title={btn.title}
                >
                  <btn.icon className="w-4 h-4" />
                </Button>
              ))}
              
              <div className="w-px h-8 bg-zinc-700 mx-1" />
              
              {formatButtons.map((btn, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  onClick={() => execCommand(btn.command)}
                  className="text-white/70 hover:text-[#D4AF37] hover:bg-zinc-800"
                  title={btn.title}
                >
                  <btn.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>

            {/* Linha 2: Títulos */}
            <div className="flex flex-wrap gap-1">
              {headingButtons.map((btn, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  onClick={() => execCommand(btn.command, btn.value)}
                  className="text-white/70 hover:text-[#D4AF37] hover:bg-zinc-800"
                  title={btn.title}
                >
                  <btn.icon className="w-4 h-4" />
                </Button>
              ))}
              
              <div className="w-px h-8 bg-zinc-700 mx-1" />
              
              {alignButtons.map((btn, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  onClick={() => execCommand(btn.command)}
                  className="text-white/70 hover:text-[#D4AF37] hover:bg-zinc-800"
                  title={btn.title}
                >
                  <btn.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>

            {/* Linha 3: Listas e Inserir */}
            <div className="flex flex-wrap gap-1">
              {listButtons.map((btn, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  onClick={() => execCommand(btn.command)}
                  className="text-white/70 hover:text-[#D4AF37] hover:bg-zinc-800"
                  title={btn.title}
                >
                  <btn.icon className="w-4 h-4" />
                </Button>
              ))}

              <div className="w-px h-8 bg-zinc-700 mx-1" />

              <Button
                variant="ghost"
                size="sm"
                onClick={() => execCommand('formatBlock', 'blockquote')}
                className="text-white/70 hover:text-[#D4AF37] hover:bg-zinc-800"
                title="Citação"
              >
                <Quote className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => execCommand('formatBlock', 'pre')}
                className="text-white/70 hover:text-[#D4AF37] hover:bg-zinc-800"
                title="Código"
              >
                <Code className="w-4 h-4" />
              </Button>

              <div className="w-px h-8 bg-zinc-700 mx-1" />

              {/* Inserir Link */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/70 hover:text-[#D4AF37] hover:bg-zinc-800"
                    title="Inserir link"
                  >
                    <Link className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 border-2 border-zinc-800">
                  <DialogHeader>
                    <DialogTitle className="text-white">Inserir Link</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">URL do Link</Label>
                      <Input
                        value={linkUrl}
                        onChange={(e) => setLinkUrl(e.target.value)}
                        placeholder="https://exemplo.com"
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                    <Button
                      onClick={handleInsertLink}
                      className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black font-bold"
                    >
                      Inserir Link
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Inserir Imagem */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/70 hover:text-[#D4AF37] hover:bg-zinc-800"
                    title="Inserir imagem"
                  >
                    <Image className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 border-2 border-zinc-800">
                  <DialogHeader>
                    <DialogTitle className="text-white">Inserir Imagem</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">URL da Imagem</Label>
                      <Input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="https://exemplo.com/imagem.jpg"
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                    <Button
                      onClick={handleInsertImage}
                      className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black font-bold"
                    >
                      Inserir Imagem
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Inserir Vídeo */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/70 hover:text-[#D4AF37] hover:bg-zinc-800"
                    title="Inserir vídeo do YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 border-2 border-zinc-800">
                  <DialogHeader>
                    <DialogTitle className="text-white">Inserir Vídeo do YouTube</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">URL do Vídeo</Label>
                      <Input
                        value={videoUrl}
                        onChange={(e) => setVideoUrl(e.target.value)}
                        placeholder="https://www.youtube.com/watch?v=..."
                        className="bg-zinc-800 border-zinc-700 text-white"
                      />
                    </div>
                    <Button
                      onClick={handleInsertVideo}
                      className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black font-bold"
                    >
                      Inserir Vídeo
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Inserir Tabela */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/70 hover:text-[#D4AF37] hover:bg-zinc-800"
                    title="Inserir tabela"
                  >
                    <Table className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 border-2 border-zinc-800">
                  <DialogHeader>
                    <DialogTitle className="text-white">Inserir Tabela</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white">Linhas</Label>
                        <Input
                          type="number"
                          value={tableRows}
                          onChange={(e) => setTableRows(e.target.value)}
                          min="1"
                          max="20"
                          className="bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-white">Colunas</Label>
                        <Input
                          type="number"
                          value={tableCols}
                          onChange={(e) => setTableCols(e.target.value)}
                          min="1"
                          max="10"
                          className="bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={handleInsertTable}
                      className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#FFD700] hover:to-[#D4AF37] text-black font-bold"
                    >
                      Inserir Tabela
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="w-px h-8 bg-zinc-700 mx-1" />

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/70 hover:text-[#D4AF37] hover:bg-zinc-800"
                    title="Cor do texto"
                  >
                    <Palette className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 border-2 border-zinc-800">
                  <DialogHeader>
                    <DialogTitle className="text-white">Cor do Texto</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-4 gap-2">
                    {['#FFFFFF', '#D4AF37', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'].map(color => (
                      <button
                        key={color}
                        onClick={() => execCommand('foreColor', color)}
                        className="w-12 h-12 rounded border-2 border-zinc-700 hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Editor Area */}
          <div
            ref={editorRef}
            contentEditable
            onInput={updateContent}
            className="min-h-[400px] bg-zinc-900 border-2 border-zinc-800 rounded-lg p-6 text-white focus:outline-none focus:border-[#D4AF37] transition-colors prose prose-invert max-w-none"
            style={{
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
            }}
            suppressContentEditableWarning
          />
        </TabsContent>

        <TabsContent value="html">
          <textarea
            value={htmlCode}
            onChange={(e) => handleHtmlChange(e.target.value)}
            className="w-full min-h-[500px] bg-zinc-900 border-2 border-zinc-800 rounded-lg p-4 text-white font-mono text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
            placeholder="<p>HTML do artigo...</p>"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
