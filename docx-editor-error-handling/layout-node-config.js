// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'LayoutNodeConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 266509
         */
module.exports = function (module, exports, require) {
  var bearVirtualLayoutReconciler = require("bear-virtual-layout-reconciler") /*id: 247503*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  class l {
    getLayoutNodeConfig(e, i) {
      let {
        calculateModel: r = bearVirtualLayoutReconciler.CalculateModel.VERTICAL,
        ...o
      } = this.configBuilder(e) || {};
      return Object.assign(o, {
        calculateModel: i && !i.show ? bearVirtualLayoutReconciler.CalculateModel.IGNORE : r
      });
    }
    constructor(e, i) {
      var r;
      var n;
      var l;
      this.type = e;
      n = undefined;
      if ((r = typeof (l = function (e, i) {
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
      }(r = "configBuilder", "string")) == "symbol" ? l : l + "") in this) {
        Object.defineProperty(this, r, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[r] = n;
      }
      this.configBuilder = isFunctionUtil_1.isFunction(i) ? i : () => i;
    }
  }
  require.d(exports, {
    LayoutNodeConfig: function () {
      return l;
    }
  });
}