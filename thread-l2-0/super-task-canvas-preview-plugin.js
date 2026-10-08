// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'superTaskCanvasView'
// - Resolved require(574580) to 'super-task-canvas-view'
// - Updated imported property 'A' to 'SuperTaskCanvas' (module 574580)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 69242
         */
module.exports = function (module, exports, require) {
  var superTaskCanvasView = require("super-task-canvas-view") /*id: 574580*/;
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
      r(this, "name", "super-task-canvas-preview");
      r(this, "errorBoudaryName", "super-task-canvas-preview");
      r(this, "teaCanvasType", "supertask");
      r(this, "Content", superTaskCanvasView.SuperTaskCanvas);
    }
  }
  require.r(exports);
  require.d(exports, {
    SuperTaskCanvasPlugin: function () {
      return a;
    }
  });
}