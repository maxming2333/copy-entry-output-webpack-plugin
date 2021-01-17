# copy-output-webpack-plugin

[![npm](https://img.shields.io/npm/v/copy-output-webpack-plugin.svg)](https://www.npmjs.com/package/copy-output-webpack-plugin)
[![npm](https://img.shields.io/node/v/copy-output-webpack-plugin.svg)](https://www.npmjs.com/package/copy-output-webpack-plugin)
[![npm](https://img.shields.io/npm/dt/copy-output-webpack-plugin.svg)](https://www.npmjs.com/package/copy-output-webpack-plugin)
[![npm](https://img.shields.io/npm/dm/copy-output-webpack-plugin.svg)](https://www.npmjs.com/package/copy-output-webpack-plugin)
[![npm](https://img.shields.io/github/stars/maxming2333/copy-output-webpack-plugin.svg?style=social&label=Star)](https://github.com/maxming2333/copy-output-webpack-plugin) 

-----

> A webpack plugin for copy output files in another place

[![NPM](https://nodei.co/npm-dl/copy-output-webpack-plugin.png)](https://nodei.co/npm/copy-output-webpack-plugin/)

[![NPM](https://nodei.co/npm/copy-output-webpack-plugin.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/copy-output-webpack-plugin/)

-----

This plugin only works after the output file is generated, it is just a simple copy of the resource

Compare the difference of [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin):

`copy-webpack-plugin` is to copy files and let the files go through the compilation process again, and this plugin simply performs a copy operation after all output files are generated


## usage


**install**

```bash
npm install copy-output-webpack-plugin --save-dev
```

**use**

请参阅 [lib/index.js](lib/index.js) `this.options` 注释（暂时没时间详细写明，看一下注释吧）
