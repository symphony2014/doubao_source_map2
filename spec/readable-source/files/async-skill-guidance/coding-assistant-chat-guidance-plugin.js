// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'asyncSkillGuidanceCard_1'
// - Resolved require(171032) to 'async-skill-guidance-card_1'
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'messageSkeletonLoader'
// - Resolved require(449904) to 'message-skeleton-loader'
// - Renamed variable 's' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'a' to 'chatMaxWidthLayout'
// - Resolved require(871367) to 'chat-max-width-layout'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(5489) to 'coding-skill-guidance-page'
// - Resolved require.bind(668947) to 'coding-assistant-guidance-page'
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'bo' to 'chatLayout' (module 871367)
// - Updated imported property 'hf' to 'MessageSkeleton' (module 449904)
// - Updated imported property 'L' to 'SkillCardContent' (module 171032)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance.e3b9469f.js
         * chunkId: 64113
         * moduleId: 691973
         */
module.exports = function (module, exports, require) {
  var asyncSkillGuidanceCard_1 = require("async-skill-guidance-card_1") /*id: 171032*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var messageSkeletonLoader = require("message-skeleton-loader") /*id: 449904*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        CodingAssistantGuidancePage: e
      } = await require.e("coding-skill-guidance-page") /*id: 5489*/.then(require.bind(require, "coding-assistant-guidance-page") /*id: 668947*/);
      return {
        default: e
      };
    }
  }));
  let c = () => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
    fallback: reactJsxRuntimeCoreReexport.jsx(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
      children: reactJsxRuntimeCoreReexport.jsx(messageSkeletonLoader.MessageSkeleton, {})
    }),
    children: reactJsxRuntimeCoreReexport.jsx(u, {})
  });
  class d extends asyncSkillGuidanceCard_1.SkillCardContent {
    constructor(...e) {
      var t;
      var n;
      super(...e);
      if ((t = typeof (n = function (e, t) {
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
      }(t = "Content", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, t, {
          value: c,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = c;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    CodingAssistantChatGuidancePlugin: function () {
      return d;
    }
  });
}