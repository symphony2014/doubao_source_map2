// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bx' to 'isRetryStatus'
// - Renamed export 'CR' to 'isNormalStatus'
// - Renamed export 'Cx' to 'isLarkDocType'
// - Renamed export 'Di' to 'isDesktopResourceType'
// - Renamed export 'Ln' to 'isUploadingStatus'
// - Renamed export 'Or' to 'isImageType'
// - Renamed export 'Q1' to 'isRemoteType'
// - Renamed export '_c' to 'filterEnabledRefs'
// - Renamed export 'u$' to 'isLinkType'
// - Renamed export 'zE' to 'isFileType'
// - Renamed export 'zj' to 'isDirectoryType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 117360
         */
module.exports = function (module, exports, require) {
  var receiveMessageBoxStatus = require("receive-message-box-status") /*id: 682494*/;
  let r = e => e.type === "image";
  let a = e => e.type === "file";
  let l = e => e.type === "link";
  let o = e => e.type === "remote";
  let s = e => e.type === "directory";
  let u = e => e.type === "desktop_resource";
  let c = e => e.type === "lark_doc";
  let d = e => e === receiveMessageBoxStatus.messageBoxStatus.Normal;
  let _ = e => e === receiveMessageBoxStatus.messageBoxStatus.Retry;
  let p = e => e === receiveMessageBoxStatus.messageBoxStatus.Uploading;
  let f = e => !e.disableRef;
  let m = e => e.filter(f);
  require.d(exports, {
    isRetryStatus: function () {
      return _;
    },
    isNormalStatus: function () {
      return d;
    },
    isLarkDocType: function () {
      return c;
    },
    isDesktopResourceType: function () {
      return u;
    },
    isUploadingStatus: function () {
      return p;
    },
    isImageType: function () {
      return r;
    },
    isRemoteType: function () {
      return o;
    },
    filterEnabledRefs: function () {
      return m;
    },
    isLinkType: function () {
      return l;
    },
    isFileType: function () {
      return a;
    },
    isDirectoryType: function () {
      return s;
    }
  });
}