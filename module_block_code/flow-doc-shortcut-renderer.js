// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'DocShortcutRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 900780
         */
module.exports = function (module, exports, require) {
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  class l extends baseRendererClass.BaseRenderer {
    get editor() {
      return this.props.editor;
    }
    destroy() {
      this.editor.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleChange);
    }
    constructor(e) {
      var i;
      var r;
      var n;
      super();
      this.props = e;
      i = "handleChange";
      r = e => {
        var i;
        var r;
        if ((i = (r = this.props).onChange) !== null && i !== undefined) {
          i.call(r, e);
        }
      };
      if ((i = typeof (n = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, i || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(i, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, i, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = r;
      }
      this.editor.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleChange);
    }
  }
  require.d(exports, {
    DocShortcutRenderer: function () {
      return l;
    }
  });
}