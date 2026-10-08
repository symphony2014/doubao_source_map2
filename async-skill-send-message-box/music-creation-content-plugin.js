// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'musicGenerateSymbol'
// - Resolved require(241484) to 'music-generate-symbol'
// - Renamed variable 'r' to 'docxEditorLayoutSelectorUtils'
// - Resolved require(817118) to 'docx-editor-layout-selector-utils'
// - Updated imported property 'K' to 'MusicGenerate' (module 241484)
// - Updated imported property 'P' to 'getLayoutSelector' (module 817118)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 757794
         */
module.exports = function (module, exports, require) {
  var musicGenerateSymbol = require("music-generate-symbol") /*id: 241484*/;
  var docxEditorLayoutSelectorUtils = require("docx-editor-layout-selector-utils") /*id: 817118*/;
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
  class l {
    constructor() {
      o(this, "pluginIdentifier", musicGenerateSymbol.MusicGenerate);
      o(this, "Content", docxEditorLayoutSelectorUtils.getLayoutSelector);
    }
  }
  require.r(exports);
  require.d(exports, {
    SendMusicCreationContentPlugin: function () {
      return l;
    }
  });
}