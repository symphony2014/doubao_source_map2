// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'o' to 'chatMessageDocUtils'
// - Resolved require(775705) to 'chat-message-doc-utils'
// - Renamed variable 'a' to 'asyncSkillMessageListMatcher'
// - Resolved require(533639) to 'async-skill-message-list-matcher'
// - Renamed variable 's' to 'skillAiPptTemplateAction'
// - Resolved require(106025) to 'skill-ai-ppt-template-action'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'A' to 'useChatDocState' (module 775705)
// - Updated imported property 'W' to 'findLastReplyMsg' (module 775705)
// - Updated imported property 'o' to 'findMatchingSkillMessage' (module 533639)
// - Updated imported property 'V4' to 'aiPptTemplateButton' (module 106025)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-list.169e7e3e.js
         * chunkId: 66228
         * moduleId: 699947
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatMessageDocUtils = require("chat-message-doc-utils") /*id: 775705*/;
  var asyncSkillMessageListMatcher = require("async-skill-message-list-matcher") /*id: 533639*/;
  var skillAiPptTemplateAction = require("skill-ai-ppt-template-action") /*id: 106025*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let t = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.isExpand);
    let {
      conversationId: n,
      unionMessageList: u,
      inViewMessageList: c
    } = e;
    let {
      pptMessageId: d,
      enableToGenerateDoc: f,
      setPptMessageId: p
    } = chatMessageDocUtils.useChatDocState({
      conversationId: n
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = chatMessageDocUtils.findLastReplyMsg(n, u);
      if (!e) {
        p(undefined);
        return;
      }
      let t = asyncSkillMessageListMatcher.findMatchingSkillMessage([e], n);
      if (!t || !c.find(t => t.id === e.id)) {
        p(undefined);
        return;
      }
      p(t.message_id);
    }, [u, c]);
    if (d && f && !t) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "floating-gen-ppt-btn-vsouJb",
        children: reactJsxRuntimeCoreReexport.jsx(skillAiPptTemplateAction.aiPptTemplateButton, {
          messageId: d,
          floating: true
        })
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
          var r = n.call(e, t || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: u,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = u;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    PptMessageListBottomBtnPlugin: function () {
      return c;
    }
  });
}