// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'conversationMessageValidator'
// - Resolved require(253313) to 'conversation-message-validator'
// - Renamed variable 'a' to 'writingSkillGenerateArticleButton'
// - Resolved require(973466) to 'writing-skill-generate-article-button'
// - Renamed variable 's' to 'asyncSkillMessageListMatcher_1'
// - Resolved require(754085) to 'async-skill-message-list-matcher_1'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'H' to 'useMessageGenerationStatus' (module 754085)
// - Updated imported property 'W' to 'hasReplyInMessageList' (module 754085)
// - Updated imported property 'o' to 'findValidMessage' (module 253313)
// - Updated imported property 'cR' to 'WritingGenerateArticleButton' (module 973466)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-list.169e7e3e.js
         * chunkId: 66228
         * moduleId: 370437
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageValidator = require("conversation-message-validator") /*id: 253313*/;
  var writingSkillGenerateArticleButton = require("writing-skill-generate-article-button") /*id: 973466*/;
  var asyncSkillMessageListMatcher_1 = require("async-skill-message-list-matcher_1") /*id: 754085*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      conversationId: t,
      unionMessageList: n,
      inViewMessageList: u
    } = e;
    let {
      writingMessageId: c,
      enableToGenerateDoc: d,
      setWritingMessageId: f
    } = asyncSkillMessageListMatcher_1.useMessageGenerationStatus({
      conversationId: t
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = asyncSkillMessageListMatcher_1.hasReplyInMessageList(t, n);
      if (!e) {
        f(undefined);
        return;
      }
      let r = conversationMessageValidator.findValidMessage([e], t);
      if (!r || messageContentTypeAndStatusChecker.F3w(r) || !u.find(t => t.id === e.id)) {
        f(undefined);
        return;
      }
      f(r.message_id);
    }, [n, u]);
    if (c && d) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "floating-gen-doc-btn-tynE5G",
        children: reactJsxRuntimeCoreReexport.jsx(writingSkillGenerateArticleButton.WritingGenerateArticleButton, {
          messageId: c,
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
    WritingMessageListBottomBtnPlugin: function () {
      return c;
    }
  });
}