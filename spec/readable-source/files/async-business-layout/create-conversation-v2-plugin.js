// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'noSsrWrapper'
// - Resolved require(647730) to 'no-ssr-wrapper'
// - Renamed variable 'r' to 'createChatButtons'
// - Resolved require(940368) to 'create-chat-buttons'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'r' to 'NoSsrWrapper' (module 647730)
// - Updated imported property 'Y' to 'CreateChatIconBtn' (module 940368)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 825488
         */
module.exports = function (module, exports, require) {
  var noSsrWrapper = require("no-ssr-wrapper") /*id: 647730*/;
  var createChatButtons = require("create-chat-buttons") /*id: 940368*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => reactJsxRuntimeCoreReexport.jsx(noSsrWrapper.NoSsrWrapper, {
    children: reactJsxRuntimeCoreReexport.jsx(createChatButtons.CreateChatIconBtn, {
      ...e
    })
  });
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
    CreateConversationV2Plugin: function () {
      return s;
    }
  });
}