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
  Binary, AudioWaveform, Languages, Ear
} from 'lucide-react';

const Archive017 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "NLP",
      subtitle: "自然语言处理，是让冷冰冰的机器“读懂”你的心。",
      footer: "Serial No. 017 | AI黑话翻译局",
      visual: "nlp"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Natural Language Processing",
      content: [
        { label: "中文语境", text: "自然语言处理。" },
        { label: "出处", text: "它是人工智能与语言学的交叉领域，历史可以追溯到 1950 年代的机器翻译尝试。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "研究如何让计算机理解、解释、生成和处理人类语言的技术。涵盖分词、语义分析、情感识别及机器翻译等。",
        icon: <Languages className="w-6 h-6 text-teal-400" />
      },
      bottom: {
        title: "说人话",
        text: "“跨物种翻译官”。人类说话靠直觉和情绪，机器只认数字。NLP 把人类充满隐喻、反讽的语言，翻译成机器能做的数学题。",
        icon: <Binary className="w-6 h-6 text-rose-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "听不懂话的洗碗机", desc: "无 NLP", icon: <AppWindow size={24} /> },
      right: { title: "懂行的前厅经理", desc: "有 NLP", icon: <UserCog size={24} /> },
      explanation: "没 NLP 的机器像洗碗机，你说“我饿”它只会嗡嗡响。有 NLP 的机器像前厅经理，你说“心情不好想吃暖的”，它能听出负面情绪（情感分析），理解温度需求（语义提取），并传达给大厨。它听懂了你的委屈。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "交互基石", text: "它是我们能跟 ChatGPT 聊天的前提，是人机沟通的桥梁。", icon: <MessageCircle className="text-teal-400" /> },
        { title: "数据挖掘", text: "全球 80% 的信息（文字/语音）是非结构化的，NLP 是开采这些数据的矿工。", icon: <Database className="text-rose-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么看",
      cards: [
        { title: "从规则到直觉", text: "以前的 NLP 靠死记硬背语法（规则派），现在的 NLP 靠感知概率和语感（神经网络派）。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：歧义性", text: "比如“方便的时候见个面”，AI 需要判断你是“真的有空”还是“在厕所方便”。" },
        { type: 'thought', title: "反思：语言的安全性", text: "如果机器能完美处理所有修辞和情感，那语言是否还具有隐秘的、专属于人类的安全性？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "NLP",
      subtitle: "打破人类与机器的沉默",
      footer: "Serial No. 017 | AI黑话翻译局",
      visual: "nlp"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#080c10] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for NLP (Rose/Teal Gradient split) */}
      <div className="absolute top-0 left-0 w-[50%] h-full bg-rose-950/20 blur-[100px]"></div>
      <div className="absolute top-0 right-0 w-[50%] h-full bg-teal-950/20 blur-[100px]"></div>
      
      {/* Grid Pattern */}
      <div className="absolute w-full h-full opacity-5" style={{ 
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-teal-500 text-[#080c10] shadow-teal-500/30">
            <Tag size={10} className="text-teal-950" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label - Hiding No. on cover pages */}
        <div className={`flex justify-between items-center text-[10px] text-gray-500 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 017</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-teal-500' : 'w-1 bg-gray-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-48 w-full">
        {/* Left: Chaotic Sound Wave (Human) */}
        <div className="absolute left-4 w-1/3 h-24 flex items-center justify-center opacity-80">
           <AudioWaveform size={64} className="text-rose-400 animate-pulse" />
           <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#080c10] to-transparent"></div>
        </div>

        {/* Center: The Processor/Filter */}
        <div className="relative z-20 flex items-center justify-center">
           <div className="w-16 h-16 border-2 border-teal-500/30 rounded-lg flex items-center justify-center backdrop-blur-sm bg-teal-900/10">
              <Ear size={32} className="text-white" />
           </div>
           {/* Flow arrows */}
           <div className="absolute left-[-40px] top-1/2 w-10 h-[1px] bg-gradient-to-r from-rose-500 to-teal-500"></div>
           <div className="absolute right-[-40px] top-1/2 w-10 h-[1px] bg-gradient-to-r from-teal-500 to-teal-200"></div>
        </div>

        {/* Right: Ordered Binary (Machine) */}
        <div className="absolute right-4 w-1/3 h-24 flex flex-col items-center justify-center gap-1 opacity-80 font-mono text-[10px] text-teal-400 leading-tight">
           <div className="animate-[pulse_2s_infinite]">01010101</div>
           <div className="animate-[pulse_2s_infinite_delay-75]">11001100</div>
           <div className="animate-[pulse_2s_infinite_delay-150]">00110011</div>
           <div className="animate-[pulse_2s_infinite_delay-300]">10101010</div>
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#080c10] to-transparent"></div>
        </div>
    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-10 group w-full">
              {renderVisuals()}
            </div>

            <h1 className="text-6xl font-bold mb-6 tracking-tighter leading-tight text-white">
              NLP
            </h1>
            
            <p className="text-lg text-gray-300 font-light tracking-widest border-t border-b border-teal-900/50 py-3 px-6 bg-teal-900/10">
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
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6">
             {/* Left: Text */}
             <div className="flex-1 flex flex-col justify-center text-left z-20 pl-12 pr-4">
                <div className="flex items-center gap-2 mb-4 opacity-70">
                   <Fingerprint size={14} className="text-teal-400"/>
                   <span className="text-sm text-teal-400 font-mono tracking-[0.2em]">SERIAL NO. 017</span>
                </div>
                
                <div className="mb-6 drop-shadow-2xl">
                  {/* Huge Title */}
                  <h1 className="text-9xl font-bold text-white tracking-tighter mb-4 leading-none">
                    NLP
                  </h1>
                  
                  {/* Styled Subtitle: Gradient from Rose to Teal */}
                  <div className="inline-block border-l-4 border-teal-400 pl-4 py-3 pr-8 bg-gradient-to-r from-teal-900/30 to-transparent rounded-r-lg">
                    <span className="text-3xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-white to-teal-300">
                      {slide.subtitle}
                    </span>
                  </div>
                </div>
             </div>

             {/* Right: Visuals */}
             <div className="w-[40%] flex items-center justify-center relative pr-8">
                <div className="scale-125 relative">
                   {renderVisuals()}
                   {/* Extra Wide Decorations */}
                   <div className="absolute top-[-30px] left-[-30px] text-rose-400 opacity-40 animate-pulse rotate-[-12deg] font-serif italic text-2xl">Hello</div>
                   <div className="absolute bottom-[-20px] right-[-20px] text-teal-400 opacity-40 animate-bounce font-mono text-xl">0101</div>
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
                 <div className="text-xs text-rose-400 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-1 leading-tight">{slide.title}</div>
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-gray-400 font-mono uppercase border-b border-gray-800 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-gray-200 font-light">{item.text}</p>
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
                <div className="bg-teal-900/10 border border-teal-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-teal-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-teal-200/70 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-gray-800"></div>
                </div>

                <div className="bg-rose-900/10 border border-rose-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-rose-200">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-rose-100 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-gray-800 pb-4">
               <h2 className="text-3xl font-bold text-teal-400">{slide.header}</h2>
               <span className="text-sm text-gray-400">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center opacity-80 border border-gray-800">
                    <div className="mb-2 text-gray-500">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-gray-300">{slide.left.title}</div>
                    <div className="text-xs text-gray-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-teal-500 font-bold">→</div>
                <div className="flex-1 bg-teal-900/20 border border-teal-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(45,212,191,0.1)]">
                    <div className="mb-2 text-teal-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-teal-100">{slide.right.title}</div>
                    <div className="text-xs text-teal-400/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-teal-500">
                <p className="text-base leading-7 text-gray-300 text-justify">
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
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-rose-500"></div>
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
                <h2 className="text-3xl font-bold text-teal-400 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0a0a0a] p-6 rounded-2xl border border-gray-800 hover:border-teal-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#080c10] px-2 text-xs font-mono text-teal-600 group-hover:text-teal-400 transition-colors">
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
                 <h2 className="text-3xl font-bold text-teal-400 mb-8 border-l-4 border-teal-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-rose-900/10 border-rose-500/20' : 'bg-teal-900/10 border-teal-500/20'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-rose-400" /> : <Brain className="text-teal-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-rose-200' : 'text-teal-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-teal-500">
                     END OF ARCHIVE 017
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
        <div className={`w-full bg-[#080c10] shadow-2xl border-4 border-teal-900 relative transition-all duration-500 ${
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
        <div className="flex items-center gap-4 bg-teal-950 p-2 rounded-full shadow-lg border border-teal-900">
          <button onClick={prevSlide} className="p-3 hover:bg-teal-900 rounded-full text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <span className="text-teal-500 font-mono text-sm min-w-[3ch] text-center">
            {currentSlide + 1}/{slides.length}
          </span>
          <button onClick={nextSlide} className="p-3 hover:bg-teal-900 rounded-full text-white transition-colors">
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

export default Archive017;