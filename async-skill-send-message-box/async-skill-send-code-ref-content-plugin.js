// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'sendMessageBoxTextPlugin'
// - Resolved require(23022) to 'send-message-box-text-plugin'
// - Renamed variable 'r' to 'skillMessageBoxRenderer_1'
// - Resolved require(706663) to 'skill-message-box-renderer_1'
// - Renamed variable 'o' to 'sendCodeRefContentSymbol'
// - Resolved require(687019) to 'send-code-ref-content-symbol'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'r' to 'SkillMessageBox' (module 706663)
// - Updated imported property 'G' to 'sendCodeRefContent' (module 687019)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 127758
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var sendMessageBoxTextPlugin = require("send-message-box-text-plugin") /*id: 23022*/;
  var skillMessageBoxRenderer_1 = require("skill-message-box-renderer_1") /*id: 706663*/;
  var sendCodeRefContentSymbol = require("send-code-ref-content-symbol") /*id: 687019*/;
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
  let s = e => reactJsxRuntimeCoreReexport.jsx(skillMessageBoxRenderer_1.SkillMessageBox, {
    enableScaleUpAction: true,
    ...e
  });
  class c {
    constructor() {
      a(this, "pluginIdentifier", sendCodeRefContentSymbol.sendCodeRefContent);
      a(this, "EditableContent", sendMessageBoxTextPlugin.EditableSendMessageBoxContent);
      a(this, "Content", s);
    }
  }
  require.r(exports);
  require.d(exports, {
    SendCodeRefContentPlugin: function () {
      return c;
    }
  });
}