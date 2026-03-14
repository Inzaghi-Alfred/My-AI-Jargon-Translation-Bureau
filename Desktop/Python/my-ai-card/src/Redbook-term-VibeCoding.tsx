import React, { useState } from 'react';
import { 
  Brain, Cpu, ChefHat, Zap, AlertTriangle, Layers, ChevronRight, ChevronLeft, 
  Fingerprint, Search, Tag, Keyboard, Sparkles, Terminal, Rocket, MessageSquare, 
  Code2, MousePointerClick 
} from 'lucide-react';

const Archive002 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "Vibe Coding",
      subtitle: "不会写代码？凭感觉也能做出 App！",
      footer: "Serial No. 002 | AI黑话翻译局",
      visual: "vibe"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Vibe Coding",
      content: [
        { label: "中文语境", text: "氛围编码 / 感觉编程。" },
        { label: "出处", text: "由 AI 圈大神、前 Tesla/OpenAI 首席科学家 安德烈·卡帕斯 (Andrej Karpathy) 于 2025 年初在 X 平台上首创。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "一种 AI 优先的开发模式。开发者不再手动编写代码，而是通过自然语言描述意图，由 AI 实时生成、测试并修正。核心是快速迭代，关注结果（Vibe）而非语法。",
        icon: <Terminal className="w-6 h-6 text-blue-300" />
      },
      bottom: {
        title: "说人话",
        text: "“嘴炮编程”。只要你的“感觉”对，能把需求描述清楚，AI 就能帮你搞定背后的万行代码。你不是在修地基，你是在指挥机器人盖楼。",
        icon: <MessageSquare className="w-6 h-6 text-fuchsia-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "苦逼墩子", desc: "传统编程", icon: <Layers size={24} /> },
      right: { title: "总店主厨", desc: "Vibe Coding", icon: <ChefHat size={24} /> },
      explanation: "传统编程是“墩子”，得自己切每一片土豆，错一步（少个分号）整锅倒掉。Vibe Coding 是“总厨”，你只管说：“我要酸甜适中、带点果香的排骨。” AI 立刻出样，你尝一口（测试）说“果味重一点”，它瞬间改好。你负责“风味”，它负责“干活”。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "逻辑降维", text: "它将软件开发的门槛从“精通算法”降到了“具备产品意识”。", icon: <Code2 className="text-blue-300" /> },
        { title: "效率爆炸", text: "以前一周才能跑通的原型，现在半小时就能“Vibe”出来。", icon: <Rocket className="text-fuchsia-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么用",
      cards: [
        { title: "掌握自然语言", text: "学习如何更精准地描述你的“感觉”。" },
        { title: "用 AI 原生编辑器", text: "如 Cursor, Replit, Windsurf 等。" },
        { title: "接受“不理解”", text: "只要结果对，别纠结代码怎么写的。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "警惕：感觉过载", text: "如果不经过测试直接接受 AI 代码，可能会埋下深坑。" },
        { type: 'thought', title: "反思：护城河转移", text: "当“写”的能力被 AI 取代，“定义”和“审美”的能力成了人类最后的护城河。" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 新增类型：公众号封面
      badge: "公众号封面",
      title: "Vibe Coding",
      subtitle: "不会写代码？凭感觉也能做出 App！",
      footer: "Serial No. 002 | AI黑话翻译局",
      visual: "vibe"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // 判断当前是否为宽屏模式
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }) => (
    <div className={`w-full h-full bg-[#0a0f1e] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for Vibe Coding (Purple/Pink accents) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[30%] bg-blue-900/20 blur-[80px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[30%] bg-fuchsia-600/10 blur-[80px] rounded-full"></div>
      <div className="absolute w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      {/* Decoration Lines - Amber changed to Fuchsia/Purple for Vibe theme */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

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
        <div className={`flex justify-between items-center text-[10px] text-gray-400 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span>No. 002</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-fuchsia-500' : 'w-1 bg-gray-700'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  // 提取视觉组件，方便复用
  const renderVisuals = () => (
    <div className="relative mb-8">
        {/* Purple Mist Effect for Vibe */}
        <div className="absolute inset-0 bg-fuchsia-500/20 blur-2xl rounded-full animate-pulse"></div>
        <div className="absolute -top-10 inset-x-0 h-20 bg-purple-500/10 blur-xl"></div>
        
        <Keyboard size={120} className="text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" strokeWidth={1} />
        
        {/* Floating particles/sparkles */}
        <Sparkles className="absolute -top-2 -right-4 text-fuchsia-300 animate-bounce" size={24} />
        <Sparkles className="absolute bottom-0 -left-6 text-blue-300 animate-pulse" size={16} />

        <div className="absolute inset-0 border border-fuchsia-500/30 rounded-full scale-125 opacity-30"></div>
        <div className="absolute inset-0 border border-blue-500/30 rounded-full scale-150 opacity-20 rotate-45"></div>
    </div>
  );

  const renderSlideContent = (slide) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            {renderVisuals()}
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-fuchsia-100 to-gray-400 mb-4 tracking-tighter">
              {slide.title}
            </h1>
            <p className="text-xl text-fuchsia-300 font-light tracking-widest border-t border-b border-fuchsia-500/30 py-2 px-4 bg-fuchsia-500/5">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-gray-500 font-mono flex items-center gap-2">
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
                   <Fingerprint size={14} className="text-fuchsia-500"/>
                   <span className="text-sm text-fuchsia-500 font-mono tracking-[0.2em]">SERIAL NO. 002</span>
                </div>
                <h1 className="text-7xl font-bold text-white mb-6 tracking-tighter drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl text-fuchsia-200 font-light border-l-4 border-fuchsia-500 pl-6 py-2 leading-relaxed bg-gradient-to-r from-fuchsia-900/20 to-transparent rounded-r-lg">
                  {slide.subtitle}
                </p>
             </div>

             {/* Right: Visuals */}
             <div className="w-[40%] flex items-center justify-center relative">
                <div className="scale-125 relative">
                   <div className="absolute inset-0 bg-fuchsia-500/20 blur-[60px] rounded-full animate-pulse"></div>
                   {renderVisuals()}
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-fuchsia-500 mb-8 border-l-4 border-fuchsia-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-blue-400 mb-2 uppercase tracking-wider">Term</div>
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
             <h2 className="text-3xl font-bold text-fuchsia-500 mb-8 border-l-4 border-fuchsia-500 pl-4">{slide.header}</h2>
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

                <div className="bg-gradient-to-br from-fuchsia-900/20 to-transparent border border-fuchsia-500/30 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-fuchsia-200">{slide.bottom.title}</h3>
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
               <h2 className="text-3xl font-bold text-fuchsia-500">{slide.header}</h2>
               <span className="text-sm text-gray-400">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-800/50 p-4 rounded-lg flex flex-col items-center text-center grayscale opacity-70">
                    <div className="mb-2 text-gray-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-gray-300">{slide.left.title}</div>
                    <div className="text-xs text-gray-500">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-fuchsia-500 font-bold">vs</div>
                <div className="flex-1 bg-fuchsia-900/20 border border-fuchsia-500/30 p-4 rounded-lg flex flex-col items-center text-center">
                    <div className="mb-2 text-fuchsia-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-fuchsia-100">{slide.right.title}</div>
                    <div className="text-xs text-fuchsia-500/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-fuchsia-500">
                <p className="text-base leading-7 text-gray-200 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-fuchsia-500 mb-10 border-l-4 border-fuchsia-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item, idx) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-700"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-fuchsia-500"></div>
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
                <h2 className="text-3xl font-bold text-fuchsia-500 mb-6 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card, idx) => (
                       <div key={idx} className="group relative bg-[#161b2e] p-5 rounded-2xl border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#0a0f1e] px-2 text-xs font-mono text-gray-500 group-hover:text-fuchsia-500 transition-colors">
                               Step 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-blue-100 mb-1">{card.title}</h3>
                           <p className="text-gray-400 text-sm">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-fuchsia-500 mb-8 border-l-4 border-fuchsia-500 pl-4">{slide.header}</h2>
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
                 <div className="mt-auto mb-8 text-center opacity-50 text-[10px] font-mono tracking-[0.5em] text-fuchsia-500">
                     END OF ARCHIVE 002
                 </div>
              </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center p-4 font-sans">
      <div className={`flex flex-col items-center gap-6 w-full ${isWide ? 'max-w-4xl' : 'max-w-md'} transition-all duration-500`}>
        
        {/* Main Phone Frame */}
        <div className={`w-full bg-black shadow-2xl border-4 border-gray-800 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' // Wide Cover Mode
             : 'aspect-[3/4] rounded-[3rem] p-3' // Regular Phone Mode
        }`}>
           {/* Screen Area */}
           <div className={`w-full h-full overflow-hidden bg-[#0a0f1e] ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
              <CardWrapper index={currentSlide} badge={slides[currentSlide].badge} isWideMode={isWide}>
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
          {isWide ? '宽屏封面模式 (2.35:1)' : '图文卡片模式 (3:4)'}<br/>
          推荐使用系统截图工具保存图片
        </div>
      </div>
    </div>
  );
};

export default Archive002;