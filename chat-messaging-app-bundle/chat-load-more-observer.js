// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'hL' to 'ChatLoadMoreObserver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64980.009d7833.js
         * chunkId: 64980
         * moduleId: 213244
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "load-more-wrapper-dKyUVg",
      ref: t,
      children: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
        size: "middle"
      })
    });
  });
  function d(e) {
    let {
      className: t,
      style: n
    } = e;
    let {
      hasMore: r,
      inLoadingMore: l
    } = v(e);
    return reactJsxRuntimeCoreReexport.jsx(f, {
      hasMore: r,
      inLoadingMore: l,
      className: t,
      style: n
    });
  }
  let f = e => {
    let {
      hasMore: t,
      inLoadingMore: n
    } = e;
    let {
      inView: i,
      ref: o
    } = reactIntersectionObserver_1.useInView();
    let {
      chatViewRef: a
    } = chatRefsContext.useChatRefs();
    reactCoreLibraryReexport.useEffect(() => {
      if (i && t && !n) {
        var e;
        var r;
        if ((r = a.current) !== null && r !== undefined && (e = r.onLoadMore) !== null && e !== undefined) {
          e.call(r);
        }
      }
    }, [i, t, n]);
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(c, {
        ref: o
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        ref: o,
        style: {
          height: 1,
          width: "100%",
          opacity: 0,
          pointerEvents: "none"
        }
      });
    }
  };
  let v = e => {
    let {
      conversationId: t
    } = e;
    return chatMessageStoreFactory.createMessageStore(e => {
      return {
        hasMore: e.messageListStatusMap[t]?.hasMore || false,
        inLoadingMore: e.messageListStatusMap[t]?.inLoadingMore || false
      };
    }, deepEqualityUtil.deepEqual);
  };
  require.d(exports, {
    ChatLoadMoreObserver: function () {
      return d;
    }
  });
}