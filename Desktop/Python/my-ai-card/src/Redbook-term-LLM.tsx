import React, { useState } from 'react';
import { 
  Brain, Cpu, ChefHat, Zap, AlertTriangle, Layers, ChevronRight, ChevronLeft, 
  Fingerprint, Search, Tag, Keyboard, Sparkles, Rocket, MessageSquare, 
  Code2, Minimize2, Database, Soup, Heart, Gauge, Quote, Library, 
  BookOpen, FileText, RefreshCw, ScrollText, Link, Bot, Utensils, 
  AppWindow, Box, ListMusic
} from 'lucide-react';

const Archive005 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "LLM",
      subtitle: "是文字接龙，更是人类文明的“终极烹饪机”。",
      footer: "Serial No. 005 | AI黑话翻译局",
      visual: "llm"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Large Language Model",
      content: [
        { label: "中文语境", text: "大语言模型。" },
        { label: "出处", text: "起源于 Google 的 Transformer 架构，随 OpenAI 的 GPT 系列爆火。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "基于深度学习的海量参数神经网络。通过超大规模语料训练，获得了模仿人类语言并进行逻辑推理的能力。",
        icon: <Cpu className="w-6 h-6 text-violet-300" />
      },
      bottom: {
        title: "说人话",
        text: "“全能文字大脑”。它读过了几乎所有书，所以它能预测下一句话该说什么，也能理解你没说出口的潜台词。",
        icon: <Brain className="w-6 h-6 text-orange-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "单功能家电", desc: "传统软件", icon: <AppWindow size={24} /> },
      right: { title: "烹饪机器人", desc: "LLM", icon: <Bot size={24} /> },
      explanation: "传统软件像空气炸锅，功能单一，煮粥会报错。LLM 是读过全球菜谱的烹饪机器人。不用教它怎么切炒，只要把食材给它说“想吃清淡点”，它自动变蒸锅；说“想吃脆的”，瞬间变烤箱。一机搞定所有活。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "打破孤岛", text: "第一次有一个工具能同时写诗、改代码、做翻译、制定计划。", icon: <Layers className="text-violet-300" /> },
        { title: "涌现", text: "规模大到一定程度，它突然展现出了本不属于“接龙”的推理能力。", icon: <Sparkles className="text-orange-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么用",
      cards: [
        { title: "不再学说明书", text: "别管那些复杂的按钮（菜单），直接跟它对话。" },
        { title: "定义场景", text: "把原本需要好几个软件跳转的流程，交给它一站式解决。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "警惕：幻听", text: "机器人偶尔会“幻听”，把盐当成糖（产生幻觉）。" },
        { type: 'thought', title: "反思：审美觉醒", text: "当“一机在手”搞定所有烹饪，我们剩下的唯一价值，就是决定“今晚吃什么”的品味和审美。" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 新增类型：公众号封面
      badge: "公众号封面",
      title: "LLM",
      subtitle: "是文字接龙，更是人类文明的“终极烹饪机”。",
      footer: "Serial No. 005 | AI黑话翻译局",
      visual: "llm"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // 判断当前是否为宽屏模式
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#050505] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for LLM (Orange/Violet for Creativity/Intelligence) */}
      <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[50%] bg-orange-900/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[50%] bg-violet-900/20 blur-[100px] rounded-full"></div>
      
      {/* Hexagon Pattern */}
      <div className="absolute w-full h-full opacity-5" style={{ 
        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
        backgroundSize: '24px 24px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-orange-500 text-[#050505] shadow-orange-500/30">
            <Tag size={10} className="text-orange-950" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label */}
        <div className={`flex justify-between items-center text-[10px] text-gray-500 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span>No. 005</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-orange-500' : 'w-1 bg-gray-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  // 提取视觉组件，方便复用
  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center">
       <div className="relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
          <Cpu size={64} className="text-orange-400" />
          {/* Glowing Core */}
          <div className="absolute inset-0 bg-orange-400/20 blur-xl rounded-2xl animate-pulse"></div>
       </div>

       {/* Floating Ingredients/Text being sucked in */}
       <div className="absolute -top-8 -left-4 text-violet-300 animate-bounce delay-100 opacity-60"><FileText size={20} /></div>
       <div className="absolute top-0 -right-8 text-orange-300 animate-bounce delay-200 opacity-60"><Code2 size={20} /></div>
       <div className="absolute -bottom-6 left-8 text-white animate-bounce delay-300 opacity-40"><ListMusic size={16} /></div>
       <div className="absolute bottom-4 -right-4 text-violet-400 animate-pulse delay-150 opacity-50"><Box size={18} /></div>
    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-10 group">
              {/* LLM Visual Effect: Core sucking in text */}
              <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-violet-500/10 blur-2xl rounded-full animate-pulse delay-75"></div>
              {renderVisuals()}
            </div>

            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-orange-100 to-violet-200 mb-6 tracking-tighter">
              {slide.title}
            </h1>
            <p className="text-lg text-orange-200/80 font-light tracking-widest border-t border-b border-orange-900/50 py-3 px-6 bg-orange-900/10">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-gray-600 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover': // 2.35:1 布局
        return (
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6">
             {/* Left: Text Content */}
             <div className="flex-1 flex flex-col justify-center text-left z-20 pr-8">
                <div className="flex items-center gap-2 mb-4 opacity-70">
                   <Fingerprint size={14} className="text-orange-500"/>
                   <span className="text-sm text-orange-500 font-mono tracking-[0.2em]">SERIAL NO. 005</span>
                </div>
                <h1 className="text-7xl font-bold text-white mb-6 tracking-tighter drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl text-orange-200 font-light border-l-4 border-orange-500 pl-6 py-2 leading-relaxed bg-gradient-to-r from-orange-900/20 to-transparent rounded-r-lg">
                  {slide.subtitle}
                </p>
             </div>

             {/* Right: Visuals */}
             <div className="w-[40%] flex items-center justify-center relative">
                <div className="scale-125 relative">
                   <div className="absolute inset-0 bg-orange-500/20 blur-[60px] rounded-full animate-pulse"></div>
                   {renderVisuals()}
                   {/* Extra wide-mode decorations */}
                   <div className="absolute top-[-50px] right-[-30px] text-violet-300 opacity-40 animate-pulse"><Brain size={30} /></div>
                   <div className="absolute bottom-[-30px] left-[-40px] text-orange-400 opacity-40 animate-bounce"><Layers size={30} /></div>
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
                 <div className="text-xs text-violet-400 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-1 leading-tight">{slide.title}</div>
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
             <h2 className="text-3xl font-bold text-orange-500 mb-8 border-l-4 border-orange-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-violet-900/10 border border-violet-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-violet-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-gray-400 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-gray-800"></div>
                </div>

                <div className="bg-orange-900/10 border border-orange-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-orange-200">{slide.bottom.title}</h3>
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
               <h2 className="text-3xl font-bold text-orange-500">{slide.header}</h2>
               <span className="text-sm text-gray-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center opacity-60 border border-gray-800">
                    <div className="mb-2 text-gray-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-gray-300">{slide.left.title}</div>
                    <div className="text-xs text-gray-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-orange-500 font-bold">vs</div>
                <div className="flex-1 bg-orange-950/30 border border-orange-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(249,115,22,0.1)]">
                    <div className="mb-2 text-orange-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-orange-100">{slide.right.title}</div>
                    <div className="text-xs text-orange-500/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-orange-500">
                <p className="text-base leading-7 text-gray-300 text-justify">
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
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-orange-500"></div>
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
                <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0a0f1e] p-6 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#050505] px-2 text-xs font-mono text-gray-600 group-hover:text-orange-500 transition-colors">
                               Tips 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-orange-100 mb-1">{card.title}</h3>
                           <p className="text-gray-400 text-sm">{card.text}</p>
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
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-950/20 border-red-500/20' : 'bg-violet-950/20 border-violet-500/20'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Heart className="text-violet-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-violet-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-orange-500">
                     END OF ARCHIVE 005
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
        {/* Main Frame - changes shape based on slide type */}
        <div className={`w-full bg-[#050505] shadow-2xl border-4 border-gray-900 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' // Wide Cover Mode
             : 'aspect-[3/4] rounded-[3rem] p-3' // Regular Phone Mode
        }`}>
           <div className={`w-full h-full overflow-hidden bg-black ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
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
          <span className="text-gray-500 font-mono text-sm min-w-[3ch] text-center">
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

export default Archive005;