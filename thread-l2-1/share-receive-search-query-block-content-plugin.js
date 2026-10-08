// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'receiveSearchQuerySymbol'
// - Resolved require(563176) to 'receive-search-query-symbol'
// - Renamed variable 'l' to 'contentBlockCardComponent'
// - Resolved require(611195) to 'content-block-card-component'
// - Updated imported property 'S' to 'searchQueryBlockSymbol' (module 563176)
// - Updated imported property 'R' to 'renderContentBlockCard' (module 611195)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 167558
         */
module.exports = function (module, exports, require) {
  var receiveSearchQuerySymbol = require("receive-search-query-symbol") /*id: 563176*/;
  var contentBlockCardComponent = require("content-block-card-component") /*id: 611195*/;
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
      r(this, "pluginIdentifier", receiveSearchQuerySymbol.searchQueryBlockSymbol);
      r(this, "type", "Content");
      r(this, "Content", contentBlockCardComponent.renderContentBlockCard);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveSearchQueryBlockContentPlugin: function () {
      return o;
    }
  });
}