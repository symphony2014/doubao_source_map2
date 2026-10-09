// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'contentBlockLoadingCard'
// - Resolved require(119566) to 'content-block-loading-card'
// - Renamed variable 'r' to 'chatReceiveLoadingSymbol'
// - Resolved require(345208) to 'chat-receive-loading-symbol'
// - Updated imported property 'F' to 'receiveLoadingSymbol' (module 345208)
// - Updated imported property 'z' to 'renderLoadingCard' (module 119566)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 885225
         */
module.exports = function (module, exports, require) {
  var contentBlockLoadingCard = require("content-block-loading-card") /*id: 119566*/;
  var chatReceiveLoadingSymbol = require("chat-receive-loading-symbol") /*id: 345208*/;
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
      o(this, "pluginIdentifier", chatReceiveLoadingSymbol.receiveLoadingSymbol);
      o(this, "type", "Content");
      o(this, "Content", contentBlockLoadingCard.renderLoadingCard);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveLoadingBlockContentPlugin: function () {
      return l;
    }
  });
}