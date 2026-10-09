// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'sendCodeRefContentSymbol'
// - Resolved require(687019) to 'send-code-ref-content-symbol'
// - Renamed variable 'l' to 'skillMessageBoxRenderer_1'
// - Resolved require(706663) to 'skill-message-box-renderer_1'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'r' to 'SkillMessageBox' (module 706663)
// - Updated imported property 'G' to 'sendCodeRefContent' (module 687019)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 254872
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var sendCodeRefContentSymbol = require("send-code-ref-content-symbol") /*id: 687019*/;
  var skillMessageBoxRenderer_1 = require("skill-message-box-renderer_1") /*id: 706663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function o(e, t, n) {
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
  let a = e => reactJsxRuntimeCoreReexport.jsx(skillMessageBoxRenderer_1.SkillMessageBox, {
    viewOnly: true,
    ...e
  });
  class s {
    constructor() {
      o(this, "pluginIdentifier", sendCodeRefContentSymbol.sendCodeRefContent);
      o(this, "Content", a);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareSendCodeRefContentPlugin: function () {
      return s;
    }
  });
}