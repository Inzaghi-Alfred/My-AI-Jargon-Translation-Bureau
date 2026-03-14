import React, { useState } from 'react';
import { 
  Brain, Cpu, ChefHat, Zap, AlertTriangle, Layers, ChevronRight, ChevronLeft, 
  Fingerprint, Search, Tag, Keyboard, Sparkles, Rocket, MessageSquare, 
  Code2, Minimize2, Database, Soup, Heart, Gauge, Quote, Library, 
  BookOpen, FileText, RefreshCw, ScrollText, Link, Bot, Utensils, 
  AppWindow, Box, ListMusic, Wrench, Map, CheckCircle, PlayCircle,
  Settings, UserCog, Briefcase, TrendingUp, Server, BarChart3, 
  Scale, Factory, Coins
} from 'lucide-react';

const Archive008 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "Scaling Law",
      subtitle: "AI 界的“大力出奇迹”，真的没有上限吗？",
      footer: "Serial No. 008 | AI黑话翻译局",
      visual: "scaling"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Scaling Law",
      content: [
        { label: "中文语境", text: "规模法则 / 尺度定律。" },
        { label: "出处", text: "2020 年由 OpenAI 研究团队正式系统化提出，成为指导大模型研发的“圣经”。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "模型性能与计算量、参数量、数据量遵循幂律关系。按比例增加这三要素，模型误差就会预测性地下降。",
        icon: <BarChart3 className="w-6 h-6 text-yellow-400" />
      },
      bottom: {
        title: "说人话",
        text: "“大力出奇迹”的公式化。AI 变强不靠运气，靠砸钱、砸算力、砸数据。只要投入够多，AI 就能线性变聪明。",
        icon: <Coins className="w-6 h-6 text-slate-300" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "家传老卤水", desc: "小模型", icon: <Soup size={24} /> },
      right: { title: "万吨酱油池", desc: "Scaling Law", icon: <Factory size={24} /> },
      explanation: "小模型像家传卤水，精雕细琢但上限有限。Scaling Law 是工业化逻辑：只要发酵池扩大10倍、原料增加10倍，产出品质就会稳定提升。不需要研究每颗豆子的灵魂，只要“规模”扩张，味道自然质变。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "确定性预期", text: "让开发者敢于投入数十亿美金，因为只要算力翻倍，模型大概率变强。", icon: <CheckCircle className="text-yellow-400" /> },
        { title: "涌现的基石", text: "很多神奇能力（如推理）都是在规模跨过某个临界点后“突然”出现的。", icon: <Sparkles className="text-slate-300" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么用",
      cards: [
        { title: "认知避坑", text: "别指望靠“小而美”的算法在通用领域打赢“大而强”的规模。" },
        { title: "借力打力", text: "利用大厂 Scale 出来的成果，在垂直领域做精细化，而不是去卷规模。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "警惕：边际效用递减", text: "当全世界的高质量数据都被喂光了，Scaling Law 还会继续生效吗？" },
        { type: 'thought', title: "反思：智慧的神圣感", text: "如果智能只是“量变引起质变”，那“智慧”是否变成了一场昂贵的数字工业？" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 新增类型：公众号封面
      badge: "公众号封面",
      title: "Scaling Law",
      subtitle: "AI 界的“大力出奇迹”，真的没有上限吗？",
      footer: "Serial No. 008 | AI黑话翻译局",
      visual: "scaling"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
  // 判断当前是否为宽屏模式
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#0f172a] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for Scaling Law (Gold/Slate for Industry/Value) */}
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-yellow-900/10 to-transparent"></div>
      
      {/* Rising Curve Background */}
      <svg className="absolute bottom-0 left-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 100 Q 50 100 100 0" stroke="url(#gold-gradient)" strokeWidth="2" fill="none" />
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#854d0e" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
        </defs>
      </svg>

      {/* Grid Pattern (Servers) */}
      <div className="absolute w-full h-full opacity-5" style={{ 
        backgroundImage: 'linear-gradient(0deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent)', 
        backgroundSize: '30px 30px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-slate-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-yellow-500 text-[#0f172a] shadow-yellow-500/30">
            <Tag size={10} className="text-yellow-950" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label */}
        <div className={`flex justify-between items-center text-[10px] text-slate-400 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
         
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-yellow-500' : 'w-1 bg-slate-700'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisuals = () => (
    <div className="relative z-10 flex items-end justify-center gap-2 h-32">
        <div className="w-4 bg-slate-700 h-10 rounded-t-sm animate-[pulse_3s_infinite]"></div>
        <div className="w-4 bg-slate-600 h-16 rounded-t-sm animate-[pulse_3s_infinite_0.5s]"></div>
        <div className="w-4 bg-slate-500 h-24 rounded-t-sm animate-[pulse_3s_infinite_1s]"></div>
        <div className="w-4 bg-yellow-600 h-32 rounded-t-sm shadow-[0_0_15px_rgba(202,138,4,0.5)] animate-[pulse_3s_infinite_1.5s]"></div>
        
        {/* The Curve */}
        <div className="absolute bottom-0 left-[-20px] right-[-20px] h-full">
          <TrendingUp size={140} className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)] absolute bottom-0 left-1/2 -translate-x-1/2" strokeWidth={1.5} />
        </div>
    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-10 group">
              <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full animate-pulse"></div>
              {renderVisuals()}
              {/* Floating Data Points */}
              <div className="absolute -top-4 right-0 text-yellow-200 animate-bounce delay-100 opacity-60"><Database size={16} /></div>
              <div className="absolute top-10 -left-8 text-slate-300 animate-bounce delay-300 opacity-60"><Server size={16} /></div>
            </div>

            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-yellow-100 to-slate-400 mb-6 tracking-tighter">
              {slide.title}
            </h1>
            <p className="text-lg text-yellow-100/80 font-light tracking-widest border-t border-b border-yellow-900/50 py-3 px-6 bg-yellow-900/10">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-slate-500 font-mono flex items-center gap-2">
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
                   <Fingerprint size={14} className="text-yellow-500"/>
                   <span className="text-sm text-yellow-500 font-mono tracking-[0.2em]">SERIAL NO. 008</span>
                </div>
                <h1 className="text-7xl font-bold text-white mb-6 tracking-tighter drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl text-slate-300 font-light border-l-4 border-yellow-500 pl-6 py-2 leading-relaxed bg-gradient-to-r from-yellow-900/20 to-transparent rounded-r-lg">
                  {slide.subtitle}
                </p>
             </div>

             {/* Right: Visuals */}
             <div className="w-[40%] flex items-center justify-center relative">
                <div className="scale-125 relative">
                   <div className="absolute inset-0 bg-yellow-500/20 blur-[60px] rounded-full animate-pulse"></div>
                   {renderVisuals()}
                   {/* Extra wide-mode decorations */}
                   <div className="absolute top-[-40px] right-[-20px] text-yellow-200 opacity-40"><Database size={24} /></div>
                   <div className="absolute bottom-[-20px] left-[-40px] text-slate-400 opacity-40"><Server size={24} /></div>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-yellow-500 mb-8 border-l-4 border-yellow-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">Term</div>
                 <div className="text-3xl font-bold text-white mb-1 leading-tight">{slide.title}</div>
              </div>
              
              {slide.content.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm text-slate-500 font-mono uppercase border-b border-slate-700 pb-1 w-fit">{item.label}</h3>
                  <p className="text-lg leading-relaxed text-slate-200 font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="flex-1 flex flex-col pt-4">
             <h2 className="text-3xl font-bold text-yellow-500 mb-8 border-l-4 border-yellow-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-yellow-900/10 border border-yellow-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-yellow-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-slate-300 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-slate-700"></div>
                </div>

                <div className="bg-slate-800/30 border border-slate-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-slate-200">{slide.bottom.title}</h3>
                   </div>
                   <p className="text-base text-slate-300 leading-relaxed">{slide.bottom.text}</p>
                </div>
             </div>
          </div>
        );

      case 'analogy':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <div className="flex justify-between items-end mb-8 border-b border-slate-700 pb-4">
               <h2 className="text-3xl font-bold text-yellow-500">{slide.header}</h2>
               <span className="text-sm text-slate-400">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-slate-800/50 p-4 rounded-lg flex flex-col items-center text-center opacity-70 border border-slate-700">
                    <div className="mb-2 text-slate-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-slate-300">{slide.left.title}</div>
                    <div className="text-xs text-slate-500">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-yellow-500 font-bold">vs</div>
                <div className="flex-1 bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                    <div className="mb-2 text-yellow-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-yellow-100">{slide.right.title}</div>
                    <div className="text-xs text-yellow-500/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-yellow-500">
                <p className="text-base leading-7 text-slate-200 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-yellow-500 mb-10 border-l-4 border-yellow-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-700"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-yellow-500"></div>
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
                <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#1e293b] p-6 rounded-2xl border border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#0f172a] px-2 text-xs font-mono text-slate-500 group-hover:text-yellow-500 transition-colors">
                               Law 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-yellow-100 mb-1">{card.title}</h3>
                           <p className="text-slate-400 text-sm">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-yellow-500 mb-8 border-l-4 border-yellow-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-950/20 border-red-500/20' : 'bg-slate-800/50 border-slate-600/50'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Brain className="text-slate-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-slate-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-yellow-500">
                     END OF ARCHIVE 008
                 </div>
              </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans">
      <div className={`flex flex-col items-center gap-6 w-full ${isWide ? 'max-w-4xl' : 'max-w-md'} transition-all duration-500`}>
        {/* Main Frame - changes shape based on slide type */}
        <div className={`w-full bg-[#0f172a] shadow-2xl border-4 border-slate-800 relative transition-all duration-500 ${
           isWide 
             ? 'aspect-[2.35/1] rounded-2xl p-2' // Wide Cover Mode
             : 'aspect-[3/4] rounded-[3rem] p-3' // Regular Phone Mode
        }`}>
           <div className={`w-full h-full overflow-hidden bg-[#0f172a] ${isWide ? 'rounded-xl' : 'rounded-[2.2rem]'}`}>
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

export default Archive008;