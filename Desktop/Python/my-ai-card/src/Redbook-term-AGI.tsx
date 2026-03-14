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
  ShieldCheck, Globe, Eye
} from 'lucide-react';

const Archive013 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "AGI",
      subtitle: "通用人工智能，是人类最后的发明吗？",
      footer: "Serial No. 013 | AI黑话翻译局",
      visual: "agi"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Artificial General Intelligence",
      content: [
        { label: "中文语境", text: "通用人工智能（强人工智能）。" },
        { label: "出处", text: "为了区别于只能下棋或识别图片的“弱 AI”，研究者在上世纪 90 年代提出了 AGI，指代像人一样全能的智能。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "一种能够表现出与人类同等或超越人类水平的智力，能够学习、理解并在任何认知领域执行任务的机器。",
        icon: <Brain className="w-6 h-6 text-white" />
      },
      bottom: {
        title: "说人话",
        text: "“数字上帝”或“全才机器人”。只要给它时间，它能学会人类所有技能、甚至产生自我意识。它不再是工具，而是生命体。",
        icon: <Infinity className="w-6 h-6 text-purple-300" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "万能料理机", desc: "LLM (弱AI)", icon: <Bot size={24} /> },
      right: { title: "有灵魂的食神", desc: "AGI (强AI)", icon: <ChefHat size={24} /> },
      explanation: "LLM 是顶级料理机，给指令能做菜，但不懂为什么吃饭。AGI 是食神本人。他会根据心情拒做，会自创菜系，甚至发明全新的烹饪哲学。他不只是在使用技能，他在定义生存的方式。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "奇点降临", text: "它是文明的分水岭。一旦实现，AI 就可以自我迭代，人类科技将呈爆炸式跃迁。", icon: <Atom className="text-white" /> },
        { title: "范式毁灭", text: "所有的职业、社会契约、生存逻辑都将重写。", icon: <AlertTriangle className="text-purple-300" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "我们应该怎么看",
      cards: [
        { title: "理性乐观", text: "把它看作人类能力的无限延伸，解决疾病、贫困和宇宙探索。" },
        { title: "关注安全", text: "关注“对齐 (Alignment)”，确保它变强后不会伤害人类。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：路途漫漫", text: "目前我们还处于“弱 AI”通往“AGI”的路上，现在的 GPT 只是瞥见了 AGI 的一角。" },
        { type: 'thought', title: "反思：人之为人", text: "如果机器能做一切，那人类“之所以为人”的凭证，是否只剩下这具会流泪的碳基躯壳？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "AGI",
      subtitle: "通往上帝之路，还是人类最后的发明？",
      footer: "Serial No. 013 | AI黑话翻译局",
      visual: "agi"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Helper for P8 Light Theme
  const isLightTheme = isWide; 

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl transition-colors duration-500
      ${isWideMode ? 'bg-[#f0f2f5] text-slate-800' : 'bg-black text-white'}
    `}>
      
      {/* Background Effects */}
      {!isWideMode ? (
        // Dark Mode Background (P1-P7)
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-slate-900 via-black to-black"></div>
          <div className="absolute top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-900/10 blur-[100px] rounded-full animate-pulse"></div>
        </>
      ) : (
        // Light Mode Background (P8)
        <>
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-slate-100 to-slate-200"></div>
           <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[80%] bg-gradient-to-b from-blue-50/50 to-purple-50/50 blur-[80px] rounded-full"></div>
        </>
      )}
      
      {/* Decoration Lines */}
      <div className={`absolute top-6 w-[80%] h-[1px] bg-gradient-to-r left-1/2 -translate-x-1/2 ${isWideMode ? 'from-transparent via-slate-300 to-transparent' : 'from-transparent via-white/20 to-transparent'}`}></div>
      <div className={`absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r left-1/2 -translate-x-1/2 ${isWideMode ? 'from-transparent via-slate-300 to-transparent' : 'from-transparent via-purple-500/30 to-transparent'}`}></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className={`flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg 
            ${isWideMode ? 'bg-slate-800 text-white shadow-slate-400/20' : 'bg-white text-black shadow-white/20'}`}>
            <Tag size={10} className={isWideMode ? 'text-slate-300' : 'text-slate-600'} fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label */}
        <div className={`flex justify-between items-center text-[10px] tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12 text-slate-400' : 'mb-6 text-slate-500'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 013</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? (isWideMode ? 'w-4 bg-slate-800' : 'w-4 bg-white') : (isWideMode ? 'w-1 bg-slate-300' : 'w-1 bg-slate-800')}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = ({isLight = false}) => (
    <div className="relative z-10 flex items-center justify-center h-48 w-full">
        {/* The Perfect Circle */}
        <div className={`relative rounded-full border-[1px] flex items-center justify-center overflow-hidden
            ${isLight ? 'w-48 h-48 border-slate-300 shadow-[0_0_40px_rgba(0,0,0,0.05)] bg-white' : 'w-48 h-48 border-white/80 shadow-[0_0_30px_rgba(255,255,255,0.2)]'}
        `}>
            {/* Inner Chaos / Nebula */}
            <div className={`absolute inset-2 rounded-full overflow-hidden opacity-80 ${isLight ? 'bg-slate-50' : 'bg-black'}`}>
               <div className={`absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-[spin_20s_linear_infinite] opacity-60
                  ${isLight 
                    ? 'bg-[conic-gradient(from_90deg_at_50%_50%,#e2e8f0_0%,#f8fafc_50%,#cbd5e1_100%)] blur-xl' 
                    : 'bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#581c87_50%,#000_100%)] blur-xl'}
               `}></div>
               
               {/* Fetus / Baby Silhouette */}
               <div className="absolute inset-0 flex items-center justify-center opacity-80 animate-pulse">
                  <Baby size={64} className={isLight ? 'text-slate-300' : 'text-purple-200'} strokeWidth={0.5} />
               </div>
            </div>

            {/* Orbiting particles */}
            <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
               <div className={`absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full ${isLight ? 'bg-slate-400' : 'bg-white'} -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_currentColor]`}></div>
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
              {renderVisuals({isLight: false})}
            </div>

            <h1 className="text-6xl font-bold mb-6 tracking-tighter leading-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              {slide.title}
            </h1>
            
            {/* Adjusted font size here from text-lg to text-sm */}
            <p className="text-sm text-slate-300 font-light tracking-widest border-t border-b border-slate-700 py-3 px-6">
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
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6">
             {/* Left: Visuals */}
             <div className="w-[40%] flex items-center justify-center relative pl-8">
                <div className="scale-125 relative">
                   {renderVisuals({isLight: true})}
                   {/* Minimal Decorations for Light Mode */}
                   <div className="absolute top-[-20px] left-[-30px] text-slate-300 opacity-60 animate-pulse"><Infinity size={24} /></div>
                   <div className="absolute bottom-[-10px] right-[-20px] text-slate-400 opacity-60 animate-bounce"><Atom size={24} /></div>
                </div>
             </div>

             {/* Right: Text */}
             <div className="flex-1 flex flex-col justify-center text-left z-20 pl-12 pr-4">
                <div className="flex items-center gap-2 mb-4 opacity-60">
                   <Fingerprint size={14} className="text-slate-500"/>
                   <span className="text-sm text-slate-500 font-mono tracking-[0.2em]">SERIAL NO. 013</span>
                </div>
                
                <div className="mb-6">
                  {/* Huge Title - Clean Black */}
                  <h1 className="text-9xl font-bold text-slate-900 tracking-tighter mb-4 leading-none">
                    {slide.title}
                  </h1>
                  
                  {/* Styled Subtitle - High Grade Grey Gradient */}
                  <div className="inline-block border-l-4 border-slate-800 pl-4 py-3 pr-8 bg-gradient-to-r from-slate-200/50 to-transparent rounded-r-lg">
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-3xl text-slate-800 font-light tracking-wide">
                        通往上帝之路
                      </span>
                      <span className="text-xl text-slate-500 font-light tracking-wider">
                        还是人类最后的发明？
                      </span>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-white pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-1 leading-tight">{slide.title}</div>
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-purple-300 font-mono uppercase border-b border-purple-900 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-slate-200 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-white pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-white">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-slate-300 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-slate-800"></div>
                </div>

                <div className="bg-purple-900/10 border border-purple-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-purple-200">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-purple-100 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-slate-700 pb-4">
               <h2 className="text-3xl font-bold text-white">{slide.header}</h2>
               <span className="text-sm text-slate-400">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-slate-900 p-4 rounded-lg flex flex-col items-center text-center opacity-80 border border-slate-800">
                    <div className="mb-2 text-slate-500">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-slate-300">{slide.left.title}</div>
                    <div className="text-xs text-slate-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-white font-bold">→</div>
                <div className="flex-1 bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                    <div className="mb-2 text-purple-300">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-purple-100">{slide.right.title}</div>
                    <div className="text-xs text-purple-400">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-white">
                <p className="text-base leading-7 text-slate-200 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-white mb-10 border-l-4 border-white pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-white"></div>
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
                <h2 className="text-3xl font-bold text-white mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0a0a0a] p-6 rounded-2xl border border-slate-800 hover:border-white transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-black px-2 text-xs font-mono text-slate-500 group-hover:text-white transition-colors">
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
                 <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-white pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-slate-900 border-slate-700' : 'bg-purple-900/10 border-purple-500/20'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-slate-400" /> : <Brain className="text-purple-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-slate-200' : 'text-purple-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-white">
                     END OF ARCHIVE 013
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
        <div className={`w-full bg-black shadow-2xl border-4 border-slate-800 relative transition-all duration-500 ${
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

export default Archive013;