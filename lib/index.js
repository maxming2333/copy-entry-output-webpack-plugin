const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const minimatch = require('minimatch');

module.exports = class CopyEntryOutputPlugin {
  constructor(options = {}) {
    this.outputPath = '';
    this.options = {
      match: '',
      outputPath(entryChunk, webpackOptions) {
        return webpackOptions.output.path;
      },
      ...options
    };
  }

  findFile(module, fileList) {
    fileList = fileList || (new Set());
    if (module.buildInfo.assets) {
      Object.keys(module.buildInfo.assets).forEach((filePath) => {
        if (minimatch(filePath, this.options.match)) {
          if (!module.buildInfo.assets[filePath].existsAt) {
            module.buildInfo.assets[filePath].existsAt = path.join(this.outputPath, filePath);
          }
          fileList.add(module.buildInfo.assets[filePath].existsAt);
        }
      });
    }
    if (module._modules) {
      module._modules.forEach((item) => {
        this.findFile(item, fileList);
      });
    }
    return [...fileList];
  }

  async apply(compiler) {
    this.outputPath = compiler.options.output.path;

    compiler.hooks.afterEmit.tap('CopyEntryOutputPlugin', (compilation) => {
      if (!this.options.match || !compilation.chunks) return;

      compilation.chunks.forEach((chunk) => {
        // entry 特征
        if (!chunk.entryModule.issuer) {
          const entryOutputPath = this.options.outputPath(chunk, compiler.options);
          let fileList = [];
          chunk._modules.forEach((module) => {
            fileList = fileList.concat(this.findFile(module));
          });
          fileList.forEach((file) => {
            const distPath = file.replace(this.outputPath, entryOutputPath);
            mkdirp.sync(path.dirname(distPath));
            fs.copyFileSync(file, distPath);
          });
        }
      });
    });
  }
};
