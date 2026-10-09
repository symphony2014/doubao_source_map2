// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatAcademicSearchTextSymbol'
// - Resolved require(704941) to 'chat-academic-search-text-symbol'
// - Renamed variable 'l' to 'asyncSkillContentBlock_5'
// - Resolved require(837193) to 'async-skill-content-block_5'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'N' to 'AsyncSkillContentBlock' (module 837193)
// - Updated imported property 'd' to 'receiveAcademicText' (module 704941)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 633670
         */
module.exports = function (module, exports, require) {
  var chatAcademicSearchTextSymbol = require("chat-academic-search-text-symbol") /*id: 704941*/;
  var asyncSkillContentBlock_5 = require("async-skill-content-block_5") /*id: 837193*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      inView: t,
      message: n,
      theme: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_5.AsyncSkillContentBlock, {
      inView: t,
      message: n,
      theme: i,
      messageBlockText: undefined,
      messageBlockTextBroken: undefined,
      messageBlockTextFinish: undefined
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
  let s = e => reactJsxRuntimeCoreReexport.jsx(o, {
    ...e
  });
  class c {
    constructor() {
      a(this, "pluginIdentifier", chatAcademicSearchTextSymbol.receiveAcademicText);
      a(this, "Content", s);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveAcademicSearchTextContentPlugin: function () {
      return c;
    }
  });
}