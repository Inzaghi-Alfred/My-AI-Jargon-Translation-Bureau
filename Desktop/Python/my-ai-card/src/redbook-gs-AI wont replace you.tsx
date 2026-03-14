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
  Workflow, Cog, Feather, PenTool, Mountain, User, UserPlus
} from 'lucide-react';

const Archive019 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "思辨",
      title: "AI Won't Replace You",
      subtitle: "AI 不会取代你，但那个“带电”的同类会。",
      footer: "Serial No. 019 | AI黑话翻译局",
      visual: "replace"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "AI won't replace you, but a person using AI will",
      content: [
        { label: "背景", text: "这是目前 AI 转型期最广泛流传的共识，旨在将大众对 AI 的恐惧转化为对学习 AI 的动力。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "AI 本身不具备社会主体地位，但它作为一种生产力工具，会极大拉开个体间的效率差距。竞争的本质依然是人与人之间的竞争，只是武器升级了。",
        icon: <UsersIcon className="w-6 h-6 text-gray-400" />
      },
      bottom: {
        title: "说人话",
        text: "“外挂玩家”对“裸装玩家”的降维打击。汽车没有取代走路的人，但开车的人取代了走路的人。AI 是你的喷气背包，不是你的替代品。",
        icon: <Rocket className="w-6 h-6 text-cyan-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "全手工切丝", desc: "苦练刀工", icon: <User size={24} /> },
      right: { title: "自动化主厨", desc: "掌控机器", icon: <UserCog size={24} /> },
      explanation: "过去比拼刀工手速。现在厨师 A 还在练刀，厨师 B 学会了调教高精度机器人。结局是 B 取代 A。取代你的不是那个机器人，而是那个懂机器、有审美、能在大规模出餐时还能保持艺术感的“带电”厨师。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "消除焦虑", text: "让你明白，你的敌人不是算法，而是你自己的停滞不前。", icon: <ShieldCheck className="text-gray-400" /> },
        { title: "认知重构", text: "迫使你从“执行者”转型为“指挥官”。", icon: <Workflow className="text-cyan-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "我们应该怎么用",
      cards: [
        { title: "成为“带电”的人", text: "无论在什么行业，寻找 3 个可以用 AI 提效的痛点，立刻上手。" },
        { title: "提升审美与决策", text: "AI 负责产出，你负责审核。你的“眼光”比你的“体力”更值钱。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：别做搬运工", text: "别只做 AI 的“搬运工”，要做 AI 的“驱动者”。" },
        { type: 'thought', title: "反思：新的竞争", text: "如果大家都有了“喷气背包”，那未来的竞争或许是看谁飞得更有创意，或者谁更知道目的地在哪里。" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "AI Won't Replace You",
      subtitle: "AI 不会取代你，它在等你拿起它",
      footer: "Serial No. 019 | AI黑话翻译局",
      visual: "replace"
    }
  ];

  // Helper component
  function UsersIcon({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
  }

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#0f1115] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for Replacement (Gray/Cyan) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-800/40 via-[#0f1115] to-[#0f1115]"></div>
      
      {/* Gear Silhouette Background */}
      <div className="absolute right-[-10%] top-[-10%] w-[80%] h-[80%] opacity-5 animate-[spin_60s_linear_infinite]">
         <Cog size={400} />
      </div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gray-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-cyan-600 text-white shadow-cyan-600/30">
            <Tag size={10} className="text-white" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label - Hiding No. on cover pages */}
        <div className={`flex justify-between items-center text-[10px] text-gray-500 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 019</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-cyan-500' : 'w-1 bg-gray-700'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = ({isWide = false}) => (
    <div className="relative z-10 flex items-center justify-center h-48 w-full">
        {isWide ? (
            // Wide Mode Visuals: Feather vs Stylus
            <div className="flex items-center justify-center gap-20 scale-125">
                <div className="relative flex flex-col items-center opacity-50 group">
                    <Feather size={64} className="text-gray-400" strokeWidth={1} />
                    <div className="mt-4 w-12 h-1 bg-gray-600 rounded-full"></div>
                </div>
                
                <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

                <div className="relative flex flex-col items-center">
                    <PenTool size={64} className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" strokeWidth={1.5} />
                    <div className="absolute top-0 right-0 animate-pulse"><Sparkles size={20} className="text-white" /></div>
                    <div className="mt-4 w-12 h-1 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                </div>
            </div>
        ) : (
            // Portrait Mode Visuals: Climbing vs Flying
            <div className="relative w-full h-full flex items-center justify-center">
                {/* The Mountain */}
                <Mountain size={140} className="text-gray-800 absolute bottom-0" strokeWidth={1} />
                
                {/* The Manual Climber (Small, Left) */}
                <div className="absolute bottom-4 left-10 text-gray-500 transform -rotate-12 opacity-60">
                    <User size={32} />
                </div>

                {/* The Jetpack Flyer (Higher, Right, Glowing) */}
                <div className="absolute top-0 right-10 flex flex-col items-center animate-bounce duration-[3000ms]">
                    <div className="relative">
                        <UserCog size={48} className="text-white relative z-10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-cyan-500/20 blur-xl rounded-full"></div>
                        {/* Jetpack Flames */}
                        <div className="absolute bottom-0 left-1/4 w-1 h-6 bg-cyan-400 blur-sm"></div>
                        <div className="absolute bottom-0 right-1/4 w-1 h-6 bg-cyan-400 blur-sm"></div>
                    </div>
                    <div className="mt-2 text-[10px] font-mono text-cyan-400 tracking-widest">AI POWERED</div>
                </div>
            </div>
        )}
    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-10 group w-full h-48">
              {renderVisuals({isWide: false})}
            </div>

            <h1 className="text-5xl font-bold mb-6 tracking-tighter leading-tight text-white">
              AI Won't<br/>
              <span className="text-gray-500 line-through decoration-red-500 decoration-2 decoration-wavy">Replace You</span>
            </h1>
            
            <p className="text-lg text-cyan-100 font-light tracking-widest border-t border-b border-cyan-900/50 py-3 px-2 bg-cyan-900/10">
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
          <div className="flex-1 flex flex-col items-center justify-center h-full pt-6">
             {/* Visuals centered */}
             <div className="mb-12 scale-110">
                {renderVisuals({isWide: true})}
             </div>

             {/* Text below visuals */}
             <div className="text-center z-20">
                <div className="flex items-center justify-center gap-2 mb-4 opacity-60">
                   <Fingerprint size={14} className="text-cyan-500"/>
                   <span className="text-sm text-cyan-500 font-mono tracking-[0.2em]">SERIAL NO. 019</span>
                </div>
                
                <h1 className="text-6xl font-bold text-white tracking-tighter mb-4 leading-none">
                  AI 不会取代你
                </h1>
                
                <div className="inline-block border-b-2 border-cyan-500 pb-2">
                  <span className="text-3xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-white to-cyan-400">
                    它在等你拿起它
                  </span>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-cyan-500 mb-8 border-l-4 border-cyan-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Golden Rule</div>
                 <div className="text-2xl font-bold text-white mb-1 leading-tight italic">"{slide.title}"</div>
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-gray-500 font-mono uppercase border-b border-gray-800 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-gray-300 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-cyan-500 mb-8 border-l-4 border-cyan-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-gray-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-gray-400 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-gray-700"></div>
                </div>

                <div className="bg-cyan-900/10 border border-cyan-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-cyan-100">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-cyan-100/80 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-gray-800 pb-4">
               <h2 className="text-3xl font-bold text-cyan-500">{slide.header}</h2>
               <span className="text-sm text-gray-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-800/50 p-4 rounded-lg flex flex-col items-center text-center opacity-70 border border-gray-700">
                    <div className="mb-2 text-gray-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-gray-300">{slide.left.title}</div>
                    <div className="text-xs text-gray-500">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-cyan-500 font-bold">→</div>
                <div className="flex-1 bg-cyan-900/20 border border-cyan-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                    <div className="mb-2 text-cyan-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-cyan-100">{slide.right.title}</div>
                    <div className="text-xs text-cyan-500/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-cyan-500">
                <p className="text-base leading-7 text-gray-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-cyan-500 mb-10 border-l-4 border-cyan-500 pl-4">{slide.header}</h2>
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
                <h2 className="text-3xl font-bold text-cyan-500 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0a0c10] p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#0f1115] px-2 text-xs font-mono text-cyan-600 group-hover:text-cyan-400 transition-colors">
                               Action 0{idx + 1}
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
                 <h2 className="text-3xl font-bold text-cyan-500 mb-8 border-l-4 border-cyan-500 pl-4">{slide.header}</h2>
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
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-cyan-500">
                     END OF ARCHIVE 019
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
        <div className={`w-full bg-[#0f1115] shadow-2xl border-4 border-gray-800 relative transition-all duration-500 ${
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

export default Archive019;