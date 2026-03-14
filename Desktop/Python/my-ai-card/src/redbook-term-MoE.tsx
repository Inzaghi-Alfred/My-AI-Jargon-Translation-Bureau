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
  Hexagon, Split, CircuitBoard, Users
} from 'lucide-react';

const Archive024 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "MoE",
      subtitle: "大模型变强的秘密，是给大脑装了一部“专家电梯”。",
      footer: "Serial No. 024 | AI黑话翻译局",
      visual: "moe"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Mixture of Experts",
      translation: "“混合专家模型”",
      content: [
        { label: "中文语境", text: "混合专家模型。" },
        { label: "出处", text: "概念源自 90 年代，2023 年因 GPT-4 和 Mixtral 采用该架构而彻底火出圈，成为提升规模的“降本增效”神技。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "一种稀疏门控神经网络架构。将模型参数划分为多个“专家网络”，每次处理任务时，通过“门控网络”只激活其中一小部分专家。",
        icon: <CircuitBoard className="w-6 h-6 text-amber-400" />
      },
      bottom: {
        title: "说人话",
        text: "“按需调用，拒绝全员加班”。以前是全脑动员，MoE 是“术业有专攻”：问数学找数学专家，问写诗找文学专家，其他人带薪休假，效率起飞。",
        icon: <Split className="w-6 h-6 text-blue-300" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "全能累死厨师", desc: "密集模型 (Dense)", icon: <User size={24} /> },
      right: { title: "16人专家团", desc: "MoE 模型", icon: <Users size={24} /> },
      explanation: "密集模型是一个厨师做满汉全席，反应慢且易出错。MoE 是厨房里坐着 16 位专家（切配、点心、烤肉等）。门口传菜员（门控）精准拍板：做烤鸭就叫烤肉师，其他人休息。菜上得快，且道道专业。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "规模暴力", text: "可以在不增加推理成本的前提下，把模型参数推向万亿级。", icon: <TrendingUp className="text-amber-400" /> },
        { title: "个性化潜力", text: "不同的专家可以学习不同的风格和知识领域，实现更精细的能力划分。", icon: <Fingerprint className="text-blue-300" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么看",
      cards: [
        { title: "稀疏性 (Sparsity)", text: "聪明不一定要堆硬件，更要靠精准的调度逻辑。让 1% 的脑细胞干 100% 的活。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：调度艺术", text: "训练 MoE 非常难，容易出现“贫富差距”（有的专家累死，有的从没被叫过），需要负载均衡。" },
        { type: 'thought', title: "反思：通用的本质", text: "如果智能的进化是不断细分与协作，那“通用智能”的本质是否就是无数个“垂直天才”的高效整合？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "MoE",
      subtitle: "开启万亿参数的专家时代",
      footer: "Serial No. 024 | AI黑话翻译局",
      visual: "moe"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#0f0f10] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for MoE (Honeycomb/Amber/Blue) */}
      <div className="absolute top-[-20%] right-[-20%] w-[70%] h-[60%] bg-amber-900/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-20%] left-[-20%] w-[70%] h-[60%] bg-blue-900/10 blur-[100px] rounded-full"></div>
      
      {/* Hexagon Pattern */}
      <div className="absolute w-full h-full opacity-5" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'34\' viewBox=\'0 0 20 34\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M10 0l10 5.773v11.547L10 23.094 0 17.32V5.773z\' fill=\'%23ffffff\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")', 
        backgroundSize: '40px 68px'
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-amber-500 text-[#0f0f10] shadow-amber-500/30">
            <Tag size={10} className="text-amber-950" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label - Hiding No. on cover pages */}
        <div className={`flex justify-between items-center text-[10px] text-zinc-500 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 024</span>
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
    <div className="relative z-10 flex items-center justify-center h-48 w-full">
        {/* The Hexagon Hive */}
        <div className="relative w-48 h-48 flex items-center justify-center">
           {/* Gating Network (Center) - Static */}
           <div className="absolute z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)] animate-pulse">
              <Split size={24} className="text-amber-600" />
           </div>

           {/* Rotating Assembly of Experts */}
           <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
               
               {/* Active Expert 1 (Top) */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8">
                  {/* Beam - rotates with parent */}
                  <div className="absolute top-1/2 left-1/2 w-[2px] h-12 bg-gradient-to-t from-white to-blue-400 -translate-x-1/2 translate-y-2 opacity-50"></div>
                  {/* Icon - counter rotates to stay upright */}
                  <div className="animate-[spin_20s_linear_infinite_reverse]">
                    <Hexagon size={48} className="text-blue-400 fill-blue-500/20 animate-pulse" strokeWidth={1} />
                  </div>
               </div>

               {/* Active Expert 2 (Bottom Right) */}
               <div className="absolute bottom-0 right-4 translate-y-8">
                  <div className="absolute top-1/2 left-1/2 w-[2px] h-12 bg-gradient-to-b from-white to-blue-400 -translate-x-1/2 -translate-y-14 rotate-[150deg] opacity-50 origin-bottom"></div>
                  <div className="animate-[spin_20s_linear_infinite_reverse]">
                    <Hexagon size={48} className="text-blue-400 fill-blue-500/20 animate-pulse delay-75" strokeWidth={1} />
                  </div>
               </div>

               {/* Inactive Expert 1 (Bottom Left) */}
               <div className="absolute bottom-0 left-4 translate-y-8 opacity-20">
                  <div className="animate-[spin_20s_linear_infinite_reverse]">
                    <Hexagon size={48} className="text-zinc-500" strokeWidth={1} />
                  </div>
               </div>

               {/* Inactive Expert 2 (Top Left) */}
               <div className="absolute top-12 left-[-40px] opacity-20">
                  <div className="animate-[spin_20s_linear_infinite_reverse]">
                    <Hexagon size={48} className="text-zinc-500" strokeWidth={1} />
                  </div>
               </div>

               {/* Inactive Expert 3 (Top Right) */}
               <div className="absolute top-12 right-[-40px] opacity-20">
                  <div className="animate-[spin_20s_linear_infinite_reverse]">
                    <Hexagon size={48} className="text-zinc-500" strokeWidth={1} />
                  </div>
               </div>
           </div>

           {/* Connecting Beams Background */}
           <div className="absolute inset-0 animate-[spin_3s_linear_infinite] opacity-30 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent -translate-x-1/2"></div>
           </div>
        </div>
    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-10 group w-full h-48">
              {renderVisuals()}
            </div>

            <h1 className="text-6xl font-bold mb-6 tracking-tighter leading-tight text-white">
              MoE
            </h1>
            
            <p className="text-lg text-amber-100/80 font-light tracking-widest border-t border-b border-amber-900/50 py-3 px-2 bg-amber-900/10">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-amber-600 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover':
        return (
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6 relative">
             {/* Left: Visuals - Orbital Hexagons (Ferris Wheel Effect) */}
             <div className="w-[40%] h-full flex items-center justify-center relative pl-8">
                {/* Center Static Node */}
                <div className="absolute z-20 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.6)]">
                    <Split size={32} className="text-amber-600" />
                </div>

                {/* Rotating Ring Container */}
                <div className="relative w-64 h-64 animate-[spin_20s_linear_infinite]">
                   {/* Orbiting Items */}
                   {[...Array(6)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6"
                        // Position hexagon on the ring
                        style={{ transform: `rotate(${i * 60}deg) translate(8rem)` }} 
                      >
                        {/* Counter-rotate the item so it stays upright while orbiting */}
                        <div className="animate-[spin_20s_linear_infinite_reverse] w-full h-full flex items-center justify-center">
                            <Hexagon 
                              size={48} 
                              className={`
                                ${i === 0 || i === 2 || i === 4 ? 'text-blue-400 fill-blue-500/20 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'text-zinc-700 fill-zinc-800/80'}
                                transition-all duration-1000
                              `} 
                              strokeWidth={1} 
                            />
                            {/* Inner icon for detail */}
                            {i === 0 && <span className="absolute text-[8px] font-mono text-blue-200">MATH</span>}
                            {i === 2 && <span className="absolute text-[8px] font-mono text-blue-200">CODE</span>}
                            {i === 4 && <span className="absolute text-[8px] font-mono text-blue-200">ART</span>}
                        </div>
                      </div>
                   ))}
                   
                   {/* Connecting Lines (Scanning Beams) */}
                   <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                   <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                </div>
             </div>

             {/* Right: Text */}
             <div className="flex-1 flex flex-col justify-center text-center z-20 px-4">
                <div className="flex items-center justify-center gap-2 mb-4 opacity-60">
                   <Fingerprint size={14} className="text-amber-500"/>
                   <span className="text-sm text-amber-500 font-mono tracking-[0.2em]">SERIAL NO. 024</span>
                </div>
                
                <h1 className="text-8xl font-bold text-white tracking-tighter mb-4 leading-none drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                  MoE
                </h1>
                
                <div className="inline-block border-b-2 border-amber-500/50 pb-2">
                  <span className="text-3xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-white to-blue-200 whitespace-nowrap">
                    开启万亿参数的专家时代
                  </span>
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
                 <div className="text-xs text-blue-300 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-1 leading-tight">{slide.title}</div>
                 {/* Translation */}
                 {slide.translation && (
                   <div className="text-lg text-amber-100/80 mt-2 font-serif italic border-t border-white/10 pt-2">
                     {slide.translation}
                   </div>
                 )}
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-zinc-400 font-mono uppercase border-b border-zinc-800 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-zinc-200 font-light">{item.text}</p>
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
                   <p className="text-sm text-zinc-300 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-zinc-700"></div>
                </div>

                <div className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-blue-200">{slide.bottom.title}</h3>
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
               <h2 className="text-3xl font-bold text-amber-500">{slide.header}</h2>
               <span className="text-sm text-zinc-400">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-zinc-900 p-4 rounded-lg flex flex-col items-center text-center opacity-70 border border-zinc-800">
                    <div className="mb-2 text-zinc-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-zinc-300">{slide.left.title}</div>
                    <div className="text-xs text-zinc-500">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-white font-bold">→</div>
                <div className="flex-1 bg-gradient-to-br from-amber-900/20 to-blue-900/20 border border-amber-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                    <div className="mb-2 text-blue-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-amber-100">{slide.right.title}</div>
                    <div className="text-xs text-amber-200/80">{slide.right.desc}</div>
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
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-700"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-amber-500"></div>
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
                <h2 className="text-3xl font-bold text-amber-500 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#18181b] p-6 rounded-2xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#0f0f10] px-2 text-xs font-mono text-zinc-500 group-hover:text-amber-500 transition-colors">
                               View 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                           <p className="text-zinc-400 text-sm">{card.text}</p>
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
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-amber-900/20 border-amber-500/20' : 'bg-blue-900/10 border-blue-500/20'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-amber-400" /> : <Brain className="text-blue-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-amber-200' : 'text-blue-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-zinc-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-amber-500">
                     END OF ARCHIVE 024
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
        <div className={`w-full bg-[#0f0f10] shadow-2xl border-4 border-zinc-800 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' 
             : 'aspect-[3/4] rounded-[3rem] p-3'
        }`}>
           <div className={`w-full h-full overflow-hidden ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
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
          <span className="text-amber-500 font-mono text-sm min-w-[3ch] text-center">
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

export default Archive024;