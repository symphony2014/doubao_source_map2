// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Eg' to 'isEditable'
// - Renamed export 'L4' to 'isEnterRevising'
// - Renamed export '_L' to 'isEKeyPressed'
// - Renamed export 'nB' to 'getBlockTypeStatus'
// - Renamed export 'r8' to 'canShowRevising'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 83085
         */
module.exports = function (module, exports, require) {
  var editorModesBlockTypes = require("editor-modes-block-types") /*id: 738890*/;
  var keyboardKeyCodes = require("keyboard-key-codes") /*id: 73916*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  let s = e => {
    try {
      let [n, r] = e == null ? undefined : e.split(".");
      return parseInt(n, 10) > 4 && parseInt(r, 10) >= 31 || parseInt(n, 10) > 5;
    } catch (e) {
      return false;
    }
  };
  function d() {
    let {
      isPcTemplate: e,
      isLarkFeed: n,
      isInVC: r,
      isOpendoc: o,
      larkVersion: i,
      isAnnouncement: d,
      isMeetingNote: f,
      isLarkPcTabNext: h
    } = browserEnvironmentDetectionUtils.browserDetector;
    let _ = s(i) && r;
    return (e || n && !f && !d || _ || h) && !o && !userEnvironmentUtils.isAnonymousAccess() && docxFeatureFlags.isNotEmbedDocx() && !syncUrlBlockUtils.isSyncingActive();
  }
  let f = (e, n, r) => e && editorModesBlockTypes.allowedBlockTypes.includes(e) && d() ? r : n;
  let h = e => e.keyCode === keyboardKeyCodes.keyCodeMap.E && !e.altKey && !e.ctrlKey;
  let _ = e => e.config.editable && !e.config.get("revising");
  let p = (e, n) => n && h(n) && e.config.get("revising");
  require.d(exports, {
    isEditable: function () {
      return _;
    },
    isEnterRevising: function () {
      return p;
    },
    isEKeyPressed: function () {
      return h;
    },
    getBlockTypeStatus: function () {
      return f;
    },
    canShowRevising: function () {
      return d;
    }
  });
}