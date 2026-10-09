// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'chatHideEmptyBlockMap'
// - Resolved require(412432) to 'chat-hide-empty-block-map'
// - Renamed variable 'l' to 'messageContextDefinition'
// - Resolved require(786528) to 'message-context-definition'
// - Renamed variable 's' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'u' to 'creationTypeConstants'
// - Resolved require(432580) to 'creation-type-constants'
// - Renamed variable 'c' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'd' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'h' to 'messageImageContentRenderer'
// - Resolved require(284556) to 'message-image-content-renderer'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(2348) to 'video-player-xgplayer'
// - Resolved require.e(12575) to 'xgplayer-media-player'
// - Resolved require.e(64826) to 'media-player-i18n-download'
// - Resolved require.e(23641) to 'ui-components-modal-video'
// - Resolved require.bind(101648) to 'share-video-block'
// - Updated imported property 'UD' to 'useMessage' (module 786528)
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'C5' to 'retryPromise' (module 374795)
// - Updated imported property 'PO' to 'creationTypes' (module 432580)
// - Updated imported property 'U' to 'MessageImageContent' (module 284556)
// - Updated imported property 'Z' to 'hideEmptyBlockMap' (module 412432)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l0.92c0a8ab.js
         * chunkId: 99008
         * moduleId: 30758
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var chatHideEmptyBlockMap = require("chat-hide-empty-block-map") /*id: 412432*/;
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  let a = () => ({
    message: messageContextDefinition.useMessage()
  });
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var creationTypeConstants = require("creation-type-constants") /*id: 432580*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var messageImageContentRenderer = require("message-image-content-renderer") /*id: 284556*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryPromise(() => Promise.all([require.e("video-player-xgplayer") /*id: 2348*/, require.e("xgplayer-media-player") /*id: 12575*/, require.e("media-player-i18n-download") /*id: 64826*/, require.e("ui-components-modal-video") /*id: 23641*/]).then(require.bind(require, "share-video-block") /*id: 101648*/).then(e => ({
    default: e.ShareVideoBlock
  })))));
  let v = reactCoreLibraryReexport.memo(e => {
    var n;
    let {
      node: i,
      message: r
    } = e;
    let o = ((n = i.block.content) === null || n === undefined ? undefined : n.creation_block?.creations) || [];
    let l = reactCoreLibraryReexport.useMemo(() => o.reduce((e, t) => {
      if (e[e.length - 1]?.type !== t.type) {
        e.push({
          type: t.type,
          list: []
        });
      }
      e[e.length - 1].list.push(t);
      return e;
    }, []), [o]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: l.map((e, t) => {
        let {
          type: n,
          list: i
        } = e;
        if (n === creationTypeConstants.creationTypes.CreationTypeImage) {
          return reactJsxRuntimeCoreReexport.jsx(messageImageContentRenderer.MessageImageContent, {
            creationsImageList: i,
            message: r
          }, `${t}_${n}`);
        } else if (n === creationTypeConstants.creationTypes.CreationTypeVideo) {
          return reactJsxRuntimeCoreReexport.jsx(f, {
            creationsVideoList: i,
            message: r
          }, `${t}_${n}`);
        } else {
          return null;
        }
      })
    });
  });
  function m(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
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
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class g {
    constructor() {
      m(this, "nodeTypes", ["block_type:2074"]);
      m(this, "Content", v);
      m(this, "usePropsSelector", a);
      m(this, "useNodeWrapperClassName", () => r("flex w-full flex-col gap-20", chatHideEmptyBlockMap.hideEmptyBlockMap["hide-empty-block-type-10000"]));
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveCreationNodeRenderPlugin: function () {
      return g;
    }
  });
}