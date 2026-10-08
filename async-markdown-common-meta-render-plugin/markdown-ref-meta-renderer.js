// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'markdownMetaRenderPlugin'
// - Resolved require(305922) to 'markdown-meta-render-plugin'
// - Renamed variable 'i' to 'markdownMetaRenderTypes'
// - Resolved require(912092) to 'markdown-meta-render-types'
// - Renamed variable 'a' to 'chatMetaTypes'
// - Resolved require(312169) to 'chat-meta-types'
// - Renamed variable 'l' to 'utf8EncodingUtils_1'
// - Resolved require(858081) to 'utf8-encoding-utils_1'
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 's' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'd' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(26176) to 'api-client-services'
// - Resolved require.e(43459) to 'semi-tooltip-popover'
// - Resolved require.bind(558696) to 'search-reference-component'
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'C5' to 'retryPromise' (module 374795)
// - Updated imported property 'B' to 'MetaRenderTypes' (module 912092)
// - Updated imported property 'fz' to 'MetaTypes' (module 312169)
// - Updated imported property 'K' to 'Utf8Utils' (module 858081)
// - Updated imported property 'X' to 'MetaRenderPlugin' (module 305922)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-markdown-common-meta-render-plugin.cced7776.js
         * chunkId: 26875
         * moduleId: 946510
         */
module.exports = function (module, exports, require) {
  var markdownMetaRenderPlugin = require("markdown-meta-render-plugin") /*id: 305922*/;
  var markdownMetaRenderTypes = require("markdown-meta-render-types") /*id: 912092*/;
  var chatMetaTypes = require("chat-meta-types") /*id: 312169*/;
  var utf8EncodingUtils_1 = require("utf8-encoding-utils_1") /*id: 858081*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryPromise(() => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("semi-tooltip-popover") /*id: 43459*/]).then(require.bind(require, "search-reference-component") /*id: 558696*/)).then(e => ({
    default: e.SearchRef
  }))));
  let p = [{
    match: () => true,
    pluginRender: e => {
      let {
        groupMetaInfo: t,
        messageText: n,
        message: r,
        options: i,
        onTrackEvent: a
      } = e;
      let {
        metaInfoList: l
      } = t;
      let s = reactCoreLibraryReexport.useMemo(() => l.map(e => {
        let {
          title: t,
          url: n,
          pos: r,
          website_name: i,
          insert_text: a,
          icon: l,
          doc_id: o,
          quota_type: s,
          summary: d
        } = e.data;
        return {
          title: t,
          url: n,
          pos: r,
          website_name: i,
          insert_text: a,
          icon: l,
          summary: d,
          doc_id: o,
          quota_show_type: s
        };
      }), []);
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: s.map((e, t, l) => reactJsxRuntimeCoreReexport.jsx(u, {
          data: e,
          text: n,
          message: r,
          refPosition: 0 + t,
          isLastRef: t === (l == null ? undefined : l.length) - 1,
          useNewUI: true,
          options: i,
          trackEvent: a
        }, t))
      });
    }
  }];
  let h = {
    strategy: markdownMetaRenderTypes.MetaRenderTypes.GROUP_RANGE,
    metaType: chatMetaTypes.MetaTypes.MetaType_Reference,
    getRange: e => {
      let {
        metaInfo: t,
        text: n
      } = e;
      return utf8EncodingUtils_1.Utf8Utils.posCalc(n, t.pos[0]);
    },
    Content: e => {
      let t = markdownMetaRenderPlugin.MetaRenderPlugin;
      return reactJsxRuntimeCoreReexport.jsx(t, {
        plugins: p,
        ...e
      });
    }
  };
  require.r(exports);
  require.d(exports, {
    ReferenceMetaRenderPlugin: function () {
      return h;
    }
  });
}