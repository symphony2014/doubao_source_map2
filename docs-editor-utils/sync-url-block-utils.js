// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'JB' to 'getParentToken'
// - Renamed export 'UN' to 'isSyncingActive'
// - Renamed export 'sw' to 'getUrlToken'
// - Renamed export 'tO' to 'getBlockByToken'
// - Renamed export 'uU' to 'resolveBlockId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 299195
         */
module.exports = function (module, exports, require) {
  var urlParserUtil = require("url-parser-util") /*id: 14217*/;
  function i() {
    return !!location.pathname.includes("/sync/") || location.pathname.includes("/blank/") && !!l(false);
  }
  function l() {
    var n;
    var r;
    if (arguments.length > 0 && arguments[0] !== undefined) {
      arguments[0];
    }
    let o = (r = window) === null || r === undefined ? undefined : (n = r.User) === null || n === undefined ? undefined : n.syncedConfig?.parentToken;
    return o || "";
  }
  function c() {
    return urlParserUtil.parseUrl(window.location.href, true).token;
  }
  function u(e) {
    let n = e.getBlockModelsByRecordId(c());
    if (n.length) {
      return n[0];
    } else {
      return null;
    }
  }
  function a(e) {
    if (i()) {
      return u(e).id;
    } else {
      return e.rootBlockId;
    }
  }
  require.d(exports, {
    getParentToken: function () {
      return l;
    },
    isSyncingActive: function () {
      return i;
    },
    getUrlToken: function () {
      return c;
    },
    getBlockByToken: function () {
      return u;
    },
    resolveBlockId: function () {
      return a;
    }
  });
}