// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiPptCanvasComponent'
// - Resolved require(867626) to 'ai-ppt-canvas-component'
// - Updated imported property '$' to 'AiPptCanvasComponent' (module 867626)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 288127
         */
module.exports = function (module, exports, require) {
  var aiPptCanvasComponent = require("ai-ppt-canvas-component") /*id: 867626*/;
  function r(e, t, a) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var a = e[Symbol.toPrimitive];
      if (a !== undefined) {
        var i = a.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = a;
    }
    return e;
  }
  class o {
    constructor() {
      r(this, "name", "ai-ppt-canvas-preview");
      r(this, "errorBoudaryName", "super-task-canvas-preview");
      r(this, "teaCanvasType", "super-task-ai-ppt");
      r(this, "Content", aiPptCanvasComponent.AiPptCanvasComponent);
    }
  }
  require.r(exports);
  require.d(exports, {
    AIPPTPreviewCanvasPlugin: function () {
      return o;
    }
  });
}