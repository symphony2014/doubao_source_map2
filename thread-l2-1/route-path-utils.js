// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F5' to 'isChatPath'
// - Renamed export 'Oe' to 'getDocIdFromPath'
// - Renamed export 'Vl' to 'isCurrentChatPath'
// - Renamed export 's$' to 'isDocPath'
// - Renamed export 'vM' to 'getEnterSource'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 930304
         */
module.exports = function (module, exports, require) {
  var queryStringUtils_2_1 = require("query-string-utils_2_1") /*id: 698435*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var aiDocCreateTracking = require("ai-doc-create-tracking") /*id: 86772*/;
  let o = e => /\/chat(\/(local_|main)?\d*)?(\?.*)?$/.test(e);
  let a = () => o(location.pathname);
  let s = e => {
    if (typeof window != "object") {
      return false;
    }
    let {
      pathname: t
    } = e ?? window.location;
    return /^\/doc\/(?!invite|public|review)[a-zA-Z0-9]+$/.test(t) || /^\/docx\/(?!invite|public|review)[a-zA-Z0-9]+$/.test(t);
  };
  let c = "enter_from";
  let d = e => {
    let t = location.pathname.split("/").slice(1).join("_");
    return storageWrapperWithFallback.SessionStorageWrapper.getItem(`${t}${e}`);
  };
  let u = () => {
    let n = queryStringUtils_2_1.queryStringUtils.parse(location.search);
    let l = d(c);
    return (n == null ? undefined : n[c]) ?? l ?? aiDocCreateTracking.clickChannels.DIRECT_ENTER;
  };
  let p = () => {
    let {
      pathname: e
    } = window.location;
    return (/\/docx?\/([\w]*)/.exec(e) || [])[1] || "";
  };
  require.d(exports, {
    isChatPath: function () {
      return o;
    },
    getDocIdFromPath: function () {
      return p;
    },
    isCurrentChatPath: function () {
      return a;
    },
    isDocPath: function () {
      return s;
    },
    getEnterSource: function () {
      return u;
    }
  });
}