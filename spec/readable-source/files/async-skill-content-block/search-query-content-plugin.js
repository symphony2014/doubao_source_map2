// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'contentBlockCardComponent'
// - Resolved require(611195) to 'content-block-card-component'
// - Renamed variable 'r' to 'receiveSearchQuerySymbol'
// - Resolved require(563176) to 'receive-search-query-symbol'
// - Updated imported property 'S' to 'searchQueryBlockSymbol' (module 563176)
// - Updated imported property 'R' to 'renderContentBlockCard' (module 611195)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 556981
         */
module.exports = function (module, exports, require) {
  var contentBlockCardComponent = require("content-block-card-component") /*id: 611195*/;
  var receiveSearchQuerySymbol = require("receive-search-query-symbol") /*id: 563176*/;
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
      o(this, "pluginIdentifier", receiveSearchQuerySymbol.searchQueryBlockSymbol);
      o(this, "type", "Content");
      o(this, "Content", contentBlockCardComponent.renderContentBlockCard);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveSearchQueryBlockContentPlugin: function () {
      return l;
    }
  });
}