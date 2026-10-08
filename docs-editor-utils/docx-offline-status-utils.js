// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'af' to 'getLarkVersion'
// - Renamed export 'ar' to 'isGlobalOffline'
// - Renamed export 'g5' to 'isDocxOfflineEnabled'
// - Renamed export 'yi' to 'isOfflineAuthEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 205871
         */
module.exports = function (module, exports, require) {
  var versionCompareUtil = require("version-compare-util") /*id: 147266*/;
  var docxOfflineService = require("docx-offline-service") /*id: 170752*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  function c() {
    return !!docxOfflineService.offlineService?.isOfflineEnabled;
  }
  function u() {
    return !!window.__OFFLINE__;
  }
  function a() {
    let e = navigator.userAgent.match(/Lark\/(\d+\.\d+\.\d+[\w\-]*)/);
    if (e && e.length > 1) {
      return e[1];
    } else {
      return "0.0.0";
    }
  }
  let s = a();
  function d() {
    return c() && boolDefaultGetterUtil.getDefaultBool("ccm.doc.storage_auth_for_attachement", false) && versionCompareUtil.compareVersions(s, "7.30.999");
  }
  require.d(exports, {
    getLarkVersion: function () {
      return a;
    },
    isGlobalOffline: function () {
      return u;
    },
    isDocxOfflineEnabled: function () {
      return c;
    },
    isOfflineAuthEnabled: function () {
      return d;
    }
  });
}