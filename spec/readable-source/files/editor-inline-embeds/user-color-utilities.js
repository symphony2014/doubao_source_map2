// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$T' to 'resetUserColor'
// - Renamed export '$h' to 'getColorByUserId'
// - Renamed export 'fq' to 'getUserColorId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 511417
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  let {
    resetUserColor: s
  } = platformDocUtils.mPG;
  let a = () => docTokenManager.getDocToken(location.href);
  let c = () => docxFeatureFlags.isR0Enabled() ? {
    getToken: a,
    useNewPalette: true
  } : {};
  let d = e => platformDocUtils.mPG.getUserColorId(e, c());
  let u = e => platformDocUtils.mPG.getColorByUserId(e, c());
  require.d(exports, {
    resetUserColor: function () {
      return s;
    },
    getColorByUserId: function () {
      return u;
    },
    getUserColorId: function () {
      return d;
    }
  });
}