import { Cpu, Layers, Mic, Zap, Type } from "lucide-react"

export const posts = [
  {
    id: 1,
    title: "扁平化设计的终结",
    category: "设计",
    date: "2025.03.15",
    slug: "death-of-flat-design",
    content:
      "扁平化设计已死。新野兽派万岁。我们正在进入一个数字极繁主义的时代，纹理、深度和混乱将占据主导地位。用户不再满足于冷冰冰的界面，他们渴望触感、反馈和生命力。",
  },
  {
    id: 2,
    title: "React Server Components: 一场爱恋",
    category: "技术",
    date: "2025.03.10",
    slug: "rsc-love-story",
    content:
      "为什么将 HTML 直接发送到客户端是你对用户电池寿命最浪漫的告白。探讨 RSC 如何改变了我们构建现代 Web 应用的方式。",
  },
  {
    id: 3,
    title: "我为什么放弃了 TypeScript (开玩笑的)",
    category: "观点",
    date: "2025.02.28",
    slug: "why-i-ditched-typescript",
    content:
      "我差点就这么做了。我差点回到了原生 JS 的狂野西部。然后我想起了我有多喜欢自动补全和类型安全。没有 TS 的日子，就像在没有安全网的高空走钢丝。",
  },
  {
    id: 4,
    title: "CSS 也是一种编程语言",
    category: "暴论",
    date: "2025.02.15",
    slug: "css-is-programming",
    content:
      "如果你能用复选框构建一个计算器，那它就是一种编程语言。不服来辩。CSS 的强大往往被低估，它是构建视觉体验的基石。",
  },
]

export const projects = [
  {
    id: 1,
    title: "NEON_DREAMS",
    client: "赛博公司",
    year: "2025",
    description:
      "为未来时尚品牌打造的全沉浸式 3D 电子商务体验。结合了 WebGL 和实时物理模拟，创造出独一无二的购物旅程。",
    tags: ["WEBGL", "THREE.JS", "REACT"],
    image: "/neon-cyberpunk-interface.jpg",
    slug: "neon-dreams",
  },
  {
    id: 2,
    title: "BRUTAL_ARCH",
    client: "STUDIO X",
    year: "2024",
    description: "为前卫建筑事务所设计的新野兽派作品集网站。强调结构感、粗犷的排版和非传统的交互方式。",
    tags: ["NEXT.JS", "FRAMER MOTION", "CMS"],
    image: "/brutalist-architecture-website.jpg",
    slug: "brutal-arch",
  },
  {
    id: 3,
    title: "SONIC_WAVE",
    client: "AUDIO TECH",
    year: "2024",
    description: "具有实时频率分析功能的音频可视化平台。将声音转化为视觉艺术，让用户看见音乐的形状。",
    tags: ["WEB AUDIO API", "CANVAS", "TYPESCRIPT"],
    image: "/audio-visualization-abstract.jpg",
    slug: "sonic-wave",
  },
  {
    id: 4,
    title: "GLITCH_ART",
    client: "个人项目",
    year: "2023",
    description: "探索数字衰变和数据损坏的生成艺术合集。每一次刷新都是一次新的毁灭与重生。",
    tags: ["P5.JS", "GENERATIVE", "ART"],
    image: "/glitch-art-digital.jpg",
    slug: "glitch-art",
  },
]

export const experiments = [
  {
    id: 1,
    title: "神经网络可视化",
    description: "神经网络学习过程的交互式 3D 可视化。",
    tags: ["THREE.JS", "WEBGL", "AI"],
    color: "bg-accent-pink",
    slug: "neural-net-visualizer",
    icon: Cpu,
  },
  {
    id: 2,
    title: "音频反应粒子",
    description: "实时响应麦克风输入的粒子系统。",
    tags: ["WEB AUDIO", "CANVAS", "PHYSICS"],
    color: "bg-accent-green",
    slug: "audio-reactive-particles",
    icon: Mic,
  },
  {
    id: 3,
    title: "生成式排版",
    description: "随鼠标移动而扭曲的实验性排版。",
    tags: ["SVG", "GSAP", "INTERACTION"],
    color: "bg-accent-blue",
    slug: "generative-typography",
    icon: Type,
  },
  {
    id: 4,
    title: "物理布局引擎",
    description: "元素具有质量并相互碰撞的布局引擎。",
    tags: ["MATTER.JS", "REACT", "PHYSICS"],
    color: "bg-accent-yellow",
    slug: "physics-based-layout",
    icon: Layers,
  },
  {
    id: 5,
    title: "无限故障滚动",
    description: "随着滚动深入而破坏内容的无限滚动实现。",
    tags: ["NEXT.JS", "GLSL", "SHADERS"],
    color: "bg-accent-red",
    slug: "infinite-scroll-glitch",
    icon: Zap,
  },
  {
    id: 6,
    title: "语音控制界面",
    description: "仅使用语音命令和抽象可视化导航网络。",
    tags: ["WEB SPEECH API", "AI", "UI/UX"],
    color: "bg-white",
    slug: "voice-controlled-interface",
    icon: Mic,
  },
]
