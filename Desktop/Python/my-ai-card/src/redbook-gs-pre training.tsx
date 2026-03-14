import React, { useState } from 'react';
import { 
  Brain, Cpu, ChefHat, Zap, AlertTriangle, Layers, ChevronRight, ChevronLeft, 
  Fingerprint, Search, Tag, Keyboard, Sparkles, Rocket, MessageSquare, 
  Code2, Minimize2, Database, Soup, Heart, Gauge, Quote, Library, 
  BookOpen, FileText, RefreshCw, ScrollText, Link, Bot, Utensils, 
  AppWindow, Box, ListMusic, Wrench, Map, CheckCircle, PlayCircle,
  Settings, UserCog, Briefcase, TrendingUp, Server, BarChart3, 
  Scale, Factory, Coins, Puzzle, Scissors, Receipt, Wallet, Type,
  Blocks, ScanLine, Wand2, Lightbulb, Mic2, Compass, Castle,
  MessageCircle, LayoutTemplate, Hourglass, Atom, FlaskConical, Dna,
  Plug, Power, Activity, Network, Flame, Circle, Infinity, Baby,
  ShieldCheck, Globe, Eye, Grid, GitCommit, GitMerge, Share2,
  Aperture, Disc, Sun, Radiation, Target, Focus, MousePointer2,
  Binary, AudioWaveform, Languages, Ear, GitBranch, GitPullRequest,
  Workflow, Cog, Feather, PenTool, Mountain, User, UserPlus,
  Grab, Scan, Hand, Crosshair, BoxSelect, Move3d, Cloud, Hammer,
  Video, Mic, Image, Music, DraftingCompass, Ruler, Building2,
  Hexagon, Split, CircuitBoard, Users, UserCheck, ThumbsUp, Star, SlidersHorizontal,
  Cuboid, Axis3d, LandPlot, EyeOff, FileQuestion, BookKey, Wind, Droplets, Ghost,
  Tornado, ArrowDownToLine
} from 'lucide-react';

const Archive028 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "Pre-training",
      subtitle: "AI 的“寒窗十年”，吞下万卷书，才有了第一声啼哭。",
      footer: "Serial No. 028 | AI黑话翻译局",
      visual: "blackhole"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Pre-training",
      content: [
        { label: "中文语境", text: "预训练。" },
        { label: "出处", text: "深度学习的核心范式。在“对齐”和“微调”之前，模型在无标注的大规模数据上进行的自监督学习过程。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "模型在超大规模数据集上，通过预测下一个 Token（文字接龙）来学习语言的统计规律、逻辑结构和常识背景。",
        icon: <Tornado className="w-6 h-6 text-indigo-400" />
      },
      bottom: {
        title: "说人话",
        text: "“闭关修炼”。AI 上班前，先把人类写过的所有东西（维基百科、论文、GitHub）全读一遍。它不求完全理解，但记住了万物的“概率关联”。",
        icon: <BookKey className="w-6 h-6 text-zinc-300" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "尝遍天下", desc: "预训练期", icon: <Soup size={24} /> },
      right: { title: "肌肉记忆", desc: "形成底色", icon: <Brain size={24} /> },
      explanation: "像厨师在学徒期尝遍了世界所有的味道。他吃过苦辣臭，见识过食材堆在一起的变化。此时他还没给客人做菜（没微调），但脑子里已有了“味道”的宏大地图。这种肌肉记忆决定了厨师的上限，底子没打好，后面再教礼仪也做不出美味。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "通才的诞生", text: "让 AI 具备了跨领域的通用能力，而不仅仅是只能干一件事。", icon: <Globe className="text-indigo-400" /> },
        { title: "能力的涌现", text: "只有当预训练的数据量跨过某个临界点，AI 才会突然学会推理和翻译。", icon: <Sparkles className="text-zinc-300" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么看",
      cards: [
        { title: "大力出奇迹", text: "预训练是整场 AI 竞赛中最烧钱、最拼算力的部分，是巨头间的“军备竞赛”。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：垃圾进，垃圾出 (GIGO)", text: "如果预训练的数据里全是偏见和废话，AI 也会变成一个博学的杠精。" },
        { type: 'thought', title: "反思：认知边界", text: "如果 AI 的智慧全部来自于对人类既有知识的“预训练”，那它是否永远无法超越人类已有的认知边界？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "预训练",
      subtitle: "文明的数字重组",
      footer: "Serial No. 028 | AI黑话翻译局",
      visual: "blackhole"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#030008] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Deep Space / Black Hole motif (Indigo/Black) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-indigo-950/30 via-[#030008] to-[#030008]"></div>
      
      {/* Accretion Disk Pattern (Swirling lines) */}
      <div className="absolute w-full h-full opacity-20 pointer-events-none flex items-center justify-center">
         <div className="w-[200%] h-[200%] border border-indigo-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
         <div className="absolute w-[180%] h-[180%] border border-indigo-400/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
         <div className="absolute w-[150%] h-[150%] border border-white/5 rounded-full animate-[spin_25s_linear_infinite]"></div>
      </div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-zinc-500/30 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-indigo-500 text-white shadow-indigo-500/30">
            <Tag size={10} className="text-indigo-100" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label */}
        <div className={`flex justify-between items-center text-[10px] text-indigo-300/50 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 028</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-indigo-400' : 'w-1 bg-zinc-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-56 w-full">
        {/* The Black Hole Core */}
        <div className="relative flex items-center justify-center">
            {/* Event Horizon Glow */}
            <div className="absolute w-32 h-32 bg-indigo-600/20 blur-xl rounded-full animate-pulse"></div>
            <div className="absolute w-24 h-24 bg-white/10 blur-md rounded-full animate-[ping_3s_infinite]"></div>
            
            {/* The Singularity (Pure Black Center) */}
            <div className="w-16 h-16 bg-black rounded-full shadow-[0_0_20px_rgba(99,102,241,0.8)] border border-indigo-900/50 relative z-20 flex items-center justify-center">
               <div className="w-2 h-2 bg-white rounded-full animate-pulse blur-[1px]"></div>
            </div>

            {/* Matter being sucked in (Books, Code, etc.) */}
            <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
               <Library size={16} className="absolute -top-12 left-8 text-zinc-400 opacity-60 -rotate-45" />
               <FileText size={14} className="absolute top-16 -right-10 text-zinc-500 opacity-50 rotate-90" />
               <Code2 size={18} className="absolute -bottom-10 left-0 text-indigo-300 opacity-70 rotate-180" />
               <Globe size={20} className="absolute top-4 -left-12 text-zinc-600 opacity-40" />
               
               {/* Trailing particles */}
               <div className="absolute top-[-30px] right-[20px] w-1 h-1 bg-indigo-400 rounded-full"></div>
               <div className="absolute bottom-[-20px] left-[30px] w-1 h-1 bg-white/50 rounded-full"></div>
            </div>
            
            {/* Inner Spiral lines pulling towards center */}
            <svg className="absolute inset-0 w-48 h-48 -ml-16 -mt-16 pointer-events-none opacity-40 animate-[spin_10s_linear_infinite_reverse]" viewBox="0 0 100 100">
               <path d="M 50 10 Q 80 30 50 50" fill="transparent" stroke="url(#grad)" strokeWidth="0.5" />
               <path d="M 90 50 Q 70 80 50 50" fill="transparent" stroke="url(#grad)" strokeWidth="0.5" />
               <path d="M 50 90 Q 20 70 50 50" fill="transparent" stroke="url(#grad)" strokeWidth="0.5" />
               <path d="M 10 50 Q 30 20 50 50" fill="transparent" stroke="url(#grad)" strokeWidth="0.5" />
               <defs>
                 <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
                   <stop offset="100%" stopColor="#818cf8" stopOpacity="1" />
                 </linearGradient>
               </defs>
            </svg>
        </div>
    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-6 group w-full">
              {renderVisuals()}
            </div>

            <h1 className="text-5xl font-bold mb-4 tracking-tighter leading-tight text-white drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              Pre-training
            </h1>
            
            <p className="text-sm text-indigo-100/80 font-light tracking-widest border-t border-b border-indigo-900/50 py-3 px-4 bg-indigo-900/10">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-indigo-400/50 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover':
        return (
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6 relative">
             {/* Left: Collapsing physical knowledge */}
             <div className="w-[30%] h-full flex flex-col justify-center items-end pr-12 relative border-r border-indigo-900/30">
                <div className="opacity-40 flex flex-col gap-2 items-end relative z-10 transform -skew-y-12">
                   <div className="w-24 h-2 bg-zinc-600 rounded-sm"></div>
                   <div className="w-32 h-3 bg-zinc-700 rounded-sm ml-4"></div>
                   <div className="w-20 h-2 bg-zinc-500 rounded-sm"></div>
                   <Library size={24} className="text-zinc-500 my-2" />
                   <div className="w-28 h-2 bg-zinc-600 rounded-sm"></div>
                </div>
                <div className="absolute bottom-10 right-12 text-[10px] font-mono text-zinc-500 tracking-widest text-right">
                   HUMAN_CORPUS <br/> [CONSUMING]
                </div>
             </div>

             {/* Center: Title */}
             <div className="flex-1 flex flex-col justify-center text-center z-20 px-8">
                <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
                   <Fingerprint size={14} className="text-indigo-500"/>
                   <span className="text-sm text-indigo-500 font-mono tracking-[0.2em]">SERIAL NO. 028</span>
                </div>
                
                <h1 className="text-7xl font-bold text-white tracking-tighter mb-4 leading-none">
                  预训练
                </h1>
                
                <div className="inline-block border-b border-indigo-500/50 pb-4">
                  <span className="text-2xl font-light tracking-wide text-indigo-200/90 whitespace-nowrap">
                    文明的数字重组
                  </span>
                </div>
             </div>

             {/* Right: Binary Waterfall (The resulting latent space) */}
             <div className="w-[30%] h-full flex flex-col justify-start items-start pl-12 pt-12 relative border-l border-indigo-900/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
                <div className="opacity-60 flex gap-4 relative z-10 font-mono text-[10px] text-indigo-400">
                   <div className="flex flex-col gap-1 animate-[slideDown_3s_linear_infinite]">
                      <span>0101</span><span>1100</span><span>0011</span><span>1010</span>
                   </div>
                   <div className="flex flex-col gap-1 animate-[slideDown_2s_linear_infinite] text-indigo-200">
                      <span>10</span><span>01</span><span>11</span><span>00</span><span>10</span>
                   </div>
                   <div className="flex flex-col gap-1 animate-[slideDown_4s_linear_infinite]">
                      <span>110</span><span>011</span><span>101</span>
                   </div>
                </div>
                <div className="absolute bottom-10 left-12 text-[10px] font-mono text-indigo-500/50 tracking-widest">
                   LATENT_SPACE <br/> [FORMING]
                </div>
             </div>
             
             {/* CSS for custom animation */}
            <style dangerouslySetContent={{__html: `
              @keyframes slideDown {
                0% { transform: translateY(-20px); opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 1; }
                100% { transform: translateY(100px); opacity: 0; }
              }
            `}} />
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-indigo-400 mb-8 border-l-4 border-indigo-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-zinc-400 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-2 leading-tight font-serif italic">{slide.title}</div>
                 {slide.translation && (
                   <div className="text-sm text-indigo-200/80 mt-3 border-t border-white/10 pt-3">
                     {slide.translation}
                   </div>
                 )}
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-indigo-500 font-mono uppercase border-b border-zinc-800 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-zinc-300 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-indigo-400 mb-8 border-l-4 border-indigo-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-indigo-900/10 border border-indigo-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-indigo-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-indigo-100/70 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-zinc-800"></div>
                </div>

                <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-zinc-300">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-zinc-400 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-zinc-800 pb-4">
               <h2 className="text-3xl font-bold text-indigo-400">{slide.header}</h2>
               <span className="text-sm text-zinc-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg flex flex-col items-center text-center opacity-70">
                    <div className="mb-2 text-zinc-500">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-zinc-400">{slide.left.title}</div>
                    <div className="text-xs text-zinc-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-zinc-600 font-bold">→</div>
                <div className="flex-1 bg-indigo-900/20 border border-indigo-500/30 p-4 rounded-lg flex flex-col items-center text-center">
                    <div className="mb-2 text-indigo-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-indigo-200">{slide.right.title}</div>
                    <div className="text-xs text-indigo-400/60">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-indigo-500">
                <p className="text-base leading-7 text-zinc-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-indigo-400 mb-10 border-l-4 border-indigo-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-indigo-500"></div>
                          <div className="flex items-center gap-2 mb-2">
                             {item.icon}
                             <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          </div>
                          <p className="text-zinc-400 leading-relaxed">{item.text}</p>
                      </div>
                  ))}
               </div>
            </div>
        );

      case 'cards':
         return (
             <div className="flex-1 flex flex-col pt-4 justify-center">
                <h2 className="text-3xl font-bold text-indigo-400 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0a0a0a] p-6 rounded-2xl border border-zinc-800 hover:border-indigo-500/30 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#030008] px-2 text-xs font-mono text-zinc-600 group-hover:text-indigo-400 transition-colors">
                               Insight 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-indigo-100 mb-1">{card.title}</h3>
                           <p className="text-zinc-400 text-sm leading-relaxed">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-indigo-400 mb-8 border-l-4 border-indigo-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-900/10 border-red-500/20' : 'bg-indigo-900/10 border-indigo-500/20'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Brain className="text-indigo-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-300' : 'text-indigo-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-indigo-500">
                     END OF ARCHIVE 028
                 </div>
              </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center p-4 font-sans">
      <div className={`flex flex-col items-center gap-6 w-full ${isWide ? 'max-w-4xl' : 'max-w-md'} transition-all duration-500`}>
        {/* Main Frame */}
        <div className={`w-full bg-[#030008] shadow-2xl border-4 border-zinc-900 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' 
             : 'aspect-[3/4] rounded-[3rem] p-3'
        }`}>
           <div className={`w-full h-full overflow-hidden bg-[#030008] ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
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
          <span className="text-indigo-400/70 font-mono text-sm min-w-[3ch] text-center">
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

export default Archive028;