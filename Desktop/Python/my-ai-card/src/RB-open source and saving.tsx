import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid, Maximize2 } from 'lucide-react';

const App = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [viewMode, setViewMode] = useState('single');

  const posterData = [
    {
      id: "01",
      titleTop: "你的",
      highlight: "开源节流",
      titleBottom: "都是假的",
      subtitle: "99%的人都理解错了",
      type: "cover"
    },
    {
      id: "02",
      intro: "之前写了《同一架飞机票价差3倍》，很多人说没想到信息差这么大",
      quote: "你拥有的不是钱，是可以交易的时间",
      definitions: [
        { label: "开源", desc: "让单位时间更值钱" },
        { label: "节流", desc: "防止时间价值被摧毁" }
      ],
      type: "content"
    },
    {
      id: "03",
      tag: "误区",
      title: ["你以为在省钱", "其实在亏钱"],
      box: {
        title: "花3小时比价省50块",
        result: "= 时薪16.7元",
      },
      footer: "月入6000（时薪37.5元）就是亏的",
      type: "calculation"
    },
    {
      id: "04",
      tag: "反常识",
      title: ["有些花钱", "是最好的节流"],
      flow: [
        { label: "月入2万的人", type: "text" },
        { label: "↓", type: "arrow" },
        { label: "一场大病", type: "text" },
        { label: "↓", type: "arrow" },
        { label: "70万", type: "highlight", sub: "(相当于3年不吃不喝)" }
      ],
      solution: "用每年几千块对冲百万级风险",
      type: "flow"
    },
    {
      id: "05",
      main: ["财富不是", "攒得慢"],
      highlight: "是漏得快",
      sub: "真正的节流：防止失血",
      type: "golden-quote"
    },
    {
      id: "06",
      tag: "误区",
      title: ["早期最大的开源", "不是搞副业"],
      comparison: [
        { title: "接私单", value: "月入10000" },
        { title: "VS", type: "vs" },
        { title: "专注主业", value: "月入15000" }
      ],
      footer: "一年亏6万",
      type: "compare"
    },
    {
      id: "07",
      tag: "工具",
      title: "简单判断标准",
      formula: "时薪 = 月收入 ÷ 160",
      questions: [
        "省钱行为的时间成本超过我的时薪吗？",
        "花钱行为能提升未来时薪吗？",
        "赚钱行为时薪高于主业时薪吗？"
      ],
      type: "tool"
    },
    {
      id: "08",
      series: "财富真相手册",
      desc: "这是第一篇",
      previews: [
        "节流篇：真正有效的节流策略",
        "开源篇：如何提升时间价值",
        "实战篇：不同人生阶段的打法"
      ],
      cta: "先关注，慢慢聊 ☕",
      type: "outro"
    }
  ];

  const PosterCard = ({ data, index }) => {
    const baseStyle = {
      backgroundColor: '#1a2332',
      color: 'white',
      width: '100%',
      aspectRatio: '3/4',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      padding: '10% 10%',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    };

    const renderContent = () => {
      switch (data.type) {
        case 'cover':
          return (
            <div className="flex flex-col h-full justify-center">
              <div className="space-y-4 mb-10">
                <h1 className="text-5xl font-black leading-tight">
                  {data.titleTop}
                  <span className="text-[#FFD700] ml-2 underline decoration-4 underline-offset-8">{data.highlight}</span>
                </h1>
                <h1 className="text-5xl font-black leading-tight">{data.titleBottom}</h1>
              </div>
              <div className="text-2xl font-bold text-[#FFD700]/90 tracking-widest bg-[#FFD700]/10 py-2 px-4 inline-block self-start rounded">
                {data.subtitle}
              </div>
            </div>
          );
        case 'content':
          return (
            <div className="flex flex-col h-full pt-10">
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">{data.intro}</p>
              <div className="h-1 bg-[#FFD700] w-12 mb-10"></div>
              <h2 className="text-3xl font-bold mb-10 leading-snug">
                你拥有的不是钱，是可以交易的<span className="text-[#FFD700]">时间</span>
              </h2>
              <div className="space-y-8">
                {data.definitions.map((item, i) => (
                  <div key={i} className="flex flex-col border-l-2 border-slate-700 pl-4">
                    <span className="text-[#FFD700] text-sm font-bold mb-1">{item.label}</span>
                    <span className="text-xl font-medium">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        case 'calculation':
          return (
             <div className="flex flex-col h-full pt-10">
              <div className="mb-4">
                <span className="bg-slate-700 px-2 py-1 text-xs rounded text-slate-200">[{data.tag}]</span>
              </div>
              <div className="mb-10 space-y-1">
                {data.title.map((line, i) => (
                  <h2 key={i} className="text-4xl font-bold">{line}</h2>
                ))}
              </div>
              <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-xl mb-10">
                <p className="text-base mb-3 text-slate-300">{data.box.title}</p>
                <p className="text-3xl font-black text-[#FFD700]">{data.box.result}</p>
              </div>
              <p className="text-lg text-slate-400 italic">“{data.footer}”</p>
            </div>
          );
        case 'flow':
          return (
            <div className="flex flex-col h-full pt-6">
              <div className="mb-3">
                <span className="bg-slate-700 px-2 py-1 text-xs rounded text-slate-200">[{data.tag}]</span>
              </div>
              <div className="mb-6">
                {data.title.map((line, i) => (
                  <h2 key={i} className="text-3xl font-bold leading-tight">{line}</h2>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center flex-1 space-y-3 py-2">
                {data.flow.map((item, i) => (
                  <div key={i} className="text-center">
                    {item.type === 'text' && <span className="text-lg text-slate-300">{item.label}</span>}
                    {item.type === 'arrow' && <span className="text-xl text-slate-600 font-bold leading-none">{item.label}</span>}
                    {item.type === 'highlight' && (
                      <div className="flex flex-col items-center">
                        <span className="text-7xl font-black text-[#FFD700] leading-none">{item.label}</span>
                        <span className="text-xs text-slate-500 mt-2">{item.sub}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="h-px bg-slate-700/50 w-full mb-4"></div>
              <p className="text-base font-bold text-center text-slate-200 bg-white/5 py-3 rounded-lg border border-white/10">
                {data.solution}
              </p>
            </div>
          );
        case 'golden-quote':
          return (
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="space-y-1 mb-10">
                {data.main.map((line, i) => (
                  <h1 key={i} className="text-6xl font-black tracking-tighter">{line}</h1>
                ))}
                <h1 className="text-7xl font-black text-[#FFD700] pt-4 tracking-tighter">{data.highlight}</h1>
              </div>
              <div className="text-lg text-slate-400 border-t border-slate-800 pt-8 px-8">
                {data.sub}
              </div>
            </div>
          );
        case 'compare':
          return (
            <div className="flex flex-col h-full pt-10">
              <div className="mb-4">
                <span className="bg-slate-700 px-2 py-1 text-xs rounded text-slate-200">[{data.tag}]</span>
              </div>
              <div className="mb-8">
                {data.title.map((line, i) => (
                  <h2 key={i} className="text-3xl font-bold">{line}</h2>
                ))}
              </div>
              {/* Content shifted up by reducing margin and using justify-start */}
              <div className="flex-1 flex flex-col justify-start pt-4">
                <div className="bg-slate-800/60 border border-slate-700 p-6 rounded-2xl flex flex-col items-center gap-4">
                  <div className="text-center">
                    <div className="text-slate-500 text-xs mb-1 uppercase tracking-widest">{data.comparison[0].title}</div>
                    <div className="text-2xl font-bold">{data.comparison[0].value}</div>
                  </div>
                  <div className="text-[#FFD700] text-2xl font-black italic opacity-50">VS</div>
                  <div className="text-center">
                    <div className="text-slate-500 text-xs mb-1 uppercase tracking-widest">{data.comparison[2].title}</div>
                    <div className="text-2xl font-bold text-green-400">{data.comparison[2].value}</div>
                  </div>
                </div>
                <div className="mt-10 text-center">
                  <div className="text-slate-500 text-sm mb-2">最终差距</div>
                  <div className="text-5xl font-black text-[#FFD700]">{data.footer}</div>
                </div>
              </div>
            </div>
          );
        case 'tool':
          return (
            <div className="flex flex-col h-full pt-10">
              <div className="mb-4">
                <span className="bg-slate-700 px-2 py-1 text-xs rounded text-slate-200">[{data.tag}]</span>
              </div>
              <h2 className="mb-8 text-3xl font-bold">{data.title}</h2>
              <div className="bg-[#FFD700] text-[#1a2332] py-4 px-6 rounded-xl mb-10 text-center shadow-lg">
                <span className="text-xl font-black">{data.formula}</span>
              </div>
              <p className="text-slate-400 mb-6 font-bold flex items-center gap-2">
                问自己3个问题：
              </p>
              <div className="space-y-6">
                {data.questions.map((q, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-700 text-[#FFD700] text-xs font-bold flex items-center justify-center">{i+1}</span>
                    <p className="text-lg leading-snug text-slate-200">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        case 'outro':
          return (
            <div className="flex flex-col h-full justify-center">
              <div className="mb-2">
                <span className="text-[#FFD700] font-black text-sm tracking-[0.3em] uppercase">Coming Soon</span>
              </div>
              <h2 className="text-4xl font-black mb-2">{data.series}</h2>
              <p className="text-slate-500 mb-8">{data.desc}</p>
              <div className="space-y-6 mb-12">
                {data.previews.map((text, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]"></div>
                    <span className="text-lg font-medium text-slate-300">{text}</span>
                  </div>
                ))}
              </div>
              <div className="h-px bg-slate-800 w-full mb-10"></div>
              <div className="text-2xl font-bold text-[#FFD700] flex items-center gap-3">
                {data.cta}
              </div>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div style={baseStyle}>
        {/* 全局右上角标签 */}
        <div className="absolute top-8 right-10 text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase">
          财富真相手册
        </div>
        
        {/* 内容区 */}
        {renderContent()}

        {/* 全局右下角页码 */}
        <div className="absolute bottom-8 right-10 text-slate-600 text-[10px] font-mono opacity-50">
          {index + 1} / 8
        </div>
      </div>
    );
  };

  const next = () => setCurrentIdx((prev) => (prev + 1) % posterData.length);
  const prev = () => setCurrentIdx((prev) => (prev - 1 + posterData.length) % posterData.length);

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col gap-6">
        
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-slate-800 italic">小红书配图方案 V2.0</h1>
            <p className="text-slate-400 text-xs">已优化：文字排版、防溢出、页码显示</p>
          </div>
          <div className="flex bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            <button onClick={() => setViewMode('single')} className={`p-2 ${viewMode === 'single' ? 'bg-slate-100 text-blue-600' : 'text-slate-400'}`}><Maximize2 size={18} /></button>
            <button onClick={() => setViewMode('grid')} className={`p-2 ${viewMode === 'grid' ? 'bg-slate-100 text-blue-600' : 'text-slate-400'}`}><LayoutGrid size={18} /></button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          {viewMode === 'single' ? (
            <div className="relative flex items-center gap-6 w-full justify-center">
              <button onClick={prev} className="p-3 rounded-full bg-white shadow-lg hover:scale-110 transition-transform text-slate-600"><ChevronLeft size={24} /></button>
              <div className="w-full max-w-[420px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-3xl overflow-hidden border-[12px] border-white ring-1 ring-slate-200">
                <PosterCard data={posterData[currentIdx]} index={currentIdx} />
              </div>
              <button onClick={next} className="p-3 rounded-full bg-white shadow-lg hover:scale-110 transition-transform text-slate-600"><ChevronRight size={24} /></button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {posterData.map((data, i) => (
                <div key={i} className="cursor-pointer group relative" onClick={() => { setViewMode('single'); setCurrentIdx(i); }}>
                  <div className="rounded-xl overflow-hidden border-4 border-white shadow-md group-hover:shadow-xl transition-all">
                    <PosterCard data={data} index={i} />
                  </div>
                  <div className="mt-2 text-center text-[10px] text-slate-400 font-bold">{i+1} / 8</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;