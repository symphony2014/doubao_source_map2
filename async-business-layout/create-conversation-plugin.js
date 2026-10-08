// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatLayoutDimensions'
// - Resolved require(519623) to 'chat-layout-dimensions'
// - Renamed variable 'r' to 'useMediaQueryHook'
// - Resolved require(510619) to 'use-media-query-hook'
// - Renamed variable 'o' to 'noSsrWrapper'
// - Resolved require(647730) to 'no-ssr-wrapper'
// - Renamed variable 'a' to 'createChatButtons'
// - Resolved require(940368) to 'create-chat-buttons'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'GS' to 'mediaQueryHook' (module 510619)
// - Updated imported property 'lB' to 'chatPanelWidth' (module 519623)
// - Updated imported property 'Bv' to 'maxScreenWidth' (module 519623)
// - Updated imported property 'r' to 'NoSsrWrapper' (module 647730)
// - Updated imported property 'y' to 'CreateChatButton' (module 940368)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 908629
         */
module.exports = function (module, exports, require) {
  var chatLayoutDimensions = require("chat-layout-dimensions") /*id: 519623*/;
  var useMediaQueryHook = require("use-media-query-hook") /*id: 510619*/;
  var noSsrWrapper = require("no-ssr-wrapper") /*id: 647730*/;
  var createChatButtons = require("create-chat-buttons") /*id: 940368*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    let {
      isLeftSideExpand: t,
      isRightBarExpand: n
    } = e;
    let l = useMediaQueryHook.mediaQueryHook({
      maxWidth: chatLayoutDimensions.chatPanelWidth - 1
    });
    let c = useMediaQueryHook.mediaQueryHook({
      maxWidth: chatLayoutDimensions.maxScreenWidth - 1
    });
    if (!t || (n ? c : l)) {
      return reactJsxRuntimeCoreReexport.jsx(noSsrWrapper.NoSsrWrapper, {
        children: reactJsxRuntimeCoreReexport.jsx(createChatButtons.CreateChatButton, {})
      });
    } else {
      return null;
    }
  };
  class c {
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
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = l;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    CreateConversationPlugin: function () {
      return c;
    }
  });
}