// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'receiveSimpleSearchContent'
// - Resolved require(303178) to 'receive-simple-search-content'
// - Renamed variable 'r' to 'searchChatReceiveRenderer'
// - Resolved require(543703) to 'search-chat-receive-renderer'
// - Updated imported property 'M' to 'receiveSearchToken' (module 303178)
// - Updated imported property 'cP' to 'SearchReceiveMessage' (module 543703)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 780663
         */
module.exports = function (module, exports, require) {
  var receiveSimpleSearchContent = require("receive-simple-search-content") /*id: 303178*/;
  var searchChatReceiveRenderer = require("search-chat-receive-renderer") /*id: 543703*/;
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
      o(this, "pluginIdentifier", receiveSimpleSearchContent.receiveSearchToken);
      o(this, "Content", searchChatReceiveRenderer.SearchReceiveMessage);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveSimpleSearchContentPlugin: function () {
      return a;
    }
  });
}