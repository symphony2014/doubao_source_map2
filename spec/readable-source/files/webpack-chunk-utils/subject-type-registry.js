// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'SubjectTypeRegistry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 736379
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  class o {
    register() {
      let e = new docxEditorCore.SubjectType();
      this.signals.push(e);
      return e;
    }
    destroy() {
      this.signals.forEach(e => e.complete());
    }
    constructor() {
      var e;
      var n;
      var r;
      n = [];
      if ((e = typeof (r = function (e, n) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var i = r.call(e, n || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(e);
      }(e = "signals", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = n;
      }
    }
  }
  require.d(exports, {
    SubjectTypeRegistry: function () {
      return o;
    }
  });
}