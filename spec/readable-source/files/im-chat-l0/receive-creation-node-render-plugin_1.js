// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'r' to 'messageContextDefinition'
// - Resolved require(786528) to 'message-context-definition'
// - Renamed variable 'u' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 's' to 'creationTypeConstants'
// - Resolved require(432580) to 'creation-type-constants'
// - Renamed variable 'c' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'd' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(2348) to 'video-player-xgplayer'
// - Resolved require.e(12575) to 'xgplayer-media-player'
// - Resolved require.e(64826) to 'media-player-i18n-download'
// - Resolved require.e(69669) to 'video-player-icons'
// - Resolved require.bind(991381) to 'video-generation-message-block'
// - Resolved require.e(10691) to 'semi-ui-upload-utils'
// - Resolved require.bind(473789) to 'image-message-block-component'
// - Renamed variable 'm' to 'chatHideEmptyBlockMap'
// - Resolved require(412432) to 'chat-hide-empty-block-map'
// - Updated imported property 'UD' to 'useMessage' (module 786528)
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'C5' to 'retryPromise' (module 374795)
// - Updated imported property 'PO' to 'creationTypes' (module 432580)
// - Updated imported property 'Z' to 'hideEmptyBlockMap' (module 412432)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 564374
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var messageContextDefinition = require("message-context-definition") /*id: 786528*/;
  let o = {};
  let a = () => ({
    message: messageContextDefinition.useMessage(),
    imageBlockProps: o.imageBlockProps
  });
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var creationTypeConstants = require("creation-type-constants") /*id: 432580*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryPromise(() => Promise.all([require.e("video-player-xgplayer") /*id: 2348*/, require.e("xgplayer-media-player") /*id: 12575*/, require.e("media-player-i18n-download") /*id: 64826*/, require.e("video-player-icons") /*id: 69669*/]).then(require.bind(require, "video-generation-message-block") /*id: 991381*/)).then(e => ({
    default: e.VideoBlock
  }))));
  let p = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryPromise(() => require.e("semi-ui-upload-utils") /*id: 10691*/.then(require.bind(require, "image-message-block-component") /*id: 473789*/)).then(e => ({
    default: e.ImageBlock
  }))));
  let _ = reactCoreLibraryReexport.memo(e => {
    var n;
    let {
      node: l,
      message: i,
      imageBlockProps: r
    } = e;
    let o = ((n = l.block.content) === null || n === undefined ? undefined : n.creation_block?.creations) || [];
    let a = reactCoreLibraryReexport.useMemo(() => o.reduce((e, t) => {
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
      children: a.map((e, t) => {
        let {
          type: n,
          list: o
        } = e;
        if (n === creationTypeConstants.creationTypes.CreationTypeImage) {
          return reactJsxRuntimeCoreReexport.jsx(p, {
            creationsImageList: o,
            message: i,
            blockId: l.block.block_id,
            ...r
          }, `${t}_${n}`);
        } else if (n === creationTypeConstants.creationTypes.CreationTypeVideo) {
          return reactJsxRuntimeCoreReexport.jsx(f, {
            creationsVideoList: o,
            message: i
          }, `${t}_${n}`);
        } else {
          return null;
        }
      })
    });
  });
  var chatHideEmptyBlockMap = require("chat-hide-empty-block-map") /*id: 412432*/;
  function h(e, t, n) {
    var l;
    if ((t = typeof (l = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var l = n.call(e, t || "default");
        if (typeof l != "object") {
          return l;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? l : l + "") in e) {
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
      h(this, "nodeTypes", ["block_type:2074"]);
      h(this, "Content", _);
      h(this, "usePropsSelector", a);
      h(this, "useNodeWrapperClassName", () => i("flex w-full flex-col gap-20", chatHideEmptyBlockMap.hideEmptyBlockMap["hide-empty-block-type-10000"]));
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveCreationNodeRenderPlugin: function () {
      return g;
    }
  });
}