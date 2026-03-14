import React, { useState } from 'react';
import { 
  Brain, Cpu, ChefHat, Zap, AlertTriangle, Layers, ChevronRight, ChevronLeft, 
  Fingerprint, Search, Tag, Keyboard, Sparkles, Rocket, MessageSquare, 
  Code2, Minimize2, Database, Soup, Heart, Gauge, Quote, Library, 
  BookOpen, FileText, RefreshCw, ScrollText, Link, Bot, Utensils, 
  AppWindow, Box, ListMusic, Wrench, Map, CheckCircle, PlayCircle,
  Settings, UserCog, Briefcase, Droplet, Binary, Factory, Coins, 
  Lock, Globe, HardDrive, Package
} from 'lucide-react';

const Archive007 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "思辨",
      title: "数据是新石油",
      subtitle: "你是资源的拥有者，还是被开采的矿床？",
      footer: "Serial No. 007 | AI黑话翻译局",
      visual: "oil"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Data is the New Oil",
      content: [
        { label: "提出者", text: "克莱夫·亨比 (Clive Humby) 于 2006 年首次提出，后由《经济学人》发扬光大。" },
        { label: "背景", text: "描述了在数字经济中，数据如何取代石油成为驱动工业和社会的最高战略资源。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "数据作为新型生产要素，必须经过提炼。正如原油需要炼化才能驱动机器，原始数据需通过 AI 算法“加工建模”，才能转化为商业智能。",
        icon: <Droplet className="w-6 h-6 text-gray-400" />
      },
      bottom: {
        title: "说人话",
        text: "“没提炼的代码就是废料”。石油埋在地下没用，数据躺在硬盘里也没用。只有被 AI 提炼过的数据，才能变成照亮未来的光。",
        icon: <Binary className="w-6 h-6 text-blue-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "乱跑的生猪", desc: "原始数据", icon: <Database size={24} /> },
      right: { title: "午餐肉罐头", desc: "AI 模型", icon: <Package size={24} /> },
      explanation: "原始数据就像农场里乱跑的猪，没法直接吃或卖高价。AI 是自动化加工线，负责抓取、处理、调味。最终产出的“午餐肉罐头”（模型）才是可开盖即食、大规模分发的价值核心。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "财富重构", text: "谁拥有最高质量的数据，谁就拥有了 AI 时代的话语权。", icon: <Coins className="text-amber-400" /> },
        { title: "循环动力", text: "石油不可再生，但数据越用越多。智能吸引用户，用户产生更多数据。", icon: <RefreshCw className="text-blue-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么用",
      cards: [
        { title: "数据资产化", text: "珍惜你的数字痕迹（笔记、代码、文章），它们是你个人 AI 的“私家油田”。" },
        { title: "高质量输入", text: "给你的 AI 喂精炼的干货，而非社交媒体的废料。垃圾进，垃圾出。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "警惕：数据霸权", text: "当数据成为石油，普通人是否沦为了被巨头开采的“人体矿床”？" },
        { type: 'thought', title: "反思：隐私荒漠", text: "石油驱动了工业文明但带来了污染。数据驱动了数字文明，是否也会带来“隐私荒漠”？" }
      ]
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge }: { children: React.ReactNode, index: number, badge?: string }) => (
    <div className="w-full h-full bg-[#020408] text-white overflow-hidden relative font-sans flex flex-col items-center shadow-2xl">
      {/* Background Effects - Customized for Data Oil (Black/Blue/Gold) */}
      <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[60%] bg-blue-900/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-amber-900/10 blur-[100px] rounded-full"></div>
      
      {/* Liquid/Flow Pattern */}
      <div className="absolute w-full h-full opacity-10" style={{ 
        backgroundImage: 'radial-gradient(circle at 50% 50%, #1e293b 0%, transparent 50%)', 
        backgroundSize: '60px 60px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-20 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-amber-500 text-[#050505] shadow-amber-500/30">
            <Tag size={10} className="text-amber-950" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="w-full h-full p-8 z-10 flex flex-col relative">
        {/* Top Label */}
        <div className="flex justify-between items-center text-[10px] text-gray-500 mb-6 tracking-widest uppercase">
          <span>AI Jargon Translation Bureau</span>
          <span>No. 007</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-blue-500' : 'w-1 bg-gray-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-10 group">
              {/* Visual Effect: Oil mixing with Digital */}
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full animate-pulse"></div>
              
              <div className="relative z-10 flex items-center justify-center">
                 {/* Oil Drop (Dark) */}
                 <div className="relative mr-[-15px]">
                    <div className="absolute inset-0 bg-black blur-md rounded-full"></div>
                    <Droplet size={80} className="text-gray-800 fill-black drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]" strokeWidth={1.5} />
                 </div>
                 
                 {/* Data Stream (Light) */}
                 <div className="relative ml-[-15px]">
                    <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-full"></div>
                    <Binary size={80} className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" strokeWidth={1.5} />
                 </div>

                 {/* Vortex Center */}
                 <div className="absolute w-full h-full border border-blue-500/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
                 <div className="absolute w-[80%] h-[80%] border border-gray-600/20 rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>
              </div>
            </div>

            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-blue-300 mb-6 tracking-tighter">
              {slide.title}
            </h1>
            <p className="text-lg text-gray-400 font-light tracking-widest border-t border-b border-gray-800 py-3 px-6 bg-black/30">
              {slide.subtitle}
            </p>
            <div className="mt-12 text-xs text-gray-600 font-mono flex items-center gap-2">
              <Fingerprint size={12} />
              {slide.footer}
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-blue-500 mb-8 border-l-4 border-blue-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-amber-500 mb-2 uppercase tracking-wider">Golden Sentence</div>
                 <div className="text-3xl font-bold text-white mb-1 leading-tight italic">"{slide.title}"</div>
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
             <h2 className="text-3xl font-bold text-blue-500 mb-8 border-l-4 border-blue-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-gray-900/50 border border-gray-700 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-gray-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-gray-400 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-gray-800"></div>
                </div>

                <div className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-blue-200">{slide.bottom.title}</h3>
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
               <h2 className="text-3xl font-bold text-blue-500">{slide.header}</h2>
               <span className="text-sm text-gray-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center opacity-60 border border-gray-800">
                    <div className="mb-2 text-gray-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-gray-300">{slide.left.title}</div>
                    <div className="text-xs text-gray-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-blue-500 font-bold">→</div>
                <div className="flex-1 bg-blue-950/30 border border-blue-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                    <div className="mb-2 text-amber-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-blue-100">{slide.right.title}</div>
                    <div className="text-xs text-blue-500/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-blue-500">
                <p className="text-base leading-7 text-gray-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-blue-500 mb-10 border-l-4 border-blue-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-blue-500"></div>
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
                <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0a0f1e] p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#050505] px-2 text-xs font-mono text-gray-600 group-hover:text-blue-500 transition-colors">
                               Asset 0{idx + 1}
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
                 <h2 className="text-3xl font-bold text-blue-500 mb-8 border-l-4 border-blue-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-950/20 border-red-500/20' : 'bg-gray-800/50 border-gray-600/50'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Lock className="text-gray-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-gray-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-blue-500">
                     END OF ARCHIVE 007
                 </div>
              </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center p-4 font-sans">
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <div className="w-full aspect-[3/4] bg-[#020408] rounded-[3rem] p-3 shadow-2xl border-4 border-gray-900 relative">
           <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-[#020408]">
              <CardWrapper index={currentSlide} badge={slides[currentSlide].badge}>
                {renderSlideContent(slides[currentSlide])}
              </CardWrapper>
           </div>
        </div>

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
          推荐使用系统截图工具保存图片<br/>
          ( 宽高比已优化为 3:4 )
        </div>
      </div>
    </div>
  );
};

export default Archive007;