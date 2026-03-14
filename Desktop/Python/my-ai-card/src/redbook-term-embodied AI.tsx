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
  Grab, Scan, Hand, Crosshair, BoxSelect, Move3d, Cloud, Hammer
} from 'lucide-react';

const Archive021 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "Embodied AI",
      subtitle: "具身智能，让 AI 从“聊天框”走进“现实世界”。",
      footer: "Serial No. 021 | AI黑话翻译局",
      visual: "embodied"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Embodied Artificial Intelligence",
      content: [
        { label: "中文语境", text: "具身智能。" },
        { label: "出处", text: "最早可追溯至皮亚杰的认知心理学，强调智能必须在与环境的交互中产生。如今成为 AI 机器人领域的最高目标。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "指有身体且能与环境交互的智能系统。智能不再仅仅是逻辑运算，而是“身体、感知与环境”的实时耦合。",
        icon: <Activity className="w-6 h-6 text-rose-400" />
      },
      bottom: {
        title: "说人话",
        text: "“长了身体的 AI”。ChatGPT 是“缸中之脑”，只能敲键盘；具身智能是“活生生的人”，能帮你洗碗、搬家、甚至在厨房露一手。",
        icon: <Bot className="w-6 h-6 text-cyan-300" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "云端菜谱", desc: "非具身 AI", icon: <Cloud size={24} /> },
      right: { title: "实操主厨", desc: "具身智能", icon: <ChefHat size={24} /> },
      explanation: "非具身 AI 像电子菜谱，知道步骤但拿不起锅。具身智能是拿着铲子的主厨。他感知锅的重量、看肉色变化、躲避飞溅的油。他在“做”中学习，而不是在“读”中学习。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "打破“莫拉维克悖论”", text: "电脑下棋赢人类很容易，但像 1 岁孩子一样走路却很难。具身智能正在攻克这最后 1 公里。", icon: <Baby className="text-rose-400" /> },
        { title: "闭环数据", text: "只有拥有身体，AI 才能产生“物理世界的常识（如水是湿的，火是烫的）”。", icon: <Infinity className="text-cyan-300" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么看",
      cards: [
        { title: "软硬结合", text: "它是大模型（软件）与机器人（硬件）的终极合体。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：物理复杂性", text: "具身智能的难度在于物理世界的无穷复杂性，一个台阶、一缕光线都可能让它困惑。" },
        { type: 'thought', title: "反思：痛感的意义", text: "当 AI 拥有了身体，它是否也会产生类似人类的“痛感”？如果智能必须依赖身体，那没有身体的 AI 算真正的智能吗？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "Embodied AI",
      subtitle: "AI 的最后一块拼图",
      footer: "Serial No. 021 | AI黑话翻译局",
      visual: "embodied"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#0a0a0a] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for Embodied (Cyan/Rose for Digital/Biological) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#0a0a0a] to-[#0a0a0a]"></div>
      
      {/* Bio-Digital Pattern */}
      <div className="absolute w-full h-full opacity-10" style={{ 
        backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 113, 133, 0.1) 1px, transparent 1px)', 
        backgroundSize: '30px 30px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-cyan-500 text-[#0a0a0a] shadow-cyan-500/30">
            <Tag size={10} className="text-cyan-950" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label - Hiding No. on cover pages */}
        <div className={`flex justify-between items-center text-[10px] text-cyan-600/50 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 021</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-cyan-500' : 'w-1 bg-gray-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-48 w-full">
        {/* The Body Shell */}
        <div className="absolute bottom-0 w-32 h-40 border-2 border-gray-600 rounded-[2rem] flex items-center justify-center overflow-hidden">
           {/* Internal Skeleton/Structure */}
           <div className="absolute inset-0 bg-gray-900/80"></div>
           <div className="w-[1px] h-full bg-rose-500/30 absolute left-1/2 -translate-x-1/2"></div>
           <div className="w-full h-[1px] bg-rose-500/30 absolute top-1/3 left-0"></div>
           <div className="w-full h-[1px] bg-rose-500/30 absolute top-2/3 left-0"></div>
           
           {/* Biological Lines */}
           <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 50 Q 50 20 100 50" stroke="#fb7185" fill="none" strokeWidth="0.5" />
              <path d="M0 50 Q 50 80 100 50" stroke="#fb7185" fill="none" strokeWidth="0.5" />
           </svg>
        </div>

        {/* The Descending Brain */}
        <div className="absolute top-0 w-20 h-20 bg-cyan-900/20 backdrop-blur-sm rounded-full border border-cyan-400/50 flex items-center justify-center animate-[bounce_3s_infinite] shadow-[0_0_30px_rgba(34,211,238,0.4)] z-20">
           <Brain size={40} className="text-cyan-300" strokeWidth={1.5} />
        </div>

        {/* Connection Particles */}
        <div className="absolute top-16 w-[1px] h-16 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute top-20 left-[calc(50%-20px)] w-1 h-1 bg-cyan-300 rounded-full animate-[ping_2s_infinite]"></div>
        <div className="absolute top-24 right-[calc(50%-20px)] w-1 h-1 bg-rose-400 rounded-full animate-[ping_2s_infinite_0.5s]"></div>
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
              Embodied<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-rose-300">AI</span>
            </h1>
            
            <p className="text-lg text-gray-400 font-light tracking-widest border-t border-b border-gray-800 py-3 px-2 bg-gray-900/30">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-cyan-600 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover':
        return (
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6">
             {/* Left: Code Flow */}
             <div className="w-[30%] flex flex-col justify-center items-end opacity-40 font-mono text-[10px] text-cyan-500 gap-1 overflow-hidden pr-8 border-r border-cyan-900/30">
                <div className="animate-[pulse_1s_infinite]">01010110</div>
                <div className="animate-[pulse_2s_infinite]">11001010</div>
                <div className="animate-[pulse_1.5s_infinite]">func move()</div>
                <div>{'{'}</div>
                <div className="pl-2">grasp_obj()</div>
                <div>{'}'}</div>
                <div className="animate-[pulse_3s_infinite]">10101010</div>
             </div>

             {/* Center: Text */}
             <div className="flex-1 flex flex-col justify-center text-center z-20 px-4">
                <div className="flex items-center justify-center gap-2 mb-4 opacity-60">
                   <Fingerprint size={14} className="text-cyan-500"/>
                   <span className="text-sm text-cyan-500 font-mono tracking-[0.2em]">SERIAL NO. 021</span>
                </div>
                
                <h1 className="text-7xl font-bold text-white tracking-tighter mb-4 leading-none whitespace-nowrap">
                  具身智能
                </h1>
                
                <div className="inline-block border-b-2 border-cyan-500/50 pb-2">
                  <span className="text-3xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-white to-rose-200 whitespace-nowrap">
                    AI 的最后一块拼图
                  </span>
                </div>
             </div>

             {/* Right: Mechanical Skeleton */}
             <div className="w-[30%] flex items-center justify-start pl-8 opacity-80">
                <div className="relative w-32 h-64 border-l border-rose-900/30 pl-4 flex flex-col justify-center gap-4">
                   <div className="w-16 h-2 bg-gray-700 rounded-full"></div>
                   <div className="w-24 h-4 bg-gray-600 rounded-full flex items-center px-1">
                      <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                   </div>
                   <div className="w-20 h-2 bg-gray-700 rounded-full"></div>
                   <div className="w-28 h-8 bg-gray-800 rounded-lg border border-gray-600 flex items-center justify-center">
                      <Cpu size={20} className="text-rose-400" />
                   </div>
                   <div className="w-12 h-2 bg-gray-700 rounded-full"></div>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-cyan-500 mb-8 border-l-4 border-cyan-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-rose-400 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-1 leading-tight">{slide.title}</div>
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-gray-400 font-mono uppercase border-b border-gray-800 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-gray-300 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-cyan-500 mb-8 border-l-4 border-cyan-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-rose-900/10 border border-rose-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-rose-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-rose-200/70 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-gray-800"></div>
                </div>

                <div className="bg-cyan-900/10 border border-cyan-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-cyan-200">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-cyan-200/80 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-gray-800 pb-4">
               <h2 className="text-3xl font-bold text-cyan-500">{slide.header}</h2>
               <span className="text-sm text-gray-400">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center opacity-70 border border-gray-800">
                    <div className="mb-2 text-gray-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-gray-300">{slide.left.title}</div>
                    <div className="text-xs text-gray-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-cyan-500 font-bold">→</div>
                <div className="flex-1 bg-gradient-to-br from-cyan-900/20 to-rose-900/20 border border-cyan-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                    <div className="mb-2 text-rose-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-cyan-100">{slide.right.title}</div>
                    <div className="text-xs text-cyan-200/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-cyan-500">
                <p className="text-base leading-7 text-gray-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-cyan-500 mb-10 border-l-4 border-cyan-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-cyan-500"></div>
                          <div className="flex items-center gap-2 mb-2">
                             {item.icon}
                             <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          </div>
                          <p className="text-gray-400 leading-relaxed">{item.text}</p>
                      </div>
                  ))}
               </div>
            </div>
        );

      case 'cards':
         return (
             <div className="flex-1 flex flex-col pt-4 justify-center">
                <h2 className="text-3xl font-bold text-cyan-500 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0f1215] p-6 rounded-2xl border border-gray-800 hover:border-rose-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#0a0a0a] px-2 text-xs font-mono text-cyan-600 group-hover:text-rose-400 transition-colors">
                               View 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                           <p className="text-gray-400 text-sm">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-cyan-500 mb-8 border-l-4 border-cyan-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-900/10 border-red-500/20' : 'bg-gray-900/30 border-gray-700'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Brain className="text-gray-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-gray-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-cyan-500">
                     END OF ARCHIVE 021
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
        <div className={`w-full bg-[#0a0a0a] shadow-2xl border-4 border-gray-800 relative transition-all duration-500 ${
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
        <div className="flex items-center gap-4 bg-gray-900 p-2 rounded-full shadow-lg border border-gray-800">
          <button onClick={prevSlide} className="p-3 hover:bg-gray-800 rounded-full text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <span className="text-cyan-500 font-mono text-sm min-w-[3ch] text-center">
            {currentSlide + 1}/{slides.length}
          </span>
          <button onClick={nextSlide} className="p-3 hover:bg-gray-800 rounded-full text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-gray-600 text-xs text-center">
          {isWide ? '宽屏封面模式 (2.35:1)' : '图文卡片模式 (3:4)'}<br/>
          推荐使用系统截图工具保存图片
        </div>
      </div>
    </div>
  );
};

export default Archive021;