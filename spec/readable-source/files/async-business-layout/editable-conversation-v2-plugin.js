// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'conversationHeaderTitleComponent'
// - Resolved require(213403) to 'conversation-header-title-component'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'o' to 'getConversationTitle' (module 213403)
// - Updated imported property 'I' to 'ConversationHeaderTitle' (module 213403)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 851737
         */
module.exports = function (module, exports, require) {
  var conversationHeaderTitleComponent = require("conversation-header-title-component") /*id: 213403*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      isNarrowScreen: t,
      isLeftSideExpand: n,
      isRightBarExpand: o,
      conversationId: a,
      chatType: s,
      currentPageName: l
    } = e;
    let c = conversationHeaderTitleComponent.getConversationTitle(a, s, l);
    if (c && !o) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: reactJsxRuntimeCoreReexport.jsx(conversationHeaderTitleComponent.ConversationHeaderTitle, {
          isLeftSideExpand: n,
          isRightBarExpand: o,
          isNarrowScreen: t,
          conversationId: a,
          chatType: s,
          showFixedThreadConvHeader: c,
          center: true
        })
      });
    } else {
      return null;
    }
  };
  class a {
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
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = o;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    EditableConversationV2Plugin: function () {
      return a;
    }
  });
}