// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'TodoLineThroughRenderer'
// - Renamed export 'A' to 'TODO_LINE_THROUGH_KEY'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 544876
         */
module.exports = function (module, exports, require) {
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  function u(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  let a = `${docxEditorConstantsConfig.clientSidePrefix}-todo-line-through`;
  class s extends baseRendererClass.BaseRenderer {
    match(e) {
      return e === s.KEY;
    }
    render(e) {
      let n = l(e.class, "todo-line-through");
      e.class = n;
      return e.children;
    }
    constructor(...e) {
      super(...e);
      u(this, "name", "TodoLineThrough");
    }
  }
  u(s, "KEY", a);
  require.d(exports, {
    TodoLineThroughRenderer: function () {
      return s;
    },
    TODO_LINE_THROUGH_KEY: function () {
      return a;
    }
  });
}