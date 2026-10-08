// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'PageResourceRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_required_resource.e1f31793.js
         * chunkId: 33591
         * moduleId: 528361
         */
module.exports = function (module, exports, require) {
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  class o extends baseRendererClass.BaseRenderer {
    constructor(e) {
      var n;
      var i;
      var r;
      super();
      this.props = e;
      n = "handleKeydown";
      i = e => {
        if (e.key === "Enter") {
          e.preventEvent();
          e.stopEvent();
          e.nativeEvent.preventDefault();
        }
        if (e.key === "Backspace") {
          let n = this.props.editor.selection.getSelection();
          if (n.isCollapsed() && n.start.line === 0 && n.start.offset === 0) {
            e.nativeEvent.preventDefault();
            e.preventEvent();
            e.stopEvent();
          } else {
            e.nativeEvent.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
          }
        }
      };
      if ((n = typeof (r = function (e, n) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var i = e[Symbol.toPrimitive];
        if (i !== undefined) {
          var r = i.call(e, n || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(e);
      }(n, "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, n, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = i;
      }
      e.editor.on("keydown", this.handleKeydown);
    }
  }
  require.d(exports, {
    PageResourceRenderer: function () {
      return o;
    }
  });
}