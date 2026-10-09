// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatBusinessLayout'
// - Resolved require(452778) to 'chat-business-layout'
// - Renamed variable 'r' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'I' to 'ChatBusinessLayout' (module 452778)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 816628
         */
module.exports = function (module, exports, require) {
  var chatBusinessLayout = require("chat-business-layout") /*id: 452778*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let t = e.guidance.activeSkillType === chatAppEnums.SkillType.CodeAssistant;
    if (t) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(chatBusinessLayout.ChatBusinessLayout, {
        ...e,
        className: t ? "!hidden" : ""
      });
    }
  };
  class s {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = a;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    CodingChatFooterPlugin: function () {
      return s;
    }
  });
}