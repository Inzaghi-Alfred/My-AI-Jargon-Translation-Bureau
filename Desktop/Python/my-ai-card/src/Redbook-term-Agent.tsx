import React, { useState } from 'react';
import { 
  Brain, Cpu, ChefHat, Zap, AlertTriangle, Layers, ChevronRight, ChevronLeft, 
  Fingerprint, Search, Tag, Keyboard, Sparkles, Rocket, MessageSquare, 
  Code2, Minimize2, Database, Soup, Heart, Gauge, Quote, Library, 
  BookOpen, FileText, RefreshCw, ScrollText, Link, Bot, Utensils, 
  AppWindow, Box, ListMusic, Wrench, Map, CheckCircle, PlayCircle,
  Settings, UserCog, Briefcase
} from 'lucide-react';

const Archive006 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "Agent",
      subtitle: "别只把它当聊天机器人，它是你的第一个“数字员工”。",
      footer: "Serial No. 006 | AI黑话翻译局",
      visual: "agent"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "AI Agent",
      content: [
        { label: "中文语境", text: "智能体、代理、数字员工。" },
        { label: "出处", text: "概念源于计算机科学中的“代理”，2023 年随着 AutoGPT 的爆火，正式成为 AI 应用层的主角。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "以大语言模型（LLM）为核心引擎，具备规划（Planning）、记忆（Memory）和工具使用（Tool Use）能力的系统，能自主拆解目标并完成任务。",
        icon: <Brain className="w-6 h-6 text-sky-300" />
      },
      bottom: {
        title: "说人话",
        text: "“有手有脚的 AI”。LLM 负责“想”和“说”，Agent 负责“做”。给它一个终点（如订机票），它自己查航班、比价、填表，不需要你一步步教。",
        icon: <Wrench className="w-6 h-6 text-rose-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "全能料理机", desc: "LLM (大模型)", icon: <Bot size={24} /> },
      right: { title: "雇佣大厨", desc: "Agent (智能体)", icon: <UserCog size={24} /> },
      explanation: "LLM 是神级料理机，能切能煮，但得你盯着按按钮。Agent 是雇佣大厨，他带着料理机上门。你只说“想吃川菜”，他自己查冰箱（记忆）、买菜（工具）、定流程（规划），最后端菜上桌。你只需等吃。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "从对话到闭环", text: "AI 不再只是回答问题，而是开始独立替你完成完整的工作流（Action）。", icon: <PlayCircle className="text-sky-300" /> },
        { title: "复杂任务处理", text: "它能处理那些需要跨 App、跨平台、多步骤的繁琐事务。", icon: <Layers className="text-rose-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么用",
      cards: [
        { title: "明确目标 (Goal)", text: "练习下达“结果导向”的指令，而不是琐碎的“步骤导向”。" },
        { title: "工具集成", text: "接入邮箱、日历、API，给它“工作的权限”和“手脚”。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "警惕：幻觉行动", text: "Agent 可能会为了完成任务而瞎操作，关键步骤必须保留人类审核（Human-in-the-loop）。" },
        { type: 'thought', title: "反思：意志的价值", text: "当“做事”的成本降为零，人类唯一的价值，就是决定“做什么”的意志。" }
      ]
    },
    {
      id: 8,
      type: 'wide-cover', // 新增类型：公众号封面
      badge: "公众号封面",
      title: "Agent",
      subtitle: "别只把它当聊天机器人，它是你的第一个“数字员工”。",
      footer: "Serial No. 006 | AI黑话翻译局",
      visual: "agent"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // 判断当前是否为宽屏模式
  const isWide = slides[currentSlide].type === 'wide-cover';

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge, isWideMode }: { children: React.ReactNode, index: number, badge?: string, isWideMode?: boolean }) => (
    <div className={`w-full h-full bg-[#050505] text-white overflow-hidden relative font-sans flex flex-col ${isWideMode ? 'justify-center' : 'items-center'} shadow-2xl`}>
      {/* Background Effects - Customized for Agent (Sky Blue/Rose for Planning/Action) */}
      <div className="absolute top-[-20%] right-[-20%] w-[70%] h-[50%] bg-sky-900/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-20%] left-[-20%] w-[70%] h-[50%] bg-rose-900/20 blur-[100px] rounded-full"></div>
      
      {/* Circuit Pattern */}
      <div className="absolute w-full h-full opacity-5" style={{ 
        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
        backgroundSize: '30px 30px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent left-1/2 -translate-x-1/2"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-8 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-sky-500 text-[#050505] shadow-sky-500/30">
            <Tag size={10} className="text-sky-950" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className={`w-full h-full z-10 flex flex-col relative ${isWideMode ? 'p-12' : 'p-8'}`}>
        {/* Top Label */}
        <div className={`flex justify-between items-center text-[10px] text-gray-500 tracking-widest uppercase ${isWideMode ? 'absolute top-8 left-12 right-12' : 'mb-6'}`}>
          <span>AI Jargon Translation Bureau</span>
          <span>No. 006</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-sky-500' : 'w-1 bg-gray-800'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );

  // 提取视觉组件，方便复用
  const renderVisuals = () => (
    <div className="relative z-10 flex items-center justify-center">
        {/* Central Brain */}
        <div className="relative bg-gray-900 p-4 rounded-full border border-sky-500/50 shadow-[0_0_30px_rgba(14,165,233,0.3)] z-20">
        <Brain size={56} className="text-sky-300" />
        </div>
        
        {/* Floating "Hands" / Tools */}
        <div className="absolute top-[-40px] right-[-30px] bg-rose-900/30 p-2 rounded-lg border border-rose-500/30 animate-bounce delay-100">
        <Wrench size={20} className="text-rose-400" />
        </div>
        <div className="absolute bottom-[-30px] left-[-40px] bg-rose-900/30 p-2 rounded-lg border border-rose-500/30 animate-bounce delay-300">
        <Settings size={20} className="text-rose-400" />
        </div>
        <div className="absolute top-[20px] left-[-50px] bg-sky-900/30 p-2 rounded-lg border border-sky-500/30 animate-pulse delay-200">
        <Map size={20} className="text-sky-400" />
        </div>

        {/* Connecting Lines */}
        <div className="absolute w-[120%] h-[120%] border border-sky-500/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
    </div>
  );

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex-1 flex flex-col justify-center items-center text-center relative">
            <div className="relative mb-10 group">
              <div className="absolute inset-0 bg-sky-500/10 blur-3xl rounded-full animate-pulse"></div>
              {renderVisuals()}
            </div>

            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-sky-100 to-rose-200 mb-6 tracking-tighter">
              {slide.title}
            </h1>
            <p className="text-lg text-sky-200/80 font-light tracking-widest border-t border-b border-sky-900/50 py-3 px-6 bg-sky-900/10">
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
                   <Fingerprint size={14} className="text-sky-500"/>
                   <span className="text-sm text-sky-500 font-mono tracking-[0.2em]">SERIAL NO. 006</span>
                </div>
                <h1 className="text-7xl font-bold text-white mb-6 tracking-tighter drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl text-sky-200 font-light border-l-4 border-sky-500 pl-6 py-2 leading-relaxed bg-gradient-to-r from-sky-900/20 to-transparent rounded-r-lg">
                  {slide.subtitle}
                </p>
             </div>

             {/* Right: Visuals */}
             <div className="w-[40%] flex items-center justify-center relative">
                <div className="scale-125 relative">
                   <div className="absolute inset-0 bg-sky-500/20 blur-[60px] rounded-full animate-pulse"></div>
                   {renderVisuals()}
                   {/* Extra wide-mode decorations */}
                   <div className="absolute top-[-50px] right-[-30px] text-rose-300 opacity-40 animate-pulse"><Briefcase size={24} /></div>
                   <div className="absolute bottom-[-30px] left-[-40px] text-sky-400 opacity-40 animate-bounce"><UserCog size={24} /></div>
                </div>
             </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex-1 flex flex-col pt-4">
            <h2 className="text-3xl font-bold text-sky-500 mb-8 border-l-4 border-sky-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-rose-400 mb-2 uppercase tracking-wider">Term</div>
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
             <h2 className="text-3xl font-bold text-sky-500 mb-8 border-l-4 border-sky-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-sky-900/10 border border-sky-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-sky-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-gray-400 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-gray-800"></div>
                </div>

                <div className="bg-rose-900/10 border border-rose-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-rose-200">{slide.bottom.title}</h3>
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
               <h2 className="text-3xl font-bold text-sky-500">{slide.header}</h2>
               <span className="text-sm text-gray-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center opacity-60 border border-gray-800">
                    <div className="mb-2 text-gray-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-gray-300">{slide.left.title}</div>
                    <div className="text-xs text-gray-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-sky-500 font-bold">vs</div>
                <div className="flex-1 bg-sky-950/30 border border-sky-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(14,165,233,0.1)]">
                    <div className="mb-2 text-rose-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-sky-100">{slide.right.title}</div>
                    <div className="text-xs text-sky-500/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-sky-500">
                <p className="text-base leading-7 text-gray-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-sky-500 mb-10 border-l-4 border-sky-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-sky-500"></div>
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
                <h2 className="text-3xl font-bold text-sky-500 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0a0f1e] p-6 rounded-2xl border border-gray-800 hover:border-sky-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#050505] px-2 text-xs font-mono text-gray-600 group-hover:text-sky-500 transition-colors">
                               Cmd 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-sky-100 mb-1">{card.title}</h3>
                           <p className="text-gray-400 text-sm">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-sky-500 mb-8 border-l-4 border-sky-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-950/20 border-red-500/20' : 'bg-rose-950/20 border-rose-500/20'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Briefcase className="text-rose-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-rose-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-sky-500">
                     END OF ARCHIVE 006
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

export default Archive006;