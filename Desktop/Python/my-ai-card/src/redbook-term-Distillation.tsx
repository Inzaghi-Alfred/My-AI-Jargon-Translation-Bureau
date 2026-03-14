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
  Usb, Cable, HardDrive, FolderSync, PlugZap, CloudRain, Droplet, Archive
} from 'lucide-react';

const Archive034 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "Knowledge Distillation",
      subtitle: "把万亿参数的智慧，装进你的手机里。",
      footer: "Serial No. 034 | AI黑话翻译局",
      visual: "distillation"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Knowledge Distillation",
      translation: "“知识蒸馏”",
      content: [
        { label: "核心身份", text: "模型压缩与提效技术。" },
        { label: "出处", text: "由深度学习泰斗 Geoffrey Hinton 在 2015 年系统化提出，旨在让小模型学习大模型的“思考方式”。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "一种机器学习技术。通过训练一个小模型（学生）来模仿预训练大模型（老师）的输出分布。不仅仅学习正确答案，更学习老师对错误答案的概率判断（Soft Targets）。",
        icon: <Filter className="w-6 h-6 text-purple-400" />
      },
      bottom: {
        title: "说人话",
        text: "“抄学霸的笔记”。大模型（老师）博学但笨重；小模型（学生）轻巧但底子薄。老师把“解题思路”传给学生，让学生用 1/10 的体积，发挥出 90% 的功力。",
        icon: <BookOpen className="w-6 h-6 text-amber-300" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "三天三夜高汤", desc: "Teacher Model", icon: <Soup size={24} /> },
      right: { title: "极鲜高汤精", desc: "Student Model", icon: <Archive size={24} /> },
      explanation: "大模型像熬了三天三夜、用百种食材的超级高汤。味道无敌，但占地大、成本高、携带难。蒸馏就是通过特殊工艺去掉水分，只保留最核心的鲜味分子，做成“高汤精”（小模型）。体积极小，丢进水里（手机）就能还原大厨味道，够快、够省、够用。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "端侧 AI 爆发", text: "让你的手机、手表甚至耳机能直接跑智能模型，不需要时刻连接云端。", icon: <Smartphone className="text-purple-400" /> },
        { title: "降本增效", text: "大幅降低了推理（运行）成本，让开发者用更少的算力提供更聪明的服务。", icon: <TrendingDown className="text-amber-300" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么看",
      cards: [
        { title: "智能的平权", text: "蒸馏打破了“只有巨头才玩得起 AI”的垄断，让智慧在边缘设备和普通开发者手中扎根。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：信息损耗", text: "学生很难 100% 复刻老师的灵魂，在极度复杂的逻辑推理下，小模型依然会暴露短板。" },
        { type: 'thought', title: "反思：原创的贬值", text: "如果所有的高阶知识都可以被低成本“蒸馏”和复制，那“独家秘籍”的价值是否会消失？真正的原创该何去何从？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover',
      badge: "公众号封面",
      title: "知识蒸馏",
      subtitle: "让智慧轻装上阵",
      footer: "Serial No. 034 | AI黑话翻译局",
      visual: "distillation"
    }
  ];

  // Helper icons
  function Filter(props: any) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>;
  }
  function Smartphone(props: any) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>;
  }
  function TrendingDown(props: any) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>;
  }

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#100719] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Deep Purple base with Gold highlights */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-purple-900/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-amber-900/10 blur-[80px] rounded-full"></div>
      
      {/* Grid Pattern */}
      <div className="absolute w-full h-full opacity-5" style={{ 
        backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)', 
        backgroundSize: '30px 30px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-amber-300 text-[#100719] shadow-amber-300/20">
            <Tag size={10} className="text-amber-950" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label */}
        <div className={`flex justify-between items-center text-[10px] text-purple-400/60 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 034</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1 z-50">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-amber-300' : 'w-1 bg-purple-900'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex flex-col items-center justify-center h-64 w-full">
        
        {/* Teacher Model (Huge Cloud/Brain) */}
        <div className="relative w-32 h-20 mb-2 flex items-center justify-center">
            <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full animate-pulse"></div>
            <Cloud size={80} className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] absolute" strokeWidth={1} />
            <Brain size={32} className="text-white absolute z-10 opacity-80" strokeWidth={1.5} />
            <div className="absolute -top-4 right-0 text-[8px] font-mono text-purple-300">1000B_PARAMS</div>
        </div>

        {/* Funnel & Drop */}
        <div className="relative h-16 w-full flex flex-col items-center justify-start z-20">
            {/* Funnel shape */}
            <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[30px] border-l-transparent border-r-transparent border-t-purple-900/50"></div>
            <div className="w-2 h-4 bg-gradient-to-b from-purple-900/50 to-amber-500/80 -mt-1"></div>
            
            {/* Distilled Drop falling */}
            <div className="absolute top-8 animate-[bounce_2s_infinite]">
                <Droplet size={16} className="text-amber-300 fill-amber-300/50 drop-shadow-[0_0_10px_rgba(252,211,77,1)]" />
            </div>
            
            {/* Distillation Process Lines */}
            <div className="absolute right-[calc(50%+30px)] top-4 flex gap-1 opacity-50">
                <div className="w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
                <div className="w-1 h-1 bg-purple-400 rounded-full animate-ping delay-75"></div>
                <div className="text-[6px] font-mono text-purple-300 ml-1">KNOWLEDGE_TRANSFER</div>
            </div>
        </div>

        {/* Student Model (Small solid container) */}
        <div className="relative w-16 h-12 mt-2 flex items-center justify-center">
            <div className="absolute inset-0 bg-amber-500/10 blur-md rounded-lg animate-pulse delay-150"></div>
            <div className="relative w-12 h-10 bg-slate-900 border border-amber-400/80 rounded-lg shadow-[0_0_15px_rgba(252,211,77,0.3)] flex items-center justify-center overflow-hidden">
                {/* Glowing interior */}
                <div className="absolute bottom-0 w-full h-[30%] bg-amber-400/30"></div>
                <Cpu size={16} className="text-amber-300 z-10" />
            </div>
            <div className="absolute -bottom-4 text-[8px] font-mono text-amber-200">7B_PARAMS</div>
        </div>

    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-4 group w-full">
              {renderVisuals()}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tighter leading-tight text-white drop-shadow-md whitespace-nowrap">
              Knowledge<br/>Distillation
            </h1>
            
            <p className="text-xs sm:text-sm text-purple-200 font-light tracking-widest border-t border-b border-purple-800 py-3 px-2 bg-purple-900/20 whitespace-nowrap">
              {slide.subtitle}
            </p>
            
            <div className="mt-8 text-xs text-purple-500/80 font-mono flex items-center gap-2">
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
                   <div className="absolute top-0 right-[-30px] text-purple-400 opacity-40 animate-pulse"><Zap size={24} /></div>
                </div>
             </div>

             {/* Right: Text */}
             <div className="flex-1 flex flex-col justify-center text-left z-20 pl-16 pr-8 relative">
                <div className="flex items-center gap-2 mb-6 opacity-70">
                   <Fingerprint size={14} className="text-purple-400"/>
                   <span className="text-sm text-purple-400 font-mono tracking-[0.2em]">SERIAL NO. 034</span>
                </div>
                
                <h1 className="text-7xl font-bold text-white tracking-tighter mb-6 leading-none drop-shadow-[0_0_20px_rgba(168,85,247,0.3)] whitespace-nowrap">
                  知识蒸馏
                </h1>
                
                <div className="inline-block border-l-4 border-amber-400 pl-6 py-2 bg-gradient-to-r from-purple-900/60 to-transparent rounded-r-lg">
                  <span className="text-3xl font-light tracking-wide text-amber-100 whitespace-nowrap">
                    让智慧轻装上阵
                  </span>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-purple-400 mb-8 border-l-4 border-amber-300 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-amber-300 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-2 leading-tight font-serif italic">{slide.title}</div>
                 {slide.translation && (
                   <div className="text-sm text-purple-300 mt-3 border-t border-purple-900/50 pt-3">
                     {slide.translation}
                   </div>
                 )}
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-amber-400 font-mono uppercase border-b border-purple-900/50 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-slate-200 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-purple-400 mb-8 border-l-4 border-amber-300 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-purple-900/20 border border-purple-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-purple-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-purple-100/80 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-purple-800"></div>
                </div>

                <div className="bg-amber-900/10 border border-amber-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-amber-200">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-amber-100/90 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-purple-900/50 pb-4">
               <h2 className="text-3xl font-bold text-purple-400">{slide.header}</h2>
               <span className="text-sm text-purple-300">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-purple-950/50 border border-purple-800 p-4 rounded-lg flex flex-col items-center text-center opacity-80">
                    <div className="mb-2 text-purple-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-purple-200">{slide.left.title}</div>
                    <div className="text-xs text-purple-400/60 mt-1">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-amber-300 font-bold">→</div>
                <div className="flex-1 bg-gradient-to-br from-amber-900/30 to-purple-900/30 border border-amber-500/40 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(252,211,77,0.15)]">
                    <div className="mb-2 text-amber-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-amber-100">{slide.right.title}</div>
                    <div className="text-xs text-amber-200/80 mt-1">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-purple-900/30 p-5 rounded-xl border-l-2 border-amber-400">
                <p className="text-base leading-7 text-slate-200 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-purple-400 mb-10 border-l-4 border-amber-300 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-purple-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-amber-400"></div>
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
                <h2 className="text-3xl font-bold text-purple-400 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#150a21] p-6 rounded-2xl border border-purple-900 hover:border-amber-400/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#100719] px-2 text-xs font-mono text-purple-400 group-hover:text-amber-300 transition-colors">
                               Impact 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-amber-100 mb-1">{card.title}</h3>
                           <p className="text-slate-300 text-sm leading-relaxed">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-purple-400 mb-8 border-l-4 border-amber-300 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-950/20 border-red-500/30' : 'bg-purple-950/40 border-purple-800'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Brain className="text-purple-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-300' : 'text-purple-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-amber-500">
                     END OF ARCHIVE 034
                 </div>
              </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#090310] flex items-center justify-center p-4 font-sans">
      <div className={`flex flex-col items-center gap-6 w-full ${isWide ? 'max-w-4xl' : 'max-w-md'} transition-all duration-500`}>
        {/* Main Frame */}
        <div className={`w-full bg-[#100719] shadow-2xl border-4 border-purple-900/50 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' 
             : 'aspect-[3/4] rounded-[3rem] p-3'
        }`}>
           <div className={`w-full h-full overflow-hidden bg-[#100719] ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
              <CardWrapper index={currentSlide} badge={slides[currentSlide].badge} isWideMode={isWide}>
                {renderSlideContent(slides[currentSlide])}
              </CardWrapper>
           </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 bg-purple-950/50 p-2 rounded-full shadow-lg border border-purple-900">
          <button onClick={prevSlide} className="p-3 hover:bg-purple-900 rounded-full text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <span className="text-purple-300 font-mono text-sm min-w-[3ch] text-center">
            {currentSlide + 1}/{slides.length}
          </span>
          <button onClick={nextSlide} className="p-3 hover:bg-purple-900 rounded-full text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-purple-800 text-xs text-center">
          {isWide ? '宽屏封面模式 (2.35:1)' : '图文卡片模式 (3:4)'}<br/>
          推荐使用系统截图工具保存图片
        </div>
      </div>
    </div>
  );
};

export default Archive034;