// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'r' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'o' to 'chatThinkingBoxConfig'
// - Resolved require(474506) to 'chat-thinking-box-config'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(68975) to 'toast-ui-semijs'
// - Resolved require.e(2177) to 'conversation-management'
// - Resolved require.e(56055) to 'thinking-block-components'
// - Resolved require.bind(363606) to 'receive-thinking-block-content'
// - Resolved require.e(21553) to 'katex-core-library'
// - Resolved require.e(80332) to 'core-js-polyfills'
// - Resolved require.e(43274) to 'mathjax-tex-renderer'
// - Resolved require.e(46473) to 'motion-layout-utilities'
// - Resolved require.e(2177) to 'conversation-management'
// - Resolved require.e(50161) to 'thinking-box-renderer'
// - Resolved require.e(47737) to 'ui-components-messaging'
// - Resolved require.bind(920240) to 'receive-thinking-block-content-in-thinking-box'
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'C5' to 'retryPromise' (module 374795)
// - Updated imported property 'W' to 'getThinkingBoxCfg' (module 474506)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 814179
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var chatThinkingBoxConfig = require("chat-thinking-box-config") /*id: 474506*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function u(e, t, n) {
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
  let s = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryPromise(() => Promise.all([require.e("toast-ui-semijs") /*id: 68975*/, require.e("conversation-management") /*id: 2177*/, require.e("thinking-block-components") /*id: 56055*/]).then(require.bind(require, "receive-thinking-block-content") /*id: 363606*/)).then(e => ({
    default: e.ReceiveThinkingBlockContent
  }))));
  let c = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => Promise.all([require.e("katex-core-library") /*id: 21553*/, require.e("core-js-polyfills") /*id: 80332*/, require.e("mathjax-tex-renderer") /*id: 43274*/, require.e("motion-layout-utilities") /*id: 46473*/, require.e("conversation-management") /*id: 2177*/, require.e("thinking-box-renderer") /*id: 50161*/, require.e("ui-components-messaging") /*id: 47737*/]).then(require.bind(require, "receive-thinking-block-content-in-thinking-box") /*id: 920240*/).then(e => ({
    default: e.ReceiveThinkingBlockContentInThinkingBox
  }))));
  let d = reactCoreLibraryReexport.memo(e => {
    let {
      useThinkingBox: t,
      ...n
    } = e;
    if (t) {
      return reactJsxRuntimeCoreReexport.jsx(c, {
        ...n
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(s, {
        ...n
      });
    }
  });
  class v {
    constructor() {
      u(this, "nodeTypes", ["block_type:10040 | thinking_block.scene:0", "block_type:10040 | thinking_block.scene:undefined"]);
      u(this, "Content", d);
      u(this, "usePropsSelector", chatThinkingBoxConfig.getThinkingBoxCfg);
      u(this, "useNodeWrapperClassName", () => "mb-12!");
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveThinkingBlockRenderPlugin: function () {
      return v;
    }
  });
}