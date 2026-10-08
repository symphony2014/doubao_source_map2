// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'receiveRoutePlanBlockSymbol'
// - Resolved require(459291) to 'receive-route-plan-block-symbol'
// - Renamed variable 'l' to 'thinkingQueryItemRenderer_1'
// - Resolved require(713296) to 'thinking-query-item-renderer_1'
// - Updated imported property 'v' to 'receiveRouteBlock' (module 459291)
// - Updated imported property 'n' to 'ThinkingQueryBlock' (module 713296)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 532429
         */
module.exports = function (module, exports, require) {
  var receiveRoutePlanBlockSymbol = require("receive-route-plan-block-symbol") /*id: 459291*/;
  var thinkingQueryItemRenderer_1 = require("thinking-query-item-renderer_1") /*id: 713296*/;
  function r(e, t, n) {
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
  class o {
    constructor() {
      r(this, "pluginIdentifier", receiveRoutePlanBlockSymbol.receiveRouteBlock);
      r(this, "type", "Content");
      r(this, "Content", thinkingQueryItemRenderer_1.ThinkingQueryBlock);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveRoutePlanBlockContentPlugin: function () {
      return o;
    }
  });
}