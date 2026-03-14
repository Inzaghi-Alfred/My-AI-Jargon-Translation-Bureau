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
  MessageCircle, LayoutTemplate, Hourglass, Atom, FlaskConical, Dna
} from 'lucide-react';

const Archive011 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "GPT",
      subtitle: "它是聊天机器人，更是人类知识的“超级炼金术”。",
      footer: "Serial No. 011 | AI黑话翻译局",
      visual: "gpt"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Generative Pre-trained Transformer",
      content: [
        { label: "中文语境", text: "生成式预训练变换器。" },
        { label: "出处", text: "由 OpenAI 团队于 2018 年首次提出，并在 GPT-3 和 ChatGPT 发布后彻底引爆世界。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "一种基于 Transformer 架构的语言模型。采用“预训练+微调”范式，通过在海量数据上学习预测下一个词，获得理解和生成自然语言的能力。",
        icon: <Cpu className="w-6 h-6 text-violet-400" />
      },
      bottom: {
        title: "说人话",
        text: "“超级文字接龙机”。它在出生前读完了整个互联网（预训练），所以它能通过你给的前半句话，极其精准地“盲猜”出概率最高的后半句话。",
        icon: <MessageSquare className="w-6 h-6 text-amber-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "厨房新人", desc: "传统 AI", icon: <UserCog size={24} /> },
      right: { title: "肌肉记忆主厨", desc: "GPT", icon: <ChefHat size={24} /> },
      explanation: "传统 AI 像刚进厨房的新人，得一步步教。GPT 像做过一亿次饭的顶级大厨。不用看菜谱，“怎么炒好吃”已成生理本能（预训练）。只要你说“做个辣的”，它体内的“烹饪概率”自动激活，即兴发挥。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "通用性", text: "它证明了只靠“预测下一个词”这种简单逻辑，就能涌现出极强的智能。", icon: <GlobeIcon className="text-violet-400" /> },
        { title: "生成式爆发", text: "它让 AI 从“分类/判断”进化到了“创造/对话”。", icon: <Sparkles className="text-amber-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么用",
      cards: [
        { title: "理解弱点", text: "GPT 是概率机，它不具备真正的逻辑推理，只是在找“最像人说的话”。" },
        { title: "版本选择", text: "区分 3.5、4o、o1 等版本，越高的版本意味着它的“接龙”逻辑越严密。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：事实性错误", text: "因为它只是在预测下一个词，所以它会表现得“一本正经地胡说八道”。" },
        { type: 'thought', title: "反思：才华的定义", text: "如果所有的创作都成了概率的博弈，那么人类那份“意料之外”的灵感，是否还会被视为才华？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "GPT",
      subtitle: "人类知识的超级炼金术",
      footer: "Serial No. 011 | AI黑话翻译局",
      visual: "gpt"
    }
  ];

  // Helper icon component
  function GlobeIcon({className}: {className?: string}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
  }

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#0f0720] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for GPT (Violet/Gold for Magic/Alchemy) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/40 via-[#0f0720] to-[#0f0720]"></div>
      
      {/* Floating Particles/Stars */}
      <div className="absolute w-full h-full opacity-20" style={{ 
        backgroundImage: 'radial-gradient(white 1px, transparent 1px)', 
        backgroundSize: '50px 50px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-amber-500 text-[#0f0720] shadow-amber-500/30">
            <Tag size={10} className="text-amber-900" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label - Hiding No. on cover pages */}
        <div className={`flex justify-between items-center text-[10px] text-violet-300 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 011</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-amber-500' : 'w-1 bg-violet-900'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-48 w-full">
        {/* Hourglass Container */}
        <div className="relative">
           <Hourglass size={100} className="text-violet-300 opacity-20" strokeWidth={0.5} />
           
           {/* Top: Chaotic Data (White/Grey noise) */}
           <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-12 overflow-hidden flex flex-wrap justify-center content-center gap-1 opacity-60">
              <span className="text-[8px] animate-pulse text-gray-400">01</span>
              <span className="text-[8px] animate-bounce text-gray-300">raw</span>
              <span className="text-[8px] animate-pulse text-gray-500">data</span>
              <span className="text-[8px] text-gray-400">#@!</span>
              <span className="text-[8px] animate-bounce text-gray-300">txt</span>
           </div>

           {/* Middle: Filtering/Alchemy (Glowing Core) */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-400 blur-md animate-pulse rounded-full"></div>

           {/* Bottom: Ordered Wisdom (Golden text) */}
           <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-12 flex flex-col items-center justify-end gap-0.5">
              <div className="w-12 h-0.5 bg-amber-500 shadow-[0_0_5px_rgba(245,158,11,0.8)] animate-[pulse_2s_infinite]"></div>
              <div className="w-10 h-0.5 bg-amber-500/80 shadow-[0_0_5px_rgba(245,158,11,0.6)]"></div>
              <div className="w-8 h-0.5 bg-amber-500/60"></div>
              <Sparkles size={12} className="text-amber-300 absolute -bottom-2 -right-2 animate-spin-slow" />
           </div>
        </div>

        {/* Alchemy Circles */}
        <div className="absolute inset-0 border border-violet-500/10 rounded-full scale-150 animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute inset-0 border border-amber-500/10 rounded-full scale-125 animate-[spin_15s_linear_infinite_reverse]"></div>
    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-8 group w-full">
              {renderVisuals()}
            </div>

            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-violet-200 to-amber-500 mb-6 tracking-tighter">
              {slide.title}
            </h1>
            <p className="text-lg text-violet-200/80 font-light tracking-widest border-t border-b border-violet-500/30 py-3 px-6 bg-violet-900/20">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-violet-500 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover':
        return (
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6">
             {/* Left: Visuals (Requested: Hourglass Core on Left) */}
             <div className="w-[40%] flex items-center justify-center relative pl-8">
                <div className="scale-150 relative">
                   {renderVisuals()}
                   {/* Extra Wide Decorations */}
                   <div className="absolute top-[-30px] left-[-30px] text-amber-200 opacity-30 animate-pulse"><FlaskConical size={24} /></div>
                   <div className="absolute bottom-[-20px] right-[-40px] text-violet-400 opacity-30 animate-bounce"><Atom size={24} /></div>
                </div>
             </div>

             {/* Right: Text (Requested: Title on Right) */}
             <div className="flex-1 flex flex-col justify-center text-left z-20 pl-12 pr-4">
                <div className="flex items-center gap-2 mb-4 opacity-70">
                   <Fingerprint size={14} className="text-amber-400"/>
                   <span className="text-sm text-amber-400 font-mono tracking-[0.2em]">SERIAL NO. 011</span>
                </div>
                
                <div className="mb-6 drop-shadow-lg">
                  {/* Huge Title */}
                  <h1 className="text-8xl font-bold text-white tracking-tighter mb-6 leading-none">
                    {slide.title}
                  </h1>
                  
                  {/* Styled Subtitle with Vertical Bar and Background */}
                  <div className="inline-block border-l-4 border-amber-400 pl-4 py-2 pr-6 bg-gradient-to-r from-violet-900/60 to-transparent rounded-r-lg">
                    <span className="text-3xl text-amber-100 font-light tracking-wide block opacity-95">
                      {slide.subtitle}
                    </span>
                  </div>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-violet-400 mb-8 border-l-4 border-violet-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-amber-400 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-1 leading-tight">{slide.title}</div>
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-violet-300 font-mono uppercase border-b border-violet-900 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-violet-100 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-violet-400 mb-8 border-l-4 border-violet-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-violet-900/20 border border-violet-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-violet-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-violet-300 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-violet-800"></div>
                </div>

                <div className="bg-amber-900/10 border border-amber-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-amber-100">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-violet-100 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-violet-900 pb-4">
               <h2 className="text-3xl font-bold text-violet-400">{slide.header}</h2>
               <span className="text-sm text-violet-300">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-violet-950 p-4 rounded-lg flex flex-col items-center text-center opacity-60 border border-violet-900">
                    <div className="mb-2 text-violet-500">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-violet-300">{slide.left.title}</div>
                    <div className="text-xs text-violet-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-amber-400 font-bold">→</div>
                <div className="flex-1 bg-amber-900/20 border border-amber-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                    <div className="mb-2 text-amber-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-amber-100">{slide.right.title}</div>
                    <div className="text-xs text-amber-500/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-violet-500">
                <p className="text-base leading-7 text-violet-100 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-violet-400 mb-10 border-l-4 border-violet-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-violet-900"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-amber-500"></div>
                          <div className="flex items-center gap-2 mb-2">
                             {item.icon}
                             <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          </div>
                          <p className="text-violet-200 leading-relaxed">{item.text}</p>
                      </div>
                  ))}
               </div>
            </div>
        );

      case 'cards':
         return (
             <div className="flex-1 flex flex-col pt-4 justify-center">
                <h2 className="text-3xl font-bold text-violet-400 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#1e1b2e] p-6 rounded-2xl border border-violet-900 hover:border-amber-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#0f0720] px-2 text-xs font-mono text-violet-500 group-hover:text-amber-400 transition-colors">
                               Step 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-violet-100 mb-1">{card.title}</h3>
                           <p className="text-violet-300 text-sm">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-violet-400 mb-8 border-l-4 border-violet-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-900/20 border-red-500/20' : 'bg-amber-900/20 border-amber-500/20'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Brain className="text-amber-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-amber-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-violet-200 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-violet-500">
                     END OF ARCHIVE 011
                 </div>
              </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#05030a] flex items-center justify-center p-4 font-sans">
      <div className={`flex flex-col items-center gap-6 w-full ${isWide ? 'max-w-4xl' : 'max-w-md'} transition-all duration-500`}>
        {/* Main Frame */}
        <div className={`w-full bg-[#0f0720] shadow-2xl border-4 border-violet-900 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' 
             : 'aspect-[3/4] rounded-[3rem] p-3'
        }`}>
           <div className={`w-full h-full overflow-hidden bg-[#0f0720] ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
              <CardWrapper index={currentSlide} badge={slides[currentSlide].badge} isWideMode={isWide}>
                {renderSlideContent(slides[currentSlide])}
              </CardWrapper>
           </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 bg-violet-950 p-2 rounded-full shadow-lg border border-violet-900">
          <button onClick={prevSlide} className="p-3 hover:bg-violet-900 rounded-full text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <span className="text-violet-400 font-mono text-sm min-w-[3ch] text-center">
            {currentSlide + 1}/{slides.length}
          </span>
          <button onClick={nextSlide} className="p-3 hover:bg-violet-900 rounded-full text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-violet-700 text-xs text-center">
          {isWide ? '宽屏封面模式 (2.35:1)' : '图文卡片模式 (3:4)'}<br/>
          推荐使用系统截图工具保存图片
        </div>
      </div>
    </div>
  );
};

export default Archive011;