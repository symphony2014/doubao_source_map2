// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMessageActionSymbol_2'
// - Resolved require(363615) to 'chat-message-action-symbol_2'
// - Renamed variable 'r' to 'skillAiPptTemplateAction'
// - Resolved require(106025) to 'skill-ai-ppt-template-action'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'V4' to 'aiPptTemplateButton' (module 106025)
// - Updated imported property 'x' to 'receiveMessageAct' (module 363615)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 422388
         */
module.exports = function (module, exports, require) {
  var chatMessageActionSymbol_2 = require("chat-message-action-symbol_2") /*id: 363615*/;
  var skillAiPptTemplateAction = require("skill-ai-ppt-template-action") /*id: 106025*/;
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
      message: t
    } = e;
    let n = t.message_id || "";
    return reactJsxRuntimeCoreReexport.jsx(skillAiPptTemplateAction.aiPptTemplateButton, {
      messageId: n,
      size: "small",
      "data-button-mode": "max"
    });
  };
  class s {
    constructor() {
      a(this, "pluginIdentifier", chatMessageActionSymbol_2.receiveMessageAct);
      a(this, "ButtonContentGroups", [l]);
    }
  }
  require.r(exports);
  require.d(exports, {
    OutlineGenReceiveMessageActionButtonPlugin: function () {
      return s;
    }
  });
}