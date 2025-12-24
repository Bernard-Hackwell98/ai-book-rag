// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
    tutorialSidebar: [
    {
      type: 'category',
      label: 'Module 4',
      items: [
        'module4/chapter1-voice-to-intent',
        'module4/chapter2-language-to-action',
        'module4/chapter3-capstone-autonomous-humanoid',
      ],
    },
    {
      type: 'category',
      label: 'Module 3',
      items: [
        'module3/chapter1-isaac-sim',
        'module3/chapter2-isaac-ros',
        'module3/chapter3-nav2',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
