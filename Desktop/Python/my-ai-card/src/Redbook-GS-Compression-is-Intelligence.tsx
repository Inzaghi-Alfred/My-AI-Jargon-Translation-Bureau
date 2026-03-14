import React, { useState } from 'react';
import { 
  Brain, Cpu, ChefHat, Zap, AlertTriangle, Layers, ChevronRight, ChevronLeft, 
  Fingerprint, Search, Tag, Keyboard, Sparkles, Rocket, MessageSquare, 
  Code2, Minimize2, Database, Soup, Heart, Gauge, Quote
} from 'lucide-react';

const Archive003 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "思辨",
      title: "压缩即智能",
      subtitle: "读懂了这一句，就读懂了 AI 的灵魂。",
      footer: "Serial No. 003 | AI黑话翻译局",
      visual: "compression"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Compression is Intelligence",
      content: [
        { label: "提出者", text: "马库斯·哈特 (Marcus Hutter) 提出，由 OpenAI 前首席科学家 伊利亚·苏茨克维 (Ilya Sutskever) 发扬光大。" },
        { label: "背景", text: "这是目前大语言模型（LLM）之所以能够产生的底层哲学基础。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "智能的本质是对信息进行最优化的压缩。如果你能从海量数据中提取出完美规律并以此预测未来，这种压缩算法就是智能。",
        icon: <Minimize2 className="w-6 h-6 text-cyan-300" />
      },
      bottom: {
        title: "说人话",
        text: "“去粗取精”的终极体现。AI 并不是死记硬背，而是把全网文字压缩成了背后的“逻辑”。能用一句话总结一万本书，这就是智能。",
        icon: <Sparkles className="w-6 h-6 text-amber-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "新鲜生肉", desc: "原始数据", icon: <Database size={24} /> },
      right: { title: "高浓缩汤底", desc: "智能模型", icon: <Soup size={24} /> },
      explanation: "原始数据是 100 斤食材（冗余、占地）。AI 训练就像 72 小时慢火熬煮，蒸发杂质。剩下的那一小碗“高浓缩汤底”就是智能。只需加入 Prompt（水），它就能还原出一锅美味。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "揭示本质", text: "它告诉我们，智能不是某种神秘灵光，而是对数据规律的深度提取。", icon: <Zap className="text-cyan-300" /> },
        { title: "效率标尺", text: "压缩率越高，模型越聪明。解释了为何小参数模型也能通过精细训练实现“越级打击”。", icon: <Gauge className="text-amber-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "我们应该怎么用",
      cards: [
        { title: "认知升级", text: "刻意练习“一句话总结”的能力，在工作中寻找“第一性原理”。" },
        { title: "学习避坑", text: "拒绝低水平的重复，把书读薄，就是在升级你自己的“压缩算法”。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "警惕：有损压缩", text: "过度压缩会导致细节丢失（有损压缩带来的偏见或幻觉）。" },
        { type: 'thought', title: "反思：不可压缩之物", text: "如果智能等于压缩，那么人类那些“无法被压缩”的非理性情感，是否才是我们最核心的价值？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 新增类型：公众号封面
      badge: "公众号封面",
      title: "压缩即智能",
      subtitle: "读懂了这一句，就读懂了 AI 的灵魂。",
      footer: "Serial No. 003 | AI黑话翻译局",
      visual: "compression"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // 判断当前是否为宽屏模式
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#050505] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for Compression (Cyan/Black high contrast) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-cyan-900/10 blur-[90px] rounded-full"></div>
      <div className="absolute w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-amber-500 text-[#0a0f1e] shadow-amber-500/30">
            <Tag size={10} className="text-amber-900" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label */}
        <div className={`flex justify-between items-center text-[10px] text-gray-500 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span>No. 003</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-cyan-500' : 'w-1 bg-gray-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  // 提取视觉组件，方便复用
  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center">
       {/* Center Core */}
       <div className="relative z-10 bg-black p-4 rounded-full border border-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.5)]">
          <Minimize2 size={64} className="text-cyan-300" strokeWidth={1.5} />
       </div>
       
       {/* Implosion Rings */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cyan-500/20 rounded-full animate-[ping_3s_linear_infinite]"></div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-cyan-500/10 rounded-full animate-[ping_4s_linear_infinite]"></div>
       
       {/* Data Particles */}
       <div className="absolute -top-8 -right-8 text-gray-600 animate-bounce"><Database size={16} /></div>
       <div className="absolute -bottom-8 -left-8 text-gray-600 animate-bounce delay-75"><Database size={16} /></div>
    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-10 group">
              {/* Compression Visual Effect */}
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
              {renderVisuals()}
            </div>

            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 mb-6 tracking-tighter">
              {slide.title}
            </h1>
            <p className="text-lg text-cyan-300/80 font-light tracking-widest border-t border-b border-cyan-900/50 py-3 px-6 bg-cyan-900/10">
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
                   <Fingerprint size={14} className="text-cyan-500"/>
                   <span className="text-sm text-cyan-500 font-mono tracking-[0.2em]">SERIAL NO. 003</span>
                </div>
                <h1 className="text-7xl font-bold text-white mb-6 tracking-tighter drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl text-cyan-200 font-light border-l-4 border-cyan-500 pl-6 py-2 leading-relaxed bg-gradient-to-r from-cyan-900/20 to-transparent rounded-r-lg">
                  {slide.subtitle}
                </p>
             </div>

             {/* Right: Visuals */}
             <div className="w-[40%] flex items-center justify-center relative">
                <div className="scale-125 relative">
                   <div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full animate-pulse"></div>
                   {renderVisuals()}
                   {/* Extra wide-mode decorations */}
                   <div className="absolute top-[-50px] right-[-30px] text-amber-300 opacity-40 animate-pulse"><Zap size={24} /></div>
                   <div className="absolute bottom-[-30px] left-[-40px] text-cyan-400 opacity-40 animate-bounce"><Gauge size={24} /></div>
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
                 <div className="text-xs text-cyan-400 mb-2 uppercase tracking-wider">Golden Sentence</div>
                 <div className="text-3xl font-bold text-white mb-1 font-serif italic">"{slide.title}"</div>
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
                <div className="bg-cyan-900/10 border border-cyan-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-cyan-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-gray-400 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-gray-800"></div>
                </div>

                <div className="bg-gradient-to-br from-amber-900/10 to-transparent border border-amber-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-amber-200">{slide.bottom.title}</h3>
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
               <h2 className="text-3xl font-bold text-cyan-500">{slide.header}</h2>
               <span className="text-sm text-gray-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center opacity-60 border border-gray-800">
                    <div className="mb-2 text-gray-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-gray-300">{slide.left.title}</div>
                    <div className="text-xs text-gray-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-cyan-500 font-bold">→</div>
                <div className="flex-1 bg-cyan-950/30 border border-cyan-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(6,182,212,0.1)]">
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
                       <div key={idx} className="group relative bg-[#0a0f1e] p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#050505] px-2 text-xs font-mono text-gray-600 group-hover:text-cyan-500 transition-colors">
                               Action 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-cyan-100 mb-1">{card.title}</h3>
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
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-950/20 border-red-500/20' : 'bg-cyan-950/20 border-cyan-500/20'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Heart className="text-cyan-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-cyan-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-cyan-500">
                     END OF ARCHIVE 003
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

export default Archive003;