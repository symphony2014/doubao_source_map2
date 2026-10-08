// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'thinkingQueryItemRenderer_1'
// - Resolved require(713296) to 'thinking-query-item-renderer_1'
// - Renamed variable 'r' to 'receiveRoutePlanBlockSymbol'
// - Resolved require(459291) to 'receive-route-plan-block-symbol'
// - Updated imported property 'v' to 'receiveRouteBlock' (module 459291)
// - Updated imported property 'n' to 'ThinkingQueryBlock' (module 713296)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 162598
         */
module.exports = function (module, exports, require) {
  var thinkingQueryItemRenderer_1 = require("thinking-query-item-renderer_1") /*id: 713296*/;
  var receiveRoutePlanBlockSymbol = require("receive-route-plan-block-symbol") /*id: 459291*/;
  function o(e, t, n) {
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
  class l {
    constructor() {
      o(this, "pluginIdentifier", receiveRoutePlanBlockSymbol.receiveRouteBlock);
      o(this, "type", "Content");
      o(this, "Content", thinkingQueryItemRenderer_1.ThinkingQueryBlock);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveRoutePlanningBlockPlugin: function () {
      return l;
    }
  });
}