import Archive001 from './Redbook-term-AI'
import Archive002 from './Redbook-term-VibeCoding'
import Archive003 from './Redbook-GS-Compression-is-Intelligence'
import Archive004 from './Redbook-term-RAG'
import Archive005 from './Redbook-term-LLM'
import Archive0099 from './physics-light'
import Archive006 from './Redbook-term-Agent'
import Archive007 from './Redbook-GS-dino'
import Archive008 from './Redbook-term-ScalingLaw'
import Archive009 from './Redbook-term-Token'
import Archive010 from './Redbook-term-prompt1'
import Archive011 from './Redbook-term-GPT'
import Archive012 from './Redbook-GS-AI is the new ecectricity'
import Archive013 from './Redbook-term-AGI'
import Archive014 from './Redbook-term-Transformer'
import Archive015 from './Redbook-term-ASI'
import Archive016 from './Redbook-GS-Attention is all you need'
import Archive017 from './Redbook-term-NLP'
import Archive018 from './Redbook-term-Agentic AI'
import Archive019 from './redbook-gs-AI wont replace you'
import Archive020 from './redbook-term-VLA'
import Archive021 from './redbook-term-embodied AI'
import Archive022 from './redbook-term-multimodel'
import Archive023 from './redbook-gs-last invention from human'
import Archive024 from './Redbook-term-MoE'
import Archive025 from './redbook-term-RLHF'
import Archive026 from './Redbook-term-spatial intelligence'
import Archive027 from './redbook-gs-wordsmith in dark'
import Archive028 from './redbook-gs-pre training'
import Archive029 from './redbook-term-post training'
import Archive030 from './redbook-term-stochtic parrots'
import Archive031 from './redbook-gs-demon or god'
import Archive032 from './redbook-term-skill' 
import Archive033 from './redbook-term-MCP'
import Archive034 from './redbook-term-Distillation'
import Archive035 from './redbook-GS-turing test'


import SnakeGame from './SnakeGame'
import Archive01000 from './RB-open source and saving'


import React, { useState } from 'react';
import { 
  FolderOpen, ChevronRight, CornerUpLeft, Terminal,
  Brain, Cpu, ChefHat, Zap, AlertTriangle, Layers, ChevronLeft, 
  Fingerprint, Search, Tag, Keyboard, Sparkles, Rocket, MessageSquare, 
  Code2
} from 'lucide-react';
import Archive034 from './redbook-term-Distillation'

// --- 本地项目配置指南 (VS Code) ---

// 1. 请在本地 App.tsx 的顶部添加这行代码来引入第001号档案：
// import Archive001 from './Archive001'; 

// 2. 如果您把 Archive002 也存为了单独文件，也请这样引入：
// import Archive002 from './Archive002';


// --- 组件定义区域 (仅供预览，本地请忽略) ---
// 为了让您能在这里直接预览，我把 Archive002 的代码暂时写在了下面。
// 在本地项目中，您可以删除下面的 Archive002 代码块，改为上面说的 import 方式。



// --- 主程序 (Launcher) ---
const App = () => {
  const [activeArchive, setActiveArchive] = useState<string | null>(null);

  const archives = [
    {
      id: '001',
      title: 'AI (人工智能)',
      desc: '数字神谕还是最强学徒？',
      // 在本地项目中，请取消注释下一行，并确保已在顶部 import Archive001
      // component: <Archive001 />,
      component: <Archive001/>,
      disabled: false // 在本地设置好 Archive001 后，请把这里改为 false
    },
    {
      id: '002',
      title: 'Vibe Coding (氛围编码)',
      desc: '不会写代码？凭感觉也能做App',
      component: <Archive002 />,
      disabled: false
    },
    {
      id: '003',
      title: 'LLM（大语言模型）',
      desc: '是文字接龙，更是人类文明的“终极烹饪机',
      component: <Archive005 />,
      disabled: false
    },
   
     {
      id: '004',
      title: 'Compression is Intelligence (压缩是智能)',
      desc: '读懂了这一句，就读懂了 AI 的灵魂。',
      component: <Archive003 />,
      disabled: false
    },
     {
      id: '005',
      title: 'RAG（检索增强生成）',
      desc: '为什么 AI 不再“一本正经地胡说八道”了？',
      component: <Archive004 />,
      disabled: false
    },
     {
      id: '006',
      title: 'Agent(智能体）',
      desc: '成像与教具别只把它当聊天机器人，它是你的第一个“数字员工”。',
      component: <Archive006 />,
      disabled: false
    },
     {
      id: '007',
      title: 'Data is new oil (数据是新的石油）',
      desc: '你是资源的拥有者，还是被开采的矿床？',
      component: <Archive007 />,
      disabled: false
    },
     {
      id: '008',
      title: 'Scaling Law (规模法则)',
      desc: 'AI 界的“大力出奇迹”，真的没有上限吗？',
      component: <Archive008 />,
      disabled: false
    },
       {
      id: '009',
      title: 'Token (令牌)',
      desc: 'AI 时代的“数字货币”，也是它阅读世界的最小单位。',
      component: <Archive009 />,
      disabled: false
    },
       {
      id: '010',
      title: 'Prompt (提示)',
      desc: '它是新时代的“咒语”，更是你调教 AI 的艺术。',
      component: <Archive010 />,
      disabled: false
    },
       {
      id: '011',
      title: 'GPT (生成式预训练模型)',
      desc: '它是聊天机器人，更是人类知识的“超级炼金术”。',
      component: <Archive011 />,
      disabled: false
    },
      {
      id: '012',
      title: 'AI is new the electricity',
      desc: 'AI 是新电能：它不会改变一个行业，它会重塑所有行业。',
      component: <Archive012 />,
      disabled: false
    },
       {
      id: '013',
      title: 'AGI (通用智能)',
      desc: '它是未来的“智能体”，更是人类文明的“终极目标”。',
      component: <Archive013 />,
      disabled: false
    },
      {
      id: '014',
      title: 'Transformer (变换器)',
      desc: '大模型的心脏，让机器学会了“划重点”。',
      component: <Archive014 />,
      disabled: false
    },
       {
      id: '015',
      title: 'ASI (人工超智能)',
      desc: '人工智能的终局，是上帝的诞生吗？',
      component: <Archive015 />,
      disabled: false
    },
      {
      id: '016',
      title: 'Attention is all you need',
      desc: '智能的本质，其实就是“划重点”的艺术。',
      component: <Archive016 />,
      disabled: false
    },
       {
      id: '017',
      title: 'NLP (自然语言处理)',
      desc: '自然语言处理，是让冷冰冰的机器“读懂”你的心。',
      component: <Archive017 />,
      disabled: false
    },
        {
      id: '018',
      title: 'Agentic AI (智能体 AI)',
      desc: '从工具到员工的跨越',
      component: <Archive018 />,
      disabled: false
    },
        {
      id: '019',
      title: 'AI won’t replace you (AI 不会取代你）',
      desc: 'AI 不会取代你，但那个“带电”的同类会。',
      component: <Archive019 />,
      disabled: false
    },
    {
      id: '020',
      title: 'VLA',
      desc: '看懂、听懂、并做对。AI 终于长出了“手脚”。',
      component: <Archive020 />,
      disabled: false
    },
     {
      id: '021',
      title: 'Embodied AI (Embodied AI)',
      desc: '具身智能，让 AI 从“聊天框”走进“现实世界”。',
      component: <Archive021 />,
      disabled: false
    },
          {
      id: '022',
      title: 'Multimodel AI (多模态 AI)',
      desc: 'AI 终于不再是“睁眼瞎”，它开始全方位感知世界。',
      component: <Archive022 />,
      disabled: false
    },
    {
      id: '023',
      title: 'Last Invention from Human (人类的最后发明）',
      desc: '当 AI 开始自我进化，人类将彻底“退休”吗？',
      component: <Archive023 />,
      disabled: false
    },
      {
      id: '024',
      title: 'MoE (混合专家模型)',
      desc: 'AI 模型的“超级大脑”，让不同任务有不同“专家”。',
      component: <Archive024 />,
      disabled: false
    },
      {
      id: '025',
      title: 'RLHF (强化学习与人类反馈）',
      desc: 'A给大模型立规矩，是 AI 变“聪明”的最后一公里。',
      component: <Archive025 />,
      disabled: false
    },
      {
      id: '026',
      title: 'Spatial Intelligence (空间智能）',
      desc: 'AI 终于看懂了 3D 世界，这才是它通往现实的“驾照”。',
      component: <Archive026 />,
      disabled: false
    },
      {
      id: '027',
      title: 'Wordsmith in Dark (暗语者）',
      desc: '它懂“光”的每一个字，却从未见过一次日出。',
      component: <Archive027 />,
      disabled: false
    },
     {
      id: '028',
      title: 'Pre-training (预训练）',
      desc: 'AI 的“寒窗十年”，吞下万卷书，才有了第一声啼哭。',
      component: <Archive028 />,
      disabled: false
    },
    {
      id: '029',
      title: 'Post-training (后训练）',
      desc: 'AI 的“成人礼”，从懂万物到懂人心。',
      component: <Archive029 />,
      disabled: false
    },
    {
      id: '030',
      title: 'Stochastic parrots (统计鹦鹉）',
      desc: 'AI 真的懂你在说什么吗？还是它只是个职业“接龙手”？',
      component: <Archive030 />,
      disabled: false
    },
    {
      id: '031',
      title: 'Demon or God (恶魔或上帝）',
      desc: '终极拷问：我们正在编写代码，还是在开启神话？',
      component: <Archive031 />,
      disabled: false
    },
    {
      id: '032',
      title: 'SKILL',
      desc: 'AI 的“数字乐高”，拼出你专属的万能助手。',
      component: <Archive032 />,
      disabled: false
    },
    {
      id: '033',
      title: 'MCP',
      desc: 'AI 界的“USB 接口”，终结碎落满地的数字孤岛。',
      component: <Archive033 />,
      disabled: false
    },
    {
      id: '034',
      title: 'Distillation',
      desc: '把万亿参数的智慧，装进你的手机里。',
      component: <Archive034 />,
      disabled: false
    },
    {
      id: '035',
      title: 'Turing Test',
      desc: '如果 AI 骗了你，它是不是就有了灵魂？',
      component: <Archive035 />,
      disabled: false
    },
    {
      id: '098',
      title: 'Snake (经典贪吃蛇)',
      desc: '经典模式：移动、吃食物、增长、碰撞结束。',
      component: <SnakeGame />,
      disabled: false
    },
     {
      id: '0099',
      title: '(凸镜与凹镜）',
      desc: '成像与教具',
      component: <Archive0099 />,
      disabled: false
    },
     {
      id: '01000',
      title: '开源与节流',
      desc: '财富真相局1',
      component: <Archive01000 />,
      disabled: false
    }
  ];

  if (activeArchive) {
    const target = archives.find(a => a.id === activeArchive);
    return (
      <div className="relative">
        <button 
          onClick={() => setActiveArchive(null)}
          className="fixed top-4 left-4 z-50 bg-black/80 text-white p-2 rounded-full border border-gray-700 hover:bg-gray-800 transition-all shadow-xl group"
          title="返回目录"
        >
          <CornerUpLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        {target?.component}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="mb-12 border-b border-gray-800 pb-6">
          <div className="flex items-center gap-3 mb-2 text-amber-500">
            <Terminal size={24} />
            <span className="font-mono text-sm tracking-[0.2em]">AI JARGON BUREAU</span>
          </div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            档案索引系统
          </h1>
          <p className="text-gray-500 mt-2">Select an archive to decrypt...</p>
        </div>

        <div className="space-y-4">
          {archives.map((archive) => (
            <div 
              key={archive.id}
              onClick={() => !archive.disabled && setActiveArchive(archive.id)}
              className={`
                group relative p-6 rounded-xl border border-gray-800 bg-[#0a0f1e] 
                transition-all duration-300
                ${archive.disabled 
                  ? 'opacity-50 cursor-not-allowed grayscale' 
                  : 'hover:border-amber-500/50 hover:bg-[#111629] cursor-pointer hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]'
                }
              `}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center font-mono text-xl font-bold
                    ${archive.disabled ? 'bg-gray-800 text-gray-600' : 'bg-blue-900/30 text-blue-400 group-hover:bg-amber-500 group-hover:text-black transition-colors'}
                  `}>
                    {archive.id}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors">
                      {archive.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 font-light">
                      {archive.desc}
                    </p>
                  </div>
                </div>
                <ChevronRight className={`text-gray-600 transition-transform duration-300 ${!archive.disabled && 'group-hover:translate-x-1 group-hover:text-amber-500'}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-gray-700 font-mono">
          SYSTEM STATUS: ONLINE <br/>
          WAITING FOR INPUT...
        </div>
      </div>
    </div>
  );
};

export default App;
