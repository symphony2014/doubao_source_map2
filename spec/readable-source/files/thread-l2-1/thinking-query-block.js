// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'thinkingQueryBlock'
// - Renamed export 'R' to 'thinkingQueryView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 845270
         */
module.exports = function (module, exports, require) {
  var thinkingQueryItem = require("thinking-query-item") /*id: 860711*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var a = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M19 10.35c0 1.914-.866 4.02-2.336 6.003-1.317 1.777-3.016 3.308-4.664 4.343-1.649-1.035-3.347-2.566-4.664-4.343C5.866 14.371 5 12.264 5 10.35 5 6.218 8.205 3 12 3s7 3.218 7 7.35m2 0c0 4.98-4.43 10.072-8.544 12.402a.92.92 0 0 1-.912 0C7.43 20.422 3 15.33 3 10.35 3 5.186 7.03 1 12 1s9 4.186 9 9.35m-7.5.15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m2 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0",
      clipRule: "evenodd"
    })
  }), {}));
  var threadIconConfig = require("thread-icon-config") /*id: 928349*/;
  let c = e => {
    let {
      isBlockFinished: t,
      isBroken: n,
      blockContent: l
    } = e;
    let {
      summary: r,
      queries: c = []
    } = l ?? {};
    if (!t && n) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(thinkingQueryItem.ThinkingQueryItem, {
        title: r,
        loading: !t,
        query: c,
        hoverable: false,
        prefixIcon: reactJsxRuntimeCoreReexport.jsx(a, {
          className: threadIconConfig.iconConfig.icon
        }),
        showSuffixIcon: false
      });
    }
  };
  let d = e => {
    var t;
    let {
      contentBlock: i,
      message: r
    } = e;
    let a = (t = i == null ? undefined : i.is_finish) === null || t === undefined || t;
    let s = messageContentTypeAndStatusChecker.vlk(r);
    let d = (i == null ? undefined : i.content_obj) ?? {};
    return reactJsxRuntimeCoreReexport.jsx(c, {
      isBlockFinished: a,
      isBroken: s,
      blockContent: d
    });
  };
  require.d(exports, {
    thinkingQueryBlock: function () {
      return d;
    },
    thinkingQueryView: function () {
      return c;
    }
  });
}