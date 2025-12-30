import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '第一部分：核心理论框架',
      items: [
        'part1/chapter-01-prism',
        'part1/chapter-02-api',
        'part1/chapter-03-430-thinking',
        'part1/chapter-04-ai-cognition',
      ],
    },
    {
      type: 'category',
      label: '第三部分：宇宙理论体系',
      items: [
        'part3/chapter-13-universal-math',
        'part3/chapter-14-cognitive-physics',
        'part3/chapter-15-logic-metrology',
        'part3/chapter-16-spacetime-network',
        'part3/chapter-17-universal-theory',
      ],
    },
  ],
};

export default sidebars;
