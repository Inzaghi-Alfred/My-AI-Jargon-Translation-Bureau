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
  Usb, Cable, HardDrive, FolderSync, PlugZap
} from 'lucide-react';

const Archive033 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "MCP",
      subtitle: "AI 界的“USB 接口”，终结碎落满地的数字孤岛。",
      footer: "Serial No. 033 | AI黑话翻译局",
      visual: "mcp-hub"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Model Context Protocol",
      translation: "“模型上下文协议”",
      content: [
        { label: "核心身份", text: "一种开放的 AI 连接标准规范。" },
        { label: "出处", text: "由 Anthropic (Claude 团队) 发布，旨在让 AI 模型能够以统一的方式安全地访问数据源和工具。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "取代了过去每个模型都要单独写代码对接不同数据的繁琐过程。它为模型提供了访问本地或远程数据、文件、软件工具的“通用翻译层”。",
        icon: <Share2 className="w-6 h-6 text-purple-400" />
      },
      bottom: {
        title: "说人话",
        text: "“AI 的万能转换头”。以前让 AI 读你的代码库像用圆头插找方头插座；有了 MCP 就相当于有了 Type-C，一次接入，所有模型瞬间读懂你的工作流。",
        icon: <Usb className="w-6 h-6 text-teal-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "每道菜买一套锅", desc: "无 MCP 时代", icon: <Utensils size={24} /> },
      right: { title: "中央厨具控制中心", desc: "MCP 时代", icon: <ChefHat size={24} /> },
      explanation: "没有 MCP 时：想让 AI 炒菜（写代码），得装“炒锅接口”；想洗碗（改文档），得买“洗碗机接口”，不同牌子的 AI 还不兼容。有了 MCP：厨房（本地电脑）装了一套中央控制协议。不管哪个牌子的“主厨 AI”进来，插上 MCP 总线，立刻接管冰箱、烤箱。它不再是客人，它成了你数字世界的“内人”。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "生态统一", text: "开发者写一次代码（MCP 服务器），所有兼容的模型（Claude, GPT 等）都能直接使用该工具或数据。", icon: <Globe className="text-purple-400" /> },
        { title: "私有数据爆发", text: "让 AI 真正“懂你”变得极其简单，因为它能安全无缝地读取你的本地笔记、数据库和项目。", icon: <HardDrive className="text-teal-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么看",
      cards: [
        { title: "去中心化的胜利", text: "AI 不再被困在孤立的聊天框（Web端）里，而是通过 MCP 协议，像神经末梢一样深入到我们的个人操作系统中。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：安全边界", text: "接口统一了，权限管理就更重要——你不会希望一键授权后，AI 误读了你不想公开的私密日记。" },
        { type: 'thought', title: "反思：竞争重构", text: "当所有模型都能通过同一套协议访问全人类的数据，大模型竞争的终点，是否将从“谁的数据多”变成纯粹的“谁的推理更聪明”？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "MCP",
      subtitle: "定义 AI 时代的连接法则",
      footer: "Serial No. 033 | AI黑话翻译局",
      visual: "mcp-hub"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#070b14] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Deep space with Purple and Teal glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-900/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-teal-900/20 blur-[100px] rounded-full"></div>
      
      {/* Micro-chip / Circuit Pattern */}
      <div className="absolute w-full h-full opacity-[0.05]" style={{ 
        backgroundImage: 'linear-gradient(#9333ea 1px, transparent 1px), linear-gradient(90deg, #9333ea 1px, transparent 1px)', 
        backgroundSize: '30px 30px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-white text-[#070b14] shadow-white/20">
            <Tag size={10} className="text-[#070b14]" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label */}
        <div className={`flex justify-between items-center text-[10px] text-slate-500 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 033</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1 z-50">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-purple-500' : 'w-1 bg-slate-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-56 w-full">
        {/* Central MCP Hub (The Hexagon) */}
        <div className="absolute z-30 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full animate-pulse"></div>
                <Hexagon size={80} className="text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] fill-slate-900" strokeWidth={1.5} />
                <Cable size={32} className="absolute text-white animate-pulse" />
            </div>
            {/* Core ring */}
            <div className="absolute w-24 h-24 border border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
        </div>

        {/* Left Side: Data Sources (Local/Databases) */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
            {/* Node 1 */}
            <div className="relative group">
                <div className="w-10 h-10 bg-teal-900/40 border border-teal-500/50 rounded-lg flex items-center justify-center backdrop-blur-sm z-20 relative">
                    <Database size={16} className="text-teal-300" />
                </div>
                {/* Connecting Line to Center */}
                <div className="absolute top-1/2 left-[100%] w-20 h-[2px] bg-gradient-to-r from-teal-500 to-purple-500 origin-left rotate-12 -z-10">
                    <div className="absolute top-1/2 left-0 w-2 h-2 bg-white rounded-full -translate-y-1/2 shadow-[0_0_10px_white] animate-[pulse_1.5s_infinite]"></div>
                </div>
            </div>
            {/* Node 2 */}
            <div className="relative group">
                <div className="w-10 h-10 bg-teal-900/40 border border-teal-500/50 rounded-lg flex items-center justify-center backdrop-blur-sm z-20 relative">
                    <FolderSync size={16} className="text-teal-300" />
                </div>
                {/* Connecting Line to Center */}
                <div className="absolute top-1/2 left-[100%] w-20 h-[2px] bg-gradient-to-r from-teal-500 to-purple-500 origin-left -rotate-12 -z-10">
                    <div className="absolute top-1/2 left-0 w-2 h-2 bg-white rounded-full -translate-y-1/2 shadow-[0_0_10px_white] animate-[pulse_1.5s_infinite_0.5s]"></div>
                </div>
            </div>
        </div>

        {/* Right Side: AI Models */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
            {/* Node 1 */}
            <div className="relative group">
                <div className="w-10 h-10 bg-purple-900/40 border border-purple-400/50 rounded-full flex items-center justify-center backdrop-blur-sm z-20 relative">
                    <Brain size={16} className="text-purple-300" />
                </div>
                {/* Connecting Line from Center */}
                <div className="absolute top-1/2 right-[100%] w-20 h-[2px] bg-gradient-to-l from-purple-400 to-purple-500 origin-right -rotate-12 -z-10">
                    <div className="absolute top-1/2 right-0 w-2 h-2 bg-white rounded-full -translate-y-1/2 shadow-[0_0_10px_white] animate-[pulse_1.5s_infinite_0.2s]"></div>
                </div>
            </div>
            {/* Node 2 */}
            <div className="relative group">
                <div className="w-10 h-10 bg-purple-900/40 border border-purple-400/50 rounded-full flex items-center justify-center backdrop-blur-sm z-20 relative">
                    <Sparkles size={16} className="text-purple-300" />
                </div>
                {/* Connecting Line from Center */}
                <div className="absolute top-1/2 right-[100%] w-20 h-[2px] bg-gradient-to-l from-purple-400 to-purple-500 origin-right rotate-12 -z-10">
                    <div className="absolute top-1/2 right-0 w-2 h-2 bg-white rounded-full -translate-y-1/2 shadow-[0_0_10px_white] animate-[pulse_1.5s_infinite_0.7s]"></div>
                </div>
            </div>
        </div>
        
        {/* Background Network Grid */}
        <Network size={160} className="absolute text-slate-800/50 opacity-30 pointer-events-none" />
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

            <h1 className="text-6xl font-bold mb-4 tracking-tighter leading-tight text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] whitespace-nowrap">
              MCP
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 font-light tracking-widest border-t border-b border-purple-900/50 py-3 px-4 bg-purple-950/20">
              {slide.subtitle}
            </p>
            
            <div className="mt-12 text-xs text-purple-400/80 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover':
        return (
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6 relative">
             {/* Left: Starry/Network Connection Visuals */}
             <div className="w-[45%] h-full flex flex-col justify-center items-center relative pl-8">
                <div className="scale-125 relative">
                   {renderVisuals()}
                   {/* Extra Wide Decorations */}
                   <div className="absolute top-[-30px] right-[-20px] text-teal-400 opacity-40 animate-pulse"><PlugZap size={24} /></div>
                </div>
             </div>

             {/* Right: Text */}
             <div className="flex-1 flex flex-col justify-center text-left z-20 pl-8 pr-12 relative">
                <div className="flex items-center gap-2 mb-6 opacity-70">
                   <Fingerprint size={14} className="text-purple-400"/>
                   <span className="text-sm text-purple-400 font-mono tracking-[0.2em]">SERIAL NO. 033</span>
                </div>
                
                <h1 className="text-8xl font-bold text-white tracking-tighter mb-6 leading-none drop-shadow-[0_0_20px_rgba(168,85,247,0.3)] whitespace-nowrap">
                  MCP
                </h1>
                
                <div className="inline-block border-l-4 border-purple-500 pl-6 py-2 bg-gradient-to-r from-slate-800/80 to-transparent rounded-r-lg">
                  <span className="text-3xl font-light tracking-wide text-slate-200 whitespace-nowrap">
                    定义 AI 时代的连接法则
                  </span>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-purple-400 mb-8 border-l-4 border-purple-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-teal-400 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-2 leading-tight font-serif italic">{slide.title}</div>
                 {slide.translation && (
                   <div className="text-sm text-slate-400 mt-3 border-t border-slate-700 pt-3">
                     {slide.translation}
                   </div>
                 )}
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-purple-400 font-mono uppercase border-b border-slate-800 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-slate-300 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-purple-400 mb-8 border-l-4 border-purple-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-purple-950/20 border border-purple-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-purple-300">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-purple-100/80 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-slate-700"></div>
                </div>

                <div className="bg-teal-950/20 border border-teal-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-teal-300">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-teal-100/90 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-slate-800 pb-4">
               <h2 className="text-3xl font-bold text-purple-400">{slide.header}</h2>
               <span className="text-sm text-slate-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-slate-900 border border-slate-800 p-4 rounded-lg flex flex-col items-center text-center opacity-80">
                    <div className="mb-2 text-slate-500">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-slate-400">{slide.left.title}</div>
                    <div className="text-xs text-slate-600 mt-1">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-purple-500 font-bold">→</div>
                <div className="flex-1 bg-gradient-to-br from-purple-900/30 to-teal-900/30 border border-purple-500/40 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                    <div className="mb-2 text-teal-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-purple-100">{slide.right.title}</div>
                    <div className="text-xs text-purple-300/80 mt-1">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-slate-800/50 p-5 rounded-xl border-l-2 border-purple-500">
                <p className="text-base leading-7 text-slate-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-purple-400 mb-10 border-l-4 border-purple-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-700"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-purple-500"></div>
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
                <h2 className="text-3xl font-bold text-purple-400 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0d111c] p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#070b14] px-2 text-xs font-mono text-slate-500 group-hover:text-purple-400 transition-colors">
                               Insight 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-purple-100 mb-1">{card.title}</h3>
                           <p className="text-slate-400 text-sm leading-relaxed">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-purple-400 mb-8 border-l-4 border-purple-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-950/20 border-red-500/30' : 'bg-slate-900 border-slate-700'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Brain className="text-slate-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-300' : 'text-slate-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-purple-500">
                     END OF ARCHIVE 033
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
        <div className={`w-full bg-[#070b14] shadow-2xl border-4 border-slate-800 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' 
             : 'aspect-[3/4] rounded-[3rem] p-3'
        }`}>
           <div className={`w-full h-full overflow-hidden bg-[#070b14] ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
              <CardWrapper index={currentSlide} badge={slides[currentSlide].badge} isWideMode={isWide}>
                {renderSlideContent(slides[currentSlide])}
              </CardWrapper>
           </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 bg-slate-900 p-2 rounded-full shadow-lg border border-slate-700">
          <button onClick={prevSlide} className="p-3 hover:bg-slate-800 rounded-full text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <span className="text-slate-400 font-mono text-sm min-w-[3ch] text-center">
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

export default Archive033;