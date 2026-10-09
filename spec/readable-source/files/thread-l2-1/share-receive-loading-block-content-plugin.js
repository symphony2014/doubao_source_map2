// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatReceiveLoadingSymbol'
// - Resolved require(345208) to 'chat-receive-loading-symbol'
// - Renamed variable 'l' to 'contentBlockLoadingCard'
// - Resolved require(119566) to 'content-block-loading-card'
// - Updated imported property 'F' to 'receiveLoadingSymbol' (module 345208)
// - Updated imported property 'z' to 'renderLoadingCard' (module 119566)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 472241
         */
module.exports = function (module, exports, require) {
  var chatReceiveLoadingSymbol = require("chat-receive-loading-symbol") /*id: 345208*/;
  var contentBlockLoadingCard = require("content-block-loading-card") /*id: 119566*/;
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
      r(this, "pluginIdentifier", chatReceiveLoadingSymbol.receiveLoadingSymbol);
      r(this, "type", "Content");
      r(this, "Content", contentBlockLoadingCard.renderLoadingCard);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveLoadingBlockContentPlugin: function () {
      return o;
    }
  });
}