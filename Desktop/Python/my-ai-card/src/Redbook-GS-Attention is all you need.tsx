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
  Aperture, Disc, Sun, Radiation, Target, Focus, MousePointer2
} from 'lucide-react';

const Archive016 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "思辨",
      title: "Attention Is All You Need",
      subtitle: "智能的本质，其实就是“划重点”的艺术。",
      footer: "Serial No. 016 | AI黑话翻译局",
      visual: "attention"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Attention Is All You Need",
      content: [
        { label: "提出者", text: "Google Brain 团队（Ashish Vaswani 等 8 位作者）。" },
        { label: "背景", text: "2017 年划时代的论文标题。它宣告了 Transformer 架构的诞生，彻底抛弃了过去的复杂逻辑，只靠“注意力”就开启了大模型时代。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "指自注意力机制（Self-Attention）。它让机器能够同时观察所有数据，并根据上下文自动判断哪些信息权重更高。",
        icon: <Target className="w-6 h-6 text-red-500" />
      },
      bottom: {
        title: "说人话",
        text: "“拒绝平均用力”。AI 学会了“选择性无视”。它一眼扫过去，就知道谁是主角，谁是背景板。这种对重点的掌控，就是智能。",
        icon: <Eye className="w-6 h-6 text-white" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "盲目熬汤", desc: "旧 AI", icon: <Soup size={24} /> },
      right: { title: "精准调味", desc: "Attention", icon: <FlaskConical size={24} /> },
      explanation: "旧 AI 像笨厨师，50 种食材一起煮，平均用力。新 AI (Attention) 像顶级调味师，他盯着整锅汤，但在出锅那一刻，把 90% 的注意力都放在了那“最后一克盐”上。天才就是知道在什么时候、把火力集中在哪一点上。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "效率革命", text: "告诉我们不需要复杂的规则，只要算力够强、注意力分配够准，机器就能产生理解。", icon: <Zap className="text-red-500" /> },
        { title: "认知迁移", text: "这不仅是算法，也是人生的底层逻辑。", icon: <Brain className="text-white" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么用",
      cards: [
        { title: "个人精力分配", text: "在信息爆炸时代，你的“注意力”就是你最贵的币。别被垃圾信息稀释。" },
        { title: "深度学习", text: "像 Transformer 一样，一次只为一个核心目标分配最高权重。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：注意力黑洞", text: "警惕！AI 正在用它的算法精准收割你的注意力。" },
        { type: 'thought', title: "反思：发呆的自由", text: "如果智能只需要“注意力”，那人类那些漫无目的的“发呆”和“走神”，是否才是机器永远无法理解的自由？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "Attention Is All You Need",
      subtitle: "重新定义智能",
      footer: "Serial No. 016 | AI黑话翻译局",
      visual: "attention"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#050000] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for Attention (Red Spotlight / Dark Void) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[80%] bg-gradient-to-b from-red-900/20 via-transparent to-transparent"></div>
      
      {/* Spotlight Cone */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[800px] bg-gradient-to-b from-red-500/10 to-transparent blur-3xl pointer-events-none transform rotate-0"></div>

      {/* Grid Pattern (The "Data" Background) */}
      <div className="absolute w-full h-full opacity-10" style={{ 
        backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', 
        backgroundSize: '20px 20px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gray-500/30 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-red-600 text-white shadow-red-600/20">
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
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 016</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-red-500' : 'w-1 bg-gray-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-48 w-full">
        {/* The Matrix of Data Points */}
        <div className="absolute inset-0 grid grid-cols-7 grid-rows-5 gap-4 opacity-30 place-items-center">
           {[...Array(35)].map((_, i) => (
             <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
           ))}
        </div>

        {/* The Spotlight / Focus */}
        <div className="relative z-20 flex flex-col items-center">
           {/* The Beam */}
           <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-40 border-l-[40px] border-r-[40px] border-b-[150px] border-l-transparent border-r-transparent border-b-red-500/20 blur-md"></div>
           
           {/* The Focused Object */}
           <div className="w-16 h-16 bg-red-600 rounded-full shadow-[0_0_50px_rgba(220,38,38,0.8)] flex items-center justify-center animate-pulse relative">
              <Focus size={32} className="text-white" strokeWidth={1.5} />
              
              {/* Connecting Attention Lines */}
              <div className="absolute inset-0 w-[300%] h-[300%] left-[-100%] top-[-100%] animate-[spin_10s_linear_infinite]">
                 <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent rotate-0"></div>
                 <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent rotate-45"></div>
                 <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent rotate-90"></div>
                 <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent rotate-135"></div>
              </div>
           </div>
           
           {/* Text Label */}
           <div className="mt-4 bg-red-900/50 border border-red-500/30 px-3 py-1 rounded text-[10px] text-red-200 font-mono tracking-widest">
              WEIGHT: 0.99
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
              {renderVisuals()}
            </div>

            <h1 className="text-5xl font-bold mb-6 tracking-tighter leading-tight text-white">
              Attention<br/>
              <span className="text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">Is All You Need</span>
            </h1>
            
            <p className="text-lg text-gray-400 font-light tracking-widest border-t border-b border-gray-800 py-3 px-6 bg-gray-900/30">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-red-700/80 font-mono flex items-center gap-2">
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
                   {renderVisuals()}
                   {/* Extra Wide Decorations */}
                   <div className="absolute top-[-40px] left-[-30px] text-red-800 opacity-40 animate-pulse"><Target size={30} /></div>
                   <div className="absolute bottom-[-30px] right-[-40px] text-white opacity-20 animate-bounce"><MousePointer2 size={30} /></div>
                </div>
             </div>

             {/* Right: Text */}
             <div className="flex-1 flex flex-col justify-center text-left z-20 pl-4 pr-4">
                <div className="flex items-center gap-2 mb-4 opacity-60">
                   <Fingerprint size={14} className="text-red-500"/>
                   <span className="text-sm text-red-500 font-mono tracking-[0.2em]">SERIAL NO. 016</span>
                </div>
                
                <div className="mb-6 drop-shadow-2xl">
                  {/* Huge Title */}
                  <h1 className="text-7xl font-bold text-white tracking-tighter mb-4 leading-none">
                    Attention<br/>
                    <span className="text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]">Is All You Need</span>
                  </h1>
                  
                  {/* Styled Subtitle */}
                  <div className="inline-block border-l-4 border-red-500 pl-4 py-3 pr-8 bg-gradient-to-r from-red-900/30 to-transparent rounded-r-lg">
                    {/* Single line, gradient text */}
                    <span className="text-3xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-red-200 to-red-500">
                      重新定义智能
                    </span>
                  </div>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-red-500 mb-8 border-l-4 border-red-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-red-400 mb-2 uppercase tracking-wider">Golden Sentence</div>
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
             <h2 className="text-3xl font-bold text-red-500 mb-8 border-l-4 border-red-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-red-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-red-200/70 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-gray-800"></div>
                </div>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-white">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-gray-300 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-gray-800 pb-4">
               <h2 className="text-3xl font-bold text-red-500">{slide.header}</h2>
               <span className="text-sm text-gray-400">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center opacity-80 border border-gray-800">
                    <div className="mb-2 text-gray-500">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-gray-300">{slide.left.title}</div>
                    <div className="text-xs text-gray-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-red-500 font-bold">→</div>
                <div className="flex-1 bg-red-900/20 border border-red-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(220,38,38,0.1)]">
                    <div className="mb-2 text-red-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-red-100">{slide.right.title}</div>
                    <div className="text-xs text-red-400/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-red-500">
                <p className="text-base leading-7 text-gray-300 text-justify">
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
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-red-500"></div>
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
                <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0a0a0a] p-6 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#050000] px-2 text-xs font-mono text-red-600 group-hover:text-red-400 transition-colors">
                               Focus 0{idx + 1}
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
                 <h2 className="text-3xl font-bold text-red-500 mb-8 border-l-4 border-red-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-900/10 border-red-500/20' : 'bg-gray-900/30 border-gray-700'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Brain className="text-gray-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-gray-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-red-500">
                     END OF ARCHIVE 016
                 </div>
              </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#050000] flex items-center justify-center p-4 font-sans">
      <div className={`flex flex-col items-center gap-6 w-full ${isWide ? 'max-w-4xl' : 'max-w-md'} transition-all duration-500`}>
        {/* Main Frame */}
        <div className={`w-full bg-[#050000] shadow-2xl border-4 border-gray-900 relative transition-all duration-500 ${
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
          <span className="text-red-500 font-mono text-sm min-w-[3ch] text-center">
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

export default Archive016;