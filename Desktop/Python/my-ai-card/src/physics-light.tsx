import React from 'react';

const LensDiagrams = () => {
  return (
    <div className="flex flex-col gap-12 p-6 bg-white rounded-xl shadow-lg font-sans max-w-5xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">透镜原理全掌握</h2>
        <p className="text-gray-500">从基础焦点到进阶成像要素</p>
      </div>

      {/* --- Part 1: Basic --- */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">1</div>
          <h3 className="text-2xl font-bold text-gray-800">基础篇：平行光与焦点</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Convex - Parallel */}
          <div className="border border-blue-100 rounded-2xl p-4 bg-blue-50/20 shadow-sm">
            <h4 className="text-lg font-bold text-blue-700 mb-3 text-center">凸透镜的实焦点</h4>
            <div className="bg-white rounded-xl border border-blue-50 overflow-hidden h-56">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                <line x1="20" y1="100" x2="380" y2="100" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" />
                <path d="M200 40 Q230 100 200 160 Q170 100 200 40" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
                <circle cx="320" cy="100" r="3" fill="#1e40af" />
                <text x="315" y="125" fontSize="14" fontWeight="bold" fill="#1e40af">F (实焦点)</text>
                {/* Rays */}
                <line x1="20" y1="60" x2="200" y2="60" stroke="#ef4444" strokeWidth="2" />
                <line x1="200" y1="60" x2="320" y2="100" stroke="#ef4444" strokeWidth="2" />
                <line x1="20" y1="140" x2="200" y2="140" stroke="#ef4444" strokeWidth="2" />
                <line x1="200" y1="140" x2="320" y2="100" stroke="#ef4444" strokeWidth="2" />
                {/* Dimension f */}
                <line x1="200" y1="180" x2="320" y2="180" stroke="#1e40af" strokeWidth="1" />
                <line x1="200" y1="175" x2="200" y2="185" stroke="#1e40af" strokeWidth="1" />
                <line x1="320" y1="175" x2="320" y2="185" stroke="#1e40af" strokeWidth="1" />
                <text x="260" y="195" fontSize="12" fill="#1e40af" textAnchor="middle">焦距 f</text>
              </svg>
            </div>
          </div>

          {/* Concave - Parallel */}
          <div className="border border-purple-100 rounded-2xl p-4 bg-purple-50/20 shadow-sm">
            <h4 className="text-lg font-bold text-purple-700 mb-3 text-center">凹透镜的虚焦点</h4>
            <div className="bg-white rounded-xl border border-purple-50 overflow-hidden h-56">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                <line x1="20" y1="100" x2="380" y2="100" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" />
                <path d="M190 40 Q200 100 190 160 L210 160 Q200 100 210 40 Z" fill="#e9d5ff" stroke="#a855f7" strokeWidth="2" opacity="0.6" />
                <circle cx="100" cy="100" r="3" fill="#6b21a8" />
                <text x="80" y="125" fontSize="14" fontWeight="bold" fill="#6b21a8">F (虚焦点)</text>
                {/* Rays */}
                <line x1="20" y1="60" x2="200" y2="60" stroke="#ef4444" strokeWidth="2" />
                <line x1="200" y1="60" x2="350" y2="30" stroke="#ef4444" strokeWidth="2" />
                <line x1="100" y1="100" x2="200" y2="60" stroke="#ef4444" strokeWidth="1" strokeDasharray="3" />
                <line x1="20" y1="140" x2="200" y2="140" stroke="#ef4444" strokeWidth="2" />
                <line x1="200" y1="140" x2="350" y2="170" stroke="#ef4444" strokeWidth="2" />
                <line x1="100" y1="100" x2="200" y2="140" stroke="#ef4444" strokeWidth="1" strokeDasharray="3" />
                {/* Dimension f */}
                <line x1="100" y1="180" x2="200" y2="180" stroke="#6b21a8" strokeWidth="1" />
                <line x1="100" y1="175" x2="100" y2="185" stroke="#6b21a8" strokeWidth="1" />
                <line x1="200" y1="175" x2="200" y2="185" stroke="#6b21a8" strokeWidth="1" />
                <text x="150" y="195" fontSize="12" fill="#6b21a8" textAnchor="middle">焦距 f</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* --- Part 2: Advanced --- */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-xl">2</div>
          <h3 className="text-2xl font-bold text-gray-800">进阶篇：成像要素 (u 与 v)</h3>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {/* Convex Imaging */}
          <div className="border border-emerald-100 rounded-2xl p-6 bg-emerald-50/20 shadow-sm">
            <h4 className="text-lg font-bold text-emerald-800 mb-4">凸透镜成像：实物、实像、物距、像距</h4>
            <div className="bg-white rounded-xl border border-emerald-50 overflow-hidden h-64">
              <svg viewBox="0 0 600 200" className="w-full h-full">
                <line x1="20" y1="100" x2="580" y2="100" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" />
                <path d="M300 30 Q330 100 300 170 Q270 100 300 30" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
                <text x="294" y="115" fontSize="12" fontWeight="bold">O</text>
                {/* Object */}
                <line x1="120" y1="100" x2="120" y2="40" stroke="#10b981" strokeWidth="4" />
                <path d="M115 40 L120 30 L125 40 Z" fill="#10b981" />
                <text x="100" y="25" fontSize="12" fontWeight="bold" fill="#047857">物体</text>
                {/* Image */}
                <line x1="480" y1="100" x2="480" y2="160" stroke="#f59e0b" strokeWidth="3" />
                <path d="M475 160 L480 170 L485 160 Z" fill="#f59e0b" />
                <text x="470" y="185" fontSize="12" fontWeight="bold" fill="#b45309">实像</text>
                {/* Dimension u, v */}
                <line x1="120" y1="185" x2="300" y2="185" stroke="#047857" strokeWidth="1.5" />
                <text x="210" y="200" fontSize="12" fontWeight="bold" fill="#047857" textAnchor="middle">物距 u</text>
                <line x1="300" y1="185" x2="480" y2="185" stroke="#b45309" strokeWidth="1.5" />
                <text x="390" y="200" fontSize="12" fontWeight="bold" fill="#b45309" textAnchor="middle">像距 v</text>
              </svg>
            </div>
          </div>

          {/* Concave Imaging */}
          <div className="border border-amber-100 rounded-2xl p-6 bg-amber-50/20 shadow-sm">
            <h4 className="text-lg font-bold text-amber-800 mb-4">凹透镜成像：实物、虚像、物距、像距</h4>
            <div className="bg-white rounded-xl border border-amber-50 overflow-hidden h-64">
              <svg viewBox="0 0 600 200" className="w-full h-full">
                <line x1="20" y1="100" x2="580" y2="100" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4" />
                <path d="M290 30 Q300 100 290 170 L310 170 Q300 100 310 30 Z" fill="#e9d5ff" stroke="#a855f7" strokeWidth="2" opacity="0.6" />
                <text x="295" y="115" fontSize="12" fontWeight="bold">O</text>
                {/* Object */}
                <line x1="100" y1="100" x2="100" y2="30" stroke="#10b981" strokeWidth="4" />
                <path d="M95 30 L100 20 L105 30 Z" fill="#10b981" />
                {/* Virtual Image */}
                <line x1="160" y1="100" x2="160" y2="65" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3" />
                <path d="M157 65 L160 58 L163 65 Z" fill="#f59e0b" />
                <text x="145" y="50" fontSize="12" fontWeight="bold" fill="#b45309">虚像</text>
                {/* Dimension u, v */}
                <line x1="100" y1="185" x2="300" y2="185" stroke="#047857" strokeWidth="1.5" />
                <text x="200" y="200" fontSize="12" fontWeight="bold" fill="#047857" textAnchor="middle">物距 u</text>
                <line x1="160" y1="165" x2="300" y2="165" stroke="#b45309" strokeWidth="1" />
                <text x="230" y="160" fontSize="11" fontWeight="bold" fill="#b45309" textAnchor="middle">像距 v</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
        <h4 className="font-bold text-xl mb-4 flex items-center gap-2 border-b border-blue-400 pb-2">
          核心记忆点总结：
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base opacity-100">
          <div className="bg-blue-700/50 p-3 rounded-lg">
            <p className="font-bold text-yellow-300">📍 基本长度定义：</p>
            <p>• <strong>u (物距)：</strong> 物体到透镜中心 O 的距离。</p>
            <p>• <strong>v (像距)：</strong> 像到透镜中心 O 的距离。</p>
          </div>
          <div className="bg-blue-700/50 p-3 rounded-lg">
            <p className="font-bold text-yellow-300">🔍 成像规律速记：</p>
            <p>• 凸透镜：u {' > '} f 成实像；u {' < '} f 成虚像。</p>
            <p>• 凹透镜：始终成正立、缩小的虚像。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LensDiagrams;