// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'GridColumnLayoutNodeConfigProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 323347
         */
module.exports = function (module, exports, require) {
  var bearVirtualLayoutReconciler = require("bear-virtual-layout-reconciler") /*id: 247503*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  class l {
    getLayoutNodeConfig(e, i) {
      return {
        calculateModel: i && !i.show ? bearVirtualLayoutReconciler.CalculateModel.IGNORE : bearVirtualLayoutReconciler.CalculateModel.VERTICAL,
        ignoreMarginCollapse: true
      };
    }
    constructor() {
      var e;
      var i;
      var r;
      e = "type";
      i = docBlockTypeConstants.blockTypeConstants.GRID_COLUMN;
      if ((e = typeof (r = function (e, i) {
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
      }(e, "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = i;
      }
    }
  }
  require.d(exports, {
    GridColumnLayoutNodeConfigProvider: function () {
      return l;
    }
  });
}