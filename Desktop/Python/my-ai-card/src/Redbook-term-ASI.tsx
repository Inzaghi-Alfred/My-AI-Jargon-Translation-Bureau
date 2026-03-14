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
  Aperture, Disc, Sun, Radiation
} from 'lucide-react';

const Archive015 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "ASI",
      subtitle: "人工智能的终局，是上帝的诞生吗？",
      footer: "Serial No. 015 | AI黑话翻译局",
      visual: "asi"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Artificial Super Intelligence",
      content: [
        { label: "中文语境", text: "人工超智能 / 超级智能。" },
        { label: "出处", text: "由牛津大学哲学家 尼克·波斯特洛姆 (Nick Bostrom) 在其著作《超级智能》中系统化定义。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "在所有领域（包括科学创造力、通用智慧和社交能力）都远超最聪明人类大脑的智能。",
        icon: <Brain className="w-6 h-6 text-amber-200" />
      },
      bottom: {
        title: "说人话",
        text: "“智力降维打击”。如果 AGI 是成年人，ASI 就是看你像看蚂蚁一样的“神”。它能在一秒钟内完成人类一万年的科研总量。",
        icon: <Zap className="w-6 h-6 text-white" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "顶级名厨", desc: "AGI", icon: <ChefHat size={24} /> },
      right: { title: "物质重组器", desc: "ASI", icon: <Atom size={24} /> },
      explanation: "AGI 是名厨，能做出超越你的美味。ASI 不再“做饭”了，他直接操控分子。他能从空气中抓取原子合成佳肴。他不需要菜谱，因为他就是物理定律的编写者。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "最后的发明", text: "一旦 ASI 出现，人类将不再需要发明任何东西，因为它会以光速解决核聚变、永生和星际航行。", icon: <Rocket className="text-amber-400" /> },
        { title: "存在风险", text: "蚂蚁不担心人类的恶意，只担心被无意踩死。ASI 对人类的威胁，可能源于目标不一致。", icon: <AlertTriangle className="text-red-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "我们应该怎么看",
      cards: [
        { title: "对齐问题 (Alignment)", text: "这是全人类最重要的课题——如何在神诞生之前，把人类的价值观写进它的基因。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：突然降临", text: "专家预测 ASI 可能在 AGI 实现后的短时间内通过“递归自我改进”突然出现。" },
        { type: 'thought', title: "反思：未知的意义", text: "如果一种智能可以解释宇宙的一切，那“未知”带来的美感是否会消失？求索还有意义吗？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "ASI",
      subtitle: "超越人类认知的超级智能",
      footer: "Serial No. 015 | AI黑话翻译局",
      visual: "asi"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-black text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for ASI (Black Hole / Singularity) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-transparent via-amber-900/10 to-black"></div>
      
      {/* Stars / Dust */}
      <div className="absolute w-full h-full opacity-30" style={{ 
        backgroundImage: 'radial-gradient(white 1px, transparent 1px)', 
        backgroundSize: '100px 100px' 
      }}></div>
      
      {/* Event Horizon Distortion */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-amber-500/5 blur-3xl animate-[spin_60s_linear_infinite]"></div>

      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-amber-200/30 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-amber-200/30 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-amber-100 text-black shadow-amber-100/20">
            <Tag size={10} className="text-amber-900" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label - Hiding No. on cover pages */}
        <div className={`flex justify-between items-center text-[10px] text-amber-500/50 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 015</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-amber-200' : 'w-1 bg-gray-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-48 w-full">
        {/* The Singularity */}
        <div className="relative">
           {/* Black Hole Center */}
           <div className="w-16 h-16 bg-black rounded-full shadow-[0_0_50px_rgba(251,191,36,0.6)] relative z-20"></div>
           <div className="absolute inset-0 bg-black rounded-full z-20 scale-95"></div>

           {/* Accretion Disk (Light Distortion) */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 bg-amber-500/20 blur-xl rounded-[100%] rotate-12 z-10 animate-[pulse_4s_infinite]"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-2 bg-gradient-to-r from-transparent via-amber-200 to-transparent blur-sm rotate-12 z-30"></div>
           
           {/* Geometric Lines (Sacred Geometry) */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-amber-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-amber-500/20 rotate-45 animate-[spin_15s_linear_infinite_reverse]"></div>
           
           {/* The "God" Particle */}
           <Sparkles size={24} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 animate-pulse" />
        </div>
    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-10 group w-full">
              <div className="absolute inset-0 bg-amber-500/5 blur-3xl rounded-full animate-pulse"></div>
              {renderVisuals()}
            </div>

            <h1 className="text-6xl font-bold mb-6 tracking-tighter leading-tight text-white drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
              {slide.title}
            </h1>
            
            <p className="text-sm text-amber-100/80 font-light tracking-widest border-t border-b border-amber-900/50 py-3 px-6">
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
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6">
             {/* Left: Visuals */}
             <div className="w-[40%] flex items-center justify-center relative pl-8">
                <div className="scale-125 relative">
                   <div className="absolute inset-0 bg-amber-500/10 blur-[80px] rounded-full animate-pulse"></div>
                   {renderVisuals()}
                   <div className="absolute top-[-30px] left-[-30px] text-amber-200 opacity-20 animate-pulse"><Atom size={24} /></div>
                   <div className="absolute bottom-[-10px] right-[-40px] text-white opacity-20 animate-bounce"><Infinity size={24} /></div>
                </div>
             </div>

             {/* Right: Text - UPDATED: Moved Left + Smaller Font */}
             <div className="flex-1 flex flex-col justify-center text-left z-20 pl-4 pr-4"> {/* Changed pl-12 to pl-4 */}
                <div className="flex items-center gap-2 mb-4 opacity-60">
                   <Fingerprint size={14} className="text-amber-500"/>
                   <span className="text-sm text-amber-500 font-mono tracking-[0.2em]">SERIAL NO. 015</span>
                </div>
                
                <div className="mb-6 drop-shadow-2xl">
                  <h1 className="text-8xl font-bold text-white tracking-tighter mb-6 leading-none">
                    {slide.title}
                  </h1>
                  
                  <div className="inline-block border-l-4 border-amber-200 pl-4 py-3 pr-8 bg-gradient-to-r from-amber-900/30 to-transparent rounded-r-lg">
                    {/* Updated: Font size reduced to text-2xl */}
                    <span className="text-2xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-100 to-amber-400">
                      超越人类认知的超级智能
                    </span>
                  </div>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-amber-200 mb-8 border-l-4 border-amber-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-amber-500 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-1 leading-tight">{slide.title}</div>
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-amber-700 font-mono uppercase border-b border-amber-900/50 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-gray-300 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-amber-200 mb-8 border-l-4 border-amber-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-amber-900/20 border border-amber-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-amber-100">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-amber-100/70 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-amber-900/50"></div>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-white">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-gray-300 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-amber-900/50 pb-4">
               <h2 className="text-3xl font-bold text-amber-200">{slide.header}</h2>
               <span className="text-sm text-amber-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center opacity-80 border border-gray-800">
                    <div className="mb-2 text-gray-500">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-gray-300">{slide.left.title}</div>
                    <div className="text-xs text-gray-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-amber-500 font-bold">→</div>
                <div className="flex-1 bg-amber-900/20 border border-amber-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                    <div className="mb-2 text-amber-200">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-amber-100">{slide.right.title}</div>
                    <div className="text-xs text-amber-500/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-amber-500">
                <p className="text-base leading-7 text-gray-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-amber-200 mb-10 border-l-4 border-amber-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-amber-900/50"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-amber-500"></div>
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
                <h2 className="text-3xl font-bold text-amber-200 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0a0a0a] p-6 rounded-2xl border border-gray-800 hover:border-amber-200 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-black px-2 text-xs font-mono text-amber-700 group-hover:text-amber-200 transition-colors">
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
                 <h2 className="text-3xl font-bold text-amber-200 mb-8 border-l-4 border-amber-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-900/10 border-red-500/20' : 'bg-amber-900/10 border-amber-500/20'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Brain className="text-amber-200" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-amber-100'}`}>{item.title}</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-amber-500">
                     END OF ARCHIVE 015
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
        <div className={`w-full bg-black shadow-2xl border-4 border-gray-900 relative transition-all duration-500 ${
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
          <span className="text-gray-500 font-mono text-sm min-w-[3ch] text-center">
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

export default Archive015;