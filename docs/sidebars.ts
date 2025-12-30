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
      label: '第二部分：认知与思维体系',
      items: [
        'part2/chapter-05-gntp',
        'part2/chapter-06-csa',
        'part2/chapter-07-mcs',
        'part2/chapter-08-act',
        'part2/chapter-09-odeid',
        'part2/chapter-10-iteration',
        'part2/chapter-11-reconstruction',
        'part2/chapter-12-pruning-effect',
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
    {
      type: 'category',
      label: '第四部分：对话与人格理论',
      items: [
        'part4/chapter-18-dialogical-self',
        'part4/chapter-19-inner-thinking',
        'part4/chapter-20-dialogue-cosplay',
        'part4/chapter-21-personality-layers',
        'part4/chapter-22-change-catalyst',
      ],
    },
    {
      type: 'category',
      label: '第五部分：应用研究',
      items: [
        'part5/chapter-23-health',
        'part5/chapter-24-mental-health',
        'part5/chapter-25-academic-addiction',
      ],
    },
  ],
};

export default sidebars;
