// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'murmurHash32'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16024.920cb08e.js
         * chunkId: 16024
         * moduleId: 138302
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var t;
    var n = 0;
    var r = 0;
    var i = e.length;
    for (; i >= 4; ++r, i -= 4) {
      t = ((t = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24) & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
      t ^= t >>> 24;
      n = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
    }
    switch (i) {
      case 3:
        n ^= (e.charCodeAt(r + 2) & 255) << 16;
      case 2:
        n ^= (e.charCodeAt(r + 1) & 255) << 8;
      case 1:
        n ^= e.charCodeAt(r) & 255;
        n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
    }
    n ^= n >>> 13;
    return (((n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16)) ^ n >>> 15) >>> 0).toString(36);
  }
  require.d(exports, {
    murmurHash32: function () {
      return r;
    }
  });
}