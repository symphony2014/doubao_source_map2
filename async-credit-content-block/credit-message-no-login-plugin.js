// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'messageNodeTextComponent'
// - Resolved require(806563) to 'message-node-text-component'
// - Renamed variable 'i' to 'creditBlockNoLoginSymbol'
// - Resolved require(938219) to 'credit-block-no-login-symbol'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'q' to 'MessageTextNode' (module 806563)
// - Updated imported property 'j' to 'creditBlockNoLoginSymbol' (module 938219)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-credit-content-block.8a7a089d.js
         * chunkId: 83681
         * moduleId: 242948
         */
module.exports = function (module, exports, require) {
  var messageNodeTextComponent = require("message-node-text-component") /*id: 806563*/;
  var creditBlockNoLoginSymbol = require("credit-block-no-login-symbol") /*id: 938219*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function s(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
  let a = e => {
    let {
      contentBlock: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsx(messageNodeTextComponent.MessageTextNode, {
        ...((n == null ? undefined : n.content_obj) ?? {})
      })
    });
  };
  class l {
    constructor() {
      s(this, "pluginIdentifier", creditBlockNoLoginSymbol.creditBlockNoLoginSymbol);
      s(this, "type", "Content");
      s(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveCreditMessageContentBlockNoLoginPlugin: function () {
      return l;
    }
  });
}