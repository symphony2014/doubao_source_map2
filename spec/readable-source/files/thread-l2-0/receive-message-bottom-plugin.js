// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'infraReceiveBottomSymbol'
// - Resolved require(374289) to 'infra-receive-bottom-symbol'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'L' to 'defaultReceiveSymbol' (module 374289)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 595137
         */
module.exports = function (module, exports, require) {
  var infraReceiveBottomSymbol = require("infra-receive-bottom-symbol") /*id: 374289*/;
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
      suggestList: t,
      actionBarComponentNode: i
    } = e;
    let {
      suggestListComponentNode: n
    } = t || {};
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [i, n]
    });
  };
  class l {
    constructor() {
      a(this, "pluginIdentifier", infraReceiveBottomSymbol.defaultReceiveSymbol);
      a(this, "Content", o);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultReceiveMessageBottomPlugin: function () {
      return l;
    }
  });
}