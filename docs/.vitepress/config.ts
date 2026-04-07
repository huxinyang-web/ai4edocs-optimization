import { defineConfig } from 'vitepress'
import katex from 'markdown-it-katex'
import mermaid from 'markdown-it-mermaid-plugin'

export default defineConfig({
  title: 'Ai4Energy',
  description: 'Ai4Energy Docs - Optimization & Control',
  base: '/ai4edocs-optimization/',
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: 'Ai4Energy',
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Optimization', icon: 'book', link: '/docs/' },
      { text: 'Cs-Basics', link: 'https://huxinyang-web.github.io/ai4edocs-cs-basics/' },
      { text: 'Dev-Tools', link: 'https://huxinyang-web.github.io/ai4edocs-dev-tools/' },
      { text: 'Modeling', link: 'https://huxinyang-web.github.io/ai4edocs-modeling/' },
      { text: 'AI-Energy', link: 'https://huxinyang-web.github.io/ai4edocs-ai-energy/' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: '优化',
          collapsed: false,
          items: [
            { text: '简介', link: '/docs/06Optimization/简介.md' },
            { text: '优化问题概述', link: '/docs/06Optimization/优化问题概述.md' },
            { text: '线性规划', link: '/docs/06Optimization/线性规划.md' },
            { text: '非线性规划', link: '/docs/06Optimization/非线性规划.md' },
            { text: '整数规划', link: '/docs/06Optimization/整数规划.md' },
            { text: '动态规划', link: '/docs/06Optimization/动态规划.md' },
            { text: '启发式优化', link: '/docs/06Optimization/启发式优化.md' },
            { text: '多目标优化', link: '/docs/06Optimization/多目标优化.md' },
            { text: '约束优化', link: '/docs/06Optimization/约束优化.md' },
            { text: '全局优化', link: '/docs/06Optimization/全局优化.md' },
            { text: '组合优化', link: '/docs/06Optimization/组合优化.md' },
            { text: '随机优化', link: '/docs/06Optimization/随机优化.md' },
            { text: '鲁棒优化', link: '/docs/06Optimization/鲁棒优化.md' },
            { text: '凸优化', link: '/docs/06Optimization/凸优化.md' },
            { text: '梯度下降法', link: '/docs/06Optimization/梯度下降法.md' },
            { text: '遗传算法', link: '/docs/06Optimization/遗传算法.md' },
            { text: '粒子群优化', link: '/docs/06Optimization/粒子群优化.md' },
            { text: '模拟退火', link: '/docs/06Optimization/模拟退火.md' },
            { text: '蚁群算法', link: '/docs/06Optimization/蚁群算法.md' },
            { text: '神经网络优化', link: '/docs/06Optimization/神经网络优化.md' },
            { text: '优化实战案例', link: '/docs/06Optimization/优化实战案例.md' }
          ]
        },
        {
          text: '控制',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/07Control/简介.md' },
            { text: '控制理论基础', link: '/docs/07Control/控制理论基础.md' },
            { text: '经典控制理论', link: '/docs/07Control/经典控制理论.md' },
            { text: '现代控制理论', link: '/docs/07Control/现代控制理论.md' },
            { text: 'MPC 模型预测控制', link: '/docs/07Control/MPC 模型预测控制.md' }
          ]
        }
      ]
    },

    footer: {
      message: '陕 ICP 备 19000424 号 -2 | 陕公网安备 61010302001034 号',
      copyright: 'Copyright © 2024 Ai4Energy'
    },

    editLink: {
      pattern: 'https://github.com/huxinyang-web/ai4edocs-optimization/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    returnToTopLabel: '返回顶部',

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      level: 2
    }
  },

  markdown: {
    config: (md) => {
      md.use(katex)
      md.use(mermaid)
    }
  },

  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }]
  ]
})
