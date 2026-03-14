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
  Workflow, Cog
} from 'lucide-react';

const Archive018 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "Agentic AI",
      subtitle: "AI 不再等候命令，它开始“自作主张”了。",
      footer: "Serial No. 018 | AI黑话翻译局",
      visual: "agentic"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Agentic AI",
      content: [
        { label: "中文语境", text: "代理式人工智能 / 具有主体性的 AI。" },
        { label: "出处", text: "随着大模型推理能力（如 OpenAI o1 系列）的飞跃，“Agentic” 成为描述这种“像人一样思考并行动”特性的专有名词。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "具有自主目标设定、任务拆解、自我修正和多步骤推理能力的 AI 系统。它不只是单次输入输出，而是一个持续的、闭环的行动流程。",
        icon: <GitBranch className="w-6 h-6 text-orange-400" />
      },
      bottom: {
        title: "说人话",
        text: "“拒绝做复读机”。传统的 AI 是你踢一脚它走一步；Agentic AI 是你给它个终点，它会自己规划路线、中间走错了会自己掉头、甚至还会帮你省钱买票。",
        icon: <Map className="w-6 h-6 text-slate-300" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "切菜机", desc: "非 Agentic", icon: <AppWindow size={24} /> },
      right: { title: "后厨总管", desc: "Agentic AI", icon: <ChefHat size={24} /> },
      explanation: "非 Agentic 像切菜机，塞土豆吐土豆片，不动就不转。Agentic AI 像后厨总管，你说“办场家宴”，他会看菜单（规划）、打电话买菜（工具使用）、火大调火（自我监控），最后准时上菜。你只需验收结果。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "劳动力进化", text: "AI 从被动的“对话工具”变成了主动的“劳动力单元”。", icon: <Bot className="text-orange-400" /> },
        { title: "复杂决策", text: "它能处理那些需要反复推敲、容错率低的商业流程（如写代码、做报表）。", icon: <Workflow className="text-slate-300" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么看",
      cards: [
        { title: "系统 2 思维", text: "Agentic AI 引入了“慢思考”，它在回答前会先在内心“排演”一遍，自我反思。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：不可控风险", text: "AI 的“自作主张”如果缺乏对齐，可能会在执行任务时产生意想不到的开销或后果。" },
        { type: 'thought', title: "反思：责任界定", text: "当 AI 拥有了“主体性”，如果它搞砸了，我们该如何界定责任？是算它的，还是算你的？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "Agentic AI",
      subtitle: "从工具到员工的跨越",
      footer: "Serial No. 018 | AI黑话翻译局",
      visual: "agentic"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#1e293b] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for Agentic (Slate/Orange - Mechanical/Action) */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-orange-900/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-slate-800/50 blur-[100px] rounded-full"></div>
      
      {/* Gear Pattern */}
      <div className="absolute w-full h-full opacity-5" style={{ 
        backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', 
        backgroundSize: '30px 30px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-slate-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-orange-500 text-[#1e293b] shadow-orange-500/30">
            <Tag size={10} className="text-orange-950" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label - Hiding No. on cover pages */}
        <div className={`flex justify-between items-center text-[10px] text-slate-400 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 018</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-orange-500' : 'w-1 bg-slate-600'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-48 w-full">
        {/* Central Gear Brain */}
        <div className="relative w-32 h-32">
           {/* Rotating Outer Gear */}
           <div className="absolute inset-0 border-[3px] border-dashed border-slate-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
           
           {/* Center Brain/Gear */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Cog size={64} className="text-orange-500 animate-[spin_10s_linear_infinite]" strokeWidth={1.5} />
              <div className="absolute inset-0 flex items-center justify-center">
                 <Brain size={32} className="text-white drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" strokeWidth={2} />
              </div>
           </div>

           {/* Tentacles / Connectors */}
           {[0, 1, 2, 3].map((i) => (
             <div key={i} className={`absolute top-1/2 left-1/2 w-32 h-[2px] bg-gradient-to-r from-orange-500/50 to-transparent origin-left`} 
                  style={{ transform: `translateY(-50%) rotate(${i * 90 + 45}deg)` }}>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-400 rounded-full animate-pulse" 
                     style={{ animationDelay: `${i * 0.5}s` }}></div>
             </div>
           ))}

           {/* Floating Icons at ends */}
           <div className="absolute -top-4 -right-4 bg-slate-800/80 p-1.5 rounded-lg border border-slate-600 animate-bounce delay-75">
              <Code2 size={14} className="text-orange-300" />
           </div>
           <div className="absolute -bottom-4 -left-4 bg-slate-800/80 p-1.5 rounded-lg border border-slate-600 animate-bounce delay-150">
              <MessageSquare size={14} className="text-blue-300" />
           </div>
           <div className="absolute -top-4 -left-4 bg-slate-800/80 p-1.5 rounded-lg border border-slate-600 animate-bounce delay-300">
              <Search size={14} className="text-green-300" />
           </div>
        </div>
    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-10 group w-full">
              <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full animate-pulse"></div>
              {renderVisuals()}
            </div>

            <h1 className="text-5xl font-bold mb-6 tracking-tighter leading-tight text-white">
              Agentic AI
            </h1>
            
            <p className="text-lg text-slate-300 font-light tracking-widest border-t border-b border-slate-700 py-3 px-6 bg-slate-800/30">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-orange-400/80 font-mono flex items-center gap-2">
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
                   <div className="absolute inset-0 bg-orange-500/10 blur-[60px] rounded-full animate-pulse"></div>
                   {renderVisuals()}
                   {/* Extra Wide Decorations */}
                   <div className="absolute top-[-30px] right-[-30px] text-orange-300 opacity-40 animate-pulse"><GitBranch size={24} /></div>
                   <div className="absolute bottom-[-20px] left-[-40px] text-slate-400 opacity-40 animate-bounce"><Workflow size={24} /></div>
                </div>
             </div>

             {/* Right: Text */}
             <div className="flex-1 flex flex-col justify-center text-left z-20 pl-4 pr-4">
                <div className="flex items-center gap-2 mb-4 opacity-70">
                   <Fingerprint size={14} className="text-orange-500"/>
                   <span className="text-sm text-orange-500 font-mono tracking-[0.2em]">SERIAL NO. 018</span>
                </div>
                
                <div className="mb-6 drop-shadow-2xl">
                  {/* Huge Title */}
                  <h1 className="text-7xl font-bold text-white tracking-tighter mb-4 leading-none">
                    Agentic AI
                  </h1>
                  
                  {/* Styled Subtitle */}
                  <div className="inline-block border-l-4 border-orange-500 pl-4 py-3 pr-8 bg-gradient-to-r from-orange-900/30 to-transparent rounded-r-lg">
                    {/* Gradient Text for impact */}
                    <span className="text-3xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-orange-500">
                      从工具到员工的跨越
                    </span>
                  </div>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-orange-500 mb-8 border-l-4 border-orange-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-1 leading-tight">{slide.title}</div>
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-orange-300 font-mono uppercase border-b border-orange-900/50 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-slate-200 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-orange-500 mb-8 border-l-4 border-orange-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-orange-900/10 border border-orange-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-orange-200">{slide.top.title}</h3>
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
               <h2 className="text-3xl font-bold text-orange-500">{slide.header}</h2>
               <span className="text-sm text-slate-400">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-slate-800/50 p-4 rounded-lg flex flex-col items-center text-center opacity-80 border border-slate-700">
                    <div className="mb-2 text-slate-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-slate-300">{slide.left.title}</div>
                    <div className="text-xs text-slate-500">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-orange-500 font-bold">→</div>
                <div className="flex-1 bg-orange-900/20 border border-orange-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(249,115,22,0.1)]">
                    <div className="mb-2 text-orange-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-orange-100">{slide.right.title}</div>
                    <div className="text-xs text-orange-500/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-orange-500">
                <p className="text-base leading-7 text-slate-200 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-orange-500 mb-10 border-l-4 border-orange-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-700"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-orange-500"></div>
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
                <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0f172a] p-6 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#1e293b] px-2 text-xs font-mono text-orange-600 group-hover:text-orange-400 transition-colors">
                               Think 0{idx + 1}
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
                 <h2 className="text-3xl font-bold text-orange-500 mb-8 border-l-4 border-orange-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-orange-900/10 border-orange-500/20' : 'bg-slate-800/30 border-slate-700'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-orange-400" /> : <Brain className="text-slate-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-orange-200' : 'text-slate-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-orange-500">
                     END OF ARCHIVE 018
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
        <div className={`w-full bg-[#1e293b] shadow-2xl border-4 border-slate-700 relative transition-all duration-500 ${
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
        <div className="flex items-center gap-4 bg-slate-900 p-2 rounded-full shadow-lg border border-slate-700">
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

export default Archive018;