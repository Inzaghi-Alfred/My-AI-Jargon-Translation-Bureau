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
  Tornado, ArrowDownToLine, ListChecks
} from 'lucide-react';

const Archive029 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "Post-training",
      subtitle: "AI 的“成人礼”，从懂万物到懂人心。",
      footer: "Serial No. 029 | AI黑话翻译局",
      visual: "laser-cut"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Post-training",
      content: [
        { label: "核心身份", text: "大模型研发的关键第二阶段（在预训练之后）。" },
        { label: "包含工序", text: "SFT（指令微调）、RLHF（人类反馈强化学习）、DPO（直接偏好优化）等一系列技术手段的统称。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "在预训练模型的基础上，利用高质量、带标签的数据进行进一步优化。目的是让模型能够遵循指令、对齐人类价值观，并提升特定任务的性能。",
        icon: <Wand2 className="w-6 h-6 text-blue-400" />
      },
      bottom: {
        title: "说人话",
        text: "“岗前培训”。预训练后的 AI 像个读过万卷书但没出过门的“书呆子”。后训练就是教它：“当我说帮我写个大纲，你应该输出列表，而不是下一段废话。”",
        icon: <MessageSquare className="w-6 h-6 text-slate-300" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "懂食材的狂人", desc: "预训练模型", icon: <Database size={24} /> },
      right: { title: "察言观色名厨", desc: "后训练模型", icon: <ChefHat size={24} /> },
      explanation: "预训练给了厨师全天下的食材和食谱。但他不知道哪种菜有毒，也不知道现代人喜欢少盐。后训练（Post-training）是一场实战演习，主厨盯着他：“这道菜太咸”、“那个回答太粗鲁”。最终厨师学会了察言观色，不再只是输出食物，而是在输出“满意度”。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "指令遵循 (Instruction Following)", text: "让 AI 真正听得懂人话，而不是单纯地跟你玩文字接龙。", icon: <ListChecks className="text-blue-400" /> },
        { title: "安全性 (Safety)", text: "建立护城河，拒绝回答危险、违法或有害的问题。", icon: <ShieldCheck className="text-slate-300" /> },
        { title: "思维链 (CoT)", text: "很多强大的逻辑推理能力，是在这个阶段通过特定的后训练数据“诱导”出来的。", icon: <Network className="text-blue-300" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么看",
      cards: [
        { title: "数据不在多，在精", text: "预训练拼的是算力与规模的“暴力美学”；后训练拼的则是数据的“含金量”和人类的审美标准。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：过度对齐 (Over-alignment)", text: "如果后训练太严苛，AI 会变得畏首畏尾，只会说“作为一个 AI，我不能……”。" },
        { type: 'thought', title: "反思：偏见与平庸", text: "后训练本质上是人类在用自己的偏见去修正概率。那么，被修正后的 AI，到底是更聪明了，还是更平庸了？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "后训练",
      subtitle: "赋予代码以温情与秩序",
      footer: "Serial No. 029 | AI黑话翻译局",
      visual: "laser-cut"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#0a0f16] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Deep Slate with sharp blue ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-950/20 via-[#0a0f16] to-[#0a0f16]"></div>
      
      {/* Grid / Machining Pattern */}
      <div className="absolute w-full h-full opacity-10" style={{ 
         backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
         backgroundSize: '40px 40px',
         backgroundPosition: 'center center'
      }}></div>
      
      {/* Decoration Lines - The "Laser Track" */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/80 to-transparent left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-slate-600/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-blue-500 text-[#0a0f16] shadow-blue-500/30">
            <Tag size={10} className="text-blue-950" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label */}
        <div className={`flex justify-between items-center text-[10px] text-slate-500 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 029</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-blue-500' : 'w-1 bg-slate-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-56 w-full">
        {/* Left/Background: The Rough Raw Stone (Base Model) */}
        <div className="absolute top-1/2 left-[30%] -translate-y-1/2 opacity-40">
           <svg viewBox="0 0 100 100" className="w-32 h-32 fill-slate-800 animate-[pulse_4s_infinite]">
              <polygon points="10,30 35,5 75,20 90,60 55,95 15,80" />
           </svg>
           <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 text-[8px] font-mono text-slate-500 tracking-widest">BASE_MODEL</span>
        </div>

        {/* Right/Foreground: The Refined Object (Post-Trained Model) */}
        <div className="absolute top-1/2 right-[30%] -translate-y-1/2 z-20 flex flex-col items-center">
           <div className="relative">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-xl animate-pulse"></div>
              {/* Refined Shape */}
              <div className="relative w-24 h-24 bg-gradient-to-br from-slate-900 to-blue-950 border border-blue-400/50 rounded-2xl shadow-[0_0_25px_rgba(59,130,246,0.3)] flex items-center justify-center overflow-hidden">
                 {/* Internal logic grid */}
                 <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-20">
                    {[...Array(16)].map((_, i) => <div key={i} className="border-[0.5px] border-blue-400/30"></div>)}
                 </div>
                 <MessageSquare size={40} className="text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)] z-10" />
              </div>
           </div>
           <span className="absolute bottom-[-20px] text-[8px] font-mono text-blue-400 tracking-widest animate-pulse">ALIGNED</span>
        </div>

        {/* Center: The Laser Carving Beam */}
        <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 h-[120%] flex flex-col items-center z-30">
           {/* Laser Source Emitter */}
           <div className="w-8 h-4 bg-slate-200 rounded-t-sm border-b-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
           {/* The Beam */}
           <div className="w-1 flex-1 bg-white shadow-[0_0_20px_2px_rgba(59,130,246,1)] animate-[pulse_0.1s_infinite]"></div>
           {/* Sparks where it cuts */}
           <div className="absolute top-1/2 w-4 h-4 bg-white rounded-full blur-[2px] animate-ping"></div>
           <Sparkles size={20} className="absolute top-1/2 text-blue-200 animate-spin-slow" />
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

            <h1 className="text-5xl font-bold mb-4 tracking-tighter leading-tight text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              Post-training
            </h1>
            
            <p className="text-sm text-slate-300 font-light tracking-widest border-t border-b border-blue-900/50 py-3 px-4 bg-blue-950/20">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-blue-500/70 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover':
        return (
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6 relative">
             {/* Left: Chaotic Data Cloud */}
             <div className="w-[30%] h-full flex flex-col justify-center items-center relative border-r border-blue-900/30">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 to-transparent"></div>
                
                {/* Abstract Cloud Array */}
                <div className="relative w-full h-48 flex items-center justify-center opacity-30">
                   {[...Array(20)].map((_, i) => (
                      <div key={i} className="absolute text-slate-500 font-mono text-[8px] animate-pulse"
                           style={{ 
                             top: `${Math.random() * 100}%`, 
                             left: `${Math.random() * 100}%`,
                             animationDelay: `${Math.random() * 2}s`
                           }}>
                         {Math.random() > 0.5 ? 'TEXT' : 'DATA'}
                      </div>
                   ))}
                   <div className="w-32 h-32 bg-slate-800 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] blur-xl animate-[spin_15s_linear_infinite]"></div>
                </div>
             </div>

             {/* Center: Title + Laser Element */}
             <div className="flex-1 flex flex-col justify-center text-center z-20 px-8 relative">
                {/* Behind title laser */}
                <div className="absolute top-[-50px] bottom-[-50px] left-1/2 -translate-x-1/2 w-[1px] bg-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.5)] -z-10"></div>
                
                <div className="flex items-center justify-center gap-2 mb-4 opacity-70">
                   <Fingerprint size={14} className="text-blue-500"/>
                   <span className="text-sm text-blue-500 font-mono tracking-[0.2em]">SERIAL NO. 029</span>
                </div>
                
                <h1 className="text-7xl font-bold text-white tracking-tighter mb-4 leading-none drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                  后训练
                </h1>
                
                <div className="inline-block bg-[#0a0f16] px-4 py-2 border border-blue-500/30 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <span className="text-2xl font-light tracking-wide text-blue-200 whitespace-nowrap">
                    赋予代码以温情与秩序
                  </span>
                </div>
             </div>

             {/* Right: Structured Dialog Shapes */}
             <div className="w-[30%] h-full flex flex-col justify-center items-center relative border-l border-blue-900/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-blue-950/20 to-transparent"></div>
                
                <div className="w-full px-6 flex flex-col gap-4 relative z-10 opacity-80">
                   {/* Chat Bubble 1 - Human */}
                   <div className="self-end bg-slate-800 border border-slate-700 p-2 rounded-lg rounded-tr-none w-[80%]">
                      <div className="w-full h-1 bg-slate-600 rounded-full mb-1"></div>
                      <div className="w-2/3 h-1 bg-slate-600 rounded-full"></div>
                   </div>
                   {/* Chat Bubble 2 - AI (Aligned) */}
                   <div className="self-start bg-blue-900/30 border border-blue-500/40 p-2 rounded-lg rounded-tl-none w-[90%] shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                      <div className="flex items-center gap-1 mb-2">
                         <CheckCircle size={10} className="text-blue-400" />
                         <span className="text-[8px] text-blue-300 font-mono">SAFE_RESPONSE</span>
                      </div>
                      <div className="w-full h-1 bg-blue-400/50 rounded-full mb-1"></div>
                      <div className="w-full h-1 bg-blue-400/50 rounded-full mb-1"></div>
                      <div className="w-1/2 h-1 bg-blue-400/50 rounded-full"></div>
                   </div>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-blue-400 mb-8 border-l-4 border-blue-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-2 leading-tight font-serif italic">{slide.title}</div>
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-blue-400 font-mono uppercase border-b border-slate-800 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-slate-300 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-blue-400 mb-8 border-l-4 border-blue-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-blue-950/30 border border-blue-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-blue-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-blue-100/70 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-slate-700"></div>
                </div>

                <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-white">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-slate-300 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-slate-800 pb-4">
               <h2 className="text-3xl font-bold text-blue-400">{slide.header}</h2>
               <span className="text-sm text-slate-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-slate-900 border border-slate-800 p-4 rounded-lg flex flex-col items-center text-center opacity-70">
                    <div className="mb-2 text-slate-500">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-slate-400">{slide.left.title}</div>
                    <div className="text-xs text-slate-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-blue-500 font-bold">→</div>
                <div className="flex-1 bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                    <div className="mb-2 text-blue-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-blue-100">{slide.right.title}</div>
                    <div className="text-xs text-blue-400/60">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-blue-500">
                <p className="text-base leading-7 text-slate-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-blue-400 mb-10 border-l-4 border-blue-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-blue-500"></div>
                          <div className="flex items-center gap-2 mb-2">
                             {item.icon}
                             <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          </div>
                          <p className="text-slate-400 leading-relaxed">{item.text}</p>
                      </div>
                  ))}
               </div>
            </div>
        );

      case 'cards':
         return (
             <div className="flex-1 flex flex-col pt-4 justify-center">
                <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0f1522] p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#0a0f16] px-2 text-xs font-mono text-slate-600 group-hover:text-blue-400 transition-colors">
                               Focus 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-blue-100 mb-1">{card.title}</h3>
                           <p className="text-slate-400 text-sm leading-relaxed">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-blue-400 mb-8 border-l-4 border-blue-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-950/20 border-red-500/20' : 'bg-slate-900 border-slate-700'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Brain className="text-slate-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-300' : 'text-slate-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-blue-500">
                     END OF ARCHIVE 029
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
        <div className={`w-full bg-[#0a0f16] shadow-2xl border-4 border-slate-900 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' 
             : 'aspect-[3/4] rounded-[3rem] p-3'
        }`}>
           <div className={`w-full h-full overflow-hidden bg-[#0a0f16] ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
              <CardWrapper index={currentSlide} badge={slides[currentSlide].badge} isWideMode={isWide}>
                {renderSlideContent(slides[currentSlide])}
              </CardWrapper>
           </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 bg-slate-900 p-2 rounded-full shadow-lg border border-slate-800">
          <button onClick={prevSlide} className="p-3 hover:bg-slate-800 rounded-full text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <span className="text-blue-400/70 font-mono text-sm min-w-[3ch] text-center">
            {currentSlide + 1}/{slides.length}
          </span>
          <button onClick={nextSlide} className="p-3 hover:bg-slate-800 rounded-full text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-slate-600 text-xs text-center">
          {isWide ? '宽屏封面模式 (2.35:1)' : '图文卡片模式 (3:4)'}<br/>
          推荐使用系统截图工具保存图片
        </div>
      </div>
    </div>
  );
};

export default Archive029;