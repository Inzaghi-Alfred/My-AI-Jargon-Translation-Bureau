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
  ShieldCheck, Globe, Eye, Grid, GitCommit, GitMerge, Share2
} from 'lucide-react';

const Archive014 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "Transformer",
      subtitle: "大模型的心脏，让机器学会了“划重点”。",
      footer: "Serial No. 014 | AI黑话翻译局",
      visual: "transformer"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Transformer",
      content: [
        { label: "核心身份", text: "现代 AI 的底层架构（神经网络模型）。" },
        { label: "出处", text: "2017 年 Google 发布的论文《Attention Is All You Need》。这篇论文彻底改变了自然语言处理（NLP）的命运。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "一种采用“自注意力机制（Self-Attention）”的深度学习模型。它能够并行处理数据，并捕捉文本中长距离的依赖关系。",
        icon: <Share2 className="w-6 h-6 text-amber-400" />
      },
      bottom: {
        title: "说人话",
        text: "“全能翻译官兼划重点专家”。以前的 AI 读书是一个字一个字读；Transformer 是“一眼扫全篇”，瞬间看清每个词之间的关系，知道谁才是灵魂。",
        icon: <Eye className="w-6 h-6 text-indigo-300" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "单线程老厨师", desc: "旧架构 (RNN)", icon: <UserCog size={24} /> },
      right: { title: "矩阵中央厨房", desc: "Transformer", icon: <Grid size={24} /> },
      explanation: "旧架构像老厨师，一道道菜顺着做，容易忘事。Transformer 是中央厨房，所有厨师同时开工（并行），且拥有“自注意力”：炒肉的厨师会时刻盯着配菜进度。这种“同时开工且互盯”的逻辑，让效率质变。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "并行计算", text: "极大地提升了训练速度，让处理“全互联网量级”的数据成为可能。", icon: <Zap className="text-amber-400" /> },
        { title: "注意力机制", text: "解决了 AI 容易“忘词”的问题，让大模型能写出长逻辑连贯的文章。", icon: <GitMerge className="text-indigo-300" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么看",
      cards: [
        { title: "万物皆可 Transformer", text: "不止文字，现在连图像（ViT）、视频、音频都在用这个架构。它正在统一 AI 的语言。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：基石作用", text: "它是“大力出奇迹”的底层前提。没有这个高效架构，Scaling Law 就无法落地。" },
        { type: 'thought', title: "反思：灵感的本质", text: "如果智能的本质只是“注意力”的分配和权重的计算，那人类所谓的“灵感”，是否也只是大脑在特定瞬间的一次高权重聚焦？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "Transformer",
      subtitle: "Attention Is All You Need",
      footer: "Serial No. 014 | AI黑话翻译局",
      visual: "transformer"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#0f172a] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for Transformer (Matrix/Network) */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-indigo-950/30 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-slate-900/50 blur-[100px] rounded-full"></div>
      
      {/* Matrix Grid Pattern */}
      <div className="absolute w-full h-full opacity-10" style={{ 
        backgroundImage: 'radial-gradient(rgba(251, 191, 36, 0.4) 1px, transparent 1px)', 
        backgroundSize: '30px 30px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-amber-500 text-[#0f172a] shadow-amber-500/30">
            <Tag size={10} className="text-amber-950" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label - Hiding No. on cover pages */}
        <div className={`flex justify-between items-center text-[10px] text-slate-400 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 014</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-amber-500' : 'w-1 bg-slate-700'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-48 w-full">
        {/* Central Core: Matrix Attention */}
        <div className="relative w-40 h-40">
           {/* Grid Nodes */}
           <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === 4 ? 'bg-amber-400 shadow-[0_0_15px_#fbbf24] scale-150' : 'bg-slate-600'} m-auto relative`}>
                   {/* Connecting lines to center */}
                   {i !== 4 && (
                     <div className={`absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-transparent to-amber-500/50 origin-left w-[400%]
                        ${i === 0 ? 'rotate-[45deg]' : ''}
                        ${i === 1 ? 'rotate-[90deg]' : ''}
                        ${i === 2 ? 'rotate-[135deg]' : ''}
                        ${i === 3 ? 'rotate-[0deg]' : ''}
                        ${i === 5 ? 'rotate-[180deg]' : ''}
                        ${i === 6 ? 'rotate-[-45deg]' : ''}
                        ${i === 7 ? 'rotate-[-90deg]' : ''}
                        ${i === 8 ? 'rotate-[-135deg]' : ''}
                        opacity-0 animate-[pulse_2s_infinite]
                     `} style={{animationDelay: `${i * 0.1}s`}}></div>
                   )}
                </div>
              ))}
           </div>
           
           {/* Dynamic Lines (SVG) - Simulating Attention Attention Matrix */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path d="M20 20 L80 80" stroke="rgba(251, 191, 36, 0.4)" strokeWidth="1" className="animate-[dash_3s_linear_infinite]" strokeDasharray="5,5"/>
              <path d="M140 20 L80 80" stroke="rgba(251, 191, 36, 0.4)" strokeWidth="1" className="animate-[dash_3.5s_linear_infinite]" strokeDasharray="5,5"/>
              <path d="M20 140 L80 80" stroke="rgba(251, 191, 36, 0.4)" strokeWidth="1" className="animate-[dash_4s_linear_infinite]" strokeDasharray="5,5"/>
              <path d="M140 140 L80 80" stroke="rgba(251, 191, 36, 0.4)" strokeWidth="1" className="animate-[dash_2.5s_linear_infinite]" strokeDasharray="5,5"/>
              
              <circle cx="80" cy="80" r="15" stroke="rgba(251, 191, 36, 0.8)" strokeWidth="1" fill="none" className="animate-[ping_3s_linear_infinite]" />
           </svg>
        </div>
    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-10 group w-full">
              <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full animate-pulse"></div>
              {renderVisuals()}
            </div>

            <h1 className="text-5xl font-bold mb-6 tracking-tighter leading-tight text-white">
              {slide.title}
            </h1>
            
            <p className="text-lg text-slate-300 font-light tracking-widest border-t border-b border-slate-700 py-3 px-6">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-slate-500 font-mono flex items-center gap-2">
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
                   <div className="absolute inset-0 bg-amber-500/20 blur-[60px] rounded-full animate-pulse"></div>
                   {renderVisuals()}
                   <div className="absolute top-[-20px] left-[-30px] text-amber-200 opacity-40 animate-pulse"><Network size={24} /></div>
                   <div className="absolute bottom-[-10px] right-[-20px] text-indigo-400 opacity-40 animate-bounce"><Share2 size={24} /></div>
                </div>
             </div>

             {/* Right: Text */}
             <div className="flex-1 flex flex-col justify-center text-left z-20 pl-12 pr-4">
                <div className="flex items-center gap-2 mb-4 opacity-80">
                   <Fingerprint size={14} className="text-amber-500"/>
                   <span className="text-sm text-amber-500 font-mono tracking-[0.2em]">SERIAL NO. 014</span>
                </div>
                
                <div className="mb-6 drop-shadow-lg">
                  <h1 className="text-7xl font-bold text-white tracking-tighter mb-4 leading-none">
                    {slide.title}
                  </h1>
                  
                  <div className="inline-block border-l-4 border-amber-500 pl-4 py-3 pr-8 bg-gradient-to-r from-slate-800/60 to-transparent rounded-r-lg">
                    <span className="text-2xl text-slate-200 font-light tracking-wide block italic">
                      {slide.subtitle}
                    </span>
                  </div>
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
                 <div className="text-xs text-indigo-300 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-1 leading-tight">{slide.title}</div>
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-slate-400 font-mono uppercase border-b border-slate-700 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-slate-200 font-light">{item.text}</p>
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
                <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-amber-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-slate-300 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-slate-700"></div>
                </div>

                <div className="bg-indigo-900/10 border border-indigo-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-indigo-200">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-slate-300 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-slate-700 pb-4">
               <h2 className="text-3xl font-bold text-amber-500">{slide.header}</h2>
               <span className="text-sm text-slate-400">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-slate-800/50 p-4 rounded-lg flex flex-col items-center text-center opacity-80 border border-slate-700">
                    <div className="mb-2 text-slate-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-slate-300">{slide.left.title}</div>
                    <div className="text-xs text-slate-500">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-amber-500 font-bold">vs</div>
                <div className="flex-1 bg-indigo-900/20 border border-indigo-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                    <div className="mb-2 text-amber-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-amber-100">{slide.right.title}</div>
                    <div className="text-xs text-amber-500/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-amber-500">
                <p className="text-base leading-7 text-slate-200 text-justify">
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
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-700"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-amber-500"></div>
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
                <h2 className="text-3xl font-bold text-amber-500 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#1e293b] p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#0f172a] px-2 text-xs font-mono text-slate-500 group-hover:text-amber-500 transition-colors">
                               View 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-amber-100 mb-1">{card.title}</h3>
                           <p className="text-slate-400 text-sm">{card.text}</p>
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
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-slate-900 border-slate-700' : 'bg-indigo-900/10 border-indigo-500/20'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-slate-400" /> : <Brain className="text-indigo-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-slate-200' : 'text-indigo-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-amber-500">
                     END OF ARCHIVE 014
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
        <div className={`w-full bg-[#0f172a] shadow-2xl border-4 border-slate-800 relative transition-all duration-500 ${
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
          <span className="text-slate-500 font-mono text-sm min-w-[3ch] text-center">
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

export default Archive014;