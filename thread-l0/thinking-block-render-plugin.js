// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'o' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'l' to 'receiveThinkingBlockContent'
// - Resolved require(363606) to 'receive-thinking-block-content'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'u' to 'chatThinkingBoxConfig'
// - Resolved require(474506) to 'chat-thinking-box-config'
// - Resolved require.e(21553) to 'katex-core-library'
// - Resolved require.e(80332) to 'core-js-polyfills'
// - Resolved require.e(43274) to 'mathjax-tex-renderer'
// - Resolved require.e(46473) to 'motion-layout-utilities'
// - Resolved require.e(50161) to 'thinking-box-renderer'
// - Resolved require.e(401) to 'ui-icon-library'
// - Resolved require.bind(920240) to 'receive-thinking-block-content-in-thinking-box'
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'W' to 'getThinkingBoxCfg' (module 474506)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l0.92c0a8ab.js
         * chunkId: 99008
         * moduleId: 791898
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var receiveThinkingBlockContent = require("receive-thinking-block-content") /*id: 363606*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function s(e) {
    return reactJsxRuntimeCoreReexport.jsx(receiveThinkingBlockContent.ReceiveThinkingBlockContent, {
      ...e,
      share: true
    });
  }
  var chatThinkingBoxConfig = require("chat-thinking-box-config") /*id: 474506*/;
  function c(e, t, n) {
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
  let d = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.all([require.e("katex-core-library") /*id: 21553*/, require.e("core-js-polyfills") /*id: 80332*/, require.e("mathjax-tex-renderer") /*id: 43274*/, require.e("motion-layout-utilities") /*id: 46473*/, require.e("thinking-box-renderer") /*id: 50161*/, require.e("ui-icon-library") /*id: 401*/]).then(require.bind(require, "receive-thinking-block-content-in-thinking-box") /*id: 920240*/).then(e => ({
      default: e.ReceiveThinkingBlockContentInThinkingBox
    }))
  })));
  let h = reactCoreLibraryReexport.memo(e => {
    let {
      useThinkingBox: t,
      ...n
    } = e;
    if (t) {
      return reactJsxRuntimeCoreReexport.jsx(d, {
        ...n
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(s, {
        ...n
      });
    }
  });
  class p {
    constructor() {
      c(this, "nodeTypes", ["block_type:10040 | thinking_block.scene:0", "block_type:10040 | thinking_block.scene:undefined"]);
      c(this, "Content", h);
      c(this, "usePropsSelector", chatThinkingBoxConfig.getThinkingBoxCfg);
      c(this, "useNodeWrapperClassName", () => "mb-12!");
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveThinkingBlockRenderPlugin: function () {
      return p;
    }
  });
}