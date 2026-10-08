// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'VN' to 'ccmDocUpgradeInfo'
// - Renamed export 'k' to 'uploadOldDocOffline'
// - Renamed export 'lP' to 'isUpgradeToDocx'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 12463
         */
module.exports = function (module, exports, require) {
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  let o = "ccm_doc_upgrade_info";
  let l = "upload_old_doc_offline_data";
  let s = boolDefaultGetterUtil.getDefaultBool("ccm.doc.upgrade_to_docx_client", false);
  require.d(exports, {
    ccmDocUpgradeInfo: function () {
      return o;
    },
    uploadOldDocOffline: function () {
      return l;
    },
    isUpgradeToDocx: function () {
      return s;
    }
  });
}