// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'tipContentRenderer'
// - Resolved require(579314) to 'tip-content-renderer'
// - Renamed variable 'r' to 'messageRiskTipsSymbol'
// - Resolved require(404650) to 'message-risk-tips-symbol'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'j' to 'TipContentRenderer' (module 579314)
// - Updated imported property 'E' to 'riskTipsSymbol' (module 404650)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 568576
         */
module.exports = function (module, exports, require) {
  var tipContentRenderer = require("tip-content-renderer") /*id: 579314*/;
  var messageRiskTipsSymbol = require("message-risk-tips-symbol") /*id: 404650*/;
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
  let l = e => {
    let {
      contentBlock: t
    } = e;
    if (!t) {
      return null;
    }
    let i = t.content_obj;
    return reactJsxRuntimeCoreReexport.jsx(tipContentRenderer.TipContentRenderer, {
      tips: [i],
      isBlock: true
    });
  };
  class s {
    constructor() {
      o(this, "pluginIdentifier", messageRiskTipsSymbol.riskTipsSymbol);
      o(this, "type", "Content");
      o(this, "Content", l);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveRiskTipsMessageContentBlockPlugin: function () {
      return s;
    }
  });
}