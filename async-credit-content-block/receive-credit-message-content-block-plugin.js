// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatCreditPanelTrigger'
// - Resolved require(68784) to 'chat-credit-panel-trigger'
// - Renamed variable 'i' to 'chatCreditBlockSymbol'
// - Resolved require(942645) to 'chat-credit-block-symbol'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'x' to 'CreditPanelTrigger' (module 68784)
// - Updated imported property 'z' to 'creditBlockContent' (module 942645)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-credit-content-block.8a7a089d.js
         * chunkId: 83681
         * moduleId: 280454
         */
module.exports = function (module, exports, require) {
  var chatCreditPanelTrigger = require("chat-credit-panel-trigger") /*id: 68784*/;
  var chatCreditBlockSymbol = require("chat-credit-block-symbol") /*id: 942645*/;
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
      children: reactJsxRuntimeCoreReexport.jsx(chatCreditPanelTrigger.CreditPanelTrigger, {
        ...((n == null ? undefined : n.content_obj) ?? {})
      })
    });
  };
  class l {
    constructor() {
      s(this, "pluginIdentifier", chatCreditBlockSymbol.creditBlockContent);
      s(this, "type", "Content");
      s(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveCreditMessageContentBlockPlugin: function () {
      return l;
    }
  });
}