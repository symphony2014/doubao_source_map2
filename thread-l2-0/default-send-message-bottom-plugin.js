// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'infraSendMessageBottomSymbol'
// - Resolved require(913505) to 'infra-send-message-bottom-symbol'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'defaultSendMsgBottom' (module 913505)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 372996
         */
module.exports = function (module, exports, require) {
  var infraSendMessageBottomSymbol = require("infra-send-message-bottom-symbol") /*id: 913505*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function a(e, t, i) {
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
  let o = e => {
    let {
      actionBarComponentNode: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: t
    });
  };
  class l {
    constructor() {
      a(this, "pluginIdentifier", infraSendMessageBottomSymbol.defaultSendMsgBottom);
      a(this, "Content", o);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultSendMessageBottomPlugin: function () {
      return l;
    }
  });
}