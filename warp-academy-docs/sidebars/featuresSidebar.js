/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually

  tutorialSidebar: [
    { type: 'doc', label: 'Intro', id: 'features-intro' },
    {
      type: 'category',
      label: 'Bundled deployment and interactions',
      items: [
        {
          type: 'doc',
          label: 'Sequencer',
          id: 'sequencer',
        },
        {
          type: 'doc',
          label: 'Bundled deployment',
          id: 'bundled-deployment',
        },
        {
          type: 'doc',
          label: 'Bundled interactions',
          id: 'bundled-interactions',
        },
      ],
    },
    { type: 'doc', label: 'Evolve', id: 'evolve' },
    { type: 'doc', label: 'Internal calls', id: 'internal-calls' },
    { type: 'doc', label: 'VRF', id: 'vrf' },
    { type: 'doc', label: 'SmartWeave Global', id: 'smartweave-global' },
  ],
};

module.exports = sidebars;
