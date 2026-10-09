// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatSearchTextBlockSymbol'
// - Resolved require(193394) to 'chat-search-text-block-symbol'
// - Renamed variable 'r' to 'searchReferenceMessageBlockRenderer'
// - Resolved require(640296) to 'search-reference-message-block-renderer'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'h' to 'searchTextBlockSym' (module 193394)
// - Updated imported property 'iC' to 'renderSearchReferenceMessageBlock' (module 640296)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 321905
         */
module.exports = function (module, exports, require) {
  var chatSearchTextBlockSymbol = require("chat-search-text-block-symbol") /*id: 193394*/;
  var searchReferenceMessageBlockRenderer = require("search-reference-message-block-renderer") /*id: 640296*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function o(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class l {
    constructor() {
      o(this, "pluginIdentifier", chatSearchTextBlockSymbol.searchTextBlockSym);
      o(this, "type", "Content");
      o(this, "Content", e => {
        let {
          contentBlock: t,
          ...i
        } = e;
        let n = t.content_obj;
        return reactJsxRuntimeCoreReexport.jsx(searchReferenceMessageBlockRenderer.renderSearchReferenceMessageBlock, {
          ...i,
          contentBlock: n
        });
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveSearchTextBlockContentPlugin: function () {
      return l;
    }
  });
}