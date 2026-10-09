// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'lyricToSongSymbol'
// - Resolved require(675833) to 'lyric-to-song-symbol'
// - Renamed variable 'r' to 'lazyMarkdownMessageRendererLoader'
// - Resolved require(472952) to 'lazy-markdown-message-renderer-loader'
// - Updated imported property 'B' to 'lyricToSongSymbol' (module 675833)
// - Updated imported property 'P' to 'lazyMarkdownMessageRenderer' (module 472952)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 38014
         */
module.exports = function (module, exports, require) {
  var lyricToSongSymbol = require("lyric-to-song-symbol") /*id: 675833*/;
  var lazyMarkdownMessageRendererLoader = require("lazy-markdown-message-renderer-loader") /*id: 472952*/;
  function o(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class a {
    constructor() {
      o(this, "pluginIdentifier", lyricToSongSymbol.lyricToSongSymbol);
      o(this, "Content", lazyMarkdownMessageRendererLoader.lazyMarkdownMessageRenderer);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveLyricsToSongLyricPlugin: function () {
      return a;
    }
  });
}