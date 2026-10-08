// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'aiPptSlidesCanvasView'
// - Resolved require(262633) to 'ai-ppt-slides-canvas-view'
// - Updated imported property 'q' to 'AiPptSlidesView' (module 262633)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 649430
         */
module.exports = function (module, exports, require) {
  var aiPptSlidesCanvasView = require("ai-ppt-slides-canvas-view") /*id: 262633*/;
  function r(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class a {
    constructor() {
      r(this, "name", "ai-ppt-template-preview-canvas");
      r(this, "errorBoundaryName", "ai-ppt-template-preview-canvas");
      r(this, "teaCanvasType", "aippt_new");
      r(this, "isAllowFullCanvas", true);
      r(this, "Content", aiPptSlidesCanvasView.AiPptSlidesView);
    }
  }
  require.r(exports);
  require.d(exports, {
    AIPPTemplatePreviewCanvasPlugin: function () {
      return a;
    }
  });
}