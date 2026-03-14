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
  Cuboid, Axis3d, LandPlot, EyeOff, FileQuestion, BookKey, Wind, Droplets, Ghost
} from 'lucide-react';

const Archive027 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "思辨",
      title: "Wordsmith in the Dark",
      subtitle: "它懂“光”的每一个字，却从未见过一次日出。",
      footer: "Serial No. 027 | AI黑话翻译局",
      visual: "typewriter"
    },
    {
      id: 2,
      type: 'content',
      header: "核心解构",
      title: "AI remains a wordsmith in the dark.",
      translation: "“AI 依然是黑暗中的文字匠。”",
      content: [
        { label: "背景溯源", text: "斯坦福大学教授李飞飞用这个比喻来形容 LLM 的脱节感。模型通过统计概率重组文本，这种“智慧”是二手的、被剥离了物理感官的。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "深度思辨",
      top: {
        title: "博学 (Knowledgeable)",
        text: "它读过所有的文学作品和物理论文，能回答任何关于世界的问题。",
        icon: <BookOpen className="w-6 h-6 text-amber-400" />
      },
      bottom: {
        title: "未扎根 (Ungrounded)",
        text: "它没有“身体”作为锚点。它知道 F=ma，但不知道被重物压住是什么感觉；它知道“痛苦”，但它没有神经末梢。",
        icon: <Ghost className="w-6 h-6 text-zinc-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "盲写菜谱", desc: "文字匠", icon: <PenTool size={24} /> },
      right: { title: "尝不出咸淡", desc: "无物理感官", icon: <Utensils size={24} /> },
      explanation: "文字匠像一个生来就没有味觉的诗人，背下了所有形容美食的词。当你让他描述“红烧肉”时，他写出“色泽红亮、入口即化”，因为概率告诉他这些词常在一起。但他脑子里没有油脂的香气。他在用概率模拟“美味”，而不是在理解“美味”。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "解释了幻觉", text: "匠人在黑暗中编织，全靠概率推测，难免会编错现实的物理逻辑。", icon: <EyeOff className="text-zinc-400" /> },
        { title: "指明了方向", text: "AI 必须拥有“空间智能”和“感官介入”（具身智能），才能从文字匠进化为真正的“世界模型”。", icon: <Compass className="text-amber-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "我们应该怎么看",
      cards: [
        { title: "尊重直觉", text: "人类的伟大在于，我们的知识是“有温度”的，是从摔倒、疼痛和欢笑中生长出来的实体经验。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：二手经验的局限", text: "不要把 AI 拼凑的完美文本等同于真实的生命体验。" },
        { type: 'thought', title: "反思：文字的温度", text: "如果我们长期生活在 AI 编织的完美文字里，是否也会慢慢忘记，真实的日出是有温度的，而不仅仅是一个“高概率词汇”？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "文字匠的告白",
      subtitle: "我博学，但我一无所知",
      footer: "Serial No. 027 | AI黑话翻译局",
      visual: "typewriter"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#050505] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Deep Dark Void with a single Amber Light Source */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-amber-900/10 via-[#050505] to-[#050505]"></div>
      
      {/* Dust/Dust Particles in the light beam */}
      <div className="absolute w-full h-full opacity-10" style={{ 
        backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)', 
        backgroundSize: '60px 60px',
        animation: 'pulse 4s infinite alternate'
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-zinc-500/30 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-amber-500 text-[#050505] shadow-amber-500/20">
            <Tag size={10} className="text-[#050505]" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label */}
        <div className={`flex justify-between items-center text-[10px] text-amber-500/40 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 027</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-amber-500' : 'w-1 bg-zinc-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-56 w-full">
        {/* The Typewriter in the dark */}
        <div className="relative mt-12 flex flex-col items-center">
            {/* Emitting Poetry Lines */}
            <div className="absolute bottom-full mb-2 flex flex-col items-center gap-1.5 opacity-80">
                <div className="w-16 h-1 bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)] animate-[slideUp_2s_infinite]"></div>
                <div className="w-24 h-1 bg-amber-400/80 shadow-[0_0_10px_rgba(251,191,36,0.5)] animate-[slideUp_2s_infinite_0.5s]"></div>
                <div className="w-12 h-1 bg-amber-400/60 animate-[slideUp_2s_infinite_1s]"></div>
            </div>

            {/* Typewriter Icon Base */}
            <div className="relative bg-zinc-900 p-4 rounded-t-lg border-t border-x border-zinc-700 shadow-[0_0_30px_rgba(251,191,36,0.15)] z-20">
                <Type size={32} className="text-amber-500 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-pulse" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-amber-500/50 rounded-full blur-sm"></div>
            </div>
            {/* Keyboard Base */}
            <div className="w-24 h-4 bg-zinc-800 rounded-b-xl border-b border-x border-zinc-700 flex justify-center items-center gap-1 z-20">
                <div className="w-2 h-1 bg-zinc-600 rounded-full"></div>
                <div className="w-2 h-1 bg-zinc-600 rounded-full"></div>
                <div className="w-6 h-1 bg-zinc-600 rounded-full"></div>
            </div>
        </div>

        {/* Floating Ungrounded Words (Just symbols in the dark) */}
        <div className="absolute top-2 left-6 flex flex-col items-center text-amber-200/40 animate-pulse font-serif">
            <Sun size={14} className="mb-1 opacity-50" />
            <span className="text-[10px] tracking-widest">太阳</span>
        </div>
        
        <div className="absolute top-10 right-8 flex flex-col items-center text-amber-200/40 animate-[pulse_3s_infinite] delay-150 font-serif">
            <Droplets size={14} className="mb-1 opacity-50" />
            <span className="text-[10px] tracking-widest">雨水</span>
        </div>

        <div className="absolute bottom-8 left-10 flex flex-col items-center text-amber-200/30 animate-[pulse_2.5s_infinite] delay-300 font-serif">
            <span className="text-[8px] font-mono mb-1 border border-amber-200/20 px-1 rounded">F=ma</span>
            <span className="text-[10px] tracking-widest">重力</span>
        </div>
        
        <div className="absolute bottom-4 right-12 flex flex-col items-center text-amber-200/30 animate-bounce delay-500 font-serif">
            <Wind size={14} className="mb-1 opacity-50" />
            <span className="text-[10px] tracking-widest">微风</span>
        </div>

        {/* CSS for custom animation */}
        <style dangerouslySetContent={{__html: `
          @keyframes slideUp {
            0% { transform: translateY(10px); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(-20px); opacity: 0; }
          }
        `}} />
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

            <h1 className="text-4xl font-bold mb-4 tracking-tighter leading-tight text-white drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
              Wordsmith in the<br/>
              <span className="text-zinc-600 font-serif italic text-5xl">Dark</span>
            </h1>
            
            <p className="text-sm text-amber-100/70 font-light tracking-widest border-t border-b border-amber-900/30 py-3 px-4">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-amber-700/50 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover':
        return (
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6 relative">
             {/* Left: Physical Books (Stacked, dark) */}
             <div className="w-[30%] h-full flex flex-col justify-center items-end pr-12 relative border-r border-zinc-800">
                <div className="opacity-30 flex flex-col gap-1 items-end relative z-10">
                   <div className="w-24 h-4 bg-amber-900 rounded-sm"></div>
                   <div className="w-32 h-6 bg-zinc-800 rounded-sm ml-4"></div>
                   <div className="w-28 h-5 bg-amber-950 rounded-sm"></div>
                   <div className="w-20 h-3 bg-zinc-700 rounded-sm ml-8"></div>
                   <div className="w-36 h-8 bg-zinc-900 rounded-sm mt-2 border border-zinc-800 flex items-center px-2">
                      <Library size={12} className="text-zinc-600" />
                   </div>
                </div>
                <div className="absolute bottom-10 right-12 text-[10px] font-mono text-zinc-600 tracking-widest text-right">
                   PHYSICAL_WORLD <br/> [UNREACHABLE]
                </div>
             </div>

             {/* Center: Text */}
             <div className="flex-1 flex flex-col justify-center text-center z-20 px-8">
                <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
                   <Fingerprint size={14} className="text-amber-500"/>
                   <span className="text-sm text-amber-500 font-mono tracking-[0.2em]">SERIAL NO. 027</span>
                </div>
                
                <h1 className="text-6xl font-bold text-white tracking-tighter mb-4 leading-none">
                  文字匠的告白
                </h1>
                
                <div className="inline-block border-b border-amber-500/30 pb-4">
                  <span className="text-2xl font-light tracking-wide font-serif italic text-amber-200/80 whitespace-nowrap">
                    “我博学，但我一无所知”
                  </span>
                </div>
             </div>

             {/* Right: Flowing Code/Text (Bright, ethereal) */}
             <div className="w-[30%] h-full flex flex-col justify-center items-start pl-12 relative border-l border-zinc-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-amber-900/10 to-transparent"></div>
                <div className="opacity-60 flex flex-col gap-2 relative z-10 font-mono text-[8px] text-amber-400">
                   <div className="animate-pulse">predict_next_token("sunrise")</div>
                   <div className="animate-[pulse_2s_infinite] delay-100 text-amber-200">weight: 0.9992</div>
                   <div className="h-[1px] w-12 bg-amber-500/30 my-1"></div>
                   <div className="animate-[pulse_1.5s_infinite] delay-300">output = "golden rays"</div>
                   <div className="animate-pulse delay-500 text-zinc-500"># temperature: missing</div>
                </div>
                <div className="absolute bottom-10 left-12 text-[10px] font-mono text-amber-600/50 tracking-widest">
                   PROBABILITY_SPACE <br/> [CURRENT_DOMAIN]
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-amber-500 mb-8 border-l-4 border-amber-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-zinc-400 mb-2 uppercase tracking-wider">The Quote</div>
                 <div className="text-2xl font-bold text-white mb-2 leading-tight italic font-serif">"{slide.title}"</div>
                 {slide.translation && (
                   <div className="text-sm text-amber-200/80 mt-3 border-t border-white/10 pt-3">
                     {slide.translation}
                   </div>
                 )}
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-amber-500 font-mono uppercase border-b border-zinc-800 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-zinc-300 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-amber-500 mb-8 border-l-4 border-amber-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-amber-900/10 border border-amber-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-amber-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-amber-100/70 leading-relaxed">{slide.top.text}</p>
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
               <h2 className="text-3xl font-bold text-amber-500">{slide.header}</h2>
               <span className="text-sm text-zinc-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-amber-900/10 border border-amber-500/20 p-4 rounded-lg flex flex-col items-center text-center">
                    <div className="mb-2 text-amber-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-amber-200">{slide.left.title}</div>
                    <div className="text-xs text-amber-500/60">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-zinc-600 font-bold">VS</div>
                <div className="flex-1 bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg flex flex-col items-center text-center opacity-70">
                    <div className="mb-2 text-zinc-500">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-zinc-400">{slide.right.title}</div>
                    <div className="text-xs text-zinc-600">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-amber-500">
                <p className="text-base leading-7 text-zinc-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-amber-500 mb-10 border-l-4 border-amber-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-amber-500"></div>
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
                <h2 className="text-3xl font-bold text-amber-500 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0a0a0a] p-6 rounded-2xl border border-zinc-800 hover:border-amber-500/30 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#050505] px-2 text-xs font-mono text-zinc-600 group-hover:text-amber-500 transition-colors">
                               View 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-amber-100 mb-1">{card.title}</h3>
                           <p className="text-zinc-400 text-sm leading-relaxed">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-amber-500 mb-8 border-l-4 border-amber-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-zinc-900/50 border-zinc-700' : 'bg-amber-900/10 border-amber-500/20'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-zinc-500" /> : <Brain className="text-amber-500" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-zinc-300' : 'text-amber-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-amber-500">
                     END OF ARCHIVE 027
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
        <div className={`w-full bg-[#050505] shadow-2xl border-4 border-zinc-900 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' 
             : 'aspect-[3/4] rounded-[3rem] p-3'
        }`}>
           <div className={`w-full h-full overflow-hidden bg-[#050505] ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
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
          <span className="text-amber-500/70 font-mono text-sm min-w-[3ch] text-center">
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

export default Archive027;