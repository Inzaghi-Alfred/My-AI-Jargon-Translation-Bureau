import React, { useState } from 'react';
import { 
  Brain, Cpu, ChefHat, Zap, AlertTriangle, Layers, ChevronRight, ChevronLeft, 
  Fingerprint, Search, Tag, Keyboard, Sparkles, Rocket, MessageSquare, 
  Code2, Minimize2, Database, Soup, Heart, Gauge, Quote, Library, 
  BookOpen, FileText, RefreshCw, ScrollText, Link
} from 'lucide-react';

const Archive004 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'cover',
      badge: "概念",
      title: "RAG",
      subtitle: "为什么 AI 不再“一本正经地胡说八道”了？",
      footer: "Serial No. 005 | AI黑话翻译局",
      visual: "rag"
    },
    {
      id: 2,
      type: 'content',
      header: "身份与溯源",
      title: "Retrieval-Augmented Generation",
      content: [
        { label: "中文语境", text: "检索增强生成。" },
        { label: "出处", text: "2020 年由 Facebook AI Research (FAIR) 团队在论文中首次提出。" }
      ]
    },
    {
      id: 3,
      type: 'split',
      header: "双重定义",
      top: {
        title: "标准解释",
        text: "一种结合检索与生成的架构。在回答前，先从外部可靠知识库中检索相关信息，再喂给大模型参考，从而生成更准确的内容。",
        icon: <Database className="w-6 h-6 text-emerald-300" />
      },
      bottom: {
        title: "说人话",
        text: "“开卷考试”。原本 AI 只能靠“背书”记忆回答（容易记错）；RAG 让 AI 先翻一翻你给它的“参考资料”，看着资料再回答。",
        icon: <BookOpen className="w-6 h-6 text-indigo-400" />
      }
    },
    {
      id: 4,
      type: 'analogy',
      header: "生活类比",
      subHeader: "烹饪联动 🍳",
      left: { title: "全凭记忆", desc: "纯 AI 模型", icon: <Brain size={24} /> },
      right: { title: "现翻菜谱", desc: "RAG 模式", icon: <ScrollText size={24} /> },
      explanation: "纯 AI 像老厨师，凭记忆炒菜偶尔会记混配方。RAG 就像灶台边放了本《绝密调味手册》。每次放料前先翻一下（检索），确定“加5克糖”再动手（生成）。手册更新了，厨师照着做就行，不用重新学。"
    },
    {
      id: 5,
      type: 'list',
      header: "为什么重要",
      items: [
        { title: "解决幻觉", text: "强制 AI “说话要有依据”，极大减少了 AI 编造事实的情况。", icon: <Zap className="text-emerald-300" /> },
        { title: "知识实时性", text: "只要更新外部文档，AI 就能掌握最新信息（如昨日财报），无需重新训练模型。", icon: <RefreshCw className="text-indigo-400" /> }
      ]
    },
    {
      id: 6,
      type: 'cards',
      header: "应该怎么用",
      cards: [
        { title: "构建知识库", text: "把你的文档、笔记、PDF 喂给 RAG 系统，打造私人助手。" },
        { title: "搜索增强", text: "配合 AI 搜索引擎（如 Perplexity）使用，让答案带上引用链接。" }
      ]
    },
    {
      id: 7,
      type: 'warning',
      header: "注意与反思",
      items: [
        { type: 'alert', title: "警惕：垃圾进垃圾出", text: "如果外部资料本身是错的，AI 即使看了资料也会给出错误的答案。" },
        { type: 'thought', title: "反思：记忆的价值", text: "如果智能可以靠“外挂”获得，那么“深度记忆”在未来是否还会像以前那样重要？" }
      ]
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Common Layout Wrapper
  const CardWrapper = ({ children, index, badge }: { children: React.ReactNode, index: number, badge?: string }) => (
    <div className="w-full h-full bg-[#050505] text-white overflow-hidden relative font-sans flex flex-col items-center shadow-2xl">
      {/* Background Effects - Customized for RAG (Emerald/Indigo for Knowledge/Trust) */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[40%] bg-emerald-900/20 blur-[90px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[40%] bg-indigo-900/20 blur-[90px] rounded-full"></div>
      
      {/* Grid Pattern */}
      <div className="absolute w-full h-full opacity-5" style={{ 
        backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }}></div>
      
      {/* Decoration Lines */}
      <div className="absolute top-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      <div className="absolute bottom-6 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

      {/* Dynamic Badge */}
      {badge && (
        <div className="absolute top-20 right-0 z-30">
          <div className="flex items-center gap-1 pl-3 pr-2 py-1.5 rounded-l-full font-bold text-xs tracking-widest shadow-lg bg-emerald-500 text-[#050505] shadow-emerald-500/30">
            <Tag size={10} className="text-emerald-900" fill="currentColor" />
            {badge}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="w-full h-full p-8 z-10 flex flex-col relative">
        {/* Top Label */}
        <div className="flex justify-between items-center text-[10px] text-gray-500 mb-6 tracking-widest uppercase">
          <span>AI Jargon Translation Bureau</span>
          <span>No. 005</span>
        </div>

        {children}

        {/* Page Indicator */}
        <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-emerald-500' : 'w-1 bg-gray-800'}`}></div>
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
              {/* RAG Visual Effect: Brain connected to Library */}
              <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full animate-pulse"></div>
              
              <div className="relative z-10 flex items-center justify-center">
                 <Brain size={100} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mr-[-20px] z-10" strokeWidth={1} />
                 <Library size={80} className="text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] ml-[-10px] opacity-80" strokeWidth={1} />
              </div>

              {/* Connecting Data Streams */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 blur-sm rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 blur-sm -rotate-45"></div>
              
              {/* Floating Docs */}
              <FileText className="absolute -top-4 right-0 text-indigo-300 animate-bounce delay-75 opacity-60" size={20} />
              <Search className="absolute bottom-0 -left-4 text-emerald-300 animate-pulse delay-100 opacity-60" size={24} />
            </div>

            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-emerald-100 to-indigo-200 mb-6 tracking-tighter">
              {slide.title}
            </h1>
            <p className="text-lg text-emerald-200/80 font-light tracking-widest border-t border-b border-emerald-900/50 py-3 px-6 bg-emerald-900/10">
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
            <h2 className="text-3xl font-bold text-emerald-500 mb-8 border-l-4 border-emerald-500 pl-4">{slide.header}</h2>
            <div className="flex-1 space-y-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                 <div className="text-xs text-indigo-400 mb-2 uppercase tracking-wider">Term</div>
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
             <h2 className="text-3xl font-bold text-emerald-500 mb-8 border-l-4 border-emerald-500 pl-4">{slide.header}</h2>
             <div className="space-y-6">
                <div className="bg-emerald-900/10 border border-emerald-500/20 p-6 rounded-2xl relative overflow-hidden">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.top.icon}
                      <h3 className="text-xl font-bold text-emerald-200">{slide.top.title}</h3>
                   </div>
                   <p className="text-sm text-gray-400 leading-relaxed">{slide.top.text}</p>
                </div>

                <div className="flex justify-center">
                    <div className="h-8 w-[1px] bg-gray-800"></div>
                </div>

                <div className="bg-indigo-900/10 border border-indigo-500/20 p-6 rounded-2xl">
                   <div className="flex items-center gap-3 mb-3">
                      {slide.bottom.icon}
                      <h3 className="text-xl font-bold text-indigo-200">{slide.bottom.title}</h3>
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
               <h2 className="text-3xl font-bold text-emerald-500">{slide.header}</h2>
               <span className="text-sm text-gray-500">{slide.subHeader}</span>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-900 p-4 rounded-lg flex flex-col items-center text-center opacity-60 border border-gray-800">
                    <div className="mb-2 text-gray-400">{slide.left.icon}</div>
                    <div className="font-bold text-sm text-gray-300">{slide.left.title}</div>
                    <div className="text-xs text-gray-600">{slide.left.desc}</div>
                </div>
                <div className="flex items-center text-emerald-500 font-bold">vs</div>
                <div className="flex-1 bg-emerald-950/30 border border-emerald-500/30 p-4 rounded-lg flex flex-col items-center text-center shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    <div className="mb-2 text-emerald-400">{slide.right.icon}</div>
                    <div className="font-bold text-sm text-emerald-100">{slide.right.title}</div>
                    <div className="text-xs text-emerald-500/80">{slide.right.desc}</div>
                </div>
            </div>

            <div className="bg-white/5 p-5 rounded-xl border-l-2 border-emerald-500">
                <p className="text-base leading-7 text-gray-300 text-justify">
                    {slide.explanation}
                </p>
            </div>
          </div>
        );

      case 'list':
        return (
            <div className="flex-1 flex flex-col pt-4">
               <h2 className="text-3xl font-bold text-emerald-500 mb-10 border-l-4 border-emerald-500 pl-4">{slide.header}</h2>
               <div className="space-y-8">
                  {slide.items.map((item: any, idx: number) => (
                      <div key={idx} className="relative pl-4">
                          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-800"></div>
                          <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-emerald-500"></div>
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
                <h2 className="text-3xl font-bold text-emerald-500 mb-8 text-center">{slide.header}</h2>
                <div className="flex flex-col gap-4">
                   {slide.cards.map((card: any, idx: number) => (
                       <div key={idx} className="group relative bg-[#0a0f1e] p-6 rounded-2xl border border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
                           <div className="absolute -top-3 left-6 bg-[#050505] px-2 text-xs font-mono text-gray-600 group-hover:text-emerald-500 transition-colors">
                               Usage 0{idx + 1}
                           </div>
                           <h3 className="text-lg font-bold text-emerald-100 mb-1">{card.title}</h3>
                           <p className="text-gray-400 text-sm">{card.text}</p>
                       </div>
                   ))}
                </div>
             </div>
         );

      case 'warning':
          return (
              <div className="flex-1 flex flex-col pt-4">
                 <h2 className="text-3xl font-bold text-emerald-500 mb-8 border-l-4 border-emerald-500 pl-4">{slide.header}</h2>
                 <div className="space-y-6">
                    {slide.items.map((item: any, idx: number) => (
                        <div key={idx} className={`p-6 rounded-xl border ${item.type === 'alert' ? 'bg-red-950/20 border-red-500/20' : 'bg-indigo-950/20 border-indigo-500/20'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                {item.type === 'alert' ? <AlertTriangle className="text-red-400" /> : <Brain className="text-indigo-400" />}
                                <h3 className={`text-lg font-bold ${item.type === 'alert' ? 'text-red-200' : 'text-indigo-200'}`}>{item.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                 </div>
                 <div className="mt-auto mb-8 text-center opacity-30 text-[10px] font-mono tracking-[0.5em] text-emerald-500">
                     END OF ARCHIVE 004
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
        <div className="w-full aspect-[3/4] bg-[#050505] rounded-[3rem] p-3 shadow-2xl border-4 border-gray-900 relative">
           <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-black">
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

export default Archive004;