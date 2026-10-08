// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageFeedbackHandlers'
// - Resolved require(992792) to 'message-feedback-handlers'
// - Renamed variable 'r' to 'infraReceiveFeedbackSymbol'
// - Resolved require(560811) to 'infra-receive-feedback-symbol'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 's' to 'MessageFeedbackCard' (module 992792)
// - Updated imported property 'Q' to 'receiveFeedbackSym' (module 560811)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 799249
         */
module.exports = function (module, exports, require) {
  var messageFeedbackHandlers = require("message-feedback-handlers") /*id: 992792*/;
  var infraReceiveFeedbackSymbol = require("infra-receive-feedback-symbol") /*id: 560811*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
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
  let l = e => {
    let {
      message: t,
      onExitActionMode: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(messageFeedbackHandlers.MessageFeedbackCard, {
      message: t,
      feedbackCardCanVisible: true,
      onCloseFeedbackCard: n
    });
  };
  class s {
    constructor() {
      a(this, "pluginIdentifier", infraReceiveFeedbackSymbol.receiveFeedbackSym);
      a(this, "Content", l);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultFeedbackReceiveMessageActionButtonPlugin: function () {
      return s;
    }
  });
}