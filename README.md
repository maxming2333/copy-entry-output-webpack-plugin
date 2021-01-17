# copy-entry-output-webpack-plugin

[![npm](https://img.shields.io/npm/v/copy-entry-output-webpack-plugin.svg)](https://www.npmjs.com/package/copy-entry-output-webpack-plugin)
[![npm](https://img.shields.io/node/v/copy-entry-output-webpack-plugin.svg)](https://www.npmjs.com/package/copy-entry-output-webpack-plugin)
[![npm](https://img.shields.io/npm/dt/copy-entry-output-webpack-plugin.svg)](https://www.npmjs.com/package/copy-entry-output-webpack-plugin)
[![npm](https://img.shields.io/npm/dm/copy-entry-output-webpack-plugin.svg)](https://www.npmjs.com/package/copy-entry-output-webpack-plugin)
[![npm](https://img.shields.io/github/stars/maxming2333/copy-entry-output-webpack-plugin.svg?style=social&label=Star)](https://github.com/maxming2333/copy-entry-output-webpack-plugin) 

-----

> A Webpack plugin for copying output files in another location based on entry dependencies

[![NPM](https://nodei.co/npm-dl/copy-entry-output-webpack-plugin.png)](https://nodei.co/npm/copy-entry-output-webpack-plugin/)

[![NPM](https://nodei.co/npm/copy-entry-output-webpack-plugin.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/copy-entry-output-webpack-plugin/)

-----

This plugin only works after the output file is generated, it is just a simple copy of the resource

Feature:

- Compare the difference of [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin), copy-webpack-plugin is to copy files and let the files go through the compilation process again, and this plugin simply performs a copy operation after all output files are generated
- Analyze the entry dependency and choose to copy the associated files according to the matching rules

## usage


**install**

```bash
npm install copy-entry-output-webpack-plugin --save-dev
```

**use**

请参阅 [lib/index.js](lib/index.js) `this.options` 注释（暂时没时间详细写明，看一下注释吧）
