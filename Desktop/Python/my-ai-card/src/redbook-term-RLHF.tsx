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
  Hexagon, Split, CircuitBoard, Users, UserCheck, ThumbsUp, Star, SlidersHorizontal
} from 'lucide-react';

const Archive025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "RLHF",
      subtitle: "给大模型立规矩，是 AI 变“聪明”的最后一公里。",
      footer: "Serial No. 025 | AI黑话翻译局",
      visual: "rlhf"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Reinforcement Learning from Human Feedback",
      content: [
        { label: "中文语境", text: "人类反馈强化学习 / 对齐技术。" },
        { label: "出处", text: "由 OpenAI 在 InstructGPT 相关论文中普及，是 ChatGPT 能够脱颖而出的核心秘密。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "结合强化学习与人类评估的训练方法。通过人类对模型生成的多个结果进行排序打分，训练奖励模型，引导大模型向高分答案优化。",
        icon: <UserCheck className="w-6 h-6 text-red-400" />
      },
      bottom: {
        title: "说人话",
        text: "“AI 界的考试打分制度”。模型先乱写，人类老师选出最好的说：“这个好，按这个写。”AI 慢慢学会揣摩人类喜好，不再胡言乱语。",
        icon: <ThumbsUp className="w-6 h-6 text-white" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "乱炖原始厨子", desc: "预训练", icon: <Soup size={24} /> },
      right: { title: "米其林名厨", desc: "RLHF", icon: <ChefHat size={24} /> },
      explanation: "预训练像厨子读完了全世界菜谱，但不知道咸淡，甚至会做毒菜。RLHF 是请美食家（人类）来试吃打分：“这盘色泽好，那盘太甜”。厨子根据反馈微调，终于懂了什么叫“适中”、什么叫“礼貌”。这是从“知晓万物”到“懂得为人”的质变。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "价值观对齐", text: "确保 AI 不会产生歧视、暴力或违法的建议，让它更安全。", icon: <Scale className="text-red-400" /> },
        { title: "有用性提升", text: "让 AI 真正听懂指令（Instruction Following），而不是只会玩文字接龙。", icon: <CheckCircle className="text-white" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么看",
      cards: [
        { title: "偏好即逻辑", text: "RLHF 注入的是人类的偏好。AI 表现出的“智慧”，本质上是人类文明公约的映射。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：奖励作弊", text: "AI 可能会“学坏”，发现说好听的废话能得高分，就变得油嘴滑舌而不解决问题。" },
        { type: 'thought', title: "反思：人性投影", text: "如果 AI 的“人格”都是打分喂出来的，那它的善良与博学，究竟是它的本质，还是我们内心期望的投影？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "RLHF",
      subtitle: "教 AI 像人一样思考",
      footer: "Serial No. 025 | AI黑话翻译局",
      visual: "rlhf"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#0a0505] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for RLHF (Red Chaos -> White Order) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-950/40 via-[#0a0505] to-[#0a0505]"></div>
      
      {/* Noise / Grain */}
      <div className="absolute w-full h-full opacity-10" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.5\'/%3E%3C/svg%3E")', 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent left-1/2 -translate-x-1/2"></div>

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
        <div className={`flex justify-between items-center text-[10px] text-zinc-500 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 025</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-red-500' : 'w-1 bg-zinc-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-48 w-full">
        {/* Left: The Chaotic Raw Model */}
        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-24 h-24">
           {/* Chaotic Particles */}
           <div className="absolute inset-0 animate-[pulse_0.5s_infinite]">
              {[...Array(12)].map((_, i) => (
                 <div key={i} 
                      className="absolute w-1 h-1 bg-red-500 rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random(),
                        animation: `ping ${0.5 + Math.random()}s infinite`
                      }}
                 ></div>
              ))}
           </div>
           {/* Glitchy Core */}
           <div className="absolute inset-2 border-2 border-red-500/30 rounded-full animate-[spin_2s_linear_infinite] border-dashed"></div>
           <div className="absolute inset-4 border border-red-500/50 rounded-full animate-[ping_1s_infinite]"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-red-500 font-mono animate-pulse">RAW</div>
        </div>

        {/* Center: The Alignment Process (Human Hands/Beam) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 flex items-center justify-center">
           {/* The Beam */}
           <div className="w-full h-1 bg-gradient-to-r from-red-500/50 via-white to-white/50 blur-[1px]"></div>
           
           {/* The "Tuning" Icons */}
           <div className="absolute top-[-20px] animate-bounce text-white/80">
              <SlidersHorizontal size={20} />
           </div>
           <div className="absolute bottom-[-20px] animate-pulse text-white/80">
              <UserCheck size={20} />
           </div>
        </div>

        {/* Right: The Aligned Model */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center">
           {/* Perfect Geometry */}
           <div className="absolute inset-0 bg-white/5 rounded-full blur-md"></div>
           <div className="w-16 h-16 border border-white/50 rounded-full shadow-[0_0_20px_white] flex items-center justify-center relative">
              <div className="absolute inset-0 border border-white/20 rounded-full scale-125"></div>
              <Sparkles size={24} className="text-white animate-pulse" />
           </div>
           <div className="absolute -bottom-6 text-[10px] text-white/80 font-mono tracking-widest">ALIGNED</div>
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

            <h1 className="text-6xl font-bold mb-6 tracking-tighter leading-tight text-white">
              RLHF
            </h1>
            
            <p className="text-lg text-zinc-300 font-light tracking-widest border-t border-b border-red-900/50 py-3 px-2 bg-red-900/10">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-red-500 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover':
        return (
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6 relative">
             {/* Left: Chaos Pixel Flow */}
             <div className="w-[30%] h-full flex flex-col justify-center items-end pr-8 border-r border-red-900/30">
                <div className="grid grid-cols-4 gap-2 opacity-60">
                   {[...Array(16)].map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-sm ${Math.random() > 0.5 ? 'bg-red-500' : 'bg-red-900'} animate-pulse`} style={{animationDelay: `${Math.random()}s`}}></div>
                   ))}
                </div>
                <div className="mt-4 font-mono text-[10px] text-red-500 tracking-widest">UNALIGNED_OUTPUT</div>
             </div>

             {/* Center: Title */}
             <div className="flex-1 flex flex-col justify-center text-center z-20 px-4">
                <div className="flex items-center justify-center gap-2 mb-4 opacity-60">
                   <Fingerprint size={14} className="text-red-500"/>
                   <span className="text-sm text-red-500 font-mono tracking-[0.2em]">SERIAL NO. 025</span>
                </div>
                
                <h1 className="text-7xl font-bold text-white tracking-tighter mb-4 leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  RLHF
                </h1>
                
                <div className="inline-block border-b-2 border-white/20 pb-2">
                  <span className="text-3xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-white whitespace-nowrap">
                    教 AI 像人一样思考
                  </span>
                </div>
             </div>

             {/* Right: Star Ratings */}
             <div className="w-[30%] h-full flex flex-col justify-center items-start pl-8 border-l border-white/10">
                <div className="flex gap-1 mb-2">
                   {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 animate-[bounce_1s_infinite]" style={{animationDelay: `${i * 0.1}s`}} />
                   ))}
                </div>
                <div className="font-mono text-[10px] text-white tracking-widest">HUMAN_FEEDBACK</div>
                <div className="w-24 h-1 bg-gradient-to-r from-white to-transparent mt-2 rounded-full"></div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-red-500 mb-8 border-l-4 border-red-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-zinc-400 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-1 leading-tight">{slide.title}</div>
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-zinc-400 font-mono uppercase border-b border-zinc-800 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-zinc-200 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-red-500 mb-8 border-l-4 border-red-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-red-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-zinc-300 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-zinc-800"></div>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-white">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-zinc-300 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-zinc-800 pb-4">
               <h2 className="text-3xl font-bold text-red-500">{slide.header}</h2>
               <span className="text-sm text-zinc-400">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-zinc-900 p-4 rounded-lg flex flex-col items-center text-center opacity-70 border border-zinc-800">
                    <div className="mb-2 text-zinc-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-zinc-300">{slide.left.title}</div>
                    <div className="text-xs text-zinc-500">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-white font-bold">→</div>
                <div className="flex-1 bg-gradient-to-br from-red-900/20 to-white/5 border border-red-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <div className="mb-2 text-white">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-white">{slide.right.title}</div>
                    <div className="text-xs text-zinc-400">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-red-500">
                <p className="text-base leading-7 text-zinc-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-red-500 mb-10 border-l-4 border-red-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-zinc-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-red-500"></div>
                          <div className="flex items-center gap-2 mb-2">
                             {item.icon}
                             <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          </div>
                          <p className="text-zinc-300 leading-relaxed">{item.text}</p>
                      </div>
                  ))}
               </div>
            </div>
        );

      case 'cards':
         return (
             <div className="flex-1 flex flex-col pt-4 justify-center">
                <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#18181b] p-6 rounded-2xl border border-zinc-800 hover:border-red-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#0a0505] px-2 text-xs font-mono text-zinc-500 group-hover:text-red-500 transition-colors">
                               View 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                           <p className="text-zinc-400 text-sm">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-red-500 mb-8 border-l-4 border-red-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-900/20 border-red-500/20' : 'bg-zinc-800/30 border-zinc-700'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Brain className="text-zinc-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-zinc-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-zinc-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-red-500">
                     END OF ARCHIVE 025
                 </div>
              </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-zinc-950 flex items-center justify-center p-4 font-sans">
      <div className={`flex flex-col items-center gap-6 w-full ${isWide ? 'max-w-4xl' : 'max-w-md'} transition-all duration-500`}>
        {/* Main Frame */}
        <div className={`w-full bg-[#0a0505] shadow-2xl border-4 border-zinc-800 relative transition-all duration-500 ${
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
        <div className="flex items-center gap-4 bg-zinc-900 p-2 rounded-full shadow-lg border border-zinc-800">
          <button onClick={prevSlide} className="p-3 hover:bg-zinc-800 rounded-full text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <span className="text-red-500 font-mono text-sm min-w-[3ch] text-center">
            {currentSlide + 1}/{slides.length}
          </span>
          <button onClick={nextSlide} className="p-3 hover:bg-zinc-800 rounded-full text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-zinc-600 text-xs text-center">
          {isWide ? '宽屏封面模式 (2.35:1)' : '图文卡片模式 (3:4)'}<br/>
          推荐使用系统截图工具保存图片
        </div>
      </div>
    </div>
  );
};

export default Archive025;