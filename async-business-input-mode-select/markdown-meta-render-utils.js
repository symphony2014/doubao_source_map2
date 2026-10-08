// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MR' to 'hasAppletId'
// - Renamed export 'N_' to 'isValidUrl'
// - Renamed export 'Vl' to 'extractMetaInfo'
// - Renamed export '_B' to 'filterMetaObjects'
// - Renamed export '_O' to 'parseMarkdownLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-markdown-common-meta-render-plugin.cced7776.js
         * chunkId: 26875
         * moduleId: 80625
         */
module.exports = function (module, exports, require) {
  var chatMessageMetaTypeCheckers = require("chat-message-meta-type-checkers") /*id: 156228*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  let l = e => e.type ? {
    type: e.type,
    data: safeJsonUtils.safeParse(e.info, {})
  } : null;
  let o = e => e.map(l).filter(e => !!e);
  let s = e => e.match(/\[(?<title>.*)\]\((?<link>.*?)\)/) || {};
  let d = e => {
    let t = urlParamUtils.parseUrlSafe(e);
    return !!t && !!t.searchParams.get("appletId");
  };
  let c = (e, t) => {
    let n = urlParamUtils.parseUrlSafe(e);
    return !n || n.protocol === "sslocal:" && t !== chatMessageMetaTypeCheckers.searchTypes.SearchCtrip;
  };
  require.d(exports, {
    hasAppletId: function () {
      return d;
    },
    isValidUrl: function () {
      return c;
    },
    extractMetaInfo: function () {
      return l;
    },
    filterMetaObjects: function () {
      return o;
    },
    parseMarkdownLink: function () {
      return s;
    }
  });
}