// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatSearchTextBlockSymbol'
// - Resolved require(193394) to 'chat-search-text-block-symbol'
// - Renamed variable 'r' to 'asyncSkillContentBlock_3'
// - Resolved require(429067) to 'async-skill-content-block_3'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'yC' to 'AsyncSkillContentBlock' (module 429067)
// - Updated imported property 'h' to 'searchTextBlockSym' (module 193394)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 283505
         */
module.exports = function (module, exports, require) {
  var chatSearchTextBlockSymbol = require("chat-search-text-block-symbol") /*id: 193394*/;
  var asyncSkillContentBlock_3 = require("async-skill-content-block_3") /*id: 429067*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    var t;
    let {
      inView: i,
      contentBlock: l,
      message: a
    } = e;
    let s = l.content_obj;
    let c = ((t = a.content_blocks) === null || t === undefined ? undefined : t.findIndex(e => e.id === l.id)) === (a.content_blocks?.length || 0) - 1;
    return reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_3.AsyncSkillContentBlock, {
      message: a,
      inView: i,
      contentBlock: s,
      isLatestBlock: c
    });
  };
  function a(e, t, n) {
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
  class s {
    constructor() {
      a(this, "pluginIdentifier", chatSearchTextBlockSymbol.searchTextBlockSym);
      a(this, "type", "Content");
      a(this, "Content", l);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveSearchTextBlockContentPlugin: function () {
      return s;
    }
  });
}