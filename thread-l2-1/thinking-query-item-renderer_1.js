// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'ThinkingQueryBlock'
// - Renamed export 'y' to 'ThinkingQueryDisplay'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 713296
         */
module.exports = function (module, exports, require) {
  var thinkingQueryItem = require("thinking-query-item") /*id: 860711*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var magicIcon = require("magic-icon") /*id: 882435*/;
  var threadIconConfig = require("thread-icon-config") /*id: 928349*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      isBlockFinished: t,
      isBroken: n,
      blockContent: l
    } = e;
    let {
      summary: c,
      start: d,
      end: u
    } = l || {};
    let p = functionInvoker.invoke(() => d && u && !t ? `${d} \u{2192} ${u}` : "");
    if (!t && n) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(thinkingQueryItem.ThinkingQueryItem, {
        title: c,
        loading: !t,
        desc: p,
        hoverable: false,
        prefixIcon: reactJsxRuntimeCoreReexport.jsx(magicIcon.MagicIcon, {
          className: threadIconConfig.iconConfig.icon
        }),
        showSuffixIcon: false
      });
    }
  };
  let d = e => {
    var t;
    let {
      message: i,
      contentBlock: r
    } = e;
    let o = (t = r == null ? undefined : r.is_finish) === null || t === undefined || t;
    let a = messageContentTypeAndStatusChecker.vlk(i);
    let d = (r == null ? undefined : r.content_obj) ?? {};
    return reactJsxRuntimeCoreReexport.jsx(c, {
      isBlockFinished: o,
      isBroken: a,
      blockContent: d
    });
  };
  require.d(exports, {
    ThinkingQueryBlock: function () {
      return d;
    },
    ThinkingQueryDisplay: function () {
      return c;
    }
  });
}