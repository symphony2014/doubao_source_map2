// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'nS' to 'isWikiHost'
// - Renamed export 'uC' to 'isSheetHost'
// - Renamed export 'wL' to 'isDocContentCopyable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 713546
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docActionManager = require("doc-action-manager") /*id: 445984*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  function c(e) {
    return e.get("hostBusiness");
  }
  function u(e) {
    if (typeof e == "string") {
      return e === "sheet";
    } else {
      return !!e && c(e) === "sheet";
    }
  }
  function a(e) {
    if (typeof e == "string") {
      return e === "wiki";
    } else {
      return c(e) === "wiki";
    }
  }
  function s(e) {
    let n = e == null ? undefined : e.get("copyable");
    let r = platformDocUtils.bU1(reduxStoreInitializer.reduxStore.getState())[docActionManager.actionConstants.DOCCONTENTCOPY];
    return !!n && !!r;
  }
  require.d(exports, {
    isWikiHost: function () {
      return a;
    },
    isSheetHost: function () {
      return u;
    },
    isDocContentCopyable: function () {
      return s;
    }
  });
}