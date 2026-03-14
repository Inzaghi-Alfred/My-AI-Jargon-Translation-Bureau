import React, { useState } from 'react';
import { Brain, Cpu, ChefHat, Zap, AlertTriangle, Layers, ChevronRight, ChevronLeft, Fingerprint, Search, Tag } from 'lucide-react';

const SlideViewer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "AI",
      subtitle: "是数字神谕，还是最强学徒？",
      footer: "Serial No. 001 | AI黑话翻译局",
      visual: "brain"
    },
    {
      id: 2,
      type: 'content',
      // badge removed
      header: "身份与溯源",
      title: "Artificial Intelligence",
      content: [
        { label: "中文语境", text: "人工智能。民间亦称“调教对象”、“数字分身”。" },
        { label: "出处", text: "1956 年达特茅斯会议。约翰·麦卡锡（John McCarthy）等人在那个夏天，试图用数学逻辑“复刻”人类的灵魂。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      // badge removed
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "指由人工制造出来的系统所表现出来的智能，核心在于通过算法使机器具备感知、推理、学习和决策的能力。",
        icon: <Cpu className="w-6 h-6 text-blue-300" />
      },
      bottom: {
        title: "说人话",
        text: "给机器装上“脑子”。它不再是只会执行固定指令的复读机，而是一个能通过观察数据、自己悟出逻辑的“生命体”。",
        icon: <Brain className="w-6 h-6 text-amber-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      // badge removed
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "全自动面包机", desc: "传统编程", icon: <Layers size={24} /> },
      right: { title: "天才主厨学徒", desc: "AI", icon: <ChefHat size={24} /> },
      explanation: "传统的编程是面包机，少一步就翻车。而 AI 是那个学徒，它尝过一万种面团的劲道。哪怕没给配方，它看一眼湿度和面粉成色，就能自己调整揉面力度。它学的是“手感”，而非“说明书”。"
    },
    {
      id: 5,
      type: 'list',
      // badge removed
      header: "为什么重要",
      items: [
        { title: "技能平权", text: "它抹平了天赋的鸿沟。你不需要学 10 年美术也能作画，不需要学 5 年代码也能写程序。", icon: <Zap className="text-amber-400" /> },
        { title: "第二大脑", text: "它处理的是“认知负荷”。帮你从海量垃圾信息中脱水，只留下金子。", icon: <Brain className="text-blue-300" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      // badge removed
      header: "我们应该怎么用",
      cards: [
        { title: "Copilot 模式", text: "把它当成副驾驶。你定方向（提需求），它来操作（执行）。" },
        { title: "知识喂养", text: "把你最细碎的灵感丢给它，让它帮你做“逻辑除草”。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      // badge removed
      header: "注意与反思",
      items: [
        { type: 'alert', title: "警惕：AI 幻觉", text: "它太想取悦你，以至于有时会编造事实。" },
        { type: 'thought', title: "反思：人之为人", text: "当机器越来越像人，我们要思考：什么是人类独有的？是那份无法被算法定义的“不理智”的爱和直觉。" }
      ]
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge }) => (
    <div className="w-full h-full bg-[#0a0f1e] text-white overflow-hidden relative font-sans flex flex-col items-center shadow-2xl">
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[30%] bg-blue-900/20 blur-[80px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[30%] bg-amber-600/10 blur-[80px] rounded-full"></div>
      <div className="absolute w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      {/* Golden Lines Decoration */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      {/* Dynamic Badge - Modified Position and Style */}
      {badge && (
        <div className="absolute top-20 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-amber-500 text-[#0a0f1e] shadow-amber-500/30">
            <Tag size={10} className="text-amber-900" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="w-full h-full p-8 z-10 flex flex-col relative">
        {/* Top Label */}
        <div className="flex justify-between items-center text-[10px] text-gray-400 mb-6 tracking-widest uppercase">
          <span>AI Jargon Translation Bureau</span>
          <span>No. 001</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-amber-500' : 'w-1 bg-gray-700'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSlideContent = (slide) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full animate-pulse"></div>
              <Brain size={120} className="text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" strokeWidth={1} />
              <div className="absolute inset-0 border border-amber-500/30 rounded-full scale-125 opacity-30"></div>
              <div className="absolute inset-0 border border-blue-500/30 rounded-full scale-150 opacity-20 rotate-45"></div>
            </div>
            <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-100 to-gray-400 mb-4 tracking-tighter">
              {slide.title}
            </h1>
            <p className="text-xl text-amber-400 font-light tracking-widest border-t border-b border-amber-500/30 py-2 px-4 bg-amber-500/5">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-gray-500 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-amber-500 mb-8 border-l-4 border-amber-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-blue-400 mb-2 uppercase tracking-wider">Subject</div>
                 <div className="text-4xl font-bold text-white mb-1">{slide.title}</div>
              </div>
              
              {slide.content.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-gray-400 font-mono uppercase border-b border-gray-700 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-gray-200 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-amber-500 mb-8 border-l-4 border-amber-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-blue-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-gray-300 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-gray-600"></div>
                </div>

                <div className="bg-gradient-to-br from-amber-900/20 to-transparent border border-amber-500/30 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-amber-200">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-gray-100 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-gray-800 pb-4">
               <h2 className="text-3xl font-bold text-amber-500">{slide.header}</h2>
               <span className="text-sm text-gray-400">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-800/50 p-4 rounded-lg flex flex-col items-center text-center grayscale opacity-70">
                    <div className="mb-2 text-gray-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-gray-300">{slide.left.title}</div>
                    <div className="text-xs text-gray-500">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-amber-500 font-bold">vs</div>
                <div className="flex-1 bg-amber-900/20 border border-amber-500/30 p-4 rounded-lg flex flex-col items-center text-center">
                    <div className="mb-2 text-amber-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-amber-100">{slide.right.title}</div>
                    <div className="text-xs text-amber-500/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-amber-500">
                <p className="text-base leading-7 text-gray-200 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-amber-500 mb-10 border-l-4 border-amber-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item, idx) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-700"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-amber-500"></div>
                          <div className="flex items-center gap-2 mb-2">
                             {item.icon}
                             <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{item.text}</p>
                      </div>
                  ))}
               </div>
            </div>
        );

      case 'cards':
         return (
             <div className="flex-1 flex flex-col pt-4 justify-center">
                <h2 className="text-3xl font-bold text-amber-500 mb-8 text-center">{slide.header}</h2>
                <div className="space-y-6">
                   {slide.cards.map((card, idx) => (
                       <div key={idx} className="group relative bg-[#161b2e] p-6 rounded-2xl border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#0a0f1e] px-2 text-xs font-mono text-gray-500 group-hover:text-amber-500 transition-colors">
                               Mode 0{idx + 1}
                           </div>
                           <h3 className="text-xl font-bold text-blue-100 mb-2">{card.title}</h3>
                           <p className="text-gray-400 text-sm">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-amber-500 mb-8 border-l-4 border-amber-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item, idx) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-900/10 border-red-500/30' : 'bg-blue-900/10 border-blue-500/30'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Search className="text-blue-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-blue-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-50 text-[10px] font-mono tracking-[0.5em] text-amber-500">
                     END OF ARCHIVE 001
                 </div>
              </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center p-4 font-sans">
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        
        {/* Main Phone Frame */}
        <div className="w-full aspect-[3/4] bg-black rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800 relative">
           {/* Screen Area */}
           <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-[#0a0f1e]">
              <CardWrapper index={currentSlide} badge={slides[currentSlide].badge}>
                {renderSlideContent(slides[currentSlide])}
              </CardWrapper>
           </div>
           
           {/* Notch/Camera Mockup Removed */}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 bg-gray-800 p-2 rounded-full shadow-lg border border-gray-700">
          <button 
            onClick={prevSlide}
            className="p-3 hover:bg-gray-700 rounded-full text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="text-gray-400 font-mono text-sm min-w-[3ch] text-center">
            {currentSlide + 1}/{slides.length}
          </span>
          <button 
            onClick={nextSlide}
            className="p-3 hover:bg-gray-700 rounded-full text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-gray-500 text-xs text-center">
          推荐使用系统截图工具保存图片<br/>
          ( 宽高比已优化为 3:4 )
        </div>
      </div>
    </div>
  );
};

export default SlideViewer;