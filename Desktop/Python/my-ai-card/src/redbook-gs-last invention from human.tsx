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
  Video, Mic, Image, Music, DraftingCompass, Ruler, Building2
} from 'lucide-react';

const Archive023 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "思辨",
      title: "The Last Invention",
      subtitle: "当 AI 开始自我进化，人类将彻底“退休”吗？",
      footer: "Serial No. 023 | AI黑话翻译局",
      visual: "blueprint"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      // 修改点：补全了完整的金句
      title: "Machine intelligence is the last invention that humanity will ever need to make.",
      translation: "“机器智能是人类最后需要做出的发明。”",
      content: [
        { label: "提出者", text: "尼克·波斯特洛姆 (Nick Bostrom)，牛津大学哲学家、《超级智能》作者。" },
        { label: "背景", text: "描述“智力爆炸”后的世界——一旦 AI 超越人类，它将接管后续所有的科学研发与技术突破。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "一旦创造出超级智能（ASI），它就具备了比人类更强的发明创造能力。此后所有的医疗奇迹、物理突破都将由 AI 完成，人类作为“发明者”的历史使命终结。",
        icon: <Atom className="w-6 h-6 text-blue-300" />
      },
      bottom: {
        title: "说人话",
        text: "“造出了上帝，剩下的事上帝会办。”人类以前造轮子、造火箭；以后只要负责给 AI 提需求。AI 发明东西的速度是人类的一万倍。",
        icon: <Sparkles className="w-6 h-6 text-white" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "学徒研发", desc: "人类发明", icon: <ChefHat size={24} /> },
      right: { title: "万能合成机", desc: "最后发明", icon: <Cpu size={24} /> },
      explanation: "人类像一代代厨师，慢慢摸索新菜。最后的发明是造出一台会自己改良基因的合成机。它吃完所有菜谱后，开始自己合成人类未尝过的料理。厨师从此不需要发明，只负责“吃”和“评价”。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "文明奇点", text: "它是历史的断裂点，标志着人类从“劳作时代”进入“智力红利时代”。", icon: <Infinity className="text-blue-300" /> },
        { title: "生存风险", text: "如果“最后的一项发明”不受控制，它也可能是人类的“最后一项发明”。", icon: <AlertTriangle className="text-white" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么用",
      cards: [
        { title: "转变心态", text: "接受“创造力”的门槛被抹平，开始练习做一名优秀的“审美者”和“决策者”。" },
        { title: "关注安全", text: "意识到“对齐”不是技术问题，而是关乎种族存续的政治问题。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：非毁灭", text: "这里的“最后”不是毁灭，而是指“创造的主动权”移交。" },
        { type: 'thought', title: "反思：黑客帝国", text: "如果人类不再需要发明，不再需要苦修解决难题，我们是否会像《骇客任务》里的母体一样，陷入无意义的安逸？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "AI",
      subtitle: "人类文明的最终笔触",
      footer: "Serial No. 023 | AI黑话翻译局",
      visual: "blueprint"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#020617] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for Blueprint (Blueprint Blue / Grid) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0f172a]"></div>
      
      {/* Blueprint Grid */}
      <div className="absolute w-full h-full opacity-20" style={{ 
        backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }}></div>
      
      {/* Blueprint Crosshairs */}
      <div className="absolute top-10 left-10 w-4 h-4 border-l border-t border-sky-400/50"></div>
      <div className="absolute bottom-10 right-10 w-4 h-4 border-r border-b border-sky-400/50"></div>

      {/* The White Light (Singularity) - Right side bleed */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-white/10 via-sky-900/20 to-transparent blur-3xl"></div>

      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-sky-600 text-white shadow-sky-600/30">
            <Tag size={10} className="text-white" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label - Hiding No. on cover pages */}
        <div className={`flex justify-between items-center text-[10px] text-sky-400/60 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 023</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-sky-400' : 'w-1 bg-slate-700'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-48 w-full">
        {/* Blueprint Lines extending to infinity */}
        <div className="absolute inset-0 perspective-500 flex items-center justify-center overflow-hidden opacity-50">
           <div className="w-[200%] h-[200%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(56,189,248,0.2)_20deg,transparent_40deg)] animate-[spin_10s_linear_infinite]"></div>
        </div>

        {/* Floating Tools (Drafting) */}
        <div className="absolute left-10 top-10 text-sky-300 animate-[bounce_3s_infinite] opacity-60">
           <DraftingCompass size={40} strokeWidth={1} />
        </div>
        <div className="absolute right-12 bottom-10 text-sky-300 animate-[bounce_4s_infinite] opacity-60">
           <Ruler size={32} strokeWidth={1} className="rotate-45" />
        </div>
        <div className="absolute left-20 bottom-4 text-sky-300 animate-[bounce_5s_infinite] opacity-40">
           <PenTool size={24} strokeWidth={1} className="-rotate-12" />
        </div>

        {/* The Singularity Light Source */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-white blur-[60px] rounded-full animate-pulse"></div>
        
        {/* Central Text dissolving into light */}
        <div className="relative z-20 flex gap-1">
           <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
           <div className="w-2 h-2 bg-sky-300 rounded-full"></div>
           <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
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

            <h1 className="text-5xl font-bold mb-6 tracking-tighter leading-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              The Last<br/>
              <span className="text-sky-300">Invention</span>
            </h1>
            
            <p className="text-lg text-sky-100/80 font-light tracking-widest border-t border-b border-sky-800/50 py-3 px-2 bg-sky-900/10">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-sky-500 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover':
        return (
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6 relative">
             {/* Left: Sketch/Blueprint Visuals */}
             <div className="w-[40%] h-full flex flex-col justify-center items-start pl-12 relative border-r border-sky-800/30">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
                <DraftingCompass size={64} className="text-sky-700 mb-4 opacity-50" strokeWidth={1} />
                <div className="font-handwriting text-sky-600 text-sm italic opacity-70">
                   Figure 1.1: Human Effort
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2 opacity-30">
                   {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-4 h-4 border border-sky-500 rounded-sm"></div>
                   ))}
                </div>
             </div>

             {/* Center: Title */}
             <div className="flex-1 flex flex-col justify-center text-center z-20 px-4">
                <div className="flex items-center justify-center gap-2 mb-4 opacity-60">
                   <Fingerprint size={14} className="text-sky-400"/>
                   <span className="text-sm text-sky-400 font-mono tracking-[0.2em]">SERIAL NO. 023</span>
                </div>
                
                <h1 className="text-8xl font-bold text-white tracking-tighter mb-4 leading-none drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                  AI
                </h1>
                
                <div className="inline-block border-b-2 border-sky-500/50 pb-2">
                  <span className="text-3xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-white to-sky-200 whitespace-nowrap">
                    人类文明的最终笔触
                  </span>
                </div>
             </div>

             {/* Right: Future City/Light Visuals */}
             <div className="w-[40%] h-full flex flex-col justify-center items-end pr-12 relative border-l border-sky-800/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent"></div>
                
                {/* City Silhouette */}
                <div className="absolute bottom-0 right-0 w-full h-1/2 flex items-end justify-end gap-1 opacity-50">
                   <div className="w-8 h-24 bg-sky-300/20"></div>
                   <div className="w-6 h-32 bg-sky-200/30"></div>
                   <div className="w-10 h-16 bg-sky-400/20"></div>
                   <div className="w-12 h-40 bg-white/10"></div>
                </div>
                
                <Building2 size={64} className="text-white mb-4 relative z-10 drop-shadow-[0_0_10px_white]" strokeWidth={1} />
                <div className="font-mono text-white text-sm tracking-widest opacity-80 z-10">
                   EPOCH: FINAL
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-sky-400 mb-8 border-l-4 border-sky-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-sky-300 mb-2 uppercase tracking-wider">The Concept</div>
                 {/* 修改点：动态调整字号，如果文本过长则使用 text-xl，否则维持 text-3xl */}
                 <div className={`${slide.title.length > 50 ? 'text-xl' : 'text-3xl'} font-bold text-white mb-1 leading-tight`}>
                   {slide.title}
                 </div>
                 {/* 新增：中文翻译显示 */}
                 {slide.translation && (
                   <div className="text-lg text-sky-100/90 mt-3 font-serif italic border-t border-white/10 pt-3">
                     {slide.translation}
                   </div>
                 )}
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-sky-500 font-mono uppercase border-b border-sky-900 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-slate-300 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-sky-400 mb-8 border-l-4 border-sky-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-sky-900/10 border border-sky-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-sky-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-sky-200/70 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-slate-700"></div>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
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
            <div className="flex justify-between items-end mb-8 border-b border-sky-800 pb-4">
               <h2 className="text-3xl font-bold text-sky-400">{slide.header}</h2>
               <span className="text-sm text-slate-400">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-slate-800/50 p-4 rounded-lg flex flex-col items-center text-center opacity-70 border border-slate-700">
                    <div className="mb-2 text-slate-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-slate-300">{slide.left.title}</div>
                    <div className="text-xs text-slate-500">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-white font-bold">→</div>
                <div className="flex-1 bg-sky-900/20 border border-sky-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(56,189,248,0.1)]">
                    <div className="mb-2 text-sky-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-sky-100">{slide.right.title}</div>
                    <div className="text-xs text-sky-500/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-sky-500">
                <p className="text-base leading-7 text-slate-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-sky-400 mb-10 border-l-4 border-sky-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-700"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-sky-500"></div>
                          <div className="flex items-center gap-2 mb-2">
                             {item.icon}
                             <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          </div>
                          <p className="text-slate-300 leading-relaxed">{item.text}</p>
                      </div>
                  ))}
               </div>
            </div>
        );

      case 'cards':
         return (
             <div className="flex-1 flex flex-col pt-4 justify-center">
                <h2 className="text-3xl font-bold text-sky-400 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0f172a] p-6 rounded-2xl border border-slate-700 hover:border-sky-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#020617] px-2 text-xs font-mono text-sky-600 group-hover:text-sky-400 transition-colors">
                               Shift 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                           <p className="text-slate-400 text-sm">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-sky-400 mb-8 border-l-4 border-sky-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-sky-900/20 border-sky-500/20' : 'bg-slate-800/30 border-slate-700'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-sky-400" /> : <Brain className="text-slate-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-sky-200' : 'text-slate-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-sky-500">
                     END OF ARCHIVE 023
                 </div>
              </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans">
      <div className={`flex flex-col items-center gap-6 w-full ${isWide ? 'max-w-4xl' : 'max-w-md'} transition-all duration-500`}>
        {/* Main Frame */}
        <div className={`w-full bg-[#020617] shadow-2xl border-4 border-slate-800 relative transition-all duration-500 ${
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
        <div className="flex items-center gap-4 bg-slate-900 p-2 rounded-full shadow-lg border border-slate-800">
          <button onClick={prevSlide} className="p-3 hover:bg-slate-800 rounded-full text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <span className="text-sky-500 font-mono text-sm min-w-[3ch] text-center">
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

export default Archive023;