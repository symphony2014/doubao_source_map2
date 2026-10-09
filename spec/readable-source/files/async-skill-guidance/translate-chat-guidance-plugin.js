// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'asyncSkillGuidanceCard_1'
// - Resolved require(171032) to 'async-skill-guidance-card_1'
// - Renamed variable 'o' to 'messageSkeletonLoader'
// - Resolved require(449904) to 'message-skeleton-loader'
// - Renamed variable 's' to 'chatMaxWidthLayout'
// - Resolved require(871367) to 'chat-max-width-layout'
// - Renamed variable 'a' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Resolved require.e(29337) to 'translate-skill-guidance-page'
// - Resolved require.bind(605789) to 'translate-skill-guidance-page_1'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'bo' to 'chatLayout' (module 871367)
// - Updated imported property 'hf' to 'MessageSkeleton' (module 449904)
// - Updated imported property 'L' to 'SkillCardContent' (module 171032)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance.e3b9469f.js
         * chunkId: 64113
         * moduleId: 692568
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncSkillGuidanceCard_1 = require("async-skill-guidance-card_1") /*id: 171032*/;
  var messageSkeletonLoader = require("message-skeleton-loader") /*id: 449904*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  let l = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        TranslateGuidancePage: e
      } = await require.e("translate-skill-guidance-page") /*id: 29337*/.then(require.bind(require, "translate-skill-guidance-page_1") /*id: 605789*/);
      return {
        default: e
      };
    }
  }));
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
    fallback: reactJsxRuntimeCoreReexport.jsx(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
      children: reactJsxRuntimeCoreReexport.jsx(messageSkeletonLoader.MessageSkeleton, {})
    }),
    children: reactJsxRuntimeCoreReexport.jsx(l, {
      ...e
    })
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
    TranslateChatGuidancePlugin: function () {
      return d;
    }
  });
}