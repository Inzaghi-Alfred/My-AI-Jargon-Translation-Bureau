import React, { useState } from 'react';
import { 
  Brain, Cpu, ChefHat, Zap, AlertTriangle, Layers, ChevronRight, ChevronLeft, 
  Fingerprint, Search, Tag, Keyboard, Sparkles, Rocket, MessageSquare, 
  Code2, Minimize2, Database, Soup, Heart, Gauge, Quote, Library, 
  BookOpen, FileText, RefreshCw, ScrollText, Link, Bot, Utensils, 
  AppWindow, Box, ListMusic, Wrench, Map, CheckCircle, PlayCircle,
  Settings, UserCog, Briefcase, TrendingUp, Server, BarChart3, 
  Scale, Factory, Coins, Puzzle, Scissors, Receipt, Wallet, Type,
  Blocks, ScanLine
} from 'lucide-react';

const Archive009 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "Token",
      subtitle: "AI 时代的“数字货币”，也是它阅读世界的最小单位。",
      footer: "Serial No. 009 | AI黑话翻译局",
      visual: "token"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Token",
      content: [
        { label: "中文语境", text: "标记、令牌、词元。" },
        { label: "出处", text: "源自自然语言处理（NLP）中的分词（Tokenization）技术，是大模型计算成本和输入长度的基准单位。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "AI 模型处理文本时的最小语义单位。它不是简单的“字”或“词”，而是通过特定算法（如 BPE）切分出来的字符片段。",
        icon: <ScanLine className="w-6 h-6 text-lime-400" />
      },
      bottom: {
        title: "说人话",
        text: "“文字的乐高碎片”。AI 不直接读句子，它先把你的话拆成一粒粒积木（Token），再把这些积木转成数字去计算。",
        icon: <Puzzle className="w-6 h-6 text-zinc-300" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "一整头猪", desc: "原始文本", icon: <Box size={24} /> },
      right: { title: "标准化肉丁", desc: "Token", icon: <Blocks size={24} /> },
      explanation: "原始文本像一整块肉，大模型吞不下。Tokenization（分词）就像厨师刀工，把肉切成统一大小的肉丁（Token）。机器按“丁”计费，按“丁”下锅。切得越科学，机器人消化得越好。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "计费标准", text: "无论是调用 API 还是算力消耗，本质上都是在为 Token 的数量买单。", icon: <Coins className="text-lime-400" /> },
        { title: "内存上限", text: "所谓的“上下文窗口”（Context Window）其实就是模型一次性能拿住多少颗“肉丁”。", icon: <Wallet className="text-zinc-300" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么用",
      cards: [
        { title: "节省大法", text: "提问时直奔主题，减少废话。因为你说的每一个语气词，都在消耗 Token（钱）。" },
        { title: "长文分段", text: "如果任务太长，超过了 Token 上限，学会把任务切分，分批喂给 AI。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：汇率差异", text: "中英文效率不同。1000 Token ≈ 750 英文单词，但可能只对应 500-600 个汉字。" },
        { type: 'thought', title: "反思：破碎的美感", text: "当语言被拆解成无意义的数字碎片，文学的美感是否消失了？还是说美感本身就是一种高概率的 Token 组合？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "Token",
      subtitle: "AI 时代的“数字货币”，也是它阅读世界的最小单位。",
      footer: "Serial No. 009 | AI黑话翻译局",
      visual: "token"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#09090b] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for Token (Lime/Zinc for Data/Structure) */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-lime-900/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-zinc-800/30 blur-[100px] rounded-full"></div>
      
      {/* Matrix/Data Pattern */}
      <div className="absolute w-full h-full opacity-10" style={{ 
        backgroundImage: 'linear-gradient(0deg, transparent 24%, #84cc16 25%, #84cc16 26%, transparent 27%, transparent 74%, #84cc16 75%, #84cc16 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #84cc16 25%, #84cc16 26%, transparent 27%, transparent 74%, #84cc16 75%, #84cc16 76%, transparent 77%, transparent)', 
        backgroundSize: '20px 20px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-lime-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-zinc-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-lime-500 text-[#09090b] shadow-lime-500/30">
            <Tag size={10} className="text-lime-950" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label - UPDATED: Hide No. on first slide (index 0) */}
        <div className={`flex justify-between items-center text-[10px] text-zinc-500 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 ? 'opacity-0' : 'opacity-100'}>No. 009</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-lime-500' : 'w-1 bg-zinc-700'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-40 w-full">
        {/* Shattering Book Effect */}
        <div className="relative">
           <BookOpen size={80} className="text-zinc-600 opacity-50" strokeWidth={1} />
           
           {/* Floating Tokens (Blocks) */}
           <div className="absolute top-[-20px] left-[-20px] bg-lime-500/20 text-lime-400 p-1.5 rounded border border-lime-500/50 text-xs font-mono animate-bounce delay-75">GPT</div>
           <div className="absolute top-[-40px] right-[10px] bg-lime-500/20 text-lime-400 p-1.5 rounded border border-lime-500/50 text-xs font-mono animate-pulse delay-150">AI</div>
           <div className="absolute bottom-[-10px] right-[-30px] bg-lime-500/20 text-lime-400 p-1.5 rounded border border-lime-500/50 text-xs font-mono animate-bounce delay-300">4.0</div>
           
           {/* Small particles */}
           <div className="absolute top-0 right-[-10px] w-2 h-2 bg-lime-400 rounded-sm animate-[ping_2s_linear_infinite]"></div>
           <div className="absolute bottom-0 left-[-10px] w-2 h-2 bg-lime-400 rounded-sm animate-[ping_3s_linear_infinite]"></div>
           <div className="absolute top-[-30px] left-[30px] w-1 h-1 bg-white rounded-sm animate-pulse"></div>
        </div>

        {/* Connection Lines */}
        <div className="absolute inset-0 border-t border-b border-lime-500/10 scale-150 rotate-12"></div>
    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-10 group w-full">
              <div className="absolute inset-0 bg-lime-500/5 blur-3xl rounded-full animate-pulse"></div>
              {renderVisuals()}
            </div>

            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-lime-200 to-zinc-500 mb-6 tracking-tighter">
              {slide.title}
            </h1>
            <p className="text-lg text-lime-100/80 font-light tracking-widest border-t border-b border-lime-900/50 py-3 px-6 bg-lime-900/10">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-zinc-500 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover':
        return (
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6">
             {/* Left: Text */}
             <div className="flex-1 flex flex-col justify-center text-left z-20 pr-8">
                <div className="flex items-center gap-2 mb-4 opacity-70">
                   <Fingerprint size={14} className="text-lime-500"/>
                   <span className="text-sm text-lime-500 font-mono tracking-[0.2em]">SERIAL NO. 009</span>
                </div>
                <h1 className="text-7xl font-bold text-white mb-6 tracking-tighter drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl text-lime-200 font-light border-l-4 border-lime-500 pl-6 py-2 leading-relaxed bg-gradient-to-r from-lime-900/20 to-transparent rounded-r-lg">
                  {slide.subtitle}
                </p>
             </div>

             {/* Right: Visuals */}
             <div className="w-[40%] flex items-center justify-center relative">
                <div className="scale-125 relative">
                   <div className="absolute inset-0 bg-lime-500/10 blur-[60px] rounded-full animate-pulse"></div>
                   {renderVisuals()}
                   {/* Extra Wide Decorations */}
                   <div className="absolute top-[-60px] right-[-20px] text-lime-300 opacity-30 animate-pulse"><Coins size={30} /></div>
                   <div className="absolute bottom-[-40px] left-[-40px] text-zinc-400 opacity-30 animate-bounce"><Type size={30} /></div>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-lime-500 mb-8 border-l-4 border-lime-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-lime-400 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-1 leading-tight">{slide.title}</div>
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-zinc-500 font-mono uppercase border-b border-zinc-800 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-zinc-300 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-lime-500 mb-8 border-l-4 border-lime-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-lime-900/10 border border-lime-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-lime-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-zinc-400 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-zinc-800"></div>
                </div>

                <div className="bg-zinc-800/30 border border-zinc-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-zinc-200">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-zinc-300 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-zinc-800 pb-4">
               <h2 className="text-3xl font-bold text-lime-500">{slide.header}</h2>
               <span className="text-sm text-zinc-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-zinc-900 p-4 rounded-lg flex flex-col items-center text-center opacity-60 border border-zinc-800">
                    <div className="mb-2 text-zinc-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-zinc-300">{slide.left.title}</div>
                    <div className="text-xs text-zinc-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-lime-500 font-bold">→</div>
                <div className="flex-1 bg-lime-900/20 border border-lime-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(132,204,22,0.1)]">
                    <div className="mb-2 text-lime-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-lime-100">{slide.right.title}</div>
                    <div className="text-xs text-lime-500/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-lime-500">
                <p className="text-base leading-7 text-zinc-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-lime-500 mb-10 border-l-4 border-lime-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-lime-500"></div>
                          <div className="flex items-center gap-2 mb-2">
                             {item.icon}
                             <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          </div>
                          <p className="text-zinc-300 leading-relaxed">{item.text}</p>
                      </div>
                  ))}
               </div>
            </div>
        );

      case 'cards':
         return (
             <div className="flex-1 flex flex-col pt-4 justify-center">
                <h2 className="text-3xl font-bold text-lime-500 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#18181b] p-6 rounded-2xl border border-zinc-800 hover:border-lime-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#09090b] px-2 text-xs font-mono text-zinc-500 group-hover:text-lime-500 transition-colors">
                               Tip 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-lime-100 mb-1">{card.title}</h3>
                           <p className="text-zinc-400 text-sm">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-lime-500 mb-8 border-l-4 border-lime-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-lime-900/20 border-lime-500/20' : 'bg-zinc-800/50 border-zinc-600/50'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-lime-400" /> : <Brain className="text-zinc-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-lime-200' : 'text-zinc-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-zinc-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-lime-500">
                     END OF ARCHIVE 009
                 </div>
              </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-zinc-950 flex items-center justify-center p-4 font-sans">
      <div className={`flex flex-col items-center gap-6 w-full ${isWide ? 'max-w-4xl' : 'max-w-md'} transition-all duration-500`}>
        {/* Main Frame */}
        <div className={`w-full bg-[#09090b] shadow-2xl border-4 border-zinc-800 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' 
             : 'aspect-[3/4] rounded-[3rem] p-3'
        }`}>
           <div className={`w-full h-full overflow-hidden bg-[#09090b] ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
              <CardWrapper index={currentSlide} badge={slides[currentSlide].badge} isWideMode={isWide}>
                {renderSlideContent(slides[currentSlide])}
              </CardWrapper>
           </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 bg-zinc-900 p-2 rounded-full shadow-lg border border-zinc-800">
          <button onClick={prevSlide} className="p-3 hover:bg-zinc-800 rounded-full text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <span className="text-zinc-500 font-mono text-sm min-w-[3ch] text-center">
            {currentSlide + 1}/{slides.length}
          </span>
          <button onClick={nextSlide} className="p-3 hover:bg-zinc-800 rounded-full text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-zinc-600 text-xs text-center">
          {isWide ? '宽屏封面模式 (2.35:1)' : '图文卡片模式 (3:4)'}<br/>
          推荐使用系统截图工具保存图片
        </div>
      </div>
    </div>
  );
};

export default Archive009;