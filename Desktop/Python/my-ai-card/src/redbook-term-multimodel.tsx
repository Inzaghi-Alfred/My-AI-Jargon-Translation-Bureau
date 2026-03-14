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
  Video, Mic, Image, Music
} from 'lucide-react';

const Archive022 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "Multimodal",
      subtitle: "AI 终于不再是“睁眼瞎”，它开始全方位感知世界。",
      footer: "Serial No. 022 | AI黑话翻译局",
      visual: "multimodal"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Multimodal AI",
      content: [
        { label: "中文语境", text: "多模态人工智能。" },
        { label: "出处", text: "模拟人类通过多种感官获取信息的模式。随着 GPT-4o 和 Gemini 的发布，2024 年正式进入“原生多模态”时代。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "指能够处理和整合多种不同类型数据输入（如文本、图像、音频、视频）的 AI 系统。它在底层架构中实现了信息的跨模态融合。",
        icon: <Layers className="w-6 h-6 text-fuchsia-400" />
      },
      bottom: {
        title: "说人话",
        text: "“五感合一”。以前给 AI 发照片它看不懂；现在它能盯着照片说“这件衣服不衬你”，甚至能听出你声音里的委屈。",
        icon: <Ear className="w-6 h-6 text-cyan-300" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "盲盒点餐", desc: "单模态 AI", icon: <Box size={24} /> },
      right: { title: "沉浸式主厨", desc: "多模态 AI", icon: <ChefHat size={24} /> },
      explanation: "单模态像只能读文字菜谱的厨师，不懂火候只能猜。多模态像在灶台边的老师傅，看肉变色（视觉）、听油响（听觉）、闻香气（嗅觉）。他不再靠“读”来学习，而是靠“感受”来理解美味。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "理解质变", text: "世界不是由文字组成的。多模态让 AI 真正理解物理空间、情绪波动和复杂场景。", icon: <Globe className="text-fuchsia-400" /> },
        { title: "交互门槛降低", text: "以后跟 AI 交流就像跟人聊天，发截图、录视频，它全懂。", icon: <MessageCircle className="text-cyan-300" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么看",
      cards: [
        { title: "原生 (Native) 是王道", text: "真正的多模态不是“翻译成文字再理解”，而是直接用神经网络同时“消化”音视频和图像。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：隐私风险", text: "多模态意味着 AI 能够捕捉更多关于你的生物特征（声音、长相、甚至环境背景）。" },
        { type: 'thought', title: "反思：读心术", text: "如果机器能看懂你的眼神，听懂你的弦外之音，那“读心术”是否已经从神话变成了算法？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "Multimodal",
      subtitle: "AI 的五感觉醒",
      footer: "Serial No. 022 | AI黑话翻译局",
      visual: "multimodal"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#050505] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for Multimodal (Spectrum/Chromatic) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050505] to-[#050505]"></div>
      
      {/* Chromatic Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-fuchsia-600/10 blur-[80px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[80px] rounded-full animate-pulse delay-75"></div>
      
      {/* Noise Texture */}
      <div className="absolute w-full h-full opacity-10" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.5\'/%3E%3C/svg%3E")', 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-white text-black shadow-white/20">
            <Tag size={10} className="text-black" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label - Hiding No. on cover pages */}
        <div className={`flex justify-between items-center text-[10px] text-gray-500 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 022</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-white' : 'w-1 bg-gray-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-48 w-full">
        {/* Central Core: The Multimodal Sphere */}
        <div className="relative">
           {/* The Sphere */}
           <div className="w-24 h-24 rounded-full bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-500 blur-md opacity-80 animate-pulse"></div>
           <div className="absolute inset-0 rounded-full border border-white/20 scale-110 animate-[spin_10s_linear_infinite]"></div>
           <div className="absolute inset-0 rounded-full border border-white/10 scale-125 animate-[spin_15s_linear_infinite_reverse]"></div>
           
           {/* Emanating Elements */}
           {/* Audio Wave */}
           <div className="absolute top-1/2 left-[-60px] -translate-y-1/2 flex gap-1 h-8 items-center">
              <div className="w-1 h-4 bg-cyan-400 animate-[bounce_1s_infinite]"></div>
              <div className="w-1 h-8 bg-cyan-400 animate-[bounce_1.2s_infinite]"></div>
              <div className="w-1 h-6 bg-cyan-400 animate-[bounce_0.8s_infinite]"></div>
              <div className="w-1 h-3 bg-cyan-400 animate-[bounce_1.5s_infinite]"></div>
           </div>
           
           {/* Pixel Grid */}
           <div className="absolute top-[-40px] right-[-20px] grid grid-cols-3 gap-1">
              <div className="w-2 h-2 bg-fuchsia-400 animate-pulse"></div>
              <div className="w-2 h-2 bg-fuchsia-300 animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-fuchsia-500 animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-fuchsia-300 animate-pulse delay-200"></div>
              <div className="w-2 h-2 bg-fuchsia-400 animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-fuchsia-500 animate-pulse delay-300"></div>
           </div>

           {/* Text Chain */}
           <div className="absolute bottom-[-30px] left-[20px] font-mono text-[8px] text-indigo-300 animate-pulse">
              [TXT]...[IMG]...[AUD]
           </div>

           {/* Sensor Mesh */}
           <div className="absolute right-[-50px] bottom-[10px] w-12 h-12 border border-white/10 rounded-full flex items-center justify-center animate-[spin_8s_linear_infinite]">
              <div className="w-full h-[1px] bg-white/10 absolute top-1/2"></div>
              <div className="h-full w-[1px] bg-white/10 absolute left-1/2"></div>
           </div>
           
           {/* Floating Icons */}
           <Eye size={16} className="absolute -top-6 left-0 text-white animate-bounce" />
           <Mic size={16} className="absolute top-10 -right-8 text-white animate-bounce delay-100" />
           <Image size={16} className="absolute -bottom-4 -left-4 text-white animate-bounce delay-200" />
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
              Multi<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">modal</span>
            </h1>
            
            <p className="text-lg text-gray-300 font-light tracking-widest border-t border-b border-gray-800 py-3 px-2 bg-gray-900/30">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-gray-500 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover':
        return (
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6 relative">
             {/* Left: Audio/Pulse Visuals */}
             <div className="w-[30%] h-full flex items-center justify-center relative border-r border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cyan-900/20"></div>
                <div className="flex gap-2 h-32 items-center opacity-60">
                   {[...Array(8)].map((_, i) => (
                      <div key={i} 
                           className="w-2 bg-cyan-400 rounded-full animate-[bounce_1s_infinite]" 
                           style={{
                             height: `${Math.random() * 100}%`, 
                             animationDelay: `${i * 0.1}s`,
                             animationDuration: `${0.5 + Math.random()}s`
                           }}
                      ></div>
                   ))}
                </div>
                <div className="absolute bottom-8 text-cyan-400 font-mono text-xs tracking-widest">AUDIO_INPUT</div>
             </div>

             {/* Center: Title */}
             <div className="flex-1 flex flex-col justify-center text-center z-20 px-4">
                <div className="flex items-center justify-center gap-2 mb-4 opacity-60">
                   <Fingerprint size={14} className="text-white"/>
                   <span className="text-sm text-white font-mono tracking-[0.2em]">SERIAL NO. 022</span>
                </div>
                
                <h1 className="text-7xl font-bold text-white tracking-tighter mb-4 leading-none">
                  多模态
                </h1>
                
                <div className="inline-block border-b-2 border-white/20 pb-2">
                  <span className="text-3xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-white to-cyan-300 whitespace-nowrap">
                    AI 的五感觉醒
                  </span>
                </div>
             </div>

             {/* Right: Color/Pixel Matrix */}
             <div className="w-[30%] h-full flex items-center justify-center relative border-l border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-fuchsia-900/20"></div>
                <div className="grid grid-cols-6 gap-2 opacity-60 rotate-12 scale-125">
                   {[...Array(24)].map((_, i) => (
                      <div key={i} 
                           className={`w-3 h-3 rounded-sm animate-pulse`}
                           style={{
                             backgroundColor: i % 3 === 0 ? '#e879f9' : i % 3 === 1 ? '#22d3ee' : '#ffffff',
                             animationDelay: `${i * 0.05}s`
                           }}
                      ></div>
                   ))}
                </div>
                <div className="absolute bottom-8 text-fuchsia-400 font-mono text-xs tracking-widest">VISUAL_DATA</div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-fuchsia-400 mb-8 border-l-4 border-fuchsia-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-cyan-400 mb-2 uppercase tracking-wider">Term</div>
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
             <h2 className="text-3xl font-bold text-fuchsia-400 mb-8 border-l-4 border-fuchsia-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-fuchsia-900/10 border border-fuchsia-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-fuchsia-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-fuchsia-200/70 leading-relaxed">{slide.top.text}</p>
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
               <h2 className="text-3xl font-bold text-fuchsia-400">{slide.header}</h2>
               <span className="text-sm text-gray-400">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center opacity-70 border border-gray-800">
                    <div className="mb-2 text-gray-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-gray-300">{slide.left.title}</div>
                    <div className="text-xs text-gray-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-white font-bold">→</div>
                <div className="flex-1 bg-gradient-to-br from-fuchsia-900/20 to-cyan-900/20 border border-white/10 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <div className="mb-2 text-white">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-white">{slide.right.title}</div>
                    <div className="text-xs text-gray-400">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-fuchsia-500">
                <p className="text-base leading-7 text-gray-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-fuchsia-400 mb-10 border-l-4 border-fuchsia-500 pl-4">{slide.header}</h2>
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
                <h2 className="text-3xl font-bold text-fuchsia-400 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0f1215] p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#0a0a0a] px-2 text-xs font-mono text-cyan-600 group-hover:text-cyan-400 transition-colors">
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
                 <h2 className="text-3xl font-bold text-fuchsia-400 mb-8 border-l-4 border-fuchsia-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-900/10 border-red-500/20' : 'bg-cyan-900/10 border-cyan-500/20'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Brain className="text-cyan-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-cyan-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-white">
                     END OF ARCHIVE 022
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
          <span className="text-white font-mono text-sm min-w-[3ch] text-center">
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

export default Archive022;