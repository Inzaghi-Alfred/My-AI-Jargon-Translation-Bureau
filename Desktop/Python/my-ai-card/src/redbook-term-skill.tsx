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
  Skull, Eclipse, Mail, Plane, Palette, ShoppingCart, ActivitySquare
} from 'lucide-react';

const Archive032 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "Skill",
      subtitle: "AI 的“数字乐高”，拼出你专属的万能助手。",
      footer: "Serial No. 032 | AI黑话翻译局",
      visual: "skill-blocks"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Skill",
      translation: "“AI 技能”",
      content: [
        { label: "核心身份", text: "AI 智能体（Agent）可调用的外部能力接口。" },
        { label: "出处", text: "早期见于 Alexa 的技能插件，现指大模型通过 Tool Calling（工具调用）驱动的功能模块。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "一组封装好的 API 或程序脚本，使 AI 能够突破训练数据的限制，与物理世界或第三方软件进行实时交互。",
        icon: <Blocks className="w-6 h-6 text-pink-400" />
      },
      bottom: {
        title: "说人话",
        text: "“AI 的外挂装备”。AI 大脑再强也只是个“缸中之脑”，Skill 就是给它装上的电钻、画笔或电话。有了 Skill，它不仅能告诉你天气，还能直接帮你买伞。",
        icon: <Plug className="w-6 h-6 text-cyan-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "纸上谈兵的理论派", desc: "纯大脑 AI", icon: <BookOpen size={24} /> },
      right: { title: "全副武装的实干家", desc: "拥有 Skill 的 AI", icon: <ChefHat size={24} /> },
      explanation: "只有大脑的 AI 像个没进过厨房的理论大师，知道红烧肉的化学变化，却拿不起锅。拥有 Skill 的 AI 是全副武装的厨师：用 Skill A（搜索）查猪肉行情，用 Skill B（温控）操作烤箱，用 Skill C（配送）呼叫无人机。每一个 Skill 都是 AI 走向“落地执行”的阶梯。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "打破时空限制", text: "让原本数据停留在过去的 AI，掌握实时信息（如实时搜索、股票查询）。", icon: <Globe className="text-cyan-400" /> },
        { title: "闭环操作", text: "赋予 AI 行动力，让它从单纯提供建议的“咨询公司”变成帮你办事的“执行局”。", icon: <RefreshCw className="text-amber-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么看",
      cards: [
        { title: "能力边界 = 技能池", text: "Skill 的丰富程度决定了 AI 劳动力的人才厚度。Agent 越强，往往是因为它掌握的“动作原子”越多。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：权限滥用", text: "如果给 AI 太多“支付技能”或“删除技能”，一旦它理解错指令或产生幻觉，后果可能极其严重。" },
        { type: 'thought', title: "反思：人类退化", text: "如果所有的技能（画画、写代码、订票）都被 AI 掌握，人类是否只需要保留唯一一个技能——“提问”？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "Skill",
      subtitle: "定义 AI 的行动边界",
      footer: "Serial No. 032 | AI黑话翻译局",
      visual: "skill-blocks"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#0a0b10] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Deep Space with subtle multi-color glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-pink-900/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[100px] rounded-full"></div>
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-amber-900/10 blur-[80px] rounded-full"></div>
      
      {/* Dot Grid / Lego Baseplate Pattern */}
      <div className="absolute w-full h-full opacity-10" style={{ 
        backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)', 
        backgroundSize: '24px 24px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-slate-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-slate-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

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
        <div className={`flex justify-between items-center text-[10px] text-slate-500 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 032</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-cyan-400' : 'w-1 bg-slate-700'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-56 w-full perspective-1000">
        
        {/* Central Agent / User Core */}
        <div className="absolute z-20 w-16 h-16 bg-slate-800 rounded-xl border border-slate-600 flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.1)]">
           <Bot size={32} className="text-white" />
           <div className="absolute inset-0 bg-white/5 animate-pulse rounded-xl"></div>
        </div>

        {/* Surrounding Skill Blocks (Lego-like) */}
        <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
            
            {/* Skill 1: Search (Cyan) */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-4 w-12 h-12 bg-cyan-900/40 border border-cyan-400 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)] backdrop-blur-sm animate-[spin_20s_linear_infinite_reverse]">
               <div className="absolute -top-1 w-4 h-2 bg-cyan-400/50 rounded-t-sm"></div>
               <Search size={20} className="text-cyan-300" />
            </div>

            {/* Skill 2: Email (Pink) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 w-12 h-12 bg-pink-900/40 border border-pink-400 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(244,114,182,0.4)] backdrop-blur-sm animate-[spin_20s_linear_infinite_reverse]">
               <div className="absolute -top-1 w-4 h-2 bg-pink-400/50 rounded-t-sm"></div>
               <Mail size={20} className="text-pink-300" />
            </div>

            {/* Skill 3: Ticket (Amber) */}
            <div className="absolute left-6 top-1/2 -translate-x-4 -translate-y-1/2 w-12 h-12 bg-amber-900/40 border border-amber-400 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.4)] backdrop-blur-sm animate-[spin_20s_linear_infinite_reverse]">
               <div className="absolute -top-1 w-4 h-2 bg-amber-400/50 rounded-t-sm"></div>
               <Plane size={20} className="text-amber-300" />
            </div>

            {/* Skill 4: Draw (Emerald) */}
            <div className="absolute right-6 top-1/2 translate-x-4 -translate-y-1/2 w-12 h-12 bg-emerald-900/40 border border-emerald-400 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.4)] backdrop-blur-sm animate-[spin_20s_linear_infinite_reverse]">
               <div className="absolute -top-1 w-4 h-2 bg-emerald-400/50 rounded-t-sm"></div>
               <Palette size={20} className="text-emerald-300" />
            </div>

            {/* Skill 5: Shop (Purple - decorative) */}
            <div className="absolute top-8 right-8 w-10 h-10 bg-purple-900/30 border border-purple-500/50 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.3)] backdrop-blur-sm animate-[spin_20s_linear_infinite_reverse]">
               <ShoppingCart size={16} className="text-purple-300" />
            </div>

        </div>

        {/* Connecting Lines */}
        <div className="absolute w-32 h-32 border border-slate-700 border-dashed rounded-full pointer-events-none"></div>
        <div className="absolute w-48 h-48 border border-slate-800 border-dashed rounded-full pointer-events-none"></div>
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

            <h1 className="text-5xl font-bold mb-4 tracking-tighter leading-tight text-white drop-shadow-md whitespace-nowrap">
              Skill
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 font-light tracking-widest border-t border-b border-slate-800 py-3 px-4 bg-slate-900/40 whitespace-nowrap">
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
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6 relative">
             {/* Left: Starry Skill Brain Visuals */}
             <div className="w-[45%] h-full flex flex-col justify-center items-center relative pl-8">
                {/* Abstract Constellation / Brain of Skills */}
                <div className="relative w-64 h-64">
                   <div className="absolute inset-0 opacity-20">
                      <Brain size={256} className="text-white" strokeWidth={0.5} />
                   </div>
                   
                   {/* Skill nodes clustered into brain shape */}
                   <div className="absolute top-[20%] left-[30%] w-6 h-6 bg-cyan-500 rounded-sm shadow-[0_0_15px_cyan] animate-pulse flex items-center justify-center"><Search size={12} className="text-black"/></div>
                   <div className="absolute top-[30%] right-[20%] w-8 h-8 bg-pink-500 rounded-sm shadow-[0_0_15px_pink] animate-bounce flex items-center justify-center delay-100"><Mail size={16} className="text-white"/></div>
                   <div className="absolute bottom-[40%] left-[20%] w-7 h-7 bg-amber-400 rounded-sm shadow-[0_0_15px_orange] animate-pulse flex items-center justify-center delay-200"><Plane size={14} className="text-black"/></div>
                   <div className="absolute bottom-[20%] right-[30%] w-6 h-6 bg-emerald-400 rounded-sm shadow-[0_0_15px_lime] animate-bounce flex items-center justify-center delay-300"><Palette size={12} className="text-black"/></div>
                   <div className="absolute top-[50%] left-[50%] w-5 h-5 bg-purple-500 rounded-sm shadow-[0_0_15px_purple] animate-pulse flex items-center justify-center delay-150"><ShoppingCart size={10} className="text-white"/></div>
                   
                   {/* Interconnecting dashed lines */}
                   <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                     <line x1="30%" y1="20%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                     <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                     <line x1="20%" y1="60%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                     <line x1="70%" y1="80%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                   </svg>
                </div>
             </div>

             {/* Right: Text */}
             <div className="flex-1 flex flex-col justify-center text-left z-20 pl-8 pr-12 relative">
                <div className="flex items-center gap-2 mb-6 opacity-70">
                   <Fingerprint size={14} className="text-cyan-400"/>
                   <span className="text-sm text-cyan-400 font-mono tracking-[0.2em]">SERIAL NO. 032</span>
                </div>
                
                <h1 className="text-8xl font-bold text-white tracking-tighter mb-6 leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] whitespace-nowrap">
                  Skill
                </h1>
                
                <div className="inline-block border-l-4 border-cyan-400 pl-6 py-2 bg-gradient-to-r from-slate-800/80 to-transparent rounded-r-lg">
                  <span className="text-3xl font-light tracking-wide text-slate-200 whitespace-nowrap">
                    定义 AI 的行动边界
                  </span>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 border-l-4 border-cyan-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-pink-400 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-2xl font-bold text-white mb-2 leading-tight">{slide.title}</div>
                 {slide.translation && (
                   <div className="text-sm text-slate-400 mt-3 border-t border-slate-700 pt-3 font-serif italic">
                     {slide.translation}
                   </div>
                 )}
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-amber-400 font-mono uppercase border-b border-slate-800 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-slate-300 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-cyan-400 mb-8 border-l-4 border-cyan-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-pink-950/20 border border-pink-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-pink-300">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-pink-100/70 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-slate-700"></div>
                </div>

                <div className="bg-cyan-950/20 border border-cyan-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-cyan-300">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-cyan-100/80 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-slate-800 pb-4">
               <h2 className="text-3xl font-bold text-cyan-400">{slide.header}</h2>
               <span className="text-sm text-slate-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-slate-900 border border-slate-800 p-4 rounded-lg flex flex-col items-center text-center opacity-80">
                    <div className="mb-2 text-slate-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-slate-300">{slide.left.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-cyan-500 font-bold">VS</div>
                <div className="flex-1 bg-gradient-to-br from-cyan-900/30 to-amber-900/30 border border-cyan-500/40 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                    <div className="mb-2 text-amber-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-cyan-100">{slide.right.title}</div>
                    <div className="text-xs text-amber-400/80 mt-1">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-slate-800/50 p-5 rounded-xl border-l-2 border-cyan-400">
                <p className="text-base leading-7 text-slate-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-cyan-400 mb-10 border-l-4 border-cyan-400 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-700"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-cyan-400"></div>
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
                <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#131620] p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#0a0b10] px-2 text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                               View 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-cyan-100 mb-1">{card.title}</h3>
                           <p className="text-slate-400 text-sm leading-relaxed">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-cyan-400 mb-8 border-l-4 border-cyan-500 pl-4">{slide.header}</h2>
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
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-cyan-500">
                     END OF ARCHIVE 032
                 </div>
              </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#050608] flex items-center justify-center p-4 font-sans">
      <div className={`flex flex-col items-center gap-6 w-full ${isWide ? 'max-w-4xl' : 'max-w-md'} transition-all duration-500`}>
        {/* Main Frame */}
        <div className={`w-full bg-[#0a0b10] shadow-2xl border-4 border-slate-800 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' 
             : 'aspect-[3/4] rounded-[3rem] p-3'
        }`}>
           <div className={`w-full h-full overflow-hidden bg-[#0a0b10] ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
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

export default Archive032;