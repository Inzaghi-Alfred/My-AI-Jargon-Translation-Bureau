import React, { useState } from 'react';
import { 
  Brain, Cpu, ChefHat, Zap, AlertTriangle, Layers, ChevronRight, ChevronLeft, 
  Fingerprint, Search, Tag, Keyboard, Sparkles, Rocket, MessageSquare, 
  Code2, Minimize2, Database, Soup, Heart, Gauge, Quote, Library, 
  BookOpen, FileText, RefreshCw, ScrollText, Link, Bot, Utensils, 
  AppWindow, Box, ListMusic, Wrench, Map, CheckCircle, PlayCircle,
  Settings, UserCog, Briefcase, TrendingUp, Server, BarChart3, 
  Scale, Factory, Coins, Puzzle, Scissors, Receipt, Wallet, Type,
  Blocks, ScanLine, Wand2, Lightbulb, Mic2, Compass, Castle
} from 'lucide-react';

const Archive010 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "Prompt",
      subtitle: "它是新时代的“咒语”，更是你调教 AI 的艺术。",
      footer: "Serial No. 010 | AI黑话翻译局",
      visual: "prompt"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Prompt",
      content: [
        { label: "中文语境", text: "提示词、指令。" },
        { label: "出处", text: "源自自然语言处理（NLP），在大模型交互中演变为触发模型特定响应的输入文本。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "用户输入给大模型的指令或信息，用于引导模型生成特定的输出。提示词的设计（Prompt Engineering）直接影响输出的质量、风格和准确性。",
        icon: <Keyboard className="w-6 h-6 text-yellow-200" />
      },
      bottom: {
        title: "说人话",
        text: "“魔法咒语”。AI 是一个无所不知但没脾气的巨人，Prompt 就是你对他下的咒语。咒语念得越准，法力越强；念错了，可能变出一堆乱码。",
        icon: <Wand2 className="w-6 h-6 text-cyan-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "路边摊点菜", desc: "简单指令", icon: <Utensils size={24} /> },
      right: { title: "米其林私教", desc: "优质 Prompt", icon: <ChefHat size={24} /> },
      explanation: "简单指令像喊“老板来个炒饭”，结果往往平庸。优质 Prompt 像面对米其林主厨：“我要一份扬州炒饭，隔夜籼米，蛋液裹米，金华火腿丁鲜笋丁，手剥虾仁，要镬气，摆盘禅意。”描述越细腻，出品越惊艳。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "能力开关", text: "同样的 AI 助手，高手用 Prompt 能写出商业计划书，新手只能让它讲笑话。", icon: <Zap className="text-yellow-200" /> },
        { title: "效率杠杆", text: "掌握了 Prompt 设计，相当于拥有了一个 24 小时待命的顶级智囊团。", icon: <TrendingUp className="text-cyan-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么用",
      cards: [
        { title: "赋予角色", text: "告诉 AI “你现在是一位拥有 20 年经验的资深主厨”。" },
        { title: "提供背景", text: "交代清楚你的目标、受众和限制条件。" },
        { title: "少即是多", text: "用逻辑清晰的结构（如：角色、任务、要求、示例）来组织你的 Prompt。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "注意：首尾偏差", text: "AI 有“首尾偏差”，重要的指令最好放在 Prompt 的开头或结尾。" },
        { type: 'thought', title: "反思：沟通的异化", text: "当沟通变成了“写咒语”，我们是在学习如何与机器相处，还是在丧失与人沟通的耐心？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 宽屏封面模式
      badge: "公众号封面",
      title: "Prompt",
      subtitle: "它是新时代的“咒语”，更是你调教 AI 的艺术。",
      footer: "Serial No. 010 | AI黑话翻译局",
      visual: "prompt"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#020617] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for Prompt (Deep Sea Blue + Light Beam) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-blue-900/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
      
      {/* Light Rays */}
      <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[2px] h-[500px] bg-gradient-to-b from-white/30 to-transparent rotate-12 blur-[1px]"></div>
      <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[2px] h-[500px] bg-gradient-to-b from-white/20 to-transparent -rotate-12 blur-[1px]"></div>
      <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[40px] h-[600px] bg-gradient-to-b from-white/10 to-transparent blur-xl"></div>

      {/* Grid Pattern */}
      <div className="absolute w-full h-full opacity-5" style={{ 
        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-yellow-200 text-[#020617] shadow-yellow-200/30">
            <Tag size={10} className="text-yellow-900" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label - Hiding No. on cover pages (index 0 and 7) */}
        <div className={`flex justify-between items-center text-[10px] text-cyan-600 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span className={index === 0 || index === 7 ? 'opacity-0' : 'opacity-100'}>No. 010</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-yellow-200' : 'w-1 bg-cyan-900'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center h-48 w-full">
        {/* The Light Beam Source */}
        <div className="absolute top-[-60px] w-20 h-20 bg-white blur-[50px] animate-pulse"></div>
        
        {/* Main Beam */}
        <div className="absolute top-[-20px] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[200px] border-l-transparent border-r-transparent border-b-white/10 blur-md"></div>

        {/* Floating Elements in the Deep */}
        <div className="relative mt-20 flex flex-col items-center">
           <Castle size={64} className="text-cyan-200 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]" strokeWidth={1} />
           
           {/* Reflection / Platform */}
           <div className="w-24 h-4 bg-cyan-500/20 blur-lg rounded-full mt-2"></div>
           
           {/* Floating Runes/Characters */}
           <div className="absolute top-[-40px] left-[-40px] text-yellow-100 opacity-60 animate-bounce delay-75 text-xs font-mono">/imagine</div>
           <div className="absolute top-[-20px] right-[-50px] text-yellow-100 opacity-60 animate-pulse delay-150 text-xs font-mono">Act as</div>
           <div className="absolute bottom-[10px] left-[-60px] text-cyan-300 opacity-40 animate-bounce delay-300 text-xs font-mono">Context</div>
        </div>
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

            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-yellow-100 to-cyan-800 mb-6 tracking-tighter">
              {slide.title}
            </h1>
            <p className="text-lg text-cyan-100/80 font-light tracking-widest border-t border-b border-cyan-500/30 py-3 px-6 bg-cyan-900/20">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-cyan-600 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'wide-cover':
        return (
          <div className="flex-1 flex flex-row items-center justify-between h-full pt-6">
             {/* Left: Text */}
             <div className="flex-1 flex flex-col justify-center text-left z-20 pr-8">
                <div className="flex items-center gap-2 mb-4 opacity-70">
                   <Fingerprint size={14} className="text-cyan-400"/>
                   <span className="text-sm text-cyan-400 font-mono tracking-[0.2em]">SERIAL NO. 010</span>
                </div>
                <h1 className="text-7xl font-bold text-white mb-6 tracking-tighter drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl text-cyan-100 font-light border-l-4 border-yellow-200 pl-6 py-2 leading-relaxed bg-gradient-to-r from-cyan-900/30 to-transparent rounded-r-lg">
                  {slide.subtitle}
                </p>
             </div>

             {/* Right: Visuals */}
             <div className="w-[40%] flex items-center justify-center relative">
                <div className="scale-125 relative">
                   {renderVisuals()}
                   {/* Extra Wide Decorations */}
                   <div className="absolute top-[-10px] right-[20px] text-yellow-200 opacity-30 animate-pulse"><Sparkles size={30} /></div>
                   <div className="absolute bottom-[20px] left-[-60px] text-cyan-400 opacity-30 animate-bounce"><Wand2 size={30} /></div>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-yellow-200 mb-8 border-l-4 border-yellow-200 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-cyan-400 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-1 leading-tight">{slide.title}</div>
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-cyan-600 font-mono uppercase border-b border-cyan-900 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-cyan-100 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-yellow-200 mb-8 border-l-4 border-yellow-200 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-cyan-900/20 border border-cyan-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-cyan-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-cyan-400 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-cyan-900"></div>
                </div>

                <div className="bg-yellow-900/10 border border-yellow-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-yellow-100">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-cyan-100 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-cyan-900 pb-4">
               <h2 className="text-3xl font-bold text-yellow-200">{slide.header}</h2>
               <span className="text-sm text-cyan-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-cyan-950 p-4 rounded-lg flex flex-col items-center text-center opacity-60 border border-cyan-900">
                    <div className="mb-2 text-cyan-600">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-cyan-300">{slide.left.title}</div>
                    <div className="text-xs text-cyan-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-yellow-200 font-bold">→</div>
                <div className="flex-1 bg-cyan-900/30 border border-cyan-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                    <div className="mb-2 text-yellow-200">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-yellow-100">{slide.right.title}</div>
                    <div className="text-xs text-yellow-200/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-yellow-200">
                <p className="text-base leading-7 text-cyan-100 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-yellow-200 mb-10 border-l-4 border-yellow-200 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-cyan-900"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-yellow-200"></div>
                          <div className="flex items-center gap-2 mb-2">
                             {item.icon}
                             <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          </div>
                          <p className="text-cyan-300 leading-relaxed">{item.text}</p>
                      </div>
                  ))}
               </div>
            </div>
        );

      case 'cards':
         return (
             <div className="flex-1 flex flex-col pt-4 justify-center">
                <h2 className="text-3xl font-bold text-yellow-200 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0f172a] p-6 rounded-2xl border border-cyan-900 hover:border-yellow-200/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#020617] px-2 text-xs font-mono text-cyan-600 group-hover:text-yellow-200 transition-colors">
                               Step 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-cyan-100 mb-1">{card.title}</h3>
                           <p className="text-cyan-400 text-sm">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-yellow-200 mb-8 border-l-4 border-yellow-200 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-900/20 border-red-500/20' : 'bg-cyan-900/30 border-cyan-500/30'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Brain className="text-cyan-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-cyan-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-cyan-100 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-cyan-500">
                     END OF ARCHIVE 010
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
        <div className={`w-full bg-[#020617] shadow-2xl border-4 border-cyan-900 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' 
             : 'aspect-[3/4] rounded-[3rem] p-3'
        }`}>
           <div className={`w-full h-full overflow-hidden bg-[#020617] ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
              <CardWrapper index={currentSlide} badge={slides[currentSlide].badge} isWideMode={isWide}>
                {renderSlideContent(slides[currentSlide])}
              </CardWrapper>
           </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 bg-cyan-950 p-2 rounded-full shadow-lg border border-cyan-900">
          <button onClick={prevSlide} className="p-3 hover:bg-cyan-900 rounded-full text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <span className="text-cyan-500 font-mono text-sm min-w-[3ch] text-center">
            {currentSlide + 1}/{slides.length}
          </span>
          <button onClick={nextSlide} className="p-3 hover:bg-cyan-900 rounded-full text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-cyan-700 text-xs text-center">
          {isWide ? '宽屏封面模式 (2.35:1)' : '图文卡片模式 (3:4)'}<br/>
          推荐使用系统截图工具保存图片
        </div>
      </div>
    </div>
  );
};

export default Archive010;