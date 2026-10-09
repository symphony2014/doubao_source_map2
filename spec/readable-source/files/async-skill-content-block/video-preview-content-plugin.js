// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'videoToolCallRenderer'
// - Resolved require(975350) to 'video-tool-call-renderer'
// - Renamed variable 'r' to 'chatVideoPreviewSymbol'
// - Resolved require(54911) to 'chat-video-preview-symbol'
// - Updated imported property 'x' to 'videoPreviewBlock' (module 54911)
// - Updated imported property 'b' to 'renderVideoToolCalls' (module 975350)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 193895
         */
module.exports = function (module, exports, require) {
  var videoToolCallRenderer = require("video-tool-call-renderer") /*id: 975350*/;
  var chatVideoPreviewSymbol = require("chat-video-preview-symbol") /*id: 54911*/;
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
      o(this, "pluginIdentifier", chatVideoPreviewSymbol.videoPreviewBlock);
      o(this, "type", "Content");
      o(this, "Content", videoToolCallRenderer.renderVideoToolCalls);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveVideoPreviewBlockContentPlugin: function () {
      return l;
    }
  });
}