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
  Cuboid, Axis3d, LandPlot, EyeOff
} from 'lucide-react';

const Archive026 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "Spatial Intelligence",
      subtitle: "AI 终于看懂了 3D 世界，这才是它通往现实的“驾照”。",
      footer: "Serial No. 026 | AI黑话翻译局",
      visual: "spatial"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Spatial Intelligence",
      content: [
        { label: "中文语境", text: "空间智能。" },
        { label: "出处", text: "斯坦福大学教授李飞飞近期大力推动的方向，强调 AI 需要理解物体在三维空间中的位置、形状、距离及因果关系。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "AI 感知、推理并操纵三维环境的能力。不仅识别物体（Label），更理解物体的位置、体积、遮挡关系及动作的物理后果。",
        icon: <Axis3d className="w-6 h-6 text-cyan-400" />
      },
      bottom: {
        title: "说人话",
        text: "“AI 的 3D 直觉”。以前 AI 看照片是像素块；现在它知道那是立体杯子，放桌边会掉，能指挥机械手稳稳拿起来。",
        icon: <Cuboid className="w-6 h-6 text-indigo-300" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "读菜谱的盲人", desc: "纯语言 AI", icon: <EyeOff size={24} /> },
      right: { title: "蒙眼大厨", desc: "空间智能", icon: <ChefHat size={24} /> },
      explanation: "纯语言 AI 像背熟菜谱的盲人，知道配比但不知盐罐在哪。空间智能 AI 像闭眼也能做饭的大厨，脑中有 3D 地图，知道侧身不撞柜角，手伸多远抓到锅。这种“尺度感”是把想法变成动作的前提。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "具身基石", text: "机器人要进工厂、进家庭，必须拥有空间智能，否则寸步难行。", icon: <Bot className="text-cyan-400" /> },
        { title: "物理理解", text: "让 AI 能够预测未来，比如：预判球踢出去后会撞到哪里，杯子会不会碎。", icon: <Activity className="text-indigo-300" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么看",
      cards: [
        { title: "维度跨越", text: "未来的 AI 不再只是二维屏幕里的“文字处理机”，而是理解三维的“世界模拟器”。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：数据黑洞", text: "空间智能需要海量的 3D 数据和物理模拟环境，远比抓取互联网文字难得多。" },
        { type: 'thought', title: "反思：情感依赖", text: "当机器能精准绕过并保护你，这种物理上的“关照”，是否会让我们对机器产生更深的情感依赖？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "空间智能",
      subtitle: "赋予 AI 物理灵魂",
      footer: "Serial No. 026 | AI黑话翻译局",
      visual: "spatial"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#030712] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for Spatial (Indigo/Cyan Depth) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-[#030712] to-[#030712]"></div>
      
      {/* 3D Grid Floor */}
      <div className="absolute bottom-0 w-full h-1/2 opacity-20" style={{ 
        backgroundImage: 'linear-gradient(0deg, transparent 24%, #6366f1 25%, #6366f1 26%, transparent 27%, transparent 74%, #6366f1 75%, #6366f1 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #6366f1 25%, #6366f1 26%, transparent 27%, transparent 74%, #6366f1 75%, #6366f1 76%, transparent 77%, transparent)', 
        backgroundSize: '40px 40px',
        transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(2)'
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-indigo-500 text-white shadow-indigo-500/30">
            <Tag size={10} className="text-white" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label - Hiding No. on cover pages */}
        <div className={`flex justify-between items-center text-[10px] text-indigo-400/60 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 026</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-cyan-400' : 'w-1 bg-gray-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-48 w-full perspective-1000">
        {/* 3D Cube Transformation */}
        <div className="relative w-32 h-32 transform-style-3d animate-[spin_10s_linear_infinite]">
           {/* Wireframe Cube */}
           <div className="absolute inset-0 border-2 border-cyan-500/30 bg-cyan-500/5 transform translate-z-16"></div>
           <div className="absolute inset-0 border-2 border-cyan-500/30 bg-cyan-500/5 transform -translate-z-16"></div>
           <div className="absolute inset-0 border-2 border-cyan-500/30 bg-cyan-500/5 transform rotate-y-90 translate-z-16"></div>
           <div className="absolute inset-0 border-2 border-cyan-500/30 bg-cyan-500/5 transform rotate-y-90 -translate-z-16"></div>
           <div className="absolute inset-0 border-2 border-cyan-500/30 bg-cyan-500/5 transform rotate-x-90 translate-z-16"></div>
           <div className="absolute inset-0 border-2 border-cyan-500/30 bg-cyan-500/5 transform rotate-x-90 -translate-z-16"></div>
           
           {/* Internal Solid Object (The Cup) */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-20 bg-indigo-500/80 rounded-sm shadow-[0_0_20px_rgba(99,102,241,0.6)] animate-pulse flex items-center justify-center">
              <span className="text-white/50 text-[8px] font-mono">OBJ_01</span>
           </div>
        </div>

        {/* Scanning Laser */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent h-[10%] w-full top-0 animate-[scan_3s_ease-in-out_infinite]"></div>
        
        {/* Interaction Hand Cursor */}
        <div className="absolute top-1/2 right-10 animate-[bounce_2s_infinite]">
           <Hand size={32} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
           <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
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

            <h1 className="text-5xl font-bold mb-6 tracking-tighter leading-tight text-white">
              Spatial<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Intelligence</span>
            </h1>
            
            <p className="text-lg text-indigo-200/80 font-light tracking-widest border-t border-b border-indigo-900/50 py-3 px-2 bg-indigo-900/10">
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
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6 relative">
             {/* Left: Realistic World Representation */}
             <div className="w-[40%] h-full flex items-center justify-center relative pl-8 border-r border-indigo-500/20">
                <div className="relative w-full h-40 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-gray-700 p-4 flex flex-col items-center justify-end opacity-60">
                   <div className="w-16 h-20 bg-gray-600 rounded-sm shadow-xl"></div>
                   <div className="w-full h-1 bg-black/50 blur-sm mt-1"></div>
                   <span className="absolute top-2 left-2 text-[10px] text-gray-500 font-mono">REAL_WORLD</span>
                </div>
             </div>

             {/* Center: Title */}
             <div className="flex-1 flex flex-col justify-center text-center z-20 px-4">
                <div className="flex items-center justify-center gap-2 mb-4 opacity-60">
                   <Fingerprint size={14} className="text-cyan-500"/>
                   <span className="text-sm text-cyan-500 font-mono tracking-[0.2em]">SERIAL NO. 026</span>
                </div>
                
                <h1 className="text-7xl font-bold text-white tracking-tighter mb-4 leading-none">
                  空间智能
                </h1>
                
                <div className="inline-block border-b-2 border-indigo-500/50 pb-2">
                  <span className="text-3xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-white to-indigo-300 whitespace-nowrap">
                    赋予 AI 物理灵魂
                  </span>
                </div>
             </div>

             {/* Right: Mesh/Grid Representation */}
             <div className="w-[40%] h-full flex items-center justify-center relative pr-8 border-l border-indigo-500/20">
                <div className="relative w-full h-40 bg-indigo-900/10 rounded-lg border border-cyan-500/30 p-4 flex flex-col items-center justify-end">
                   {/* Wireframe Object */}
                   <div className="w-16 h-20 border border-cyan-400 bg-cyan-400/10 relative">
                      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                         {[...Array(16)].map((_, i) => (
                            <div key={i} className="border-[0.5px] border-cyan-500/20"></div>
                         ))}
                      </div>
                      <div className="absolute -top-2 -right-2 text-cyan-300 animate-pulse"><Scan size={16} /></div>
                   </div>
                   <span className="absolute top-2 right-2 text-[10px] text-cyan-500 font-mono">SPATIAL_DATA</span>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-indigo-400 mb-8 border-l-4 border-cyan-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-cyan-300 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-1 leading-tight">{slide.title}</div>
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-indigo-300 font-mono uppercase border-b border-indigo-900 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-slate-300 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-indigo-400 mb-8 border-l-4 border-cyan-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-cyan-900/10 border border-cyan-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-cyan-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-cyan-200/70 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-slate-700"></div>
                </div>

                <div className="bg-indigo-900/10 border border-indigo-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-indigo-200">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-indigo-200/80 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-indigo-800 pb-4">
               <h2 className="text-3xl font-bold text-indigo-400">{slide.header}</h2>
               <span className="text-sm text-slate-400">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-slate-900 p-4 rounded-lg flex flex-col items-center text-center opacity-70 border border-slate-800">
                    <div className="mb-2 text-slate-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-slate-300">{slide.left.title}</div>
                    <div className="text-xs text-slate-500">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-cyan-500 font-bold">→</div>
                <div className="flex-1 bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 border border-cyan-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                    <div className="mb-2 text-cyan-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-cyan-100">{slide.right.title}</div>
                    <div className="text-xs text-cyan-200/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-indigo-500">
                <p className="text-base leading-7 text-slate-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-indigo-400 mb-10 border-l-4 border-cyan-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-700"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-cyan-500"></div>
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
                <h2 className="text-3xl font-bold text-indigo-400 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0f1219] p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#030712] px-2 text-xs font-mono text-cyan-600 group-hover:text-cyan-400 transition-colors">
                               View 0{idx + 1}
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
                 <h2 className="text-3xl font-bold text-indigo-400 mb-8 border-l-4 border-cyan-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-900/10 border-red-500/20' : 'bg-indigo-900/10 border-indigo-500/20'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Brain className="text-indigo-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-indigo-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-cyan-500">
                     END OF ARCHIVE 026
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
        <div className={`w-full bg-[#030712] shadow-2xl border-4 border-gray-800 relative transition-all duration-500 ${
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

export default Archive026;