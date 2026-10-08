// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'fd' to 'searchRichMediaNodeRenderer'
// - Renamed export 'tj' to 'shareableRichMediaNodeRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 246422
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryPromise(() => Promise.all([require.e("video-player-xgplayer") /*id: 2348*/, require.e("media-source-playback-engine") /*id: 36277*/, require.e("video-player-engine") /*id: 43278*/, require.e("image-gallery-preview") /*id: 24845*/, require.e("semi-toast-date-utils") /*id: 71679*/]).then(require.bind(require, "search-rich-media-node-component") /*id: 392283*/).then(e => ({
    default: e.SearchRichMediaNode
  })))), () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "h-240 w-full"
  }));
  let u = e => {
    let {
      messageId: n,
      conversationId: l,
      replyId: i,
      logId: r,
      inView: u,
      node: s
    } = e;
    let c = s.block.content?.rich_media_block;
    if (c) {
      return reactJsxRuntimeCoreReexport.jsx(a, {
        inView: u,
        blockData: c,
        messageId: n,
        conversationId: l,
        replyId: i,
        logId: r
      });
    } else {
      return null;
    }
  };
  let s = reactCoreLibraryReexport.memo(u);
  let c = reactCoreLibraryReexport.memo(e => reactJsxRuntimeCoreReexport.jsx(u, {
    ...e,
    share: true
  }));
  require.d(exports, {
    searchRichMediaNodeRenderer: function () {
      return s;
    },
    shareableRichMediaNodeRenderer: function () {
      return c;
    }
  });
}