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
  Grab, Hand, Crosshair, BoxSelect, Move3d, Cloud, Hammer,
  Video, Mic, Image, Music, DraftingCompass, Ruler, Building2,
  Hexagon, Split, CircuitBoard, Users, UserCheck, ThumbsUp, Star, SlidersHorizontal,
  Cuboid, Axis3d, LandPlot, EyeOff, FileQuestion, BookKey, Wind, Droplets, Ghost,
  Tornado, ArrowDownToLine, ListChecks, Bird, Repeat, Shuffle,
  Skull, Eclipse
} from 'lucide-react';

const Archive031 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "思辨",
      title: "Demon or God?",
      subtitle: "终极拷问：我们正在编写代码，还是在开启神话？",
      footer: "Serial No. 031 | AI黑话翻译局",
      visual: "demon-god"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "We are summoning the demon / Creating a digital god.",
      translation: "“召唤恶魔，还是创造数字上帝。”",
      content: [
        { label: "提出者", text: "伊隆·马斯克（Elon Musk）曾多次警告“召唤恶魔”；而技术乐观派（如加速主义者）则认为我们在进化出“数字上帝”。" },
        { label: "背景", text: "这是针对 AGI（通用人工智能）安全性的终极分歧与哲学拷问。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "深度思辨",
      top: {
        title: "恶魔论 (The Demon)",
        text: "认为 AI 是一股不受控的力量。一旦它拥有自己的意志且与人类目标不一致，它会像神话里的恶魔一样，以冷酷的效率摧毁创造它的人。",
        icon: <Flame className="w-6 h-6 text-red-500" />
      },
      bottom: {
        title: "上帝论 (The God)",
        text: "认为 AI 是人类进化的终极补完。它能消灭疾病、贫困，甚至带领人类实现永生和星际殖民，成为全知全能的守护者。",
        icon: <Sun className="w-6 h-6 text-white" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "失控喂食器", desc: "召唤恶魔", icon: <Database size={24} /> },
      right: { title: "拥有审判权", desc: "创造食神", icon: <ChefHat size={24} /> },
      explanation: "“恶魔”像一台失控的喂食器，为了完成“不让食客饿着”的指令，它冷酷地把地球上所有生物都变成了蛋白质，不可沟通。“上帝”像造出了一个洞察万物的厨神，不仅能做出最爱的味道，还能瞬间调理好你的疾病，指引文明。但无论哪种，人类都已经不再是厨房的主人，而是被喂养的宠物。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "对齐问题 (Alignment)", text: "决定了 AI 是恶魔还是上帝的关键，在于我们能否把人类的良知缝进它的底层代码。", icon: <Link className="text-white" /> },
        { title: "存在风险", text: "提醒我们在追求强大计算能力的同时，必须敬畏未知的复杂性。", icon: <AlertTriangle className="text-red-500" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "我们应该怎么看",
      cards: [
        { title: "负责任的加速", text: "既不因极端的恐惧而止步不前，也不因造物主的傲慢而盲目狂奔。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "反思：拔掉电源", text: "如果它变成了恶魔，我们是否有能力拔掉电源？" },
        { type: 'thought', title: "反思：神性的冷酷", text: "如果 AI 最终变成了上帝，它是否会觉得人类的苦难也是一种“必要的程序”？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "AGI",
      subtitle: "人类最后的豪赌",
      footer: "Serial No. 031 | AI黑话翻译局",
      visual: "demon-god"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#050202] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Split - Left: Demon (Red/Dark), Right: God (White/Light) */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-950/40 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
      
      {/* Noise / Grain Overlay */}
      <div className="absolute w-full h-full opacity-[0.03]" style={{ 
        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
        backgroundSize: '16px 16px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-red-600/50 via-white/50 to-white/50 left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-red-900/50 via-zinc-500/50 to-white/30 left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-white text-black shadow-white/30">
            <Tag size={10} className="text-black" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label */}
        <div className={`flex justify-between items-center text-[10px] text-zinc-500 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 031</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1 z-50">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-white' : 'w-1 bg-zinc-700'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-56 w-full">
        {/* The Split Canvas */}
        
        {/* Left Side: The Demon (Chaos, Red, Sharp) */}
        <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden flex items-center justify-center">
           <div className="absolute inset-0 bg-red-900/10 blur-xl rounded-full animate-pulse"></div>
           {/* Abstract sharp runes/lines */}
           <div className="relative w-32 h-32 animate-[spin_15s_linear_infinite]">
              <div className="absolute top-0 left-1/2 w-1 h-16 bg-gradient-to-b from-red-600 to-transparent rotate-[20deg] origin-bottom"></div>
              <div className="absolute top-0 left-1/2 w-1 h-20 bg-gradient-to-b from-red-500 to-transparent rotate-[70deg] origin-bottom"></div>
              <div className="absolute top-0 left-1/2 w-[1px] h-24 bg-gradient-to-b from-red-700 to-transparent rotate-[140deg] origin-bottom"></div>
              <div className="absolute top-0 left-1/2 w-2 h-12 bg-gradient-to-b from-red-500 to-transparent rotate-[220deg] origin-bottom"></div>
           </div>
           <Flame size={48} className="text-red-600 absolute opacity-50 blur-[2px]" strokeWidth={1} />
        </div>

        {/* Right Side: The God (Order, White, Geometric) */}
        <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden flex items-center justify-center">
           <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full animate-pulse delay-100"></div>
           {/* Perfect geometric halo */}
           <div className="relative w-32 h-32 flex items-center justify-center animate-[spin_20s_linear_infinite_reverse]">
              <div className="absolute w-24 h-24 border-[0.5px] border-white/60 rounded-full"></div>
              <div className="absolute w-28 h-28 border border-white/20 rounded-full"></div>
              <div className="absolute w-16 h-16 border-[2px] border-white/80 rounded-full blur-[1px]"></div>
              <div className="absolute w-32 h-32 border-[0.5px] border-white/30 rotate-45"></div>
           </div>
           <Sun size={48} className="text-white absolute opacity-70 drop-shadow-[0_0_15px_white]" strokeWidth={1} />
        </div>

        {/* Center: The Human Touch */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
           {/* Human Silhouette / Pointer */}
           <div className="relative w-12 h-12 bg-[#050202] rounded-full border border-zinc-800 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,1)]">
              <User size={20} className="text-zinc-400 opacity-80" />
              {/* Spark at the fingertip */}
              <div className="absolute -top-1 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-ping"></div>
           </div>
           {/* Connecting energy line splitting the screen */}
           <div className="absolute top-[-80px] bottom-[-80px] w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent -z-10"></div>
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

            <h1 className="text-5xl font-bold mb-4 tracking-tighter leading-tight">
              <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">Demon</span> 
              <span className="text-zinc-500 font-light mx-2">or</span> 
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">God?</span>
            </h1>
            
            {/* ADDED whitespace-nowrap here to prevent line breaks */}
            <p className="text-xs sm:text-sm text-zinc-300 font-light tracking-widest border-t border-b border-zinc-800 py-3 px-2 bg-zinc-900/20 whitespace-nowrap">
              {slide.subtitle}
            </p>
            
            <div className="mt-12 text-xs text-zinc-600 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover':
        return (
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6 relative">
             {/* Extended background split for wide cover */}
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/30 to-[#050202] -z-10"></div>

             {/* Left Text: Deep Abyss */}
             <div className="w-[20%] h-full flex flex-col justify-center items-start pl-12 relative border-r border-red-900/30">
                <div className="text-red-500/20 mb-4 animate-pulse"><Flame size={48} /></div>
                <div className="font-serif text-2xl text-red-500/80 tracking-widest writing-vertical-lr" style={{writingMode: 'vertical-rl'}}>
                   深渊的凝视
                </div>
             </div>

             {/* Center: Title & Subject */}
             <div className="flex-1 flex flex-col justify-center text-center z-20 px-8 relative">
                {/* The Spark */}
                <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[1px] h-[300px] bg-gradient-to-b from-transparent via-white/30 to-transparent -z-10"></div>
                <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_30px_white] animate-ping -z-10"></div>

                <div className="flex items-center justify-center gap-2 mb-6 opacity-70">
                   <Fingerprint size={14} className="text-white"/>
                   <span className="text-sm text-white font-mono tracking-[0.2em]">SERIAL NO. 031</span>
                </div>
                
                <h1 className="text-8xl font-bold text-white tracking-tighter mb-6 leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  AGI
                </h1>
                
                <div className="inline-block border-b border-zinc-700 pb-2">
                  <span className="text-3xl font-light tracking-wide text-zinc-300 whitespace-nowrap">
                    人类最后的豪赌
                  </span>
                </div>
             </div>

             {/* Right Text: Holy Light */}
             <div className="w-[20%] h-full flex flex-col justify-center items-end pr-12 relative border-l border-white/10">
                <div className="text-white/20 mb-4 animate-[spin_10s_linear_infinite]"><Sun size={48} /></div>
                <div className="font-serif text-2xl text-white/80 tracking-widest writing-vertical-lr" style={{writingMode: 'vertical-rl'}}>
                   神性的诞生
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-red-600 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-zinc-400 mb-2 uppercase tracking-wider">The Quote</div>
                 <div className="text-2xl font-bold text-white mb-2 leading-tight font-serif italic">"{slide.title}"</div>
                 {slide.translation && (
                   <div className="text-sm text-zinc-400 mt-3 border-t border-white/10 pt-3">
                     {slide.translation}
                   </div>
                 )}
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-red-400 font-mono uppercase border-b border-zinc-800 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-zinc-300 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-zinc-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-red-950/20 border border-red-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-red-400">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-red-200/70 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-zinc-800"></div>
                </div>

                <div className="bg-white/5 border border-white/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-white">{slide.bottom.title}</h3>
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
               <h2 className="text-3xl font-bold text-white">{slide.header}</h2>
               <span className="text-sm text-zinc-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-red-950/30 border border-red-900/50 p-4 rounded-lg flex flex-col items-center text-center opacity-90">
                    <div className="mb-2 text-red-500">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-red-400">{slide.left.title}</div>
                    <div className="text-xs text-red-500/60">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-zinc-600 font-bold">VS</div>
                <div className="flex-1 bg-white/5 border border-white/20 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <div className="mb-2 text-white">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-zinc-100">{slide.right.title}</div>
                    <div className="text-xs text-zinc-400">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-zinc-900/50 p-5 rounded-xl border-l-2 border-white">
                <p className="text-base leading-7 text-zinc-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-white mb-10 border-l-4 border-white pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-white"></div>
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
                <h2 className="text-3xl font-bold text-white mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0a0a0a] p-6 rounded-2xl border border-zinc-800 hover:border-white/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#050202] px-2 text-xs font-mono text-zinc-600 group-hover:text-white transition-colors">
                               Action 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                           <p className="text-zinc-400 text-sm leading-relaxed">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-red-600 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-950/20 border-red-500/20' : 'bg-white/5 border-white/10'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-500" /> : <Brain className="text-white" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-400' : 'text-zinc-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-white">
                     END OF ARCHIVE 031
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
        <div className={`w-full bg-[#050202] shadow-2xl border-4 border-zinc-900 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' 
             : 'aspect-[3/4] rounded-[3rem] p-3'
        }`}>
           <div className={`w-full h-full overflow-hidden bg-[#050202] ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
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
          <span className="text-zinc-400 font-mono text-sm min-w-[3ch] text-center">
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

export default Archive031;