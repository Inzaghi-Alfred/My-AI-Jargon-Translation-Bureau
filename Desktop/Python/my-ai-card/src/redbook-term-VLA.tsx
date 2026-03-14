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
  Grab, Scan, Hand, Crosshair, BoxSelect, Move3d
} from 'lucide-react';

const Archive020 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "VLA",
      subtitle: "看懂、听懂、并做对。AI 终于长出了“手脚”。",
      footer: "Serial No. 020 | AI黑话翻译局",
      visual: "vla"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Vision-Language-Action Model",
      content: [
        { label: "中文语境", text: "视觉-语言-动作模型。" },
        { label: "出处", text: "随着机器人技术与大模型融合，由 Google DeepMind 的 RT-2 等研究引领，将多模态感知与物理控制统一。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "一种端到端的神经模型，将视觉感知、自然语言理解直接映射到物理动作指令上。无需中间编程，能像人类一样直接通过观察和听指令操作物体。",
        icon: <Move3d className="w-6 h-6 text-emerald-400" />
      },
      bottom: {
        title: "说人话",
        text: "“脑眼手合一”。以前机器人要写死坐标代码；现在只要说“把烂苹果扔掉”，VLA 能看见苹果（V）、理解扔（L）、并控制手臂抓取（A）。",
        icon: <Hand className="w-6 h-6 text-slate-300" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "按键面包机", desc: "传统机器人", icon: <Box size={24} /> },
      right: { title: "天才学徒", desc: "VLA 机器人", icon: <UserCog size={24} /> },
      explanation: "传统机器人像面包机，只会按设定程序机械旋转，面粉洒了也不管。VLA 像天才学徒，看你做一次红烧肉（视觉），听一遍秘诀（语言），就能直接伸手拿调料、调火候（动作）。“看到”和“做到”直接连通，无需说明书。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "通用机器人时代", text: "意味着不再需要为每一个任务单独编程，机器人可以通过“观察”学会万事万物。", icon: <Scan className="text-emerald-400" /> },
        { title: "物理世界拼图", text: "它是 AI 走出屏幕、进入工厂和厨房的最后一块拼图。", icon: <Map className="text-slate-300" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么看",
      cards: [
        { title: "多模态的终局", text: "文本和图像只是信息的载体，物理动作才是智能对现实世界的最强反馈。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：物理安全", text: "AI 在屏幕里犯错只是乱说话，VLA 在现实里犯错可能会打碎你的碗甚至伤到人。" },
        { type: 'thought', title: "反思：劳动的尊严", text: "当机器拥有了和人一样的灵活度与感知力，人类在体力劳动上的最后一点尊严，是否也将转化为纯粹的“创意溢价”？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "VLA",
      subtitle: "让 AI 走进物理现实",
      footer: "Serial No. 020 | AI黑话翻译局",
      visual: "vla"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#0c1210] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for VLA (Emerald/Tech Grid) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#0c1210] to-[#0c1210]"></div>
      
      {/* HUD Grid Pattern */}
      <div className="absolute w-full h-full opacity-20" style={{ 
        backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }}></div>
      
      {/* HUD Corners */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-500/50"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-emerald-500/50"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-emerald-500/50"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-500/50"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-emerald-500 text-[#0c1210] shadow-emerald-500/30">
            <Tag size={10} className="text-emerald-950" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label - Hiding No. on cover pages */}
        <div className={`flex justify-between items-center text-[10px] text-emerald-600/50 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 020</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-emerald-500' : 'w-1 bg-gray-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-64 w-full">
        {/* Group: Arm + Strawberry - Animate slight hover together */}
        <div className="relative w-48 h-full flex flex-col items-center animate-[pulse_3s_infinite]"> 
           
           {/* The Mechanical Arm Stem */}
           <div className="w-4 h-24 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400 rounded-t-lg relative z-10"></div>
           
           {/* The Wrist/Joint */}
           <div className="w-16 h-4 bg-gray-500 rounded-full border border-emerald-500/30 relative z-20 shadow-[0_0_15px_rgba(16,185,129,0.3)]"></div>

           {/* The Claw Mechanism Container */}
           <div className="relative w-full h-24 -mt-2">
              
              {/* Left Claw Finger - Angled to grip */}
              <div className="absolute left-[calc(50%-3rem)] top-0 w-4 h-20 bg-gray-400 rounded-b-xl origin-top transform rotate-[15deg] border-l-2 border-emerald-500/50 shadow-[-5px_5px_10px_rgba(0,0,0,0.5)] z-20">
                 {/* Joint detail */}
                 <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-600/30"></div>
              </div>

              {/* Right Claw Finger - Angled to grip */}
              <div className="absolute right-[calc(50%-3rem)] top-0 w-4 h-20 bg-gray-400 rounded-b-xl origin-top transform -rotate-[15deg] border-r-2 border-emerald-500/50 shadow-[5px_5px_10px_rgba(0,0,0,0.5)] z-20">
                 {/* Joint detail */}
                 <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-600/30"></div>
              </div>

              {/* The Strawberry - Held firmly between claws */}
              <div className="absolute left-1/2 top-10 -translate-x-1/2 w-14 h-16 bg-red-600 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] shadow-[0_10px_30px_rgba(220,38,38,0.4)] z-10 flex flex-col items-center overflow-hidden">
                  {/* Texture/Seeds */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fbbf24_1.5px,transparent_1.5px)] [background-size:8px_8px]"></div>
                  
                  {/* Leaves */}
                  <div className="absolute -top-1 w-10 h-6 bg-emerald-600 rounded-full blur-[1px]"></div>
                  <div className="absolute -top-2 left-2 w-4 h-6 bg-emerald-500 rounded-full rotate-45"></div>
                  <div className="absolute -top-2 right-2 w-4 h-6 bg-emerald-500 rounded-full -rotate-45"></div>
                  
                  {/* Shadow from claws */}
                  <div className="absolute left-0 top-0 w-2 h-full bg-black/20 blur-sm"></div>
                  <div className="absolute right-0 top-0 w-2 h-full bg-black/20 blur-sm"></div>
              </div>

           </div>
        </div>

        {/* HUD Overlay Layers */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           {/* Focusing Reticle */}
           <div className="w-32 h-32 border border-emerald-500/30 rounded-lg relative animate-[spin_8s_linear_infinite] mt-12">
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-emerald-400"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-emerald-400"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-emerald-400"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-emerald-400"></div>
           </div>
           
           {/* Connecting Line to Object */}
           <div className="absolute top-[60%] left-[60%] w-16 h-[1px] bg-emerald-500/50 rotate-[-45deg] origin-left"></div>
           
           {/* Data Tags */}
           <div className="absolute top-[55%] left-[70%] bg-emerald-900/90 px-3 py-1 rounded-sm border-l-2 border-emerald-400 backdrop-blur-md">
              <div className="text-[10px] text-emerald-100 font-mono leading-none mb-1">TARGET_LOCKED</div>
              <div className="text-[8px] text-emerald-500 font-mono">GRIP: STABLE</div>
           </div>
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

            <h1 className="text-6xl font-bold mb-6 tracking-tighter leading-tight text-white drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
              VLA
            </h1>
            
            <p className="text-lg text-emerald-100/80 font-light tracking-widest border-t border-b border-emerald-500/30 py-3 px-2 bg-emerald-900/10">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-emerald-600 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover':
        return (
          <div className="flex-1 flex flex-col items-center justify-center h-full pt-6 relative">
             {/* Center Title Group */}
             <div className="text-center z-20 mb-8">
                <div className="flex items-center justify-center gap-2 mb-4 opacity-70">
                   <Fingerprint size={14} className="text-emerald-500"/>
                   <span className="text-sm text-emerald-500 font-mono tracking-[0.2em]">SERIAL NO. 020</span>
                </div>
                
                <h1 className="text-8xl font-bold text-white tracking-tighter mb-4 leading-none drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  VLA
                </h1>
                
                <div className="inline-block border-b border-emerald-500 pb-4">
                  <span className="text-3xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-white to-emerald-200">
                    {slide.subtitle}
                  </span>
                </div>
             </div>

             {/* Side Visuals - HUD Elements */}
             <div className="absolute left-12 top-1/2 -translate-y-1/2 w-48 h-full flex flex-col justify-center gap-4 opacity-40 font-mono text-emerald-500 text-xs border-r border-emerald-500/20 pr-4">
                <div className="flex justify-between"><span>SCAN_RATE</span><span>120Hz</span></div>
                <div className="h-[1px] w-full bg-emerald-500/30"></div>
                <div className="flex justify-between"><span>DEPTH</span><span>0.4m</span></div>
                <div className="h-[1px] w-full bg-emerald-500/30"></div>
                <div className="flex justify-between"><span>GRIP_FORCE</span><span>2.5N</span></div>
                <div className="mt-8 animate-pulse text-emerald-300">
                   {'>'} TARGET_LOCKED
                </div>
             </div>

             <div className="absolute right-12 top-1/2 -translate-y-1/2 w-48 h-full flex flex-col justify-center gap-4 opacity-40 font-mono text-emerald-500 text-xs border-l border-emerald-500/20 pl-4 text-right">
                <div className="flex justify-between"><span>98%</span><span>CONFIDENCE</span></div>
                <div className="h-[1px] w-full bg-emerald-500/30"></div>
                <div className="flex justify-between"><span>OK</span><span>SERVO_01</span></div>
                <div className="h-[1px] w-full bg-emerald-500/30"></div>
                <div className="flex justify-between"><span>OK</span><span>SERVO_02</span></div>
                <div className="mt-8 animate-pulse text-emerald-300">
                   EXECUTING_ACTION {'<'}
                </div>
             </div>
             
             {/* Subtle Center Graphic */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none scale-150">
                <Focus size={200} className="text-emerald-500" strokeWidth={0.5} />
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-emerald-500 mb-8 border-l-4 border-emerald-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-emerald-300 mb-2 uppercase tracking-wider">Term</div>
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
             <h2 className="text-3xl font-bold text-emerald-500 mb-8 border-l-4 border-emerald-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-emerald-900/10 border border-emerald-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-emerald-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-slate-300 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-slate-700"></div>
                </div>

                <div className="bg-slate-800/30 border border-slate-600/30 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-slate-200">{slide.bottom.title}</h3>
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
               <h2 className="text-3xl font-bold text-emerald-500">{slide.header}</h2>
               <span className="text-sm text-slate-400">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-slate-800/50 p-4 rounded-lg flex flex-col items-center text-center opacity-70 border border-slate-700">
                    <div className="mb-2 text-slate-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-slate-300">{slide.left.title}</div>
                    <div className="text-xs text-slate-500">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-emerald-500 font-bold">→</div>
                <div className="flex-1 bg-emerald-900/20 border border-emerald-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    <div className="mb-2 text-emerald-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-emerald-100">{slide.right.title}</div>
                    <div className="text-xs text-emerald-500/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-emerald-500">
                <p className="text-base leading-7 text-slate-200 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-emerald-500 mb-10 border-l-4 border-emerald-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-700"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-emerald-500"></div>
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
                <h2 className="text-3xl font-bold text-emerald-500 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0f1512] p-6 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#0c1210] px-2 text-xs font-mono text-emerald-600 group-hover:text-emerald-400 transition-colors">
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
                 <h2 className="text-3xl font-bold text-emerald-500 mb-8 border-l-4 border-emerald-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-900/10 border-red-500/20' : 'bg-slate-800/30 border-slate-700'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Brain className="text-slate-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-slate-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-emerald-500">
                     END OF ARCHIVE 020
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
        <div className={`w-full bg-[#0c1210] shadow-2xl border-4 border-slate-800 relative transition-all duration-500 ${
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
          <span className="text-emerald-500 font-mono text-sm min-w-[3ch] text-center">
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

export default Archive020;