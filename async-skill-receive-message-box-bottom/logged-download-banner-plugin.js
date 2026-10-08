// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'a' to 'useRecommendWebToDesktop'
// - Resolved require(301549) to 'use-recommend-web-to-desktop'
// - Renamed variable 'o' to 'appInitAsyncUtils'
// - Resolved require(266268) to 'app-init-async-utils'
// - Renamed variable 'l' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(93626) to 'semi-overlay-components'
// - Resolved require.bind(542628) to 'logged-download-client-suggest-item'
// - Renamed variable 'c' to 'chatPlatformConstants'
// - Resolved require(166229) to 'chat-platform-constants'
// - Renamed variable 'd' to 'businessLayoutDownloadTypes'
// - Resolved require(642482) to 'business-layout-download-types'
// - Renamed variable 'p' to 'chatDownloadSuggestPlugin'
// - Resolved require(980997) to 'chat-download-suggest-plugin'
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'NO' to 'lazyInitRetry' (module 266268)
// - Updated imported property '_' to 'useRecommendData' (module 301549)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'X' to 'LayoutDownloadTypes' (module 642482)
// - Updated imported property 'Vv' to 'sourceConstants' (module 166229)
// - Updated imported property 'gJ' to 'positionTypes' (module 166229)
// - Updated imported property 'P' to 'downloadSuggestSymbol' (module 980997)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom.d95bd1e8.js
         * chunkId: 32003
         * moduleId: 417294
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var useRecommendWebToDesktop = require("use-recommend-web-to-desktop") /*id: 301549*/;
  var appInitAsyncUtils = require("app-init-async-utils") /*id: 266268*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = reactSuspenseWrapper.withSuspense(appInitAsyncUtils.lazyInitRetry(() => require.e("semi-overlay-components") /*id: 93626*/.then(require.bind(require, "logged-download-client-suggest-item") /*id: 542628*/)), () => reactJsxRuntimeCoreReexport.jsx("div", {}));
  var chatPlatformConstants = require("chat-platform-constants") /*id: 166229*/;
  var businessLayoutDownloadTypes = require("business-layout-download-types") /*id: 642482*/;
  var chatDownloadSuggestPlugin = require("chat-download-suggest-plugin") /*id: 980997*/;
  function m(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
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
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
  let f = e => {
    let {
      suggestList: n,
      actionBarComponentNode: o,
      message: l
    } = e;
    let {
      suggestLoading: p,
      suggestListComponentNode: m,
      suggestsLength: f
    } = n || {};
    let {
      controlRes: _,
      fetchData: g
    } = useRecommendWebToDesktop.useRecommendData();
    reactCoreLibraryReexport.useEffect(() => {
      if (isUndefinedCheck.isUndefined(_)) {
        g({
          type_list: [businessLayoutDownloadTypes.LayoutDownloadTypes.HeaderDownload, businessLayoutDownloadTypes.LayoutDownloadTypes.SuggestDownload]
        });
      }
    }, [_]);
    let v = !!(_ == null ? undefined : _.suggest_download?.show);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [o, m, v ? reactJsxRuntimeCoreReexport.jsx(u, {
        utmSource: chatPlatformConstants.sourceConstants.loggedSuggestDownloadBtn,
        chatCount: l.index ? Number(l.index) / 2 - 1 : 0,
        showFrom: chatPlatformConstants.positionTypes.after_answer
      }) : null]
    });
  };
  class _ {
    constructor() {
      m(this, "pluginIdentifier", chatDownloadSuggestPlugin.downloadSuggestSymbol);
      m(this, "Content", f);
    }
  }
  require.r(exports);
  require.d(exports, {
    LoggedDownloadBannerInChatReceiveMessageBottomPlugin: function () {
      return _;
    }
  });
}