// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'asyncSkillGuidanceCard_1'
// - Resolved require(171032) to 'async-skill-guidance-card_1'
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'messageSkeletonLoader'
// - Resolved require(449904) to 'message-skeleton-loader'
// - Renamed variable 's' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable 'a' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Renamed variable 'l' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'u' to 'chatMaxWidthLayout'
// - Resolved require(871367) to 'chat-max-width-layout'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(19584) to 'module-federation-runtime'
// - Resolved require.e(57467) to 'flow-auth-space-sdk'
// - Resolved require.e(56853) to 'write-skill-guidance-page'
// - Resolved require.bind(717478) to 'write-guidance-page'
// - Resolved require.e(19584) to 'module-federation-runtime'
// - Resolved require.e(57467) to 'flow-auth-space-sdk'
// - Resolved require.e(56853) to 'write-skill-guidance-page'
// - Resolved require.bind(113456) to 'write-skill-guidance-page-component'
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'Tu' to 'getSourceValue' (module 583867)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'bo' to 'chatLayout' (module 871367)
// - Updated imported property 'hf' to 'MessageSkeleton' (module 449904)
// - Updated imported property 'L' to 'SkillCardContent' (module 171032)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance.e3b9469f.js
         * chunkId: 64113
         * moduleId: 699930
         */
module.exports = function (module, exports, require) {
  var asyncSkillGuidanceCard_1 = require("async-skill-guidance-card_1") /*id: 171032*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var messageSkeletonLoader = require("message-skeleton-loader") /*id: 449904*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        WriteGuidancePage: e
      } = await Promise.all([require.e("module-federation-runtime") /*id: 19584*/, require.e("flow-auth-space-sdk") /*id: 57467*/, require.e("write-skill-guidance-page") /*id: 56853*/]).then(require.bind(require, "write-guidance-page") /*id: 717478*/);
      return {
        default: e
      };
    }
  }));
  let f = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        WriteGuidancePageV2: e
      } = await Promise.all([require.e("module-federation-runtime") /*id: 19584*/, require.e("flow-auth-space-sdk") /*id: 57467*/, require.e("write-skill-guidance-page") /*id: 56853*/]).then(require.bind(require, "write-skill-guidance-page-component") /*id: 113456*/);
      return {
        default: e
      };
    }
  }));
  let h = e => chatFgStoreHooks.getSourceValue("image_guidance_page_chat_input_position", {
    source: chatStorageKeys.chatStorageKeys.tea,
    defaultValue: "bottom"
  }) === "center" ? reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
    fallback: reactJsxRuntimeCoreReexport.jsx(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
      children: reactJsxRuntimeCoreReexport.jsx(messageSkeletonLoader.MessageSkeleton, {})
    }),
    children: reactJsxRuntimeCoreReexport.jsx(f, {
      ...e
    })
  }) : reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
    fallback: reactJsxRuntimeCoreReexport.jsx(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
      children: reactJsxRuntimeCoreReexport.jsx(messageSkeletonLoader.MessageSkeleton, {})
    }),
    children: reactJsxRuntimeCoreReexport.jsx(d, {
      ...e
    })
  });
  class p extends asyncSkillGuidanceCard_1.SkillCardContent {
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
          value: h,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = h;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    WriteChatGuidancePlugin: function () {
      return p;
    }
  });
}