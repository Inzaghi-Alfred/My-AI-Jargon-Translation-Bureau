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
  Cuboid, Axis3d, LandPlot, EyeOff, FileQuestion, BookKey, Wind, Droplets, Ghost,
  Tornado, ArrowDownToLine, ListChecks, Bird, Repeat, Shuffle
} from 'lucide-react';

const Archive030 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "Stochastic Parrots",
      subtitle: "AI 真的懂你在说什么吗？还是它只是个职业“接龙手”？",
      footer: "Serial No. 030 | AI黑话翻译局",
      visual: "parrot"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Stochastic Parrots",
      translation: "“统计鹦鹉 / 随机鹦鹉”",
      content: [
        { label: "核心身份", text: "对大语言模型（LLM）的一种批判性定义，旨在撕开 AI “无所不知”的假象。" },
        { label: "出处", text: "2021 年论文《On the Dangers of Stochastic Parrots》，作者包括 Emily M. Bender 和 Timnit Gebru。该论文曾引发了关于 AI 伦理的大规模讨论。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "指大型语言模型通过在海量数据中学习概率分布，随机地将语言符号拼接在一起。虽然生成结果逻辑通顺且文采斐然，但模型本身并不理解这些符号背后的意义或因果。",
        icon: <Shuffle className="w-6 h-6 text-teal-400" />
      },
      bottom: {
        title: "说人话",
        text: "“只会学舌，不解其意”。AI 就像一只住在互联网里的超级鹦鹉。它听过人类说过的所有话，所以能精准预测下一个字该吐什么，但它并不真的知道“痛”是什么感觉，也不真的在乎真理。",
        icon: <Bird className="w-6 h-6 text-fuchsia-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "复读菜谱机", desc: "普通复读机", icon: <Repeat size={24} /> },
      right: { title: "五星级鹦鹉", desc: "统计鹦鹉", icon: <Bird size={24} /> },
      explanation: "统计鹦鹉像一只养在五星级厨房里的鹦鹉。它每天听主厨喊“起锅烧油”、“加两勺盐”。当有人问它怎么做菜时，它能一字不落地复述出来，语调甚至和主厨一模一样。但这只鹦鹉既不知道什么是火，也不知道盐是咸的。它只是把这些高频词汇按概率排了序，它没有味觉，只有听觉的惯性。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "揭示幻觉真相", text: "既然是概率拼接，AI 就极有可能一本正经地编造事实（胡说八道）。", icon: <Ghost className="text-teal-400" /> },
        { title: "伦理预警", text: "警惕模型像鹦鹉学舌一样，放大并重复互联网数据中原有的偏见和歧视。", icon: <AlertTriangle className="text-fuchsia-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么看",
      cards: [
        { title: "工具化视角", text: "把它当作增强创造力的“概率外挂”，而不是绝对真理的“代言人”。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：辞藻的迷惑性", text: "不要被 AI 优雅的辞藻和雄辩的语气所迷惑，要时刻核实其底层事实。" },
        { type: 'thought', title: "反思：意识的边界", text: "如果人类也是通过模仿和学习社会规则来交流，那我们与“统计鹦鹉”的本质区别，是否仅仅在于那一点难以定义的“自主意识”？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "统计鹦鹉",
      subtitle: "繁华辞藻下的逻辑荒原",
      footer: "Serial No. 030 | AI黑话翻译局",
      visual: "parrot"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#05090f] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Teal/Fuchsia for the "Parrot" vibe */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-teal-900/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-fuchsia-900/20 blur-[100px] rounded-full"></div>
      
      {/* Code/Data Matrix Pattern */}
      <div className="absolute w-full h-full opacity-[0.03]" style={{ 
         backgroundImage: `linear-gradient(rgba(45, 212, 191, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 70, 239, 0.5) 1px, transparent 1px)`,
         backgroundSize: '20px 20px',
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-teal-400 text-[#05090f] shadow-teal-400/30">
            <Tag size={10} className="text-teal-950" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label */}
        <div className={`flex justify-between items-center text-[10px] text-slate-500 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 030</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-teal-400' : 'w-1 bg-slate-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-56 w-full">
        <div className="relative flex flex-col items-center">
            {/* The Parrot Icon surrounded by Code */}
            <div className="relative z-20 flex items-center justify-center">
               <div className="absolute inset-0 bg-fuchsia-500/20 blur-2xl rounded-full animate-pulse"></div>
               <div className="absolute inset-0 bg-teal-500/20 blur-xl rounded-full animate-pulse delay-100"></div>
               <Bird size={80} className="text-fuchsia-400 drop-shadow-[0_0_15px_rgba(217,70,239,0.8)] z-10 animate-bounce" strokeWidth={1.5} />
               
               {/* Microphone / Output */}
               <Mic2 size={24} className="absolute -bottom-4 right-0 text-teal-300 opacity-80" />
            </div>

            {/* Binary strings coming out of mouth (Stochastic babble) */}
            <div className="absolute top-10 right-[-40px] text-[12px] font-mono text-teal-400 animate-[pulse_1s_infinite]">10110</div>
            <div className="absolute top-4 right-[-60px] text-[10px] font-mono text-fuchsia-400 animate-[pulse_1.5s_infinite]">"word"</div>
            <div className="absolute top-16 right-[-80px] text-[14px] font-mono text-teal-200 animate-[pulse_0.8s_infinite] opacity-60">010</div>
            <div className="absolute top-24 right-[-50px] text-[10px] font-mono text-fuchsia-300 animate-[pulse_2s_infinite]">next()</div>
            
            {/* Left side probability input */}
            <div className="absolute top-10 left-[-60px] text-[8px] font-mono text-slate-400">P(x|y)=0.9</div>
            <div className="absolute top-16 left-[-40px] text-[10px] font-mono text-slate-500">w_i</div>
            
            {/* Matrix rain effect behind */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[150%] h-[150%] flex justify-between opacity-10 pointer-events-none overflow-hidden z-0">
                <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-teal-500 to-transparent animate-[slideDown_3s_linear_infinite]"></div>
                <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-fuchsia-500 to-transparent animate-[slideDown_2s_linear_infinite_0.5s]"></div>
                <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-teal-500 to-transparent animate-[slideDown_4s_linear_infinite_1s]"></div>
            </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slideDown {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }
        `}} />
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

            <h1 className="text-5xl font-bold mb-4 tracking-tighter leading-tight text-white drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]">
              Stochastic<br/>Parrots
            </h1>
            
            <p className="text-sm text-slate-300 font-light tracking-widest border-t border-b border-teal-900/50 py-3 px-4 bg-teal-950/20">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-teal-600 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover':
        return (
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6 relative">
             {/* Left: Vibrant Feathers (Abstract representation) */}
             <div className="w-[30%] h-full flex flex-col justify-center items-center relative border-r border-teal-900/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-900/20 via-teal-900/10 to-transparent"></div>
                
                {/* Abstract feathers / curves */}
                <div className="relative w-full h-full flex items-center justify-start pl-8 opacity-60">
                   <div className="absolute w-32 h-64 bg-fuchsia-500/20 rounded-[100%_0_0_0] blur-xl transform -rotate-12"></div>
                   <div className="absolute w-40 h-40 bg-teal-500/20 rounded-[0_100%_0_0] blur-xl transform rotate-45 top-1/4"></div>
                   <Feather size={100} className="text-fuchsia-400/30 absolute left-4 transform rotate-12" strokeWidth={0.5} />
                   <Feather size={80} className="text-teal-400/30 absolute left-12 top-1/3 transform -rotate-12" strokeWidth={0.5} />
                </div>
                <div className="absolute bottom-10 right-8 font-mono text-[10px] text-fuchsia-400 tracking-widest text-right">
                   ILLUSION_OF_FLUENCY
                </div>
             </div>

             {/* Center: Title */}
             <div className="flex-1 flex flex-col justify-center text-center z-20 px-8 relative">
                <div className="flex items-center justify-center gap-2 mb-4 opacity-70">
                   <Fingerprint size={14} className="text-teal-400"/>
                   <span className="text-sm text-teal-400 font-mono tracking-[0.2em]">SERIAL NO. 030</span>
                </div>
                
                <h1 className="text-7xl font-bold text-white tracking-tighter mb-4 leading-none drop-shadow-[0_0_20px_rgba(45,212,191,0.2)] whitespace-nowrap">
                  统计鹦鹉
                </h1>
                
                <div className="inline-block border-b-2 border-teal-500/50 pb-2">
                  <span className="text-2xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-white to-teal-300 whitespace-nowrap">
                    繁华辞藻下的逻辑荒原
                  </span>
                </div>
             </div>

             {/* Right: Cold Code/Probability lines */}
             <div className="w-[30%] h-full flex flex-col justify-center items-start pl-8 relative border-l border-teal-900/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-slate-900/40 to-transparent"></div>
                
                <div className="w-full flex flex-col gap-2 relative z-10 font-mono text-[10px] opacity-80">
                   <div className="text-teal-500">def predict_next():</div>
                   <div className="text-slate-400 pl-4">tokens = get_history()</div>
                   <div className="text-slate-400 pl-4">probs = softmax(model(tokens))</div>
                   <div className="text-fuchsia-400 pl-4">return sample(probs)</div>
                   <div className="text-slate-600 mt-2"># meaning = None</div>
                   <div className="text-slate-600"># understanding = False</div>
                </div>
                
                <div className="absolute bottom-10 left-8 font-mono text-[10px] text-teal-600 tracking-widest">
                   PROBABILITY_DISTRIBUTION
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-teal-400 mb-8 border-l-4 border-teal-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-2 leading-tight font-serif italic">{slide.title}</div>
                 {slide.translation && (
                   <div className="text-sm text-teal-200/80 mt-3 border-t border-white/10 pt-3">
                     {slide.translation}
                   </div>
                 )}
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-fuchsia-400 font-mono uppercase border-b border-slate-800 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-slate-300 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-teal-400 mb-8 border-l-4 border-teal-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-teal-950/30 border border-teal-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-teal-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-teal-100/70 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-slate-700"></div>
                </div>

                <div className="bg-fuchsia-950/20 border border-fuchsia-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-fuchsia-200">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-slate-300 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-slate-800 pb-4">
               <h2 className="text-3xl font-bold text-teal-400">{slide.header}</h2>
               <span className="text-sm text-slate-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-slate-900 border border-slate-800 p-4 rounded-lg flex flex-col items-center text-center opacity-70">
                    <div className="mb-2 text-slate-500">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-slate-400">{slide.left.title}</div>
                    <div className="text-xs text-slate-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-teal-500 font-bold">→</div>
                <div className="flex-1 bg-gradient-to-br from-fuchsia-900/20 to-teal-900/20 border border-teal-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(45,212,191,0.15)]">
                    <div className="mb-2 text-fuchsia-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-teal-100">{slide.right.title}</div>
                    <div className="text-xs text-teal-400/60">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-teal-500">
                <p className="text-base leading-7 text-slate-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-teal-400 mb-10 border-l-4 border-teal-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-teal-500"></div>
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
                <h2 className="text-3xl font-bold text-teal-400 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0a0e17] p-6 rounded-2xl border border-slate-800 hover:border-teal-500/30 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#05090f] px-2 text-xs font-mono text-slate-600 group-hover:text-teal-400 transition-colors">
                               View 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-teal-100 mb-1">{card.title}</h3>
                           <p className="text-slate-400 text-sm leading-relaxed">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-teal-400 mb-8 border-l-4 border-teal-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-fuchsia-950/20 border-fuchsia-500/20' : 'bg-slate-900 border-slate-700'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-fuchsia-400" /> : <Brain className="text-slate-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-fuchsia-300' : 'text-slate-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-teal-500">
                     END OF ARCHIVE 030
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
        <div className={`w-full bg-[#05090f] shadow-2xl border-4 border-slate-900 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' 
             : 'aspect-[3/4] rounded-[3rem] p-3'
        }`}>
           <div className={`w-full h-full overflow-hidden bg-[#05090f] ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
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
          <span className="text-teal-400/70 font-mono text-sm min-w-[3ch] text-center">
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

export default Archive030;