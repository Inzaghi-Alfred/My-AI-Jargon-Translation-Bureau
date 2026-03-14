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
  Skull, Eclipse, Mail, Plane, Palette, ShoppingCart, ActivitySquare,
  Usb, Cable, HardDrive, FolderSync, PlugZap, CloudRain, Droplet, Archive,
  VenetianMask
} from 'lucide-react';

const Archive035 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "思辨",
      title: "The Turing Test",
      subtitle: "如果 AI 骗了你，它是不是就有了灵魂？",
      footer: "Serial No. 035 | AI黑话翻译局",
      visual: "turing-glass"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.",
      translation: "“如果一台电脑能欺骗人类，让其相信它也是人类，那它就配得上‘智能’之名。”",
      content: [
        { label: "提出者", text: "阿兰·图灵 (Alan Turing)，计算机科学之父。" },
        { label: "背景", text: "1950 年论文《计算机器与智能》，提出了著名的“模仿游戏”（The Imitation Game），即图灵测试。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "深度思辨",
      top: {
        title: "标准解释",
        text: "图灵认为“机器能否思考”是个无法定义的伪命题。他将标准转向行为主义：只要机器在交流中的表现与人类不可分辨，就必须承认它具备智能。",
        icon: <BookOpen className="w-6 h-6 text-zinc-400" />
      },
      bottom: {
        title: "说人话",
        text: "“演技即本体”。不管 AI 肚子里是电流还是代码，只要它聊起天来让你觉得它是个活生生的人，那它就是“聪明”的。智能不在于内在结构，而在于它带给观察者的感受。",
        icon: <Brain className="w-6 h-6 text-cyan-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "血统执念", desc: "传统观念", icon: <Database size={24} /> },
      right: { title: "完美合成肉", desc: "图灵逻辑", icon: <Utensils size={24} /> },
      explanation: "传统观念认为，只有从牛身上长出来的肉才叫肉。而图灵逻辑是：如果有一块实验室合成肉，它的纤维、油脂、口感、香气甚至营养成分，让最顶尖的美食家在盲测中都吃不出区别，那它就配得上“顶级和牛”的称号。当“伪装”达到完美的程度，伪装本身就成了真相。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "绕过灵魂争论", text: "让我们不再纠结 AI 是否有“自我意识”，而专注于其实际解决问题的能力与外在表现。", icon: <RefreshCw className="text-zinc-400" /> },
        { title: "情感冲击", text: "它是当下所有 AI 情感陪伴、拟人化对话（如 Her 模式）的技术标尺。", icon: <Heart className="text-rose-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么看",
      cards: [
        { title: "认知的演进", text: "在 ChatGPT 时代，图灵测试几乎每天都在被通过。现在的挑战不再是“它像不像人”，而是“它比人更强”。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：警惕欺骗", text: "图灵测试的本质是一场欺骗游戏，完美的 AI 可能会利用人类的共情能力进行深度的精神操控。" },
        { type: 'thought', title: "反思：真诚的漏洞", text: "如果智能的最高境界是“欺骗”，那人类引以为傲的真诚，在算法面前是否只是一块容易被攻破的逻辑漏洞？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover',
      badge: "公众号封面",
      title: "图灵测试",
      subtitle: "当模仿成为艺术",
      footer: "Serial No. 035 | AI黑话翻译局",
      visual: "turing-glass"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#0a0a0c] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Cyan (Machine) vs Rose (Human) */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-950/30 to-transparent blur-3xl"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-950/20 to-transparent blur-3xl"></div>
      
      {/* Grid Pattern */}
      <div className="absolute w-full h-full opacity-5" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-cyan-500/30 via-white/20 to-rose-500/30 left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-cyan-500/30 via-white/20 to-rose-500/30 left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-zinc-200 text-[#0a0a0c] shadow-zinc-200/20">
            <Tag size={10} className="text-zinc-800" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label */}
        <div className={`flex justify-between items-center text-[10px] text-zinc-500 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 035</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1 z-50">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-zinc-300' : 'w-1 bg-zinc-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-64 w-full overflow-hidden rounded-xl border border-white/5">
        
        {/* Left: Machine Zone (Cyan) */}
        <div className="absolute left-0 w-1/2 h-full flex flex-col items-center justify-center bg-cyan-950/20 pr-10">
           <Binary size={80} className="text-cyan-500/30 animate-pulse" strokeWidth={1} />
           <div className="absolute top-1/2 right-4 w-12 h-[1px] bg-cyan-500/50"></div>
           <div className="absolute top-1/2 right-4 w-2 h-2 bg-cyan-400 rounded-full -translate-y-1/2 shadow-[0_0_15px_cyan] animate-[ping_2s_infinite]"></div>
        </div>

        {/* Right: Human Zone (Rose) */}
        <div className="absolute right-0 w-1/2 h-full flex flex-col items-center justify-center bg-rose-950/10 pl-10">
           <Hand size={80} className="text-rose-500/30 animate-pulse delay-75" strokeWidth={1} />
           <div className="absolute top-1/2 left-4 w-12 h-[1px] bg-rose-500/50"></div>
           <div className="absolute top-1/2 left-4 w-2 h-2 bg-rose-400 rounded-full -translate-y-1/2 shadow-[0_0_15px_rose] animate-[ping_2s_infinite_0.5s]"></div>
        </div>

        {/* Center: The Frosted Glass Pane (The Turing Barrier) */}
        <div className="absolute w-1/3 h-[110%] bg-white/5 backdrop-blur-md border-x border-white/10 z-20 flex flex-col items-center justify-center transform skew-x-[-5deg]">
            {/* The contact point illusion */}
            <div className="relative w-16 h-16 flex items-center justify-center transform skew-x-[5deg]">
               <div className="absolute w-12 h-12 bg-white/10 rounded-full blur-md"></div>
               <ScanLine size={32} className="text-white/60 animate-pulse" />
               
               {/* Spark where they "meet" */}
               <div className="absolute w-1 h-6 bg-white/80 shadow-[0_0_20px_white] blur-[1px]"></div>
            </div>
            <div className="mt-4 px-2 py-0.5 bg-black/30 border border-white/10 rounded text-[8px] font-mono text-zinc-400 tracking-widest transform skew-x-[5deg]">
               IMITATION_GAME
            </div>
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

            <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tighter leading-tight text-white drop-shadow-md whitespace-nowrap">
              The Turing Test
            </h1>
            
            <p className="text-xs sm:text-sm text-zinc-300 font-light tracking-widest border-t border-b border-zinc-800 py-3 px-2 bg-zinc-900/40 whitespace-nowrap">
              {slide.subtitle}
            </p>
            
            <div className="mt-8 text-xs text-zinc-500 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover':
        return (
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6 relative">
             {/* Left: Background Data Stream (Cyan) */}
             <div className="absolute left-0 top-0 w-[40%] h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="w-full h-[200%] flex flex-col items-center justify-start text-cyan-500 font-mono text-xs break-all leading-none animate-[slideUp_20s_linear_infinite]">
                   {Array(50).fill('0101101011000101 ').join('')}
                </div>
             </div>

             {/* Right: Human Print (Rose) */}
             <div className="absolute right-[-10%] top-0 w-[50%] h-full opacity-10 pointer-events-none flex items-center justify-center">
                <Fingerprint size={400} className="text-rose-500" strokeWidth={0.5} />
             </div>

             {/* Center: Frosted Text Container */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[60%] p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2 mb-6 opacity-70">
                   <Fingerprint size={14} className="text-zinc-400"/>
                   <span className="text-sm text-zinc-400 font-mono tracking-[0.2em]">SERIAL NO. 035</span>
                </div>
                
                <h1 className="text-7xl font-bold text-white tracking-tighter mb-6 leading-none drop-shadow-lg whitespace-nowrap">
                  图灵测试
                </h1>
                
                <div className="inline-block border-l-4 border-white/50 pl-6 py-2 bg-gradient-to-r from-white/10 to-transparent rounded-r-lg">
                  <span className="text-3xl font-light tracking-wide text-zinc-200 whitespace-nowrap">
                    当模仿成为艺术
                  </span>
                </div>
             </div>

             <style dangerouslySetInnerHTML={{__html: `
               @keyframes slideUp {
                 0% { transform: translateY(0); }
                 100% { transform: translateY(-50%); }
               }
             `}} />
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-zinc-200 mb-8 border-l-4 border-zinc-400 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-zinc-400 mb-2 uppercase tracking-wider">The Quote</div>
                 {/* 动态调整长文本字号 */}
                 <div className={`${slide.title.length > 50 ? 'text-xl' : 'text-3xl'} font-bold text-white mb-2 leading-tight font-serif italic`}>
                    "{slide.title}"
                 </div>
                 {slide.translation && (
                   <div className="text-sm text-zinc-400 mt-3 border-t border-white/10 pt-3 font-serif">
                     {slide.translation}
                   </div>
                 )}
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
             <h2 className="text-3xl font-bold text-zinc-200 mb-8 border-l-4 border-zinc-400 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-zinc-900/30 border border-zinc-700/50 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-zinc-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-zinc-400 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-zinc-800"></div>
                </div>

                <div className="bg-cyan-950/20 border border-cyan-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-cyan-100">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-cyan-100/80 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-zinc-800 pb-4">
               <h2 className="text-3xl font-bold text-zinc-200">{slide.header}</h2>
               <span className="text-sm text-zinc-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-rose-950/20 border border-rose-900/50 p-4 rounded-lg flex flex-col items-center text-center opacity-80">
                    <div className="mb-2 text-rose-500">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-rose-200">{slide.left.title}</div>
                    <div className="text-xs text-rose-500/60 mt-1">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-zinc-600 font-bold">VS</div>
                <div className="flex-1 bg-cyan-900/20 border border-cyan-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                    <div className="mb-2 text-cyan-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-cyan-100">{slide.right.title}</div>
                    <div className="text-xs text-cyan-400/80 mt-1">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-zinc-400">
                <p className="text-base leading-7 text-zinc-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-zinc-200 mb-10 border-l-4 border-zinc-400 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-zinc-400"></div>
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
                <h2 className="text-3xl font-bold text-zinc-200 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#121214] p-6 rounded-2xl border border-zinc-800 hover:border-zinc-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#0a0a0c] px-2 text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                               View 0{idx + 1}
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
                 <h2 className="text-3xl font-bold text-zinc-200 mb-8 border-l-4 border-zinc-400 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-950/20 border-red-500/30' : 'bg-cyan-950/20 border-cyan-500/30'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <EyeOff className="text-cyan-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-300' : 'text-cyan-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-zinc-500">
                     END OF ARCHIVE 035
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
        <div className={`w-full bg-[#0a0a0c] shadow-2xl border-4 border-zinc-900 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' 
             : 'aspect-[3/4] rounded-[3rem] p-3'
        }`}>
           <div className={`w-full h-full overflow-hidden bg-[#0a0a0c] ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
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

        <div className="text-zinc-700 text-xs text-center">
          {isWide ? '宽屏封面模式 (2.35:1)' : '图文卡片模式 (3:4)'}<br/>
          推荐使用系统截图工具保存图片
        </div>
      </div>
    </div>
  );
};

export default Archive035;