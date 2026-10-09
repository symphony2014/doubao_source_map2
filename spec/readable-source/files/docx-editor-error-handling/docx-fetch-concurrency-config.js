// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$K' to 'isDefined'
// - Renamed export 'S$' to 'getFetchMode'
// - Renamed export 'm6' to 'getFetchConfig'
// - Renamed export 'w4' to 'getShortId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 858864
         */
module.exports = function (module, exports, require) {
  var fetchSyncConstants = require("fetch-sync-constants") /*id: 290082*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  var docxFetchConcurrencyKeys = require("docx-fetch-concurrency-keys") /*id: 177633*/;
  function c(e) {
    if (e) {
      return e.slice(-12);
    } else {
      return "";
    }
  }
  function d() {
    let e = {
      preFetch: true,
      concurrency: 3,
      noWorker: !!browserEnvironmentDetectionUtils.browserDetector.isMobile
    };
    return Object.assign(e, boolDefaultGetterUtil.getDefaultBool(docxFetchConcurrencyKeys.fetchConfigKeys.FETCH_SLICE_CONFIG, e));
  }
  function u(e) {
    return e !== undefined;
  }
  function h(e, i) {
    if (docxFeatureFlags.isNotMobileOrL() && !browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      return fetchSyncConstants.fetchModes.AroundV2;
    } else if (e) {
      return fetchSyncConstants.fetchModes.SPREAD;
    } else {
      return fetchSyncConstants.fetchModes.TOP_BOTTOM;
    }
  }
  require.d(exports, {
    isDefined: function () {
      return u;
    },
    getFetchMode: function () {
      return h;
    },
    getFetchConfig: function () {
      return d;
    },
    getShortId: function () {
      return c;
    }
  });
}