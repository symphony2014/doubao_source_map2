// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatSearchVideoSymbol'
// - Resolved require(89038) to 'chat-search-video-symbol'
// - Renamed variable 'r' to 'chatVideoCarouselList'
// - Resolved require(161441) to 'chat-video-carousel-list'
// - Updated imported property 'p' to 'searchVideoSymbol' (module 89038)
// - Updated imported property 'v' to 'ChatVideoCarousel' (module 161441)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 906818
         */
module.exports = function (module, exports, require) {
  var chatSearchVideoSymbol = require("chat-search-video-symbol") /*id: 89038*/;
  var chatVideoCarouselList = require("chat-video-carousel-list") /*id: 161441*/;
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
  class a {
    constructor() {
      o(this, "pluginIdentifier", chatSearchVideoSymbol.searchVideoSymbol);
      o(this, "Content", chatVideoCarouselList.ChatVideoCarousel);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveSearchVideoContentPlugin: function () {
      return a;
    }
  });
}