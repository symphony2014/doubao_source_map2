// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'chatMessageContentRenderer_1'
// - Resolved require(783136) to 'chat-message-content-renderer_1'
// - Renamed variable 'a' to 'tipContentRenderer'
// - Resolved require(579314) to 'tip-content-renderer'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'd' to 'receiveCreditBlockSymbol'
// - Resolved require(139091) to 'receive-credit-block-symbol'
// - Updated imported property 'rd' to 'ChatMessageContentRenderer' (module 783136)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'j' to 'TipContentRenderer' (module 579314)
// - Updated imported property 'e' to 'receiveCreditBlock' (module 139091)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 434909
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageContentRenderer_1 = require("chat-message-content-renderer_1") /*id: 783136*/;
  var tipContentRenderer = require("tip-content-renderer") /*id: 579314*/;
  var l = {
    "credit-text": "credit-text-aLp_QX"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    var c;
    let {
      ref: d,
      inView: u,
      message: _,
      messageBlockMeta: m,
      messageBlockText: v,
      messageBlockTextFinish: f,
      messageBlockTextBroken: p,
      imageOptions: h,
      showRiskTips: g = false
    } = e;
    let b = !!v || (_ == null ? undefined : _.content_obj?.text) !== undefined;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [b && reactJsxRuntimeCoreReexport.jsx(chatMessageContentRenderer_1.ChatMessageContentRenderer, {
        className: l["credit-text"],
        ref: d,
        inView: u,
        messageBlockText: v,
        messageBlockMeta: m,
        messageBlockTextFinish: f,
        messageBlockTextBroken: p,
        message: _,
        imageOptions: h
      }), g && (chatMessageStatusCheck.isMessageFinished(_) || messageContentTypeAndStatusChecker.vlk(_)) ? reactJsxRuntimeCoreReexport.jsx(tipContentRenderer.TipContentRenderer, {
        jsonString: (c = _.verbose) === null || c === undefined ? undefined : c.extra?.risk_tips
      }) : null]
    });
  };
  var receiveCreditBlockSymbol = require("receive-credit-block-symbol") /*id: 139091*/;
  function u(e, t, n) {
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
  let _ = e => {
    let {
      inView: t,
      message: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(c, {
      inView: t,
      message: n,
      messageBlockText: undefined,
      messageBlockTextFinish: undefined,
      messageBlockTextBroken: undefined
    });
  };
  class m {
    constructor() {
      u(this, "pluginIdentifier", receiveCreditBlockSymbol.receiveCreditBlock);
      u(this, "Content", _);
    }
  }
  require.r(exports);
  require.d(exports, {
    TextReceiveMessageBoxPlugin: function () {
      return m;
    }
  });
}