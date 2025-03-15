const { FileSystemCache } = require('next/dist/server/lib/incremental-cache/file-system-cache');

module.exports = class CustomCache extends FileSystemCache {
  constructor(options) {
    super({
      ...options,
      flushToDisk: true,
      serverDistDir: '.next',
    });
  }
}; 