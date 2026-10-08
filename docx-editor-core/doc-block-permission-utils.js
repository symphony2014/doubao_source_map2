// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Nb' to 'getGlobalState'
// - Renamed export 'Oz' to 'PERMISSION_CHANGE'
// - Renamed export 'Up' to 'SUPPORTED_BLOCKS'
// - Renamed export 'VB' to 'isDesktopEnabled'
// - Renamed export 'XY' to 'PermissionStatus'
// - Renamed export 'gb' to 'setGlobalState'
// - Renamed export 'to' to 'isNotMobile'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 954681
         */
module.exports = function (module, exports, require) {
  var r;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let s = [docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER, docBlockTypeConstants.blockTypeConstants.SHEET, docBlockTypeConstants.blockTypeConstants.MINDMAP, docBlockTypeConstants.blockTypeConstants.WHITEBOARD];
  (r = {})[r.SUCCESS = 0] = "SUCCESS";
  r[r.LIMIT_SINGLE = 9100] = "LIMIT_SINGLE";
  r[r.LIMIT_ALL = 9101] = "LIMIT_ALL";
  let c = r;
  let u = "userPermissionChange";
  let d = !browserEnvironmentDetectionUtils.browserDetector.isMobile;
  let h = !browserEnvironmentDetectionUtils.browserDetector.isMobile && !browserEnvironmentDetectionUtils.browserDetector.isH5 && !browserEnvironmentDetectionUtils.browserDetector.isFeed && !platformDocUtils.KNd();
  let f = true;
  let g = () => f;
  let p = e => {
    f = e;
  };
  require.d(exports, {
    getGlobalState: function () {
      return g;
    },
    PERMISSION_CHANGE: function () {
      return u;
    },
    SUPPORTED_BLOCKS: function () {
      return s;
    },
    isDesktopEnabled: function () {
      return h;
    },
    PermissionStatus: function () {
      return c;
    },
    setGlobalState: function () {
      return p;
    },
    isNotMobile: function () {
      return d;
    }
  });
}