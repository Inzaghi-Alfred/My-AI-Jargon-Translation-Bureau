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
  Plug, Power, Activity, Network, Flame
} from 'lucide-react';

const Archive012 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "思辨",
      title: "AI is the New Electricity",
      subtitle: "AI 是新电能：它不会改变一个行业，它会重塑所有行业。",
      footer: "Serial No. 012 | AI黑话翻译局",
      visual: "electricity"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "AI is the New Electricity",
      content: [
        { label: "提出者", text: "吴恩达 (Andrew Ng)，斯坦福大学教授、Google Brain 联合创始人。" },
        { label: "背景", text: "强调 AI 并非单一的技术产品，而是一种能够像电力一样渗透、赋能并彻底改变各行各业的底层基础设施。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "人工智能具有通用目的技术（GPT）属性。像 100 年前的电力，作为无处不在的能量，为交通、制造、医疗等所有领域提供动力。",
        icon: <Zap className="w-6 h-6 text-yellow-400" />
      },
      bottom: {
        title: "说人话",
        text: "“万物皆可带电”。以前没电要手搓衣服，有电了有洗衣机。现在没 AI 要自己想逻辑，有了 AI，所有工具都会“自己动脑”。",
        icon: <Plug className="w-6 h-6 text-blue-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "柴火土灶", desc: "传统时代", icon: <Flame size={24} /> },
      right: { title: "智慧厨房", desc: "AI 时代", icon: <AppWindow size={24} /> },
      explanation: "传统时代像烧柴火，每道工序靠人力。AI 时代像通了电，驱动冰箱微波炉。现在的 AI 就是那股看不见的电流，让锅能控温，刀能感知。你卖的不是火，是让一切变聪明的“能量”。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "普惠性", text: "电力普及后，不懂电也能享受便利。AI 普及后，不懂编程也能调用强大的智力。", icon: <Network className="text-yellow-400" /> },
        { title: "重塑逻辑", text: "不是“互联网+”，而是“AI+”。它改变的是所有行业的底层效率。", icon: <RefreshCw className="text-blue-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么用",
      cards: [
        { title: "寻找“无电区”", text: "看看你的工作流里，哪里还在用“人力拉磨”？那就是 AI 应该接入的地方。" },
        { title: "顺势而为", text: "别试图拒绝电力，要学会如何安全、高效地使用电源。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：漏电风险", text: "过度依赖 AI 的黑盒决策，可能会在关键时刻带来意想不到的灾难。" },
        { type: 'thought', title: "反思：思考的快感", text: "电力普及后，人类失去了火光的诗意；AI 普及后，人类是否会失去思考的快感？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "AI",
      subtitle: "重塑文明的第二道电能",
      footer: "Serial No. 012 | AI黑话翻译局",
      visual: "electricity"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#020617] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - High Contrast (Dark Blue/Black vs Yellow/Cyan) */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-blue-950/40 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-indigo-950/40 blur-[120px] rounded-full"></div>
      
      {/* Electrical Grid Pattern */}
      <div className="absolute w-full h-full opacity-10" style={{ 
        backgroundImage: 'linear-gradient(rgba(250, 204, 21, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)', 
        backgroundSize: '50px 50px' 
      }}></div>
      
      {/* Decoration Lines - Lightning effect */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent left-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(250,204,21,0.8)]"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent left-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>

      {/* Dynamic Badge - Yellow High Contrast */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-yellow-400 text-[#020617] shadow-yellow-400/50">
            <Tag size={10} className="text-black" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label - Hiding No. on cover pages */}
        <div className={`flex justify-between items-center text-[10px] text-blue-300 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 012</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-yellow-400' : 'w-1 bg-gray-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-48 w-full">
        {/* Central Core: High Voltage */}
        <div className="relative">
           {/* Outer Ring - Cyan/Blue */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 border-2 border-blue-500/40 rounded-full animate-[spin_8s_linear_infinite]"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 border border-cyan-400/20 rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>
           
           {/* Electric Bolts - Yellow/White High Contrast */}
           <Zap size={90} className="text-yellow-400 relative z-10 drop-shadow-[0_0_25px_rgba(250,204,21,1)] animate-pulse" strokeWidth={1.5} />
           
           {/* Spark particles */}
           <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full animate-[ping_1s_infinite] shadow-[0_0_10px_white]"></div>
           <div className="absolute bottom-4 left-[-10px] w-2 h-2 bg-yellow-300 rounded-full animate-[ping_2s_infinite] delay-100"></div>
           <div className="absolute top-[-20px] left-10 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-[ping_1.5s_infinite] delay-300"></div>
           
           {/* Connecting Energy Lines */}
           <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 pointer-events-none opacity-60" viewBox="0 0 100 100">
              <path d="M50 50 L90 10" stroke="#facc15" strokeWidth="0.5" className="animate-pulse" />
              <path d="M50 50 L10 90" stroke="#22d3ee" strokeWidth="0.5" className="animate-pulse delay-75" />
              <path d="M50 50 L10 10" stroke="#3b82f6" strokeWidth="0.5" className="animate-pulse delay-150" />
              <path d="M50 50 L90 90" stroke="#facc15" strokeWidth="0.5" className="animate-pulse delay-300" />
           </svg>
        </div>
    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-8 group w-full">
              {renderVisuals()}
            </div>

            {/* Title: High Contrast Yellow vs White/Blue */}
            <h1 className="text-5xl font-bold mb-6 tracking-tighter leading-tight">
              <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)] mr-3 text-6xl italic">AI</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-200 to-purple-400">
                is the New Electricity
              </span>
            </h1>
            
            <p className="text-lg text-blue-200/90 font-light tracking-widest border-t border-b border-blue-500/30 py-3 px-2 bg-blue-950/30">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-blue-400 font-mono flex items-center gap-2">
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
                <div className="scale-150 relative">
                   {renderVisuals()}
                   {/* Extra Wide Decorations - Toned down yellow */}
                   <div className="absolute top-[-40px] left-[-30px] text-purple-300 opacity-60 animate-pulse"><Network size={30} /></div>
                   <div className="absolute bottom-[-30px] right-[-40px] text-blue-400 opacity-60 animate-bounce"><Plug size={30} /></div>
                </div>
             </div>

             {/* Right: Text */}
             <div className="flex-1 flex flex-col justify-center text-left z-20 pl-12 pr-4">
                <div className="flex items-center gap-2 mb-4 opacity-80">
                   {/* Reverted Serial to Blue as requested */}
                   <Fingerprint size={14} className="text-blue-400"/>
                   <span className="text-sm text-blue-400 font-mono tracking-[0.2em]">SERIAL NO. 012</span>
                </div>
                
                <div className="mb-6 drop-shadow-xl">
                  {/* Huge Title */}
                  <h1 className="text-9xl font-bold text-white tracking-tighter mb-4 leading-none">
                    <span className="text-yellow-400 mr-4 drop-shadow-[0_0_20px_rgba(250,204,21,0.6)]">AI</span>
                  </h1>
                  
                  {/* Styled Subtitle - Gradient Text + Blue Border */}
                  <div className="inline-block border-l-4 border-blue-400 pl-4 py-3 pr-8 bg-gradient-to-r from-blue-900/40 to-transparent rounded-r-lg">
                    <span className="text-3xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-400">
                      重塑文明的第二道电能
                    </span>
                  </div>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-yellow-400 mb-8 border-l-4 border-yellow-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-blue-400 mb-2 uppercase tracking-wider">Golden Sentence</div>
                 <div className="text-3xl font-bold text-white mb-1 leading-tight">{slide.title}</div>
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-blue-400 font-mono uppercase border-b border-blue-900 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-gray-200 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-yellow-400 mb-8 border-l-4 border-yellow-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-blue-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-blue-300 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-blue-800"></div>
                </div>

                <div className="bg-purple-900/10 border border-purple-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-purple-100">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-purple-100 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-blue-900 pb-4">
               <h2 className="text-3xl font-bold text-yellow-400">{slide.header}</h2>
               <span className="text-sm text-blue-300">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center opacity-80 border border-gray-700">
                    <div className="mb-2 text-gray-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-gray-300">{slide.left.title}</div>
                    <div className="text-xs text-gray-500">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-yellow-400 font-bold">→</div>
                <div className="flex-1 bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                    <div className="mb-2 text-blue-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-blue-100">{slide.right.title}</div>
                    <div className="text-xs text-blue-400/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-yellow-500">
                <p className="text-base leading-7 text-gray-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-yellow-400 mb-10 border-l-4 border-yellow-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-blue-900"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-yellow-400"></div>
                          <div className="flex items-center gap-2 mb-2">
                             {item.icon}
                             <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{item.text}</p>
                      </div>
                  ))}
               </div>
            </div>
        );

      case 'cards':
         return (
             <div className="flex-1 flex flex-col pt-4 justify-center">
                <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0a1020] p-6 rounded-2xl border border-blue-900 hover:border-yellow-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#020617] px-2 text-xs font-mono text-blue-400 group-hover:text-yellow-400 transition-colors">
                               Action 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-blue-100 mb-1">{card.title}</h3>
                           <p className="text-blue-300 text-sm">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-yellow-400 mb-8 border-l-4 border-yellow-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-900/20 border-red-500/20' : 'bg-purple-900/20 border-purple-500/20'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Brain className="text-purple-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-purple-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-blue-500">
                     END OF ARCHIVE 012
                 </div>
              </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#020408] flex items-center justify-center p-4 font-sans">
      <div className={`flex flex-col items-center gap-6 w-full ${isWide ? 'max-w-4xl' : 'max-w-md'} transition-all duration-500`}>
        {/* Main Frame */}
        <div className={`w-full bg-[#050b14] shadow-2xl border-4 border-blue-900 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' 
             : 'aspect-[3/4] rounded-[3rem] p-3'
        }`}>
           <div className={`w-full h-full overflow-hidden bg-[#050b14] ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
              <CardWrapper index={currentSlide} badge={slides[currentSlide].badge} isWideMode={isWide}>
                {renderSlideContent(slides[currentSlide])}
              </CardWrapper>
           </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 bg-blue-950 p-2 rounded-full shadow-lg border border-blue-900">
          <button onClick={prevSlide} className="p-3 hover:bg-blue-900 rounded-full text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <span className="text-blue-400 font-mono text-sm min-w-[3ch] text-center">
            {currentSlide + 1}/{slides.length}
          </span>
          <button onClick={nextSlide} className="p-3 hover:bg-blue-900 rounded-full text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-blue-700 text-xs text-center">
          {isWide ? '宽屏封面模式 (2.35:1)' : '图文卡片模式 (3:4)'}<br/>
          推荐使用系统截图工具保存图片
        </div>
      </div>
    </div>
  );
};

export default Archive012;