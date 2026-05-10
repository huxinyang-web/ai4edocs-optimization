import { defineConfig } from 'vitepress'
import katex from 'markdown-it-katex'
import mermaid from 'markdown-it-mermaid-plugin'
import path from 'path'

export default defineConfig({
  title: 'Ai4Energy',
  description: 'Ai4Energy Docs - Optimization & Control',
  base: '/ai4edocs-optimization/',
  srcDir: '.',
  publicDir: '.vitepress/public',
  ignoreDeadLinks: true,
  vite: {
    resolve: {
      alias: [
        {
          find: '/assets/',
          replacement: path.resolve(__dirname, './public/assets/') + '/'
        }
      ]
    }
  },
  themeConfig: {
    siteTitle: 'Ai4Energy',
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Optimization', icon: 'book', link: '/' },
      { text: 'Cs-Basics', link: 'https://huxinyang-web.github.io/ai4edocs-cs-basics/' },
      { text: 'Dev-Tools', link: 'https://huxinyang-web.github.io/ai4edocs-dev-tools/' },
      { text: 'Modeling', link: 'https://huxinyang-web.github.io/ai4edocs-modeling/' },
      { text: 'AI-Energy', link: 'https://huxinyang-web.github.io/ai4edocs-ai-energy/' }
    ],

    sidebar: {
      '/': [
        {
          text: '优化',
          collapsed: false,
          items: [
            { text: '优化的概念', link: '/06Optimization/1-优化的概念.md' },
            { text: '优化问题的分类', link: '/06Optimization/2-优化问题的分类.md' },
            { text: '能源系统工程中的优化问题', link: '/06Optimization/3-能源系统工程中的优化问题.md' },
            { text: '优化问题的求解过程', link: '/06Optimization/4-优化问题的求解过程.md' },
            { text: '优化问题的建模平台', link: '/06Optimization/5-优化问题的建模平台.md' },
            { text: '传统决定性算法简介', link: '/06Optimization/6-传统决定性算法简介.md' },
            { text: '启发式算法简介', link: '/06Optimization/7-启发式算法简介.md' },
            { text: '黑箱优化问题', link: '/06Optimization/8-黑箱优化问题.md' },
            { text: '优化问题建模之递归建模方法', link: '/06Optimization/9-优化问题建模之递归建模方法.md' },
            { text: '优化应用之参数估计与软测量', link: '/06Optimization/90-优化应用之参数估计与软测量.md' },
            { text: '优化应用之代理模型', link: '/06Optimization/91-优化应用之代理模型.md' },
            { text: '一些可以看一看的优化相关工具', link: '/06Optimization/92-一些可以看一看的优化相关工具.md' },
            { text: 'JuMP混合整数线性优化实例', link: '/06Optimization/93-JuMP混合整数线性优化实例.md' },
            { text: 'JuMP参数辨识', link: '/06Optimization/94-JuMP参数辨识.md' },
            { text: '微分方程参数辨识实例', link: '/06Optimization/95-微分方程参数辨识实例.md' },
            { text: 'MTK非线性参数辨识实例', link: '/06Optimization/96-MTK非线性参数辨识实例.md' },
            { text: 'MTK符号系统参数辨识实例', link: '/06Optimization/97-MTK符号系统参数辨识实例.md' },
            { text: 'MTK部分参数辨识实例', link: '/06Optimization/98-MTK部分参数辨识实例.md' },
            { text: 'GenSBO', link: '/06Optimization/GenSBO.md' },
            { text: 'MIDACO', link: '/06Optimization/MIDACO.md' },
            { text: 'Optimization.jl', link: '/06Optimization/Optimization.jl.md' }
          ]
        },
        {
          text: '控制',
          collapsed: true,
          items: [
            { text: '控制的本质', link: '/07Control/1-控制的本质.md' },
            { text: 'JuMPMPC', link: '/07Control/JuMPMPC.md' },
            { text: 'KalmanFiltering', link: '/07Control/KalmanFiltering.md' },
            { text: 'MTKMPC', link: '/07Control/MTKMPC.md' },
            { text: 'OptimControl', link: '/07Control/OptimControl.md' },
            { text: 'OptControl 设计理念', link: '/07Control/OptControl.md' }
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
